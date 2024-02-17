import {TaskIF} from "../interfaces/TaskIF";
import Task from "./Task";
// @ts-ignore
import styles from '../styles/TaskDisplay.module.css'

export default function TaskDisplay (props: {
    tasks: TaskIF[],
    removeTask: Function
    changeCompletion: Function
}
) {
    const {tasks, removeTask, changeCompletion} = props

    const completedTasks = () => {
        const completedTasksCount = tasks.filter((task) => task.isDone).length
        return (completedTasksCount > 0 ?
        <h1>
            Completed tasks: {completedTasksCount}
        </h1>
        :
        <></>)
    }

    return (tasks.length > 0 ?
        (<div className={styles.display}>
        {tasks.map((task, index) => (
            <Task task={task} key={index} id={index} removeTask={removeTask} changeCompletion={changeCompletion}/>
        ))}
        {completedTasks()}
    </div>)
    :
    <h1>No tasks!</h1>)
}