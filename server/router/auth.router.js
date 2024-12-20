import { logout, signin, signup } from '../controller/auth.controller.js'
import express from "express"
const router = express.Router();
router.post('/signup',signup)
router.post('/signin',signin)
router.post('/logout',logout)
export default router