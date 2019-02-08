import $b from "./main.js";

$b(() => todoList());

const todoList = () => {
  addTodo();
  removeAll();
};

const addTodo = () => {
  $b(".add-todo").on("click",() => {
    let todo = $b.value('.task');
    let radioName = Math.random();
    if (todo !== "") {
      $b("ul").append(`<li>${todo}</li>
        <div class="radio-buttons">
          <input type="radio" checked name=${radioName}>not done</input>
          <input type="radio" name=${radioName}> done</input>
        </div>`);
        $b("p").remove();
      clearInput();
    } else {
      $b("ul").append("<p>Can not add blank item!</p>");
    }
    });
};

const removeAll = () => {
  $b(".remove-all").on("click",() => {
    $b("ul").empty();});
};

const clearInput = () => {
  document.querySelector('.task').value = "";
};
