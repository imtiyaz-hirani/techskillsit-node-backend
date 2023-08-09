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
app.get("/",  (req,res)=>{ res.send( 'Api Working')});

//API Middleware
app.use(express.json({
    extended: false
}));

//define routes
app.use('/api/employee', require('./routes/api/employee'));
app.use('/api/course', require('./routes/api/course'));
app.use('/api/category', require('./routes/api/category'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/subcourse', require('./routes/api/subcourse'));


/* Set up port and start the server */
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{ console.log('app working..') }); 
// Export the Express API
module.exports = app