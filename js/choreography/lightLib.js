// THIS IS WHAT DEALS WITH THE SOUND OBJECTS

var lightLib = {
 	type:{
		directional:function(color){
			var toReturn = new THREE.DirectionalLight(color)
			return toReturn
		},
		point: function(color,intensity,radius){
			toReturn = new THREE.PointLight( color, intensity, radius )
			return toReturn
		},
		ambient: function(color){
			toReturn = new THREE.AmbientLight( color )
			return toReturn
		}
		
			
	},


	marker:{
		sphere: new THREE.SphereGeometry( 100, 16, 8 )
	},
	
	position:{
		
		
		center:function(){
			
				var functionToReturn = function(n){
					var x = 0// n*50 - (sectionEX.soundObj.numOf*25)
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
					var x = Math.random()*size - (size/2)
					var y = Math.random()*size - (size/2)
					var z = Math.random()*size - (size/2)
					var toReturn = {
						x:x,
						y:y,
						z:z	
					}
					return toReturn
				}
				return functionToReturn
		},
		
		randomSphere:function(size){
			
			var functionToReturn = function(n){
					var pos = cabMATH.toCart(size,Math.random()*2*Math.PI,(-Math.PI + Math.random()*2*Math.PI))
					
					var toReturn = {
						x:pos.x,
						y:pos.y,
						z:pos.z
					}
					return toReturn
				}
			return functionToReturn
			
			
		},
		
		
		line:function(size,numOfObjs){
			
				var functionToReturn = function(n){
					var x =(n/numOfObjs*size) - (size/2)
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
		
		fullCircle:function(size,numOfObjs){	
				var functionToReturn = function(n){
					var pos = cabMATH.toCart(size,(2*Math.PI*(n/numOfObjs)),0)
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
			
	},
	
	rotation:{
		
		fullCircle:function(numOfObjs){
				
				var functionToReturn = function(n){
					var x = n*2* Math.PI/numOfObjs
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
			
			lineXY:{
				x:function(whichSoundObj,freqData,binCount,n){return 0},
				y:function(whichSoundObj,freqData,binCount,n){return (600*n-1500)},
				z:function(whichSoundObj,freqData,binCount,n){return (600*n-1500)},
			},
			freq:{
				x:function(whichSoundObj,freqData,binCount,n){return freqData},
				y:function(whichSoundObj,freqData,binCount,n){return freqData},
				z:function(whichSoundObj,freqData,binCount,n){return freqData},
			},
			
			
		},
		
		rotation:{
			freq:{
				x:function(whichSoundObj,freqData,binCount,n){return (freqData)},
				y:function(whichSoundObj,freqData,binCount,n){return (freqData)},
				z:function(whichSoundObj,freqData,binCount,n){return (freqData)},
			},
			
		},
		
		color:{
			
			freqRed:{
				r:function(whichSoundObj,freqData,binCount,n){
						if(n%3==0){
							
							return (.2+freqData/100)
						}else{
							return(.1+freqData/1000)
						}
					
					},
				g:function(whichSoundObj,freqData,binCount,n){
						if(n%3==1){
							return (freqData/1000)
						}else{
							return(0)
						}
					},
				b:function(whichSoundObj,freqData,binCount,n){
						if(n%3==2){
							return (freqData/1000)
						}else{
							return(0)
						}
					},
			},
			
			freqPurple:{
				r:function(whichSoundObj,freqData,binCount,n){
						if(n%3==0){
							
							return (.2+freqData/100)
						}else{
							return(.1+freqData/1000)
						}
					
					},
				g:function(whichSoundObj,freqData,binCount,n){
						if(n%3==1){
							return (freqData/1000)
						}else{
							return(0)
						}
					},
				b:function(whichSoundObj,freqData,binCount,n){
						if(n%3==2){
							
							return (.2+freqData/100)
						}else{
							return(.1+freqData/1000)
						}
					},
			},
			
			freqWhite:{
				r:function(whichSoundObj,freqData,binCount,n){return (freqData/1000)},
				g:function(whichSoundObj,freqData,binCount,n){return (freqData/1000)},
				b:function(whichSoundObj,freqData,binCount,n){return (freqData/1000)},
			},
			
			
			
			color:{
				r:function(whichSoundObj,freqData,binCount,n){
						
						if(n%3==0){	
							return (whichSoundObj.color.r/2-((freqData/1000)*(whichSoundObj.color.r)))
						}else{
							return (whichSoundObj.color.r/2)
						}
					
					},
				g:function(whichSoundObj,freqData,binCount,n){
						if(n%3==1){	
							return (whichSoundObj.color.g/2-((freqData/1000)*(whichSoundObj.color.g)))
						}else{
							return(whichSoundObj.color.g/2)
						}
					
					},
				b:function(whichSoundObj,freqData,binCount,n){
						if(n%3==2){	
							return (whichSoundObj.color.b/2-((freqData/1000)*(whichSoundObj.color.b)))
						}else{
							return(whichSoundObj.color.b/2)
						}
					
					},
			},
			
			
		}
		
	},
	
	planet:{}
	
}
	


			
			
	
	
	
	
