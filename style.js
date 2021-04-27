// add complete & incomplete
const lists = document.querySelector(".todo-lists");

lists.addEventListener("click", function (e) {
  if (e.target.tagName == "INPUT" && e.target.type == "checkbox") {
    const li = e.target.previousElementSibling;
    if (e.target.checked) {
      li.classList.add("todo-complete");
      lists.removeChild(li.parentElement);
      lists.appendChild(li.parentElement);
    } else {
      li.classList.remove("todo-complete");
      lists.prepend(li.parentElement);
    }
  }
});

// add todo functionality
const addTodoForm = document.forms.add_todo;

addTodoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const newTodo = addTodoForm.firstElementChild.value;

  // creating list
  const div = document.createElement("DIV");
  const li = document.createElement("LI");
  const checkbox = document.createElement("INPUT");

  //add classes
  div.classList.add("todo-item");
  li.classList.add("todo-list");
  checkbox.classList.add("todo-checkbox");

  //add textContents
  li.textContent = newTodo;
  checkbox.type = "checkbox";

  // append to lists:
  div.appendChild(li);
  div.appendChild(checkbox);

  if (li.textContent != "") {
    lists.prepend(div);
  }
});
