'use strict';

export default class Form {
  constructor(parent) {
    this.el = this.render();
    this.parent = parent;
    this.parent.append(this.el);
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

    this.input = form.querySelector('input.form-control');

    return form;
  }

  set onsubmit(handler) {
    this.el.onsubmit = (e) => {
      e.preventDefault();
      const inputValue = this.input.value.trim();

      if (inputValue) {
        handler(inputValue);
        this.el.reset();
      }
    }
  }


}