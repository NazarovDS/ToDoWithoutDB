const express = require('express')
const router = express.Router()
const task = require('../Models/task.model')
const m = require('../Helpers/middlewares')

    // http://localhost:3939/api/v1/tasks
//получаем
router.get('/tasks', async (req, res)=>{
    await task.getTasks()
        .then(tasks => res.json(tasks))
        .catch(err=>{
            if (err.status){
                res.status(err.status).json({message:err.message})
            }else{
                res.status(500).json({message: err.message})
            }
        })
})
//добавляем
router.post('/tasks', m.checkFieldsTask, async (req, res)=>{
    await task.insertTask(req.body)
        .then(task=>res.status(201).json({
            message: `Таск №${task.id} добавлен`,
            content: task
        }))
        .catch(err => res.status(500).json({ message: err.message }))
})
//меняем
router.put('/tasks/:id', m.mustBeInteger, m.checkFieldsTask, async (req, res)=>{
    const id = req.params.id
    await task.updateTask(id, req.body)
        .then(task => res.json({
            message: `Таск №${id} обновлен`,
            content: task
        }))
        .catch(err => res.status(500).json({ message: err.message }))
})

router.delete('/tasks/:id', m.mustBeInteger, async (req, res)=>{
    const id = req.params.id
    await task.deleteTask(id)
        .then(task=>res.json({
            message: `Таск №${id} удален.`
        }))
        .catch(err=>{
            if(err.status){
                res.status(err.status).json({message: err.message})
            }
            res.status(500).json({message: err.message})
        })
})

module.exports = router