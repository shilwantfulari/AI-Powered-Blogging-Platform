
import express from "express";
import {createBlog,getBlogs,aiSuggest} from "../controllers/blogController.js";
import jwt from "jsonwebtoken";

const router = express.Router();

const protect = (req,res,next)=>{
  const token = req.headers.authorization?.split(" ")[1];
  if(!token) return res.status(401).json({msg:"No token"});
  req.user = jwt.verify(token,process.env.JWT_SECRET);
  next();
};

router.post("/",protect,createBlog);
router.get("/",getBlogs);
router.post("/ai",aiSuggest);

export default router;
