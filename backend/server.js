const notes=require('./data/notes');
const express = require("express");
const dotenv= require('dotenv');
const app=express();
const connectDB=require("./config/db.js");
const Userrouter=require('./routes/userRoutes.js');
var cors = require("cors");
const { notFound, errorHandler } = require('./middleWare/errorMiddleware.js');

app.use(cors());
dotenv.config();
connectDB();
app.use(express.json());

app.get("/",(req,res)=>{
      res.send("API is running");
    });

app.get('/api/notes',(req,res)=>{
    res.json(notes);
});

app.use("/api/users", Userrouter);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT|| 5000;
console.log(PORT);
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});