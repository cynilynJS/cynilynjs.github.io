const loginDiv = document.querySelector("#login-div");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const userDiv = document.querySelector("#user-div");
const greeting = document.querySelector("#greeting");

const header = document.querySelector("header");
const footer = document.querySelector("footer");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginDiv.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello, ${username}!`;
  userDiv.classList.remove(HIDDEN_CLASSNAME);
  header.classList.remove(HIDDEN_CLASSNAME);
  footer.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginDiv.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
