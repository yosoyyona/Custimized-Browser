// import { v4 as uuidv4 } from 'uuid'

const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")

const TODOS_KEY = "todos"
let toDos = []

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo(event) {
  const li = event.target.parentElement
  li.remove()
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
  saveToDos()
}

function showToDo(newToDo) {
  const li = document.createElement("li")
  li.id = newToDo.id
  const span = document.createElement("span")
  span.innerText = newToDo.text
  const btn = document.createElement("button")
  btn.innerText = "✖️"
  btn.addEventListener("click", deleteToDo)
  li.appendChild(span)
  li.appendChild(btn)
  toDoList.appendChild(li)
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