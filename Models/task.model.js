
let tasks = require( '../Data/tasks.json')
const filename = './Data/tasks.json'
const helper = require('../Helpers/helper.js')
    //запрашиваем таски
function getTasks(){
    return new Promise((resolve, reject) => {
        if (tasks.length === 0){
            reject({
                message: 'Тасков нет',
                status: 202
            })
        }
        resolve(tasks)
    })
}
    //добавляем таску
function insertTask(newTask){
    return new Promise((resolve, reject) => {
        const id = {id: helper.getNewId(tasks)}
        newTask = {...id, ...newTask}
        tasks.push(newTask)
        helper.writeJSONFile(filename,tasks)
        resolve(newTask)
    })
}
    //повышаем приоритет
function updateTask (id, newTask){
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(tasks, id)
            .then(task => {
                const index = tasks.findIndex(t=> t.id == task.id)
                id = {id: task.id}
                tasks[index] = {...id, ...newTask}
                helper.writeJSONFile(filename, tasks)
                resolve(tasks[index])
            })
            .catch(err =>reject(err))
    })
}
    //удаляем таск
function deleteTask(id) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(tasks, id)
            .then(()=>{
                tasks = tasks.filter(t => t.id != id)
                helper.writeJSONFile(filename, tasks)
                resolve()
            })
            .catch(err=>reject(err))
    })
}

module.exports = {
    getTasks,
    insertTask,
    updateTask,
    deleteTask
}