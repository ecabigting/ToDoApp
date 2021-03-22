import React, {useEffect,useState} from "react";
import {useQuery} from "@apollo/client";
import {LOAD_TODOS} from "../Graphql/Query";

function GetAllTodos()
{
    const {data} = useQuery(LOAD_TODOS);
    const [todos,setTodos] = useState<any[]>([]);
    useEffect(() => {
        if(data)
        {
            setTodos(data.todos);
        }
    },[data])
    // time 32:50
    return(
        <table>
            <thead>
                <tr>
                    <td></td>
                    <td>Task</td>
                    <td>Completed On</td>
                </tr>
            </thead>
            <tbody> 
                {todos.map((val)=>{
                    return(
                        <tr>
                            <td>
                                <label className={val.completed ? "completed" : undefined}>
                                    <input type="checkbox" checked={val.completed}/> 
                                </label> 
                            </td>
                            <td>
                                <label className={val.completed ? "completed" : undefined}>
                                    {val.task} 
                                </label>  
                            </td>
                            <td>
                                <label>
                                    {val.lastupdateddate ?  val.lastupdateddate : "Not yet completed"}
                                </label>
                            </td>
                        </tr>
                    );
                })} 
            </tbody>
        </table> 
    );
}

export default GetAllTodos