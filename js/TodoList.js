'use strict';
import TodoItem from './TodoItem.js';

export default class TodoList {
  constructor(parent) {
    this.parent = parent;
    this.el = this.render();
    this.parent.append(this.el);
    this.listen();
    this.items = new Map();
  }

  render() {
    const ul = document.createElement('ul');
    this.el = ul;
    ul.classList.add('todo-list');
    return ul;
  }

  listen() {
    this.el.onclick = e => {
      if (this.deleteHandler &&
          e.target.classList.contains('btn-danger')) {
        this.deleteHandler(+e.target.parentElement.dataset.id);
      } else if (this.toggleHandler &&
          e.target.classList.contains('btn-success')) {
        this.toggleHandler(+e.target.parentElement.dataset.id);
      }
    };
  }

  add(task) {
    const todoItem = new TodoItem(task);
    this.items.set(task.id, todoItem);
    this.el.append(todoItem.el);
  }

  remove(id) {
    this.items.get(id).el.remove();
    this.items.delete(id);
  }

  set ondelete(handler) {
    this.deleteHandler = handler;
  }

  toggle(id) {
    const task = this.items.get(id).el;
    const taskLabelStyle = task.querySelector('h3').style;
    const btnSuccess = task.querySelector('.btn-success');

    if (taskLabelStyle.textDecoration) {
      taskLabelStyle.textDecoration = null;
      btnSuccess.textContent = 'Завершить';
    } else {
      taskLabelStyle.textDecoration = 'line-through';
      btnSuccess.textContent = 'Отменить';
    }
  }

  set ontoggle(handler) {
    this.toggleHandler = handler;
  }
}