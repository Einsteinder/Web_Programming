const mongoCollections = require("./mongoCollections");
const todoItems = mongoCollections.todoItems;
const uuidv1 = require('uuid/v1');


module.exports = {
    async createTask(title, discription) {
        if (!title) throw "You must provide a name for your task";
    
        if (!discription) throw "You must provide discription for your task";
    
        const todoCollection = await todoItems();
    
        let newTodoItem = {
            _id: uuidv1,
            title: title,
            description: discription,
            completed: false,
            completedAt: null
        } ;
    
        const insertInfo = await todoCollection.insertOne(newTodoItem);
        if (insertInfo.insertedCount === 0) throw "Could not add todoItem";
    
        const newId = insertInfo.insertedId;
    
        const todo = await this.getTask(newId);
        return todo;
      },

    async getTask(id){
        if (!id) throw "You must provide an id to search for";
        
        const todoCollection = await todoItems();
        const todoGo = await todoCollection.findOne({ _id: id });
        if (todoGo === null) throw "No todo item with that id";
    
        return todoGo;

      },
    async getAllTasks(){
        const todoCollection = await todoItems();
        
        const todo = await todoCollection.find({}).toArray();
    
        return todo;

    },
    async completeTask(taskId){
        if (!id) throw "You must provide an id to search for";
        const todo = await this.getTask(taskId);
        const todoCollection = await todoItems();
        var time = new Date();
        var completeTime =   
        (time.getMonth()+1).toString()+"/"+
        (time.getDate().toString()) + "/"+
        (time.getFullYear().toString())+"_"+
        (time.getHours().toString())   + ":" + 
        (time.getMinutes().toString()) + ":" + 
        (time.getSeconds().toString())

        const updatedTodo = {
            _id: todo._id,
            title: todo.title,
            description: todo.title,
            completed: true,
            completedAt: completeTime
        } ;
    
        const updateInfo = await dogCollection.updateOne({ _id: id }, updatedTodo);
        if (updatedInfo.modifiedCount === 0) {
            throw "could not update todu item successfully";
        }
        var todoNew = await this.getTask(taskId);
    
        return todoNew;
    }

};