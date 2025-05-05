const express = require("express");
const cors = require("cors");
const app = express();
require("./bd/conn");

const memoryRoutes = require("./routes");

const corsOptions = {
  origin: "https://full-stack-nu-murex.vercel.app",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static("public"));
app.use("/memories", memoryRoutes);

module.exports = app;
