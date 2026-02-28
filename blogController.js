
import Blog from "../models/Blog.js";
import OpenAI from "openai";

export const createBlog = async(req,res)=>{
  const blog = await Blog.create({...req.body,author:req.user.id});
  res.json(blog);
};

export const getBlogs = async(req,res)=>{
  const blogs = await Blog.find().populate("author","name");
  res.json(blogs);
};

export const aiSuggest = async(req,res)=>{
  const openai = new OpenAI({apiKey:process.env.OPENAI_API_KEY});
  const completion = await openai.chat.completions.create({
    model:"gpt-4o-mini",
    messages:[{role:"user",content:req.body.prompt}]
  });
  res.json({suggestion:completion.choices[0].message.content});
};
