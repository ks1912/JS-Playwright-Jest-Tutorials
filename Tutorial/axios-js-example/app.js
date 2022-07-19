import "regenerator-runtime/runtime";
import axios from "axios";

// ...

const BASE_URL = "https://jsonplaceholder.typicode.com";

const getTodoItems = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/todos?_limit=5`);
    const todoItems = response.data;
    console.log(`GET: Here's the list of todos`, todoItems);
    return todoItems;
  } catch (errors) {
    console.error(errors);
  }
};

// ...

const createTodoElement = (item) => {
  const todoElement = document.createElement("li");

  todoElement.appendChild(document.createTextNode(item.title));

  return todoElement;
};

const updateTodoList = (todoItems) => {
  const todoList = document.querySelector("ul");

  if (Array.isArray(todoItems) && todoItems.length > 0) {
    todoItems.map((todoItem) => {
      todoList.appendChild(createTodoElement(todoItem));
    });
  } else if (todoItems) {
    todoList.appendChild(createTodoElement(todoItems));
  }
};

const main = async () => {
  updateTodoList(await getTodoItems());
};

main();
