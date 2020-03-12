const router = require('express').Router();

const Workout = require('./models');

// GET all workouts
router.get('/workouts', (req, res) => {
  Workout.find()
    .then(workouts => res.json(workouts))
    .catch(e => console.log(e));
  });


// POST an workout
router.post('/workouts', (req, res) => {
  Workout.collection.create(req.body)
    .then(() => res.sendStatus(200))
    .catch(e => console.log(e));
})

// PUT an workout
router.put('/workouts/:id', (req, res) => {
  Workout.collection.update({id: req.params.id}, req.body)
  .then(() => res.sendStatus(200))
  .catch(e => console.log(e));
  });


// DELETE an workout
router.delete('/workouts/:id', (req, res) => {
  Workout.collection.remove({id: req.params.id})
  .then(() => res.sendStatus(200))
  .catch(e => console.log(e));
  });


module.exports = router