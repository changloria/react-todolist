import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function TodoGroup() {

    const todoList = useSelector((state) => state.todoList);

    return (
        <div>
            {todoList.map((item, index)=><TodoItem key={item.ID} content={item.Text} id={item.ID} status={item.Done} />)}
        </div>
    );

}
export default TodoGroup;