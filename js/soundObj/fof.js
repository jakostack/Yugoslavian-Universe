// JavaScript Document




var shlohmo_rainedTheWholeTime =	{


	  title:"Hemsworth - Rained The Whole Time x Number One",
	  file:"shlohmo_rainedTheWholeTime.mp3",
	  info:"The hardest part of creating a blend is finding two songs that not only can fit together, but create synergy when combined. Ryan Hemsworth makes a perfect decision when he chooses to mashup R. Kelly's  'Number One' and Shlohmo's  'Rained the Whole Time'. Although the originals are dramatically different than their resulting amalgamation, each tracks brings adds its own unique emotional energy to the mix. Typically when listening to mashups, you notice holes in the flow of the song. This is not the case for this synthesis, as Hemsworth seamlessly meshes two already impeccable songs. Each song has its own length list of worthy remixes (including one by Nicolas Jaar that Hemsworth uses in this blend),  so it was only a matter of time until somebody combined the two. That being said we are extraordinarily lucky that Hemsworth was the one who did it, as a better union is unimaginable.",
	  img:"img/galaxies/laGalaxy/fof/collectedRemixes12.png",
	  links:[
		  ["Soundcloud","https://soundcloud.com/fofmusic/shlohmo-rained-the-whole"],
		  ["Friends of Friends","http://www.fofmusic.net/"],
	  ],
	  
	  
	  //This is the distance away
	  //when the music starts playing
	  radius:1000,
	  
	  
	  //The Planets for this solar system
	  planets:{
		  numOf:30,
		  type:planetLib.type.sphere(800,5,30),
		  dataType: planetLib.type.sphere(800,5,30),
		  material:planetLib.material.colorNormal(0x700070),
		  position:planetLib.position.center(),
		  rotation:planetLib.rotation.fullCircle(30),	
	  },
	  
	  
	  //the Sun for this solar system
	  suns:{
		  numOf:10,
		  type:sunLib.type.cube(50,50,50),
		  dataType:sunLib.type.cube(50,50,50),
		  material:sunLib.material.imgMaterial("img/galaxies/laGalaxy/fof/fofTrans.png"),
		  rotation:planetLib.rotation.fullCircle(10),
	  },
	  
	  
	  //the dust for this solar system
	  dust:dustLib.fofSS,
	  
	  
	  lights:{
		  numOf:3,
		  type: new THREE.DirectionalLight(0xffffff),
		  position:lightLib.position.randomBox(500)
		  
	  },
	  
	  //SECTIONS OF SOLAR SYSTEM 1
	  sections:[
		  {	
			  //parts of the first section
			  //sun:sunLib.visual.spike,
			  planet:{
				  rotation:planetLib.visual.rotation.camPosX,	
				  vertex:planetLib.visual.vertex.hackNight5
			  },
			  dust:{
				  position:dustLib.visual.position.center,
				  rotation:dustLib.visual.rotation.nFreq,
				  scale:dustLib.visual.scale.freqXYZLess,
				  size:dustLib.visual.size.freq,
				  
			  },
			  light:{
				  //position:lightLib.visual.position.freq,
				  color:lightLib.visual.color.freqPurple
			  },
			  //Time when the first section comes in
			  time:0
		  },
		  
		  
		  
	  ],
	  
	  
	  //POSITION OF SOLAR SYSTEM
	  position:{
		  x:1000,
		  y:3000,
		  z:-1000
	  }
}







var shlohmo_crewLove =	{


	  title:"Drake - Crew Love Ft. The Weeknd (Shlohmo Remix)",
	  file:"shlohmo_crewLove.mp3",
	  img:"img/galaxies/laGalaxy/fof/collectedRemixes12.png",
	  info:"Although Shlohmo's remix of 'Crew Love' leaves the song's structure for the most part intact, he still is able to craft an original piece of music. Much slower and darker than the original, Shlohmo enunciates The Weeknd's divine vocals with deep bass hits and delicate reverb. Drake's lyrics, on the other hand, Shlohmo consumes with his created textures, giving it more of a supporting role then it had in its original rendition. In this way Shlohmo crafts his own articulate piece while letting the spirit of the official version remain.",
	  links:[
		  ["Soundcloud","https://soundcloud.com/shlohmo"],
		  ["Friends of Friends","http://www.fofmusic.net/"],
	  ],
	  
	  //This is the distance away
	  //when the music starts playing
	  radius:1000,
	  
	  
	  //The Planets for this solar system
	  planets:{
		  numOf:50,
		  type:planetLib.type.sphere(800,4,4),
		  dataType: planetLib.type.sphere(800,4,4),
		  material:planetLib.material.colorNormal(0x700070),
		  position:planetLib.position.boxRand(10),
		  rotation:planetLib.rotation.fullCircle(50),	
	  },
	  
	  
	  //the Sun for this solar system
	  suns:{
		  type:sunLib.type.sphere(100,2,20),
		  material:sunLib.material.imgMaterial("img/galaxies/laGalaxy/fof/fofTrans.png"),
	  },
	  
	  
	  //the dust for this solar system
	  dust:dustLib.fofSS,
	  
	  
	  lights:{
		  numOf:1,
		  type: new THREE.DirectionalLight(0xffffff),
		  position:lightLib.position.center
		  
	  },
	  
	  //SECTIONS OF SOLAR SYSTEM 1
	  sections:[
		  {	
			  //parts of the first section
			  sun:sunLib.visual.spike,
			  planet:{
				  rotation:planetLib.visual.rotation.freqRotX,	
				  vertex:planetLib.visual.vertex.hackNight5,
			  },
			  dust:{
				  position:dustLib.visual.position.center,
				  rotation:dustLib.visual.rotation.nFreq,
				  scale:dustLib.visual.scale.freqXYZLess,
				  size:dustLib.visual.size.freq,
				  
			  },
			  light:{
				  position:lightLib.visual.position.freq,
				  color:lightLib.visual.color.freqPurple
			  },
			  //Time when the first section comes in
			  time:0
		  },
		  
		  
		  
	  ],
	  
	  
	  
	  //POSITION OF SOLAR SYSTEM
	  position:{
		  x:0,
		  y:3000,
		  z:5000
	  }
}



var salva_thatGirl =	{


	  title:"Salva - That Girl (Ft. Pharrell Williams)",
	  file:"salva_thatGirl.mp3",
	  img:"img/galaxies/laGalaxy/fof/popMassacre2.png",
	  info:"Salva rendition of 'That Girl' bears little resemblance to song it is remixing. Salva's remix mainly uses the vocals of the original to adorn his beat, rather than using it to define the melody and rhythms. Entering the realm of Trap music, the fast paced piece creates an undeniably catchy hook backed by a near spastic drum track. The repetition of the acapella sample mesmerizes the listener into a state of waking hypnosis, injecting energy into an already vibrant song. The BPM is constantly above average, and although this does not predefine the track as active, in the case of 'That Girl', it certainly does help.",
	  links:[
		  ["Soundcloud","https://soundcloud.com/salva"],
		  ["Pop Massacre 2","http://fofmusic.bandcamp.com/album/pop-massacre-2"],
		  ["Friends of Friends","http://www.fofmusic.net/"],
	  ],
	  
	  
	  //This is the distance away
	  //when the music starts playing
	  radius:1000,
	  
	  
	  //The Planets for this solar system
	  planets:{
		  numOf:50,
		  type:planetLib.type.sphere(800,10,10),
		  dataType: planetLib.type.sphere(800,10,10),
		  material:planetLib.material.colorNormal(0x700070),
		  position:planetLib.position.boxRand(10),
		  rotation:planetLib.rotation.fullCircle(50),	
	  },
	  
	  
	  //the Sun for this solar system
	  suns:{
		  type:sunLib.type.cube(50,50,50),
		  dataType:sunLib.type.cube(50,50,50),
		  material:sunLib.material.imgMaterial("img/galaxies/laGalaxy/fof/popMassacre2.png"),
	  },
	  
	  
	  
	  //the dust for this solar system
	  dust:dustLib.fofSS,
	  
	  
	  lights:{
		  numOf:1,
		  type: new THREE.DirectionalLight(0xffffff),
		  position:lightLib.position.center
		  
	  },
	  
	  //SECTIONS OF SOLAR SYSTEM 1
	  sections:[
		  {	
			  //parts of the first section
			  sun:{
				  vertex:sunLib.visual.vertex.freqBuldge,
			  },
			  planet:{
				  rotation:planetLib.visual.rotation.freqRotX,	
				  vertex:planetLib.visual.vertex.nFreqBuldge1,
			  },
			  dust:{
				  position:dustLib.visual.position.center,
				  rotation:dustLib.visual.rotation.nFreq,
				  scale:dustLib.visual.scale.freqXYZLess,
				  size:dustLib.visual.size.freq,
				  
			  },
			  light:{
				  position:lightLib.visual.position.freq,
				  color:lightLib.visual.color.freqWhite
			  },
			  //Time when the first section comes in
			  time:0
		  },
		  
		  
		  
	  ],
	  
	  //POSITION OF SOLAR SYSTEM
	  position:{
		  x:-2000,
		  y:-1000,
		  z:-3000
	  }
}



var octoOcto_smoothWest =	{


	  title:"Octo Octo - Smooth West",
	  file:"octoOcto_smoothWest.mp3",
	  img:"img/galaxies/laGalaxy/fof/showMeTheFuture.png",
	  info:"It would be difficult to classify Brooklyn-Based Octo Octa's music in the same genre as that of Jonwayne, Shlohmo, or other prominent producers on Friends of Friends. This being said, his clean, strict, house tracks bring diversity to the Northeast L.A. record label. 'Smooth West'  is rigid without being stiff, and terse while remaining lively. The acute claps structure the beat so that bouncing melodies can sit on top of the solid foundation. Round toms and spacey synths are added to the mix creating a regal beat that is still danceable. Undeterred during its entire duration, 'Smooth West' is a track with energy that does not let up.",
	  links:[
		  ["Show Me The Future","http://fofmusic.bandcamp.com/album/show-me-the-future-2"],
		  ["Friends of Friends","http://www.fofmusic.net/"],
	  ],
	  
	  
	  //This is the distance away
	  //when the music starts playing
	  radius:1000,
	  
	  
	  //The Planets for this solar system
	  planets:{
		  numOf:50,
		  type:planetLib.type.sphere(100,10,10),
		  dataType: planetLib.type.sphere(100,10,10),
		  material:planetLib.material.colorNormal(0x700070),
		  position:planetLib.position.boxRand(1000),
		  rotation:planetLib.rotation.fullCircle(50),	
	  },
	  
	  
	  //the Sun for this solar system
	  suns:{
		  type:sunLib.type.cube(50,50,50),
		  dataType:sunLib.type.cube(50,50,50),
		  material:sunLib.material.imgMaterial("img/galaxies/laGalaxy/fof/showMeTheFuture.png"),
	  },
	  
	  
	  
	  //the dust for this solar system
	  dust:dustLib.fofSS,
	  
	  
	  lights:{
		  numOf:1,
		  type:lightLib.type.point(0x440044,.1,200),
		  position:lightLib.position.center,
		  
		  
	  },
	  
	  //SECTIONS OF SOLAR SYSTEM 1
	  sections:[
		  {	
			  //parts of the first section
			  sun:{
				  vertex:sunLib.visual.vertex.freqBuldge,
			  },
			  planet:{
				  rotation:planetLib.visual.rotation.freqRotX,	
				  vertex:planetLib.visual.vertex.nFreqBuldge1,
				  position:planetLib.visual.position.orbit,
			  },
			  dust:{
				  position:dustLib.visual.position.center,
				  rotation:dustLib.visual.rotation.nFreq,
				  scale:dustLib.visual.scale.freqXYZLess,
				  size:dustLib.visual.size.freq,
				  
			  },
			  light:{
				  position:lightLib.visual.position.freq,
				  color:lightLib.visual.color.freqWhite
			  },
			  //Time when the first section comes in
			  time:0
		  },
		  
		  
		  
	  ],
	  
	  
	  //POSITION OF SOLAR SYSTEM
	  position:{
		  x:-3000,
		  y:3000,
		  z:-5000
	  }
}



var lolBoys_genieInABottle =	{


	  title:"LOL Boys - Genie In A Bottle",
	  file:"lolBoys_genieInABottle.mp3",
	  img:"img/galaxies/laGalaxy/fof/popMassacre2.png",
	  info:"Friends of Friends 'Pop Massacre' series is self descriptive, except for the fact that most of the songs bring new life to more or less bland pop hits. LOL Boys remix of  'Genie in a Bottle' is one such track. Intensely emotional, the track both quotes the original song while going far beyond the traditional  'introduction, chorus, refrain, chorus' structure that the vast majority of pop music is stuck in. The sounds vary from intense bouncing toms, to sweeping EDM synths, giving the listener the best of both worlds. Although the song starts with the melody in full, by the end of the track, the LOL Boys have indiscriminately dissected Aguilera's distinct vocals for their own nefarious purposes. The LOL boys not only massacre this track, they also give the remains a life of their own.",
	  links:[
		  ["Facebook","http://www.facebook.com/lolboys"],
		  ["Pop Massacre 2","http://fofmusic.bandcamp.com/album/pop-massacre-2"],
		  ["Friends of Friends","http://www.fofmusic.net/"],
	  ],
	  
	  //This is the distance away
	  //when the music starts playing
	  radius:1000,
	  
	  
	  //The Planets for this solar system
	  planets:{
		  numOf:50,
		  type:planetLib.type.sphere(100,10,10),
		  dataType: planetLib.type.sphere(100,10,10),
		  material:planetLib.material.colorNormal(0x700070),
		  position:planetLib.position.boxRand(100),
		  rotation:planetLib.rotation.fullCircle(50),	
	  },
	  
	  
	  //the Sun for this solar system
	  suns:{
		  type:sunLib.type.cube(200,200,200),
		  dataType:sunLib.type.cube(200,200,200),
		  material:sunLib.material.imgMaterial("img/galaxies/laGalaxy/fof/popMassacre2.png"),
	  },
	  
	  
	  
	  //the dust for this solar system
	  dust:dustLib.fofSS,
	  
	  
	  lights:{
		  numOf:1,
		  type: new THREE.DirectionalLight(0xffffff),
		  position:lightLib.position.center
		  
	  },
	  
	  //SECTIONS OF SOLAR SYSTEM 1
	  sections:[
		  {	
			  //parts of the first section
			  sun:{
				  vertex:sunLib.visual.vertex.freqBuldge,
			  },
			  planet:{
				  rotation:planetLib.visual.rotation.freqRotX,	
				  vertex:planetLib.visual.vertex.nFreqBuldge1,
				  position:planetLib.visual.position.out
			  },
			  dust:{
				  position:dustLib.visual.position.center,
				  rotation:dustLib.visual.rotation.nFreq,
				  scale:dustLib.visual.scale.freqXYZLess,
				  size:dustLib.visual.size.freq,
				  
			  },
			  light:{
				  position:lightLib.visual.position.freq,
				  color:lightLib.visual.color.freqWhite
			  },
			  //Time when the first section comes in
			  time:0
		  },
		  
		  
		  
	  ],
	  
	  
	  
	  //POSITION OF SOLAR SYSTEM
	  position:{
		  x:2000,
		  y:-5000,
		  z:3000
	  }
}


var jonwayne_maxwellsSilverHammer =	{


	  title:"Jon Wayne - Maxwell's Silver Hammer",
	  file:"jonwayne_maxwellsSilverHammer.mp3",
	  img:"img/galaxies/laGalaxy/fof/popMassacre2.png",
	  info:"It is quite a task to cover a band as legendary as the beatles, and even more of one to do it well. LA based Jonwayne, however,  accomplishes this feat with exceptional aptitude. Filled with the sounds of dusty vinyl and tremolo organs, Jonwayne's rendition of 'Maxwell's Silver Hammer' is dreamy description of a long defunct carnival. Its bumbling melody plods along, reflecting the goofy original. Although the majority of the song sounds like it could have been created years ago, Jonwayne makes sure to let the viewer know that this song was infact released in 2011, by the absolutely out of place wub of a dubstep bass. This ends the song in as ludicrous of a manner as any Beatle cover should, giving them both the comedic and lyrical justice they deserve.",
	  links:[
		  ["Soundcloud","https://soundcloud.com/jonwayne"],
		  ["Pop Massacre 2","http://fofmusic.bandcamp.com/album/pop-massacre-2"],
		  ["Friends of Friends","http://www.fofmusic.net/"],
	  ],
	  
	  
	  radius:1000,
	  
	  
		  //The Planets for this solar system
	  planets:{
		  numOf:50,
		  type:planetLib.type.sphere(100,10,10),
		  dataType: planetLib.type.sphere(100,10,10),
		  material:planetLib.material.colorNormal(0x700070),
		  position:planetLib.position.fullCircle(400,50),
		  rotation:planetLib.rotation.fullCircle(50),	
	  },
	  
	  
	  //the Sun for this solar system
	  suns:{
		  type:sunLib.type.cube(100,100,100),
		  dataType:sunLib.type.cube(100,100,100),
		  material:sunLib.material.imgMaterial("img/galaxies/laGalaxy/fof/popMassacre2.png"),
	  },
	  
	  
	  
	  //the dust for this solar system
	  dust:dustLib.fofSS,
	  
	  
	  lights:{
		  numOf:1,
		  type: new THREE.DirectionalLight(0xffffff),
		  position:lightLib.position.center
		  
	  },
	  
	  //SECTIONS OF SOLAR SYSTEM 1
	  sections:[
		  {	
			  //parts of the first section
			  sun:{
				  vertex:sunLib.visual.vertex.freqBuldge,
			  },
			  planet:{
				  //rotation:planetLib.visual.rotation.freqRotX,	
				  vertex:planetLib.visual.vertex.nFreqBuldge1,
				  //position:planetLib.visual.position.orbit,
			  },
			  dust:{
				  position:dustLib.visual.position.center,
				  rotation:dustLib.visual.rotation.nFreq,
				  scale:dustLib.visual.scale.freqXYZLess,
				  size:dustLib.visual.size.freq,
				  
			  },
			  light:{
				  position:lightLib.visual.position.freq,
				  color:lightLib.visual.color.freqWhite
			  },
			  //Time when the first section comes in
			  time:0
		  },
		  
		  
		  
	  ],
	  
	  
	  
	  
	  //POSITION OF SOLAR SYSTEM
	  position:{
		  x:4000,
		  y:0,
		  z:-6000
	  }
}





var djao_timeToStopWaiting =	{


	  title:"DJAO - Time To Stop Waiting",
	  file:"djao_timeToStopWaiting.mp3",
	  img:"img/galaxies/laGalaxy/fof/showMeTheFuture.png",
	  info:"'Time to Stop Waiting' doesn't just give you direction via its title. As you listen to it, you can't help but stop waiting. The strumming of a warm electric guitar introduces you to the Jacques Greene-esc beat. Staccato plucking takes off where the guitar's chords end, and are answered by two arctic tones to finish off the phrase. The song continues to race across the tundra it has created with the addition of gossamer voices and sharp snares. Although there are moments of reprieve, they only add to the track's sense of urgency. Though tender, 'Time To Stop Waiting' creates a drive that only a winter chill could provide.",
	  links:[
		  ["DJAO Website","http://djaomusic.com/"],
		  ["Show Me The Future","http://fofmusic.bandcamp.com/album/show-me-the-future-2"],
		  ["Friends of Friends","http://www.fofmusic.net/"],
	  ],
	  
	  //TODO CREATE A VISUALIZE FUNCTION THAT IS BLANK, 
	  //BUT IS SWITCHED TO THE DIFFERENT 
	  //VISUALIZERS OF THE DIFFERENT SECTIONS
	  
	  
	  //This is the distance away
	  //when the music starts playing
	  radius:1000,
	  
	  
		  //The Planets for this solar system
	  planets:{
		  numOf:50,
		  type:planetLib.type.sphere(100,5,20),
		  dataType: planetLib.type.sphere(100,5,20),
		  material:planetLib.material.colorNormal(0x700070),
		  position:planetLib.position.fullSphere(300,50),
		  rotation:planetLib.rotation.fullCircle(50),	
	  },
	  
	  
	  //the Sun for this solar system
	  suns:{
		  type:sunLib.type.cube(100,100,100),
		  dataType:sunLib.type.cube(100,100,100),
		  material:sunLib.material.imgMaterial("img/galaxies/laGalaxy/fof/showMeTheFuture.png"),
	  },
	  
	  
	  
	  //the dust for this solar system
	  dust:dustLib.fofSS,
	  
	  
	  lights:{
		  numOf:1,
		  type: new THREE.DirectionalLight(0xffffff),
		  position:lightLib.position.center
		  
	  },
	  
	  //SECTIONS OF SOLAR SYSTEM 1
	  sections:[
		  {	
			  //parts of the first section
			  sun:{
				  vertex:sunLib.visual.vertex.freqBuldge,
			  },
			  planet:{
				  rotation:planetLib.visual.rotation.freqRotX,	
				  vertex:planetLib.visual.vertex.nFreqBuldge1,
				  //position:planetLib.visual.position.orbit,
			  },
			  dust:{
				  position:dustLib.visual.position.center,
				  rotation:dustLib.visual.rotation.nFreq,
				  scale:dustLib.visual.scale.freqXYZLess,
				  size:dustLib.visual.size.freq,
				  
			  },
			  light:{
				  position:lightLib.visual.position.freq,
				  color:lightLib.visual.color.freqWhite
			  },
			  //Time when the first section comes in
			  time:0
		  },
	
		  
	  ],
	  
	  //POSITION OF SOLAR SYSTEM
	  position:{
		  x:5000,
		  y:3000,
		  z:5000
	  }
}
