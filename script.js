const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const addTodoButton = document.querySelector("#add-button");

function addTask() {
  if (inputBox.value === "") {
    alert("Please enter text to add a task");
  } else {
    let task = document.createElement("li");
    task.innerHTML = inputBox.value;
    listContainer.appendChild(task);
  }
}

addTodoButton.addEventListener("click", addTask);
