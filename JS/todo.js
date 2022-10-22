const todo_form = document.querySelector("#todo-form");
const todo_input = document.querySelector("#todo-form input");
const todo_list = document.querySelector("#todo-list");
const todo_btn = document.querySelector("#todo-list button");

let todos = [];

function onSubmitTodo(event) {
  event.preventDefault();

  const newTodo = {
    text: todo_input.value,
    id: new Date().getTime(),
  };

  todo_input.value = "";

  todos.push(newTodo);
  paintTodo(newTodo);
  saveTodo();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const btn_checkBox = document.createElement("input");
  const span = document.createElement("span");
  const btn_delete = document.createElement("button");

  btn_checkBox.type = "checkbox";

  li.classList.add("todo__li");
  btn_checkBox.classList.add("todo__checkBox");
  span.classList.add("todo__text");
  btn_delete.classList.add("todo__delete");
  btn_delete.classList.add("hidden");

  span.innerText = newTodo.text;
  btn_delete.innerText = "❌";

  li.addEventListener("mouseenter", onMouseEnterListItem);
  li.addEventListener("mouseleave", onMouseLeaveListItem);
  btn_checkBox.addEventListener("click", onClickCheckBox);
  btn_delete.addEventListener("click", onClickRemoveListItem);

  li.id = newTodo.id;
  li.appendChild(btn_checkBox);
  li.appendChild(span);
  li.appendChild(btn_delete);
  todo_list.appendChild(li);
}

function onMouseEnterListItem(event) {
  const li = event.target;
  const btn_delete = li.querySelector(".todo__delete");

  btn_delete.classList.remove("hidden");
}

function onMouseLeaveListItem(event) {
  const li = event.target;
  const btn_delete = li.querySelector(".todo__delete");

  btn_delete.classList.add("hidden");
}

function onClickCheckBox(event) {
  const li = event.target.parentElement;
  li.classList.toggle("todo__li-line");
}

function onClickRemoveListItem(event) {
  const li = event.target.parentElement;
  todos = todos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodo();
  li.remove();
}

function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

todo_form.addEventListener("submit", onSubmitTodo);

const parsedTodos = JSON.parse(localStorage.getItem("todos"));
if (parsedTodos) {
  parsedTodos.forEach((item) => {
    paintTodo(item);
  });
  todos = parsedTodos;
}
