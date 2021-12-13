import "../style/style.css"


function TodoItem(props){
    return(
        <div class="todoItemLine">{props.content}</div>
    );
}

export default TodoItem;