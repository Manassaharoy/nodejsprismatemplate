const { coloredLog } = require("../utils/coloredLog");

const responseMiddleware = (req, res, next) => {

  const { response } = res.locals.sendData

  res.json(response);
};

module.exports = { responseMiddleware };
