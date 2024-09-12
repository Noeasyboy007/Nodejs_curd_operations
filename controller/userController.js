const User = require("../model/userModel");

const test = async (req, res) => {
    try {
        return res.json("Hello World!");
    } catch (error) {
        res.status(500).json({ error: "Internal Server error" })
    }
}

const create = async (req, res) => {
    try {
        const userData = new User(req.body);
        const { email } = userData;

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ error: "User already exists with this email" });
        }

        const savedUser = await userData.save();
        res.status(200).json({ message: savedUser });
        console.log("User saved");
    } catch (error) {
        res.status(500).json({ error: "Internal Server error" });
    }
}

const read = async (req, res) => {
    try {
        const users = await User.find();
        if (users.length === 0) {
            return res.status(404).json({ error: "No users found" });
        }

        res.status(200).json({ users });
        console.log("Users fetched");
    } catch (error) {
        res.status(500).json({ error: "Internal Server error" });
    }
}

const update = async (req, res) => {
    try {
        const id = req.params.id;

        const userExists = await User.findOne({ _id: id });
        if (!userExists) {
            return res.status(404).json({ error: "User not found" });
        }

        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ message: updatedUser });
        console.log("User updated");
    } catch (error) {
        res.status(500).json({ error: "Internal Server error" });
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;

        const userExists = await User.findOne({ _id: id });
        if (!userExists) {
            return res.status(404).json({ error: "User not found" });
        }
        await User.findByIdAndDelete({ _id: id });
        res.status(200).json({ message: "User deleted successfully" });
        console.log("User deleted successfully");

    } catch (error) {
        res.ststus(500).json({ error: "Internal Server error" });
        console.log(error);
    }
}

module.exports = { test, create, read, update, deleteUser };