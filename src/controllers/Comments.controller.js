import Comment from "../models/Comments.js";
import regExp from "../utils/regExp.js";
import resend from "../utils/resend.js"

class CommentsController {

    async createComment(req,res) {
        const {email, message} = req.body;

        const errors = this.validations(req)

        if(errors.length){
            return res.status(400).json({
                errors
            })
        }

        email ? resend(email) : 0;

        const comment = await Comment({email, message}).save()

        return res.json({
            msg: "success",
            comment
        })
    }




    validations(req){
        const {email, message} = req.body;
        const errors = []


        if(email){
            if(typeof email !== "string") errors.push({
                field: "email",
                msg: "is not a string"
            })

            if(!regExp.email.test(email)) errors.push({
                field: "email",
                msg: "invalid format"
            })
        }

        if(!message) errors.push({
            field: "message",
            msg: "is required"
        })
        else if(message){
            if(typeof message !== "string") errors.push({
                field: "message",
                msg: "is not a string"
            })

            else if(!message.trim()) errors.push({
                field: "message",
                msg: "is empty"
            })
            
        
            else if(message.length > 200) errors.push({
                    field: "message",
                    msg: "Max length of 200 characters exceeded"
            })
    
        }


        return errors
    }
}

export default new CommentsController