var app = angular.module('myApp', []);
app.controller('voituresCtrl', function($scope, $http) {
  // scope est un sevice et il y a toujours un $ avant avec angular
    $http.get("voiture.json")
      .then(function(response) {
        $scope.voitures = response.data;
    });
});
