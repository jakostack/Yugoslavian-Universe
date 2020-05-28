
var dustLib= { 

	// PARTICLE MATERIAL OPTIONS
	pMaterial:{
	
			
	
			whiteParticle:function(size){
				var toReturn = new THREE.ParticleBasicMaterial({
					size:size,
					color:0xffffff,
					blending: THREE.AdditiveBlending, 
					transparent : true
				})
				
				return toReturn
			},
			
			color:function(){
				var params = arguments
				var color = params[0]
				var size = 50
				if(params[1]){
					size = params[1]	
				}
				var toReturn = new THREE.ParticleBasicMaterial({ 
				  size:size,
				  color:color,
				  transparent : true
				})
				return toReturn
			},
			
			colorAdditive:function(){
				var params = arguments
				var color = params[0]
				var size = 50
				if(params[1]){
					size = params[1]	
				}
				var toReturn = new THREE.ParticleBasicMaterial({ 
				  size:size,
				  color:color,
				  blending: THREE.AdditiveBlending,
				  transparent : true
				})
				return toReturn
			},
			
			normalParticle:function(size){
				var toReturn = new THREE.ParticleBasicMaterial({ 
				  size:size,
				  color:0xffffff,
				  blending: THREE.AdditiveBlending,
				  transparent : true
				})
				
				return toReturn
			},
			
			img:function(){
				var params = arguments
				var size = 50
				if(params[1]){
					size = params[1]	
				}
				var toReturn = new THREE.ParticleBasicMaterial({
				  size:size,
				  map:THREE.ImageUtils.loadTexture( params[0] ),  
				  //transparent : true ,
				  alphaTest:0.0
				})
							
				if(params[2]){
					toReturn.color.setHSV( params[2], 1, 1 );
				}
				if(params[3]){
					toReturn.color.setHSV( params[2], params[3], 1 );
				}
				if(params[4]){
					toReturn.color.setHSV( params[2], params[3], params[4]);
				}
				
				return toReturn
			
			},
			
			imgAdditive:function(){
				var params = arguments
				var toReturn = new THREE.ParticleBasicMaterial({
					size:params[1],
					map:THREE.ImageUtils.loadTexture( params[0] ), 
					blending: THREE.AdditiveBlending,
					transparent : true	,
				 	alphaTest:0.1		
				})
							
				if(params[2]){
					toReturn.color.setHSV( params[2], 1, 1 );
				}
				if(params[3]){
					toReturn.color.setHSV( params[2], params[3], 1 );
				}
				if(params[4]){
					toReturn.color.setHSV( params[2], params[3], params[4]);
				}
				
				return toReturn
			
			},
		
	},
	
	//PARTICLE POSITIONING FUNCITONS
	pPosition:{
		randomBox:function(size){
				var functionToReturn=function(n){
					var x = Math.random()*size-(size/2)
					var y = Math.random()*size-(size/2)
					var z = Math.random()*size-(size/2)
					var toReturn = {
						x:x,
						y:y,
						z:z	
					}
					return toReturn
				}
				
				return functionToReturn
		},
		
		lineThroughX:function(size){
			
			var functionToReturn=function(n){
					var x = Math.random()*size-(size/2)
					var y = 0
					var z = 0
					var toReturn = {
						x:x,
						y:y,
						z:z	
					}
					return toReturn
				}
				
			return functionToReturn
			
		},
		lineX:function(size){
			
			var functionToReturn=function(n){
					var x = Math.random()*size
					var y = 0
					var z = 0
					var toReturn = {
						x:x,
						y:y,
						z:z	
					}
					return toReturn
				}
				
			return functionToReturn
			
		},
		
		
		ringX:function(size,numOf){
			
			var functionToReturn=function(n){
					var pos = cabMATH.toCart(size,(2*Math.PI*(n/numOf)),0)
					var x = pos.x
					var y = pos.y
					var z = pos.z
					var toReturn = {
						x:x,
						y:y,
						z:z	
					}
					return toReturn
				}
				
			return functionToReturn
			
		},
		
		jaggedLineX:function(size){
			
			var functionToReturn=function(n){
					var x = Math.random()*size-(size/2)
					var y = Math.random()*(size/10)-(size/20)
					var z = Math.random()*(size/10)-(size/20)
					var toReturn = {
						x:x,
						y:y,
						z:z	
					}
					return toReturn
				}
				
			return functionToReturn
			
		},
		
		nDependX:function(size){
			
			var functionToReturn=function(n){
					var x = size*n
					var y = n
					var z = 0//Math.random()*(size/10)-(size/20)
					var toReturn = {
						x:x,
						y:y,
						z:z	
					}
					return toReturn
				}
				
			return functionToReturn
			
		},
		nJaggedDependX:function(size){
			
			var functionToReturn=function(n){
					var x = size*(n+1)
					var y = Math.random()*n
					var z = 0//Math.random()*(size/10)-(size/20)
					var toReturn = {
						x:x,
						y:y,
						z:z	
					}
					return toReturn
				}
				
			return functionToReturn
			
		},
		
		sphere:function(size){
			
			var functionToReturn=function(n){
					var pos = cabMATH.toCart(size,(2*Math.PI*Math.random()),(-Math.PI*(2*Math.PI*Math.random())))
					var x = pos.x
					var y = pos.y
					var z = pos.z
					var toReturn = {
						x:x,
						y:y,
						z:z	
					}
					return toReturn
				}
				
			return functionToReturn
			
		},
		
		
		chipX:function(size){
			
			var functionToReturn=function(n){
					var x = Math.random()*(size/4)-(size/8)
					var y = Math.random()*size-(size/2)
					var z = Math.random()*size-(size/2)
					var toReturn = {
						x:x,
						y:y,
						z:z	
					}
					return toReturn
				}
				
			return functionToReturn
			
		},
		
	},
	
	
	
	
	//FIELD POSITIONING FUNCITONS
	fPosition:{
		lineThroughX:function(size){
			
				var functionToReturn = function(n){
					var x = Math.random()*size - size/2
					var y = 0
					var z = 0
					var toReturn = {
						x:x,
						y:y,
						z:z	
					}
					return toReturn
				}
				
				return functionToReturn
		},
		straightLine:function(size){
			
				var functionToReturn = function(n){
					var x = n*size 
					var y = 0
					var z = 0
					var toReturn = {
						x:x,
						y:y,
						z:z	
					}
					return toReturn
				}
				
				return functionToReturn
		},
		
		randomBox:function(size){
			
				var functionToReturn = function(n){
					var x = Math.random()*size-(size/2)
					var y = Math.random()*size-(size/2)
					var z = Math.random()*size-(size/2)
					var toReturn = {
						x:x,
						y:y,
						z:z	
					}
					return toReturn
				}
				
				return functionToReturn
		},
		
		ringX:function(size,numOf){
			
			var functionToReturn=function(n){
					var pos = cabMATH.toCart(size,(2*Math.PI*(n/numOf)),0)
					var x = pos.x
					var y = pos.y
					var z = pos.z
					var toReturn = {
						x:x,
						y:y,
						z:z	
					}
					return toReturn
				}
				
			return functionToReturn
			
		},
		
		sphere:function(size){
			
			var functionToReturn=function(n){
					var pos = cabMATH.toCart(size,(2*Math.PI*Math.random()),(-Math.PI*(2*Math.PI*Math.random())))
					var x = pos.x
					var y = pos.y
					var z = pos.z
					var toReturn = {
						x:x,
						y:y,
						z:z	
					}
					return toReturn
				}
				
			return functionToReturn
			
		},
		
		
		center:function(){
			var functionToReturn = function(n){
					var x = 0
					var y = 0
					var z = 0
					var toReturn = {
						x:x,
						y:y,
						z:z	
					}
					return toReturn
				}
				
				return functionToReturn
			
		},
		
		jaggedLineX:function(size){
			
			var functionToReturn=function(n){
					var x = Math.random()*size-(size/2)
					var y = Math.random()*(size/10)-(size/20)
					var z = Math.random()*(size/10)-(size/20)
					var toReturn = {
						x:x,
						y:y,
						z:z	
					}
					return toReturn
				}
				
			return functionToReturn
			
		},
		
		chipStackX:function(length){
			
			var functionToReturn = function(n){
					var x = n*length
					var y = 0
					var z = 0
					var toReturn = {
						x:x,
						y:y,
						z:z	
					}
					return toReturn
				}
				
				return functionToReturn
			
		}
	},
	
	
	//FIELD ROTATION FUNCTIONS
	fRotation:{
			noRotation:function(n){
				
				var functionToReturn = function(n){
					var x =0// (n/sectionEX.particles.fNum) * Math.PI
					var y = 0
					var z = 0
					var toReturn = {
						x:x,
						y:y,
						z:z	
					}
					return toReturn
					}
				return functionToReturn
			},
			
			xyRot:function(degree){
				
				var functionToReturn = function(n){
					var x =0// (n/sectionEX.particles.fNum) * Math.PI
					var y =(Math.random()*degree)-degree/2
					var z =(Math.random()*degree)-degree/2
					var toReturn = {
						x:x,
						y:y,
						z:z	
					}
					return toReturn
					}
				return functionToReturn
			},
			
			rotX:function(degrees,numOf){
			
				var functionToReturn=function(n){
					var rot = degrees*(n/numOf)
					var x = rot
					var y = 0
					var z = 0
					var toReturn = {
						x:x,
						y:y,
						z:z	
					}
					return toReturn
				}
				
			return functionToReturn
			
			},
	},
	
	
	visual:{
		
		position:{
			center:{
				x:function(whichSoundObj,freqData,binCount,n){return 0},
				y:function(whichSoundObj,freqData,binCount,n){return 0},
				z:function(whichSoundObj,freqData,binCount,n){return 0},
			},
		},
		
		rotation:{
			freqX:{
				x:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.dust.array[n].rotation.x + ((freqData+5)*.000005))},
				y:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.dust.array[n].rotation.y)},
				z:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.dust.array[n].rotation.z)},
			},
			freqY:{
				y:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.dust.array[n].rotation.y + ((freqData+5)*.000005))},
				x:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.dust.array[n].rotation.x)},
				z:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.dust.array[n].rotation.z)},
			},
			freqZ:{
				z:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.dust.array[n].rotation.z + ((freqData+5)*.000005))},
				y:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.dust.array[n].rotation.y)},
				x:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.dust.array[n].rotation.x)},
			},
			
			nFreqX:{
				x:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.dust.array[n].rotation.x + (n*(freqData+5)*.000005))},
				y:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.dust.array[n].rotation.y)},
				z:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.dust.array[n].rotation.z)},
			},
			nSteadyXNFreqZ:{
				x:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.dust.array[n].rotation.x + (n*.000005))},
				y:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.dust.array[n].rotation.y)},
				z:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.dust.array[n].rotation.z + (n*(freqData+5)*.000005))},
			},
			
			nFreq:{
				x:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.dust.array[n].rotation.x + ((freqData+5)*n*.0000005))},
				y:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.dust.array[n].rotation.y + ((freqData+5)*n*.0000005))},
				z:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.dust.array[n].rotation.z + ((freqData+5)*n*.0000005))},
			},
			
			
			steadyXfreqY:{
				x:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.dust.array[n].rotation.x + .000005)},
				y:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.dust.array[n].rotation.y + ((freqData+5)*.00001))},
				z:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.dust.array[n].rotation.z)},
			}
			
		},
		
		scale:{
			freqXYZ:{
				x:function(whichSoundObj,freqData,binCount,n){return (1+((freqData)/50))},
				y:function(whichSoundObj,freqData,binCount,n){return (1+((freqData)/50))},
				z:function(whichSoundObj,freqData,binCount,n){return (1+((freqData)/50))},
			},
			freqXYZLess:{
				x:function(whichSoundObj,freqData,binCount,n){return (1+((freqData)/500))},
				y:function(whichSoundObj,freqData,binCount,n){return (1+((freqData)/500))},
				z:function(whichSoundObj,freqData,binCount,n){return (1+((freqData)/500))},
			},
			freqHalf:{
				x:function(whichSoundObj,freqData,binCount,n){return (.5+((freqData)/100))},
				y:function(whichSoundObj,freqData,binCount,n){return (.5+((freqData)/100))},
				z:function(whichSoundObj,freqData,binCount,n){return (.5+((freqData)/100))},
			},
			freqHalfLess:{
				x:function(whichSoundObj,freqData,binCount,n){return (.5+((freqData)/1000))},
				y:function(whichSoundObj,freqData,binCount,n){return (.5+((freqData)/1000))},
				z:function(whichSoundObj,freqData,binCount,n){return (.5+((freqData)/1000))},
			},
			
			freqHalfLess_1:{
				x:function(whichSoundObj,freqData,binCount,n){return (.1+((freqData)/1000))},
				y:function(whichSoundObj,freqData,binCount,n){return (.1+((freqData)/1000))},
				z:function(whichSoundObj,freqData,binCount,n){return (.1+((freqData)/1000))},
			},
			freqZeroXYZ:{
				x:function(whichSoundObj,freqData,binCount,n){return ((1-n/20)+((freqData)/500))},
				y:function(whichSoundObj,freqData,binCount,n){return ((1-n/20)+((freqData)/500))},
				z:function(whichSoundObj,freqData,binCount,n){return ((1-n/20)+((freqData)/500))},
			}
			
			
		},
		
		size:{
			freq:function(whichSoundObj,freqData,binCount,n){return((freqData/100+10)*(whichSoundObj.radius/2000))},
			freqLarge:function(whichSoundObj,freqData,binCount,n){return((freqData/20+40)*(whichSoundObj.radius/6000))},
			freqNone:function(whichSoundObj,freqData,binCount,n){return((freqData/100+1)*(whichSoundObj.radius/2000))},
		},
		
	},
	

}

dustLib.visual.bpOrb = {
		
	position:dustLib.visual.position.center,
	rotation:dustLib.visual.rotation.freqX,
	scale:dustLib.visual.scale.freqXYZ,
	size:dustLib.visual.size.freq
		
}


dustLib.visual.try1 = {
		
	//position:dustLib.visual.position.center,
	rotation:dustLib.visual.rotation.freqX,
	scale:dustLib.visual.scale.freqXYZ,
	size:dustLib.visual.size.freq
		
}



///dust for each solar system in hit and run
dustLib.hnrSS = {
		pNum:20,
		fNum:20,
		pPosition: dustLib.pPosition.ringX(1000,20),
		pMaterial: dustLib.pMaterial.color(0xee1111,50),
		fPosition: dustLib.fPosition.center(),
		fRotation: dustLib.fRotation.rotX(2*Math.PI,20),
}


dustLib.fofSS = {
		pNum:20,
		fNum:20,
		pPosition: dustLib.pPosition.lineThroughX(2000),
		pMaterial: dustLib.pMaterial.color(0xffdddd,50),
		fPosition: dustLib.fPosition.center(),
		fRotation: dustLib.fRotation.xyRot(Math.PI),
}


dustLib.dublabSS = {
		pNum:20,
		fNum:20,
		pPosition: dustLib.pPosition.lineThroughX(2000),
		pMaterial: dustLib.pMaterial.imgAdditive("img/galaxies/laGalaxy/dublab/dublabTrans.png",50),
		fPosition: dustLib.fPosition.center(),
		fRotation: dustLib.fRotation.xyRot(Math.PI),
}


dustLib.brainfeederSS = {
		pNum:20,
		fNum:20,
		pPosition: dustLib.pPosition.lineThroughX(2000),
		pMaterial: dustLib.pMaterial.color(0xee5000,50),
		fPosition: dustLib.fPosition.center(),
		fRotation: dustLib.fRotation.xyRot(Math.PI),
}
					



	
	
	
	
