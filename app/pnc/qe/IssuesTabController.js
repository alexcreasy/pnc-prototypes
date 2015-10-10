(function() {
  'use strict';

  angular
    .module('pnc.qe')
    .controller('IssuesTabController', IssuesTabController);

  function IssuesTabController() {
    var vm = this;

    vm.content = "Issues Tab";
  }
})();
