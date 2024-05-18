const express = require("express");
const router = express.Router();
const groupController = require("../controllers/groupController");

/**
 * @swagger
 * components:
 *   schemas:
 *     Group:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated ID of the group
 *         name:
 *           type: string
 *           description: The name of the group
 *         members:
 *           type: array
 *           items:
 *             type: string
 *           description: Array of user IDs who are members of the group
 *       example:
 *         _id: 5ec56b4a44ef3d5e471d854d
 *         name: My Group
 *         members: []
 */

/**
 * @swagger
 * /groups:
 *   post:
 *     summary: Create a new group
 *     tags:
 *       - Groups
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *               members:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Group created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Group'
 *       500:
 *         description: Server error
 */
router.post("/groups", groupController.createGroup);

/**
 * @swagger
 * /groups/{id}:
 *   delete:
 *     summary: Delete a group by ID
 *     tags:
 *       - Groups
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Group ID
 *     responses:
 *       200:
 *         description: Group deleted successfully
 *       500:
 *         description: Server error
 */
router.delete("/groups/:id", groupController.deleteGroup);

module.exports = router;
