import {} from "dotenv/config"
import express from "express";
import mongoose from "mongoose";
import Cors from "cors"
import Cards from "./dbCards.js";


const app = express();
const port = process.env.PORT || 8001
const dbName = "tinderDB"
const connectionURL = `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.wj1xy.mongodb.net/${dbName}?retryWrites=true&w=majority`


//MIDDLEWARES
app.use(express.json())
app.use(Cors())

//DB CONFIG

mongoose.connect(connectionURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

//API ENDPOINTS

app.get('/',(req,res)=>{
    res.status(200).send("HELLO")
});

app.get('/tinder/cards',(req,res)=>{
    
    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
});

app.post('/tinder/cards',(req,res)=>{

    const dbCard = req.body;

    Cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
});


// LISTENER
app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
})