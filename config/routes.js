const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const exercisesController = require('../controllers/Exercises');

// http://127.0.0.1:3000/Exercises
router.route('/exercises')

  //GET all Exercises
  .get(exercisesController.getAll)

  //POST a new Exercise
  .post(exercisesController.createExercise);


router.route('/exercises/:id')

  // GET return specific Exercise
  .get(exercisesController.getExercise)

  // PATCH update existing Exercise
  .patch(exercisesController.updateExercise)

  // DELETE remove specific Exercise from DB
  .delete(exercisesController.removeExercise);


module.exports = router
