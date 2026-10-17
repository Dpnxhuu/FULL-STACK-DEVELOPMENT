// Koi route match nahi hua
export const notFound = (req, res) => {
  res.status(404).send("Page not found");
};

// Saare errors yahan aate hain
export const errorHandler = (err, req, res, next) => {
  if (err.status === 404) {
    console.log(`404: ${err.message}`);
  } else {
    console.log(err); // 500 jaise asli errors ka poora detail
  }

  // Galat ObjectId, jaise /show-contact/abc
  if (err.name === "CastError") {
    return res.status(400).send("Invalid ID");
  }

  const status = err.status || 500;
  const message = status === 500 ? "Internal server error." : err.message;

  res.status(status).send(message);
};
