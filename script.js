const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const addTodoButton = document.querySelector("#add-button");

function addTask() {
  if (inputBox.value === "") {
    alert("Please enter text to add a task");
  } else {
    let task = document.createElement("li");
    task.innerHTML = inputBox.value;

    let closeIcon = document.createElement("span");
    closeIcon.innerHTML = "\u00d7";

    listContainer.appendChild(task);
    task.appendChild(closeIcon);
  }
  inputBox.value = "";
  saveData();
}

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function displayTasks() {
  listContainer.innerHTML = localStorage.getItem("data");
}

addTodoButton.addEventListener("click", addTask);

listContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    saveData();
  } else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
    saveData();
  }
});

displayTasks();
