(function() {
  'use strict';

  angular
    .module('pnc.qe')
    .controller('QEController', QEController);

  function QEController() {
    var vm = this;

    vm.title = "QE Handover Process";
  }
})();
