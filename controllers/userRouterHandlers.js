const tryCatchMiddleware = require("../middlewares/tryCatch.js");
const { ErrorHandler } = require("../utils/errorHandler.js");

//! Prisma
const { PrismaClient } = require("@prisma/client");
const { coloredLog } = require("../utils/coloredLog.js");
const prisma = new PrismaClient();

// to throw error =>  return next(new ErrorHandler(message, statusCode));

const createUser = tryCatchMiddleware(async (req, res, next) => {
  coloredLog([JSON.stringify(req.body)], 5);
  const { name } = req.body;

  let user = await prisma.user.create({ data: { name: name } });
  res.locals.sendData = {
    response: user,
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

  res.locals.sendData = {
    response: user,
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

  res.locals.sendData = {
    response: user,
  };
  next();
});

const getAllUsers = tryCatchMiddleware(async (req, res, next) => {
  let users = await prisma.user.findMany();

  res.locals.sendData = {
    response: users,
  };
  next();
});

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};
