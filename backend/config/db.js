import mongoose from "mongoose";

export const connectDb= async()=> {
    await mongoose.connect('mongodb+srv://FreshPort:211013@cluster0.jxrz8ps.mongodb.net/FreshPort').then(()=>console.log("DB Connected"));
}