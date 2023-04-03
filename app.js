// const express = require('express')
import express from 'express';
import cors from 'cors';
import HelloController 
    from "./controllers/hello-controller.js"
import UserController 
    from "./controllers/users/users-controller.js"
import TuitsController 
    from "./controllers/tuits/tuits-controller.js";
const app = express()
app.use(express.json())
app.use(cors());
// app.get('/hello', (req, res) => {res.send('Life is good!')})
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
TuitsController(app)
HelloController(app)
UserController(app)
app.listen(process.env.PORT || 4000);