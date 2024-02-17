import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import styles from '../styles/EnterTask.module.css'


export default function EnterTask (props: {
    addTask: Function
}) {
    const [taskName, setName] = useState("")
    const {addTask} = props

    const changeText = (e: any) => {
        if (e.keyCode === 13) {
            e.preventDefault && e.preventDefault()
            e.persist && e.persist()
            onClickButton(e)
            return
        }
        setName(e.target.value)
    }

    const onClickButton = (event: any) => {
        event.preventDefault()
        if (taskName) {
            addTask({
                id: uuidv4(),
                name: taskName,
                isDone: false
            })
        }
        setName("")
    }

    return <div>
        <form>
            <input
                value={taskName}
                inputMode={"text"}
                onChange={(e) => (changeText(e))}
                placeholder={"Enter task name"}
                className={`${styles.inputTask + " " + styles.normalize} notSelectable`}
            />
            <button
                type={"button"}
                onClick={(e) => (onClickButton(e))}
                className={`${styles.submitTask + " " + styles.normalize} notSelectable`}
            >Add!</button>
        </form>
    </div>
}