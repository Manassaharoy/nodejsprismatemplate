const HttpErrors = require("../data/httpErrors.js"); // assuming your enum file is named HttpStatusEnum.js
const { apiResponse } = require("../utils/apiResponse.js");
const { coloredLog } = require("../utils/coloredLog.js");

function errorMiddleware(err, req, res, next) {
  coloredLog(["------> ERROR ------>"], 1);
  coloredLog(["error name: ", err.name], 1);
  coloredLog(["error message: ", err.message], 5);
  coloredLog(["error stack: ", err.stack], 6);
  coloredLog(["<------ ERROR <------"], 1);

  let errDetails = {
    errName: err.name,
    errMessage: err.message,
    // errDetails: err.stack,
  };

  err.message = err.message || "Internal Server Error";

  // Prisma errors
  if (err.code) {
    switch (err.code) {
      case "P2002":
        err.statusCode = 400;
        err.message = "Bad Request";
        break;
      case "P2005":
        err.statusCode = 409;
        err.message = "Conflict";
        break;
      case "P2010":
        err.statusCode = 400;
        err.message = "Bad Request";
        break;
      case "P2014":
        err.statusCode = 400;
        err.message = "Bad Request";
        break;
      case "P2016":
        err.statusCode = 400;
        err.message = "Bad Request";
        break;
      case "P2025":
        err.statusCode = 404;
        err.message = "Not Found";
        break;
      default:
        err.statusCode = 500;
        err.message = "Internal Server Error";
    }
  }

  // console.log("response ----", HttpErrors[err.statusCode]);
  // console.log("HttpErrors[err.statusCode].code ----", HttpErrors[err.statusCode].code);
  // console.log("HttpErrors[err.statusCode].message ----", HttpErrors[err.statusCode].message);

  const error = {
    code: HttpErrors[err.statusCode].code || 500,
    message: HttpErrors[err.statusCode].message || "Internal Server Error",
  };


  let response = apiResponse(false, null, error);

  return res.status(err.statusCode).json(response)

  // switch (err.statusCode) {
  //   case 400:
  //     return res.status(err.statusCode).json({
  //       isError: true,
  //       error: {
  //         ...HttpErrors[err.statusCode],
  //         // errDetails,
  //       },
  //     });
  //   case 401:
  //     return res.status(err.statusCode).json({
  //       isError: true,
  //       error: {
  //         ...HttpErrors[err.statusCode],
  //         // errDetails,
  //       },
  //     });
  //   case 402:
  //     return res.status(err.statusCode).json({
  //       isError: true,
  //       error: {
  //         ...HttpErrors[err.statusCode],
  //         // errDetails,
  //       },
  //     });
  //   case 403:
  //     return res.status(err.statusCode).json({
  //       isError: true,
  //       error: {
  //         ...HttpErrors[err.statusCode],
  //         // errDetails,
  //       },
  //     });
  //   case 404:
  //     return res.status(err.statusCode).json({
  //       isError: true,
  //       error: {
  //         ...HttpErrors[err.statusCode],
  //         // errDetails,
  //       },
  //     });
  //   default:
  //     return res.status(err.statusCode).json({
  //       isError: true,
  //       error: {
  //         ...HttpErrors[err.statusCode],
  //         // errDetails,
  //       },
  //     });
  // }
}

module.exports = {
  errorMiddleware,
};
