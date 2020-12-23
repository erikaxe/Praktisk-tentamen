import UI from "./ui.js";

const ui = new UI();

/************************************* Load todo lists from JSON when page is loaded *************************************/
document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  ui.getData().then((data) => {
    console.log(data);
    console.log("json loaded");
    let html = `
    <li class="list-group-item">
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="flexCheckDefault">
        <h6>${data.todos[0].todoString}</h6>
        <i class="fas fa-trash-alt"></i>
    </div>
        
    </li>
    <li class="list-group-item">
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="flexCheckDefault">
        <h6>${data.todos[1].todoString}</h6>
        <i class="fas fa-trash-alt"></i>
    </div>
        
    </li>
    <li class="list-group-item">
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="flexCheckDefault">
        <h6>${data.todos[2].todoString}</h6>
        <i class="fas fa-trash-alt"></i>
    </div>
        
    </li>
    <li class="list-group-item">
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="flexCheckDefault">
        <h6>${data.todos[3].todoString}</h6>
        <i class="fas fa-trash-alt"></i>
    </div>
        
    </li>
    `;
    ui.list.innerHTML = ui.list.innerHTML + html;
  });
});

/************************************* Add todo list *************************************/
ui.taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let todo = [];
  todo.push(ui.formControl.value);
  const htmlCode = `

  <li class="list-group-item">
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="flexCheckDefault">
        <h6>${ui.formControl.value}</h6>
        <i class="fas fa-trash-alt"></i>
    </div>
        
    </li>
    `;

  ui.list.innerHTML = ui.list.innerHTML + htmlCode;
  ui.formControl.value = "";
  console.log(todo);
});
/************************************* Delete todo list *************************************/
class App {
  deleteList(target) {
    if (target.className === "fas fa-trash-alt") {
      target.parentElement.parentElement.remove();
    }
  }
}
document.getElementById("list").addEventListener("click", function (e) {
  //Instantiate UI
  const app = new App();
  //Delete li
  app.deleteList(e.target);
  /* //Show message
  app.showAlert("List Removed!", "success"); */
  e.preventDefault();
});

/* const app = new App();

app.renderToDOM(); */

/* 
<div class="card-placeholder">
        <div class="card-top"></div>
        <div class="card-info">
            <div class="name-cont">
                <h6 class="name-name">Name:</h6><p class="card-input-name">${ui.taskForm.value}</p>
            </div>
        </div>
    </div>
*/
