

$("#run-everything-button").on("click", function (event) {
    event.preventDefault;
    var userInput = $("#input").val();
    wikiHow(userInput);
})

function wikiHow(userInput) {
    console.log(userInput)
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
        console.log(response);
        $("#wikiHow").append(response);
    });
};




// //click event for button
//var userInput = 
//var wikiHowAPI =
//var drinksAPI=
//function for wikihow: DO you want an alcoholic or non-alcoholic drink---button 
// var alcohol = true
// var alcohol = false 
//event.prevetDefault
//function for drinks--if its true 


