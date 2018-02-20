var app = angular.module('PenduApp', ['router','services']);

app.controller('inputController',['$scope', function($scope){
}]);

app.controller('penduController',['$scope','$routeParams', 'service', function($scope,$routeParams,service){
    
    let word = ["bonjour", "ordinateur", "chambre", "armoire", "chaussure", "architecture", "javascript"];  
    let secretWord = word[Math.floor(word.length * Math.random())]; //choisit un mot aléatoire parmis notre liste
    let fini = false;
    $scope.alphabet = [
        {"id":0, "letter":"a"},{"id":1, "letter":"b"},{"id":2, "letter":"c"},
        {"id":3, "letter":"d"},{"id":4, "letter":"e"},{"id":5, "letter":"f"},
        {"id":6, "letter":"g"},{"id":7, "letter":"h"},{"id":8, "letter":"i"},
        {"id":9, "letter":"j"},{"id":10, "letter":"k"},{"id":11, "letter":"l"},
        {"id":12, "letter":"m"},{"id":13, "letter":"n"},{"id":14, "letter":"o"},
        {"id":15, "letter":"p"},{"id":16, "letter":"q"},{"id":17, "letter":"r"},
        {"id":18, "letter":"s"},{"id":19, "letter":"t"},{"id":20, "letter":"u"},
        {"id":21, "letter":"v"},{"id":22, "letter":"w"},{"id":23, "letter":"x"},
        {"id":24, "letter":"y"},{"id":25, "letter":"z"}
    ];
    $scope.name = $routeParams.name;
    $scope.tabWord = service.hideWord(secretWord);
    $scope.letterGood = 0;
    $scope.letterNotGood = 0;
    $scope.msg = "";
    $scope.nbEssai = 7;
  //  console.log(secretWord);
  
    $scope.verifLetter = function(elem) {

        let find = false;
        let letter = elem.target.innerHTML;
        elem.target.disabled = true;
        for (const i in secretWord) {
            if (secretWord[i] === letter) {
                 $scope.tabWord[i] = letter;
                 find = true;
                 $scope.letterGood++;
             }
        }
        
        if (!find) { //si la lettre n'est pas dans le mot, incrémenter compteur d'essais restant
            $scope.letterNotGood++; 

            if ($scope.letterNotGood === $scope.nbEssai) { //si nombre d'essais dépassent 7, afficher vous avez perdu
                $scope.disableAll = "true";
                $scope.tabWord = secretWord;
                $scope.alert = "alert alert-danger";
                $scope.msg = "Vous avez perdu !";
                $scope.btnShow = true;
            }
        }
        if ($scope.letterGood === secretWord.length) { //si toutes les lettres trouvées, afficher vous avez gagné
            fini = true;
            $scope.msg = "vous avez gagné, Bravo !";
            $scope.alert = "alert alert-success";
            $scope.disableAll = "true";
            $scope.btnShow = true;
        }
    };

    $scope.restart = function() {

        $scope.disableAll = "";
        secretWord = word[Math.floor(word.length * Math.random())];
        $scope.letterGood = 0;
        $scope.letterNotGood = 0;
        $scope.tabWord = service.hideWord(secretWord);
        $scope.alert = "";
        $scope.msg = "";
        fini = "false";
        $scope.btnShow = false;
        
       };
    }
]);