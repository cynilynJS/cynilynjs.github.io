const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODO_KEY = "todos";
let toDos = [];

function saveTodos() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodos();
}

function paintTodo(newTodoObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteButton = document.createElement("button");

  li.id = newTodoObj.id;
  span.innerText = newTodoObj.text;
  deleteButton.innerText = "✖";
  deleteButton.addEventListener("click", deleteTodo);

  li.appendChild(deleteButton);
  li.appendChild(span);

  todoList.appendChild(li);
}

function submitToDo(event) {
  event.preventDefault();

  const newTodo = todoInput.value;
  todoInput.value = "";

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  toDos.push(newTodoObj);

  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", submitToDo);

const savedTodos = localStorage.getItem(TODO_KEY);

if (savedTodos !== null) {
  const parsedToDos = JSON.parse(savedTodos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}
