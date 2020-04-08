var userInput = 5//$("#userInputBox"); //set this equal to the textbox when it exists again // #1-25
var drinksApiInput; //this is the var that goes into the drinksAPI

var userInput = $("#input")

var settingsWikiHow = {
	"async": true,
	"crossDomain": true,
	"url": "https://hargrimm-wikihow-v1.p.rapidapi.com/steps?count=" + userInput,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "hargrimm-wikihow-v1.p.rapidapi.com",
		"x-rapidapi-key": "d8ec69564cmsh8bfdd3439a39718p14736fjsn7795f327adcd"
				
	}};


	$.ajax(settingsWikiHow).done(function (response) {
		console.log(response);
		// $("#Tod").append(response);
	});


	$("#userInputBox"); //set this equal to the textbox when it exists again // #10-25
	var drinksApiInput; //this is the var that goes into the drinksAPI








// //click event for button
//var userInput = 
//var wikiHowAPI =
//var drinksAPI=
//function for wikihow: DO you want an alcoholic or non-alcoholic drink---button 
// var alcohol = true
// var alcohol = false 
//event.prevetDefault
//function for drinks--if its true 


