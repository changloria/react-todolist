import TodoItem from "./TodoItem";
import TodoGenerator from "./TodoGenerator";
import { useState } from "react";

function TodoGroup(props) {

    const [todoList, setTodoList] = useState([]);
    function updateTodoList(newTodo){
        setTodoList(oldTodoList=>[...oldTodoList, newTodo])
    }

    return (
        <div>
            {todoList.map((item)=><TodoItem key={item} content={item}/>)}
            <TodoGenerator updateTodoList={updateTodoList}/>
        </div>
    );

}
export default TodoGroup;