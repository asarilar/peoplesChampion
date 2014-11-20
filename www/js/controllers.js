angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('FightsCtrl', function($scope, Fights){
  $scope.fights = Fights.all();
})

.controller('FightScorecardCtrl', function($scope, $stateParams, Fights){
  $scope.fight = Fights.get($stateParams.fightId);

  $scope.fighter1scores = [];
  $scope.fighter2scores = [];
  $scope.roundNum = 1;

  $scope.nextRound = function(){
    if ($scope.roundNum < 12){
      $scope.roundNum += 1;
    }
  };
})

.controller('AccountCtrl', function($scope) {
});
