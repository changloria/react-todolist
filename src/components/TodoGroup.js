import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function TodoGroup() {

    const todoList = useSelector((state) => state.todoList);
    
    return (
        <div>
            {todoList.map((item)=>
                <TodoItem key={item.id} text={item.text} id={item.id} done={item.done} />
            )}
        </div>
    );

}
export default TodoGroup;