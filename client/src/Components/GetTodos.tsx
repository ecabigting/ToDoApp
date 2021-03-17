import React, {useEffect,useState} from "react";
import {useQuery} from "@apollo/client";
import {LOAD_TODOS} from "../Graphql/Query";

function GetAllTodos()
{
    const {data} = useQuery(LOAD_TODOS);
    const [todos,setTodos] = useState([]);
    useEffect(() => {
        if(data)
        {
            setTodos(data.todos);
        }
    },[data])
    // partial 20:42
    return(
        <div>
            {todos.map((val)=>{
                return <h3> {val.task} </h3>
            })}
        </div>
    );
}

export default GetAllTodos