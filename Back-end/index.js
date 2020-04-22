const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// middlewares

app.use(bodyparser.json()); 
app.use(cookieParser());
app.use(cors());

// bring in routes

const routes = require("./routes/routes.js");
app.use("/",routes);

app.listen(4000, () => {
  console.log(`express server is running on port 4000`);
});




