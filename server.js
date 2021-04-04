const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

app.use(express.json())

mongoose
  .connect('mongodb://localhost:27017/studentsdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

  if (process.env.NODE_ENV === "production") {

    app.use(express.static("client/build"));
  
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  }

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server stated on port ${port}`));