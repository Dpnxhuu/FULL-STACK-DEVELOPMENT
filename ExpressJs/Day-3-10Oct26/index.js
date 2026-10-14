import express from 'express';
const app = express();

app.set('view engine', 'ejs')

app.listen(3000, () => {
  console.log("Successfully connected on port number 3000.");
});

app.use(express.json()); // for normal json data
app.use(express.urlencoded({ extended: false })); // for form data middleware

//#6 lecutre 

// app.post("/about", (req, res) => {
//   res.send(req.body);
// });

// app.get("/about", (req, res) => {
  //   res.send(req.hostname);
  //   res.send(req.ip);
  //   res.send(req.method);
  //   res.send(req.originalUrl);
  //   res.send(req.path);  //returns only path
  //   res.send(req.protocol);  //help to check protocol http or https
  //   res.send(req.secure);
  //   res.send(req.route);
  // if(req.accepts('html')){
  // res.send("<h1>Hello Html</h1>")
  // }
  // else if(req.accepts('json')){
  //     res.send({message: 'Hello Josn'})
  // }
  // else{
  //     res.send("Content type not supported here.")
  // }
  // res.send(req.headers)
  // res.send(req.get("accept"))
// });

// app.post("/check", (req, res) => {
//   if (req.is("application/json")) {
//     res.send("Valid json data");
//   } else if (req.is("text/html")) {
//     res.send("HTML data");
//   } else {
//     res.status(400).send("Unsupported Content-Type.");
//   }
// });

//#7 lecture ejs

app.get("/",(req, res) => {
    res.send("<h1>Home</h1>")
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.get("/profile", (req, res) => {
    res.render("profile",{title: "Profile page", message: "hello profile page"})
})