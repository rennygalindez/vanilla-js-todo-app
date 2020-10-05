import todoList from '../classes';

export const getElement = (elementId) =>
  document.getElementById(
    /* To get elements from the document by ID */
    elementId,
  );
export const createAnElememt = (elementType) =>
  document.createElement(elementType);

//

const setTodoCheck = (element, todo) =>
  element.addEventListener('click', (e) => {
    todo.isDone = !todo.isDone;
    const todoLiItem = getElement(`li-${todo.id}`);
    todoLiItem.classList.toggle('completed');
  });

export const deleteTodo = (element, todo) =>
  element.addEventListener('click', (e) => {
    const todoLiItem = getElement(`li-${todo.id}`);
    todoLiItem.remove();
    todoList.deleteTodo(todo.id);
  });
//
export const deleteCompleted = () => todoList.deleteCompleted();
export const createTodoItem = (todo) => {
  /* I think this is a fat function, I have to improve it */
  const todoListEL = getElement('todo-list');
  const liItemContainer = createAnElememt('div');
  liItemContainer.innerHTML = `
        <li class="${todo.isDone ? 'completed' : ''}" id="li-${todo.id}">
                <div class="view">
                    <input 
                    class="toggle" type="checkbox" ${
                      todo.isDone ? 'checked' : ''
                    } id="radio-${todo.id}">
                    <label id="label-${todo.id}">${todo.description}</label>
                    <button id="button-${todo.id}" class="destroy"></button>
                </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>
    `;
  todoListEL.append(liItemContainer.firstElementChild);
  let radio = getElement(`radio-${todo.id}`);
  let button = getElement(`button-${todo.id}`);
  setTodoCheck(radio, todo);
  deleteTodo(button, todo);
};
