'use strict';
import TodoItem from './TodoItem.js';

export default class TodoList {
  constructor(parent) {
    this.parent = parent;
    this.parent.append(this.render());
  }

  render() {
    const ul = document.createElement('ul');
    this.el = ul;
    ul.classList.add('todo-list');
    return ul;
  }

  add(str) {
    const item = new TodoItem(str);
    this.el.append(item);
  }
}