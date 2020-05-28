// JavaScript Document
var thisURL = window.location.pathname;
var info = {

    universeOfSound: ["<h1>Yugoslavian Universe</h1>Music Visualisation based on space exploration. Fly the galaxies to discover yugoslavia's best. The majority of the Universe is randomly generated, so refresh for a new experience.", "Hold the mouse down to move. Fly close to musical planets to hear the song and see the visual. Click on travel log or the section name for more info, and press 'x' to hide the interface and just fly around.", "http://cabbibo.com/uOS/"],

    universeOfSoundLeap: [""],

    soundObjectProject: [""],

    share: [""],

}

var pages = [info.cabbiboSet, info.juliaSet, info.juliaSnow, info.fourElements, info.recursion, info.universeOfSound, info.universeOfSoundLeap, info.soundObjectProject]
var thisPage;
function addInfoDiv(whichInfo) {

    thisPage = pages[whichInfo]

    $('body').append("<div id='infoHolder'></div>");

    var infoHolder = $("#infoHolder");
    infoHolder.css("top", "100%");
    infoHolder.css("left", "100%");
    infoHolder.css("margin-top", "-25px");
    infoHolder.css("margin-left", "-20px");

    infoHolder.css("position", "absolute");
    infoHolder.append("<a onclick='toggleInfo()' id='infoButton'></a>");
    infoHolder.append("<div id='infoDiv'></div>");

    var infoButton = $("#infoButton");
    var infoDiv = $("#infoDiv");

    infoDiv.append("<div id='infoNav'></div>");
    var infoNav = $('#infoNav')
    infoNav.append("<a onclick='showInfo(0)' class='active' id='about'>About</a>");
    infoNav.append("<a onclick='showInfo(1)' id='instructions'>Instructions</a>");

    //infoNav.append("<a onclick='showInfo(5)' id='share'>Donate</a>");

    infoNav.css("margin-left", "4px");

    infoDiv.append("<div id='infoBody'></div>");
    infoBody = $("#infoBody");

    infoBody.append("<div class='infoContent' id='aboutContent'></div>");
    infoBody.append("<div class='infoContent' id='instructionsContent' style='display:none'></div>");
    infoBody.append("<div class='infoContent' id='navContent' style='display:none'></div>");
    infoBody.append("<div class='infoContent' id='shareContent' style='display:none'></div>");
    infoBody.append("<div class='infoContent' id='linksContent' style='display:none'></div>");
    infoBody.append("<div class='infoContent' id='donateContent' style='display:none'></div>");

    $("#aboutContent").append(thisPage[0])
    $("#instructionsContent").append(thisPage[1])

    //adds Navigation gifs
    for (var k in info) {
        if (info[k].length == 4) {
            $("#navContent").append("<a href='" + info[k][2] + "'><img src='" + info[k][3] + "' />");
        }
    }

    var shareContent = info.share[0] + info.share[1]
    $("#shareContent").append(shareContent)
    $("#shareContent a").css("color", "black")
    $("#shareContent a").css("text-decoration", "none")
    $('#shareContent a').mouseover(function() {
        $(this).css('text-decoration', 'underline');
    });
    $('#shareContent a').mouseout(function() {
        $(this).css('text-decoration', 'none');
    });

    for (var i in info.links) {
        $('#linksContent').append(info.links[i])
    }

}

function toggleInfo() {
    if ($("#infoDiv").css("display") == "none") {
        $("#infoDiv").toggle();
        $("#infoButton").css("background", "url(/allSiteLib/info/hideInfo.png)");
    } else {
        $("#infoDiv").toggle();
        $("#infoButton").css("background", "url(/allSiteLib/info/showInfo.png)");
    }
}

function showInfo(whichInfo) {
    for (var i = 0; i < $("#infoNav a").length; i++) {
        if (i == whichInfo) {
            $($("#infoNav a")[i]).addClass("active")
        } else {
            $($("#infoNav a")[i]).removeClass("active")
        }
    }
    //turn on
    var infoNavLength = $("#infoNav a").length

    for (var i = 0; i < infoNavLength; i++) {

        var onDiv = $(".infoContent")[i]

        if (i == whichInfo) {
            $(onDiv).css("display", "block");
        } else {
            $(onDiv).css("display", "none");
        }

    }

}

	


	
	for(var i in info.links){
		$('#linksContent').append(info.links[i])
	}
	
	
	


function toggleInfo(){
	if($("#infoDiv").css("display") == "none"){
		$("#infoDiv").toggle();
		$("#infoButton").css("background",src= "allSiteLib/info/hideInfo.png");
	}else{
		$("#infoDiv").toggle();
		$("#infoButton").css("background",src= "allSiteLib/info/showInfo.png");
	}
}
	
	
function showInfo(whichInfo){
	for(var i=0; i<$("#infoNav a").length;i++){
		if(i==whichInfo){
			$($("#infoNav a")[i]).addClass("active")	
		}else{
			$($("#infoNav a")[i]).removeClass("active")
		}
	}
	//turn on
	var infoNavLength=$("#infoNav a").length
	
	for(var i=0;i<infoNavLength;i++){
	
		var onDiv=$(".infoContent")[i]
		
		if(i==whichInfo){
			$(onDiv).css("display","block");
		}else{
			$(onDiv).css("display","none");
		}
		
	}

}
	
	
	
