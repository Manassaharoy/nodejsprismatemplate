const tryCatchMiddleware = require("../middlewares/tryCatch.js");
const { ErrorHandler } = require("../utils/errorHandler.js");
const { coloredLog } = require("../utils/coloredLog.js");

//! Prisma
const { PrismaClient } = require("@prisma/client");
const { apiResponse } = require("../utils/apiResponse.js");
const prisma = new PrismaClient();

prisma
  .$connect()
  .then(() => {
    coloredLog("Prisma is on", 5);
  })
  .catch((error) => {
    coloredLog(["Prisma Error!!!", error.message], 6);
  });

// to throw error =>  return next(new ErrorHandler(message, statusCode));

const createUser = tryCatchMiddleware(async (req, res, next) => {
  coloredLog([JSON.stringify(req.body)], 5);
  const { name } = req.body;

  let user = await prisma.user.create({ data: { name: name } });

  const response = apiResponse(true, user);

  res.locals.sendData = {
    response: response,
  };
  next();
});

const updateUser = tryCatchMiddleware(async (req, res, next) => {
  coloredLog([JSON.stringify(req.body)], 5);
  const { name, id } = req.body;

  const user = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      name: name,
    },
  });

  const response = apiResponse(true, user);

  res.locals.sendData = {
    response: response,
  };
  next();
});

const deleteUser = tryCatchMiddleware(async (req, res, next) => {
  coloredLog([JSON.stringify(req.body)], 5);
  const { id } = req.body;

  let user = await prisma.user.delete({
    where: {
      id: id,
    },
  });

  const response = apiResponse(true, user);

  res.locals.sendData = {
    response: response,
  };
  next();
});

const getAllUsers = tryCatchMiddleware(async (req, res, next) => {
  let users = await prisma.user.findMany();

  const response = apiResponse(true, users);

  res.locals.sendData = {
    response: response,
  };
  next();
});

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};
