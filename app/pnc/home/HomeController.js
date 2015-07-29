(function() {
  'use strict';

  angular
    .module('pnc.home')
    .controller('HomeController', HomeController);

  function HomeController() {
    var vm = this;

    vm.title = "pnc";
  }
})();
