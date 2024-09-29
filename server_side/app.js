const app=express()
import express from "express"
import mongoose from "mongoose"
import Connection from "./connection.js"
import router from "./router.js"
import env from "dotenv"
env.config()

app.use(express.static("client_side"))
app.use(express.json())
app.use('/api',router);

Connection().then(()=>{
app.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${process.env.PORT}`);
    
})
}).catch((error)=>{
console.log(error);

})