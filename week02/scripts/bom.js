const userInput = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');
const li = document.createElement('li');
const deleteButton = document.createElement('button');

li.textContent = userInput.value;
deleteButton.textContent = '❌';

li.append(deleteButton);
list.append(li);