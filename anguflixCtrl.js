app.controller('anguflixCtrl', function($scope, movieAppService) {
  
  $scope.years = [1999];


  $scope.movies = movieAppService.movies;

  $scope.userMovies = movieAppService.userMovies;

  $scope.budget = movieAppService.budget;


  $scope.addMovie = function(movie) {
    movieAppService.addMovie(movie);
  }
  
  $scope.removeMovie = function(movie) {
    movieAppService.removeMovie(movie);
    
  }

  $scope.emptyCollection = function () {
    movieAppService.emptyCollection()

  }
  
  $scope.showMe = function(){
    if($scope.userMovies.length === 0) {
      return true;
    }else{
      return false;
    }
  }

  
  $scope.outOfMoney = function(){
    if ($scope.budget.amount <= 0) {
      return true;
    } else {
      return false
    }
  }


});
