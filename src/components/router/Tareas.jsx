import React from 'react';
import TaskList from "../../components/TaskList";
import Header from "../../components/Header"
import ThemeToggleButton from '../../components/Switch';




function Tareas() {
    return (
        <div>
            <ThemeToggleButton />
            <p>Es hora de revisar las tareas que tenemos</p>
            <Header/>
            <TaskList/>
        </div>
    );
}

export default Tareas;
