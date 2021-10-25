const express = require("express")
const students = require("./students")

const app = express()

app.use(express.json())

app.listen(3000, () => {
    console.log("runing on port 3000");
})

app.get('/', (req, res) => {
    res.json({Message : "Api is working"})
})

app.get('/api/students', (req, res) =>
{
    res.json(students)
})

app.post('/api/students', (req, res) => {
    console.log(req.body);
    res.json("student post request")
})

app.put('/api/students/: id', (req, res) =>{
    let id = req.params.id
    let name = req.body.name

    let index = students.findIndex((students) => {
        return(student.id == Number.parseInt(id))
    })
})

app.delete('/api/students/: id', (req, res) =>{
    let id = req.params.id

    let index = students.findIndex((students) => {
        return(student.id == Number.parseInt(id))
    })
})