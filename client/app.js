// const app = angular
//   .module('myApp', [
//     'ngRoute', //stateRoute? uiRoute
//     'Codesmith.HomeController']);

// app.config(configFunction);

// function configFunction($routeProvider, $locationProvider) {

//   $routeProvider
//     .when('/', {
//       templateUrl: './home.html',
//       controller: 'HomeController'
//     })

// }
// const app = angular
angular
  .module('myApp', [])
  .factory('teamFactory', ['$http', function($http){
    const dataArr = ['start'];
    function getTeamData(URL) {
      dataArr.push('it worked');
      // gets dataA
// put it into the arr
    }
    return {
      getTeamData: getTeamData,
       dataArr: dataArr
      }
  }])
  .controller('teamController', ['teamFactory', '$scope', function(teamFactory, $scope){
    $scope.dataArr = teamFactory.dataArr;
    $scope.getTeamData = teamFactory.getTeamData;
    $scope.log = function(index) {
      console.log(index);
    } 
  }])


