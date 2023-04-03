const { getAllUsers, createUser, updateUser, deleteUser } = require("../controllers/userRouterHandlers");

const router = require("express").Router();

router.route("/").get(getAllUsers).post(createUser).patch(updateUser).delete(deleteUser);

module.exports = router;
