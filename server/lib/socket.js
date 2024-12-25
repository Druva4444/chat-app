import {Server} from "socket.io"
import express from "express"
import http from "http"
const app = express()
const server = http.createServer(app)
const io = new Server(server,{
    cors:{
        origin:'http://localhost:5173'
    }
})
const usersocketmap={}
io.on("connection",(socket)=>{
    console.log('a user connected'+socket.id)
    const userid = socket.handshake.query.userid
    if(userid){
       const id=userid.slice(3, -1);
        usersocketmap[id] = socket.id

    }
})
function returnsocketid(userid){
    return usersocketmap[userid]
}
export {io,app,server,returnsocketid}