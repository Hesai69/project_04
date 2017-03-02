var Exercise = require('../models/Exercise');

// GET
function getAll(request, response) {
  Exercise.find(function(error, exercises) {
    if(error) response.json({message: 'Could not find any exercises'});

    response.json({exercises: exercises});
  }).select('-__v');
}

// POST
function createExercise(request, response) {
  console.log('in POST');
  console.log('body:',request.body);

  var exercise = new Exercise(request.body);

  exercise.save(function(error) {
    if(error) response.json({messsage: 'Could not ceate exercise b/c:' + error});

    response.json({exercise: exercise, message: "Exercise added!"});
  });
}

// GET
function getExercise(request, response) {
  var id = request.params.id;

  Exercise.findById({_id: id}, function(error, exercise) {
    if(error) response.json({message: 'Could not find exercise b/c:' + error});

    response.json({exercise: exercise});
  }).select('-__v');
}

function updateExercise(request, response) {
  var id = request.params.id;

  Exercise.findById({_id: id}, function(error, exercise) {
    if(error) response.json({message: 'Could not find exercise b/c:' + error});

    if(request.body.name) exercise.name = request.body.name;
    if(request.body.start) exercise.start = request.body.start;
    if(request.body.end) exercise.end = request.body.end;

    exercise.save(function(error) {
      if(error) response.json({messsage: 'Could not update exercise b/c:' + error});

      response.json({message: 'Exercise successfully updated', exercise: criminal});
    });
  }).select('-__v');
}

function removeExercise(request, response) {
  var id = request.params.id;

  Exercise.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete exercise b/c:' + error});

    response.json({message: 'Exercise successfully deleted'});
  }).select('-__v');
}

module.exports = {
  getAll: getAll,
  createExercise: createExercise,
  getExercise: getExercise,
  updateExercise: updateExercise,
  removeExercise: removeExercise
}
