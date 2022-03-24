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
	
	
	
	
	var url = "http://localhost:5000/api/bookings/";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Accept", "*/*");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.responseText);
	  
   }
   else if(this.status == 200){
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


function getBooking() {
	
	//document.getElementById("last_n").style.display = "none";
	
	var coId = document.getElementById("coId").value;
	console.log(coId);
	var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
	  var x = JSON.parse(this.responseText);
	  console.log(x);
	  console.log(x["fName"], x["lName"]);

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
		console.log(this.responseText);
		
		
	}
  };
  xhttp.open("GET", "http://localhost:5000/api/bookings/"+coId, true);
  xhttp.send();
}



function putDoc() {
	
	var coId = document.getElementById("coId").value;
	console.log(coId);
	
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
xhr.open('PUT', url, true);

xhr.setRequestHeader("Accept", "*/*");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.responseText);
	  
   }
   else if(this.status == 200){
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


