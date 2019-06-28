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

function getNextTaskNumber() {
  const taskListItems = document.querySelectorAll('.list-group-item');
  if (!taskListItems) return 1;

  return taskListItems.length + 1;
}

function addTask(e) {
  const li = document.createElement('li');
  li.className = 'list-group-item';
  const taskText = taskTemplate + getNextTaskNumber();
  li.appendChild(document.createTextNode(taskText));
  taskList.appendChild(li);
  setTaskInLS(taskText);
}

function removeTask(e) {
  if (!taskList.firstChild) return;
  taskList.lastChild.remove();
}

function clearTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}
