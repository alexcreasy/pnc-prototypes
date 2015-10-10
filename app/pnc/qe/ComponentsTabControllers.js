(function() {
  'use strict';

  angular
    .module('pnc.qe')
    .controller('ComponentsTabController', ComponentsTabController);

  function ComponentsTabController() {
    var vm = this;

    vm.content = "Components Tab";
  }
})();
