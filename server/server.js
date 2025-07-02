import express from "express";
import cors from "cors";
import dotenv from "dotenv";



const app = express();
// middleware
app.use(cors());
// parse json
app.use(express.json());
// dotenv
dotenv.config();
// port
const PORT = process.env.PORT || 3000;





