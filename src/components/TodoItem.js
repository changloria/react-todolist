import { useDispatch } from "react-redux";
import "../style/style.css"
import { REMOVE_TODO, CHANGE_STATUS } from "../constants/constants"


function TodoItem(props){
    const dispatch = useDispatch();

    function removeTodoList(){
        dispatch({type: REMOVE_TODO ,payload: props.id})
    }

    function changeStatus(){
        dispatch({type: CHANGE_STATUS, payload: props.id})
    }
    console.log(props.status);
    return(
        <div className={props.status ? "todo-Item-Line done": "todo-Item-Line"} onClick={changeStatus}>
            {props.content}
            <button className="delete-Button" onClick={removeTodoList}>x</button>
            
        </div>
    );
}

export default TodoItem;