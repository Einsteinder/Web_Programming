const todoItems = require("./todo");
const mongoCollections = require("./mongoCollections");
const connection = require("./mongoConnection");
const todoItemsColl = mongoCollections.todoItems;

async function main(){
    console.log("1. Create a task & 2. Log the task, and then create a new task")
    const createdTask = await todoItems.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
    console.log(createdTask)
    const createdTask2 = await todoItems.createTask("Play Pokemon with Twitch TV",
    "Should we revive Helix?")
    console.log()
    console.log("3.query all tasks and log them")
    const getTasks = await todoItems.getAllTasks();
    console.log(getTasks);
    console.log()
    console.log("4. After all the tasks are logged, remove the first task")
    const removeTask = await todoItems.removeTask(createdTask._id);
    console.log()
    console.log("5. Query all the remaining tasks and log them")
    const getTasks2 = await todoItems.getAllTasks();
    console.log(getTasks2);
    console.log()

    console.log("6. Complete the remaining task")
    const getTasksForComplete = await todoItems.getAllTasks();
    for(var i=0;i < getTasksForComplete.length;i++){
        await todoItems.completeTask(getTasksForComplete[i]._id)

    }
    console.log()

    console.log("7. Log the task that has been completed with its new value.")
    const getTasks3 = await todoItems.getAllTasks();
    console.log(getTasks3);
    const db = await connection();
    await db.close();
    console.log()
    console.log("Done!");


}

main()

