(function() {
  'use strict';

  angular
    .module('pnc')
      .config(routes);

  function routes($stateProvider) {
    $stateProvider.state('pnc.todo', {
      url: '/todo',
      views: {
        'content@pnc': {
          templateUrl: 'pnc/todo/todo.html',
          controller: 'TodoController',
          controllerAs: 'vm'
        }
      }
    });
  }

})();
