var iid;
var vid = "canyon";

$(document).ready(function(){
	iid = setInterval(switchVideo,15000);
	//automatic dark mode
	var date = new Date();
	var hours = date.getHours();
	var year = date.getFullYear();
	$("#credits span").html("&copy Copyright " + year + "  - Created by Alberto Giménez");
	if(hours > 19 || hours < 8){ //dark
		$("#night").prop("checked", true);
		darken();
	}
	else{ //light
		$("#night").prop("checked", false);
		light();
	}

	$("#night").on("change",function(){
    	if($(this).is(':checked')) {
    	    darken();
    	} 
	    else {
	        light();
	    }	    
	});
	$(".photo-container").on("mouseover", function(){
		$(this).find("div").css("background-color", "#7D7D7D");	
	});
	$(".photo-container").on("mouseout", function(){
		$(this).find("div").css("background-color", "#404040");	
	});
});

function switchVideo(){
	if(vid == "canyon"){
		vid = "niagara";
			$("#canyon").css("display","none");
			$("#niagara").css("display","initial");
	}
	else{
		vid = "canyon";
			$("#niagara").css("display","none");
			$("#canyon").css("display","initial");
	}
}


function darken(){
	$(document.body).css("background-color","#171a21");
	$(".header-country").css("color","white");
	$("section div div").css("background-color","#404040");
	$("footer").css("background-color","#404040");
	$("#credits").css("background-color","#171a21");
	$(".activ-desc").css("color", "white");
	$(".myhr").css("border-top", "1px solid white");
	$(".place-desc > div > p, .place-desc > div > h3").css("color", "white");
	$(".rest-desc > div > p, .rest-desc > div > h3").css("color", "white");
	$(".place-cont").css("border", "1px solid white");
	$("li").css("color","white");
}

function light(){
	$(document.body).css("background-color","white");
	$(".header-country").css("color","#545454");
	$("section div div").css("background-color","#474747");
	$("footer").css("background-color","#171a21");
	$("#credits").css("background-color","#787878");
	$(".activ-desc").css("color", "#545454");
	$(".myhr").css("border-top", "1px solid #AEAEAE");
	$(".place-desc > div > p, .place-desc > div > h3").css("color", "#545454");
	$(".rest-desc > div > p, .rest-desc > div > h3").css("color", "#545454");
	$("footer p").css("color", "white");
	$(".place-cont").css("border", "1px solid #787878");
	$("li").css("color","#545454");
}
