const express = require("express");
const mongoose = require("mongoose");
const logger = require('morgan')

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use(require('./routes/htmlRoutes'));
app.use(require('./routes/apiRoutes'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
  
});



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
