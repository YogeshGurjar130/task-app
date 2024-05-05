import { ADD_TASK, DELETE_TASK, TASK_COMPLETED } from "../constants/actionTypes"
import { COMPLETED } from "../constants/status";

const initialState = {
    taskList: [],
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, taskList: [...state.taskList, action.payload] };
        case DELETE_TASK:
            return { ...state, taskList: state.taskList.filter((task) => task.taskId !== action.payload) };
        case TASK_COMPLETED:
            return { ...state, taskList: state.taskList.map((task) => task.taskId === action.payload ? { ...task, status: COMPLETED } : task) };
        default:
            return state
    }
}

export default taskReducer;
