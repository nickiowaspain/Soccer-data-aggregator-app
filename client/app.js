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
    const URL = 'http://api.football-data.org/v1/competitions/436/leagueTable';

    let data = [];
    function getTeamData() {
      $http.get(URL,{headers:{'X-Auth-Token':'bc5383bad1084e37b75e42a381639d5e' }})
      .then(function(response){
        console.log(response.data.standing)
          
          // console.log('this is dataArr' ,dataArr)
          for(let i = 0; i < response.data.standing.length; i++){
            data.push(response.data.standing[i])
          }
          //dataArr.push(response.data.standing[0].teamName)
      })
      //dataArr.push(data);
      //dataArr.push('it worked');
      // gets dataA
// put it into the arr
    }
    return {
      getTeamData: getTeamData,
       dataArr: data
      }
  }])
  .controller('teamController', ['teamFactory', '$scope', function(teamFactory, $scope){
    $scope.dataArr = teamFactory.dataArr;
    $scope.getTeamData = teamFactory.getTeamData;
    $scope.log = function(index) {
      console.log(index);
    } 
  }])



