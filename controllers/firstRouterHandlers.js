const tryCatchMiddleware = require("../middlewares/tryCatch.js");
const { ErrorHandler } = require("../utils/errorHandler.js");
// to throw error =>  return next(new ErrorHandler(message, statusCode));

const firstHandlerFunction = tryCatchMiddleware(async (req, res, next) => {

  let userExist = req.params.userStatus || true;

  if (userExist) {
    return next(new ErrorHandler("User exists", 401));
  }

  return res.json({
    status: "User Created",
  });
});

const secondHandlerFunction = tryCatchMiddleware(async (req, res, next) => {
  return res.json({
    status: "Post request test",
  });
});

module.exports = {
  firstHandlerFunction,
  secondHandlerFunction
};
