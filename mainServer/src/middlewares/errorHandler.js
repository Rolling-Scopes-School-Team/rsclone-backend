

const errorHandler = (err, req, res, next) => {
  const date = new Date().toString();

  let data = JSON.parse(JSON.stringify(err));

  data.message = err.message;

  const message = { error: true, date, data };

  res.status(err.statusCode || 400).send({ message: err.message });
};

module.exports = { errorHandler };