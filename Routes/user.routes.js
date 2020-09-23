const express = require('express')
const router = express.Router()
const user = require('../Models/users.model')

// http://localhost:3939/api/v1/users
//получаем
router.get('/users', async (req, res)=>{
    await user.getUsers()
        .then(users => res.json(users))
        .catch(err=>{
            if (err.status){
                res.status(err.status).json({message:err.message})
            }else{
                res.status(500).json({message: err.message})
            }
        })
})
module.exports = router