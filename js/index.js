//user input array
var userInput = [
    "Quel",
    "est",
    "ton",
    "nom"];

//array of keywords
var keyWords;
keyWords = [
    "age",
    "train",
    "goat",
    "nom"
    ]
var i;
var e;

//keyword found in the user input array
var key;

//create the array of keywords from file.txt
/*function createArray() {
                $.get("file.txt", function(data) {
                    keyWords = data.split(',');
                    alert(keyWords);
                }); 
            }*/

//call contain() for each keyword
function words() {
       for (e = 0; e < keyWords.length; e++) {
        contain(keyWords[e]);
       }
    return "- "+key;
}

//look for a keyword in the user input array
function contain(x) {
    for (i = 0; i < userInput.length; i++) {
        if (userInput[i] === x ) {
            return key = userInput[i];
        }
    }
}



