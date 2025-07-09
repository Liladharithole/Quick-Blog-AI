import express from "express";
import dotenv from "dotenv";
// dotenv
dotenv.config();
import cors from "cors";
import connectDB from "./configs/db.js";
import adminRouter from "./routes/admin.Routes.js";
import blogRouter from "./routes/blog.Routes.js";
const app = express();
// connect to database
await connectDB();
// middleware
app.use(cors());
// parse json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("API is running");
});
// admin routes
app.use("/api/admin", adminRouter);
// blog routes
app.use("/api/blog", blogRouter);
// start server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

export default app;
