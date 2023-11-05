import {Router} from "express";
import CommentsController from "../controllers/Comments.controller.js"


const router = Router()

router.post("/comment", (req,res)=>{
    CommentsController.createComment(req,res)
})


export default router