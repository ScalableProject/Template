function loadDoc() {
	
	
	
	var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
	  //var x = JSON.parse(this.responseText);
	  console.log(this.responseText);
    document.getElementById("loginn").style.display = "none";
	 
	  //document.getElementById("test").innerHTML = x["accounts"][0]["name"]
	 //document.getElementById("test").innerHTML = x["fName"]
	  
		
	}
  };
  xhttp.open("GET", "http://localhost:500/api/test/user", true);
  xhttp.send();
}

//POST function
// to signout account
function outDoc(){


  var url = "http://localhost:500/api/auth/signout";

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  
  xhr.setRequestHeader("Accept", "*/*");
  xhr.setRequestHeader("Content-Type", "application/json");
  
 
  
  
  
  xhr.onreadystatechange = function () {
     if (xhr.readyState === 4) {
       console.log(xhr.status);
        console.log(xhr.responseText);
        var x = JSON.parse(this.responseText);
        alert(x["message"]);
        //location.reload();
     }
     else if(this.status == 200){
      location.replace("index.html")
    }
    
    };
  
  
  

  xhr.send();


}

// POST to signin
function postDoc() {
	
	
	var url = "http://localhost:500/api/auth/signin";

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
      //location.reload();
   }
   else if(this.status == 200){
    //location.reload();
    //location.replace("../index.html")
    
  }
  
  };



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


//POST to signup
function postReg() {
	
	
	var url = "http://localhost:500/api/auth/signup";

var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);

xhr.setRequestHeader("Accept", "*/*");
xhr.setRequestHeader("Content-Type", "application/json");

var rEmail=document.getElementById('rEmail').value;
var rName=document.getElementById('rName').value;
var rPass=document.getElementById('rPass').value;

console.log(rEmail);
console.log(rName);
console.log(rPass);

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
	   console.log(xhr.status);
      console.log(xhr.responseText);
      var x = JSON.parse(this.responseText);
      alert(x["message"]);
      //location.reload();
   }
   else if(this.status == 200){
    //location.reload();
    location.replace("Login.html")
  }
  
  };



var input = {

  "username": rName,
  "email":rEmail,
  "password": rPass,
  "role":["user"]

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





