angular.module("app")
    .controller("navCtrl", navCtrl);

navCtrl.$inject = ['$scope', '$state', '$timeout'];

function navCtrl($scope, $state, $timeout) {

    $scope.check = function() {
        console.log('hey, from the NavController!');
    };





}
