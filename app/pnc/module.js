(function() {
  'use strict';

  angular
    .module('pnc', [
      'ui.router',
      'pnc.header',
      'pnc.dashboard',
      'pnc.qe',
      'pnc.todo'
    ])
    .config(config)
    .run(run);

  function config($locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(false);
    $urlRouterProvider.when('', '/');
  }

  function run($log, $rootScope) {
    // Log errors with state changes.
    $rootScope.$on('$stateChangeError',
        function(event, toState, toParams, fromState, fromParams, error) {
          $log.debug('Caught $stateChangeError: event=%O, toState=%O, ' +
              'toParams=%O, fromState=%O, fromParams=%O, error=%O',
              event, toState, toParams, fromState, fromParams, error);

          $log.error('Error navigating to "%s": %s %s', toState.url,
              error.status, error.statusText);
        }
  );
}

})();
