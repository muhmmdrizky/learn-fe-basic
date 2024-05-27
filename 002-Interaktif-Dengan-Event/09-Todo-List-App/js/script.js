// Untuk menampung data-data object yang diinput user
const todos = [];

// Custom event
const RENDER_EVENT = "render-todo";

document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.getElementById("form");
  submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addToDo();
  });
});

// Fungsi untuk membuat Id
const generateId = () => {
  return +new Date();
};

// Fungsi untuk generate object dari data yang diinput
const generateTodoObject = (id, task, timestamp, isCompleted) => {
  return {
    id,
    task,
    timestamp,
    isCompleted,
  };
};

// Fungsi tambah todo
const addToDo = () => {
  const textToDo = document.getElementById("title").value;
  const timestamp = document.getElementById("date").value;

  const generatedID = generateId();
  const todoObject = generateTodoObject(generatedID, textToDo, timestamp, false);
  todos.push(todoObject);

  document.dispatchEvent(new Event(RENDER_EVENT));
};

// Fungsi membuat todo
const makeToDo = (todoObject) => {
  const textTitle = document.createElement("h2");
  textTitle.innerText = todoObject.task;

  const textTimestamp = document.createElement("p");
  textTimestamp.innerText = todoObject.timestamp;

  const textContainer = document.createElement("div");
  textContainer.classList.add("inner");
  textContainer.append(textTitle, textTimestamp);

  const container = document.createElement("div");
  container.classList.add("item", "shadow");
  container.append(textContainer);
  container.setAttribute("id", `todo-${todoObject.id}`);

  // Undo button
  if (todoObject.isCompleted) {
    const undoButton = document.createElement("button");
    undoButton.classList.add("undo-button");

    undoButton.addEventListener("click", function () {
      undoTaskFromCompleted(todoObject.id);
    });

    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-button");
  }

  return container;
};

document.addEventListener(RENDER_EVENT, function () {
  //   console.log(todos);
  const uncompletedTODOList = document.getElementById("todos");
  uncompletedTODOList.innerHTML = "";

  for (const todoItem of todos) {
    const todoElement = makeToDo(todoItem);
    uncompletedTODOList.append(todoElement);
  }
});
