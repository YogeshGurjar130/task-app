import React, { useState } from "react";
import "../styles/common.css";
import Task from "../objects/Task";
import { CREATED } from "../constants/status";
import { useSelector, useDispatch } from 'react-redux';
import Header from "./Header";
import { addTask } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { triggerToast } from "../util";

const AddTask = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [task, setTask] = useState("");
    const { taskList } = useSelector(state => state);

    console.log("Task List ", taskList);

    // whenever task field change it will update the state
    const onChangeTask = (text) => {
        console.log("Text ", text);
        setTask(text);
    }

    // when click on view list navigate to list of task
    const onViewList = () => {
        navigate("/")
    }

    // when press save button it will check the field is empty or not
    // if empty then give message as toast
    // else create object of task and save in redux and give success message
    const onPressSave = () => {
        if (task === "") {
            console.log("Task Field is empty");
            triggerToast("Please Enter Task", "error");
            return;
        }
        const taskObj = new Task();
        taskObj.taskId = Date.now();
        taskObj.taskName = task;
        taskObj.createdDate = new Date();
        taskObj.status = CREATED;
        console.log("Task ", taskObj);
        triggerToast("Task Added", "success");
        dispatch(addTask(taskObj))
        setTask("")
    }

    return (
        <>
            <Header></Header>
            <div className="page-container">
                <div className="add-task-heading-container">
                    <h2 className="add-task-heading-title">Add Task</h2>
                    <button className="view-list-btn" onClick={onViewList}>View List</button>
                </div>

                <div className="add-task-container">
                    <input
                        className="add-task-input"
                        type="text"
                        value={task}
                        onChange={(e) => onChangeTask(e.target.value)}
                        placeholder="Enter Task Name">
                    </input>
                    <div className="button-container">
                        <button className="save-btn" onClick={onPressSave}>Save</button>
                    </div>
                </div>
            </div>
            <Toaster position="top-center"></Toaster>
        </>
    )
}

export default AddTask;