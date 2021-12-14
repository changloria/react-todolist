import "../style/style.css"


function TodoItem(props){
    return(
        <div className="todo-Item-Line">{props.content}</div>
    );
}

export default TodoItem;