

angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */

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
