const router = require("express").Router();
const {
  firstHandlerFunction,
  secondHandlerFunction
} = require("../controllers/firstRouterHandlers.js");

router.route("/").get(firstHandlerFunction).post(secondHandlerFunction);

module.exports = router;
