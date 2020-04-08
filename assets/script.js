$("#run-everything-button").on("click", function (event) {
	event.preventDefault;
	var userInput = $("#input").val();
	wikiHow(userInput);
	localStorage.setItem("userInput", userInput);
	$("#input").val("");
});

function wikiHow(userInput) {
	console.log(userInput)

	var userInput = userInput
	$.ajax({
		async: true,
		crossDomain: true,
		url: "https://hargrimm-wikihow-v1.p.rapidapi.com/steps?count=" + userInput,
		method: "GET",
		headers: {
			"x-rapidapi-host": "hargrimm-wikihow-v1.p.rapidapi.com",
			"x-rapidapi-key": "d8ec69564cmsh8bfdd3439a39718p14736fjsn7795f327adcd"
		}
	}).done(function (response) {
		event.preventDefault;
		console.log(response);
		$("#wikiHow").empty();
		for (var i = 1; i <= userInput; i++) {
			var item = $("<li>").text(response[i]);

			$("#wikiHow").append(item);

		}
		var button = $("<button>").text("All done? Now lets get a drink!").addClass("drinks-button")
		$("#wikiHow").append(button);
		drinksAPI();
	});
};

// Drinks API

function drinksAPI() {

	var userInputBoxEl = $("#input"); //set this equal to the textbox when it exists again // #10-25
	var drinkTextEl = $("#cocktail-code");
	var drinkImageEl = $("#drink-image");
	var runEverythingButton = $(".drinks-button"); //We need to change this to the actual button when it exists

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

		runEverythingButton.on("click", function () {
			console.log(response)
			var numberCap = localStorage.getItem("userInput")
			var drinkPicker = Math.floor(Math.random() * numberCap);//gets the number from the input box
			var drinkImage = $("<img>").attr("src", response.drinks[drinkPicker].strDrinkThumb);
			var drinkName = response.drinks[drinkPicker].strDrink;

			drinkTextEl.text(`You did it! Go make yourself a ${drinkName}`);
			drinkImageEl.html(drinkImage);
		})
	});

}




// //click event for button
//var userInput = 
//var wikiHowAPI =
//var drinksAPI=
//function for wikihow: DO you want an alcoholic or non-alcoholic drink---button 
// var alcohol = true
// var alcohol = false 
//event.prevetDefault
//function for drinks--if its true 


