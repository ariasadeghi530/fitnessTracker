const express = require('express');
const router = require("./routes/index.js")

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use(require('./routes'))

require('./config')
  .then(() => app.listen(3000))
  .catch(e => console.log(e));
