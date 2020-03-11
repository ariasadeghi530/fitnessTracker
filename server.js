const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.get('/workouts', (req,res) => {

})

app.get('/workouts/:range', (req,res) => {
  
})

app.post('/workouts', (req, res) => {

})

app.put('/workouts', (req, res) => {
  
})