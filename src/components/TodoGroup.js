import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function TodoGroup() {

    const todoList = useSelector((state) => state.todoList);

    return (
        <div>
            {todoList.map((item)=>
                <TodoItem key={item.ID} text={item.Text} id={item.ID} done={item.Done} />
            )}
        </div>
    );

}
export default TodoGroup;