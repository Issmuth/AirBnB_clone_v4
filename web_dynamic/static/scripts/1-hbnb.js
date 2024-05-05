$(function() {
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
