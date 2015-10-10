(function() {
  'use strict';

  angular
    .module('pnc.qe')
    .controller('ProcessTabController', ProcessTabController);

  function ProcessTabController() {
    var vm = this;

    vm.content = "Process Tab";
  }
})();
