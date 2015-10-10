(function() {
  'use strict';

  angular
    .module('pnc.qe')
      .config(routes);

  function routes($stateProvider) {
    $stateProvider.state('pnc.qe', {
      url: '/qe',
      views: {
        'content@pnc': {
          templateUrl: 'pnc/qe/qe.html',
          controller: 'QEController',
          controllerAs: 'vm'
        }
      }
    });
  }
})();
