angular.module("app")
	.controller("calendarCtrl", calendarCtrl);

	calendarCtrl.$inject = [ '$scope', '$state', '$timeout' ];

	function calendarCtrl($scope, $state, $timeout){


		var monthNum = 1;


		$scope.month = "January";

	    $scope.cell = {

	    	one:1,
	    	two:2,
	    	three:3,
	    	four:4,
	    	five:5,
	    	six:6,
	    	seven:7,
	    	eight:8,
	    	nine:9,
	    	ten:10,
	    	eleven:11,
	    	twelve:12,
	    	thirteen:13,
	    	fourteen:14,
	    	fifteen:15,
	    	sixteen:16,
	    	seventeen:17,
	    	eighteen:18,
	    	ninteen:19,
	    	twenty:20,
	    	twentyOne:21,
	    	twentyTwo:22,
	    	twentyThree:23,
	    	twentyFour:24,
	    	twentyFive:25,
	    	twentySix:26,
	    	twentySeven:27,
	    	twentyEight:28,
	    	twentyNine:29,
	    	thirty:30,
	    	thirtyOne:31


	    };


		$scope.forward = function(){

			if (monthNum < 12){

		monthNum ++;
		console.log(monthNum);
		changeMonth(monthNum);

	    }


		};

		$scope.back = function(){

			if (monthNum > 1){

			monthNum --;
			console.log(monthNum);
			changeMonth(monthNum);

		}

	};


		function changeMonth ( num ){

			if (num === 1){

				$scope.month = "January";
				$scope.cell.one = "1";
				$scope.cellOneSelect = false;
				$scope.cell.two = "2";
				$scope.cellTwoSelect = false;
				$scope.cell.three = "3";
				$scope.cellThreeSelect = false;
				$scope.cell.four = "";
				$scope.cellFourSelect = false;
				$scope.cell.five = "";
				$scope.cellFiveSelect = false;
				$scope.cell.six = "";
				$scope.cell.seven = "";
				$scope.cell.eight = "";
				$scope.cell.nine = "";
				$scope.cell.ten = "";
				$scope.cell.eleven = "";
				$scope.cell.twelve = "";
				$scope.cell.thirteen = "";
				$scope.cell.fourteen = "";
				$scope.cell.fifteen = "";
				$scope.cell.sixteen = "";
				$scope.cell.seventeen = "";
				$scope.cell.eighteen = "";
				$scope.cell.ninteen = "";
				$scope.cell.twenty = "";
				$scope.cell.twentyOne = "";
				$scope.cell.twentyTwo = "";
				$scope.cell.twentyThree = "";
				$scope.cell.twentyFour = "";
				$scope.cell.twentyFive = "";
				$scope.cell.twentySix = "";
				$scope.cell.twentySeven = "";
				$scope.cell.twentyEight = "";
				$scope.cell.twentyNine = "";
				$scope.cell.thirty = "";
				$scope.cell.thirtyOne = "";


			}
			if (num === 2){

				$scope.month = "February";
				$scope.cell.one = "Yo Feb!";
			}
			if (num === 3){

				$scope.month = "March";
			}
			if (num === 4){

				$scope.month = "April";
			}
			if (num === 5){

				$scope.month = "May";
			}
			if (num === 6){

				$scope.month = "June";
			}
			if (num === 7){

				$scope.month = "July";
			}
			if (num === 8){

				$scope.month = "August";
			}
			if (num === 9){

				$scope.month = "September";
			}
			if (num === 10){

				$scope.month = "October";
			}
			if (num === 11){

				$scope.month = "November";
			}
			if (num === 12){

				$scope.month = "December";
			}









		}




		}
