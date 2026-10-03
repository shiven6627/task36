const express = require('express')
const dotenv = require('dotenv')
const workoutRoutes = require('./routes/workout')
const mongoose = require('mongoose')
const cors = require('cors')
const userRoutes = require('./routes/user')

dotenv.config()

const app = express()
const PORT = process.env.PORT;


app.use(cors())
app.use(express.json())

app.use((req,res,next)=>{
     console.log(req.path,req.method);
     next()     
})

app.get("/", (req,res)=>{
    res.json({
        msg: "hey how are you"
    })
})

app.use('/api/workouts/', workoutRoutes)
app.use('/api/user/', userRoutes)

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log('✅ MongoDB connected successfully')
    app.listen(PORT,()=>{
         
    console.log(`server is running on http://localhost:${PORT}`);
})
})
.catch((error)=>{ console.log('❌ MongoDB connection failed:', error.message);
})




