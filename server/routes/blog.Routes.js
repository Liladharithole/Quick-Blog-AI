import express from "express";
import {
  addBlog,
  getAllBlogs,
  getBlogById,
  deleteBlogById,
  publishBlogById,
  getBlogComments,
  addComment,
  generateContent,
} from "../controllers/blogController.js";

import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";

const blogRouter = express.Router();
// add blog
blogRouter.post("/add", upload.single("image"), auth, addBlog);
// get all blogs
blogRouter.get("/all", getAllBlogs);
// get single blog
blogRouter.get("/:blogId", getBlogById);
// delete blog
blogRouter.post("/delete/:blogId", auth, deleteBlogById);
// publish blog
blogRouter.post("/publish/:blogId", auth, publishBlogById);
// get all comments
blogRouter.post("/comments", getBlogComments);
// add comment
blogRouter.post("/add-comment", addComment);
// generate content
blogRouter.post("/generate-content", auth, generateContent);

export default blogRouter;
