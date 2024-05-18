const Group = require("../models/Group");
const User = require("../models/User");

exports.createGroup = async (req, res) => {
  const { name, members } = req.body;
  try {
    const newGroup = await Group.create({ name, members });
    res.status(201).json(newGroup);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deleteGroup = async (req, res) => {
  const { id } = req.params;
  try {
    await Group.findByIdAndDelete(id);
    res.json({ message: "Group deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};
