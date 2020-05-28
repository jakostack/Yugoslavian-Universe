// JavaScript Document




var daedelus_dntFkSgr =	{


	title:"Daedelus - Dnt Fk Sgr",
	file:"daedelus_dntFkSgr.mp3",
	img:"img/galaxies/laGalaxy/dublab/echoExpansion.png",
	info:"'Dnt Fk Sgr' is a fast paced romp through multiple eras and emotions. Starting off with the scratching of a pick on an electronic guitar,  it quickly changes from one sample to the next. All these samples are so quick and light, they create a sophisticated feeling of anxiety. More songs are layered on top of each other until you can no longer tell which sound belongs to which track, and the speed becomes overbearing. A short reprieve is given as the track moves to a gentle bossa track, but is quickly destroyed at the command of a voice, whose presence is repeated throughout the tune. The last section begins to exhibit tinges the heavy bass so prevalent in L.A. beat music, but quickly fades back to the original sample, bringing the song full circle.",
	links:[
		["Daedelus Website","http://daedelusmusic.com/"],
		["Dublab","http://dublab.com/"],
	],
	
	//This is the distance away
	//when the music starts playing
	radius:2000,
	
	//the Sun for this solar system
	suns:{
		numOf:10,
		type:planetLib.type.icosahedron(60,2),
		dataType:planetLib.type.icosahedron(60,2),
		material:planetLib.material.colorNormal(0x00e3aa),
		material:sunLib.material.normal,
		rotation:planetLib.rotation.fullCircleY(10),	
	},
	
	
	//The Planets for this solar system
	planets:{
		numOf:20,
		type:planetLib.type.sphere(50,15,15),
		dataType: planetLib.type.sphere(50,15,15),
		material:planetLib.material.colorNormal(0x0033aa),
		position:planetLib.position.fullCircle(500,20),
		rotation:planetLib.rotation.fullCircleY(20),	
	},
	
	
	
	
	
	//the dust for this solar system
	dust:{
		pNum:20,
		fNum:20,
		pPosition: dustLib.pPosition.randomBox(200),
		pMaterial: dustLib.pMaterial.colorAdditive(0x00ccff,20),
		fPosition: dustLib.fPosition.randomBox(2000),
		fRotation: dustLib.fRotation.noRotation(),
	},
	
	
	//SECTIONS OF SOLAR SYSTEM 1
	sections:[
		{	
			
			//parts of the first section
			sun:{
				rotation:sunLib.visual.rotation.positionBased,
				vertex:sunLib.visual.vertex.hackNight4,
				
			},
			
			planet:{
				//vertex:planetLib.visual.vertex.pdxHackNight1
				vertex:planetLib.visual.vertex.hackNight5,
				//rotation:sunLib.visual.rotation.positionBased
			},
			dust:dustLib.visual.try1,
			
			//Time when the first section comes in
			time:0
		},
		
		
		
	],
	
	
	//POSITION OF SOLAR SYSTEM
	position:{
		x:-6000,
		y:3000,
		z:-4000
	}
}








var dntel_sundial =	{


	title:"Dntel - Sundial",
	file:"dntel_sundial.mp3",
	img:"img/galaxies/laGalaxy/dublab/echoExpansion.png",
	info:"The minimal pedal tone provided by a single note on the two and four of 'Sundial' illuminates the melancholy chord progression that tells a story of sorrow and hope. Intensely intimate and emotional,  it creates an environment filled with quite roughness and ghostly murmurs As the chorus smoothly fills the song, minute backing vocals support the aethereal description of the passing day. Like any day, the song must end, and as it fades into twilight, it leaves the listener poised and peaceful.",
	links:[
		["Dntel Website","https://soundcloud.com/dntel"],
		["Dublab","http://dublab.com/"],
	],
	
	
	
	//This is the distance away
	//when the music starts playing
	radius:2000,
	
	
	//The Planets for this solar system
	planets:{
		numOf:20,
		type:planetLib.type.icosahedron(100,2),
		dataType:planetLib.type.icosahedron(100,2),
		//dataType: planetLib.type.sphere(100,15,15),
		material:planetLib.material.colorNormal(0x091070),
		position:planetLib.position.fullSphere(300,20),
		rotation:planetLib.rotation.fullCircleY(20),	
	},
	
	
	//the Sun for this solar system
	suns:{
		numOf:10,
		type:planetLib.type.icosahedron(60,1),
		dataType:planetLib.type.icosahedron(60,1),
		material:planetLib.material.colorNormal(0x00e3aa),
		material:sunLib.material.normal,
		rotation:planetLib.rotation.fullCircleY(10),	
	},
	

	
	//the dust for this solar system
	dust:{
		pNum:20,
		fNum:20,
		pPosition: dustLib.pPosition.randomBox(200),
		pMaterial: dustLib.pMaterial.whiteParticle(1),
		fPosition: dustLib.fPosition.randomBox(2000),
		fRotation: dustLib.fRotation.noRotation(),
	},
	
	
	
	//SECTIONS OF SOLAR SYSTEM 1
	sections:[
		{	
		
			//parts of the first section
			sun:{
				//position:sunLib.visual.position.freqZpolarXY,
				vertex:sunLib.visual.vertex.hackNight6,
				
			},
		
			planet:{
				rotation:planetLib.visual.rotation.freqRotX,
				vertex:planetLib.visual.vertex.nFreqBuldge,
			},
			dust:{
				position:dustLib.visual.position.center,
				rotation:dustLib.visual.rotation.nFreq,
				scale:dustLib.visual.scale.freqHalf,
				size:dustLib.visual.size.freqNone,
				
			},
			
			//Time when the first section comes in
			time:0
		},
		
		
		
	],
	
	
	//POSITION OF SOLAR SYSTEM
	position:{
		x:5000,
		y:2000,
		z:-5000
	}
}


//SOLAR SYSTEM 1


var flyingLotus_backpackCaviar =	{


	title:"Flying Lotus - Backpack Caviar",
	file:"flyingLotus_backpackCaviar.mp3",
	img:"img/galaxies/laGalaxy/dublab/echoExpansion.png",
	info:"Flying Lotus always creates songs that are saturated by viscous textures, and Backpack Caviar is no exception. The introductory bassline servers as a spine for the entire structure, so that even as chaos reigns around it, the song moves along steady as possible. Extraordinarily cosmic, yet entirely down to earth, Backpack Caviar lets the listener explore the scene it has create at their own pace. As the listener isolates each substance, they begin to notice the complexity of the piece, from the 16th note white noise glitch, to the disembodied voice, obscured by its abrupt destruction and recreation. The scene is boundless, as most are that Flying Lotus creates, and provides listeners a space to take refuge and explore to any extent they choose to.",
	links:[
		["Flying Lotus Website","http://flying-lotus.com/"],
		["Dublab","http://dublab.com/"],
	],
	
	//This is the distance away
	//when the music starts playing
	radius:2000,
	
	
	//The Planets for this solar system
	planets:{
		numOf:20,
		type:planetLib.type.sphere(50,15,15),
		dataType: planetLib.type.sphere(50,15,15),
		material:planetLib.material.colorNormal(0x30a3aa),
		position:planetLib.position.center(),
		rotation:planetLib.rotation.fullCircleY(20),	
	},
	
	//the Sun for this solar system
	/*suns:{
		numOf:10,
		type:sunLib.type.sphere(100,2,10),
		dataType:sunLib.type.sphere(100,2,10),
		material:planetLib.material.colorNormal(0x00e3aa),
		material:sunLib.material.normal,
		rotation:planetLib.rotation.fullCircleY(10),	
	},*/
	
	
	
	
	
	//the dust for this solar system
	dust:{
		pNum:20,
		fNum:20,
		pPosition: dustLib.pPosition.randomBox(200),
		pMaterial: dustLib.pMaterial.colorAdditive(0x00ccff,20),
		fPosition: dustLib.fPosition.randomBox(2000),
		fRotation: dustLib.fRotation.noRotation(),
	},
	
	
	//SECTIONS OF SOLAR SYSTEM 1
	sections:[
		{	
		
			//parts of the first section
			/*sun:{
				vertex:sunLib.visual.vertex.freqBuldge,
				
			},*/
			
			planet:{
				//vertex:planetLib.visual.vertex.pdxHackNight1
				vertex:planetLib.visual.vertex.hackNight6,
			},
			dust:dustLib.visual.try1,
			
			//Time when the first section comes in
			time:0
		},
		
		
		
	],
	
	//POSITION OF SOLAR SYSTEM
	position:{
		x:-4000,
		y:-1000,
		z:-3000
	}
}




var kutmah_songSong =	{


	title:"Kutmah - Song Song",
	file:"kutmah_songSong.mp3",
	img:"img/galaxies/laGalaxy/dublab/echoExpansion.png",
	info:"A soulful sample introduces 'Song Song' to the listener, but is quickly overtaken by sharp bass beats and pregnant white space. Although the starting sample is reintroduced later in the beat, it is now contextualized by the rigid rhythmic  structure. This mesh of the organic and digital creates an extremely wide space for the track to exist within. It takes the listener from sweeping fields to constructed artifices, allowing her to appreciate both the noise of spectrums and definition of quantized sound. In the end, the listener is left to be destroyed by the feedback of a distorted sample, letting her meditate on the difference thise these two textures.",
	links:[
		["Kutmah Website","http://kutmah.com/"],
		["Dublab","http://dublab.com/"],
	],
	
	
	
	//This is the distance away
	//when the music starts playing
	radius:2000,
	
	
	//The Planets for this solar system
	planets:{
		numOf:20,
		type:planetLib.type.sphere(200,10,10),
		dataType: planetLib.type.sphere(200,10,10),
		material:planetLib.material.colorNormal(0x0033aa),
		position:planetLib.position.center(),
		rotation:planetLib.rotation.fullCircleY(20),	
	},
	
	
	
	//the dust for this solar system
	dust:{
		pNum:20,
		fNum:20,
		pPosition: dustLib.pPosition.randomBox(200),
		pMaterial: dustLib.pMaterial.colorAdditive(0x00ccff,20),
		fPosition: dustLib.fPosition.randomBox(2000),
		fRotation: dustLib.fRotation.noRotation(),
	},
	
	
	//SECTIONS OF SOLAR SYSTEM 1
	sections:[
		{	
			
			planet:{
				//vertex:planetLib.visual.vertex.pdxHackNight1
				vertex:planetLib.visual.vertex.hackNight5_1,
				rotation:planetLib.visual.rotation.freqXCamZ
			},
			dust:dustLib.visual.try1,
			
			//Time when the first section comes in
			time:0
		},
		
		
		
	],
	
	
	
	//POSITION OF SOLAR SYSTEM
	position:{
		x:-2000,
		y:2000,
		z:6000
	}
}




var matthewdavid_tomorrowspirit =	{


	title:"Matthewdavid - Tomorrowspirit",
	file:"matthewdavid_tomorrowspirit.mp3",
	img:"img/galaxies/laGalaxy/dublab/echoExpansion.png",
	info:"The turbulent introduction of 'Tomorrow Spirit' lasts almost half the song. Even as it subsides into a white-noise laden beat, its cacophony is never truly lost. Although it doesn't allow the listener to attach to a specific rhythm, it allows her to enter a state of mindlessness, an empty vessel prepared to gracefully accept the delicate cadence bestowed upon her. As the rhythm emerges from this bountiful field of sound, the distorted whispering of children accompany it, never truly allowing the listener to forget the chaos that surrounds them. New textures are brought in and out of it, but the type of track embodied by most LA beat musicians doesn't get introduced until right before the song ends. This thumping pattern finishes the song, allowing the listener the comfort that comes with digesting a focused rhythm, before it fades out and the song gently ends.",
	links:[
		["Soundcloud","https://soundcloud.com/matthewdavid"],
		["Dublab","http://dublab.com/"],
	],
	
	
	//This is the distance away
	//when the music starts playing
	radius:2000,
	
	
	//The Planets for this solar system
	planets:{
		numOf:5,
		type:planetLib.type.sphere(100,10,10),
		dataType: planetLib.type.sphere(100,10,10),
		material:planetLib.material.colorNormal(0x0033aa),
		position:planetLib.position.lineXallPos(1000,5),
		rotation:planetLib.rotation.fullCircleY(5),	
	},
	
	
	//the Sun for this solar system
	suns:{
		numOf:10,
		type:sunLib.type.sphere(100,2,10),
		dataType:sunLib.type.sphere(100,2,10),
		material:planetLib.material.colorNormal(0x00e3aa),
		material:sunLib.material.normal,
		rotation:planetLib.rotation.fullCircleY(10),	
	},
	
	
	//the dust for this solar system
	dust:{
		pNum:20,
		fNum:20,
		pPosition: dustLib.pPosition.randomBox(200),
		pMaterial: dustLib.pMaterial.colorAdditive(0x00ccff,20),
		fPosition: dustLib.fPosition.randomBox(2000),
		fRotation: dustLib.fRotation.noRotation(),
	},
	
	
	//SECTIONS OF SOLAR SYSTEM 1
	sections:[
		{	
			//parts of the first section
			sun:{
				vertex:sunLib.visual.vertex.freqBuldge,
				
			},
			planet:{
				//vertex:planetLib.visual.vertex.pdxHackNight1
				vertex:planetLib.visual.vertex.hackNight7,
				rotation:planetLib.visual.rotation.freqRotX,
				position:planetLib.visual.position.orbit
			},
			dust:dustLib.visual.try1,
			
			//Time when the first section comes in
			time:0
		},
		
		
		
	],
	
	//POSITION OF SOLAR SYSTEM
	position:{
		x:-2000,
		y:4000,
		z:0
	}
}




var take_wonderMansFlask =	{


	title:"Take AKA Sweatson Klank - Wonder Man's Flask",
	file:"take_wonderMansFlask.mp3",
	img:"img/galaxies/laGalaxy/dublab/echoExpansion.png",
	info:"A roaring truck approaches as soon as you press play on Wonder Man's Flask. As it barrels toward you, it threatens to destroy you with its mass. Rather than destruction it rips by you and using its doppler shift, throws out an aural lifeline so you can latch onto its bustling beat and travel with it on its journey.<br/><br/>The first section of road acclimates you to the speed of the track, its repetitive, yet syncopated bass line and shuffling rhythmic textures create a comfortable cockpit for the adventure and allows you to notice the nuance in the landscape surrounding. You hear a few nondescript words, presumably from your chauffeur and companion, acting as a tour guide and possibly pointing out a landmark.<br/><br/>As soon as you become acclimated to the abundance of the open road, the song begins a transition marked by new electronic melodies and textures. This transition brings you to a place of absolute light, the warmth of the full bodied synthesizer washes over you, letting your truck take flight, journeying past galaxies and planets, their different tones providing waypoints along the epic cosmic quest.<br/><br/>The song and with it you, continue along, meeting new creatures and discovering new landscapes, until the fuel of your craft runs out, leaving you floating in space, like the wise blind man guided by Amelie Poulain.",
	links:[
		["Take Website","http://takeisme.com/"],
		["Dublab","http://dublab.com/"],
	],
	
	
	
	//This is the distance away
	//when the music starts playing
	radius:2000,
	
	
	//The Planets for this solar system
	planets:{
		numOf:32,
		type:planetLib.type.sphere(100,15,15),
		dataType: planetLib.type.sphere(100,15,15),
		material:planetLib.material.colorNormal(0x0033aa),
		position:planetLib.position.cube(1000,2),
		rotation:planetLib.rotation.fullCircleY(32),	
	},
	
	//the Sun for this solar system
	suns:{
		numOf:10,
		type:planetLib.type.icosahedron(60,1),
		dataType:planetLib.type.icosahedron(60,1),
		material:planetLib.material.colorNormal(0x00e3aa),
		material:sunLib.material.normal,
		rotation:planetLib.rotation.fullCircleY(10),	
	},
	

	
	

	
	//the dust for this solar system
	dust:{
		pNum:20,
		fNum:20,
		pPosition: dustLib.pPosition.randomBox(200),
		pMaterial: dustLib.pMaterial.colorAdditive(0x00ccff,20),
		fPosition: dustLib.fPosition.randomBox(2000),
		fRotation: dustLib.fRotation.noRotation(),
	},
	
	
	//SECTIONS OF SOLAR SYSTEM 1
	sections:[
		{	
		//parts of the first section
			sun:{
				vertex:sunLib.visual.vertex.spike,
				
			},
			
			planet:{
				//vertex:planetLib.visual.vertex.pdxHackNight1
				vertex:planetLib.visual.vertex.hackNight5,
				//rotation:sunLib.visual.rotation.positionBased
			},
			dust:dustLib.visual.try1,
			
			//Time when the first section comes in
			time:0
		},
		
		
		
	],
	
	
	//POSITION OF SOLAR SYSTEM
	position:{
		x:-1000,
		y:2000,
		z:-5000
	}
}
