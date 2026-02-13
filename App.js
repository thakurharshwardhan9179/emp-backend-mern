const express=require('express')
const server = express()
const cors=require('cors')
require('./DB/connection.js')
server.use(express.json())
server.use(cors())
server.use('/api',require('./Routes/userRoutes.js'))
server.use('/emp' , require('./Routes/EmpRoutes.js'))


server.listen(8050,()=>{
    
    console.log("server runing at :http://localhost:8050")
})