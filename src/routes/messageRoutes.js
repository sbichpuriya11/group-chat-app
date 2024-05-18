const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");

/**
 * @swagger
 * components:
 *   schemas:
 *     Message:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated ID of the message
 *         text:
 *           type: string
 *           description: The content of the message
 *         sender:
 *           type: string
 *           description: The ID of the user who sent the message
 *         group:
 *           type: string
 *           description: The ID of the group to which the message belongs
 *         likes:
 *           type: array
 *           items:
 *             type: string
 *           description: Array of user IDs who liked the message
 *       example:
 *         _id: 5ec56b4a44ef3d5e471d854f
 *         text: Hello everyone!
 *         sender: 5ec56b4a44ef3d5e471d854e
 *         group: 5ec56b4a44ef3d5e471d854d
 *         likes: []
 */

/**
 * @swagger
 * /messages:
 *   post:
 *     summary: Send a message to a group
 *     tags:
 *       - Messages
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - text
 *               - sender
 *               - group
 *             properties:
 *               text:
 *                 type: string
 *               sender:
 *                 type: string
 *               group:
 *                 type: string
 *     responses:
 *       201:
 *         description: Message sent successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Message'
 *       500:
 *         description: Server error
 */
router.post("/messages", messageController.sendMessage);

/**
 * @swagger
 * /messages/{id}/like:
 *   post:
 *     summary: Like a message
 *     tags:
 *       - Messages
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Message ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *             properties:
 *               userId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Message liked successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Message'
 *       404:
 *         description: Message not found
 *       500:
 *         description: Server error
 */
router.post("/messages/:id/like", messageController.likeMessage);

module.exports = router;
