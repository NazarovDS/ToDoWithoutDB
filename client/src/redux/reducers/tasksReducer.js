const initialState = {
    tasks: []
}

const tasks = (state = initialState, action) => {
    if (action.type === 'TASKS_SET_TASKS') {
        return {
            ...state,
            tasks: action.payload
        }

    }
    if (action.type === 'TASKS_ADD_TASK') {
        console.log(action)
        return {
            ...state,
            tasks: state.tasks===0 ? [action.payload] :  [...state.tasks, action.payload]
        }
    }
    if (action.type === 'TASKS_NEW_PRIORITY') {
        const {payload: newTask} = action
        return {
            ...state,
            tasks: state.tasks.map(task => {
                if (task.id === newTask.id) {
                    return {
                        ...task,
                        priority: newTask.priority
                    }
                }
                return task
            })
        }
    }
    if (action.type === 'TASK_DELETE_TASK') {
        return {
            ...state,
            tasks: state.tasks.filter(task => task.id !== action.payload)
        }
    }

    return state
}
export default tasks