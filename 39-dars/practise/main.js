"use strict";

const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const list_el = document.querySelector("#tasks");
const h1 = document.querySelector("h1");
const delete_all = document.querySelector("#delete_all");

let date = new Date().getDate(),
  month = new Date().getMonth() + 1,
  year = new Date().getFullYear(),
  hour = new Date().getHours();

h1.innerHTML = `Task List Inserted: ${date}.${
  month < 10 ? "0" + month : month
}.${year}`;

let tasksValues = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value.trim() === "") {
    alert("You must write any task!");
  } else if (tasksValues.indexOf(input.value.toLowerCase()) !== -1) {
    alert("This value has already added!");
  } else if (Number(input.value)) {
    alert("you must write string value!");
  } else {
    tasksValues.push(input.value);
    updateTask();
  }
});

function updateTask() {
  const task_el = document.createElement("div");
  task_el.classList.add("task");

  const task_content_el = document.createElement("div");
  task_content_el.classList.add("content");

  task_el.appendChild(task_content_el);

  const task_input_el = document.createElement("input");
  task_input_el.classList.add("text");
  task_input_el.type = "text";
  task_input_el.value = input.value;
  task_input_el.setAttribute("readonly", "readonly");

  task_content_el.appendChild(task_input_el);

  const task_actions_el = document.createElement("div");
  task_actions_el.classList.add("actions");

  const task_edit_el = document.createElement("button");
  task_edit_el.classList.add("edit");
  task_edit_el.innerText = "Edit";

  const task_delete_el = document.createElement("button");
  task_delete_el.classList.add("delete");
  task_delete_el.innerText = "Delete";

  const task_complete_el = document.createElement("button");
  task_complete_el.classList.add("complete");
  task_complete_el.innerText = "Complete";

  task_actions_el.appendChild(task_edit_el);
  task_actions_el.appendChild(task_delete_el);
  task_actions_el.appendChild(task_complete_el);

  task_el.appendChild(task_actions_el);

  list_el.appendChild(task_el);

  input.value = "";

  // edit button
  task_edit_el.addEventListener("click", function () {
    if (task_edit_el.innerText.toLowerCase() == "edit") {
      task_edit_el.innerText = "Save";
      task_input_el.removeAttribute("readonly");
      task_input_el.focus();
    } else {
      task_edit_el.innerText = "Edit";
      task_input_el.setAttribute("readonly", "readonly");
    }
  });

  // delete button;
  task_delete_el.addEventListener("click", function () {
    list_el.removeChild(task_el);
  });

  // complete button
  task_complete_el.addEventListener("click", function () {
    task_input_el.classList.add("line-through");
    task_input_el.setAttribute("readonly", "readonly");
  });

  // all delete button
  delete_all.style.display = "block";
  delete_all.addEventListener("click", function () {
    delete_all.style.display = "none";
    list_el.innerHTML = null;
  });
}
