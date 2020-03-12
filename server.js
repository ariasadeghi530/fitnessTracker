const express = require('express');
const router = require("./routes/index.js")

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.get('/workouts', (req,res) => {
  
});

app.get('/workouts/:range', (req,res) => {
 
})

app.post('/workouts', (req, res) => {

})

app.put('/workouts', (req, res) => {

})

mongoose.connect('mongodb://localhost/workout', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => app.listen(3000))
  .catch(e => console.log(e));