import React from "react";
import {styles} from "../styles/styles";
import {useDispatch} from "react-redux";
import {deleteTaskReq, sendNewPriority} from "../redux/actions/tasksAction";

export const TaskCard = React.memo((props) => {
    const classes = styles()
    // Повышаем/понижаем приоритет
    const dispatch = useDispatch()

    const task = {
        description: props.description,
        contractor: props.contractor,
        priority: props.priority
    }

    const upPriority = () => {
        task["priority"] = task.priority + 1
        dispatch(sendNewPriority(props.id, task))
    }
    const downPriority = () => {
        task["priority"] = task.priority - 1
        dispatch(sendNewPriority(props.id, task))
    }
    //удаляем таску
    const handleDeleteTask = () => {
        dispatch(deleteTaskReq(props.id))
    }
    //состояние видимости кнопок в зависимости от приоритета
    const [showUpButton, setShowUpButton] = React.useState(true)
    const [showDownButton, setShowDownButton] = React.useState(true)
    //оганичение видимости кнопок
    React.useEffect(() => {
        (props.priority === 10) ? setShowUpButton(false) : setShowUpButton(true)
    }, [props.priority])

    React.useEffect(() => {
        (props.priority === 1) ? setShowDownButton(false) : setShowDownButton(true)
    }, [props.priority])
    return (
        <div className={classes.taskCard}>
            <div>
                Описание:<br/> {props.description}
            </div>
            <div>
                Исполнитель: {props.contractor}
            </div>
            <div>
                Приоритет: {props.priority}
                <div>
                    <div className={classes.buttonBlock}>
                        <button onClick={handleDeleteTask}>Удалить</button>
                        {showUpButton &&
                        <button onClick={upPriority}>Повысить приоритет</button>}
                        {showDownButton &&
                        <button onClick={downPriority}>Понизить приоритет</button>}
                    </div>
                </div>
            </div>
        </div>
    )
})