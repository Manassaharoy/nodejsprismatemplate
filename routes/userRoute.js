const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userRouterHandlers");

const router = require("express").Router();

/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *       name:
 *         type: string
 *   Error:
 *     type: object
 *     properties:
 *       code:
 *         type: integer
 *       message:
 *         type: string
 *   ApiResponse:
 *     type: object
 *     properties:
 *       success:
 *         type: boolean
 *       data:
 *         type: array
 *         items:
 *           $ref: '#/definitions/User'
 *       isError:
 *         type: boolean
 *       error:
 *         $ref: '#/definitions/Error'
 *
 * /user:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all users
 *     responses:
 *       200:
 *         description: A list of users
 *         schema:
 *           $ref: '#/definitions/ApiResponse'
 *
 *   post:
 *     summary: Create a new user
 *     description: Create a new user with the provided name
 *     parameters:
 *       - name: name
 *         description: Name of the user to create
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *     responses:
 *       200:
 *         description: A list of users
 *         schema:
 *           $ref: '#/definitions/ApiResponse'
 *
 *   patch:
 *     summary: Update an user
 *     description: Update the name of an existing user with the provided ID
 *     parameters:
 *       - name: id
 *         description: ID of the user to update
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *             name:
 *               type: string
 *     responses:
 *       200:
 *         description: A list of users
 *         schema:
 *           $ref: '#/definitions/ApiResponse'
 *
 *   delete:
 *     summary: Delete an user
 *     description: Delete an existing user with the provided ID
 *     parameters:
 *       - name: id
 *         description: ID of the user to delete
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *     responses:
 *       200:
 *         description: A list of users
 *         schema:
 *           $ref: '#/definitions/ApiResponse'
 */

router
  .route("/")
  .get(getAllUsers)
  .post(createUser)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = router;
