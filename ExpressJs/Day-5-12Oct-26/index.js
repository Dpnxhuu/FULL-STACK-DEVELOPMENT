import express from "express"
const app = express();

app.set("view engine", "ejs")
app.use(express.urlencoded({extended: false}))
app.use(express.static("public"))

app.get("/",(req, res) => {
    res.render("home")
})

app.get("/add-contact", (req, res) => {
    res.render("add-contact")
})
app.get("/show-contact", (req, res) => {
    res.render("show-contact")
})
app.get("/update-contact", (req, res) => {
    res.render("update-contact")
})

app.listen(3000, () => {
    console.log("Listening at port 3000")
})