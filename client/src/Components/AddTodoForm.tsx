import React, { useState } from 'react'
import {CREATE_NEW_TASK} from '../Graphql/Mutation'
import {useMutation} from '@apollo/client'

function AddToDoForm()
{
    const [task, setTask] = useState("");

    const [createToDo, {error}] = useMutation(CREATE_NEW_TASK);

    const addTask = () => {
        createToDo({
            variables : {
                task: task,
                completed : false
            }
        });

        if(error)
        {
            console.log(error)
        }
    };
    return (
        <div>
            <input 
                type="text"
                placeholder="New Task"
                onChange={(e)=>{
                    setTask(e.target.value);
                }}
            />
            <button onClick={addTask}>Add new task</button>
        </div>
    );
}

export default AddToDoForm