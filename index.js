// Select  elements
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// Function to add a new to-do item
function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText === '') return; // Don't add empty tasks
  
  // Create a new list item
  const li = document.createElement('li');
  li.classList.add('flex', 'justify-between', 'items-center', 'border-b', 'p-2', 'mb-2');

  // Create text element
  const span = document.createElement('span');
  span.textContent = todoText;
  li.appendChild(span);

  // Edit Button
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.classList.add('bg-yellow-500', 'text-white', 'p-1', 'ml-2');
  editButton.addEventListener('click', () => editTodoItem(span));
  li.appendChild(editButton);

  // Delete Button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('bg-red-500', 'text-white', 'p-1', 'ml-2');
  deleteButton.addEventListener('click', () => deleteTodoItem(li));
  li.appendChild(deleteButton);

  // Append the new task to the list
  todoList.appendChild(li);
  todoInput.value = ''; // Clear the input field after adding the item
}

// Function to edit a to-do item
function editTodoItem(span) {
  const newText = prompt("Edit your task:", span.textContent);
  if (newText !== null && newText.trim() !== '') {
    span.textContent = newText;
  }
}

// Function to delete a to-do item
function deleteTodoItem(li) {
  todoList.removeChild(li);
}

// Event listener for the Add button
addButton.addEventListener('click', addTodo);

// Optionally, listen for 'Enter' key to add a to-do
todoInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTodo();
});
