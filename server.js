const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("./config/keys").mongoURI;
const itemsPath = require("./routes/api/Items");

const app = express();

// Body parser middleware
app.use(bodyParser.json());

//db connection
mongoose
  .connect(db)
  .then(() => {
    console.log("connected");
  })
  .catch(err => {
    console.log(err);
  });

//accessing routes
app.use("/api/items", itemsPath);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
