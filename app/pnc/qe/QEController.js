(function() {
  'use strict';

  var data = {
    product: 'JBoss Fuse',
    version: '6.2.1',
    milestone: 'ER1'
  };


  angular
    .module('pnc.qe')
    .controller('QEController', QEController);

  function QEController() {
    var vm = this;

    vm.title = "QE Handover Process";

    vm.product = data.product;
    vm.version = data.version;
    vm.milestone = data.milestone;
  }

})();
