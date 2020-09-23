import React from 'react'
import {CreateTaskForm} from "./components/CreateTaskForm";
import {styles} from "./styles/styles";
import {TaskBar} from "./components/TaskBar";


function App() {
    const classes = styles()
    return (
        <div className={classes.container}>
            <CreateTaskForm/>
            <TaskBar/>
        </div>
    );
}

export default App
