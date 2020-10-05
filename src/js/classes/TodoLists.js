export class TodoList {
  _todos;
  constructor() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
  }

  set todos(newTodos) {
    this._todos = newTodos;
  }

  get todos() {
    return this._todos;
  }

  addTodo(todo) {
    this._todos.push(todo);
    this.setLocalStorage();
  }

  checkTodo(todo) {
    todo.isDone = true;
  }
  deleteTodo(todoId) {
    this.todos = this.todos.filter((todo) => todo.id != todoId);
    this.setLocalStorage();
  }
  deleteCompleted() {
    console.log(this.todos);
    let allDeleted = [];
    this.todos = this.todos.filter((todo) => {
      if (todo.isDone) {
        allDeleted.push(todo.id);
      }
      return !todo.isDone;
    });
    return allDeleted;
  }

  setLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
