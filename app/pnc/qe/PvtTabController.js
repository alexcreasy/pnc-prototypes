(function() {
  'use strict';

  angular
    .module('pnc.qe')
    .controller('PvtTabController', PvtTabController);

  function PvtTabController() {
    var vm = this;

    vm.content = "PVT Tab";
  }
})();
