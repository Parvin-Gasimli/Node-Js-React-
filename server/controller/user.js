const bcyrpt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserModal = require("../models/user");

const secret = "test";

 const SignUp = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });
    if (oldUser) {
      return res.status(400).json({ message: "User already exsist" });
    }

    const hashPassword = await bcyrpt.hash(password, 12);

    const result = await UserModal.create({
      email,
      password: hashPassword,
      name: `${firstName} ${lastName}`
    });

    const token = jwt.sign({ email: res.email, id: result._id }, secret, {
      expiresIn: "1h"
    });

    res.status(201).json({result,token})
  } catch (error) {
    res.status(500).json({message:"Someting went wrong"})
    console.log(error);
  }
};

module.exports=SignUp