/* This file is the main file of todoApp */

import './assets/css/component-styles.css';
import './global_style.css';
import todoList, { Todo } from './js/classes';
import { createTodoItem, getElement, deleteCompleted } from './js/modules'; // get Element arrow function return a DOM element, It use getElemenetById
//Initializations

const todoInput = getElement('new-todo'); //get main input of the app, where the user input  todo-Description. wWe get this element to add and Eventlistener
const clearCompleted = getElement('clear-completed'); //clearCompleted Will be a DOM element (button), when user click on it, all todo checked as completed Will be deleted.
if (todoList.todos) {
  todoList.todos = todoList.todos.map((todo) => {
    let reBornTodo = Todo.fromJson(todo);
    createTodoItem(reBornTodo);
    return reBornTodo;
  });
}
//

todoInput.addEventListener('keyup', (e) => {
  /* Add keyup listener, when it occurs the code will check if released key was Enter and if element value is not '' */
  if (e.code === 'Enter' && todoInput.value != '') {
    const todo = new Todo(todoInput.value); /* Create a new todo */
    todoList.addTodo(todo); /* add  todo to todoList*/
    createTodoItem(todo); /* Create and append an todo Element to the DOM */
    todoInput.value = '';
  }
});

clearCompleted.addEventListener('click', () => {
  let allDeleted = deleteCompleted();
  let ul = document.getElementById('todo-list');
  for (const deleted of allDeleted) {
    for (const child of ul.children) {
      if (child.id === `li-${deleted}`) {
        child.remove();
        todoList.setLocalStorage();
      }
    }
  }
});

console.log(todoList);
