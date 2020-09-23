import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3939/api/v1/',
    withCredentials: false,
    mode: 'cors',
    AccessControlAllowOrigin: 'http://localhost:3000',
    ContentType: 'application/json; charset=utf-8',
    Connection: 'keep-alive'
})

export const usersApi = {
    getContractors(){
        return instance.get('users')
            .then(response => response.data)
    }
}
export const tasksApi = {
    getTasks(){
        return instance.get('tasks')
            .then(response => response.data)
    },
    postTask(data){
        return instance.post('tasks',data)
            .then(response => response.data.content)
    },
    putTaskPriority(id, data){
        return instance.put(`tasks/${id}`, data)
            .then(response => response.data.content)
    },
    deleteTask(id){
        return instance.delete(`tasks/${id}`)
            .then(response => response.data)
    },
}