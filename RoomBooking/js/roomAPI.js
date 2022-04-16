function create_record() {

    // function to create record in database

    // set input field values to variables
    var fName = document.getElementById("fname").value;
    var lName = document.getElementById("lname").value;
    var checkin = document.getElementById("check_in").value;
    var checkout = document.getElementById("check_out").value;
    var roomType = document.getElementById("roomtype").value;
    var roomRate = document.getElementById("price_per_room").value;
    var totalPeople = document.getElementById("person").value;
    var totalrooms = document.getElementById("room_allocated").value;
    var price = document.getElementById("total_price").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    // URL of API
    var url = "http://localhost:5000/api/roombookings/";

    // create a new XMLHttpRequest object to handle the request
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Accept", "*/*");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            console.log(xhr.responseText);

        } else if (this.status == 200) {
            alert("Booking done");
            location.reload();
        }
    };

    // set the data to be sent as JSON
    var input = {

        "firstName": fName,
        "lastName": lName,
        "checkIn": checkin,
        "checkOut": checkout,
        "roomType": roomType,
        "roomRate": roomRate,
        "totalPeople": totalPeople,
        "totalRoom": totalrooms,
        "price": price,
        "email": email,
        "phone": phone
    };

    // load the data to the object
    var data = JSON.stringify(input);

    console.log(data);
    // send the request
    xhr.send(data);



}

function showdisplayDiv() {

    show_record();

}


function show_record() {


    // function to show record in database
    // get the value of the input field and store it in a variable
    var receipt = document.getElementById("receipt").value;
    console.log(receipt);
    // create a new XMLHttpRequest object to handle the request
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            var x = JSON.parse(this.responseText);
            console.log(x);
            console.log(x["firstName"], x["lastName"]);
            // load the data to the web elements
            document.getElementById("new_fname").value = x["firstName"];
            document.getElementById("new_lname").value = x["lastName"];
            document.getElementById("new_price_per_room").value = x["roomRate"];
            document.getElementById("new_check_in").value = x["checkIn"];
            document.getElementById("new_check_out").value = x["checkOut"];
            document.getElementById("new_roomtype").value = x["roomType"];
            document.getElementById("new_person").value = x["totalPeople"];
            document.getElementById("new_room_allocated").value = x["totalRoom"];
            document.getElementById("new_total_price").value = x["price"];
            document.getElementById("new_phone").value = x["phone"];
            document.getElementById("new_email").value = x["email"];

            document.getElementById('displayDiv').style.display = "block";
            document.getElementById('bookDiv').style.display = "none";


        } else if (this.readyState != 4 && this.status != 200) {

            // show error message
            var x = JSON.parse(this.responseText);
            console.log(x);
            console.log(x["status"]);
            var errormsg = "Error: " + x["error"] + "\nMessage: " + x["message"] + "\nStatus: " + x["status"];

            alert(errormsg);



        }
    };
    // open the API url to send the request with id
    //xhttp.open("GET", "http://localhost:5000/api/roombookings/" + receipt, true);
    xhttp.open("GET", "http://roombookingeb6-env.eba-mmpeearp.us-east-1.elasticbeanstalk.com/api/roombookings/" + receipt, true);
    // send the request
    xhttp.send();
}


function delete_record() {

    // function to delete record in database
    // get the value of the input field and store it in a variable
    var receipt = document.getElementById("receipt").value;

    //url of API
    var url = "http://localhost:5000/api/roombookings/" + receipt;

    // create a new XMLHttpRequest object to handle the request
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", url, true);
    xhr.onload = function() {
        var info = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.table(info);
            alert("Booking Canceled");
        } else {
            console.error(info);
        }
    };
    //send the request
    xhr.send();
    document.getElementById('modifyDiv').style.display = "none";
}





function update_record() {

    // function to update record in database
    // get the value of the input field and store it in a variable
    var receipt = document.getElementById("receipt").value;
    console.log(receipt);

    var fName = document.getElementById("new_fname").value;
    var lName = document.getElementById("new_lname").value;
    var roomRate = document.getElementById("new_price_per_room").value;
    var checkin = document.getElementById("new_check_in").value;
    var checkout = document.getElementById("new_check_out").value;
    var roomType = document.getElementById("new_roomtype").value;
    var totalPeople = document.getElementById("new_person").value;
    var totalrooms = document.getElementById("new_room_allocated").value;
    var price = document.getElementById("new_total_price").value;
    var phone = document.getElementById("new_phone").value;
    var email = document.getElementById("new_email").value;


    // URL of API
    var url = "http://localhost:5000/api/roombookings/" + receipt;

    // create a new XMLHttpRequest object to handle the request
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url, true);

    xhr.setRequestHeader("Accept", "*/*");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            console.log(xhr.responseText);

        } else if (this.status == 200) {
            //alert("Booking Updated");
            location.reload();
        }
    };

    // set the data to be sent as JSON
    var input = {

        "firstName": fName,
        "lastName": lName,
        "checkIn": checkin,
        "checkOut": checkout,
        "roomRate": roomRate,
        "roomType": roomType,
        "totalPeople": totalPeople,
        "totalRoom": totalrooms,
        "price": price,
        "email": email,
        "phone": phone
    };

    // load the data to the object
    var data = JSON.stringify(input);
    console.log(data);
    // send the request
    xhr.send(data);



}

function showcontactDiv() {

    // function to show contact details div
    var x = document.getElementById("check_in").value;
    var y = document.getElementById("check_out").value;
    var z = document.getElementById("person").value;
    var a = document.getElementById("roomtype").value;
    if (x == "" || y == "" || z == "Select Person*" || a == "Select Type of Room*") {
        alert("Please fill all the fields");
        document.getElementById('contactDiv').style.display = "none";
    } else {
        document.getElementById('contactDiv').style.display = "block";
        calculateroom();
    }
}

function calculateprice() {

    // function to calculate the price of the room
    var a = parseInt(document.getElementById("price_per_room").value);
    var b = parseInt(document.getElementById("room_allocated").value);
    var c = a * b;
    document.getElementById("total_price").value = c;


}

function calculateroom() {

    // function to calculate the number of rooms
    var z = document.getElementById("person").value;
    var a = parseInt(z);
    var x = (a / 2);
    if (x.toString().includes(".")) {
        x = x + 1;
    }


    document.getElementById("room_allocated").value = Math.floor(x);

    var y = document.getElementById("roomtype").value;
    if (y.includes("Single")) {
        document.getElementById("price_per_room").value = 100;
    } else if (y.includes("Double")) {
        document.getElementById("price_per_room").value = 150;
    } else {
        document.getElementById("price_per_room").value = 200;
    }

    calculateprice();
}

function shownewcontactDiv() {

    // function to show modified contact details div
    var x = document.getElementById("new_check_in").value;
    var y = document.getElementById("new_check_out").value;
    var z = document.getElementById("new_person").value;
    var a = document.getElementById("new_roomtype").value;
    if (x == "" || y == "" || z == "Select Person*" || a == "Select Type of Room*") {
        alert("Please fill all the fields");
        // document.getElementById('new_contactDiv').style.display = "none";
    } else {
        // document.getElementById('new_contactDiv').style.display = "block";
        calculatenewroom();
    }
}

function calculatenewprice() {

    // function to calculate the new price of the room
    var a = parseInt(document.getElementById("new_price_per_room").value);
    var b = parseInt(document.getElementById("new_room_allocated").value);
    var c = a * b;
    document.getElementById("new_total_price").value = c;


}

function calculatenewroom() {
    // function to calculate the new number of rooms
    var z = document.getElementById("new_person").value;
    var a = parseInt(z);
    var x = (a / 2);
    if (x.toString().includes(".")) {
        x = x + 1;
    }


    document.getElementById("new_room_allocated").value = Math.floor(x);

    var y = document.getElementById("new_roomtype").value;
    if (y == "Single Room") {
        document.getElementById("new_price_per_room").value = 100;
    } else if (y == "Double Room") {
        document.getElementById("new_price_per_room").value = 150;
    } else {
        document.getElementById("new_price_per_room").value = 200;
    }

    calculatenewprice();
}