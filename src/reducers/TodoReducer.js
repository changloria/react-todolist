import { CHANGE_STATUS, REMOVE_TODO, UPDATE_SIZE, UPDATE_TODO_LIST } from "../constants/constants";


const initState = {size: 0, todoList: []};
const TodoReducer = (state = initState, action) => {

    switch(action.type) {
        case UPDATE_SIZE:
            return {...state, size: state.size + 1};
        case UPDATE_TODO_LIST:
            return {...state, todoList: [...state.todoList, action.payload]}
        case REMOVE_TODO:
            return {...state, todoList: state.todoList.filter(content => content.ID !== action.payload)}
        case CHANGE_STATUS:
            return {...state, todoList: state.todoList.map(function(object){
                if(object.ID === action.payload){
                    object.Done = !object.Done;
                }
                return object;
            })};
        default:
            return state;
    }
}
export default TodoReducer;