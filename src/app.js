import express from "express";
import cors from "cors"

import routers from "./routers/index.js";

const app = express()

app.use(cors())
app.use(express.json())

// monitoring
app.get("/", (req, res)=>{
    res.json({msg:"hola"})
})

app.use("/api/comments", routers.CommentsRouter)


export default app;