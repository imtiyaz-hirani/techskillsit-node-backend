/* Set up Express Server */
const express = require('express');
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
app.use('/api/listing', require('./routes/api/listing'));
app.use('/api/track', require('./routes/api/track'));
app.use('/api/course', require('./routes/api/course'));
app.use('/api/module', require('./routes/api/module'));
app.use('/api/video', require('./routes/api/video'));
//app.use('/api/auth', require('./routes/api/auth'));
 

/* Set up port and start the server */
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{ console.log('app working..') }); 
// Export the Express API
module.exports = app