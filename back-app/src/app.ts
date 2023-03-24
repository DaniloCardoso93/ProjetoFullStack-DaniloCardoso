import "express-async-errors";
import "reflect-metadata";
import express, { Application } from "express"
import cors from "cors"
import { errorHandler } from "./erros"
import userRouter from "./Routers/User/user.router"
import loginRouter from "./Routers/Session/login.router";
import contactRouter from "./Routers/Contact/contact.router";

const app:Application = express();

app.use(express.json());

app.use(cors());

app.use("/login", loginRouter);
app.use("/users", userRouter);
app.use("/contact", contactRouter);

app.use(errorHandler);



export default app;