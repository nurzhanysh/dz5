function addTodo() {
    const todoList = document.getElementById('todo-list');
  
    const newTodoItem = document.createElement('div');
    newTodoItem.className = 'todo-item';
  

    const todoText = document.createElement('span');
    todoText.className = 'todo-text';
    todoText.innerText = 'New Todo Task';
  
    newTodoItem.appendChild(todoText);
  
    const editButton = createEditButton(todoText);
    newTodoItem.appendChild(editButton);
  
    const deleteButton = createDeleteButton(newTodoItem);
    newTodoItem.appendChild(deleteButton);
    todoList.appendChild(newTodoItem);
  }
  
  function createDeleteButton(todoItem) {
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'delete'; 
    deleteButton.onclick = function() {
      todoItem.remove(); 
    };
  
    return deleteButton;
  }
  
  function createEditButton(todoTextElement) {
    const editButton = document.createElement('button');
    editButton.innerText = 'edit';
  
    editButton.onclick = function() {
      const newText = prompt('Edit your todo:', todoTextElement.innerText);
      if (newText !== null) {
        todoTextElement.innerText = newText;
      }
    };
  
    return editButton;
  }
  