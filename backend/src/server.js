require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT ;
const DB_STRING = process.env.DB_URL;
const noteRoutes = require("../src/routes/noteRoutes")

// connect to DB
app.use(express.json());

mongoose
.connect(DB_STRING)
.then( ()=> {console.log("Connected to database :", mongoose.connection.name)})
.catch( (err)=>{console.log(err)})

app.use("/api/notes",noteRoutes)


app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
})
  