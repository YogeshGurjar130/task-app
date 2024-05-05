import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";

function CompleteRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" element={<TaskList />} />
                    <Route path="/addTask" element={<AddTask />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default CompleteRoutes;