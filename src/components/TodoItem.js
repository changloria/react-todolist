import { useDispatch } from "react-redux";
import "../style/style.css"
import { REMOVE_TODO, CHANGE_STATUS } from "../constants/constants"
import { deleteTodos, updateTodos } from "../apis/todos";
import { Button } from 'antd';

function TodoItem(props){
    const dispatch = useDispatch();
    const{id, done, text} = props;

    function removeTodoList(){
        deleteTodos(id).then(() => {
            dispatch({type: REMOVE_TODO, payload: id});
        })
    }

    function changeStatus(){
        updateTodos({id: id, text: text, done: !done}).then((response) => {

            dispatch({type: CHANGE_STATUS, payload: response.data.id})
        })
    }
    
    return(
        <div className={done ? "todo-Item-Line done": "todo-Item-Line"} onClick={changeStatus}>
            {text}
            <Button className="delete-Button" type="dashed" shape="square" onClick={removeTodoList}>x</Button>
            
        </div>
    );
}

export default TodoItem;