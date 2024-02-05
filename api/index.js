import express from "express";
const app = express();

import authRoute from "./routes/auth.js";
import commentRoute from "./routes/comments.js";
import likeRoute from "./routes/likes.js";
import postRoute from "./routes/posts.js";
import userRoute from "./routes/users.js";
import cookieParser from "cookie-parser";
import cors from "cors";

// middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/comments", commentRoute);
app.use("/api/likes", likeRoute);
app.use("/api/posts", postRoute);
app.use("/api/users", userRoute);

app.listen(8800, () => {
  console.log("API Working");
});
