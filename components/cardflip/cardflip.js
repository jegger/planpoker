// NOT USED ANYMORE!
// Ghost script.....
// -----------------
angular.module('cardFlip', [

])
    .controller('flipController', function($scope) {
        $scope.isFlipped = false;

        $scope.flip = function(){
            $scope.isFlipped = !$scope.isFlipped;
        }
    });