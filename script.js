document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load tasks from Local Storage on page load
  loadTasks();

  // Add task on button click
  addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      addTask(taskText);
      taskInput.value = '';
    } else {
      alert('Please enter a task.');
    }
  });

  // Add task on Enter key
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
      } else {
        alert('Please enter a task.');
      }
    }
  });

  // Function to load tasks from Local Storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // false = don't re-save to LS
  }

  // Function to add a task to the DOM and optionally to Local Storage
  function addTask(taskText, save = true) {
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');

    // Remove task from DOM and Local Storage
    removeBtn.onclick = function () {
      taskList.removeChild(listItem);
      removeFromLocalStorage(taskText);
    };

    listItem.appendChild(removeBtn);
    taskList.appendChild(listItem);

    // Save to Local Storage if required
    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
  }

  // Function to remove a task from Local Storage
  function removeFromLocalStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }
});


