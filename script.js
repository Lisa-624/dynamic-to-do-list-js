// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a task
  function addTask() {
    const taskText = taskInput.value.trim(); // Get and trim input value

    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Create a remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn'); // Using classList.add as required

    // Add event to remove the task when button is clicked
    removeBtn.onclick = function () {
      taskList.removeChild(listItem);
    };

    // Append remove button to list item, then add item to the list
    listItem.appendChild(removeBtn);
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';
  }

  // Add event listener for "Add Task" button
  addButton.addEventListener('click', addTask);

  // Allow adding task with Enter key
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});

