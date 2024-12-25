import { returnsocketid,io } from "../lib/socket.js";
import messege from "../models/messege.model.js"
import user from "../models/user.model.js";
export async function getusers(req,res){
    try {
        // Get the current user's ID from the cookie
        const currentIdCookie = req.cookies.details;
        
       // console.log(currentIdCookie)
        // Parse the current ID if it's JSON-encoded
        console.log(currentIdCookie)
        console.log(req.user)
        let currentId;
        try {
            currentId = currentIdCookie 
            console.log(currentId+'xxx')// Adjust to your cookie format
        } catch (err) {
            return res.status(400).json({ msg: 'Invalid cookieformat' });
        }

        // Find all users except the current one
        const users = await user.find({ _id: { $ne: currentId } });
        console.log(users)
        // Respond with the list of users
        return res.status(200).json({users});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: 'Something went wrong' });
    }
}
export async function createmessege(req,res){
    const{text,receiverId} = req.body;
   const senderId=req.cookies.details;
    try {
        if(!text)
            return res.status(400).json({msg:"text shouldnot empty"})
        const newmsg = new messege({senderId,receiverId,text})
       await newmsg.save()
       const socketid = returnsocketid(receiverId)
       const tsocketid = returnsocketid(senderId)
       if(socketid){
        console.log('emitted')
        console.log(socketid)
        io.to(socketid).emit('newmessege',newmsg)
        
       }
       io.to(tsocketid).emit('newmessege1',newmsg)
       return res.status(200).json({msg:"message sent "})
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: 'Something went wrong' });
    }
}
export async function isactive(req,res){
    const {id} = req.body
    try {
        console.log('called')
      const socketid = returnsocketid(id)
      if(socketid)
        return res.status(200).json({status:"active"})
    else
        return res.json({status:"inactive"})

    } catch (error) {
        console.log(error)
    }
}
export async function getchat(req,res){
const receiverId = req.params?.receiver
console.log(receiverId)
try {
    const currentIdCookie = req.cookies.details;
    
     let currentId=currentIdCookie;
     const messages = await messege.find({
        $or: [
            { senderId: currentId, receiverId: receiverId },
            { senderId: receiverId, receiverId: currentId }
        ]
    }).sort({ createdOn: 1 }); 
   
    return res.status(200).json(messages)
} catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Something went wrong' });
}
}