const express = require('express')
const cors = require('cors')
const app = express()


app.use(express.json())
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.urlencoded({ extended: true }))
app.use(require('./Routes/index.routes'))




app.get('/', (req, res) =>{
    res.json({message: "asd"})
})

app.listen(3939)