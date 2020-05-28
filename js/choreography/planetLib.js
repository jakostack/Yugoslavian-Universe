// THIS IS WHAT DEALS WITH THE SOUND OBJECTS

var planetLib = {
	
	
	/*
	
	SHAPE TYPES
	
	*/
 	type:{
		sphere:function(size,sections,rings){
			var toReturn = new THREE.SphereGeometry(size, sections, rings)
			return toReturn
		},
		cube:function(x,y,z){
			var toReturn = new THREE.CubeGeometry(x,y,z)
			return toReturn
		},
		
		icosahedron:function(size,subDivisions){
			var toReturn = new THREE.IcosahedronGeometry(size,subDivisions)
			return toReturn
		},
		
		//Almost all knots come from Curve Extras by zz85
		knot1:function(x,y,z){
			var gKnot = new THREE.Curves.GrannyKnot();
			var toReturn = new THREE.ParametricGeometries.TubeGeometry( gKnot, x, y, z, true, false );
			return	toReturn
		},
		
		knot2:function(x,y,z){
			var knot = new THREE.Curves.HeartCurve();
			var toReturn = new THREE.ParametricGeometries.TubeGeometry( knot, x, y, z, true, false );
			return	toReturn
		},
		
		knot3:function(x,y,z){
			var knot = new THREE.Curves.TorusKnot();
			var toReturn = new THREE.ParametricGeometries.TubeGeometry( knot, x, y, z, true, false );
			return	toReturn
		},
		
		knot4:function(x,y,z){
			var knot = new THREE.Curves.TrefoilKnot();
			var toReturn = new THREE.ParametricGeometries.TubeGeometry( knot, x, y, z, true, false );
			return	toReturn
		},
		
		
	},
	
	
	/*
	
	SHAPE MATERIALS
	
	*/

	material:{
		//regular normal material
		normal: function(){
				toReturn = new THREE.MeshNormalMaterial()
				return toReturn
		},
		
		//color normal material (maps RGB of color to XYZ)
		colorNormal:function(color){
			var toReturn = new THREE.MeshNormalMaterial({shadingColor:color})
			return toReturn
		},
		
		//returns an image material
		imgMaterial: function (file) {
			newMaterial = new THREE.MeshLambertMaterial(
				{map: THREE.ImageUtils.loadTexture(
					file, 
					{}, 
					function() {
						loadBarAdd(file)
					}
							
				)})
				
			return newMaterial
		}
	},
	
	
	
	/*
	
	INITIAL POSITION OF PLANETS
	
	*/
	
	position:{
		
		//Centers Planets
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
		
		//places planets in a random box defined by user
		boxRand:function(size){
			
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
		
		//places objects in a full circle
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
		
		//places objects in a sphere
		fullSphere:function(size,numOfObjs){	
			
			
				var functionToReturn = function(n){
					var pos = cabMATH.toCart(size,(2*Math.PI*Math.random()),((-Math.PI)*(2*Math.PI*Math.random())))
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
		
		
		//places objects in a sphere
		loopDLoop:function(size,numOfObjs){	
			
			
				var functionToReturn = function(n){
					var pos = cabMATH.toCart(size,(2*Math.PI*(n/numOfObjs)),((-Math.PI)*(2*Math.PI*(n/numOfObjs))))
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
		
		
		spiral:function(size,numOf){
				var functionToReturn = function(n){
					
					var pos = cabMATH.toCart(size*(n/numOf),(4*Math.PI*(n/numOf)),0)
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

		cube:function(size,numOf){
				var functionToReturn = function(n){
					
					var whichDir = n%8
					
					var dirArray = [
						[1,1,1],
						[-1,-1,-1],
						[-1,-1,1],
						[1,-1,-1],
						[-1,1,-1],
						[-1,1,1],
						[1,-1,1],
						[1,1,-1]
					]
					
					var x = dirArray[whichDir][0]*(size/Math.sqrt(3))
					var y = dirArray[whichDir][1]*(size/Math.sqrt(3))
					var z = dirArray[whichDir][2]*(size/Math.sqrt(3))
					var toReturn = {
						x:x,
						y:y,
						z:z	
					}
					return toReturn
				}
			
				return functionToReturn
			
			
		},
		tetrahedron:function(size,numOf){
				var functionToReturn = function(n){
					
					var whichDir = n%6
					
					var dirArray = [
						[1,0,0],
						[-1,0,0],
						[0,-1,0],
						[0,1,0],
						[0,0,-1],
						[0,0,1],
					]
					
					
					var x = dirArray[whichDir][0]*size
					var y = dirArray[whichDir][1]*size
					var z = dirArray[whichDir][2]*size
					var toReturn = {
						x:x,
						y:y,
						z:z	
					}
					return toReturn
				}
			
				return functionToReturn
			
			
		},
		
		
		//TODO
		//recreate analyser.html visualizations
		
		/*
		
			visual idea: create eq from hundreds of planets
			keep planets maybe cubes so that there can be as many as possible
			slight rotation with normal matial over the course of total planets
			so it becomes a full rainbow over the course of total planets.
			
			assign x movement to freqData to position as a visualizer would.
	
		*/
		lineX:function(size,numOf){
			
		  var functionToReturn = function(n){
			  var x = -(size/2)+(n/numOf)*size// n*50 - (sectionEX.soundObj.numOf*25)
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
		
		lineXallPos:function(size,numOf){
			
		  var functionToReturn = function(n){
			  var x = ((n+1)/numOf)*size  
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
	
	
	
	/*
	
		ROTATION SECTION.
		Defines initial rotations of a planet
		
	
	
	*/
	rotation:{
		
		fullCircle:function(numOfObjs){
				
				var functionToReturn = function(n){
					var x = n*2* Math.PI/numOfObjs
					var y = n*2* Math.PI/numOfObjs
					var z = n*2* Math.PI/numOfObjs
					var toReturn = {
						x:x,
						y:y,
						z:z	
					}
					return toReturn
					}
				return functionToReturn
		},

		
		fullCircleX:function(numOfObjs){
				
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
		
		fullCircleY:function(numOfObjs){
				
				var functionToReturn = function(n){
					var x = 0
					var y = n*2* Math.PI/numOfObjs
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
		
		fullCircleZ:function(numOfObjs){
				
				var functionToReturn = function(n){
					var x = 0
					var y = 0
					var z = n*2* Math.PI/numOfObjs
					var toReturn = {
						x:x,
						y:y,
						z:z	
					}
					return toReturn
					}
				return functionToReturn
		},
		
		noRotation:function(){
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
			
		}
		
		
	},
	
	
	
	
	
	/*
	
	VISUAL SECTION
	
	
	*/
	

	visual:{
		
		
		
		/*
			
			POSITION FUNCTIONS
			
			set of different functions that will return an 
			object filled with visualizing functions
			to be used in different visualizations
			
		
		*/
		
		position:{
			
			//Centers all Objects!
			center: {
				x:function(whichSoundObj,freqData,binCount,n){return 0},
				y:function(whichSoundObj,freqData,binCount,n){return 0},
				z:function(whichSoundObj,freqData,binCount,n){return 0},
			},
			
			out:{
				x:function(whichSoundObj,freqData,binCount,n){
					
					var toReturn = cabMATH.toCart((freqData),(2*Math.PI*(n/whichSoundObj.objects.planets.array.length)),0).x*(whichSoundObj.radius/2000)
				
					return toReturn},
				y:function(whichSoundObj,freqData,binCount,n){
					var toReturn = cabMATH.toCart((freqData),(2*Math.PI*(n/whichSoundObj.objects.planets.array.length)),0).y*(whichSoundObj.radius/2000)
					return toReturn},
				z:function(whichSoundObj,freqData,binCount,n){
					var toReturn = cabMATH.toCart((freqData),(2*Math.PI*(n/whichSoundObj.objects.planets.array.length)),0).z*(whichSoundObj.radius/2000)
					return toReturn},
			},
			outSphere:{
				x:function(whichSoundObj,freqData,binCount,n){
					
					var toReturn = cabMATH.toCart((freqData),(2*Math.PI*(n/whichSoundObj.objects.planets.array.length)),(whichSoundObj.objects.planets.dataArray[n].rotation.x)).x*(whichSoundObj.radius/2000)
				
					return toReturn},
				y:function(whichSoundObj,freqData,binCount,n){
					var toReturn = cabMATH.toCart((freqData),(2*Math.PI*(n/whichSoundObj.objects.planets.array.length)),(whichSoundObj.objects.planets.dataArray[n].rotation.y)).y*(whichSoundObj.radius/2000)
					return toReturn},
				z:function(whichSoundObj,freqData,binCount,n){
					var toReturn = cabMATH.toCart((freqData),(2*Math.PI*(n/whichSoundObj.objects.planets.array.length)),(whichSoundObj.objects.planets.dataArray[n].rotation.z)).z*(whichSoundObj.radius/2000)
					return toReturn},
			},
			outLoopD:{
				x:function(whichSoundObj,freqData,binCount,n){
					
					var toReturn = cabMATH.toCart((freqData),(2*Math.PI*(n/whichSoundObj.objects.planets.array.length)),(-Math.PI + 2*Math.PI*(n/whichSoundObj.objects.planets.array.length))).x*(whichSoundObj.radius/2000)
				
					return toReturn},
				y:function(whichSoundObj,freqData,binCount,n){
					var toReturn = cabMATH.toCart((freqData),(2*Math.PI*(n/whichSoundObj.objects.planets.array.length)),(-Math.PI + 2*Math.PI*(n/whichSoundObj.objects.planets.array.length))).y*(whichSoundObj.radius/2000)
					return toReturn},
				z:function(whichSoundObj,freqData,binCount,n){
					var toReturn = cabMATH.toCart((freqData),(2*Math.PI*(n/whichSoundObj.objects.planets.array.length)),(-Math.PI + 2*Math.PI*(n/whichSoundObj.objects.planets.array.length))).z*(whichSoundObj.radius/2000)
					return toReturn},
			},
			out_large:{
				x:function(whichSoundObj,freqData,binCount,n){
					var toReturn = cabMATH.toCart((freqData*2),(2*Math.PI*(n/whichSoundObj.objects.planets.array.length)),0).x*(whichSoundObj.radius/2000)
				
					return toReturn},
				y:function(whichSoundObj,freqData,binCount,n){
					var toReturn = cabMATH.toCart((freqData*2),(2*Math.PI*(n/whichSoundObj.objects.planets.array.length)),0).y*(whichSoundObj.radius/2000)
					return toReturn},
				z:function(whichSoundObj,freqData,binCount,n){
					var toReturn = cabMATH.toCart((freqData*2),(2*Math.PI*(n/whichSoundObj.objects.planets.array.length)),0).z*(whichSoundObj.radius/2000)
					return toReturn},
			},
			
			out300:{
				x:function(whichSoundObj,freqData,binCount,n){
					var toReturn = cabMATH.toCart((freqData+300),(2*Math.PI*(n/whichSoundObj.objects.planets.array.length)),0).x*(whichSoundObj.radius/2000)
				
					return toReturn},
				y:function(whichSoundObj,freqData,binCount,n){
					var toReturn = cabMATH.toCart((freqData+300),(2*Math.PI*(n/whichSoundObj.objects.planets.array.length)),0).y*(whichSoundObj.radius/2000)
					return toReturn},
				z:function(whichSoundObj,freqData,binCount,n){
					var toReturn = cabMATH.toCart((freqData+300),(2*Math.PI*(n/whichSoundObj.objects.planets.array.length)),0).z*(whichSoundObj.radius/2000)
					return toReturn},
			},
			
			in:{
				x:function(whichSoundObj,freqData,binCount,n){
					var toReturn = cabMATH.toCart((500 - freqData),(2*Math.PI*(n/whichSoundObj.objects.planets.array.length)),0).x*(whichSoundObj.radius/2000)
				
					return toReturn},
				y:function(whichSoundObj,freqData,binCount,n){
					var toReturn = cabMATH.toCart((500 - freqData),(2*Math.PI*(n/whichSoundObj.objects.planets.array.length)),0).y*(whichSoundObj.radius/2000)
					return toReturn},
				z:function(whichSoundObj,freqData,binCount,n){
					var toReturn = cabMATH.toCart((500 - freqData),(2*Math.PI*(n/whichSoundObj.objects.planets.array.length)),0).z*(whichSoundObj.radius/2000)
					return toReturn},
			}, 
			
			freqZ:{
				x:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.planets.dataArray[n].position.x)},
				y:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.planets.dataArray[n].position.y)},
				z:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.planets.dataArray[n].position.z 
				+ (polarLib.spikePlanet(whichSoundObj,freqData,binCount,n).z*whichSoundObj.radius/1000))},
			},
			
			freqXOffset300:{
				x:function(whichSoundObj,freqData,binCount,n){return ((300+(freqData/10))*(whichSoundObj.radius/2000))},
				y:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.planets.dataArray[n].position.y)},
				z:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.planets.dataArray[n].position.z)}
			},
			
			sinPlacement:{
				x:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.planets.dataArray[n].position.x + Math.sin(whichSoundObj.objects.planets.dataArray[n].position.x)*(whichSoundObj.radius/200))},
				y:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.planets.dataArray[n].position.y + Math.sin(whichSoundObj.objects.planets.dataArray[n].position.y)*(whichSoundObj.radius/200))},
				z:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.planets.dataArray[n].position.z + Math.sin(whichSoundObj.objects.planets.dataArray[n].position.z)*(whichSoundObj.radius/200))}
			},
			
				
				
			
		},
		
		
		/*
			ROTATION SECTION
			a bunch of possible rotation equations
		
		*/
		
		rotation:{
			
			freqRotX:{
				x:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.planets.array[n].rotation.x + (freqData*.00001))},
				y:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.planets.dataArray[n].rotation.y)},
				z:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.planets.dataArray[n].rotation.z)},
			},
			
			freqXcamZ:{
				x:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.planets.array[n].rotation.x+(freqData/100000))},
				y:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.planets.array[n].rotation.y)},
				z:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.posToCamera.t)},
			},
			camPosX:{
				x:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.posToCamera.t)},
				y:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.planets.dataArray[n].rotation.y)},
				z:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.planets.dataArray[n].rotation.z)},
			},
			
			nCamPosX:{
				x:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.posToCamera.t*n/50)},
				y:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.planets.dataArray[n].rotation.y)},
				z:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.planets.dataArray[n].rotation.z)},
			},
			camPosY:{
				x:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.planets.dataArray[n].rotation.x)},
				y:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.posToCamera.t)},
				z:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.planets.dataArray[n].rotation.z)},
			},
			camPosZ:{
				x:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.planets.dataArray[n].rotation.x)},
				y:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.planets.dataArray[n].rotation.y)},
				z:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.posToCamera.t)},
			},
			camPosZ0Y:{
				x:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.planets.dataArray[n].rotation.x)},
				y:function(whichSoundObj,freqData,binCount,n){return (0)},
				z:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.posToCamera.t)},
			}
			
			
			
		},
		
		
		/*
			VERTEX SECTION
		
		
		*/
		vertex:{
			
			pdxHackNight1:{
				x:function(whichSoundObj,freqData,binCount,n){return 
				(
				((polarLib.rand1(whichSoundObj,freqData,binCount,n).x*2)*(whichSoundObj.radius/2000) ) +whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].x * (1+(freqData/200)))},
				y:function(whichSoundObj,freqData,binCount,n){return (((polarLib.rand1(whichSoundObj,freqData,binCount,n).y*2)*(whichSoundObj.radius/2000) ) +whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].y * (1+(freqData/200)))},
				z:function(whichSoundObj,freqData,binCount,n){return (((polarLib.rand1(whichSoundObj,freqData,binCount,n).z*2)*(whichSoundObj.radius/2000) ) +whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].z * (1+(freqData/200)))},
			},
			
			hackNight2:{
				x:function(whichSoundObj,freqData,binCount,n){return ((
				polarLib.rand2(whichSoundObj,freqData,binCount,n).x*2)*(whichSoundObj.radius/2000)+whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].x)},
				y:function(whichSoundObj,freqData,binCount,n){return ((
				polarLib.rand2(whichSoundObj,freqData,binCount,n).y*2)*(whichSoundObj.radius/2000)+whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].y)},
				z:function(whichSoundObj,freqData,binCount,n){return ((
				polarLib.rand2(whichSoundObj,freqData,binCount,n).z*2)*(whichSoundObj.radius/2000)+whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].z)},
			},
			
			hackNight3:{
				x:function(whichSoundObj,freqData,binCount,n){return ((
				polarLib.spikePlanet2(whichSoundObj,freqData,binCount,n).x*2)*(whichSoundObj.radius/2000)+whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].x)},
				y:function(whichSoundObj,freqData,binCount,n){return ((
				polarLib.spikePlanet2(whichSoundObj,freqData,binCount,n).y*2)*(whichSoundObj.radius/2000)+whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].y)},
				z:function(whichSoundObj,freqData,binCount,n){return ((
				polarLib.spikePlanet2(whichSoundObj,freqData,binCount,n).z*2)*(whichSoundObj.radius/2000)+whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].z)},
			},
			
			hackNight4:{
				x:function(whichSoundObj,freqData,binCount,n){return ((
				polarLib.spikePlanet2(whichSoundObj,freqData,binCount,n).x)*(whichSoundObj.radius/2000)+whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].x/4)},
				y:function(whichSoundObj,freqData,binCount,n){return ((
				polarLib.spikePlanet2(whichSoundObj,freqData,binCount,n).y)*(whichSoundObj.radius/2000)+whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].y/4)},
				z:function(whichSoundObj,freqData,binCount,n){return ((
				polarLib.spikePlanet2(whichSoundObj,freqData,binCount,n).z)*(whichSoundObj.radius/2000)+whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].z/4)},
			},
			
			
			hackNight5:{
				x:function(whichSoundObj,freqData,binCount,n){return ((
				-polarLib.spikePlanet3(whichSoundObj,freqData,binCount,n).x*2)*(whichSoundObj.radius/2000)+whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].x)},
				y:function(whichSoundObj,freqData,binCount,n){return ((
				-polarLib.spikePlanet3(whichSoundObj,freqData,binCount,n).y*2)*(whichSoundObj.radius/2000)+whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].y)},
				z:function(whichSoundObj,freqData,binCount,n){return ((
				-polarLib.spikePlanet3(whichSoundObj,freqData,binCount,n).z*2)*(whichSoundObj.radius/2000)+whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].z)},
			},
			
			hackNight5_1:{
				x:function(whichSoundObj,freqData,binCount,n){return ((
				-polarLib.spikePlanet3(whichSoundObj,freqData,binCount,n).x*5)*(whichSoundObj.radius/2000)+whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].x)},
				y:function(whichSoundObj,freqData,binCount,n){return ((
				-polarLib.spikePlanet3(whichSoundObj,freqData,binCount,n).y*5)*(whichSoundObj.radius/2000)+whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].y)},
				z:function(whichSoundObj,freqData,binCount,n){return ((
				-polarLib.spikePlanet3(whichSoundObj,freqData,binCount,n).z*5)*(whichSoundObj.radius/2000)+whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].z)},
			},
			
			
			hackNight6:{
				x:function(whichSoundObj,freqData,binCount,n){return ((
				(-polarLib.spikePlanet4(whichSoundObj,freqData,binCount,n).x*5)*(whichSoundObj.radius/2000)+whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].x)*((n/500)+.5))},
				y:function(whichSoundObj,freqData,binCount,n){return ((
				(-polarLib.spikePlanet4(whichSoundObj,freqData,binCount,n).y*5)*(whichSoundObj.radius/2000)+whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].y)*((n/500)+.5))},
				z:function(whichSoundObj,freqData,binCount,n){return ((
				(-polarLib.spikePlanet4(whichSoundObj,freqData,binCount,n).z*5)*(whichSoundObj.radius/2000)+whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].z)*((n/500)+.5))},
			},
			
			hackNight7:{
				x:function(whichSoundObj,freqData,binCount,n){return ((
				(-polarLib.spikePlanet5(whichSoundObj,freqData,binCount,n).x*5)*(whichSoundObj.radius/2000)+whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].x))},
				y:function(whichSoundObj,freqData,binCount,n){return ((
				(-polarLib.spikePlanet5(whichSoundObj,freqData,binCount,n).y*5)*(whichSoundObj.radius/2000)+whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].y))},
				z:function(whichSoundObj,freqData,binCount,n){return ((
				(-polarLib.spikePlanet5(whichSoundObj,freqData,binCount,n).z*5)*(whichSoundObj.radius/2000)+whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].z))},
			},
			hackNight7_small:{
				x:function(whichSoundObj,freqData,binCount,n){return ((
				(whichSoundObj.radius/10000)*(-polarLib.spikePlanet5(whichSoundObj,freqData,binCount,n).x)+whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].x))},
				y:function(whichSoundObj,freqData,binCount,n){return ((
				(whichSoundObj.radius/10000)*(-polarLib.spikePlanet5(whichSoundObj,freqData,binCount,n).y)+whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].y))},
				z:function(whichSoundObj,freqData,binCount,n){return ((
				(whichSoundObj.radius/10000)*(-polarLib.spikePlanet5(whichSoundObj,freqData,binCount,n).z)+whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].z))},
			},
			 
			hackNight8:{
				x:function(whichSoundObj,freqData,binCount,n){return ((
				(-polarLib.spikePlanet6(whichSoundObj,freqData,binCount,n).x)*(whichSoundObj.radius/2000)+(whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].x/20)))},
				y:function(whichSoundObj,freqData,binCount,n){return ((
				(-polarLib.spikePlanet6(whichSoundObj,freqData,binCount,n).y)*(whichSoundObj.radius/2000)+(whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].y/20)))},
				z:function(whichSoundObj,freqData,binCount,n){return ((
				(-polarLib.spikePlanet6(whichSoundObj,freqData,binCount,n).z)*(whichSoundObj.radius/2000)+(whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].z/20)))},
			},
			
			
			hackNight9:{
				x:function(whichSoundObj,freqData,binCount,n){return ((
				(-polarLib.spikePlanet6(whichSoundObj,freqData,binCount,n).x)*(whichSoundObj.radius/200)*(n/50)+(whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].x/2)))},
				y:function(whichSoundObj,freqData,binCount,n){return ((
				(-polarLib.spikePlanet6(whichSoundObj,freqData,binCount,n).y)*(n/50)*(whichSoundObj.radius/200)+(whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].y/2)))},
				z:function(whichSoundObj,freqData,binCount,n){return ((
				(-polarLib.spikePlanet6(whichSoundObj,freqData,binCount,n).z)*(n/50)*(whichSoundObj.radius/200)+(whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].z/2)))},
			},
			 
			 
			 hackNight9:{
				x:function(whichSoundObj,freqData,binCount,n){return ((
				(-polarLib.spikePlanet6(whichSoundObj,freqData,binCount,n).x)*(whichSoundObj.radius/200)*(n/50)+(whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].x/2)))},
				y:function(whichSoundObj,freqData,binCount,n){return ((
				(-polarLib.spikePlanet6(whichSoundObj,freqData,binCount,n).y)*(n/50)*(whichSoundObj.radius/200)+(whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].y/2)))},
				z:function(whichSoundObj,freqData,binCount,n){return ((
				(-polarLib.spikePlanet6(whichSoundObj,freqData,binCount,n).z)*(n/50)*(whichSoundObj.radius/200)+(whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].z/2)))},
			},
			
			 hackNight9_small:{
				x:function(whichSoundObj,freqData,binCount,n){return (.5*(
				(-polarLib.spikePlanet6(whichSoundObj,freqData,binCount,n).x)*(whichSoundObj.radius/200)*(n/50)+(whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].x/2)))},
				y:function(whichSoundObj,freqData,binCount,n){return (.5*(
				(-polarLib.spikePlanet6(whichSoundObj,freqData,binCount,n).y)*(n/50)*(whichSoundObj.radius/200)+(whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].y/2)))},
				z:function(whichSoundObj,freqData,binCount,n){return (.5*(
				(-polarLib.spikePlanet6(whichSoundObj,freqData,binCount,n).z)*(n/50)*(whichSoundObj.radius/200)+(whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].z/2)))},
			},
			
			 
			 
			 
			
			freqBuldge:{
				x:function(whichSoundObj,freqData,binCount,n){
					//console.log(whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].x)
					return (whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].x  * (1+(freqData/1000)))
				},
				y:function(whichSoundObj,freqData,binCount,n){
					return (whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].y *  (1+(freqData/1000)))
				},
				z:function(whichSoundObj,freqData,binCount,n){
					return (whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].z * (1+(freqData/1000)))
				},
			},
			
			nFreqBuldge:{
				x:function(whichSoundObj,freqData,binCount,n){
					return (whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].x  * (1+(freqData/1000))
					+ (polarLib.spikePlanet(whichSoundObj,freqData,binCount,n).x*2 *(whichSoundObj.radius/2000)) )
				},
				y:function(whichSoundObj,freqData,binCount,n){
					return (whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].y * (1+((n*freqData)/(1000*binCount))))
				},
				z:function(whichSoundObj,freqData,binCount,n){
					return (whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].z)
				},
			},


			nFreqBuldge1:{
				x:function(whichSoundObj,freqData,binCount,n){
					return (whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].x  * (1+(freqData/500)))
				},
				y:function(whichSoundObj,freqData,binCount,n){
					return((polarLib.spikePlanet(whichSoundObj,freqData,binCount,n).y*2)*(whichSoundObj.radius/2000) +whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].y)
				},
				z:function(whichSoundObj,freqData,binCount,n){
					return (whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].z+(freqData/10)*(whichSoundObj.radius/2000))
				},
			},
		
			nBuldgeYZ:{
				x:function(whichSoundObj,freqData,binCount,n){
					return (whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].x  * (1+(freqData/1000)))
				},
				y:function(whichSoundObj,freqData,binCount,n){
					return (whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].y * (1+((n*freqData)/(1000))))
				},
				z:function(whichSoundObj,freqData,binCount,n){
					return (whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].z * (1+((n*freqData)/(1000))))
				}
			},
			
			nBuldgeYZ_small:{
				x:function(whichSoundObj,freqData,binCount,n){
					return (whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].x  * (1+(freqData/1000)))
				},
				y:function(whichSoundObj,freqData,binCount,n){
					return (whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].y * (1+((n*freqData)/(10000))))
				},
				z:function(whichSoundObj,freqData,binCount,n){
					return (whichSoundObj.objects.planets.dataArray[0].geometry.vertices[n].z * (1+((n*freqData)/(10000))))
				}
			},
			
			
			
			

			
		},
		
		
		
		
		
		
		
		//SPIKE BALL VISUAL
		//CREATES A RING OF SPIKE BALLS!
		spikeBallRing:{
	
			position:{
				x:function(whichSoundObj,freqData,binCount,n){return 0},
				y:function(whichSoundObj,freqData,binCount,n){return 0},
				z:function(whichSoundObj,freqData,binCount,n){return 0},
			},
	
			rotation:{
				x:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.planets.array[n].rotation.x + (n*.0001))},
				y:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.posToCamera.t)},
				z:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.posToCamera.t)},
			},
	
			vertex:{
				x:function(whichSoundObj,freqData,binCount,n){return (((
				planetLib.visual.spikeBallRing.toPolar(whichSoundObj,freqData,binCount,n).x*2) +300)*(whichSoundObj.radius/2000))},
				y:function(whichSoundObj,freqData,binCount,n){return ((
				planetLib.visual.spikeBallRing.toPolar(whichSoundObj,freqData,binCount,n).y*2)*(whichSoundObj.radius/2000) )},
				z:function(whichSoundObj,freqData,binCount,n){return ((
				planetLib.visual.spikeBallRing.toPolar(whichSoundObj,freqData,binCount,n).z*2)*(whichSoundObj.radius/2000))},
			},
			
			toPolar : function(whichSoundObj,freqData,binCount,n){
				var radius=(Math.pow(freqData,.5)*4)
				var theta=n 
				var phi=2*Math.PI*(n/whichSoundObj.objects.planets.array[0].geometry.vertices.length)
				return cabMATH.toCart(radius, theta, phi)
			},
			

		},
		
	
		
		
	},
	
	planet:{}
	
}
	

planetLib.planet.planet2 = {
	numOf:20,
	type:planetLib.type.sphere(50,20,20),
	material:planetLib.material.normal,
	position:planetLib.position.boxRand(500),
	rotation:planetLib.rotation.fullCircle(20),	
}


			
			
	
	
/*

	BEAUTIFUL COLOR:
	
	planetLib.material.colorNormal(0xa070a0),


*/
	
	
	



