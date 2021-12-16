import { useState } from "react";
import '../style/style.css'
import { useDispatch } from "react-redux"
import { UPDATE_SIZE, UPDATE_TODO_LIST } from "../constants/constants";
import { addTodos } from "../apis/todos";
import { Button } from 'antd';


function TodoGenerator(props){
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function toSubmit(event) {
        event.preventDefault();
        dispatch({type: UPDATE_SIZE, payload: 1});
        setText("");
    }

    function handleContentValue(event){
        setText(event.target.value);
    }

    function addToDo(){
        addTodos({text :text, done: false}).then((response) => {
            dispatch({type: UPDATE_TODO_LIST, payload: response.data});
        })
    }


    return(
        <form onSubmit={toSubmit}>
            <input type="text" value={text} className="input-field" onChange={handleContentValue}></input>
            <Button value="add" id="add-Button" type="primary" onClick={addToDo} >Add</Button>
        </form>
    );
}
export default TodoGenerator;