// JavaScript Document
alert("js is attached");
var dailyPrice=0, room;
var totalCost=0;



function updateRoom() {
	alert('Update Room function');
	room = this.dataset.name;
	alert(room);
	dailyPrice = this.dataset.price;
	alert(dailyPrice);
	document.getElementById("roomOutput").innerHTML = room;
	document.getElementById("priceOutput").innerHTML = dailyPrice;
	
}
 

function updateBooking() {
	var checkIn = document.getElementById("checkInDate").value;
	var numberNights = document.getElementById("numberNights").value;
	alert("Number of Nights" + numberNights);
	alert("Check In" + checkIn);
	document.getElementById("dateOutput").innerHTML = checkIn;
	document.getElementById("nightsOutput").innerHTML = numberNights;
	totalCost = dailyPrice *numberNights;
	alert("update booking")
	alert("total cost"+totalCost);
	document.getElementById("totalPriceOutput").innerHTML = "$" + totalCost;
	
}
	
/*
function checkInputs(numberNights,checkedAddItems,totalCost,room){
    alert("in the checkinputs function");
	if (numberNights == "" || document.getElementById("numberNights").validity.rangeOverflow || document.getElementById("numberNights").validity.rangeUnderflow){ //checks number of nights is 1-10
		alert("You need to enter number correct number of nights");
		return; //stops the function from running - put an inline message output div in
	}
	alert("correct number of nights"); // test alert
	// write if statement to check names agasint patterns here !
    var firstName=document.getElementById("firstNameInput").value;
    var lastName=document.getElementById("lastNameInput").value;
    var cellphone=document.getElementById("cellphoneInput").value;
    var email=document.getElementById("emailInput").value;
    alert(firstName+lastName+cellphone+email); //test alert
    //write if statements here to check inputs are not null and pattern mismatch for Excellence
	pushData(firstName,lastName,cellphone,email,totalCost,room,checkedAddItems,numberNights);   
}

function pushData(firstName,lastName,cellphone,email,totalCost,room,checkedAddItems,numberNights){
    alert("push data function");
    var data = { //creating a JSON file to be sent over the web
        //creating a key pair user_name will be the name of the field in your database
        first_name: firstName,
        last_name: lastName,
        phone: cellphone,
        email:email,
        extras: checkedAddItems,
        total_price: "$"+totalCost,
        room_type: room,
        no_nights: numberNights    
        };
        //creating the link to Firebase and pushing to the booking node
        firebase.database().ref('bookings').push(data);
        document.getElementById('confirmOverlay').style.height = "100%";  // display the confirm overlay
        setTimeout(function() { //sets a timer of 3 seconds and will then refresh the page
        location.reload();
        }, 3000); 
    }


*/

var allInputs = document.querySelectorAll('input');
for (var i = 0; i < allInputs.length; i++) {
	allInputs[i].addEventListener('input', updateBooking);
}
//event listener that will call the update room function if a card is clicked
var roomInputs = document.getElementsByClassName('roomCard');
for (i = 0; i < roomInputs.length; i++) {
    roomInputs[i].addEventListener('click', updateRoom);
}