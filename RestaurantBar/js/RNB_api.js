function create_booking() {

    // store the value of form in variables
    var fName = document.getElementById("fname").value;
    var lName = document.getElementById("lname").value;
    var date = document.getElementById("input_date").value;
    var time = document.getElementById("input_time").value;
    var people = document.getElementById("person").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    // url of API
    var url = "http://localhost:5000/api/rnbbookings/";

    // XMLHttpRequest request for POST API call
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Accept", "*/*");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            console.log(xhr.responseText);

        } else if (this.status == 200) {
            //alert("Booking done");
            location.reload();


        }

    };

    // set variables of API call
    var input = {

        "str_firstName": fName,
        "str_lastName": lName,
        "str_bookingDate": date,
        "str_bookingTime": time,
        "str_person": people,
        "str_emailID": email,
        "str_contact": phone,
    };

    //load the data to the json object
    var data = JSON.stringify(input);

    // send the request
    console.log(data);
    xhr.send(data);



}


function get_Booking() {


    // get the id to fetch details
    var receipt = document.getElementById("receipt").value;
    console.log(receipt);
    // JSON request for GET API call
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            var x = JSON.parse(this.responseText);
            console.log(x);
            console.log(x["str_firstName"], x["str_lastName"]);

            document.getElementById("m_fname").value = x["str_firstName"]
            document.getElementById("m_lname").value = x["str_lastName"]
            document.getElementById("m_input_date").value = x["str_bookingDate"]
            document.getElementById("m_input_time").value = x["str_bookingTime"]
            document.getElementById("m_person").value = x["str_person"]
            document.getElementById("m_email").value = x["str_emailID"]
            document.getElementById("m_phone").value = x["str_contact"]



        } else if (this.readyState != 4 && this.status != 200) {

            //alert for error message if any
            var x = JSON.parse(this.responseText);
            console.log(x);
            console.log(x["status"]);
            var str_error = "Error: " + x["error"] + "\nMessage: " + x["message"];
            alert(str_error);
            document.getElementById("error").innerHTML = error


        }
    };
    // xhttp.open("GET", "http://localhost:5000/api/rnbbookings/" + receipt, true);
    xhttp.open("GET", "http://scprnb-env.eba-5cxfbpf9.us-east-1.elasticbeanstalk.com/api/rnbbookings/" + receipt, true);

    xhttp.send();
}


function delete_Booking() {

    //get id for deletion
    var receipt = document.getElementById("receipt").value;
    var url = "http://localhost:5000/api/rnbbookings/" + receipt;

    // JSON request for DELETE API call
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
    // send the request
    xhr.send();
    document.getElementById('manageDiv').style.display = "none";
}





function update_booking() {

    // store the value of form in variables
    var receipt = document.getElementById("receipt").value;
    console.log(receipt);

    var fName = document.getElementById("m_fname").value;
    var lName = document.getElementById("m_lname").value;
    var date = document.getElementById("m_input_date").value;
    var time = document.getElementById("m_input_time").value;
    var people = document.getElementById("m_person").value;
    var phone = document.getElementById("m_phone").value;
    var email = document.getElementById("m_email").value;


    // url of API with id
    var url = "http://localhost:5000/api/rnbbookings/" + receipt;

    // JSON request for PUT API call
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url, true);

    xhr.setRequestHeader("Accept", "*/*");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            console.log(xhr.responseText);

        } else if (this.status == 200) {
            alert("Booking Updated");
            location.reload();
        }
    };

    // set variables of API call
    var input = {

        "str_firstName": fName,
        "str_lastName": lName,
        "str_bookingDate": date,
        "str_bookingTime": time,
        "str_person": people,
        "str_emailID": email,
        "str_contact": phone,
    };

    //load the data to the json object
    var data = JSON.stringify(input);
    console.log(data);
    // send the request
    xhr.send(data);



}