import {ToDo} from './models/todo'
export const resolvers = {
    Query: {
        apicheck: () => 'API Running..',
        todos: () => ToDo.find()
    },
    Mutation: {
        createToDo: async (_,{task,completed}) => {
            console.log("Add New To Do Item:" + task);
            let createddate = new Date();
            let lastupdateddate = new Date();
            const todo = new ToDo({task,createddate,completed,lastupdateddate});
            await todo.save();
            console.log(todo);
            return todo;
        },
        editTodo:async(_,{id,task,completed}) => {
            const foundToDoItem = await ToDo.findById(id);
            console.log("Edit To Do Item:" + task);
            foundToDoItem.task = task;
            foundToDoItem.completed = completed;
            foundToDoItem.lastupdateddate = new Date();
            foundToDoItem.save();
            return foundToDoItem;
        },
        deleteToDo:async(_,{id}) => {
            const foundToDoItem = await ToDo.findById(id);
            console.log("Edit To Do Item:" + foundToDoItem.task);
            foundToDoItem.delete();
            return foundToDoItem;
        },
        updateToDoStatus:async(_,{id,completed}) =>{
            const foundToDoItem = await ToDo.findById(id);
            console.log("Edit To Do Item:" + foundToDoItem.task 
            + " status :" +completed);
            foundToDoItem.completed = completed;
            foundToDoItem.lastupdateddate = new Date();
            foundToDoItem.save();
            return foundToDoItem;

        } 
    }    
};