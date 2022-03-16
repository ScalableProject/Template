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
	
	
	var url = "http://localhost:49000/api/customers/1/accounts";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.responseText);
   }};

var data = `{
		
      "name": "ben",
    "password": "123"
  
}`;

xhr.send(data);

	
	
	
}