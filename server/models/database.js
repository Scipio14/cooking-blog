const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Mongodb connected"))
  .catch((err) => {
    console.log(err);
  });

//Models
require("./Category");
require("./Recipe");

//module.exports = db;
