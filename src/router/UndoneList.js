import { useEffect } from "react";
import { useSelector } from "react-redux";
import TodoItem from "../components/TodoItem"

function UndoneList(){
    const todoList = useSelector((state) => state.todoList);

    useEffect(()=> {
        todoList.filter(todo=>todo.done)
    })

    return (
    <div className="background-Done-List">
        <h2>Undone</h2>
        {todoList.filter(item=> !item.done).map((item)=>
            <TodoItem key={item.id} id={item.id} text={item.text} done={item.done}></TodoItem>
        )}
    </div>
    )

}

export default UndoneList;