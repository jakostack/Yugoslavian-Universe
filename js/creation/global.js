
/*

	Global Cariables / Objects / Scenes , etc
	

*/


//number that is used to tell how many of the images are loaded
var loaded = 0



//This is teh sound object we are currently within rang of
window.current = null

window.soundObjArray = []


window.hashArray = []


//Starting position of the camera
//TODO:
//add function to parse url for starting position

controlsUpdating = true

//camera for the scene, VERY large distance!
window.camera = new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,100,8000000000)

//Creates a clock, mostly for use with controls
window.clock = new THREE.Clock();

//creates the scene for this galaxy
window.scene=new THREE.Scene();
	
//creates fog for this galaxy
//window.scene.fog = new THREE.FogExp2( 0x000000, 1);

//the max and min fog are used for fading functions
//window.minFogDensity=0.0000001
//window.maxFogDensity=0.001

//window.scene.fog.density = minFogDensity
window.scene.add(camera)
	
//Positions the camera initially in the galaxy
camera.position.x = startingCamPos.x
camera.position.y = startingCamPos.y
camera.position.z = startingCamPos.z



//initializes the variables for the spherical positioning of the camera
camera.position.r = 0
camera.position.t = 0
camera.position.p = 0

//initializes direction object of the camera
camera.direction = {}
camera.direction.x = 0 
camera.direction.y = 0 
camera.direction.z = 0 

//the oCamera will hold where the camera was,
//last render. This wll allow us to calculate velocity
//as well as direction of travel
window.oCamera = {}
oCamera.position = {}
oCamera.position.x = 0
oCamera.position.y = 0
oCamera.position.z = 0
oCamera.position.r = 0
oCamera.position.t = 0
oCamera.position.p = 0


//Sets the traveling and animation functions to null
//These are used for different transitions
//such as fading in and out of scenes, 
//and the travel log
window.animationFunction = null
window.travelingFunction = null



//creates renderer for this galaxy
window.renderer=new THREE.WebGLRenderer( { clearColor: 0x000000, clearAlpha: 1,  } )
renderer.setSize( window.innerWidth, window.innerHeight );	


//Creates Stats
/*TAKE OUT FOR PRODUCTION*/
window.stats = new Stats();
stats.domElement.style.position = 'absolute';
stats.domElement.style.bottom = '0px';
stats.domElement.style.visibility= 'hidden';


//adds stats to document
window.container=document.getElementById( 'container' )
container.appendChild(renderer.domElement )
container.appendChild(stats.domElement )



var leapControls = false;
var controller = new Leap.Controller()
console.log(controller)
controller.on('frame',function(frame){

  leapControls = true ; 

})

window.controls= new THREE.MomentumControls( camera )	
controls.lookSpeed =1;
controls.constrainVertical = [ -0.9, 0.9 ];

setTimeout(function(){

  //controller.disconnect();
  //controller = undefined;

  //Use Leap if present
  if(leapControls == true){
      
      window.controls= new THREE.LeapControls( camera )	
      controls.lookSpeed =1;
      controls.constrainVertical = [ -0.8, 0.8 ];

  }
	
},2000)




//Function that animates everything!
window.animate = function(){

	//if(leapControls != true){
		requestAnimationFrame(animate);
	//}
	
	//updates the listener position
	//as well as visualizes, if there is a visualizing function
	if(current.audio.analyser){
		current.audio.update();
	}
	
	if(controlsUpdating ==true){
		//updates position speed etc of camera
		controls.update( clock.getDelta() );
	}
	
	//after the position is updated, get the new camera position
	getCamPos();


    skybox.position = camera.position

    skybox.scale.x = 2000 * - camera.near / skybox.geometry.radius
    skybox.scale.y = 2000 * camera.near / skybox.geometry.radius
    skybox.scale.z = 2000 *   camera.near / skybox.geometry.radius

    
	//and call the check function for whichever sound object we are in	
	current.check();
	
	//if there is a fade function, do it!
	if(animationFunction){
		animationFunction();
	}
	
	//if there is a traveling function, do it!
	if(travelingFunction){
		travelingFunction();
	}
	
	stats.update();	
	renderer.render( scene, camera );
	
}


var skybox = new THREE.Mesh( new THREE.SphereGeometry( 50000, 60, 40 ), new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'img/starMap.png',{},function(){
  loadBarAdd('img/starMap.png')
}), depthWrite:false } ) );
skybox.scale.x = -.1;
skybox.scale.y =  .1;
skybox.scale.z = .1;
scene.add(skybox);
console.log(skybox)



/*

	GLOBAL FUNCTIONS FOR CAMERA ANALYSIS


*/

window.getCamDir = function(){
	var pLocal = new THREE.Vector3( 0, 0, -1 );
	var pWorld = pLocal.applyMatrix4(camera.matrixWorld)
	//var pWorld = selfGALAXY.camera.matrixWorld.multiplyVector3( pLocal );
	var front = pWorld.sub(camera.position ).normalize();
	
	var pLocal = new THREE.Vector3( 0, 1, 0 );
	var pWorld = pLocal.applyMatrix4(camera.matrixWorld)
	//var pWorld = selfGALAXY.camera.matrixWorld.multiplyVector3( pLocal );
	var up = pWorld.sub(camera.position ).normalize();
	
	var direction = {
		front:front,
		up:up	
	}
	return(direction)
}


	
window.getCamPos = function(){
	
		oCamera.r = camera.position.r
		oCamera.t = camera.position.t
		oCamera.p = camera.position.p
		oCamera.x = camera.position.x
		oCamera.y = camera.position.y
		oCamera.z = camera.position.z
		
		var newPosPolar = cabMATH.toPolar(camera.position.x,camera.position.y,camera.position.z)
		camera.position.r = newPosPolar.r
		camera.position.t = newPosPolar.t
		camera.position.p = newPosPolar.p
			
		//CAMERA DIRECTION
		var cameraDirection = getCamDir();
		
		camera.direction = cameraDirection
		
		
}


//calling this now, so that everything gets updated from 
//its incorrectly initialized functions
getCamPos();
		

/*
	
		FADING FUNCTIONS
	
	*/
	
window.fogFadeToMax=function (functionToCallWhenFinished){
	
	if(scene.fog.density <= maxFogDensity-(maxFogDensity/2)){
		scene.fog.density += (maxFogDensity-scene.fog.density)/50
	}else{
		scene.fog.density = maxFogDensity
		functionToCallWhenFinished();
	}
	
}
	
window.fogFadeToMin =function (functionToCallWhenFinished){
	if(scene.fog.density >= minFogDensity+(minFogDensity/20)){
		scene.fog.density -= (scene.fog.density - minFogDensity)/5			
	}else{
		functionToCallWhenFinished();
	}	
}
	


	
window.animationFunctionNull = function(){
	animationFunction = null	
}
	
//Function to call for moving the camera to another location
//mostly used for the travel log.
window.moveToLocation = function(x,y,z){
	var self = this
	
	
	travelingFunction = function(){
		cameraSmoothMove(x,y,z)
	}
}

	
//This function will move the camera from one place to another
//starts quickly, smooth slow down,
//mostly used for the travel log
window.cameraSmoothMove = function (toX,toY,toZ){
	
	
	//gets difference betwt
	var dif = {
		x:camera.position.x - toX,
		y:camera.position.y - toY,
		z:camera.position.z - toZ,
	}
	
	//gets the absolute value of the difference
	var noNegative ={
		x:Math.abs(dif.x),
		y:Math.abs(dif.y),
		z:Math.abs(dif.z)
	}
	if(noNegative.x <= 10 && noNegative.y <= 10 && noNegative.z <= 100){
		camera.position.x = toX
		camera.position.y = toY
		camera.position.z = toZ
		travelingFunction = null
	}else{
		camera.position.x -= dif.x/200 
		camera.position.y -= dif.y/200 
		camera.position.z -= dif.z/200 
	}
	
	if(mouseIsDown==true){
		travelingFunction = null
	}
},





/*


MUSIC

*/

window.music =  new AudioContext();
window.gain =  music.createGain();


//adding this for now so that I can work without having to listen to music
//TAKE OUT FOR PRODUCTION
window.TESTGAIN = music.createGain();
TESTGAIN.gain.value = .8

//gain will be used to fade  musically in and out of sections
gain.connect(TESTGAIN)
TESTGAIN.connect(music.destination)

				




/*

	Window stuff!

*/

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}


/*

Parser

*/

cCtoSpace = function(string){
	var toReturn = string
    // insert a space before all caps
    .replace(/([A-Z])/g, ' $1')
    // uppercase the first character
    .replace(/^./, function(str){ return str.toUpperCase(); })
	return toReturn
}



