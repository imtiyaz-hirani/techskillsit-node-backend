/* Set up Express Server */
const express = require('express');
const { add } = require('./functions');
const fetch = require('node-fetch');
const { dbConnect } = require('./config/db');
const cors = require('cors');

const app = express();
 
app.use(cors())

//Connect DB
dbConnect();
 
/* create get for / */
app.get("/",  (req,res)=>{ res.send( {value: add(10,2)}) });

/* Api for calling Users */
app.get("/users", async (req,res)=>{
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await response.json();
        res.send(data);
    }
    catch(err){
        res.send(400,{"msg": err.msg})
    }

});

//API Middleware
app.use(express.json({
    extended: false
}));

//define routes
app.use('/api/employee', require('./routes/api/employee'));
app.use('/api/auth', require('./routes/api/auth'));


/* Set up port and start the server */
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{ console.log('app working..') }); 
