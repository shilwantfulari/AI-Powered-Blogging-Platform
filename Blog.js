
import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title:String,
  content:String,
  author:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
  tags:[String],
  views:{type:Number,default:0},
  seoDescription:String
},{timestamps:true});

export default mongoose.model("Blog",blogSchema);
