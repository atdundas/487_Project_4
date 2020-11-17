$( document ).ready(function() {
	//console.log('JS is loaded');

	var myMap;
	var myMarker;

    $.getJSON("data/data.json", function(data) {
		//console.log(data);
		buildList(data);	
		buildTabs(data);
	});

});


//Toggles between list and map view
	$('#list_box').hide();

	$('#toggle-list').on(
	'click',
	function() 
	{
		$('#map_box, #list_box').toggle()
	}
	);

//Function which builds tabs
function buildTabs(data){
console.log('Build Tabs') 

	initMap();

	function initMap() {

		var myMap = new google.maps.Map(document.getElementById('map'), {
			zoom: 6,
			center: {
				lat: 49.1235654,
				lng: 18.3241203,
			},
			disableDefaultUI: true,
			styles: [
				{
					"featureType": "all",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#ecdcc3"
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"gamma": 0.01
						},
						{
							"lightness": 20
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"saturation": -31
						},
						{
							"lightness": -33
						},
						{
							"weight": 2
						},
						{
							"gamma": 0.8
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "administrative.country",
					"elementType": "all",
					"stylers": [
						{
							//"visibility": "simplified"
						},
						{
							"color": "#776340"
						},
						{
							"invert_lightness": true
						}
					]
				},
				{
					"featureType": "administrative.province",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "simplified"
						},
						{
							"color": "#776340"
						}
					]
				},
				{
					"featureType": "administrative.province",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "administrative.province",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "administrative.neighborhood",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "geometry",
					"stylers": [
						{
							"lightness": 30
						},
						{
							"saturation": 30
						}
					]
				},
				{
					"featureType": "landscape.man_made",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "landscape.natural",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "landscape.natural",
					"elementType": "labels",
					"stylers": [
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "landscape.natural.terrain",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#e5d8c3"
						},
						{
							"lightness": "-6"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [
						{
							"saturation": 20
						}
					]
				},
				{
					"featureType": "poi.park",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [
						{
							"lightness": 20
						},
						{
							"saturation": -20
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "all",
					"stylers": [
						{
							"weight": ".0"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "geometry",
					"stylers": [
						{
							"lightness": 10
						},
						{
							"saturation": -30
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"visibility": "off"
						},
						{
							"color": "#8f8470"
						},
						{
							"lightness": "0"
						},
						{
							"weight": ".2"
						},
						{
							"invert_lightness": true
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"saturation": 25
						},
						{
							"lightness": 25
						},
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "labels",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "labels.text",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"weight": ".2"
						},
						{
							"invert_lightness": true
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"weight": "2"
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "labels",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "transit",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "transit.line",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"invert_lightness": true
						},
						{
							"lightness": "37"
						}
					]
				},
				{
					"featureType": "transit.station.airport",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "transit.station.bus",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "transit.station.rail",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "transit.station.rail",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#b0b0b0"
						}
					]
				},
				{
					"featureType": "transit.station.rail",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "transit.station.rail",
					"elementType": "labels",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "all",
					"stylers": [
						{
							"lightness": -20
						},
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"lightness": "28"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				}
			]
		});

		//Var for tabs
		var cityName = [];
		var country = [];
		var lat = [];
		var lng = [];
		var imgURL = [];
		var date = [];
		var lede = [];
		var text = [];

		var tab = 'closed';

		//Builds Data Arrays for tabs
	
		$.each(data, function(index){
		
			cityName[index] = [data[index].cityName];
			country[index] = [data[index].country];
			lat[index] = [data[index].lat];
			lng[index] = [data[index].lng];
			imgURL[index] = [data[index].imageURL];
			date[index] = [data[index].date];
			lede[index] = [data[index].lede];
			text[index] = [data[index].Text];

		 //Tabs Create
			var tabs = document.getElementById('tabs-box');

			var tabsHtml = '';

			tabsHtml += '<div class="float-tabs overflow-auto" id="tab-' + cityName[index] + '">';
			tabsHtml += '<img class="mx-auto m-3" src="' + imgURL[index] + '"></img>';
			tabsHtml += '<h4 class="m-0">' + cityName[index] + ',</h4>';
			tabsHtml += '<h4 class="m-1">' + country[index] + '</h4>';
			tabsHtml += '<p>Date: ' + date[index] + '</p>';
			tabsHtml += lede[index] + ' ...';
			tabsHtml += '<p>Click for full post<p>';
			tabsHtml += '</div>';

			$(tabs).append(tabsHtml);

		//Large Tabs Create
			var largeTabs = document.getElementById('large-tabs-box');

			var largeTabsHtml = '';

			largeTabsHtml += '<div class="large-float-tabs overflow-auto" id="large-tab-' + cityName[index] + '">';
			largeTabsHtml += '<h4 class="m-0 only-mobile">Click anywhere to return</h4>'
			largeTabsHtml += '<div class="d-flex justify-content-center"><img class="images mx-auto m-3" src="' + imgURL[index] + '"></img></div>';
			largeTabsHtml += '<h4 class="m-0">' + cityName[index] +',' + country[index] + ',</h4>';
			largeTabsHtml += '<p>Date: ' + date[index] + '</p>';
			largeTabsHtml +=  text[index];
			largeTabsHtml += '</div>';

			$(largeTabs).append(largeTabsHtml);

		 //Tabs Hide
			document.getElementById('tab-' + cityName[index]).style.display = 'none';
			document.getElementById('large-tab-' + cityName[index]).style.display = 'none';

		 //Markers
			var myMarker = {};
		
			myMarker['loc_' + cityName[index]]  = new google.maps.Marker({
				//creates markers 
				map: myMap,
				icon: 'img/site_ping1.png',
				position: {
					lat: Number(lat[index]),
					lng: Number(lng[index]),
				},
			});

		//Tab Open Listener
			myMarker['loc_' + cityName[index]].addListener('click', function(){
				//Pans to center
				//map.panTo(myMarker['loc_' + cityName[index]].getPosition());

				//Opens the city name pop-up
				document.getElementById('tab-' + cityName[index]).style.display = 'block';
				document.getElementById('screen-cover').style.display = 'block';
				//('#tab-' + cityName[index]).toggleClass('show');
			});

		//Large Tab Open Listener

			document.getElementById('tab-' + cityName[index]).addEventListener('click', function(){
				document.getElementById('large-tab-' + cityName[index]).style.display = 'block';
			});

		//From List
			document.getElementById('list-' + cityName[index]).addEventListener('click', function(){
				document.getElementById('large-tab-' + cityName[index]).style.display = 'block';
				document.getElementById('screen-cover').style.display = 'block';
			});

		//Large tab Close listener
			document.getElementById('large-tab-' + cityName[index]).addEventListener('click', function(){
				document.getElementById('tab-' + cityName[index]).style.display = 'none';
				document.getElementById('screen-cover').style.display = 'none';
				document.getElementById('large-tab-' + cityName[index]).style.display = 'none';
			});
			
		//Screen Cover Close Listener
			document.getElementById('screen-cover').addEventListener('click', function(){
				//closes the city name pop-up
				document.getElementById('tab-' + cityName[index]).style.display = 'none';
				document.getElementById('screen-cover').style.display = 'none';
				document.getElementById('large-tab-' + cityName[index]).style.display = 'none';
			});

		});
		
	}

	//Tabs Close
}; 	

function buildList(data){

	//Vars for list
	var cityName = [];
	var country = [];
	var lat = [];
	var lng = [];
	var imgURL = [];
	var date = [];
	var lede = [];
	var text = [];

	$.each(data, function(index){
	//List creation loop

		cityName[index] = [data[index].cityName];
		country[index] = [data[index].country];
		lat[index] = [data[index].lat];
		lng[index] = [data[index].lng];
		imgURL[index] = [data[index].imageURL];
		date[index] = [data[index].date];
		lede[index] = [data[index].lede];
		text[index] = [data[index].Text];

	 //Lists Create
		var list = document.getElementById('list_box');

		var listHtml = '';

		listHtml += '<div class="card text-body bg-brand w-75 mx-auto m-4 p-1" id="list-' + cityName[index] + '">';
		listHtml += '<div class="mx-auto m-4 px-4 border border-dark rounded">';
		listHtml += '<h4 class="m-0 text-col-black">' + cityName[index] + ', ' + country[index] + '</h4>';
		listHtml += '<p class="text-col-black">Date: ' + date[index] + '</p>';
		listHtml += '<div class="text-col-black"' + lede[index] + '</div>';
		listHtml += '<h5 class="m-0 text-col-black d-flex justify-content-center"> Click to Read More </h5>'
		listHtml += '</div>';
		listHtml += '</div>';

		$(list).append(listHtml);

	});

}
