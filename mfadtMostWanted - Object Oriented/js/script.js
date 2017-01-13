// Create immediately invoked function 1st.
// anything in his runs on load
var names = "Jewell Munter:854370;Alden Ehrhard:852014;Chance Hunnewell:158189;Adriana Geffers:17473;Celia Schnieders:746599;Corliss Denk:791623;Sally Zehnpfennig:185749;Jayme Behrends:462289;Jesica Farmsworth:720507;Laree Chime:822125;Henrietta Chandsawangbh:400455;Regine Criado:593497;Louann Rull:437496;Raylene Bodell:230709;Lenora Heidorn:84678;Terica Bacote:53904;Dena Picket:584555;Laurie Arambuia:912065;Freeda Barbar:725347;Arlena Blenden:512319;Toshia Siaperas:623512;Randell Hassig:117809;Denise Litsey:461117;Ron Blankenbecler:147578;Quincy Wileman:626921;Cherish Patz:744193;Burma Erskin:5184;Arron Bulfer:803810;Tiny Pokorski:482737;Mitzie Hadef:253250;Genie Malys:421633;Robbin Steenburg:356368;Delsie Gallegos:76374;Kaycee Leone:924465;Lorna Komar:474375;Joie Warf:448658;Zana Philpot:710606;Caroline Koles:87033;Joey Heine:740998;Pilar Gividen:714223;Kesha Rushforth:157566;Phebe Yournet:979838;Casimira Wohlenhaus:244810;Glenda Prestridge:466791;Bianca Derienzo:510015;Earnest Lapage:888249;Argentina Arnoux:672254;Elva Wieto:786812;Tomi Kirgan:684709;Jacquelynn Drader:666873;Robert Dasen:449309;";
(function() {
if (document.readyState != "loading") {
	let dic = new Dictionary(names,';',':');
	dic.init();
	dic.getDictionary();

} else {

  document.addEventListener("DOMContentLoaded", function(){
     let dic = new Dictionary(names,';',':');
	dic.init();
	dic.getDictionary();
    });

 }

// //Create a dictionary to hold a string, and the two symbols to split by
// function createMyDictionary(string,entryDelimiter,recordDelimiter) {
	
// }
})();


//crete an object to act as a Dictionary with an empty array
//An empty string, and variables to hold the symbols 

function Dictionary(string,entryDelimiter,recordDelimiter) {
	this.dictionary = [];
	this.names = string;
	this.eD =entryDelimiter;
	this.rD = recordDelimiter;

}


//Function to split the names array by symbols ";" and ":"
Dictionary.prototype.findRecords = function() {

	let entryArray = this.names.split(this.eD);
	for( entry of entryArray) {
		let temp = entry.split(this.rD);
		this.dictionary.push({name:temp[0],number:temp[1]});
	}
}

Dictionary.prototype.init= function() {
	this.findRecords();
}

Dictionary.prototype.getDictionary = function() {
	console.log( this.dictionary);
}















// function createDictionary(){

// var split1 = names.split(';');
// // var split2 = split1.split(':');
// var key;
// var value;


// for (i=0;i<names.length;i++) {
// 	key = split1[i];
// 	console.log(key);
// 	}



		


// var nameDict = {};
// var addPair = function (key, value) {
// 	nameDict[key] = value;
// }
// var giveValue = function (key) {
// 	return Dict(key);
// }

// }










// //Some Global Variables

// //Get Search Input 
// var input = document.querySelector('input');
// //My People List is At Bottom

// //Variable to store my results at global level
// var results;
// // var people = ['dana1', 'daniel', 'danielle', 'john'];
// var people;
// var record;

// function parseNames() {


// var name;
// var id;
	
// record = names.split(";");

// for (var i = 0; i <record.length; i++){
// people= record[i].split(":");
// console.log(people);
// }
// return people

// // for (var k = 0; k<nameAndId.length;k++) {	
// // name = nameAndId[k];
// // id = nameAndId[k+1];
// // }
// // return name;
// // return id;
// // console.log(name);
// // console.log(id)

// }

// function handleSearch() {
// 	parseNames();
// //Autocomplete Function
// function autoComplete(value){
// 	//Create empty array to hold the people search returns
// 	var returnPeople = [];
		
// 		//Loop through array of people, if value is one of those people, slice that piece of array, the name
// 		for(i=0;i<record.length;i++){
// 			if (value === record[i].slice(0, value.length)) {
// 				//add this name to my empty array above
// 				returnPeople.push(record[i]);
// 			}
// 		}
// //funciton returns my array of people match value
// 		return returnPeople;
// }

// //Events
// input.onkeyup = function(k) {
// 	input_value = this.value.toUpperCase(); //toLowerCase(); //updates variable on each occurence
// 		//When key goes up, check input value. If there is something, pass it to empty array showPeople
// 		if (input_value.length > 0) {
// 			var showPeople = [];
// 			autocomplete_results = document.getElementById("autoCompleteResults");
// 				autocomplete_results.innerHTML = '';
// 				showPeople = autoComplete(input_value);
// 					for (i=0; i<showPeople.length;i++){
// 						autocomplete_results.innerHTML += '<li>' + showPeople[i] + '</li>';
// 					}
// 				autocomplete_results.style.display = 'block';
// 		} else {
// 			showPeople = [];
// 			autocomplete_results.innerHTML = '';
// 		}
// }
// }




// // function parseNames() {

// // // var nameEntry;
// // // var nameAndId;
// // // var div1 = document.getElementById("searchBox");
// // // var string1;
	
// // // nameEntry = names.split(";");

// // // 	for (var i = 0; i <nameEntry.length; i++){
// // // 		nameAndId = nameEntry[i].split(":");
// // // 		console.log(nameAndId);

// // // 		for (var k = 0; k<nameAndId.length;k++) {	
// // // 			string1 = "Their name is: " + nameAndId[k]+ " and their number is: " + nameAndId[k+1];
// // // 			console.log(string1);
// // // 			div1.innerHTML = string1;

// // 	}
// // 	}
// // // console.log(names);
// // // console.log(nameEntry);

	
// // }

// // function handleSearch(){
// // 	parseNames();
	
// // }

// // //Code Example from GitHub
// // // variables
// // var input = document.querySelector('input');
// // var people = ['john doe', 'maria', 'paul', 'george', 'jimmy'];
// // var results;

// // // functions
// // function autocomplete(val) {
// //   var people_return = [];

// //   for (i = 0; i < people.length; i++) {
// //     if (val === people[i].slice(0, val.length)) {
// //       people_return.push(people[i]);
// //     }
// //   }

// //   return people_return;
// // }

// // // events
// // input.onkeyup = function(e) {
// //   input_val = this.value; // updates the variable on each ocurrence

// //   if (input_val.length > 0) {
// //     var people_to_show = [];

// //     autocomplete_results = document.getElementById("autocomplete-results");
// //     autocomplete_results.innerHTML = '';
// //     people_to_show = autocomplete(input_val);
    
// //     for (i = 0; i < people_to_show.length; i++) {
// //       autocomplete_results.innerHTML += '<li>' + people_to_show[i] + '</li>';

// //     }
// //     autocomplete_results.style.display = 'block';
// //   } else {
// //     people_to_show = [];
// //     autocomplete_results.innerHTML = '';
// //   }
// // }





// //Names from Saman

