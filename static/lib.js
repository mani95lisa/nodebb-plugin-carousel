/**
 * Created by mani on 14-6-29.
 */
$(document).ready(function() {
    var carousel = $(".carousel");
    var config = '';
    try{
        config = carousel.attr('config');
        config = jQuery.parseJSON(config);
    }catch(e){
        console.log(e);
    }
    if(config){
        carousel.owlCarousel(config);
    }
});