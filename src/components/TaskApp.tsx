import EnterTask from "./EnterTask";
import TaskDisplay from "./TaskDisplay";
import React, {useState} from "react";
import {TaskIF} from "../interfaces/TaskIF";
import TaskActions from "./TaskActions";


export const TaskApp = () => {
    const [
        tasks,
        setTasks] = useState(Array<TaskIF>())

    const addTask = (newTask: TaskIF) => {
        setTasks([...tasks, newTask])
    }

    const deleteTask = (id: number) => {
        setTasks(tasks.filter((_, idx) => idx !== id))
    }

    const changeCompletion = (index: number) => {
        // Create a new array with the updated task
        const newTasks = tasks.map((task, i) => {
            if (i === index) {
                // Return a new object with the updated completion status
                return {...task, isDone: !task.isDone};
            }
            return task;
        });

        // Update the state with the new array
        setTasks(newTasks);
    }

    return (
        <>
            <h1 style={{
                fontSize: "75px"
            }}>Todo App</h1>
            <EnterTask addTask={addTask}/>
            <TaskActions tasks={tasks} setTasks={setTasks} />
            <TaskDisplay tasks={tasks} removeTask={deleteTask} changeCompletion={changeCompletion}/>
        </>
    );
}