/* Import Express and Router */
const express = require('express');
const router = express.Router();
 const bcrypt = require('bcryptjs');
const {body, validationResult} = require('express-validator'); 
 const Category = require('../../models/category');
  
router.get('/',(req,res)=>{
    res.send('category / called..')
});

router.post('/add',async (req,res)=>{

const {catname,catpriority} = req.body;

let category = new Category({
    catname,catpriority
});

category = await category.save();
 

res.json({category});
});



module.exports = router;