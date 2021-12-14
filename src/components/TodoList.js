import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup"



function TodoList(){

    return(
        <div className="TodoList">
            <p>Todo List</p>
            <TodoGroup/>
            <TodoGenerator/>
        </div>
    )
    
}
export default TodoList;