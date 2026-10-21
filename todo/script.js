const inputbox = document.getElementById("task-input");
const addButton = document.getElementById("add-btn");
const taskList = document.getElementById("list");

let editTask = null;

function addTask() {
    debugger;
    if(inputbox.value === ""){
        alert("You must write something!")
    }
   

    if (editTask !== null) {
        editTask.firstChild.textContent = inputbox.value;
        editTask = null;
        addButton.textContent = "Add Task";
        addButton.classList.remove("update-btn");
        inputbox.value = "";
        // saveData();
        return;
    }

    else{
        let li = document.createElement("li");

        li.textContent = inputbox.value;

        //edit button
        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        //for adding css
        editBtn.classList.add("edit-btn");

        editBtn.addEventListener("click", function() {
            inputbox.value = li.firstChild.textContent;

            editTask = li;
            addButton.textContent = "Update";
            addButton.classList.add("update-btn");
        });

        //delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        //for adding css
        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click", function() {
            taskList.removeChild(taskContainer);
            // saveData();
            // inputbox.value = "";

            if (editTask === li) {
            editTask = null;
            inputbox.value = "";
            // saveData();
            addButton.textContent = "Add Task";
        }
        });


        // li.appendChild(editBtn);
        // li.appendChild(deleteBtn);
        // taskList.appendChild(li);

        //add button and delete button next to li box
        let taskContainer = document.createElement("div");
        taskContainer.classList.add("task-container");

        taskContainer.appendChild(li);
        taskContainer.appendChild(editBtn);
        taskContainer.appendChild(deleteBtn);

        taskList.appendChild(taskContainer);
localStorage.setItem("tasks", taskList.innerHTML);

        inputbox.value = "";
        // saveData();

    }
}

addButton.addEventListener("click", addTask);

//saving in localstorage

// function saveData() {
//     localStorage.setItem("tasks", taskList.innerHTML);
// }

// function showData() {
//     taskList.innerHTML = localStorage.getItem("tasks") || "";
// }

// showData();