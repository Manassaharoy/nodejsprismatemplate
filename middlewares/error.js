const HttpErrors = require("../data/httpErrors.js"); // assuming your enum file is named HttpStatusEnum.js

function errorMiddleware(err, req, res, next) {
  console.log(err);
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  switch (err.statusCode) {
    case 400:
      return res.status(err.statusCode).json({
        isError: true,
        error: HttpErrors[err.statusCode],
      });
    case 401:
      return res.status(err.statusCode).json({
        isError: true,
        error: HttpErrors[err.statusCode],
      });
    case 402:
      return res.status(err.statusCode).json({
        isError: true,
        error: HttpErrors[err.statusCode],
      });
    case 403:
      return res.status(err.statusCode).json({
        isError: true,
        error: HttpErrors[err.statusCode],
      });
    case 404:
      return res.status(err.statusCode).json({
        isError: true,
        error: HttpErrors[err.statusCode],
      });

    default:
      return res.status(err.statusCode).json({
        isError: true,
        error: HttpErrors[err.statusCode],
      });
  }
}

module.exports = {
  errorMiddleware,
};
