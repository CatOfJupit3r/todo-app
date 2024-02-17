import {TaskIF as TaskInterface} from "../interfaces/TaskIF";
import { FaCheck } from "react-icons/fa";
import { RiCalendarTodoLine, RiCalendarCheckLine, RiDeleteBack2Line } from "react-icons/ri";
// @ts-ignore
import styles from '../styles/Task.module.css'

export default function Task (props: {
    task: TaskInterface,
    id: string,
    removeTask: Function
    changeCompletion: Function
}) {
    const {task, id, removeTask, changeCompletion} = props

    return <div onDoubleClick={() => (removeTask(id))} className={task.isDone ? styles.taskDone : styles.task}>
        <div className={styles.taskInnerContent}>
            {
                task.isDone ?
                    <RiCalendarCheckLine color={"&#EB29"} className={styles.todoIcon} />
                    :
                    <RiCalendarTodoLine color={"&#xEB29"} className={styles.todoIcon}/>
            }
            <h1 className={`notSelectable ${styles.taskHeader}`}>{task.name}</h1>
        </div>
        <div className={styles.actionButtons}>
            <RiDeleteBack2Line
                className={styles.actionIcons}
                onClick={() => (removeTask(id))}
            />
            <FaCheck
                className={styles.actionIcons}
                onClick={() => (changeCompletion(id))}
            />
        </div>
    </div>
}