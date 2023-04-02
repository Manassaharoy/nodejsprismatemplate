const tryCatchMiddleware = require("../middlewares/tryCatch.js");
const { ErrorHandler } = require("../utils/errorHandler.js");

const getCoursesFunction = tryCatchMiddleware(async (req, res, next) => {
  req.locals = { myData: "working well" };
  next();
});

module.exports = {
  getCoursesFunction,
};
