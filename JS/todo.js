const todo_form = document.querySelector("#todo-form");
const todo_input = document.querySelector("#todo-form input");
const todo_list = document.querySelector("#todo-list");
const todo_btn = document.querySelector("#todo-list button");

function onSubmitTodo(event) {
  event.preventDefault();
  const newTodo = todo_input.value;
  todo_input.value = "";

  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");
  span.innerText = newTodo;
  btn.innerText = "X";
  li.appendChild(span);
  li.appendChild(btn);
  todo_list.appendChild(li);
}

function onClickRemoveListItem(event) {
  console.log(event);
}
todo_form.addEventListener("submit", onSubmitTodo);
todo_btn.addEventListener("click", onClickRemoveListItem);
