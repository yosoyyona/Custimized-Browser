const createUserForm = document.getElementById("create-user")
const userInput = createUserForm.querySelector("input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"
const CAPITALIZE_CLASSNAME = "capitalize"

const USERNAME_KEY = "username"

function usernameSubmit(event) {
  event.preventDefault()
  createUserForm.classList.add(HIDDEN_CLASSNAME)
  createUserForm.style.display = "none"
  const username = userInput.value
  localStorage.setItem(USERNAME_KEY, username)
  showGreeting(username)
}

function showGreeting(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME)
  greeting.classList.add(CAPITALIZE_CLASSNAME)
  createUserForm.style.display = "none"
  greeting.innerText = `¡hola ${username}✨!`
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null) {
  createUserForm.classList.remove(HIDDEN_CLASSNAME)
  createUserForm.addEventListener("submit", usernameSubmit)
} else showGreeting(savedUsername)

