const express = require("express")
const validator = require("validator")
const morgan = require("morgan")

const app = express()

app.use(morgan("dev"))

app.use((req, res, next) => {
    console.log("Middleware 1")
    next()
})

app.use((req, res, next) => {
    console.log("Middleware 2")
    next()
})
app.listen(3000, () => {
    console.log("Listening on port 3000!!")
})
//req always comes first cause request makes response!
app.get("/home", (req, res) => {
    res.send("<h1>Homepage</h1>")
})

//http://localhost:3000/hello?name=malak&age=20
app.get("/hello", (req, res) => {
    const name = req.query.name;
    const age = req.query.age;

    res.send(`Hello there, ${name}! I hear u are ${age}`)
})

app.get("/greet/:name", (req, res) => {
    res.send(`<h1>Hello, ${req.params.name} </h1>`)
})
app.get("/:itemNum", (req, res) => {
    
    let item = req.params.itemNum

    if(validator.isNumeric(item)){
        res.send(`<h1>Item ${req.params.itemNum} </h1>`)
    }else{
        res.send("<h1>no</h1>")
    }
    
})