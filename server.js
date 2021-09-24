require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require('morgan')
const port = process.env.PORT;

const createSearch = require('./helpers/createSearch');
createSearch();

app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("./views/assets"));

app.set("trust proxy", 1);

app.use(morgan('common'))

app.get("/", (req, res) => {
  res.render("docs/index");
});

app.get("/404", (req, res) => {
  res.render("404");
});

// routes
const docs = require("./routes/docs");
app.use(["/docs", "/documentation"], docs);
const api = require("./routes/api/api.js");
app.use("/api", api);

// Catch 404s
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404;
  res.redirect('/404');
  next(err)
})

app.listen(port, () => {
  console.log(`Site listening at http://localhost:${port}`);
});
