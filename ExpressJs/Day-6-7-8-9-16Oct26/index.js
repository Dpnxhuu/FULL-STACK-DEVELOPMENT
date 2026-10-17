import express from "express";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contacts.routes.js";
const app = express();
import { notFound, errorHandler } from "./middlewares/error.middleware.js";

connectDB();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use("/", contactRoutes)

app.use(notFound);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Listening at port 3000");
});
