import $b from "./main.js";

$b(() => todoList());

const todoList = () => {
  addTodo();
  removeAll();
  changeCheckedStatus();
};

const addTodo = () => {
  $b(".add-todo").on("click",() => {
    let todo = document.querySelector('.task').value;
    $b("ul").append(`<li>${todo}
      <input type="checkbox" checked  value=""> not done
      <input type="checkbox" value=""> done</li>`);});
};

const removeAll = () => {
  $b(".remove-all").on("click",() => {
    $b("ul").empty();});
};
