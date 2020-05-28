

//This is a Library full of different Polarization functions, 
//to be used in the vertex, placement and rotation functions of the different libs

//most of the names aren't very descriptive, mostly because I have NO idea what they are doing,
//and am just combining them so that the computer can make art...

//this is where the magic takes place,
//and don't let anybody tell you otherwise


polarLib= {
	
	
	
	rand1:function(whichSoundObj,freqData,binCount,n){
		var radius=(Math.pow(freqData,.5)*10)+100
		var theta=Math.PI*(1+(freqData/1000))
		var phi=2*Math.PI*(n+freqData/1000)
		return cabMATH.toCart(radius, theta, phi)
	},
	
	rand2:function(whichSoundObj,freqData,binCount,n){
		var radius=(Math.pow(freqData,.1))+100
		var theta= (Math.PI*(freqData/1000)*(n))+(n/(Math.PI*100))
		var phi=(n/(Math.PI*100))
		return cabMATH.toCart(radius, theta, phi)
	},
	
	
	//Uses full number of vertices
	spikeSun:function(whichSoundObj,freqData,binCount,n){
		
		var radius=(Math.pow(freqData,.5)*4)
		var theta=n 
		var phi=2*Math.PI*(n/whichSoundObj.objects.suns.array[0].geometry.vertices.length)
	
		return cabMATH.toCart(radius, theta, phi)
	},
	
	spikeSun2:function(whichSoundObj,freqData,binCount,n){
		var radius=freqData*.4 + 100
		var theta=Math.PI*(n/whichSoundObj.objects.suns.array[0].geometry.vertices.length)
		var phi=(-Math.PI)+(2*Math.PI*(n/whichSoundObj.objects.suns.array[0].geometry.vertices.length))
		return cabMATH.toCart(radius, theta, phi)
	},
	
	spikeSun3:function(whichSoundObj,freqData,binCount,n){
		var radius=freqData*.8  - 20
		var theta=Math.PI*(n/whichSoundObj.objects.suns.array[0].geometry.vertices.length)+(freqData/2000)
		var phi=(-Math.PI)+(2*Math.PI*(n/whichSoundObj.objects.suns.array[0].geometry.vertices.length))
		return cabMATH.toCart(radius, theta, phi)
	},
	
	
	spikeSun4:function(whichSoundObj,freqData,binCount,n){
		var radius=(freqData  + n)/10
		var theta=Math.PI*(n/whichSoundObj.objects.suns.array[0].geometry.vertices.length)+(freqData/2000)
		var phi=(-Math.PI)+(freqData/100)
		return cabMATH.toCart(radius, theta, phi)
	},
	
	
	
	spikePlanet:function(whichSoundObj,freqData,binCount,n){
		var radius=(Math.pow(freqData,.5)*4)
		var theta=n 
		var phi=2*Math.PI*(n/whichSoundObj.objects.planets.array[0].geometry.vertices.length)
		return cabMATH.toCart(radius, theta, phi)
	},
	
	spikePlanet2:function(whichSoundObj,freqData,binCount,n){
		var radius=(Math.pow(freqData,.4)*5 + 100)
		var theta=Math.PI*(n/whichSoundObj.objects.planets.array[0].geometry.vertices.length)
		var phi=(-Math.PI)+(2*Math.PI*(n/whichSoundObj.objects.planets.array[0].geometry.vertices.length))
		return cabMATH.toCart(radius, theta, phi)
	},
	
	
	spikePlanet3:function(whichSoundObj,freqData,binCount,n){
		var radius=freqData*.8  - 20
		var theta=Math.PI*(n/whichSoundObj.objects.planets.array[0].geometry.vertices.length)+(freqData/2000)
		var phi=(-Math.PI)+(2*Math.PI*(n/whichSoundObj.objects.planets.array[0].geometry.vertices.length))
		return cabMATH.toCart(radius, theta, phi)
	},
	
	
	spikePlanet4:function(whichSoundObj,freqData,binCount,n){
		var radius=(freqData  + n)/10
		var theta=Math.PI*(n/whichSoundObj.objects.planets.array[0].geometry.vertices.length)+(freqData/2000)
		var phi=(-Math.PI)+(freqData/100)
		return cabMATH.toCart(radius, theta, phi)
	},
	
	spikePlanet5:function(whichSoundObj,freqData,binCount,n){
		var radius=(freqData*freqData*(n+500))/500000
		var theta=Math.PI*((n+100)/whichSoundObj.objects.planets.array[0].geometry.vertices.length)+(freqData/100)
		var phi=((-Math.PI)+(freqData/100))*((n+100)/whichSoundObj.objects.planets.array[0].geometry.vertices.length)
		return cabMATH.toCart(radius, theta, phi)
	},
	
	spikePlanet6:function(whichSoundObj,freqData,binCount,n){
		var radius=(freqData*freqData)/500
		var theta=2*Math.PI*(n/whichSoundObj.objects.planets.array[0].geometry.vertices.length)
		var phi=(-Math.PI)+(2*Math.PI*(n/whichSoundObj.objects.planets.array[0].geometry.vertices.length))
		return cabMATH.toCart(radius, theta, phi)
	},
	
	
	
	
	
}