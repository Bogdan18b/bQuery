import $b from "./main.js";

$b(() => todoList());

const todoList = () => {
  addTodo();
  removeAll();
};

const addTodo = () => {
  $b(".add-todo").on("click",() => {
    let todo = $b.value('.task');
    $b("ul").append(`<li>${todo}
      <input type="radio" checked  name=${todo}> not done
      <input type="radio" name=${todo}> done</li>`);
    clearInput();
    });
};

const removeAll = () => {
  $b(".remove-all").on("click",() => {
    $b("ul").empty();});
};

const clearInput = () => {
  document.querySelector('.task').value = "";
};
