const ipcRenderer = require('electron').ipcRenderer;

angular.module("app")
    .controller("newPatientCtrl", newPatientCtrl);

newPatientCtrl.$inject = ['$scope', '$state', '$timeout'];

function newPatientCtrl($scope, $state, $timeout) {

	$scope.checkit = function (){


		ipcRenderer.send('db-status', 'fromPF');
		console.log('ipcSent');






	};










}
