const Usermodel=require('../Model/usermodel')
const jwt=require('jsonwebtoken')
const bcrypt = require('bcrypt')
const saveUser=async(req,res)=>{
    const{name,email,password}=req.body

    const hashpassword=await bcrypt.hash(password,10)
    try{
        const{name,email,password}=req.body
        const newUser=new Usermodel({
            name,
            email,
            password:hashpassword
        })
        await newUser.save()
        res.status(201).json({
            message:"User register sucesfully",user:newUser })
    }
    catch(error){
        console.log(error)
        res.status(5000).json({message:"Something went wrong"})
    }
}
const loginUser=async(req,res)=>{
    const {email,password}=req.body
    try {
        const user=await  Usermodel.findOne({email})
        if(!user){
            return res.status(404).json({message:"user not found"})
        }
        const camparepassword=await bcrypt.compare(password,user.password)
        if(!camparepassword){
            return res.status(401).json({message:"incorrect password"})
        }
        const token =jwt.sign({userId:user._id,email:user.email},"our_Secret_key",{expiresIn:"1d"})
        return res.status(200).json({message:"login sucessefull",user,token})

    }
    catch(error){
        return res.status(500).json({message:"login failed",error:error.message})
    }
}
module.exports={saveUser,loginUser}