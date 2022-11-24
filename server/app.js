const express=require("express")
const mongoose =require("mongoose")
const app=express()
const morgan=require("morgan")
const cors=require("cors")
const UserRouter=require("./routes/user")

const DB_URL="mongodb+srv://Blog:blog@cluster0.30n9q2p.mongodb.net/Blog=true&w=majority"


app.use(morgan("dev"))
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(cors())

app.use("/users",UserRouter)
const PORT =5000;


mongoose.connect(DB_URL).then(()=>{
    app.listen(PORT,()=>{
        console.log(`SERVER IS RUNING ${PORT} `);
        
    })
}).catch(err=>console.log(`${err} did not connect`))

