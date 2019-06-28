const form = document.querySelector('#task-form');
const taskList = document.querySelector('.list-group');
const removeBtn = document.querySelector('.remove-task');
const clearBtn = document.querySelector('.clear-tasks');
const taskTemplate = 'Task number #';

loadEventListeners();

function loadEventListeners() {
  document.addEventListener('DOMContentLoaded', getTasks);
  form.addEventListener('submit', addTask);
  removeBtn.addEventListener('click', removeTask);
  clearBtn.addEventListener('click', clearTasks);
}
