import api from "./api.js";

class UI {
  //Class variables
  constructor() {
    this.taskForm = document.getElementById("task-form");
    this.formControl = document.querySelector(".form-control");
    this.list = document.querySelector(".list");
    this.listItem = document.querySelector(".list-group-item");
  }

  //Fetch JSON
  getData() {
    const res = fetch(api.apiAdress).then((res) => res.json());
    return res;
  }
}

export default UI;
