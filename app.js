angular.module('pokerApp', [
])
    .controller('mainController', function($scope){
        $scope.cards = [
                        {text : 0, flipped: false},
                        {text : 0.5, flipped: false},
                        {text : 1, flipped: false},
                        {text : 2, flipped: false},
                        {text : 3, flipped: false},
                        {text : 5, flipped: false},
                        {text : 8, flipped: false},
                        {text : 13, flipped: false},
                        {text : 20, flipped: false},
                        {text : 40, flipped: false},
                        {text : 100, flipped: false},
                        {text : "coffe", flipped: false}
                        ]
        $scope.canGoBack = false;
        showAll();

        $scope.selectCard = function(card){
            card.flipped = !card.flipped;
            $scope.shownCards = [card];
            $scope.canGoBack = true;
        }

        function showAll(){
            for (card in $scope.cards){
                $scope.cards[card].flipped = false;
                $scope.canGoBack = false;
            }
            $scope.shownCards = $scope.cards
            console.log($scope.shownCards)
        }
        $scope.showAll = showAll

    })