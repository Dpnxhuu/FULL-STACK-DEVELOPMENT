import Contact from "../models/contacts.model.js";

// Contact na mile toh 404 error throw karne ka helper
const notFoundError = () => {
  const err = new Error("Contact not found");
  err.status = 404;
  return err;
};

export const getContacts = async (req, res) => {
  const { page = 1, limit = 2 } = req.query;

  const result = await Contact.paginate(
    {},
    {
      page: parseInt(page),
      limit: parseInt(limit),
    }
  );

  res.render("home", {
    totalDocs: result.totalDocs,
    limit: result.limit,
    totalPages: result.totalPages,
    currentPage: result.page,
    counter: result.pagingCounter,
    hasPrevPage: result.hasPrevPage,
    hasNextPage: result.hasNextPage,
    prevPage: result.prevPage,
    nextPage: result.nextPage,
    contacts: result.docs,
  });
};

export const getContact = async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) throw notFoundError();

  res.render("show-contact", { contact });
};

export const addContactPage = (req, res) => {
  res.render("add-contact");
};

export const addContact = async (req, res) => {
  await Contact.create(req.body);
  res.redirect("/");
};

export const updateContactPage = async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) throw notFoundError();

  res.render("update-contact", { contact });
};

export const updateContact = async (req, res) => {
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body);
  if (!contact) throw notFoundError();

  res.redirect(`/show-contact/${req.params.id}`);
};

export const deleteContact = async (req, res) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);
  if (!contact) throw notFoundError();

  res.redirect("/");
};