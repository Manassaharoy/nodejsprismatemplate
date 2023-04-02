const router = require("express").Router();
const { getCoursesFunction } = require("../controllers/courseRouterHandlers");


router.route("/").get(getCoursesFunction)

module.exports = router;