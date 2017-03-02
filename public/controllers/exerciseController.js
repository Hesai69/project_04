(function() {
  'use strict';

  angular.module("FitnessApp")
    .controller("ExerciseController", ExerciseController);

  ExerciseController.$inject = ['$http'];
  function ExerciseController($http){
    var self = this;

    self.workout = [];
    self.current = [];
    self.newExercise = {
      sets: []
    };

    self.getExercises = getExercises;
    self.addExercise = addExercise;
    self.createExercise = createExercise;

    getExercises();

    function addExercise() {
      const set = {repetitions: self.reps, weight: self.weight}
      self.newExercise.name = self.name;
      self.newExercise.sets.push(set);
      console.log('exercise', self.newExercise)
    }

    function getExercises() {
      $http.get('/api/exercises')
        .then(function(response) {
          console.log('get all', response.data.exercises)
          self.workout = response.data.exercises;
        }, function(err) {
          console.log(err);
        });
    }

    function createExercise() {
      self.newExercise.date = new Date().toDateString();
      $http.post('/api/exercises', self.newExercise)
        .then(function(response) {
          console.log('response from server',response)
          self.current.push(self.newExercise);
          self.newExercise = {
            sets: []
          };
          self.name = '';
          self.reps = '';
          self.weight = '';
        }, function(err) {
          console.log(err);
        });
    }


  }
}());
