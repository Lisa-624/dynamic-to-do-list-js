// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a task
  function addTask() {
    const taskText = taskInput.value.trim(); // Get and trim the input value

    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Add click event to remove the task
    removeBtn.onclick = function () {
      taskList.removeChild(listItem);
    };

    // Append button to list item, then to list
    listItem.appendChild(removeBtn);
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';
  }

  // Event listener for button click
  addButton.addEventListener('click', addTask);

  // Event listener for Enter key
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Optional: Call addTask() on DOMContentLoaded (if preloading tasks)
  // addTask(); // Only needed if initializing with predefined tasks
});
