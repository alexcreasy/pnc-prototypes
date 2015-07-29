(function() {
  'use strict';

  angular
    .module('pnc.header')
    .controller('HeaderController', HeaderController);

  function HeaderController() {
    var vm = this;

    vm.topLevelStates = [
      {
        name: 'Home',
        sref: 'pnc.home'
      },
      {
        name: 'Todo List',
        sref: 'pnc.todo'
      }
    ];
  }
})();
