const Empmodel=require('../Model/Empmodel')
// Create Employee
const saveEmp=async(req,res)=>{
  const {name,email,salary,role,age}=req.body

  try{
    const{name,email,salary,role,age}=req.body
    const newEmp=new Empmodel({
    name,
    email,
    salary,
    role,
    age
    
  })
  await newEmp.save()
  res.status(201).json({message:"Employee created successfully"})
}
catch(error){
  console.log(error)
  res.status(500).json({message:"Something went wrong"})
}
}

// get emp
const getEmp=async(req,res)=>{
  try{
    const employees=await Empmodel.find()
    res.status(200).json(employees)
  }catch(error){
    console.log(error)
    res.status(500).json({message:"Something went wrong"})
  }
  
}
// update emp deatils
const updateEmp = async (req, res) => {
  try {
      const updatedEmployee = await Empmodel.findByIdAndUpdate(req.params.id, req.body, { new: true });

      if (!updatedEmployee) return res.status(404).json({ message: "Employee not found" });

      res.status(200).json({ message: "Employee Updated Successfully", updatedEmployee });
  } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong" });
  }
};
// delete ke liye functionalty
  
 const deleteEmp=async(req,res)=>{
  try{
    const deletedEmployee= await Empmodel.findByIdAndDelete(req.params.id);
    if(!deletedEmployee)return res.status(404).json({message:"employee not found"})
    res.status(200).json({message:"employee Delete Successfully"})
  }
  catch(error){
    console.log(error)
    res.status(500).json({
      message:"Something went weong"
    })
  }
 }
module.exports={saveEmp,getEmp,updateEmp,deleteEmp}