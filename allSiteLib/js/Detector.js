//Detector for the whooe site to be able to pop up a dialog if the user's browser is incompatible
function detect(whichTech){
	
	
	Detector = {
	
	
		// A list of elements, either true or not true
		//used 
		canvas: !! window.CanvasRenderingContext2D,
		webgl: ( function () { try { return !! window.WebGLRenderingContext && !! document.createElement( 'canvas' ).getContext( 'experimental-webgl' ); } catch( e ) { return false; } } )(),
		workers: !! window.Worker,
		fileapi: window.File && window.FileReader && window.FileList && window.Blob,
		webkit:$.browser.webkit,
		safari:$.browser.safari,
		msie:$.browser.msie,
		opera:$.browser.opera,
		mozilla:$.browser.mozilla,
	
		nonChrome:function(){				
				//Browser Alert
				var userAgent = navigator.userAgent.toLowerCase(); 
				$.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase()); 
			
			
				
				// Is this a version of Chrome?
				if($.browser.chrome){
				  userAgent = userAgent.substring(userAgent.indexOf('chrome/') +7);
				  userAgent = userAgent.substring(0,userAgent.indexOf('.'));
				  $.browser.version = userAgent;
				  // If it is chrome then jQuery thinks it's safari so we have to tell it it isn't
				  $.browser.safari = false;
				
				 if(Detector.webkit==true){
					 $("#dialog").hide();
				}else{
					$("#dialogBody").append(text.webkit[0]);
					$("#dialogLinks").append("<a href="+text.webkit[1]+" target='_blank'>" +text.webkit[2]+ "</a><br/>");
					document.getElementById("dialog").style.visibility="visible";
					$("#dialog").dialog({modal:true});
				}
				}else{
				 document.getElementById("dialog").style.visibility="visible";
				 $("#dialogBody").html("Sorry but this one is google Chrome only.<br/><br/>If you want to try and port it to different browsers, feel free to <a href='mailTo:contact@cabbibo.com'>CONTACT ME</a> but for now the v8 engine and Web Audio API are vital tools in the construction of the Universe.");
					$("#dialogLinks").append("<a href='https://www.google.com/intl/en/chrome/browser/' target='_blank'>Get Google Chrome</a><br/>");
				 $("#dialog").dialog();
				}
		},
		
		dialog:function(){
			
			for (var i = 0; i < arguments.length; i++) {
				
			}
			
			
			$("body").append("<div id='dialog'></div>");
			//$("#dialog").html("check check chekc");
			document.getElementById("dialog").style.visibility="visible";
			$("#dialog").dialog({modal:true});
				
		},
		
		kitGL:function(){
			var testingMatrix = [];
			if(Detector.webkit==true){
					testingMatrix.push(true);
			}else{
				$("#dialogBody").append(text.webkit[0]);
				$("#dialogLinks").append("<a href="+text.webkit[1]+" target='_blank'>" +text.webkit[2]+ "</a><br/>");
			}
			
			if(Detector.webgl==true){
					testingMatrix.push(true);
			}else{
				$("#dialogBody").append(text.webgl[0]);
				$("#dialogLinks").append("<a href="+text.webgl[1]+" target='_blank'>"+text.webgl[2]+"</a><br/>");
			}
		
			if(testingMatrix[0]==true && testingMatrix[1]==true){
			}else{
				document.getElementById("dialog").style.visibility="visible";
				$("#dialog").dialog({modal:true});
			}	
		}
			
	}
	
	if(!whichTech){
		
		Detector.kitGL();
	
	}else{
		
		Detector.nonChrome()
		
	}
	letThereBeLight();
	
}



var text={
	webkit:["- Webkit","http://en.wikipedia.org/wiki/List_of_web_browsers#WebKit-based","List of Webkit Browsers"],
	webgl:["- WebGL","http://get.webgl.org/","Get WebGL"]
}