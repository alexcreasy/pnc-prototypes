(function() {
  'use strict';

  var data = {
    product: {
      name: 'JBoss Fuse'
    },
    version: {
      version: '6.2.1'
    },
    milestone: {
      name: 'ER1',
      startDate: '2015/09/09',
      plannedReleaseDate: '2016/01/20'
    }
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
