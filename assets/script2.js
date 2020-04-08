var userInputBoxEl = $("#input"); //set this equal to the textbox when it exists again // #10-25
var drinkTextEl = $("#cocktail-code");
var drinkImageEl = $("#drink-image");
var runEverythingButton = $("#run-everything-button"); //We need to change this to the actual button when it exists

var drinksApiInput; //this is the var that goes into the drinksAPI
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://the-cocktail-db.p.rapidapi.com/filter.php?a=Alcoholic", //there's no documentation for this
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "788f0dc8b3mshe5269bb15e31ff2p135077jsn86a8de28e359"

    }
}

$.ajax(settings).done(function (response) {

    runEverythingButton.on("click", function(){
    var drinkPicker = $("#input").val();//gets the number from the input box
    var drinkImage = $("<img>").attr("src", response.drinks[drinkPicker].strDrinkThumb);
    var drinkName = response.drinks[drinkPicker].strDrink;

    drinkTextEl.text(`You did it! Go make yourself a ${drinkName}`);
    drinkImageEl.html(drinkImage); 
    })
});




//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~console.log art
var art1 = "xxxxxxxx                     xxxxx          x          x                     xxxxx          x"
var art2 = "x      x  x   x         xxxx x   x  xxxxx   x             xxxxx  xxxx  xxxx  x   x  xxxxx   x"
var art3 = "x      x  x   x  xxxx   x    xxxxx  x   x  xxx  xxxx   x  x   x  x   x    x  xxxxx  x   x  xxx"
var art4 = "x      x  x   x  x  x   x    x      x   x   x   x  x   x  x   x  x   x    x  x      x   x   x"
var art5 = "xxxxxxxx  xxxxx  xxxxx  x    xxxxx  x   x   x   xxxxx  x  x   x  x        x  xxxxx  x   x   x"
var art6 = "       x             "
var art7 = "       x  "

console.log(art1)
console.log(art2)
console.log(art3)
console.log(art4)
console.log(art5)
console.log(art6)
console.log(art7)





//     //access the drink ingredients list // optional
//     // append that to the page too