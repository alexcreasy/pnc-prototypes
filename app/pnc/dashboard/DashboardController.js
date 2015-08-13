(function() {
  'use strict';

  angular
    .module('pnc.dashboard')
    .controller('DashboardController', DashboardController);

  function DashboardController() {
    var vm = this;

    vm.title = "Dashboard";
  }
})();
