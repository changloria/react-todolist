import { useDispatch } from "react-redux";
import "../style/style.css"
import { REMOVE_TODO, CHANGE_STATUS } from "../constants/constants"


function TodoItem(props){
    const dispatch = useDispatch();
    const{id, done, text} = props;

    function removeTodoList(){
        dispatch({type: REMOVE_TODO ,payload: id})
    }

    function changeStatus(){
        dispatch({type: CHANGE_STATUS, payload: id})
    }
    
    return(
        <div className={done ? "todo-Item-Line done": "todo-Item-Line"} onClick={changeStatus}>
            {text}
            <button className="delete-Button" onClick={removeTodoList}>x</button>
            
        </div>
    );
}

export default TodoItem;