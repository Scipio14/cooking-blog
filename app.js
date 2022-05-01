require("dotenv").config();
const port = process.env.PORT || 5000;
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const routes = require("./server/routes/recipeRoutes");

app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(expressLayouts);

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
