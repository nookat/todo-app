import Form from './Form.js';
import TodoList from './TodoList.js';

const contentBlock = document.querySelector('.content');
const form = new Form(contentBlock);
const todoList = new TodoList(contentBlock);
console.log(form, todoList);