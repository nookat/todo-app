'use strict';

export default class Form {
  constructor(parent) {
    this.parent = parent;
    this.parent.append(this.render());
  }

  render() {
    const form = document.createElement('form');
    form.classList.add('form-add-todo');
    form.innerHTML = `
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Enter todo" aria-label="Enter todo" aria-describedby="addTodo">
        <button class="btn btn-outline-secondary" type="submit" id="addTodo">Add</button>
      </div>
    `;

    return form;
  }

  submit() {

  }
}