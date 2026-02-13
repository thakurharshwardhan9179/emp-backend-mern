const mongoose =require('mongoose')
const db="mongodb+srv://Harsh_wardhan:Ram$$123@cluster0.ussvn6i.mongodb.net/?appName=Cluster0"

mongoose.connect(db,{

}).then(()=>console.log("mongodb connected")).catch((error)=>{
    console.log(error.message)
}
)