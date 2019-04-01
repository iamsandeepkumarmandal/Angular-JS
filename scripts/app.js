var app = angular.module('mainApp', ['ngRoute', 'ngAnimate']);
// this runs before the app is loaded / application starts or runs
app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'mainController',
        })
        .when('/employee', {
            templateUrl: 'views/employee-list.html',
            controller: 'mainController',
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'contactController',
        })
        .when('/contact-success/:name', {
            templateUrl: 'views/contact-success.html',
            controller: 'contactSuccessController',
        })
        .otherwise({
            redirectTo: '/home',
        });
}]);
// this runs while the app is running
app.run(function() {

});
// controller thats controls the data for the application/ section based on type
app.controller('mainController', ['$scope', '$http', function($scope, $http) {
    $scope.removeEmployee = function(employee) {
        const getEmployeeIndex = $scope.employeeArray.indexOf(employee);
        $scope.employeeArray.splice(getEmployeeIndex, 1);
    };

    $scope.addEmployee = function() {
        $scope.employeeArray.push({
            name: $scope.employee.name,
            age: parseInt($scope.employee.age), 
            available: JSON.parse($scope.employee.available),
        });
        $scope.employee = {};
    };

    $http.get('http://www.mocky.io/v2/5c9468c9310000e15d5548d6').then((response) => {
        $scope.employeeArray = response.data;
    });
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
    // convert an array of objects to JSON
    // console.log(angular.toJson($scope.employeeArray));

    $scope.removeAllEmployee = function() {
        $scope.employeeArray = [];
    }
}]);

app.controller('contactController', ['$scope', '$location', function($scope, $location) {
    $scope.pageTitle = 'contact page';
    $scope.sendMessage = function() {
        $location.path(`/contact-success/${$scope.contact.name}`);
    }
}]);

app.controller('contactSuccessController', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.name = $routeParams.name;
}]);

app.directive('employee', [function() {
    return  {
        restrict: 'E',
        scope: {
            employees: '=',
            title: '=',
        },
        templateUrl: 'views/employee.html',
        // to pass any other html / template into the directive defintion from the view
        transclude: true,
        // replace would replace the directive definition from the html rendering
        replace: true,
        controller: function($scope) {
            $scope.random = Math.floor(Math.random() * 4);
        },
    };
}]);