import { useDispatch } from "react-redux";
import "../style/style.css"
import { REMOVE_TODO, CHANGE_STATUS, UPDATE_TODO_LIST } from "../constants/constants"
import { deleteTodos, updateTodos } from "../apis/todos";
import { Button, Input } from 'antd';
import { useState } from "react";
import TextArea from "antd/lib/input/TextArea";
import Modal from 'antd/lib/modal/Modal';

function TodoItem(props){
    const dispatch = useDispatch();
    const{id, done, text} = props;
    const [isModalVisible, setModalVisible] = useState(false);
    const [modifiedContent, setModifiedContent] = useState("");

    function removeTodoList(){
        deleteTodos(id).then(() => {
            dispatch({type: REMOVE_TODO, payload: id});
        })
    }

    function changeStatus(){
        updateTodos({id: id, text: text, done: !done}).then((response) => {
            dispatch({type: CHANGE_STATUS, payload: response.data})
        })
    }
    
    function displayModal(event){
        event.stopPropagation();
        setModifiedContent(text);
        setModalVisible({isModalVisible: true});
    }
    
    const handleOk = () => {
        updateTodos({id: id, text: modifiedContent, done: done}).then((response) => {
            dispatch({type:CHANGE_STATUS, payload: response.data});
        })
        setModalVisible(false);
    };

    const handleCancel = () => {
        setModalVisible(false);
    };
    
    return(
        <div>
            <Modal title="Modify Todo Text" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <TextArea value={modifiedContent} onChange={item => setModifiedContent(item.target.value)}></TextArea>
            </Modal>
            <div className={done ? "todo-Item-Line done": "todo-Item-Line"} onClick={changeStatus}>
                {text}
                <Button className="delete-Button" type="dashed" shape="square" onClick={displayModal}>Edit</Button>
                <Button className="delete-Button" type="dashed" shape="square" onClick={removeTodoList}>x</Button>  
            </div>
        </div>
    );
}

export default TodoItem;