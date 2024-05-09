function ToDoList(){
    this.tasks = [];
    this.completedTasks = [];
}

// method to add a task as completed
ToDoList.prototype.addTask= function(task) {
    this.tasks.push(tasks);
}

// method to mark a task as completed
ToDoList.prototype.completeTask = function(taskIndex) {
    if (taskIndex >= 0 && taskIndex < this.tasks.length) {
        const completedTask = this.tasks.splice(taskIndex, 1)[0];
        this.completedTasks.push(completedTask);
    }
    else {
        console.log("Invalid task index");
    }
}


// method to display all tasks in the todo list
ToDoList.prototype.displayTasks = function () {
    console.log("Tasks:");
    this.tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
    console.log("Completed Tasks:");
    this.completedTasks.forEach((task, index) => {
        // console.log(`${index + 1}. ${task}`);
    });
}

// examples
let myTodoList = new TodoList();
myTodoList.addTask("Finish homework");
myTodoList.addTask("Buy Food and Clothes");
myTodoList.addTask("Finsih Reading");
myTodoList.completeTask(1);
myTodoList.displayTasks();
