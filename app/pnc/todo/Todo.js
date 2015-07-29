(function() {
  'use strict';

  angular
    .module('pnc.todo')
    .factory('Todo', todoFactory);

  function Todo(label) {
    var self = this;

    var thisLabel = label;
    var done = false;

    self.getLabel = function () {
      return thisLabel;
    };

    self.isDone = function () {
      return done;
    };

    self.toggleDone = function () {
      done = !done;
    };
  }

  function todoFactory() {
    return Todo;
  }
})();
