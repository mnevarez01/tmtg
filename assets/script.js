

var userInput=" ";
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://hargrimm-wikihow-v1.p.rapidapi.com/steps?count="+userInput,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "hargrimm-wikihow-v1.p.rapidapi.com",
		"x-rapidapi-key": "d8ec69564cmsh8bfdd3439a39718p14736fjsn7795f327adcd"
	}
}

$.ajax(settings).done(function (response) {
    console.log(response);
   // $("#Tod").append(response);
});