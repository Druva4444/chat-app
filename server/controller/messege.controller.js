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
            currentId = currentIdCookie; 
            console.log(currentId+'xxx')// Adjust to your cookie format
        } catch (err) {
            return res.status(400).json({ msg: 'Invalid cookieformat' });
        }

        // Find all users except the current one
        const users = await user.find({ _id: { $ne: currentId } });

        // Respond with the list of users
        return res.status(200).json(users);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: 'Something went wrong' });
    }
}
export async function createmessege(req,res){
    const{text,senderId,receiverId} = req.body
    try {
        if(!text)
            return res.status(400).json({msg:"text shouldnot empty"})
        const newmsg = new messege({senderId,receiverId,text})
       await newmsg.save()
       return res.status(200).json({msg:"message sent "})
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: 'Something went wrong' });
    }
}
export async function getchat(req,res){
const receiverId = req.params?.receiver
try {
    const currentIdCookie = req.cookies.details;
     console.log(currentIdCookie)
     let currentId;
     try {
         currentId = currentIdCookie.id; 
         console.log(currentId)// Adjust to your cookie format
     } catch (err) {
         return res.status(400).json({ msg: 'Invalid cookieformat' });
     }
     console.log(currentId)
     console.log(receiverId)
     const messages = await messege.find({
        $or: [
            { senderId: currentId, receiverId: receiverId },
            { senderId: receiverId, receiverId: currentId }
        ]
    }).sort({ createdOn: 1 }); 
    console.log(messages)
    return res.status(200).json({msgs:messages})
} catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Something went wrong' });
}
}