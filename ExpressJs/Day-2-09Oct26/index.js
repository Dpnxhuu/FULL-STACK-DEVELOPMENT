const express = require("express");
const app = express();

app.listen(3000,()=>{
    console.log("Successfully activated server on port 3000")
})

app.set('view engine', 'ejs')


// app.get("/",(req, res) =>{
//     res.send("Welcome to home page!")
// })

// app.get("/about",(req, res) =>{
//     res.send("Welcome to about page!")
// })

// app.get("/gallery",(req, res) =>{
//     res.send("<h1>Welcome Gallery page</h1>")
// })

// app.get("/about/user",(req, res) =>{
//     res.send("Welcome to user page")
// })

// app.get("/about.text",(req, res) =>{
//     res.send("Welcome to about.text page")
// })

// app.get("/user/:id",(req, res) =>{
//     res.send(req.params)
// })

// app.get("/user/:id/book/:bookId",(req, res) =>{   //id numeric ke sath sath alphabatic bhi ho skti hai
//     res.send(req.params)
// })

// app.get("/user/:id-:bookId",(req, res) =>{
//     res.send(req.params)
// })

// app.get("/search", (req, res) => {
//     res.send(req.query)
// })

//Method in expresss

// app.get("/",(req, res) =>{
//     res.send("Welcome to home page!")
// })

// app.get("/",(req, res)=>{
//     res.send(["apple", "mango", "Orange"])
// })

// app.get("/",(req, res)=>{
//     res.json({
//         name: "Deepanshu",
//         age: 21,
//         address: "Delhi"
//     })
// })


// app.get("/",(req, res)=>{
//     res.jsonp({
//         name: "Deepanshu",
//         age: 21,
//         address: "Delhi"
//     })
// })

// app.get("/about",(req, res) => {
//     res.redirect("https://www.google.com")
// })

// app.get("/about",(req, res) => {
//     res.redirect("..")
// })


//render method

// app.get("/user", (req, res) =>{
//     res.render("user")
// })

// app.get("/download", (req, res) => {
//     res.download("./files/deep.jpg", "User.jpg")
// })

// app.get("/download", (req, res) => {
//     res.sendFile(__dirname + "/files/deep.jpg")
// })

// app.get("/end", (req, res) => {
//     res.write("This is testing")
//     res.end()
// })

// app.get("/error", (req, res) => {
//     // res.sendStatus(404) not found
//     // res.sendStatus(200)  //sab ok hai
//     res.status(200).send("hello")
// })

app.get("/check", (req, res) => {
    console.log(res.headersSent)
    res.status(200).send("hello")
    console.log(res.headersSent)
})