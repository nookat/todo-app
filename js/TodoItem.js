'use strict';

export default class TodoItem {
  constructor(task) {
    this.el = this.render(task);
  }

  render(taskObj) {
    const li = document.createElement('li');
    li.classList.add('todo-list__item', 'mb-2');
    li.dataset.id = taskObj.id;

    const h3 = document.createElement('h3');
    h3.classList.add('todo-list__name');
    h3.textContent = taskObj.task;

    const buttonSuccess = document.createElement('button');
    buttonSuccess.classList.add('btn', 'btn-success');
    buttonSuccess.textContent = 'Завершить';

    const buttonDanger = document.createElement('button');
    buttonDanger.classList.add('btn', 'btn-danger');
    buttonDanger.textContent = 'Удалить';

    li.append(h3, buttonSuccess, buttonDanger);
    return li;
  }
}