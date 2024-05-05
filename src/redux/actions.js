import { ADD_TASK, DELETE_TASK, TASK_COMPLETED } from "../constants/actionTypes";

export const addTask = payload => ({ type: ADD_TASK, payload: payload });
export const deleteTask = payload => ({ type: DELETE_TASK, payload: payload });
export const completeTask = payload => ({ type: TASK_COMPLETED, payload: payload });