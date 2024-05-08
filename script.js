document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");
  
    addButton.addEventListener("click", function() {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
      }
    });
  
    function addTask(taskText) {
      const li = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", function() {
        if (this.checked) {
          li.classList.add("completed");
        } else {
          li.classList.remove("completed");
        }
      });
  
      const label = document.createElement("label");
      label.innerText = taskText;
  
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Elimina";
      deleteButton.addEventListener("click", function() {
        li.remove();
      });
  
      li.appendChild(checkbox);
      li.appendChild(label);
      li.appendChild(deleteButton);
      taskList.appendChild(li);
    }
  });
  