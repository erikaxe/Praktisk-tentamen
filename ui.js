import api from "./api.js";

class UI {
  constructor() {
    /* this.todo = []; */
    this.button = document.querySelector(".button");
    this.taskForm = document.getElementById("task-form");
    this.formControl = document.querySelector(".form-control");

    this.list = document.querySelector(".list");
  }
  getData() {
    const res = fetch(api.apiAdress).then((res) => res.json());
    return res;
  }
}

export default UI;
