const express = require("express");
const { connectMongoDb } = require("./connection");

const { logReqRes } = require("./middlewares");

const userRouter = require("./routes/user");

const app = express();
const PORT = 8000;

// Connection
connectMongoDb("mongo_connection_url").then(() =>
  console.log("MongoDb Connected...")
);

// Middlewares
app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("log.txt"));

// Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`Server started on the port: ${PORT}`));
