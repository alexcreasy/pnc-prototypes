(function() {
  'use strict';

  angular
    .module('pnc.todo')
    .controller('TodoController', TodoController);

  function TodoController(Todo) {
    var vm = this;

    vm.todoList = [];

    vm.hasTodos = function () {
      return vm.todoList.length > 0;
    };

    vm.addTodo = function (todo) {
      vm.todoList.push(new Todo(todo.label));
    };

    vm.clearTodos = function () {
      vm.todoList = [];
    };
  }
})();
