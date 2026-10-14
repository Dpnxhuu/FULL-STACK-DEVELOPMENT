import express from "express";

const app = express();

app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("Listening at 3000 port");
});

app.get("/", (req, res) => {
  res.send("<h1>Hello home</h1>");
});

app.get("/about", (req, res) => {
  const users = [
    {
      name: "Rahul",
      age: 22,
      address: "Delhi, India",
    },
    {
      name: "Priya",
      age: 25,
      address: "Mumbai, India",
    },
    {
      name: "Aman",
      age: 21,
      address: "Meerut, India",
    },
    {
      name: "Sneha",
      age: 24,
      address: "Jaipur, India",
    },
    {
      name: "Arjun",
      age: 23,
      address: "Pune, India",
    },
  ];

  res.render("about", {
    title: "about page",
    message: "hello bro",
    items: users,
  });
});
