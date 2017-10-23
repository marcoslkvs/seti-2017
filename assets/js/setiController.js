var app = angular.module('Seti', []);


app.controller("setiController", function ($http, $scope) {
    $http.get('json/segunda.json').then(function (response) {
        $scope.segunda = response.data;
    });    
    
    $http.get('json/terca.json').then(function (response) {
        $scope.terca = response.data;
    });    

    $http.get('json/quarta.json').then(function (response) {
        $scope.quarta = response.data;
    });

    $http.get('json/quinta.json').then(function (response) {
        $scope.quinta = response.data;
    });

     $http.get('json/quinta.json').then(function (response) {
        $scope.quinta = response.data;
    });    

     $http.get('json/sexta.json').then(function (response) {
        $scope.sexta = response.data;
    });    

    $http.get('json/sabado.json').then(function (response) {
        $scope.sabado = response.data;
    });

    $http.get('json/domingo.json').then(function (response) {
        $scope.domingo = response.data;
    });

    $http.get('json/palestrantes.json').then(function (response) {
        $scope.palestrantes = response.data;
    });  

    $http.get('json/curadores.json').then(function (response) {
        $scope.curadores = response.data;
    });     
});