const express = require("express");
const bodyParser = require("body-parser");
// const apiRouter = require('./api'); HomeWork9
const apiRouter = require('../HomeWork8/api');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use('/api', apiRouter); HomeWork9
app.use('/weather', apiRouter);

app.get("/", function (req, res) {
  res.send("All right, server is working");
}); 

app.use((req,res) => {
  res.send('Page not found')
})

app.use((err, req, res, next) => {
  res
    .status(500)
    .send(`Sorry, something went wrong: ${err.message}`);
});

app.listen(3001, function () {
  console.log("Server is running on 3001");
})