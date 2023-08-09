/* Import Express and Router */
const express = require('express');
const router = express.Router();
 const bcrypt = require('bcryptjs');
const {body, validationResult} = require('express-validator'); 
const SubCourse = require('../../models/subCourse');
   
router.get('/',(req,res)=>{
    res.send('subcourse / called..')
});

router.post('/add',async (req,res)=>{
const {sbtitle,sbserialno,courseId,sbfee} = req.body;
let subcourse = new SubCourse({
    sbtitle,sbserialno,courseId,sbfee
});

subcourse = await subcourse.save();
 

res.json({subcourse});
});


router.get('/all',async (req,res)=>{
    let subcourse = await SubCourse.find()
    res.send(subcourse);
});

router.get('/all/:cid',async (req,res)=>{
    const cid = req.params['cid']; 
    let subcourses = await SubCourse.find({'courseId':cid})
    res.send(subcourses);
});
module.exports = router;