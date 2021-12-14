import { UPDATE_SIZE, UPDATE_TODO_LIST } from "../constants/constants";


const initState = {size: 0, todoList: []};
const todoReducer = (state = initState, action) => {

    switch(action.type) {
        case UPDATE_SIZE:
            return {...state, size: state.size + 1};
        case UPDATE_TODO_LIST:
            return {...state, todoList: [...state.todoList, action.payload]}
        default:
            return state;
    }
}
export default todoReducer;