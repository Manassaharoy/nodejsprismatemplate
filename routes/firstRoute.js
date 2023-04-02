const router = require("express").Router();
const {
  firstHandlerFunction,
  secondHandlerFunction,
  commentHandler,
  moviesHandler
} = require("../controllers/firstRouterHandlers.js");

router.route("/").get(firstHandlerFunction).post(secondHandlerFunction);
router.route("/movies").get(moviesHandler);
router.route("/comments").get(commentHandler);

module.exports = router;
