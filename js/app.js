(function () {
'use strict';

angular.module('LunchCheck', [])
  .controller('lcController', lcController);
lcController.$inject = ['$scope'];


function lcController($scope) {
  //$scope.itemlist = "caca, maca"

  $scope.checkIfTooMuch = function () {
    if (!$scope.itemlist) {
      $scope.message = "Please enter data first!";
      $scope.style = { "color": "red" }
    } else {
        var arrayOfInput = $scope.itemlist.split(",");
        if ((arrayOfInput.length > 0) && (arrayOfInput.length <=3 )) {
          $scope.message = "Enjoy!";
          $scope.style = { "color": "green" }
        } else if (arrayOfInput.length > 3) {
          $scope.message = "Too much!";
          $scope.style = { "color": "green" }
          }
        }

  };
};

})();
