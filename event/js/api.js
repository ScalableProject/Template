//testing purpose
function loadDoc() {
	
	
	
	var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
	  var x = JSON.parse(this.responseText);
	  console.log(x);
	 
	  //document.getElementById("test").innerHTML = x["accounts"][0]["name"]
	 document.getElementById("test").innerHTML = x["fName"]
	  
		
	}
  };
  xhttp.open("GET", "http://localhost:5000/api/bookings/2", true);
  xhttp.send();
}

// sending POST request
//adding booking to database

function postDoc() {
	
	var fName = document.getElementById("first_5").value;
	var lName = document.getElementById("last_5").value;
	var sAddress = document.getElementById("input_6_addr_line1").value;
	var city = document.getElementById("input_6_city").value;
	var eircode = document.getElementById("input_6_postal").value;
	
	var phone = document.getElementById("input_7_phone").value;
	var email = document.getElementById("input_7_email").value;
	
	var arrival = document.getElementById("arrival").value;
	var departure = document.getElementById("departure").value;
	
	var people = document.getElementById("input_22").value;
	var request = document.getElementById("request").value;
	
	
	//api link
	
	var url = "http://localhost:5000/api/bookings/";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Accept", "*/*");
xhr.setRequestHeader("Content-Type", "application/json");

//getting reponse 
xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.responseText);
	  
   }
   else if(this.status == 200){
	alert("Booking done");
	//page reload
	   location.reload();
   }
   };

   //storing input in variables
var input = {
		
      "fName": fName,
    "lName": lName,
    "address": sAddress,
    "city":city,
    "eircode":eircode,
    "email": email,
    "number": phone,
    "booking_from":arrival,
    "booking_till":departure,
    "no_people":people,
    "request":request
  
};

//converting into json
var data = JSON.stringify(input);
//console.log(typeof na)
console.log(data);

//request sent
xhr.send(data);


	
}

//get request
function getBooking() {
	
	//document.getElementById("last_n").style.display = "none";
	
	//getting booking id
	var coId = document.getElementById("coId").value;
	console.log(coId);
	var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
		//if response is successful
		//make fields visible
		document.getElementById("last_n").style.display = "block";
		document.getElementById("first_n").style.display = "block";
		document.getElementById("input_6_addr_line1").style.display = "block";
      document.getElementById("input_6_cityy").style.display = "block";
      document.getElementById("input_6_postall").style.display = "block";

      document.getElementById("input_7_phone").style.display = "block";
      document.getElementById("input_7_email").style.display = "block";

      document.getElementById("arrivall").style.display = "block";
      document.getElementById("departuree").style.display = "block";

      document.getElementById("input_222").style.display = "block";
      document.getElementById("requestt").style.display = "block";
      document.getElementById("input_2").style.display = "block";
	  document.getElementById("delete").style.display = "block";
	  document.getElementById("error").style.display = "none";


		var x = JSON.parse(this.responseText);
	  console.log(x);
	  console.log(x["fName"], x["lName"]);

	  //fill info on textfields

		document.getElementById("first_n").value = x["fName"]
		document.getElementById("last_n").value = x["lName"]
		
		document.getElementById("input_6_addr_line1").value = x["address"]
		document.getElementById("input_6_cityy").value = x["city"]
		document.getElementById("input_6_postall").value = x["eircode"]
		
		document.getElementById("input_7_phone").value = x["number"]
		document.getElementById("input_7_email").value = x["email"]
		
		document.getElementById("arrivall").value = x["booking_from"]
		document.getElementById("departuree").value = x["booking_till"]
		
		document.getElementById("input_222").value = x["no_people"]
		document.getElementById("requestt").value = x["request"]
	 
	 //document.getElementById("last_n").style.display = "block";
	 
	  //document.getElementById("test").innerHTML = x["accounts"][0]["name"]
	 //document.getElementById("coEmail").innerHTML = x["fName"]
	  
		
	}
	else if (this.readyState != 4 && this.status != 200){
		//var y = JSON.parse(this.responseText);

		//if there is some error
		var x = JSON.parse(this.responseText);
	  console.log(x);
	  console.log(x["status"]);
	  var error="Error: "+x["error"]+"<br>Message: "+x["message"]+ "<br>Status: "+x["status"];

	  document.getElementById("error").innerHTML = error
			
		
	}
  };
  xhttp.open("GET", "http://localhost:5000/api/bookings/filter/"+coId, true);
  xhttp.send();
}


//to delete booking
function deleteBooking(){

	var coId = document.getElementById("coId").value;
	var url = "http://localhost:5000/api/bookings/"+coId;
var xhr = new XMLHttpRequest();
xhr.open("DELETE", url, true);
xhr.onload = function () {
	var info = JSON.parse(xhr.responseText);
	//if request successful
	if (xhr.readyState == 4 && this.status == 200) {
		console.table(info);
		alert("Booking Canceled");
	} else {
		console.error(info);
	}
}
xhr.send();
}




// to update booking
//PUT request
function putDoc() {
	
	var coId = document.getElementById("coId").value;
	console.log(coId);
	
	//storing all values in variables
	var fName = document.getElementById("first_n").value;
	var lName = document.getElementById("last_n").value;
	var sAddress = document.getElementById("input_6_addr_line1").value;
	var city = document.getElementById("input_6_cityy").value;
	var eircode = document.getElementById("input_6_postall").value;
	
	var phone = document.getElementById("input_7_phone").value;
	var email = document.getElementById("input_7_email").value;
	
	var arrival = document.getElementById("arrivall").value;
	var departure = document.getElementById("departuree").value;
	
	var people = document.getElementById("input_222").value;
	var request = document.getElementById("requestt").value;
	
	
	
	
	var url = "http://localhost:5000/api/bookings/"+coId;

var xhr = new XMLHttpRequest();
xhr.open("PUT", url, true);

xhr.setRequestHeader("Accept", "*/*");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.responseText);
	  
   }
   else if(this.status == 200){
	alert("Booking Updated");
	   location.reload();
   }
   };

var input = {
		
      "fName": fName,
    "lName": lName,
    "address": sAddress,
    "city":city,
    "eircode":eircode,
    "email": email,
    "number": phone,
    "booking_from":arrival,
    "booking_till":departure,
    "no_people":people,
    "request":request
  
};


var data = JSON.stringify(input);
//console.log(typeof na)
console.log(data);
xhr.send(data);


	
}



