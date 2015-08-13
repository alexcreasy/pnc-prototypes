(function() {
  'use strict';

  angular
    .module('pnc.dashboard')
      .config(routes);

  function routes($stateProvider) {
    $stateProvider.state('pnc.dashboard', {
      url: '/',
      views: {
        'content@pnc': {
          templateUrl: 'pnc/dashboard/dashboard.html',
          controller: 'DashboardController',
          controllerAs: 'vm'
        }
      }
    });
  }
})();
