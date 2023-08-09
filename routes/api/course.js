/* Import Express and Router */
const express = require('express');
const router = express.Router();
 const bcrypt = require('bcryptjs');
const {body, validationResult} = require('express-validator'); 
const Course = require('../../models/course');
  
router.get('/',(req,res)=>{
    res.send('course / called..')
});

router.post('/add',async (req,res)=>{
const {cname,ctrainer,cfee,cfeezoom,cdiscount,cimage,categoryId} = req.body;
let course = new Course({
    cname,ctrainer,cfee,cfeezoom,cdiscount,cimage,categoryId
});

course = await course.save();
 

res.json({course});
});


router.get('/all',async (req,res)=>{
    let courses = await Course.find()
    res.send(courses);
});
module.exports = router;