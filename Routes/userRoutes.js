const usercontroller=require('../Controller/UserController')
const express=require('express')
// const {application}=require('express')
const router=express.Router()
router.post('/saveUser',usercontroller.saveUser)
router.post('/login',usercontroller.loginUser)
module.exports=router