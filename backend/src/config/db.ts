import mongoose from "mongoose";
import { DB_URI } from "./constants";

export const DB_Connection = mongoose.connect(DB_URI)
.then(()=>{
    console.log({msg : "DB Connected !"})
})
.catch((err : string)=>{
    console.log({err : err});
    process.exit(1);
})