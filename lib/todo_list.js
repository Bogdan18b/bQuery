import $b from "./main.js";

$b(() => todoList() );

const todoList = () => {
  addTodo("buy milk");
};

const addTodo = (name) => {
  $b("button").on("click",() => $b("ul").append(`<li>${name}</li>`));
};
