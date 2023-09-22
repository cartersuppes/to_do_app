//array that holds each task input
const tasks = [];

//function which appends text to my webpage with task and prints array to console
function addTask() {
    let taskDescription = document.getElementById("taskInput").value;

    //each object is 'task' with three attributes
    let task = {
        id: Math.floor(Math.random() * 100),
        description: taskDescription,
        completed: false
    };

    //appends each task to my array of tasks
    tasks.push(task);
    //prints array to console
    console.log(tasks);

    //console.log(taskDescription)

    let taskList = document.getElementById("taskList");
    let taskItem = document.createElement("li");
    taskItem.textContent = taskDescription;
    //adds each item to my unordered list
    taskList.appendChild(taskItem);
    let check = document.createElement("input");
    check.type = "checkbox";
    //adds checkbox to same line
    taskItem.appendChild(check);
    //adds deletebutton to same line
    let btnDelete = document.createElement("button");

    //internal js styling
    btnDelete.style.backgroundColor = "red";
    btnDelete.style.color = "white"

    btnDelete.textContent = "X";
    taskItem.appendChild(btnDelete);
    btnDelete.addEventListener('click', function () {
        //removes task item on click
        taskItem.remove();
        //splices array to remove deleted item
        let index = tasks.indexOf(taskItem);
        tasks.splice(index,1)
        //debugging purpose, checking to make sure task was spliced properly
        console.log(tasks);
      });
    taskList.appendChild(taskItem);
}


function deleteTask (task) {
    let index = tasks.indexOf(task);
    //checks to make sure index is valid
    if (index !== -1) {
        tasks.splice(index,1);
        
        taskItem.remove();
    }
}