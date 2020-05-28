/*



	Creates a Full sound object
	by filling in all the areas that the user has not defined in the different 
	sections of the song, meaning that there will be
	random galaxy creation


	TODO
	
	figure out planet rotation screw up!
*/


themeArray = [ 
	'egg',	//sphere suns as outside random planet inside
	'ring', //sun in center, planets in ring
	'present', //Cube sun as outside, random planet inside
	'sphere', //like ring but planets placed in random spher
	'line', //like ring but planets placed in line
	'spiral', //like ring but planets place in spiral *NEED TO WRITE NEW PLACEMENT FUNCTINO FOR THIS*
	'cube',//like ring, but 8 planet groups place in corners of cubes *NEED TO WRITE NEW PLACEMENT FUNCTINO FOR THIS*
	'tetrahedron',// like cube but 6 planet groups placed on corners of tetrahedron *NEED TO WRITE NEW PLACEMENT FUNCTINO FOR THIS* 
]

createTheme = function(whichObj){
		
		
	
		
		//If there is no theme, assign a random one
		if(!whichObj.theme || whichObj.theme == 'random'){
			whichObj.theme = themeArray[Math.floor(Math.random()*themeArray.length)]
		}
		
	
		/*
		
			PLANET CREATION
		
		*/
	
		
		if(!whichObj.planets){
			whichObj.planets = {}
			//console.log('planets')
		}
		
		
		if(!whichObj.planets.numOf){
			//Gets planet number between 5 and 40

			if(whichObj.theme == 'spiral'){
				whichObj.planets.numOf = Math.ceil(Math.random()*10)+20
			}else if(whichObj.theme == 'cube'){
				whichObj.planets.numOf =(Math.ceil(Math.random()*5) + 3) * 8
				
			}else if(whichObj.theme == 'tetrahedron'){
				whichObj.planets.numOf =(Math.ceil(Math.random()*5) + 3) * 6
				
			}else{
				whichObj.planets.numOf = Math.ceil(Math.random()*35)+5
			}
		}
		
		//Will assign dataType as well
		if(!whichObj.planets.type){
			
			if(whichObj.theme == 'egg'  || whichObj.theme == 'spiral' || whichObj.theme == 'present' ){
				var range = (Math.random()*(whichObj.radius/10))+whichObj.radius/10
				var type = planetLib.randomType((range))
				whichObj.planets.type = type.type	
				whichObj.planets.dataType = type.dataType
				if(type.scale){
					whichObj.planets.scale = type.scale	
				}
			}else if(whichObj.theme == 'cube' || whichObj.theme == 'tetrahedron' ){
				var range = (Math.random()*(whichObj.radius/10))+whichObj.radius/15
				var type = planetLib.randomType((range))  
				whichObj.planets.type = type.type	
				whichObj.planets.dataType = type.dataType
				if(type.scale){
					whichObj.planets.scale = type.scale	
				}
			}else if(whichObj.theme == 'ring'){
				var type = planetLib.randomType((whichObj.radius/8))    
				whichObj.planets.type = type.type	
				whichObj.planets.dataType = type.dataType
				if(type.scale){
					whichObj.planets.scale = type.scale	
				}
			}else{
				var range = (Math.random()*(whichObj.radius/10))+whichObj.radius/15
				var type = planetLib.randomType((range))
				whichObj.planets.type = type.type	
				whichObj.planets.dataType = type.dataType
				if(type.scale){
					whichObj.planets.scale = type.scale	
				}
				
			}
			
		}
		
		
		if(!whichObj.planets.material){
			var materialRandom = Math.floor((Math.random()*1))
			materialRandom = 0
			if(materialRandom == 1){
				whichObj.planets.material = planetLib.material.colorNormal(whichObj.color)
			}else{
				whichObj.planets.material = planetLib.material.imgMaterial(whichObj.img)	
				if(!whichObj.lights){
					
					//Create different Light Placing for different types
					if(whichObj.theme == 'egg'){
						whichObj.lights = {}
						whichObj.lights.type = lightLib.type.point(whichObj.color,3,whichObj.radius*100)
						whichObj.lights.numOf = 5
						whichObj.lights.position = lightLib.position.randomSphere(whichObj.radius*1.5);
					}else if(whichObj.theme == 'ring'){
						whichObj.lights = {}
						whichObj.lights.type = lightLib.type.point(whichObj.color,3,whichObj.radius*100)
						whichObj.lights.numOf = 5
						whichObj.lights.position = lightLib.position.randomSphere(whichObj.radius*1);
					}else{
						whichObj.lights = {}
						whichObj.lights.type = lightLib.type.point(whichObj.color,3,whichObj.radius*100)
						whichObj.lights.numOf = 5
						whichObj.lights.position = lightLib.position.randomSphere(whichObj.radius*1);
					}
				}	
			}
		}
		
		
		
		if(!whichObj.planets.position){
			  if(whichObj.theme == 'egg'){
				  whichObj.planets.position = planetLib.randomPosition(whichObj.radius/4,whichObj.planets.numOf)
				  
			  }else if(whichObj.theme == 'spiral'){
				  whichObj.planets.position = planetLib.randomPosition(whichObj.radius,whichObj.planets.numOf,[6])
			  }else if(whichObj.theme == 'cube'){
				  whichObj.planets.position = planetLib.randomPosition(whichObj.radius/2,whichObj.planets.numOf,[7])
				  
			  }else if(whichObj.theme == 'tetrahedron'){
				  whichObj.planets.position = planetLib.randomPosition(whichObj.radius/2,whichObj.planets.numOf,[8])
				  
			  }else if(whichObj.theme == 'ring'){
				  whichObj.planets.position = planetLib.position.fullCircle(whichObj.radius*.8,whichObj.planets.numOf)
			  }else{
				  whichObj.planets.position = planetLib.randomPosition(Math.random()*whichObj.radius,whichObj.planets.numOf)
			  }
		}
		
		if(!whichObj.planets.rotation){
			whichObj.planets.rotation = planetLib.randomRotation(whichObj.planets.numOf,Math.random()*2*Math.PI)	
		}
			
			
		/*
		
			SUN CREATION
			
		*/
		
		if(!whichObj.suns){
			whichObj.suns = {}
		}
		
		if(!whichObj.suns.numOf){
			if(whichObj.theme == 'egg'){
				whichObj.suns.numOf = Math.ceil(Math.random()*20)+10
			}else if(whichObj.theme == 'ring'){
				whichObj.suns.numOf = Math.ceil(Math.random()*20)+10
			}else if(whichObj.theme == 'present'){
				whichObj.suns.numOf = 1
			}else{
				whichObj.suns.numOf = Math.ceil(Math.random()*20)+10
			}
		}
		
		
		//Will assign dataType as well
		if(!whichObj.suns.type){
			if(whichObj.theme =='egg'){
				var type = planetLib.randomType(whichObj.radius,[1,5])
				whichObj.suns.type = type.type	
				whichObj.suns.dataType = type.dataType
				
			}else if(whichObj.theme =='present'){
				var type = planetLib.randomType((whichObj.radius*1.5),[0])
				whichObj.suns.type = type.type	
				whichObj.suns.dataType = type.dataType
				
			}else if(whichObj.theme =='ring' || whichObj.theme == 'cube' || whichObj.theme == 'tetrahedron' || whichObj.theme == 'spiral'){
				
				var range = (Math.random()*(whichObj.radius/10))+whichObj.radius/15
				var type = planetLib.randomType(range)
				whichObj.suns.type = type.type	
				whichObj.suns.dataType = type.dataType
			}else{
			 	
				var range = (Math.random()*(whichObj.radius/10))+whichObj.radius/15
				var type = planetLib.randomType(range)
				whichObj.suns.type = type.type	
				whichObj.suns.dataType = type.dataType
			}
		}
		
		if(!whichObj.suns.material){
			var materialRandom = Math.floor((Math.random()*2))
			materialRandom = 0
			if(materialRandom == 1){
				whichObj.suns.material = planetLib.material.colorNormal(whichObj.color)
			}else{
				whichObj.suns.material = planetLib.material.imgMaterial(whichObj.img)	
				if(!whichObj.lights){
					if(whichObj.theme == 'egg'){
						whichObj.lights = {}
						whichObj.lights.type = lightLib.type.point(whichObj.color,3,whichObj.radius*100)
						whichObj.lights.numOf =10
						whichObj.lights.position = lightLib.position.randomSphere(4*whichObj.radius);	
					}else if(whichObj.theme == 'ring'){
						whichObj.lights = {}
						whichObj.lights.type = lightLib.type.point(whichObj.color,3,whichObj.radius*100)
						whichObj.lights.numOf =10
						whichObj.lights.position = lightLib.position.randomSphere(4*whichObj.radius);	
					}else{
						whichObj.lights = {}
						whichObj.lights.type = lightLib.type.point(whichObj.color,3,whichObj.radius*100)
						whichObj.lights.numOf =10
						whichObj.lights.position = lightLib.position.randomSphere(4*whichObj.radius);	
					}
				}
			  
			}
		}
		
		
		if(!whichObj.suns.position){
			if(whichObj.theme == 'egg' || whichObj.theme == 'ring'){
				whichObj.suns.position = planetLib.position.center()
			}else{
				whichObj.suns.position = planetLib.position.center()
			}
		}
		
		if(!whichObj.suns.rotation){
			
			if(whichObj.theme == 'egg'){
				whichObj.suns.rotation = planetLib.rotation.fullCircle(whichObj.suns.numOf)
			}else{
				whichObj.suns.rotation = planetLib.randomRotation(whichObj.suns.numOf,Math.random()*2*Math.PI)	
			}
			

		}
		
		
		
		
		
		if(!whichObj.dust){
			whichObj.dust = {}
		}
		
		
		//Will assign dataType as well
		if(!whichObj.dust.pNum){
			whichObj.dust.pNum =Math.ceil(Math.random()*100) +50

		}
		
		if(!whichObj.dust.fNum){
			whichObj.dust.fNum =Math.ceil(Math.random()*20) +10
		}
		
		if(!whichObj.dust.pPosition){
			
			if(whichObj.theme == 'ring'){
				whichObj.dust.pPosition = dustLib.randomPPosition(whichObj.radius/2,whichObj.dust.pNum,[0,1,3,4,7])	
			}else{
				whichObj.dust.pPosition = dustLib.randomPPosition(whichObj.radius/4,whichObj.dust.pNum,[0,1,3,4,7])	
			}
		}
		
		if(!whichObj.dust.fPosition){
			if(whichObj.theme == 'ring'){
				whichObj.dust.fPosition = dustLib.randomFPosition(whichObj.radius/2,whichObj.dust.fNum,[0,1,3,4,5])	
			}else{
				whichObj.dust.fPosition = dustLib.randomFPosition(whichObj.radius/2,whichObj.dust.fNum,[0,1,3,4,5])
			}
		}
		
		if(!whichObj.dust.pMaterial){
			whichObj.dust.pMaterial =  dustLib.randomPMaterial(whichObj.radius/1000, whichObj.color,whichObj.img)
		}
		
		if(!whichObj.dust.fRotation){
			whichObj.dust.fRotation = dustLib.randomFRotation(whichObj.dust.fNum,Math.random()*Math.PI*2)
		}
		
		
			
			
		
		/*
			Setting up Visuals
		*/
		if(!whichObj.sections){
			whichObj.sections = [{}]
		}


	
		if (!whichObj.sections[0].planet){
			var randomVis
			
			if(whichObj.theme =='ring'){
				randomVis = planetLib.randomVis({position:[999]})
			}else if(whichObj.theme == 'egg'){
				randomVis = planetLib.randomVis()
				
			}else if(whichObj.theme == 'spiral' || whichObj.theme == 'cube' || whichObj.theme == 'tetrahedron'){
				randomVis = planetLib.randomVis({position:[999]})
				
			}else{
				randomVis = planetLib.randomVis()
			}
			
			whichObj.sections[0].planet = randomVis
		}
		
		
		
		if (!whichObj.sections[0].sun){
			var randomVis
			
			if(whichObj.theme == 'egg' || whichObj.theme == 'present'){
				randomVis = sunLib.randomVis({vertex:[1,2,3,4,6],position:[999]})
			}else{
				randomVis = sunLib.randomVis()
			}
			
			whichObj.sections[0].sun = randomVis
		}
		
		
		

		if (!whichObj.sections[0].dust){
			var randomVis
			if(whichObj.theme =='egg'){
				randomVis = dustLib.randomVis({scale:[0,2]})
			}else{
				randomVis = dustLib.randomVis()
			}
			whichObj.sections[0].dust = randomVis
		}
		
		//If there are lights, visualize those suckers
		if(!whichObj.sections[0].light && whichObj.lights){
			
				whichObj.sections[0].light={}
			//randomVis = lightLib.randomVis()
			whichObj.sections[0].light.color = lightLib.visual.color.color
			
		}
		
		
}


/*

PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET PLANET 

*/

planetLib.randomPosition = function(size,numOf,possible){
	
	var array = [
		planetLib.position.center(),
		planetLib.position.boxRand(size),
		planetLib.position.fullCircle(size,numOf),
		planetLib.position.fullSphere(size,numOf),
		planetLib.position.loopDLoop(size,numOf),
		planetLib.position.lineX(size,numOf),
		planetLib.position.spiral(size,numOf),
		planetLib.position.cube(size,numOf),
		planetLib.position.tetrahedron(size,numOf),
	]
	var randomType 
	if(possible){
		randomType = possible[Math.floor((Math.random()*possible.length))]
	}else{
		randomType = Math.floor(Math.random()*array.length)
	}
	
	var toReturn = array[randomType]
	return toReturn
}

planetLib.randomRotation = function(numOf,degrees,possible){
	var array = [
		planetLib.rotation.fullCircle(numOf),
		planetLib.rotation.fullCircleX(numOf),
		planetLib.rotation.fullCircleY(numOf),
		planetLib.rotation.fullCircleZ(numOf),
		planetLib.rotation.noRotation(),
		
	]
	var randomType 
	if(possible){
		randomType = possible[Math.floor((Math.random()*possible.length))]
		console.log(randomType)
	}else{
		randomType = Math.floor(Math.random()*9)
	}
	
	var toReturn = array[randomType]
	return toReturn
	
}


planetLib.randomType =  function(size,possible) {
	
	
	var randomType 
	if(possible){
		randomType = possible[Math.floor((Math.random()*possible.length))]
	}else{
		randomType = Math.floor(Math.random()*6)
	}
	var toReturn = {}
	
	switch(randomType){
		case 0:
		toReturn.type = planetLib.type.cube(size,size,size)
		toReturn.dataType = planetLib.type.cube(size,size,size)
		break;
		
		case 1 :
		toReturn.type = planetLib.type.sphere(size,10,10)
		toReturn.dataType = planetLib.type.sphere(size,10,10)
		break;
		
		
		case 2:
		toReturn.type = planetLib.type.knot1(10,5,5),
		toReturn.dataType = planetLib.type.knot1(10,5,5),
		toReturn.scale = [size/300,size/300,size/300]
		break;
		
		
		case 3:
		toReturn.type = planetLib.type.knot3(10,5,5),
		toReturn.dataType = planetLib.type.knot3(10,5,5),
		toReturn.scale = [size/200,size/200,size/200]
		break;
		
		case 4:
		toReturn.type = planetLib.type.knot4(10,5,5),
		toReturn.dataType = planetLib.type.knot4(10,5,5),
		toReturn.scale = [size/200,size/200,size/200]
		break;
		
		
		case 5:
		toReturn.type = planetLib.type.icosahedron(size,1)
		toReturn.dataType = planetLib.type.icosahedron(size,1)
		break;
	}
	
	
	
	return toReturn
}





	
/*
	PlanetLib Vertex Arrays
*/	
 
planetLib.vertexArray = [
	planetLib.visual.vertex.hackNight2,
	planetLib.visual.vertex.hackNight3,
	planetLib.visual.vertex.hackNight4,
	planetLib.visual.vertex.hackNight5,
	planetLib.visual.vertex.hackNight5_1,
	planetLib.visual.vertex.hackNight6,
	planetLib.visual.vertex.hackNight7,
	planetLib.visual.vertex.hackNight7_small,
	planetLib.visual.vertex.hackNight8,
	planetLib.visual.vertex.hackNight9,
	planetLib.visual.vertex.hackNight9_small,	
	planetLib.visual.vertex.nFreqBuldge,
	planetLib.visual.vertex.nFreqBuldge1,
	planetLib.visual.vertex.nBuldgeYZ,
	planetLib.visual.vertex.nBuldgeYZ_small,
	planetLib.visual.vertex.freqBuldge
]


planetLib.rotationArray = [
	planetLib.visual.rotation.freqRotX, 
	planetLib.visual.rotation.freqXcamZ,	
	planetLib.visual.rotation.camPosX,		
	planetLib.visual.rotation.nCamPosX,
	planetLib.visual.rotation.camPosY,
	planetLib.visual.rotation.camPosZ,
	planetLib.visual.rotation.camPosZ0Y,
]
 

	
planetLib.positionArray =[
	planetLib.visual.position.out,
	planetLib.visual.position.outLoopD,
	planetLib.visual.position.outSphere,
	planetLib.visual.position.out300,
	planetLib.visual.position.out_large,
	planetLib.visual.position.in,
	planetLib.visual.position.freqZ,
	planetLib.visual.position.freqXOffset300,
	planetLib.visual.position.sinPlacement,
]	



planetLib.randomVis = function(){
	
	var toReturn ={}
	
	params = arguments[0]
	if(!params)params={}
	
	
	
	var vertex = Math.floor(Math.random()*(planetLib.vertexArray.length))
	
	if(params.vertex){
		vertex = params.vertex[	Math.floor(Math.random()*(params.vertex.length))]
	}
	
	var rotation = Math.floor(Math.random()*(planetLib.rotationArray.length+1))
	
	if(params.rotation){
		rotation = params.rotation[Math.floor(Math.random()*(params.rotation.length))]
	}
	
	var position = Math.floor(Math.random()*(planetLib.positionArray.length+1))
	
	if(params.position){
		position = params.position[Math.floor(Math.random()*(params.position.length))]
	}
	
	
	if(planetLib.vertexArray[vertex]){
		toReturn.vertex = planetLib.vertexArray[vertex]
	}
	
	if(planetLib.rotationArray[rotation]){
		toReturn.rotation = planetLib.rotationArray[rotation]
	}
	
	if(planetLib.positionArray[position]){
		toReturn.position = planetLib.positionArray[position]
	}	
	
	
	
	return toReturn	
}





/*

SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN SUN 

*/



sunLib.rotationArray = [
	sunLib.visual.rotation.constantXpolarYZ, 
	sunLib.visual.rotation.positionBased,
	sunLib.visual.rotation.freqRotX
] 
sunLib.vertexArray = [
	sunLib.visual.vertex.spike,
	sunLib.visual.vertex.hackNight2,
	sunLib.visual.vertex.hackNight3,
	sunLib.visual.vertex.hackNight4,
	sunLib.visual.vertex.hackNight5,
	sunLib.visual.vertex.hackNight6,
	sunLib.visual.vertex.freqBuldge
]
	
sunLib.positionArray =[sunLib.visual.position.freqZpolarXY]	



sunLib.randomVis = function(){
 
	params = arguments[0]
	if(!params)params={}
	
	var vertex = Math.floor(Math.random()*(sunLib.vertexArray.length+1))
	
	if(params.vertex){
		vertex = params.vertex[Math.floor(Math.random()*(params.vertex.length))]
	}
	
	var rotation = Math.floor(Math.random()*(sunLib.rotationArray.length+1))
	
	if(params.rotation){
		rotation = params.rotation[Math.floor(Math.random()*(params.rotation.length))]
	}

	var position = Math.floor(Math.random()*(sunLib.positionArray.length+1))
	
	if(params.rotation){
		rotation = params.rotation[Math.floor(Math.random()*(params.position.length))]
	}
	
	toReturn = {}
	
	
	if(sunLib.vertexArray[vertex]){
		toReturn.vertex = sunLib.vertexArray[vertex]
	}
	
	if(sunLib.rotationArray[rotation]){
		toReturn.rotation = sunLib.rotationArray[rotation]
	}
	
	//Never really want to move the suns position, thats what makes is a sun !
	/*if(sunLib.positionArray[position]){
		toReturn.position = sunLib.positionArray[position]
	}*/
	
	return toReturn	
}







/*

	DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST DUST 


*/



dustLib.randomPPosition = function(size,numOf,possible){
	
	var array = [
		dustLib.pPosition.randomBox(size),
		dustLib.pPosition.lineThroughX(size),
		dustLib.pPosition.lineX(size),
		dustLib.pPosition.ringX(size,numOf),
		dustLib.pPosition.jaggedLineX(size),
		dustLib.pPosition.nDependX(size),
		dustLib.pPosition.nJaggedDependX(size),
		dustLib.pPosition.chipX(size),
		dustLib.pPosition.sphere(size)
	]
	var randomType 
	if(possible){
		randomType = possible[Math.floor((Math.random()*possible.length))]
	}else{
		randomType = Math.floor(Math.random()*9)
	}
	
	var toReturn = array[randomType]
	
	return toReturn

}

dustLib.randomFPosition = function(size,numOf,possible){
	
	var array = [
		dustLib.fPosition.randomBox(size),
		dustLib.fPosition.lineThroughX(size),
		dustLib.fPosition.straightLine(size),
		dustLib.fPosition.ringX(size,numOf),
		dustLib.fPosition.jaggedLineX(size),
		dustLib.fPosition.center(),
		dustLib.fPosition.sphere(size)
	]
	
	var randomType 
	if(possible){
		randomType = possible[Math.floor((Math.random()*possible.length))]
	}else{
		randomType = Math.floor(Math.random()*7)
	}
	
	var toReturn = array[randomType]
	
	return toReturn

}

dustLib.randomPMaterial = function(size,color,img,possible){
	
	var array = [
		dustLib.pMaterial.color(color,size),
		dustLib.pMaterial.colorAdditive(color,size),
		dustLib.pMaterial.img(img,size),
		dustLib.pMaterial.imgAdditive(img,size),
	]
	
	var randomType 
	if(possible){
		randomType = possible[Math.floor((Math.random()*possible.length))]
	}else{
		randomType = Math.floor(Math.random()*4)
	}
	
	var toReturn = array[randomType]
	
	return toReturn

}

dustLib.randomFRotation = function(numOf,degree,possible){
	
	var array = [
		dustLib.fRotation.noRotation(),
		dustLib.fRotation.xyRot(degree),
		dustLib.fRotation.rotX(degree,numOf),
		
	]
	
	var randomType 
	if(possible){
		randomType = possible[Math.floor((Math.random()*possible.length))]
	}else{
		randomType = Math.floor(Math.random()*3)
	}
	
	var toReturn = array[randomType]
	
	return toReturn

}



/*

	Dust Vis

*/


 
dustLib.positionArray = [
	dustLib.visual.position.center,
]

dustLib.rotationArray = [
	dustLib.visual.rotation.freqX,
	dustLib.visual.rotation.freqY, 
	dustLib.visual.rotation.freqZ,
	dustLib.visual.rotation.nFreq,
	dustLib.visual.rotation.nFreqX,
	dustLib.visual.rotation.nSteadyXNFreqZ,
	dustLib.visual.rotation.steadyXfreqY
]
 

	
dustLib.scaleArray =[
	dustLib.visual.scale.freqXYZ,
	dustLib.visual.scale.freqXYZLess,
	dustLib.visual.scale.freqHalf,
	dustLib.visual.scale.freqHalfLess,
	dustLib.visual.scale.freqHalfLess_1,
	dustLib.visual.scale.freqZeroXYZ
]	

dustLib.sizeArray = [
	dustLib.visual.size.freq,
	dustLib.visual.size.freqLarge,
	dustLib.visual.size.freqNone,
]



dustLib.randomVis = function(){
	
	var toReturn ={}
	
	params = arguments[0]
	if(!params)params={}
	
	
	
	var scale = Math.floor(Math.random()*(dustLib.scaleArray.length))
	
	if(params.scale){
		scale = params.scale[Math.floor(Math.random()*(params.scale.length))]
	}
	
	var size = Math.floor(Math.random()*(dustLib.sizeArray.length))
	
	if(params.size){
		size = params.size[Math.floor(Math.random()*(params.size.length))]
	}
	
	var rotation = Math.floor(Math.random()*(dustLib.rotationArray.length+1))
	
	if(params.rotation){
		rotation = params.rotation[Math.floor(Math.random()*(params.rotation.length))]
	}
	
	var position = Math.floor(Math.random()*(dustLib.positionArray.length+1))
	
	if(params.position){
		position = params.position[Math.floor(Math.random()*(params.position.length))]
	}
	
	
	if(dustLib.scaleArray[scale]){
		toReturn.scale = dustLib.scaleArray[scale]
	}
	
	if(dustLib.sizeArray[size]){
		toReturn.size = dustLib.sizeArray[size]	
	}
	
	if(planetLib.rotationArray[rotation]){
		toReturn.rotation = dustLib.rotationArray[rotation]
	}
	
	if(planetLib.positionArray[position]){
		toReturn.position = dustLib.positionArray[position]
	}	
	
	
	
	return toReturn	
}




