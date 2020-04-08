var userInputBoxEl = $("#input"); //set this equal to the textbox when it exists again // #10-25
var drinkTextEl = $("#cocktail-code");
var drinkImageEl = $("#drinksAPI")

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
    console.log(response);

    userInputBoxEl.on("click", function(){
    
    var drinkPicker = $("#input").val();
    var drinkImage = $("<img>").attr("src", response.drinks[drinkPicker].strDrinkThumb)
    var drinkName = response.drinks[drinkPicker].strDrink;

    console.log(drinkName);

    drinkTextEl.text(`You did it! Go make yourself a ${drinkName}`)
    drinkImageEl.attr;
    drinkImageEl.append(drinkImage);
    
    })
});



//     //access the drink ingredients list // optional
//     // append that to the page too