const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

//// Get feedback on requests in Development Mode
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//// Enable JSON
app.use(express.json());

//// Cookie Parser
app.use(cookieParser());

//// Enable CORS

app.use(
  cors({
    // origin: ["http://127.0.0.1:3000"],
    credentials: true,
    // sameSite: "none",
    secure: true,
    httpOnly: false,
    sameSite: "Lax",
  })
);

//// Import Routers
const userRouter = require("./routes/userRouter");

//// Routes
app.use("/users", userRouter);

module.exports = app;
