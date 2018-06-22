export default class {
  constructor() {
    this.data = null;
  }

  get() {
    return JSON.parse(this.data).token;
  }

  set(data) {
    this.data = data;
  }

  stringify() {
    return JSON.stringify(this.data);
  }
}
