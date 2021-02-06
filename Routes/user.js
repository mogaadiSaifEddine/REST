const express=require('express');
const router=express.Router();
const User=require('../models/User')

// RETURN ALL USERS 
router.get('/', async (req, res) => {
    try {
      const users = await User.find()
      res.json(users)
    } catch (err) {
        console.log(err);
    }
  })

// ADD A NEW USER TO THE DATABASE 
  router.post('/add', async (req, res) => {
    const { name, email, phone } = req.body;
    const newUser = new User({
        name,
        email,
        phone,
    })
  
    try {
      const user = await newUser.save()
      res.json(user)
    } catch (err) {
        console.log(err);
    }
  })

// EDIT A USER BY ID 
  router.put("/edit/:_id", async (req, res) => {
    const { _id } = req.params;
    try {
      const user = await User.findOneAndUpdate({ _id }, { $set: req.body },{new:true});
      res.json(user)
    } catch (err) {
        console.log(err);
    }
  })
  
// REMOVE A USER BY ID 
  router.put("/delete/:_id", async (req, res) => {
    const { _id } = req.params;
    try {
      const user = await User.findOneAndDelete({ _id });
      res.json(user)
    } catch (err) {
        console.log(err);
    }
  })
  
module.exports = router;