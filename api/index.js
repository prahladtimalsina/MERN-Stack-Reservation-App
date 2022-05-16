import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
dotenv.config();

const connect = async ()=>{

    try{
        await mongoose.connect(process.env.MONGO_DB_LOCAL);
        console.log("connected to mongo db");
    }catch(error){
        throw error;
    }
};

mongoose.connection.on("disconnected",()=>{
    console.log("mongo db connection disconnected")
})
// mongoose.connection.on("connected",()=>{
//     console.log("mongo db connection connected")
// })

app.get("/",(req,res)=>{
    res.send("Hello from first request");
})

app.listen(8000,()=>{
    connect();
    console.log("connected to backend")
})