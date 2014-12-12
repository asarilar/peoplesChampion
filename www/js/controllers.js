angular.module('starter.controllers', ['firebase'])

.controller('DashCtrl', function($scope) {
})

.controller('FightsCtrl', function($scope, $firebase, Fights){
  $scope.fights = Fights.all();

  var ref = new Firebase('https://radiant-fire-6564.firebaseio.com/');
  var fightsRef = ref.child('fights');

  fightsRef.set({
    mayweatherPacquiao: {
      date_of_fight: 'never'
    }
  });
})

.controller('FightScorecardCtrl', function($scope, $stateParams, Fights){
  $scope.fight = Fights.get($stateParams.fightId);

  $scope.roundNum = 1;
  $scope.fighter1scores = [];
  $scope.fighter2scores = [];

  $scope.nextRound = function(){
    if ($scope.roundNum <= 12){
      $scope.f1score = document.getElementsByName('fighter1');
      $scope.f2score = document.getElementsByName('fighter2');

      for(var i = 0; i < $scope.f1score.length; i++){
        if($scope.f1score[i].checked){
          $scope.fighter1scores.push(parseInt($scope.f1score[i].value));
        }

        if($scope.f2score[i].checked){
          $scope.fighter2scores.push(parseInt($scope.f2score[i].value));
        }
      }

      $scope.total1 = $scope.fighter1scores.reduce(function(a, b){ return a + b; });
      $scope.total2 = $scope.fighter2scores.reduce(function(a, b){ return a + b; });

      $scope.roundNum += 1;
    }
  };
})

.controller('AccountCtrl', function($scope) {
});
