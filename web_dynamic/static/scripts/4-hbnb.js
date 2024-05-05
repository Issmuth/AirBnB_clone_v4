$(function() {
    let url1 = 'http://127.0.0.1:5001/api/v1/status/';
    fetch(url1).then(response => response.json()).then(result => {
	if (result['status'] == 'OK') {
	    $('div#api_status').addClass('available');
	} else {
	    $('div#api_status').removeClass('available');
	}
    });


    let url2 = 'http://127.0.0.1:5001/api/v1/places_search/'; 
    fetch(url2, {
	    method: 'POST',
	    headers: {
		'Content-Type': 'application/json'
	    },
	    body: JSON.stringify({})
    }).then(response => response.json()).then(data => {
        data.forEach(function(place) {
	    $('section.places').append(`
	  <article>
            <div class="title_box">
              <h2>${place.name}</h2>
              <div class="price_by_night">${place.price_by_night}</div>
            </div>
            <div class="information">
              <div class="max_guest">${place.max_guest} Guest</div>
              <div class="number_rooms">${place.number_rooms} Bedroom</div>
              <div class="number_bathrooms">${place.number_bathrooms} Bathroom</div>
            </div>
            <div class="description">
              ${place.description}
            </div>
          </article>`);
	});
    });


    let amenities = {};
    $('.amenities input').change(function(){
	if ($(this).is(':checked')) {
  	    amenities[$(this).attr('data-id')] = ($(this).attr('data-name'));
	    let checked = Object.values(amenities).join(', ');
	    $('.amenities h4').html(checked);
	} else {
            delete amenities[$(this).attr('data-id')];
	    let checked = Object.values(amenities).join(', ');
	    $('.amenities h4').html(checked);
	}
    });
});
