'use strict';
angular.module("todoListApp")
.controller('mainCtrl', function($scope, dataService){
  $scope.todos;

  dataService.getTodos(function(response){
    $scope.todos = response.data;
  });

  $scope.addTodo = function() {
    var todo = {name: "This is a new todo."};
    $scope.todos.unshift(todo);
  };

  $scope.deleteTodo = function(todo, $index) {
    dataService.deleteTodo(todo);
    $scope.todos.splice($index, 1);
  };

  $scope.saveTodos = function() {
    var filteredTodos = $scope.todos.filter(function(todo) {
      if(todo.edited) {
        return todo;
      };
    });
    dataService.saveTodos(filteredTodos);
  }
});