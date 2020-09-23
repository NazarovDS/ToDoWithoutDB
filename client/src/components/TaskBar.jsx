import React, { useState} from "react";
import {TaskCard} from "./TaskCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchTasks} from "../redux/actions/tasksAction";

export const TaskBar = React.memo(() =>{
    //загружаем данные из стейта
    const dispatch = useDispatch()
    React.useEffect(()=>{
        dispatch(fetchTasks())
    }, [dispatch])
    const items = useSelector(state =>state.tasks.tasks)
    //сортировка списка
    const newItems = items.length > 0
        ? items.sort((a, b) => {
            if (a.priority < b.priority) {
                return 1
            }
            if (a.priority > b.priority) {
                return -1
            }
            return 0
        }) : []

    //рендер списка тасков при условии их наличия
    const [showTasks, setShowTasks] = useState(false)
    React.useEffect(()=>{
        newItems.length ?  setShowTasks(true) : setShowTasks(false)
    })
    return(
        <div>
            {showTasks &&
            newItems.map((obj, index) => <TaskCard {...obj} key={`${obj.id}${index}`}/>)
            }
        </div>
    )
})