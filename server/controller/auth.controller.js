import user from '../models/user.model.js'

export async function signup(req,res){
    const {name,email,password} = req.body;
    try {
        if(!email || !password || !name)
            return res.status(400).json({msg:"all fields are import"})
        const suser =await user.findOne({email})
        if(suser){
            return res.status(400).json({msg:"user already exist"})
        }
        const newuser = new user({name:name,email:email,password:password})
        await newuser.save()
        
        return res.status(201).json({msg:"user created"})
    } catch (error) {
        return res.status(500).json({msg:"someting went wrong in backend"})
    }
}
export async function signin(req,res){
    const {email,password} = req.body;
    try {
        if(!email || !password)
            return res.status(400).json({msg:"all fields are required"})
        const suser = await user.findOne({email,password})
        if(!suser)
            return res.status(400).json({msg:"invalid credentials"})
        res.cookie("details",suser._id,{maxAge:24*60*60*1000});
        return res.status(200).json({msg:"loggedd in"})
    } catch (error) {
        return res.status(500).json({msg:"someting went wrong in backend"})
    }
}
export async function logout(req,res){
    res.cookie("details",{},{maxAge:0})
    return res.status(200).json({msg:"logged out"})
}