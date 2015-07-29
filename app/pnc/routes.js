(function() {
  'use strict';

  angular
    .module('pnc')
      .config(routes);

  function routes($stateProvider) {
    $stateProvider.state('pnc', {
      abstract: true,
      views: {
        '': {
          templateUrl: 'pnc/layout.html'
        },
        'header@pnc': {
          templateUrl: 'pnc/header/header.html',
          controller: 'HeaderController',
          controllerAs: 'vm'
        }
      }
    });
  }

})();
