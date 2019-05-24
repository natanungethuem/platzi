var app = angular.module('loginApp', ['ngMaterial', 'ngMessages']);

app.controller('MainCtrl', function( $scope ) {
    $scope.loginModel = {
        userName: '',
        password: ''
    };
});