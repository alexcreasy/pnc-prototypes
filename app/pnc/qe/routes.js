(function() {
  'use strict';

  angular
    .module('pnc.qe')
      .config(routes);

  function routes($stateProvider) {
    $stateProvider
      .state('pnc.qe', {
        abstract: true,
        url: '/qe',
        views: {
          'content@pnc': {
            templateUrl: 'pnc/qe/qe.html',
            controller: 'QEController',
            controllerAs: 'vm'
          }
        }
      })

      .state('pnc.qe.binaries', {
        url: '',
        views: {
          'tab-content@pnc.qe': {
            templateUrl: 'pnc/qe/binaries-tab.html',
            controller: 'BinariesTabController',
            controllerAs: 'vm'
          }
        }
      })

      .state('pnc.qe.components', {
        url: '/components',
        views: {
          'tab-content@pnc.qe': {
            templateUrl: 'pnc/qe/components-tab.html',
            controller: 'ComponentsTabController',
            controllerAs: 'vm'
          }
        }
      })

      .state('pnc.qe.pvt', {
        url: '/pvt',
        views: {
          'tab-content@pnc.qe': {
            templateUrl: 'pnc/qe/pvt-tab.html',
            controller: 'PvtTabController',
            controllerAs: 'vm'
          }
        }
      })

      .state('pnc.qe.process', {
        url: '/process',
        views: {
          'tab-content@pnc.qe': {
            templateUrl: 'pnc/qe/process-tab.html',
            controller: 'ProcessTabController',
            controllerAs: 'vm'
          }
        }
      })

      .state('pnc.qe.issues', {
        url: '/issues',
        views: {
          'tab-content@pnc.qe': {
            templateUrl: 'pnc/qe/issues-tab.html',
            controller: 'IssuesTabController',
            controllerAs: 'vm'
          }
        }
      });
  }
})();
