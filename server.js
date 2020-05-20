//accessing express from our dependencies
const express = require("express");
const path = require("path");

//initilizing our "App" and setting it to express
const app = express();

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//setting variable for PORT data to be used || process.env.PORT = deployed PORT key
const PORT = process.env.PORT || 5000;

//firing server
app.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT}`);
});
