var slide_place = 1;
var slide_rest = 1;
var places;
var restaurants;

$(document).ready(function(){

    places = $(".place-desc > div").length;
    restaurants = $(".rest-desc > div").length;

	$("#place1").css("display","block");
	$("#rest1").css("display","block");

	$('.carousel').carousel({
        interval: false //set the initial interval
    });

    $("#nextplace").click(function(){
        $(this).hide();
        setTimeout(activate, 500);

    	$(".place-cont > .place-desc > div").css("display", "none");
    	if(slide_place == places) slide_place = 1;
    	else ++slide_place;
    	var p = "place" + slide_place.toString();
    	if(places != 1){
    		$("#" + p).toggle("slow");
    	}
    	$("#" + p).css("display","block");  	
    });

    $("#prevplace").click(function(){
        $(this).hide();
        setTimeout(activate, 500);

    	$(".place-cont > .place-desc > div").css("display", "none");
    	if(slide_place == 1) slide_place = places;
    	else --slide_place;
    	var p = "place" + slide_place.toString();
    	if(places != 1){
    		$("#" + p).animate({
    			height: 'toggle'
    		});
    	}
    	$("#" + p).css("display","block");
    });
    $("#nextrest").click(function(){
    	$(this).hide();
    	setTimeout(activate, 500);

    	$(".place-cont > .rest-desc > div").css("display", "none");
    	if(slide_rest == restaurants) slide_rest = 1;
    	else ++slide_rest;
    	var p = "rest" + slide_rest.toString();
    	if(restaurants != 1){
    		$("#" + p).toggle("slow");
    	}
    	$("#" + p).css("display","block");
    });
    $("#prevrest").click(function(){
    	$(this).hide();
    	setTimeout(activate, 500);

    	$(".place-cont > .rest-desc > div").css("display", "none");
    	if(slide_rest == 1) slide_rest = restaurants;
    	else --slide_rest;
    	var p = "rest" + slide_rest.toString();
    	if(restaurants != 1){
    		$("#" + p).animate({
    			height: 'toggle'
    		});
    	}
    	$("#" + p).css("display","block");
    });
    
 });

//If we click too fast the carousel arrows, it could arise an inconsistence between photos and text. 
//Let's disable the arrows during a short period of time.
function activate(){
	$("#prevrest").show();
	$("#nextrest").show();
	$("#prevplace").show();
	$("#nextplace").show();
}
