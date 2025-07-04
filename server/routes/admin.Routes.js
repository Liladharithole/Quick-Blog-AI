import express from "express";
import { adminLogin } from "../controllers/adminController.js";
import { getAllBlogsAdmin } from "../controllers/adminController.js";
import { getAllComments } from "../controllers/adminController.js";
import { getDashboard } from "../controllers/adminController.js";
import { deleteCommentById } from "../controllers/adminController.js";
import { approveCommentById } from "../controllers/adminController.js";
import auth from "../middleware/auth.js";
const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);
adminRouter.get("/blogs", auth, getAllBlogsAdmin);
adminRouter.get("/comments", auth, getAllComments);
adminRouter.get("/dashboard", auth, getDashboard);
adminRouter.post("/delete-comment", auth, deleteCommentById);
adminRouter.post("/approve-comment", auth, approveCommentById);

export default adminRouter;





