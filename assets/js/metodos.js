let tasks = [
  { description: "Limpiar cocina", completed: false },
  { description: "Limpiar patio", completed: false },
  { description: "Pasear a mi mascota", completed: false },
];

document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
  updateCounters();
});

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const description = taskInput.value.trim();
  if (description !== "") {
    tasks.push({ description, completed: false });
    taskInput.value = "";
    renderTasks();
    updateCounters();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
  updateCounters();
}

function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
  updateCounters();
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";
    li.innerHTML = `
            ${task.description} 
            <button onclick="deleteTask(${index})">Borrar</button>
            <button class="toggle" onclick="toggleTaskCompletion(${index})">
                ${task.completed ? "Desmarcar" : "Completar"}
            </button>
        `;
    taskList.appendChild(li);
  });
}

function updateCounters() {
  const totalTasks = document.getElementById("totalTasks");
  const completedTasks = document.getElementById("completedTasks");
  totalTasks.textContent = tasks.length;
  completedTasks.textContent = tasks.filter((task) => task.completed).length;
}
