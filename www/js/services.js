angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

.factory('Fights', function(){
  var fights = [
    { id: 0, fighter1: 'Mayweather', fighter2: 'Pacquiao' },
    { id: 1, fighter1: 'Cotto', fighter2: 'Alvarez' },
    { id: 2, fighter1: 'Ward', fighter2: 'Golovkin' },
    { id: 3, fighter1: 'Kovalev', fighter2: 'Stevenson' }
  ];

  return {
    all: function(){
      return fights;
    },
    get: function(fightId){
      return fights[fightId];
    }
  }
});
