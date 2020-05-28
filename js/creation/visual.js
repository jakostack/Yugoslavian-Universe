

SECTION.prototype = {
	
	createVis:function(whichObj,type,params){
		if(type == 'light'){
			
			var functionToReturn = function(freqData,binCount,n){
				for(i=0;i<whichObj.objects.lights.array.length;i++){
					if(n==i){
					
						if(params.position){
							whichObj.objects.lights.array[i].position.x = params.position.x(whichObj,freqData,binCount,n)
							whichObj.objects.lights.array[i].position.y = params.position.y(whichObj,freqData,binCount,n)
							whichObj.objects.lights.array[i].position.z = params.position.z(whichObj,freqData,binCount,n)
						}
					  
					  	if(params.rotation){  
						  	whichObj.objects.lights.array[i].rotation.x = params.rotation.x(whichObj,freqData,binCount,n)
						  	whichObj.objects.lights.array[i].rotation.y = params.rotation.y(whichObj,freqData,binCount,n)
						  	whichObj.objects.lights.array[i].rotation.z = params.rotation.z(whichObj,freqData,binCount,n)
					  	}
					  
					  
					  	if(params.color){
							
						  	whichObj.objects.lights.array[i].color.r = params.color.r(whichObj,freqData,binCount,n)
						  	whichObj.objects.lights.array[i].color.g = params.color.g(whichObj,freqData,binCount,n)	
						  	whichObj.objects.lights.array[i].color.b = params.color.b(whichObj,freqData,binCount,n)		
					  	}
					  
					  	if(params.intensity){
						   	whichObj.objects.lights.array[i] = params.intensity(whichObj,freqData,binCount,n)
					  	}
					}	
				}
			
			}
			
			this.visArray.push(functionToReturn)
		}
		
		if(type == 'dust'){
			
			var functionToReturn = function(freqData,binCount,n){
				for(i=0;i<whichObj.objects.dust.array.length;i++){
					if(n==i){
							if(params.position){
								whichObj.objects.dust.array[i].position.x = params.position.x(whichObj,freqData,binCount,n)
								whichObj.objects.dust.array[i].position.y = params.position.y(whichObj,freqData,binCount,n)
								whichObj.objects.dust.array[i].position.z = params.position.z(whichObj,freqData,binCount,n)
							}
							
							if(params.rotation){
								whichObj.objects.dust.array[i].rotation.x = params.rotation.x(whichObj,freqData,binCount,n)
								whichObj.objects.dust.array[i].rotation.y = params.rotation.y(whichObj,freqData,binCount,n)
								whichObj.objects.dust.array[i].rotation.z = params.rotation.z(whichObj,freqData,binCount,n)
							}
							
							if(params.scale){
								whichObj.objects.dust.array[i].scale.x = params.scale.x(whichObj,freqData,binCount,n)
								whichObj.objects.dust.array[i].scale.y = params.scale.y(whichObj,freqData,binCount,n)
								whichObj.objects.dust.array[i].scale.z = params.scale.z(whichObj,freqData,binCount,n)
							}
							
							if(params.size){
								whichObj.objects.dust.material.size = params.size(whichObj,freqData,binCount,n)
							}
					}	
				}
			
			}
			
			this.visArray.push(functionToReturn)
		}
		
		if(type == 'planet'){
			
			var functionToReturn = function(freqData,binCount,n){
			
				//This controls the placement and arrangement of the sound objs
				for(i=0;i< whichObj.objects.planets.array.length;i++){
						
					if(n==i){
						
						if(params.position){
							whichObj.objects.planets.array[i].position.x = params.position.x(whichObj,freqData,binCount,n)
							whichObj.objects.planets.array[i].position.y = params.position.y(whichObj,freqData,binCount,n)
							whichObj.objects.planets.array[i].position.z = params.position.z(whichObj,freqData,binCount,n)
						}
						
						if(params.rotation){
							whichObj.objects.planets.array[i].rotation.x = params.rotation.x(whichObj,freqData,binCount,n)
							whichObj.objects.planets.array[i].rotation.y = params.rotation.y(whichObj,freqData,binCount,n)
							whichObj.objects.planets.array[i].rotation.z = params.rotation.z(whichObj,freqData,binCount,n)
						}
					}
					
				}
			
				var planet=whichObj.objects.planets.array[0]
				var scale = 1
				if(planet.scale){
					//console.log('scaled')
					
					scale = 1/planet.scale.x
					
				}
				
				if(params.vertex){
					//This area controls the actual verticies of the sound objs
					for(var i=0;i<planet.geometry.vertices.length;i++){
						
						if(n==i){
								
							planet.geometry.vertices[i].x = params.vertex.x(whichObj,freqData,binCount,n)*scale
							planet.geometry.vertices[i].z = params.vertex.y(whichObj,freqData,binCount,n)*scale
							planet.geometry.vertices[i].y = params.vertex.z(whichObj,freqData,binCount,n)*scale
						}
					}
					planet.geometry.verticesNeedUpdate = true;
				}
			
			}
			
			this.visArray.push(functionToReturn)
			
		}
		
		if(type == 'sun'){
			
			
			var functionToReturn = function(freqData,binCount,n){
				
			
				//This controls the placement and arrangement of the sound objs
				for(i=0;i< whichObj.objects.suns.array.length;i++){
						
					if(n==i){
						
						if(params.position){
							whichObj.objects.suns.array[i].position.x = params.position.x(whichObj,freqData,binCount,n)
							whichObj.objects.suns.array[i].position.y = params.position.y(whichObj,freqData,binCount,n)
							whichObj.objects.suns.array[i].position.z = params.position.z(whichObj,freqData,binCount,n)
						}
						
						if(params.rotation){
							whichObj.objects.suns.array[i].rotation.x = params.rotation.x(whichObj,freqData,binCount,n)
							whichObj.objects.suns.array[i].rotation.y = params.rotation.y(whichObj,freqData,binCount,n)
							whichObj.objects.suns.array[i].rotation.z = params.rotation.z(whichObj,freqData,binCount,n)
						}
					}
					
				}
			
				var sun=whichObj.objects.suns.array[0]
				var scale = 1
				if(sun.scale){
					//console.log('scaled')
					scale = 1/sun.scale.x	
				}

				if(params.vertex){
					//This area controls the actual verticies of the sound objs
					for(var i=0;i<sun.geometry.vertices.length;i++){
						
						if(n==i){
								
							sun.geometry.vertices[i].x = params.vertex.x(whichObj,freqData,binCount,n)
							sun.geometry.vertices[i].z = params.vertex.y(whichObj,freqData,binCount,n)
							sun.geometry.vertices[i].y = params.vertex.z(whichObj,freqData,binCount,n)
						}
					}
					sun.geometry.verticesNeedUpdate = true;
				}
			
			}
			
			this.visArray.push(functionToReturn)
		}
		
		
	},
	
	
	
	
	
	
}

function SECTION(whichObj,section){
	
	this.visArray = []
	
	
	for(var propt in section){
		this.createVis(whichObj,propt,section[propt])
	}
	
	if(section.time){
		this.time = section.time
	}else{
		this.time = 0	
	}
}





