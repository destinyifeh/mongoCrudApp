const express = require("express");
const { json } = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/todoRoute");

const app = express();

const connectionString = "mongodb://localhost:27017/todoapp";
mongoose.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Database up and running successfully");
    }
  }
);

app.use(json());

app.use("/", routes);

const port = process.env.PORT || 6000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
