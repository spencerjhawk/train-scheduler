$(document).ready(function(){


	
$("#addTrainBtn").on("click", function(){

// takes user input and assign to variables
var trainName = $("#trainNameInput").val().trim();
var destination = $("#destinationInput").val().trim();
var trainTimeInput = moment($("#trainTimeInput").val().trim(), "HH:mm").subtract(10, "years").format("X");;
var frequencyInput = $("#frequencyInput").val().trim();

// console log tests
console.log(trainName);
console.log(destination);
console.log(trainTimeInput);
console.log(frequencyInput);

// Creates local object for holding train data
var newTrain = {
	name:  trainName,
	destination: destination,
	trainTime: trainTimeInput,
	frequency: frequencyInput,
	}

		// push info to Firebase
		config.push(newTrain);

		// clear text-boxes
		$("#trainNameInput").val("");
		$("#destinationInput").val("");
		$("#trainInput").val("");
		$("#frequencyInput").val("");

		// Prevents page from refreshing
		return false;
	});

});