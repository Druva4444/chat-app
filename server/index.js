import express from "express"
import connect from "./lib/connection.js";
import dotenv from 'dotenv'
import  cookieParser from 'cookie-parser'
import router from  './router/auth.router.js'
import msgrouter from './router/messege.router.js'
import cors from "cors"

dotenv.config()
const app= express();
connect()
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())
app.use('/api/auth',router)
app.use('/api/messege',msgrouter)
const port = process.env.PORT
app.listen(port,()=>{console.log('app started')})