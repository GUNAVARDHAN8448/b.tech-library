const express = require('express')
const router = express.Router()
const User= require('../models/User')
router.post("/profiledata", async (req,res) =>{
     try {
      let email=req.body.email
      let profileData=await User.findOne({email})
      res.json({name:profileData.name,location:profileData.location})
     } catch (error) {
      res.send("Server Error", error.message)
     }
})
module.exports = router;