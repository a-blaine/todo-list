const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const addTodoButton = document.querySelector("#add-button");
const clearAllButton = document.querySelector("#clear-button");
const pendingTasks = document.querySelector("#pending-tasks");
let totalTasks = 0;

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

    addPendingTasks();
  }
  inputBox.value = "";
  saveData();
}

function addPendingTasks() {
  totalTasks++;
  pendingTasks.innerHTML = totalTasks;
  saveData();
}

function removePendingTasks() {
  totalTasks--;
  pendingTasks.innerHTML = totalTasks;
  saveData();
}

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
  localStorage.setItem("number", pendingTasks.innerHTML);
}

function displayTasks() {
  listContainer.innerHTML = localStorage.getItem("data");
  pendingTasks.innerHTML = localStorage.getItem("number");
}

function deleteAllTasks() {
  listContainer.innerHTML = "";
  totalTasks = 0;
  pendingTasks.innerHTML = totalTasks;
  saveData();
}

addTodoButton.addEventListener("click", addTask);

clearAllButton.addEventListener("click", deleteAllTasks);

listContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");

    if (event.target.classList.contains("checked")) {
      removePendingTasks();
    } else {
      addPendingTasks();
    }

    saveData();
  } else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
    removePendingTasks();
    saveData();
  }
});

displayTasks();
