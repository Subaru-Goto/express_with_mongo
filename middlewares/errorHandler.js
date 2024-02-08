export const errorHandler = (err, req, res) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Server Error";
  res.status(statusCode).send({ error: message });
}