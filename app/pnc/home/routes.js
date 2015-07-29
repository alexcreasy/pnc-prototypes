(function() {
  'use strict';

  angular
    .module('pnc.home')
      .config(routes);

  function routes($stateProvider) {
    $stateProvider.state('pnc.home', {
      url: '/',
      views: {
        'content@pnc': {
          templateUrl: 'pnc/home/home.html',
          controller: 'HomeController',
          controllerAs: 'vm'
        }
      }
    });
  }
})();
