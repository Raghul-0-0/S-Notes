require('dotenv').config();
const cors = require('cors')
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT ;
const DB_STRING = process.env.DB_URL;
const noteRoutes = require("../src/routes/noteRoutes")
const authRoutes = require("./src/routers/authRouter");

app.use(cors({
  origin: 'http://localhost:5173', // frontend origin
  methods: ['GET', 'POST'],
  credentials: true 
}));


app.use(express.json());

mongoose
.connect(DB_STRING)
.then( ()=> {console.log("Connected to database :", mongoose.connection.name)})
.catch( (err)=>{console.log(err)})

app.use("/api/auth/google", authRoutes);
app.use("/api",noteRoutes)


app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
})
  





