import { gql } from "@apollo/client";

export const CREATE_NEW_TASK = gql`
    mutation createToDo($task: String! $completed: Boolean){
        createToDo(task: $task, completed: $completed)
        {
            id
            task
            completed
            createddate
        }
    }
`;
