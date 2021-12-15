import { useState } from "react";
import '../style/style.css'
import { useDispatch } from "react-redux"
import { UPDATE_SIZE, UPDATE_TODO_LIST } from "../constants/constants";
import { v4 as uuidv4 } from "uuid";


function TodoGenerator(props){
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function toSubmit(event) {
        event.preventDefault();
        dispatch({type: UPDATE_SIZE, payload: 1})
        dispatch({type: UPDATE_TODO_LIST, payload:{"Text": text, "ID":uuidv4(), "Done": false}})
        setText("");
    }

    function handleContentValue(event){
        setText(event.target.value);
    }


    return(
        <form onSubmit={toSubmit}>
            <input type="text" value={text} className="input-field" onChange={handleContentValue} required></input>
            <input type="submit" value="add" className="button"></input>
        </form>
    );
}
export default TodoGenerator;