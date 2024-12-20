import express from "express"
import { createmessege, getchat, getusers } from "../controller/messege.controller.js"
import protect from "../middleware/auth.middleware.js"
const router = express.Router()
router.get('/getusers',protect,getusers)
router.post('/sendmessege',protect,createmessege)
router.get('/getchat/:receiver',protect,getchat)

export default router