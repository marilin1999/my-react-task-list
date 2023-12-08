import React from 'react';
import TaskList from "../../components/TaskList";
import Header from "../../components/Header"



function Tareas() {
    return (
        <div>
            <p>Es hora de revisar las tareas que tenemos</p>
            <Header/>
            <TaskList/>
        </div>
    );
}

export default Tareas;
