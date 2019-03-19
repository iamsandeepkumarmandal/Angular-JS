var app = angular.module('mainApp', []);
// this runs before the app is loaded
app.config(function() {

});
// this runs while the app is running
app.run(function() {

});
// controller thats controls the data for the application/ section based on type
app.controller('mainController', ['$scope', function($scope) {
    $scope.name = 'Sandeep';
    $scope.genderArray = ['male', 'female', 'others', 'abc'];
}]);