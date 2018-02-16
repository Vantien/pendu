var services = angular.module('services', []);

services.service('service', function(){
    this.hideWord = function(secretWord) {
            let hiddenWord = [];
                for (const x in secretWord) {
                    hiddenWord.push("_ ");
                }
                return hiddenWord;
        }
});