const { coloredLog } = require("../utils/coloredLog");

const responseMiddleware = (req, res, next) => {

  

  res.json({
    sent: req.locals.myData,
  });
};

module.exports = { responseMiddleware };
