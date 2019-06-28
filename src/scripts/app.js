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
  removeTaskFromLS(e.target.parentElement.parentElement);
}

function clearTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  clearTasksFromLS();
}

function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task) {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(task));
    taskList.appendChild(li);
  });
}

function setTaskInLS(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTaskFromLS(taskItem) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.pop();
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTasksFromLS() {
  localStorage.clear();
}
