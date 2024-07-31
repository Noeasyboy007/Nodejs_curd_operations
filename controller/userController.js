const User = require("../model/userModel");

const test = async(req,res)=>{
    try {
        return res.json("Hello World!");
    } catch (error) {
        res.status(500).json({error:"Internal Server error"})
    }
}

const create = async(req,res)=>{
    try {
        const userData = new User(req.body);
        const{email} = userData;
        
        const userExists = await User.findOne({email});
        if(userExists)
        {
            return res.status(400).json({error:"User already exists with this email"});
        }
        
        const savedUser = await userData.save();
        res.status(200).json({message:savedUser});
        console.log("User saved");
    } catch (error) {
        res.status(500).json({error:"Internal Server error"});
    }
}

module.exports = {test,create};