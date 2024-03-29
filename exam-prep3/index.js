const express = require("express");
const expressConfig = require('./config/express')
start();

async function start() {
  const app = express();

  expressConfig(app)

  app.listen(3000, () => console.log("Server running on port 3000"));
}
