import TodoItem from "./TodoItem";
import TodoGenerator from "./TodoGenerator";
import { useState } from "react";

function TodoGroup(props) {

    const [todoList, setToDoList] = useState([]);
    
    function updateTodoList(newToDo){
        setToDoList(oldToDoList=>[...oldToDoList, newToDo])
    }

    return (
        <div>
            {todoList.map((item, index)=><TodoItem key={index} content={item}/>)}
            <TodoGenerator updateTodoList={updateTodoList}/>
        </div>
    );

}
export default TodoGroup;