
var settingsWikiHow = {
	"async": true,
	"crossDomain": true,
	"url": "https://hargrimm-wikihow-v1.p.rapidapi.com/steps?count="+userInput,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "hargrimm-wikihow-v1.p.rapidapi.com",
		"x-rapidapi-key": "d8ec69564cmsh8bfdd3439a39718p14736fjsn7795f327adcd"
    }}
var userInput = 5//$("#userInputBox"); //set this equal to the textbox when it exists again // #10-25

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

   //... $("#Tod").append(response);

});



    
    

    //access the drink ingredients list
    // append that to the page too



//click event for button
//var userInput = 
//var wikiHowAPI =
//var drinksAPI=
//function for wikihow: DO you want an alcoholic or non-alcoholic drink---button 
// var alcohol = true
// var alcohol = false 
//event.prevetDefault
//function for drinks--if its true 


