(function() {
  'use strict';

  angular
    .module('pnc.qe')
    .controller('BinariesTabController', BinariesTabController);

  function BinariesTabController() {
    var vm = this;

    vm.content = "Binaries Tab";
  }
})();
