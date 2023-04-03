const HttpErrors = require("../data/httpErrors.js"); // assuming your enum file is named HttpStatusEnum.js
const { coloredLog } = require("../utils/coloredLog.js");

function errorMiddleware(err, req, res, next) {
  // coloredLog(["------> ERROR ------>"],1);
  // coloredLog(["error name: ", err.name],1);
  // coloredLog(["error message: ", err.message],5);
  // coloredLog(["error stack: ", err.stack],6);
  // coloredLog(["<------ ERROR <------"],1);
  console.log(err.code); //TODO: Error
  let errDetails = {
    errName: err.name,
    errMessage: err.message,
    // errDetails: err.stack,
  };

  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  switch (err.statusCode) {
    case 400:
      return res.status(err.statusCode).json({
        isError: true,
        error: {
          ...HttpErrors[err.statusCode],
          errDetails,
        },
      });
    case 401:
      return res.status(err.statusCode).json({
        isError: true,
        error: {
          ...HttpErrors[err.statusCode],
          errDetails,
        },
      });
    case 402:
      return res.status(err.statusCode).json({
        isError: true,
        error: {
          ...HttpErrors[err.statusCode],
          errDetails,
        },
      });
    case 403:
      return res.status(err.statusCode).json({
        isError: true,
        error: {
          ...HttpErrors[err.statusCode],
          errDetails,
        },
      });
    case 404:
      return res.status(err.statusCode).json({
        isError: true,
        error: {
          ...HttpErrors[err.statusCode],
          errDetails,
        },
      });

    default:
      return res.status(err.statusCode).json({
        isError: true,
        error: {
          ...HttpErrors[err.statusCode],
          errDetails,
        },
      });
  }
}

module.exports = {
  errorMiddleware,
};
