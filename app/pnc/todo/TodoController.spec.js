'use strict';

describe('Controller: TodoController', function () {

  // load the controller's module
  beforeEach(module('pnc.todo'));

  var ctrl,
      scope,
      mockUserInput;

  mockUserInput = [
    {
      label: 'Wash the car'
    },
    {
      label: 'Clean the dishes'
    },
    {
      label: 'Deploy orbital weapons platform'
    }
  ];

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('TodoController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  describe('method hasTodos', function () {
    it('should return false when the todo list is empty', function () {
      expect(ctrl.hasTodos()).toBe(false);
    });

    it('should return true when the todo list contains todos', function () {
      ctrl.todoList.push(mockUserInput[0]);
      expect(ctrl.hasTodos()).toBe(true);
    });
  });

  describe('method addTodo', function() {
    it('should add a todo to the todo list', function () {
      ctrl.addTodo(mockUserInput[0]);
      expect(ctrl.todoList.length).toEqual(1);
    });
  });

});
