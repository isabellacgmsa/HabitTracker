// Variáveis globais
var habits = []; // Array para armazenar os hábitos
var habitInput = document.getElementById('habit-input');
var descriptionInput = document.getElementById('description-input');
var goalInput = document.getElementById('goal-input');
var frequencyInput = document.getElementById('frequency-input');
var habitList = document.getElementById('habit-list');

// Função para adicionar um novo hábito à lista
function addHabit() {
  var habitName = habitInput.value;
  var description = descriptionInput.value;
  var goal = goalInput.value;
  var frequency = frequencyInput.value;
  
  if (habitName !== '') {
    var habit = {
      name: habitName,
      description: description,
      goal: goal,
      frequency: frequency
    };
    
    habits.push(habit);
    clearInputs();
    renderHabits();
  }
}

// Função para remover um hábito da lista
function removeHabit(index) {
  habits.splice(index, 1);
  renderHabits();
}

// Função para limpar os campos de entrada
function clearInputs() {
  habitInput.value = '';
  descriptionInput.value = '';
  goalInput.value = '';
  frequencyInput.value = '';
}

// Função para renderizar a lista de hábitos
function renderHabits() {
  // Limpa a lista de hábitos existentes
  habitList.innerHTML = '';
  
  // Cria um novo elemento <li> para cada hábito
  for (var i = 0; i < habits.length; i++) {
    var habitItem = document.createElement('li');
    habitItem.classList.add('habit-item');
    
    var habitName = document.createElement('h3');
    habitName.textContent = habits[i].name;
    
    var habitDescription = document.createElement('p');
    habitDescription.textContent = 'Descrição: ' + habits[i].description;
    
    var habitGoal = document.createElement('p');
    habitGoal.textContent = 'Meta: ' + habits[i].goal;
    
    var habitFrequency = document.createElement('p');
    habitFrequency.textContent = 'Frequência: ' + habits[i].frequency;
    
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.classList.add('delete-button');
    
    // Adiciona o evento de clique para remover o hábito correspondente
    deleteButton.addEventListener('click', (function(index) {
      return function() {
        removeHabit(index);
      };
    })(i));
    
    habitItem.appendChild(habitName);
    habitItem.appendChild(habitDescription);
    habitItem.appendChild(habitGoal);
    habitItem.appendChild(habitFrequency);
    habitItem.appendChild(deleteButton);
    
    habitList.appendChild(habitItem);
  }
}

// Evento para adicionar um hábito quando o botão é clicado
document.getElementById('add-button').addEventListener('click', addHabit);

// Evento para adicionar um hábito quando a tecla Enter é pressionada
habitInput.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) { // Código da tecla Enter
    addHabit();
  }
});
