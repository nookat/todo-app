import Form from './Form.js';
import TodoList from './TodoList.js';
import Task from './Task.js';

const tasks = [
  {
    id: 1,
    task: 'Помыть посуду',
    done: true,
  },
  {
    id: 2,
    task: 'Вынести мусор',
    done: true,
  },
  {
    id: 3,
    task: 'Захватить мир',
    done: false,
  },
];

const contentBlock = document.querySelector('.content');
const form = new Form(contentBlock);
const todoList = new TodoList(contentBlock);

tasks.forEach(task => {
  todoList.add(task);
});

addTask('first task');
addTask('se task');
addTask('th task');

console.log(tasks);

// Handlers
form.onsubmit = addTask;
todoList.ondelete = removeTask;

function addTask(str) {
  const task = new Task(str);
  tasks.push(task);
  todoList.add(task);
}

function removeTask(id) {
  const index = tasks.findIndex(task => task.id === id);

  if (index < 0) return;
  tasks.splice(index, 1);
  todoList.remove(id);
}

