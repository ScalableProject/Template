function loadDoc() {
	
	
	
	var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
	  /*var x = JSON.parse(this.responseText);
	  console.log(x);*/
	 
	  //document.getElementById("test").innerHTML = x["accounts"][0]["name"]
	 //document.getElementById("test").innerHTML = x["fName"]
	  
		
	}
  };
  xhttp.open("GET", "http://localhost:5000/api/test/mod", true);
  xhttp.send();
}

function postDoc() {
	
	
	var url = "http://localhost:5000/api/auth/signin";

var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);

xhr.setRequestHeader("Accept", "*/*");
xhr.setRequestHeader("Content-Type", "application/json");

var na=document.getElementById('na').value;
var pass=document.getElementById('pass').value;

console.log(na);
console.log(pass);

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
	   console.log(xhr.status);
      console.log(xhr.responseText);
   }};



var input = {

    "username":na,

    "password":pass

};
/*const input={
	
	username:na,

    password:pass
	
}*/
var data = JSON.stringify(input);
//console.log(typeof na)
console.log(data);
xhr.send(data);

	
	
	
}