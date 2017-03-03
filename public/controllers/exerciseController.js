(function() {
  'use strict';

  angular.module("FitnessApp")
    .controller("ExerciseController", ExerciseController);

  ExerciseController.$inject = ['$http'];
  function ExerciseController($http){
    var exercise = this;

    exercise.array = [];
    exercise.current = [];
    exercise.newExercise = {
      sets: []
    };

    exercise.getExercises = getExercises;
    exercise.addExercise = addExercise;
    exercise.createExercise = createExercise;
    exercise.removeExercise = removeExercise;
    exercise.clearCurrent = clearCurrent;

    getExercises();

    function addExercise() {
      const set = {repetitions: exercise.reps, weight: exercise.weight}
      exercise.newExercise.name = exercise.name;
      exercise.newExercise.sets.push(set);
    }

    function getExercises() {
      $http.get('/api/exercises')
        .then(function(response) {
          exercise.array = response.data.exercises;
        }, function(err) {
          console.log(err);
        });
    }

    function createExercise() {
      exercise.newExercise.date = new Date().toDateString();
      $http.post('/api/exercises', exercise.newExercise)
        .then(function(response) {
          exercise.current.push(exercise.newExercise);
          exercise.array.push(exercise.newExercise);
          exercise.newExercise = {
            sets: []
          };
          exercise.name = '';
          exercise.reps = '';
          exercise.weight = '';
        }, function(err) {
          console.log(err);
        });
    }

    function removeExercise(exercise) {
      $http.delete(`/api/exercises/${exercise._id}`)
        .then(function(response) {
          getExercises();
        }, function(err) {
          console.log(err);
        });
    }
    function clearCurrent() {
      exercise.current = [];
    }

  }
}());
