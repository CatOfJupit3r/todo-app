import {TaskIF} from "../interfaces/TaskIF";
// @ts-ignore
import styles from '../styles/TaskActions.module.css'

export default function TaskActions (props: {
    tasks: TaskIF[],
    setTasks: Function
}) {

    const {tasks, setTasks} = props

    const resetTasks = () => {
        setTasks(Array<TaskIF>())
    }

    const clearCompletedTasks = () => {
        setTasks(tasks.filter((task) => !task.isDone))
    }

    const completedTasks = tasks.filter((task) => task.isDone).length

    return <>
        <button
            type="button"
            onClick={resetTasks}
            className={`${tasks.length > 0 ? styles.button : styles.button_inactive} notSelectable`}
        >Reset
        </button>
        <button
            type="button"
            onClick={clearCompletedTasks}
            className={`${completedTasks > 0 ? styles.button : styles.button_inactive} notSelectable`}
        >Clear
        </button>
    </>
}