import { useState } from "react";

function TodoGenerator(props){
    const [content, setContent] = useState("")

    function toSubmit(event) {
        event.preventDefault();
        if(content.length > 0){
            props.updateTodoList(content);
            setContent("");
        }
    }

    function handleContentValue(event){
        setContent(event.target.value);
    }


    return(
        <div>
            <form onSubmit={toSubmit}>
            <input type="text" value={content} onChange={handleContentValue} required></input>
            <input type="submit" value="add"></input>
            </form>
        </div>
    );
}
export default TodoGenerator;