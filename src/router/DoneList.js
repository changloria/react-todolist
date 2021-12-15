import { useEffect } from "react";
import { useSelector } from "react-redux";
import TodoItem from "../components/TodoItem";

function DoneList(){
    const todoList = useSelector((state) => state.todoList);

    useEffect(()=> {
        todoList.filter(todo=>todo.done)
    })

    return (
    <div>
        <h3>done</h3>
        {todoList.filter(item=> item.done).map((item)=>
            <TodoItem key={item.id} id={item.id} text={item.text} done={item.done}></TodoItem>
        )}
    </div>
    )

}

export default DoneList;
