const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")

const TODOS_KEY = "todos"
let toDos = []


function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo(event) {
  const div = event.target.parentElement
  div.remove()
  toDos = toDos.filter(toDo => toDo.id !== parseInt(div.id))
  saveToDos()
}

function showToDo(newToDo) {
  const div = document.createElement("div")
  div.id = newToDo.id
  const span = document.createElement("span")
  span.innerText = newToDo.text
  const btn = document.createElement("button")
  btn.innerText = "✖️"
  btn.addEventListener("click", deleteToDo)
  div.appendChild(span)
  div.appendChild(btn)
  toDoList.appendChild(div)
}

function handleToDoSubmit(event) {
  event.preventDefault()
  const newToDo = toDoInput.value
  toDoInput.value = ""
  const newToDoObj = {
    text: newToDo,
    id: Date.now()
  }
  toDos.push(newToDoObj)
  showToDo(newToDoObj)
  saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)

if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos)
  toDos = parsedToDos
  parsedToDos.forEach(showToDo)
}