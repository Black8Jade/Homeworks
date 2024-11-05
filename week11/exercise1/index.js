const addTaskButton = document.getElementById('button');
const taskInput = document.getElementById('newtask');
const taskList = document.getElementById('tasklist');

function addTask(event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    taskItem.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });

    taskList.appendChild(taskItem);
    taskInput.value = '';
}

addTaskButton.addEventListener('click', addTask);



