const todoItems = require("./todo");

async function main() {
    const task = await todoItems.getTask("59cef28feea5271df6684314");
    const finishedTask = await todoItems.completeTask(task._id); 
    console.log(finishedTask);
}
/*
async function main() {
    const getTasks = await todoItems.getAllTasks();
    console.log(getTasks);
}*/
/*
async function main() {
    const createdTask = await todoItems.createTask("My F4444t Task", "This is the first thing I need to do today");
    console.log(createdTask);
}*/
main();
//59cef29ceea5271df668431a