export default class Task {
  constructor(str) {
    this.id = Math.random();
    this.task = str;
    this.done = false;
  }
}