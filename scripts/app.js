var app = angular.module('mainApp', []);
// this runs before the app is loaded
app.config(function() {

});
// this runs while the app is running
app.run(function() {

});
// controller thats controls the data for the application/ section based on type
app.controller('mainController', ['$scope', function($scope) {
    $scope.removeEmployee = function(employee) {
        const getEmployeeIndex = $scope.employeeArray.indexOf(employee);
        $scope.employeeArray.splice(getEmployeeIndex, 1);
    };

    $scope.employeeArray = [{
        name: 'Sandeep',
        age: 21,
        available: true,
    },
    {
        name: 'Priyanka',
        age: 22,
        available: true, 
    },
    {
        name: 'Abinash',
        age: 23,
        available: true,
    },
    {
        name: 'Vishal',
        age: 24,
        available: true,
    },
    {
        name: 'Hardhik',
        age: 27,
        available: true,
    }];
}]);