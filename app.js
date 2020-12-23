import UI from "./ui.js";

const ui = new UI();

/************************************* Load todo lists from JSON when page is loaded *************************************/
document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  ui.getData().then((data) => {
    const html = `
    
    <li class="list-group-item">
        <div class="form-check">
            <div>
                <input class="form-check-input" type="checkbox" id="flexCheckDefault" >
                <h6>${data.todos[0].todoString}</h6>
            </div>
            <i class="fas fa-trash-alt"></i>
        </div>  
    </li>
    <li class="list-group-item">
        <div class="form-check">
            <div>
                <input class="form-check-input" type="checkbox" id="flexCheckDefault">
                <h6>${data.todos[1].todoString}</h6>
            </div>
            <i class="fas fa-trash-alt"></i>
        </div>   
    </li>
    <li class="list-group-item">
        <div class="form-check">
            <div>
                <input class="form-check-input" type="checkbox" id="flexCheckDefault">
                <h6>${data.todos[2].todoString}</h6>
            </div>
            <i class="fas fa-trash-alt"></i>
        </div>
    </li>
    <li class="list-group-item">
        <div class="form-check">
            <div>
                <input class="form-check-input" type="checkbox" id="flexCheckDefault">
                <h6>${data.todos[3].todoString}</h6>
            </div>
            <i class="fas fa-trash-alt"></i>
        </div>
    </li>
    `;

    //Push html to ul
    ui.list.innerHTML = ui.list.innerHTML + html;
  });
});

/************************************* Add new todo list on submit *************************************/
ui.taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //Validate inputfield
  if (ui.formControl.value == "") {
    //If input empty send placeholder alert
    ui.formControl.placeholder = "Field must be filled";
    return;
  } else {
    //Revert back to original placeholder
    ui.formControl.placeholder = "Enter todo";
  }

  //html for list to be submited
  const htmlCode = `

    <li class="list-group-item">
        <div class="form-check">
            <div>
                <input class="form-check-input" type="checkbox" id="flexCheckDefault">
                <h6>${ui.formControl.value}</h6>
            </div>
            <i class="fas fa-trash-alt"></i>
        </div>
    </li>
    `;

  //Push html after submit
  ui.list.innerHTML = ui.list.innerHTML + htmlCode;

  //Reset input field
  ui.formControl.value = "";
});

/************************************* Delete todo list *************************************/
class App {
  //Target li to be deleted
  deleteList(target) {
    if (target.className === "fas fa-trash-alt") {
      target.parentElement.parentElement.remove();
    }
  }
}

ui.list.addEventListener("click", function (e) {
  //Instantiate App
  const app = new App();
  //Delete li
  app.deleteList(e.target);

  e.preventDefault();
});
