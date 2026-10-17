import express from "express";
import {
  addContact,
  addContactPage,
  deleteContact,
  getContact,
  getContacts,
  updateContact,
  updateContactPage,
} from "../controller/contacts.controller.js";
const router = express.Router();

router.get("/", getContacts);

router.get("/add-contact", addContactPage);

router.post("/add-contact", addContact);

router.get("/show-contact/:id", getContact);

router.get("/update-contact/:id", updateContactPage);

router.post("/update-contact/:id", updateContact);

router.post("/delete-contact/:id", deleteContact);

export default router;
