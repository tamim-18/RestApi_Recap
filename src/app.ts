// seting up the express app
import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./user/userRouter";

const app = express();
//routes
//http methods are:
//GET, POST, PUT, DELETE
app.get("/", (req, res, next) => {
  res.json({ message: "Hello World" });
});

//registering the user router

app.use("/api/users", userRouter);

// global error handler
// it should be the last middleware. otherwise, it will not catch errors
app.use(globalErrorHandler);

export default app;