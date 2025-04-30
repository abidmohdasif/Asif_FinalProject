button = document.getElementById("submit");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("priority");
const input3 = document.getElementById("input3");
const taskManager = document.getElementById("taskmanager");

let tasks = [];
let taskId = 1;

button.addEventListener('click', () => {
    if (input1.value.trim() === "") {
        alert("Task is Invalid");
        return;
    }
    // it wont work if you dont write anything
    const newTask = {
        id: taskId++,
        name: input1.value,
        priority: input2.value,
        isImportant: input3.checked,
        isCompleted: false,
        date: new Date().toLocaleDateString()
    };

    // the object 

    tasks.push(newTask);
    console.log(JSON.stringify(tasks));
    displayTasks();
    // push
    input1.value = "";
    input2.value = "Low";
    input3.checked = false;
    // clearing eveything
});

function displayTasks() {
    taskManager.innerHTML = "";

    tasks.forEach(task => {
        const taskDiv = document.createElement("div");

        const taskInfo = document.createElement("div");
        taskInfo.innerHTML = `
        <strong>${task.name}</strong> <br>
        Priority: ${task.priority}  <br>
        Added: ${task.date}
        `
//printing it out
        if (task.isCompleted) {
            taskInfo.style.textDecoration = "line-through";
        }

        const buttonsDiv = document.createElement("div");
        taskDiv.style.backgroundColor = task.isImportant ? "rgba(241, 41, 41, 0.616)" : "white";

        const completeButton = document.createElement("button");
        completeButton.textContent = task.isCompleted ? "Undo" : "Complete";
        completeButton.addEventListener('click', () => {
            task.isCompleted = !task.isCompleted;
            console.log(JSON.stringify(tasks));
            displayTasks();
        });
//complete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.style.marginLeft = "5px";
        deleteButton.addEventListener('click', () => {
            tasks = tasks.filter(t => t.id !== task.id);
            console.log(JSON.stringify(tasks));
            displayTasks();
        });
//delete button
        buttonsDiv.appendChild(completeButton);
        buttonsDiv.appendChild(deleteButton);

        taskDiv.appendChild(taskInfo);
        taskDiv.appendChild(buttonsDiv);
        taskManager.appendChild(taskDiv);
//appending everything
        
    });
}
