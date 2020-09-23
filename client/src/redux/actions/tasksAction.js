import {tasksApi} from "../../api/api";

//Саночки
export const fetchTasks = () => async (dispatch) => {
    const data = await tasksApi.getTasks()
    dispatch(setTasks(data))

}
export const sendTask = (task) => async (dispatch) =>{
    const data = await tasksApi.postTask(task)
    dispatch(addTask(data))
}
export const sendNewPriority = (id, task) => async (dispatch) =>{
    const data = await tasksApi.putTaskPriority(id, task)
    dispatch(newPriority(data))
}
export const deleteTaskReq = (id) => async (dispatch) =>{
    await tasksApi.deleteTask(id)
    dispatch(deleteTask(id))
}

//Экшны
export const setTasks = (items) => ({
    type: 'TASKS_SET_TASKS',
    payload: items
})
export const addTask = (task) =>({
    type: 'TASKS_ADD_TASK',
    payload: task
})
export const newPriority = (task) =>({
    type: 'TASKS_NEW_PRIORITY',
    payload: task
})
export const deleteTask = (id) => ({
    type: 'TASK_DELETE_TASK',
    payload: id
})


