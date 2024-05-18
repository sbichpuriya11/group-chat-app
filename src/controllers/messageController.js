const Message = require("../models/Message");

exports.sendMessage = async (req, res) => {
  const { text, sender, group } = req.body;
  try {
    const newMessage = await Message.create({ text, sender, group });
    res.status(201).json(newMessage);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.likeMessage = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;
  try {
    const message = await Message.findById(id);
    if (!message) {
      return res.status(404).json({ message: "Message not found" });
    }
    if (!message.likes.includes(userId)) {
      message.likes.push(userId);
      await message.save();
    }
    res.json(message);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};
