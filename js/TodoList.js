'use strict';
import TodoItem from './TodoItem.js';

export default class TodoList {
  constructor(parent) {
    this.parent = parent;
    this.el = this.render();
    this.parent.append(this.el);
    this.items = new Map();
  }

  render() {
    const ul = document.createElement('ul');
    this.el = ul;
    ul.classList.add('todo-list');
    return ul;
  }

  add(task) {
    const todoItem = new TodoItem(task);
    this.items.set(task.id, todoItem);
    this.el.append(todoItem.el);
  }

  remove(id) {
    this.items.get(id).el.remove();
    this.items.delete(id)
  }

  set ondelete(handler) {
    this.el.onclick = e => {
      if (e.target.classList.contains('btn-danger')) {
        handler(+e.target.parentElement.dataset.id)
      }
    }
  }
}