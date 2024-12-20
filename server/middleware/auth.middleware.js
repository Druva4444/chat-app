import user from "../models/user.model.js"

export default async function protect(req,res,next){
    try {
        const cookie = req.cookies?.details
        if(!cookie){
            return res.status(400).json({msg:"unauthorized access1"})
        }
        console.log(cookie)
        const suser = await user.findById(cookie)
        if(!suser)
            return res.status(400).json({msg:"unauthorized access1"})
        req.user = suser
        next()
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"something wrong with server"})
    }
}