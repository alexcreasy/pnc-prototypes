(function() {
  'use strict';
  
  angular
    .module('pnc.common.directives')
      .directive('pncHeader', pncHeader);

  /**
   * @ngdoc directive
   * @name pnc.common.directives:pncHeader
   * @author Alex Creasy
   * @restrict E
   * @description
   * This directive is used to create a standard pnc header with left
   * aligned heading text with a right aligned toolbar.
   * @example
   * <pnc-header>
   *   <pnc-header-title>Build Configurations</pnc-header-title>
   *   <pnc-header-buttons>
   *     <button ng-click="ctrl.create()">create</button>
   *     <button ng-click="ctrl.update()">update</button>
   *     <button ng-click="ctrl.delete()">delete</button>
   *   </pnc-header-buttons>
   * <pnc-header>
   */
  function pncHeader() {
    return {
      restrict: 'E',
      templateUrl: 'pnc/common/directives/pnc-header.html',
      transclude: true,
      link: link
    };
  }

  function link(scope, element, attrs, ctrl, transclude) {
    transclude(scope.$new(), function(clone) {
      element.find('.header-title').append(clone.filter('pnc-header-title'));
    });

    transclude(scope.$new(), function(clone) {
      element.find('.btn-group').append(clone.filter('pnc-header-buttons'));
      element.find('pnc-header-buttons').addClass('btn-group');
    });
  }

})();
