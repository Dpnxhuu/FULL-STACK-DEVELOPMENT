import express from "express";
import mongoose from "mongoose";
import Contact from "./models/contacts.model.js";
const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/contacts-crud")
  .then(() => {
    console.log("Database connected.");
  })
  .catch((err) => console.log("DB error:", err));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  const contacts = await Contact.find();
  res.render("home", { contacts });
});

app.get("/add-contact", (req, res) => {
  res.render("add-contact");
});

app.post("/add-contact", async (req, res) => {
  await Contact.insertOne({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
  });
  res.redirect("/");
});

app.get("/show-contact/:id", async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.render("show-contact", { contact });
});
app.get("/update-contact/:id", async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  res.render("update-contact", {contact});
});

app.post("/update-contact/:id", async (req, res) => {
 try {
    await Contact.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/show-contact/${req.params.id}`);
  } catch (err) {
    console.log(err);
    res.status(500).send("Update fail ho gaya");
  }
});

app.post("/delete-contact/:id", async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id)
  res.redirect("/")
});

app.listen(3000, () => {
  console.log("Listening at port 3000");
});
