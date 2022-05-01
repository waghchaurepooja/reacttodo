import { TodoInput } from "./TodoInput";

import { TodoItem } from "./TodoItems";

import { CompleteTodo } from "./CompleteTodo";

import { useState, useEffect } from "react";

import { nanoid } from "nanoid";

export const Todo = () =>{

    const [Todoslist, setTodoslist] = useState([]);
    

    const getData = (Todo) =>{

        const payload = {
            
            title : Todo,
            status : false,
            id : nanoid(5),
            
        }

        setTodoslist([...Todoslist, payload]);
    }

    const handlestatus = (value,index) =>{
        
        setTodoslist([...Todoslist.map((element) =>{
            return (

                element.id === value ? {...element, status : !element.status} : element

            )
        })])

    }

    const handledelete = (value) =>{
    
        console.log('value:', value)

        Todoslist.map((element,index) =>{
            console.log('index:', index)
            console.log('element.id:', element.id)
            if(element.id === value)
            {
                Todoslist.splice(index,1);
                console.log('Todoslist:', Todoslist)

                setTodoslist([...Todoslist]);
            }
        })
    }
    console.log('Todoslist:', Todoslist)
    
    return (

        <div className="container">
            <TodoInput getDataFn = { getData } />
            <div className="AllTodo">
                {Todoslist.map((element,index) =>{
                    return (

                        <TodoItem index = {index} Item = {element} StatusFn = {handlestatus} />
                        
                    )
                })}
            </div>
            <div className="ShowCompletedItem">SHOW COMPLETED TO-DOS</div>
            <div className="AllTodo">
                {Todoslist.map((element,index) =>{
                    return (

                        <CompleteTodo index = {index} Item = {element} DeleteFn = {handledelete}/>
                    )
                })}
            </div>
        </div>

    )
}