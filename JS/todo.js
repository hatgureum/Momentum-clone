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
  const span = document.createElement("span");
  const btn = document.createElement("button");
  span.innerText = newTodo.text;
  btn.innerText = "X";
  btn.addEventListener("click", onClickRemoveListItem);
  li.id = newTodo.id;
  li.appendChild(span);
  li.appendChild(btn);
  todo_list.appendChild(li);
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
