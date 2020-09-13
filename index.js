const express = require("express");
const mongoose = require("mongoose");
// const { connect } = require('./database');

// async function main() {
//     // Database Connection
//     await connect();

//     // Express Application
//     await app.listen(4000);
//     console.log('Server on port 4000: Connected');
// };

// main();

const app = express();
const PORT = 5000;
app.use(express.json());

app.listen(PORT, () => {
  console.log("Server started at port number " + PORT);
});

mongoose.connect(
    "mongodb://localhost:27017/users",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (err) console.log(err);
      else console.log("Connected to the database");
    }
  );