import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function TodoGroup() {

    const todoList = useSelector((state) => state.todoList);

    return (
        <div>
            {todoList.map((item, index)=><TodoItem key={item.ID} content={item.content} id={item.ID}/>)}
        </div>
    );

}
export default TodoGroup;