// JavaScript Document


//Starts the Application wherever the the url directs i to
urlToCamPos = function(){
		window.startingCamPos = {x:0,y:0,z:8000000}
		var url = document.URL
		 
		var pathArray = url.split( '/' );
		
		var posURL = url.split( '#' );
		
		if (posURL[1]){
			var camPosURL = posURL[1]
			var camCoordinates = camPosURL.split('_')
			var x = camCoordinates[0].replace('#','')
			var y = camCoordinates[1]
			var z = camCoordinates[2]
			window.startingCamPos.x=parseFloat(x)
			window.startingCamPos.y=parseFloat(y)
			window.startingCamPos.z=parseFloat(z)
			
		}
		
		var leapURL =  url.split( '?' );
		if(leapURL.length == 2){
			
			window.leapControls = true
		}else {
			
			window.leapControls = false
		}
	}


urlToCamPos();



/*

LOADING

*/

//variable that gets how many are unduplicated, allowing us to dertermine how many total unloaded there are
var unduplicated = 0

//used to determine how many we need before curatin is raised
var totalNeededToLoad = 244

//Used to determine how wide each image is for the load bar
var totalNeededUnduplicated = 97


var windowURL = window.location.href
//console.log(windowURL)

withoutLeap = windowURL.split('?')[0]
//console.log(withoutLeap)

withoutLocation = withoutLeap.split('#')[0]
//console.log(withoutLocation)

var startingSoundObj


var universeCanStart = false;
locationFound = false;

//Adds an image to the loading bar
var loadBarAdd = function (file){


    if(loaded == 5){
      leapInit();
      startingSoundObj = lookForStartingLocation();
      getParents(startingSoundObj)
      totalNeededToLoad += parentArray.length

      TESTGAIN.gain.value = 0

      enterInto()

    }

	loaded += 1
	//console.log(window.location)
	if($("#curtain img")[4]){
	var src = $("#curtain img")[4].src
	//console.log(window.location.href.toString())
	var newSrc = src.split(withoutLocation)
	
	}
	var hasBeenAdded = false
	for(var i= 0; i<$("#curtain img").length;i++){
		var src = $("#curtain img")[i].src
		var newSrc = src.split(withoutLocation)
      	if(newSrc[1] == file){
			hasBeenAdded = true
			break
		}
	}
	

    addToLoadBarWidth();	

    checkDoneLoading();	
	
}


var lookForStartingLocation = function(){
	
	
	var url = document.URL
		 
		var pathArray = url.split( '/' );
		
		var posURL = url.split( '#' );
		
		if (posURL[1]){
			
			
		
			var sObj = posURL[1]
			splitObj = sObj.split('_')
			var artist =  cCtoSpace(splitObj[0])
			//var song = cCtoSpace(splitObj[1])

          
			
			var name=""
            for(var i=0; i<splitObj.length-1; i++){
                name = name + splitObj[i] + " "
            }

            name += splitObj[splitObj.length-1];
            
            /*
             *  TODO: Change splitting method,
             *  to make sure it works with all 
             *  locations around the universe
             *
             */
            
        
      startingObj = name;

			
		
			
			
		}else{
      startingObj = 'Ras G - Coto Loco';
      
		}
		
	var toReturn
 
    var validURL = false
	for(var i =0; i < soundObjArray.length; i++){
		
		if(soundObjArray[i].title == startingObj){
			
           
            validURL = true
		
            toReturn = soundObjArray[i]
			
			camera.position.x = soundObjArray[i].globalPos.x + (Math.random()*soundObjArray[i].radius - soundObjArray[i].radius/2)/4
			camera.position.y = soundObjArray[i].globalPos.y + (Math.random()*soundObjArray[i].radius - soundObjArray[i].radius/2)/4
			camera.position.z = soundObjArray[i].globalPos.z + (Math.random()*soundObjArray[i].radius - soundObjArray[i].radius/2)/4
		
		}
		
	}

    if(validURL == true){ 
      return toReturn;
    }else{
      console.log(soundObjArray );
      	camera.position.x = soundObjArray[24].globalPos.x + (Math.random()*soundObjArray[24].radius - soundObjArray[24].radius/2)/4
		camera.position.y = soundObjArray[24].globalPos.y + (Math.random()*soundObjArray[24].radius - soundObjArray[24].radius/2)/4
		camera.position.z = soundObjArray[24].globalPos.z + (Math.random()*soundObjArray[24].radius - soundObjArray[24].radius/2)/4

      return soundObjArray[24]
    }
}



var startUniverse = function(){

  $("#startUniverse").css("pointer-events","none")


	$("#curtain #loadbar").fadeOut(2500,function(){
       	if($("#info.blog").css("display") == 'block'){
          $("#info.blog").toggle();
		}
	})
    startingSoundObj.enter();
    jako_loaded = true;
    

    TESTGAIN.gain.value = .8
    $("#curtain").fadeOut(500,function(){})
    animate();

 }


var parentArray = []
var whichParent = 0
function getParents(soundObj){
 
  if(soundObj.parent){
    parentArray.unshift(soundObj.parent)
    getParents(soundObj.parent)
  }

}



//Hideous hack to make it so that we can enter whichever area we want
function enterInto (){

 if(parentArray.length > 1){
  setTimeout(function(){
    if(parentArray[whichParent+1]){
      
      parentArray[whichParent].check()
      whichParent ++
     
      addToLoadBarWidth();
      setTimeout(function(){

        loaded += 1
        enterInto()

        
                  
      },1000)
    }else{
  
      loaded +=1   
      addToLoadBarWidth();
      checkDoneLoading();	

    }
  },1000)
 }else{

    animate();
    
    addToLoadBarWidth();
    loaded += 1
  
    checkDoneLoading();

 }
}




function addToLoadBarWidth(){ 


  if(loaded >= totalNeededToLoad ){


    $("#curtain #loadbar #progressBar").css("width",function(){
      var toReturn = window.innerWidth +  "px"
      return toReturn
    })

  }else{

    $("#curtain #loadbar #progressBar").css("width",function(){
      var currentWidth = parseInt($("#curtain #loadbar #progressBar").css("width"))
      currentWidth += (window.innerWidth/totalNeededToLoad)
      var toReturn = currentWidth+ "px"
      return toReturn
    })


  }

}




function checkDoneLoading(){

  if(loaded>=totalNeededToLoad && universeCanStart == false){

    universeCanStart = true
    jako_loaded = true
  
    
    $("#loadGif").remove()
    $("#curtain #loadbar").append(function(){
        toReturn ="<a id='startUniverse' onclick='startUniverse()'>Enter the Yugo Universe</a>"
        return toReturn 
    })
    
		
  }


}
