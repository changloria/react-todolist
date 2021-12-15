import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodos } from "../apis/todos";
import { INIT_TODO} from "../constants/constants";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup"
import { HomeOutlined } from '@ant-design/icons'
import "../style/style.css"


function TodoList(){
    const dispatch = useDispatch();

    useEffect(()=> {
        getTodos().then((response)=> {
            console.log("Hello response", response.data);
            dispatch({type: INIT_TODO, payload: response.data})
        });
    });


    return(
        <div className="TodoList background">
            <HomeOutlined/>
            <h3>Todo List</h3>
            <TodoGenerator/>
            <TodoGroup/>
        </div>
    )
    
}
export default TodoList;