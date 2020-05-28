// JavaScript Document


var sunLib = {


	//SHAPE TYPES
	type:{
		sphere:function (size,sections,rings){
			var toReturn = new THREE.SphereGeometry(size, sections, rings)
			return toReturn
		},
		cube:function (x,y,z){
			var toReturn = new THREE.CubeGeometry(x, y, z)
			return toReturn
		}
	},
	
	
	//MATERIAL 
	material:{
		normal: new THREE.MeshNormalMaterial(),
		colorNormal:function(color){
			var toReturn = new THREE.MeshNormalMaterial({shadingColor:color})
			return toReturn
		},
		imgMaterial: function (file) {
			
			newMaterial = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture(file)})
			return newMaterial
		}

	
	},

	
	
	//VISUALS
	visual:{
		
		position:{
			freqZpolarXY:{
				x:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.posToCamera.t*100)},
				y:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.posToCamera.p*100)},
				z:function(whichSoundObj,freqData,binCount,n){return (freqData)},
			},
			
		},
		
		rotation:{
			
			
			constantXpolarYZ:{
				x:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.suns.array[n].rotation.x+.001)},
				y:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.posToCamera.t+whichSoundObj.objects.suns.dataArray[n].rotation.y)},
				z:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.posToCamera.t+whichSoundObj.objects.suns.dataArray[n].rotation.z)},
			},
			
			positionBased:{
				x:function(whichSoundObj,freqData,binCount,n){return (2*Math.PI*(whichSoundObj.posToCamera.r/whichSoundObj.radius))},
				y:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.posToCamera.t+whichSoundObj.objects.suns.dataArray[n].rotation.y)},
				z:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.posToCamera.p+whichSoundObj.objects.suns.dataArray[n].rotation.z)},	
			},
			
			freqRotX:{
				x:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.suns.array[n].rotation.x + (freqData*.00001))},
				y:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.suns.dataArray[n].rotation.y)},
				z:function(whichSoundObj,freqData,binCount,n){return (whichSoundObj.objects.suns.dataArray[n].rotation.z)},
			},
			
			
		},
		
		
		vertex:{
			spike:{
				x:function(whichSoundObj,freqData,binCount,n){return ((polarLib.spikeSun(whichSoundObj,freqData,binCount,n).x*2)*(whichSoundObj.radius/2000))},
				y:function(whichSoundObj,freqData,binCount,n){return ((polarLib.spikeSun(whichSoundObj,freqData,binCount,n).y*2)*(whichSoundObj.radius/2000))},
				z:function(whichSoundObj,freqData,binCount,n){return ((polarLib.spikeSun(whichSoundObj,freqData,binCount,n).z*2)*(whichSoundObj.radius/2000))},
			},
			
			hackNight2:{
				x:function(whichSoundObj,freqData,binCount,n){return ((
				polarLib.rand2(whichSoundObj,freqData,binCount,n).x/2)*(whichSoundObj.radius/2000)+whichSoundObj.objects.suns.data.geometry.vertices[n].x)},
				y:function(whichSoundObj,freqData,binCount,n){return ((
				polarLib.rand2(whichSoundObj,freqData,binCount,n).y/2)*(whichSoundObj.radius/2000)+whichSoundObj.objects.suns.data.geometry.vertices[n].y)},
				z:function(whichSoundObj,freqData,binCount,n){return ((
				polarLib.rand2(whichSoundObj,freqData,binCount,n).z/2)*(whichSoundObj.radius/2000)+whichSoundObj.objects.suns.data.geometry.vertices[n].z)},
			},
			
			hackNight3:{
				x:function(whichSoundObj,freqData,binCount,n){return ((
				-polarLib.rand2(whichSoundObj,freqData,binCount,n).x*2)*(whichSoundObj.radius/2000)+whichSoundObj.objects.suns.data.geometry.vertices[n].x)},
				y:function(whichSoundObj,freqData,binCount,n){return ((
				-polarLib.rand2(whichSoundObj,freqData,binCount,n).y*2)*(whichSoundObj.radius/2000)+whichSoundObj.objects.suns.data.geometry.vertices[n].y)},
				z:function(whichSoundObj,freqData,binCount,n){return ((
				-polarLib.rand2(whichSoundObj,freqData,binCount,n).z*2)*(whichSoundObj.radius/2000)+whichSoundObj.objects.suns.data.geometry.vertices[n].z)},
			},
			
			hackNight4:{
				x:function(whichSoundObj,freqData,binCount,n){return ((
				-polarLib.spikeSun2(whichSoundObj,freqData,binCount,n).x*2)*(whichSoundObj.radius/2000)+whichSoundObj.objects.suns.data.geometry.vertices[n].x)},
				y:function(whichSoundObj,freqData,binCount,n){return ((
				-polarLib.spikeSun2(whichSoundObj,freqData,binCount,n).y*2)*(whichSoundObj.radius/2000)+whichSoundObj.objects.suns.data.geometry.vertices[n].y)},
				z:function(whichSoundObj,freqData,binCount,n){return ((
				-polarLib.spikeSun2(whichSoundObj,freqData,binCount,n).z*2)*(whichSoundObj.radius/2000)+whichSoundObj.objects.suns.data.geometry.vertices[n].z)},
			},
			
			hackNight5:{
				x:function(whichSoundObj,freqData,binCount,n){return ((
				-polarLib.spikeSun3(whichSoundObj,freqData,binCount,n).x*2)*(whichSoundObj.radius/2000)+whichSoundObj.objects.suns.data.geometry.vertices[n].x)},
				y:function(whichSoundObj,freqData,binCount,n){return ((
				-polarLib.spikeSun3(whichSoundObj,freqData,binCount,n).y*2)*(whichSoundObj.radius/2000)+whichSoundObj.objects.suns.data.geometry.vertices[n].y)},
				z:function(whichSoundObj,freqData,binCount,n){return ((
				-polarLib.spikeSun3(whichSoundObj,freqData,binCount,n).z*2)*(whichSoundObj.radius/2000)+whichSoundObj.objects.suns.data.geometry.vertices[n].z)},
			},
			
			hackNight6:{
				x:function(whichSoundObj,freqData,binCount,n){return ((
				(-polarLib.spikeSun4(whichSoundObj,freqData,binCount,n).x*5)*(whichSoundObj.radius/2000)+whichSoundObj.objects.suns.data.geometry.vertices[n].x)*((n/500)+.5))},
				y:function(whichSoundObj,freqData,binCount,n){return ((
				(-polarLib.spikeSun4(whichSoundObj,freqData,binCount,n).y*5)*(whichSoundObj.radius/2000)+whichSoundObj.objects.suns.data.geometry.vertices[n].y)*((n/500)+.5))},
				z:function(whichSoundObj,freqData,binCount,n){return ((
				(-polarLib.spikeSun4(whichSoundObj,freqData,binCount,n).z*5)*(whichSoundObj.radius/2000)+whichSoundObj.objects.suns.data.geometry.vertices[n].z)*((n/500)+.5))},
			},
			
			
			freqBuldge:{
				x:function(whichSoundObj,freqData,binCount,n){
					return (whichSoundObj.objects.suns.data.geometry.vertices[n].x  * (1+(freqData/1000)))
				},
				y:function(whichSoundObj,freqData,binCount,n){
					return (whichSoundObj.objects.suns.data.geometry.vertices[n].y *  (1+(freqData/1000)))
				},
				z:function(whichSoundObj,freqData,binCount,n){
					return (whichSoundObj.objects.suns.data.geometry.vertices[n].z * (1+(freqData/1000)))
				},
			},
			
			
		},
		
	
		
		
		
	},
	
}


sunLib.visual.spike = {	
	whichFreq:100,
	//position:sunLib.visual.position.freqZpolarXY,
	//rotation:sunLib.visual.rotation.constantXpolarYZ,
	vertex:sunLib.visual.vertex.spike,
}
