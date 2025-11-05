const notFoundHandler = (req, res, next) => {
  res.status(404).json({ message: "Resource not found" });
};

/* eslint-disable no-unused-vars */
const errorHandler = (err, req, res, next) => {
  console.error(err);
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  res.status(statusCode).json({ message });
};
/* eslint-enable no-unused-vars */

export { notFoundHandler, errorHandler };

