const classNames = {
    TODO_ITEM: 'todo-container',
  };
  
  const list = document.getElementById('notes');
  
  function newTodo() {
    const todoText = prompt("Enter TODO");
    let li = document.createElement('li');
    addStyle(classNames.TODO_ITEM, li);
    let span = document.createElement('span');
    addStyle(classNames.TODO_TEXT, span);
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    addStyle(classNames.TODO_CHECKBOX, checkBox);
  
  
  
  
    // if the user doesn't enter a TODO -> break out of the program 
    if (todoText.length === 0) {
      alert('I dont think you are blind, please enter some text')
      return false;
    } else {
      li.appendChild(document.createTextNode(' ' + todoText));
    }
    list.appendChild(li);
    li.appendChild(span);
    li.appendChild(checkBox);
  
  function addStyle(selector, property) {
    property.setAttribute('class', selector);
  }}