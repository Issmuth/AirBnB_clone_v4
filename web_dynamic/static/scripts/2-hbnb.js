$(function() {
    let url = 'http://127.0.0.1:5001/api/v1/status/';
    fetch(url).then(response => response.json()).then(result => {
	if (result['status'] == 'OK') {
	    $('div#api_status').addClass('available');
	    console.log('available');
	} else {
	    $('div#api_status').removeClass('available');
	}
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
