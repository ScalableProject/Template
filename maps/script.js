function initMap(){
    
	var options= {

		//Map options
		zoom:9,
		center:{

			lat:53.3498,
			lng:-6.2603

		}

	}

		//new map
	var map= new google.maps.Map(document.getElementById("map"), options);
	
//click on map
google.maps.event.addListener(map, 'click', function(event){

	addMarker({coords:event.latLng});

});


/*
	//add locations
	var marker= new google.maps.Marker({
		position: {lat:53.3489, lng:-6.2430},
		 map:map,
		icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
	  });

	  var infoWindow= new google.maps.InfoWindow({
		  content:'<h3>IFSC Hotel</h3>'
	  });

	  marker.addListener('click',function(){
		  infoWindow.open(map, marker);
	  }); */


	  addMarker({coords:{lat:53.3489, lng:-6.2430},content:'<h3>IFSC Hotel</h3>' });
	  addMarker({coords:{lat:53.3528, lng:-6.3916}, content:'<h3>Liffey Valley Hotel</h3>' });
	  addMarker({coords:{lat:53.3842, lng:-6.3760}, content:'<h3>Blanchardstown Hotel</h3>' });
	  addMarker({coords:{lat:53.1491, lng:-6.0793}, content:'<h3>Greystones Hotel</h3>' });


	  // add location function
	  function addMarker(props){

		var marker= new google.maps.Marker({
			position: props.coords,
			 map:map,
			icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
		  });

		  //check content
		  if(props.content){
			var infoWindow= new google.maps.InfoWindow({
				content:props.content
			});
	  
			marker.addListener('click',function(){
				infoWindow.open(map, marker);
			});
		  }

	  }

}