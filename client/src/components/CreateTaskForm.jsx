import React, {useState} from "react";
import {styles} from "../styles/styles";
import {useDispatch, useSelector} from "react-redux";
import {sendTask} from "../redux/actions/tasksAction";
import {fetchUsers} from "../redux/actions/contractorsAction";


export const CreateTaskForm = (props) => {
    const classes = styles()
    //тянем список пользователей
    const items = useSelector(state => state.contractors.contractors)
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])
    //фиксируем состояния инпутов
    const [description, setDescription] = React.useState('')
    const [contractor, setContractor] = React.useState('')
    const [priority, setPriority] = React.useState('')
    //блокировка кнопки "Добавить задачу"
    const [disableButton, setDisableButton] = useState(false)
    React.useEffect(() => {
        if (description.length === 0 || contractor.length === 0 || priority.length === 0) {
            setDisableButton(true)
        } else {
            setDisableButton(false)
        }
    })
    //добавление задачи
    const handleAddTask = (e) => {
        e.preventDefault();
        dispatch(sendTask(
            {
                description: description,
                contractor: contractor,
                priority: Number(priority)
            }))
        setDescription('')
        setContractor('')
        setPriority('')

    }
    return (
        <div className={classes.createTaskForm}>
            <form onSubmit={handleAddTask}>
                <div>
                    <textarea required
                              placeholder={"Описание"}
                              onChange={(e) => setDescription(e.target.value)}
                              value={description}/>
                </div>
                <div>
                    <select required
                            defaultValue={''}
                            onChange={(e) => setContractor(e.target.value)}
                            value={contractor}>
                        <option disabled
                                selected
                                value={''}>Не выбрано
                        </option>
                        {items.map((n, index) => <option key={index + n.name} value={n.name}>{n.name}</option>)}
                    </select>
                </div>
                <div>
                    <input required
                           type="number"
                           onChange={(e) => setPriority(e.target.value)}
                           min={1}
                           max={10}
                           placeholder={"Приоритет"}
                           value={priority}/>
                </div>
                <div>
                    <button disabled={disableButton}>Добавить задачу</button>
                </div>
            </form>
        </div>
    )
}