import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useSelector, useDispatch } from 'react-redux';
import moment from "moment";
import { deleteTask, completeTask } from "../redux/actions";
import { CREATED } from "../constants/status";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { triggerToast } from "../util";

const TaskList = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [tasks, setTasks] = useState([]);
    const { taskList } = useSelector(state => state)

    // on change taskList on Redux it will update local tasks list
    useEffect(() => {
        setTasks(taskList);
    }, [taskList]);

    // when click complete button
    const onComplete = (taskId) => {
        dispatch(completeTask(taskId))
        triggerToast("Task Completed", "success");
    }

    // when delete button pressed
    const onDelete = (taskId) => {
        dispatch(deleteTask(taskId))
        triggerToast("Task Deleted", "error");
    }

    // when click add new task navigate to add Task page
    const onAddNewTask = () => {
        navigate("/addTask")
    }

    return (
        <>
            <Header></Header>
            <div className="page-container">
                <div className="list-heading-container">
                    <h1 className="list-heading-title">Task List</h1>
                    <button className="new-task-button" onClick={onAddNewTask}>Add New Task</button>
                </div>
                <div className="list-container">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Created Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {tasks.length !== 0 ? <tbody>
                            {tasks.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.taskId}</td>
                                    <td>{item.taskName}</td>
                                    <td>{item.status}</td>
                                    <td>{moment(item.createdDate).format("DD-MM-YYYY")}</td>
                                    <td> {item.status === CREATED ? <div className="button-container"><button className="delete-btn" onClick={() => onDelete(item.taskId)}>Delete</button> <button className="complete-btn" onClick={() => onComplete(item.taskId)}>Complete</button></div> : item.status}</td>
                                </tr>
                            ))}
                        </tbody> : <p className="empty-list-message">No task added ! Please add </p>}
                    </table>
                </div>
            </div>
            <Toaster position="top-center"></Toaster>
        </>
    )
}

export default TaskList;