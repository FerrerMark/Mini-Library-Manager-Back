import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./config/db.js";
import bookRouter from "./routes/bookRoute.js";
import userRouter from "./routes/userRoute.js"; 
import logRouter from "./routes/logRoute.js";

dotenv.config();
await connectDB();

const app = express();

const allowedOrigins = [
  'https://mini-library-manager.onrender.com/'
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ["GET", "POST", "DELETE", "PUT"]
}));

app.use(express.json());

app.use('/uploads', express.static('uploads')); 

app.use("/api/books", bookRouter);
app.use("/api/users", userRouter);
app.use("/", logRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(8080, () => console.log("Server running on port 8080"));
