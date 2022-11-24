const express=require("express")

const router=express.Router()
const SignUp =require("../controller/user")

router.post("/user",SignUp)

module.exports=router