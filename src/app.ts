// seting up the express app
import express from "express";
import cors from "cors";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./user/userRouter";
import bookRouter from "./book/bookRouter";
import { config } from "./config/config";

const app = express();
// express.json() is a middleware for the json formatting
app.use(express.json());
// cors is a middleware for enabling cross-origin resource sharing
app.use(
  cors({
    origin: config.frontend_url,
  })
);
//routes
//http methods are:
//GET, POST, PUT, DELETE
app.get("/", (req, res, next) => {
  res.json({ message: "Hello World" });
});

//registering the user router

app.use("/api/users", userRouter);
app.use("/api/books", bookRouter);

// global error handler
// it should be the last middleware. otherwise, it will not catch errors
app.use(globalErrorHandler);

export default app;
