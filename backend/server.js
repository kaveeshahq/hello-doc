import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'

// app config

const app = express()
const port = process.env.PORT || 4000
connectDB()

// middlewares
app.use(express.json())
app.use(cors())

// API endppints
app.get('/' , (req,res)=>{
  res.send("API WORKING Success")
})

app.listen(port,()=>console.log("Server Stareted" , port ))