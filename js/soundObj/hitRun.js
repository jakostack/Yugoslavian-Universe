var rasG_cotoLoco =	{
	
	title:"E Space - Miha Kralj",
	file:"espace.mp3",
	info:"Miha Kralj, born 22 August 1949, is a Slovene composer, singer, performer and record producer. He is a pioneer in the electronic, ambient and new-age musical genres in Slovenia and former SFR Yugoslavia. He is also called Yugoslavian Jean-Michel Jarre",
	img:"img/galaxies/laGalaxy/hitRun/Odyssey.png",
	links:[
	],
	 
	
	//This is the distance away
	//when the music starts playing
	radius:2000,
	
	
	//The Planets for this solar system
	planets:{
		numOf:20,
		type:planetLib.type.sphere(300,15,15),
		dataType:planetLib.type.sphere(300,15,15),
		material:planetLib.material.colorNormal(0x07B0B0),
		position:planetLib.position.center(),
		rotation:planetLib.rotation.fullCircle(20),	
	},
	
	
	//the Sun for this solar system
	suns:{
		numOf:20,
		type:planetLib.type.cube(1000,1000,1000),
		dataType:planetLib.type.cube(1000,1000,1000),
		material:planetLib.material.colorNormal(0x5c0c0c),
		position:planetLib.position.center(),
		rotation:planetLib.rotation.fullCircle(20),	
	},
	
	
	//the dust for this solar system
	dust:dustLib.hnrSS,
	
	
	//SECTIONS
	sections:[
		{	
			//vis of First Section!
			sun:{
				vertex:sunLib.visual.vertex.freqBuldge
			},
			planet:{
				vertex:planetLib.visual.vertex.hackNight8,
				rotation:planetLib.visual.rotation.camPosZ
			},
			dust:{
				scale:dustLib.visual.scale.freqHalfLess_1,
				size:dustLib.visual.size.freq
			},
			
			//Time when the first section comes in
			time:0
		},
		
		
	],
	
	
	//POSITION OF SOLAR SYSTEM
	position:{
		x:0,
		y:-3000,
		z:-2000
	}
}




/*

	GRIOTS

*/

var kutmahTehbis_griots =	{
	
	
	title:"Aska - Disco Rock A - Indexi",
	file:"Aska - Disco Rock A - Indexi.mp3",
	img:"img/galaxies/laGalaxy/hitRun/roadKillVol3.png",
	info:"",
	links:[
	],
	
	
	//This is the distance away
	//when the music starts playing
	radius:2000,
	
	
	//The Planets for this solar system
	planets:{
		numOf:10,
		type:planetLib.type.sphere(200,10,10),
		dataType: planetLib.type.sphere(200,10,10),
		material:planetLib.material.imgMaterial("img/galaxies/laGalaxy/hitRun/hnrW.png"),
		position:planetLib.position.fullCircle(800,10),
		rotation:planetLib.rotation.fullCircleZ(10),	
	},
	
	
	//the Sun for this solar system
	suns:{
		numOf:10,
		type:planetLib.type.sphere(400,10,10),
		dataType:planetLib.type.sphere(400,10,10),
		material:planetLib.material.colorNormal(0x019FB8),
		position:planetLib.position.center(),
		rotation:planetLib.rotation.fullCircleZ(10),
	},
	
	
	//the dust for this solar system
	dust:dustLib.hnrSS,
	
	lights:{
		numOf:5,
		type:lightLib.type.point(0xff0000),
		position:lightLib.position.randomBox(1000)
		
	},
	
	//SECTIONS OF SOLAR SYSTEM 1
	sections:[
		{	
			//parts of the first section
			sun:{
				vertex:sunLib.visual.vertex.hackNight2,
			},
			planet:{
				vertex:planetLib.visual.vertex.hackNight5,
				rotation:planetLib.visual.rotation.camPosZ,
				
			},
			dust:{
				rotation:dustLib.visual.rotation.freqX,
				scale:dustLib.visual.scale.freqXYZ
			},
			light:{
				color:lightLib.visual.color.freqRed
			},
			
			//Time when the first section comes in
			time:0
		},
		
		
		
	],
	
	
	//POSITION OF SOLAR SYSTEM
	position:{
		x:2000,
		y:0,
		z:-4000
	}
}


var flako_holeInTheDark =	{
	
	
	title:"Boomerang - Na Zapadu Ništa",
	file:"Boomerang - Na Zapadu Ništa.mp3",
	img:"img/galaxies/laGalaxy/hitRun/boomerang.png",
	info:"",
	links:[
	],
	
	
	//This is the distance away
	//when the music starts playing
	radius:2000,
	
	
	//The Planets for this solar system
	planets:{
		numOf:50,
		type:planetLib.type.cube(500,200,200),
		dataType: planetLib.type.cube(500,200,200),
		material:planetLib.material.colorNormal(0x901010),
		position:planetLib.position.center(),
		rotation:planetLib.rotation.fullCircle(50),	
	},
	
	
	//the Sun for this solar system
	suns:{
		numOf:1,
		type:sunLib.type.sphere(200,10,10),
		dataType:sunLib.type.sphere(200,10,10),
		material:planetLib.material.colorNormal(0x900000),
		position:planetLib.position.center(),
		rotation:planetLib.rotation.fullCircle(1),	
	},
	
	
	//the dust for this solar system
	dust:dustLib.hnrSS,
	
	lights:{
		numOf:5,
		type: new THREE.DirectionalLight(0xffffff),
		position:lightLib.position.randomBox(200)
		
	},
	
	//SECTIONS OF SOLAR SYSTEM 1
	sections:[
		{	
			//vis of First Section!
			sun:{
				vertex:sunLib.visual.vertex.freqBuldge	
			},
			planet:{
				vertex:planetLib.visual.vertex.freqBuldge,
				rotation:planetLib.visual.rotation.camPosZ
			},
			dust:{
				scale:dustLib.visual.scale.freqXYZLess,
				rotation:dustLib.visual.rotation.nSteadyXNFreqZ
				
			},
			//Time when the first section comes in
			time:0
		},
		
		
	],
	
	
	//POSITION OF SOLAR SYSTEM
	position:{
		x:-3000,
		y:0,
		z:5000
	}
}



/*

	Dexter Story EVERYTHING


*/

var dexterStory_everything =	{
	
	
	  title:"Cice Mace - Foto model",
	  file:"Cice Mace - Foto model.mp3",
	  img:"img/galaxies/laGalaxy/hitRun/Fotomodel.png",
	  info:"",
	  links:[
	  ],
	  
	  //TODO CREATE A VISUALIZE FUNCTION THAT IS BLANK, 
	  //BUT IS SWITCHED TO THE DIFFERENT 
	  //VISUALIZERS OF THE DIFFERENT SECTIONS
	  
	  
	  //This is the distance away
	  //when the music starts playing
	  radius:2000,
	  
	  
	  //The Planets for this solar system
	  planets:{
		  numOf:20,
		  type:planetLib.type.sphere(200,10,10),
		  dataType: planetLib.type.sphere(200,10,10),
		  material:planetLib.material.colorNormal(0x08c27b),
		  position:planetLib.position.loopDLoop(500,20),
		  rotation:planetLib.rotation.fullCircle(20),	
	  },
	  
	  
	  //the Sun for this solar system
	  suns:{
		  numOf:1,
		  type:sunLib.type.sphere(100,10,10),
		  dataType:sunLib.type.sphere(100,10,10),
		  material:sunLib.material.imgMaterial("img/galaxies/laGalaxy/hitRun/hnrW.png"),
	  },
	  
	  
	  //the dust for this solar system
	  dust:dustLib.hnrSS,
	  
	  lights:{
		  numOf:5,
		  type: new THREE.DirectionalLight(0xffffff),
		  position:lightLib.position.randomBox(200)
		  
	  },
	  
	  //SECTIONS OF SOLAR SYSTEM 1
	  sections:[
		  {	
			  //parts of the first section
			  sun:sunLib.visual.spike,
			  planet:{
				  position:planetLib.visual.position.freqZ,
				  rotation:planetLib.visual.rotation.camPosZ,
				  vertex:planetLib.visual.vertex.nFreqBuldge
				  
			  },
			  dust:{
				  scale:dustLib.visual.scale.freqZeroXYZ,
				  rotation:dustLib.visual.rotation.nSteadyXNFreqZ
			  },
			  light:{
				  color:lightLib.visual.color.freqWhite	
			  },
			  
			  //Time when the first section comes in
			  time:0
		  },
		  
		  
	  ],
	  
	  
	  //POSITION OF SOLAR SYSTEM
	  position:{
		  x:-5000,
		  y:2000,
		  z:0
	  }
}


var devonwho_emptyShelves =	{
	
	
	  title:"Đani Maršan - Put bez kraja",
	  file:"Đani Maršan - Put bez kraja.mp3",	
	  img:"img/galaxies/laGalaxy/hitRun/danimarsan.png",
	  info:"",
	  links:[
		 
	  ],
	  
	  
	  //This is the distance away
	  //when the music starts playing
	  radius:2000,
	  
	  
	  //The Planets for this solar system
	  planets:{
		  numOf:100,
		  type:planetLib.type.cube(500,100,20),
		  dataType: planetLib.type.cube(500,100,20),
		  material:planetLib.material.colorNormal(0x089D9E),
		  position:planetLib.position.fullSphere(500,100),
		  rotation:planetLib.rotation.fullCircle(20),	
	  },
	  
	  
	  //the Sun for this solar system
	  suns:{
		  numOf:10,
		  type:sunLib.type.sphere(100,10,10),
		  material:planetLib.material.colorNormal(0x120AA6),
	  },
	  
	  
	  //the dust for this solar system
	  dust:{
		  pNum:20,
		  fNum:20,
		  pPosition: dustLib.pPosition.ringX(1000,20),
		  pMaterial: dustLib.pMaterial.color(0xB4F4FF,20),
		  fPosition: dustLib.fPosition.center(),
		  fRotation: dustLib.fRotation.rotX(2*Math.PI,20),
	  },
	  
	  //SECTIONS OF SOLAR SYSTEM 1
	  sections:[
		  {	
			  //parts of the first section
			  sun:sunLib.visual.spike,
			  planet:{
				  rotation:planetLib.visual.rotation.freqXcamZ,
				  vertex:planetLib.visual.vertex.nBuldgeYZ
			  },
			  dust:{
				  rotation:dustLib.visual.rotation.steadyXfreqY,
				  scale:dustLib.visual.scale.freqXYZLess
			  },
			  
			  
			  //Time when the first section comes in
			  time:0
		  },
		  
		  
	  ],
	  
	  
	  //POSITION OF SOLAR SYSTEM
	  position:{
		  x:2000,
		  y:1000,
		  z:5000
	  }
}


/*

	BEI RU  - BEKAA VALLEY HASH

*/


var beiRu_bekaaValleyHash =	{
	

	  title:"Miha Kralj - Simfonija C Mol",
	  file:"Miha Kralj - Simfonija C Mol.mp3",
	  img:"img/galaxies/laGalaxy/hitRun/roadKillVol1.png",
	  links:[
	  ],
	  
	  //TODO CREATE A VISUALIZE FUNCTION THAT IS BLANK, 
	  //BUT IS SWITCHED TO THE DIFFERENT 
	  //VISUALIZERS OF THE DIFFERENT SECTIONS
	  
	  
	  //This is the distance away
	  //when the music starts playing
	  radius:2000,
	  
	  
	  //The Planets for this solar system
	  planets:{
		  numOf:20,
		  type:planetLib.type.sphere(500,10,10),
		  dataType: planetLib.type.sphere(500,10,10),
		  material:planetLib.material.colorNormal(0x901010),
		  position:planetLib.position.center(),
		  rotation:planetLib.rotation.fullCircle(20),	
	  },
	  
	  
	  //the Sun for this solar system
	  suns:{
		  numOf:1,
		  type:sunLib.type.cube(100,100,100),
		  dataType:sunLib.type.cube(100,100,100),
		  material:sunLib.material.imgMaterial("img/galaxies/laGalaxy/hitRun/roadKillVol3.png"),
	  },
	  
	  
	  //the dust for this solar system
	  dust:dustLib.hnrSS,
	  
	  lights:{
		  numOf:1,
		  type: new THREE.DirectionalLight(0xffffff),
		  position:lightLib.position.randomBox(200)
		  
	  },
	  
	  //SECTIONS OF SOLAR SYSTEM 1
	  sections:[
		  {	
			  //parts of the first section
			  sun:{
				  vertex:sunLib.visual.vertex.freqBuldge
			  },
			  planet:{
				  position:planetLib.visual.position.freqXoffSet300,
				  rotation:planetLib.visual.rotation.freqXcamZ,
				  vertex:planetLib.visual.vertex.nFreqBuldge1,	
				  
			  },
			  dust:{
				  scale:dustLib.visual.scale.freqZeroXYZ,
				  rotation:dustLib.visual.rotation.nSteadyXNFreqZ
			  },
			  light:{
				  color:lightLib.visual.color.freqWhite	
			  },
			  
			  //Time when the first section comes in
			  time:0
		  },
		  
		  
	  ],
	  
	  
	  //POSITION OF SOLAR SYSTEM
	  position:{
		  x:4000,
		  y:5000,
		  z:-2000
	  }
}
