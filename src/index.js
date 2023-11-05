import { config } from "dotenv";

import app from "./app.js";
import db from "./db.js";

config()
db()

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server listen")
})