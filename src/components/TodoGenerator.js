import { useState } from "react";
import '../style/style.css'
import { useDispatch } from "react-redux"
import { UPDATE_SIZE, UPDATE_TODO_LIST } from "../constants/constants";
import { v4 as uuidv4 } from "uuid";


function TodoGenerator(props){
    const [content, setContent] = useState("");
    const dispatch = useDispatch();

    function toSubmit(event) {
        event.preventDefault();
        dispatch({type: UPDATE_SIZE, payload: 1})
        dispatch({type: UPDATE_TODO_LIST, payload:{"content": content, "ID":uuidv4(), "done": "false"}})
        setContent("");
    }

    function handleContentValue(event){
        setContent(event.target.value);
    }


    return(
        <div>
            <form onSubmit={toSubmit}>
            <input type="text" value={content} className="input-field" onChange={handleContentValue} required></input>
            <input type="submit" value="add" className="button"></input>
            </form>
        </div>
    );
}
export default TodoGenerator;