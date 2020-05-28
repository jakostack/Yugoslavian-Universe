

function detect( whichTechs ){

  var text={
    webAudioAPI:[ "- Web Audio API" , "http://caniuse.com/audio-api" , "List of Web Audio API browsers"],
	webkit:["- Webkit","http://en.wikipedia.org/wiki/List_of_web_browsers#WebKit-based","List of Webkit Browsers"],
	webGL:["- WebGL","http://get.webgl.org/","Get WebGL"]
  }
  	detector = {
	  
      // A list of elements, either true or not true
      canvas: !! window.CanvasRenderingContext2D,
      webGL: ( function () { try { return !! window.WebGLRenderingContext && !! document.createElement( 'canvas' ).getContext( 'experimental-webgl' ); } catch( e ) { return false; } } )(),
      workers: !! window.Worker,
      fileapi: window.File && window.FileReader && window.FileList && window.Blob,
      webAudioAPI: ( function(){ if( !! window.AudioContext  || !! window.webkitAudioContext){ return true;}else{ return false;} })(),
      
      webkit:$.browser.webkit,
      safari:$.browser.safari,
      msie:$.browser.msie,
      opera:$.browser.opera,
      mozilla:$.browser.mozilla,
    
    }


    function detectMobile() { 
     if( navigator.userAgent.match(/Android/i)
     || navigator.userAgent.match(/webOS/i)
     || navigator.userAgent.match(/iPhone/i)
     || navigator.userAgent.match(/iPad/i)
     || navigator.userAgent.match(/iPod/i)
     || navigator.userAgent.match(/BlackBerry/i)
     || navigator.userAgent.match(/Windows Phone/i)
     ){
        return true;
      }
     else {
        return false;
      }
    }

    var mobile = detectMobile();

    if( mobile == true )
      window.location = "/missingTechnology/mobile.html";

    // For right now, until the web audio api is more stable in other browsers
    // Lets just automatically redirect to chrome.
    // its way better anyway!
    if(!mobile){
      if( whichTechs[0] == 'webGL'  ){
    
        var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
        
        //if( !is_chrome )
        //  window.location = "/missingTechnology/chrome.html";

      }
    }

    

    var missingTech = [];
    for( var i = 0; i < whichTechs.length; i++ ){

      var tech = whichTechs[i];
     
      if( !detector[tech] ){
        missingTech.push(tech);
      }

    }

  
    if( missingTech.length > 0 ){

      if( missingTech == [ "webGL" , "webkit" ] )
        console.log('nonchrome');

      for( var i = 0; i < missingTech.length; i++){
      	$("#dialogBody").append(text[missingTech[i]][0]);
        $("#dialogLinks").append("<a href="+text[missingTech[i]][1]+" target='_blank'>"+text[missingTech[i]][2]+"</a><br/>");

      }

      document.getElementById("dialog").style.visibility="visible";
	  $("#dialog").dialog({modal:true});

    }


}
