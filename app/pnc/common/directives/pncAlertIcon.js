(function() {
  'use strict';

  angular
    .module('pnc.common.directives')
      .directive('pncAlertIcon', pncAlertIcon);

  /**
   * @ngdoc directive
   * @name pnc.common.directives:pncAlertIcon
   * @author Alex Creasy
   * @restrict E
   * @description
   * @example
   */
  function pncAlertIcon() {
    return {
      restrict: 'E',
      templateUrl: 'pnc/common/directives/pnc-alert-icon.html',
      link: link,
      scope: {
        pncStatus: '='
      }
    };
  }

  function link(scope, elem, attrs) {
    scope.class = attrs.class;

    scope.isSuccess = function() {
      return scope.pncStatus.toUpperCase() === 'SUCCESS';
    };

    scope.isWarning = function() {
      return scope.pncStatus.toUpperCase() === 'WARNING';
    };

    scope.isDanger = function() {
      return scope.pncStatus.toUpperCase() === 'DANGER';
    };

    scope.isInfo = function() {
      return scope.pncStatus.toUpperCase() === 'INFO';
    };
  }

})();
