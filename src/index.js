require("./models/User");

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const requireAuthorization = require("./middlewares/requireAuthorization");
const userRouter = require("./routers/UserRouter");

const app = express();

app.use(bodyParser.json());
app.use(userRouter);

const mongoUri =
  "monmongodb+srv://dbUser:vpLqE9Pv6ZLZ48XL@cluster0.em1ko.mongodb.net/" +
  "rentmycar?retryWrites=true";

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongo", err);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
