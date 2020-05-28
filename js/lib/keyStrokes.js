

$(document).keypress(function(event){
		var whichKey=String.fromCharCode(event.which)
	
		if(whichKey=='x'){
			$(".ui").fadeToggle()
			$("#stats").fadeToggle()
			$("#infoButton").fadeToggle()
			
			var curse = $('body').css('cursor')
			if(curse == 'auto'){
				$('body').css('cursor', 'none');
			}else{
				$('body').css('cursor', 'auto');
			}
		}
		if(whichKey=='z'){
			console.log(current)
		}
		
		if(whichKey=='a'){
			console.log(current.audio.freqByteData)
		}
		
		if(whichKey=='/'){
			if(controlsUpdating == true){
				controlsUpdating = false
				console.log('Chandes')
			}else if(controlsUpdating == false){
				controlsUpdating = true	
				
			}
		}

        if(whichKey == 'v'){
  
          enterInto();

        }
		
 })
 
function toggleBlogInfo(){
	$("#info.blog").slideToggle('slow');	
}

function toggleTravelLog(){
	$("#travelLog").slideToggle('slow');	
}


function sendPostcard(){


  console.log(current.title)

  var split = current.title.split(" ")

  var shareURL = "https://jacobkouthoofdmartensson.myportfolio.com/"

  var toAdd=""
  
  for(var i =0; i<split.length; i++){
    
    if(i<split.length-1){


      convert = convertSpecialCharacters(split[i])
      toAdd += convert + "_"

    }else{
      convert = convertSpecialCharacters(split[i])
      toAdd += convert
    }

  }


  var text = "&text=I'm visiting the "

  var middle =""

  for(var i =0; i<split.length; i++){
    
    if(i<split.length-1){


      convert = convertSpecialCharacters(split[i])
      middle += convert + " "

    }else{
      convert = convertSpecialCharacters(split[i])
      middle += convert
    }

  }
  var afterText = " Universe, visualized by me"

  var fullURL = shareURL + toAdd + text + middle +afterText
  console.log(fullURL)

  window.open(fullURL,'_blank')

}


function convertSpecialCharacters(string){

  var toReturn = string
  
  if(string =="&"){
    console.log('amsess')
    toReturn = "%26"
  }else if(string =="+"){
    console.log('plus')
    toReturn = "%2B"
  }

  return toReturn

}
