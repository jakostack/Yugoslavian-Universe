

var austinPeralta_epilogueRenaissanceBubbles =	{

		title:"Austin Peralta - Epilogue: Renaissance Bubbles",
		file:"austinPeralta_epilogueRenaissanceBubbles.mp3",
		img:"img/galaxies/laGalaxy/brainfeeder/endlessPlanets.jpg",
		info:"Austin Peralta was a revolutionary individual in the world of jazz. His album Endless Planets was not only widely accepted, but truly bridged the gap between traditional Jazz and experimental Electronica. Peralta's dazzling display of creative and technical prowess is prevalent throughout the album and 'Renaissance Bubbles' is another, gentler, example of this.  The song is spacious, filled with echoes and reverb. Its is calm and quiet, while still providing the listener with a myriad of babbles and bubbles to examine and ingest. On other tracks throughout the album, such as Algiers, Peralta displays his technical chops, but this epilogue shows the true range of his infallible creations.",
		links:[
			["Austin Peralta","http://www.austinperalta.com/"],
			["Brainfeeder","http://www.brainfeedersite.com/"],
		],
		
		
		//This is the distance away
		//when the music starts playing
		radius:2000,
		
		
		//The Planets for this solar system
		planets:{
			numOf:50,
			type:planetLib.type.knot4(10,5,5),
			dataType: planetLib.type.knot4(10,5,5),
			scale:[3,3,3],
			material:planetLib.material.colorNormal(0xa04010),
			position:planetLib.position.loopDLoop(500,50),
			rotation:planetLib.rotation.fullCircle(50),	
		},
		
		
		//the Sun for this solar system
		suns:{
			type:sunLib.type.cube(50,50,50),
			dataType:sunLib.type.cube(50,50,50),
			material:sunLib.material.imgMaterial("img/galaxies/laGalaxy/brainfeeder/endlessPlanets.jpg"),
		},
		
		
		//the dust for this solar system
		dust:dustLib.brainfeederSS,
		
		lights:{
			numOf:2,
			type: new THREE.DirectionalLight(0x111111),
			position:lightLib.position.line(2000,2)
			
		},
		
		//SECTIONS OF SOLAR SYSTEM 1
		sections:[
			{	
				//parts of the first section
				sun:{
					vertex:sunLib.visual.vertex.freqBuldge 
				},
				planet:{
					rotation:planetLib.visual.rotation.camPosZ0Y,
					vertex:planetLib.visual.vertex.hackNight4		
				},
				dust:{
					position:dustLib.visual.position.center,
					rotation:dustLib.visual.rotation.nFreq,
					scale:dustLib.visual.scale.freqHalfLess,
					size:dustLib.visual.size.freq
				},
				lightVis:{
					color:lightLib.visual.color.freqRed	
				},
				
				//Time when the first section comes in
				time:0
			},
			
			
			
		],
		
		
		//POSITION OF SOLAR SYSTEM
		position:{
			x:5000,
			y:5000,
			z:5000,
		}
}




var flyingLotus_doTheAstralPlane =	{


		title:"Flying Lotus - Do The Astral Plane",
		file:"flyingLotus_doTheAstralPlane.mp3",
		img:"img/galaxies/laGalaxy/brainfeeder/cosmogramma.png",
		info:"'Do the Astral Plane' has become one of the staples of L.A. beat music, and for rightful reasons. It is massively meticulous while remaining thoroughly enjoyable. The rhythm is immediately defined by the pulsing distortion of vocal chords.These chords are soon after joined by vocal scatting, which introduces the defined shuffle and bassline present throughout the song. The first melody comes from the baseline, and as the song progresses more and more, tracks are layered until a complete texture is created. Sweeping violins add emotion while the multitude of different rhythmic and harmonic ideas move in and out of existence, bringing the track to life. More than just enjoyable, the track is truly vitalizing.",
		links:[
			["Flying Lotus Website","http://www.flying-lotus.com/"],
			["Brainfeeder","http://www.brainfeedersite.com/"],
		],
		
		//This is the distance away
		//when the music starts playing
		radius:2000,
		
		
		//The Planets for this solar system
		planets:{
			numOf:50,
			type:planetLib.type.sphere(500,5,5),
			dataType: planetLib.type.sphere(500,5,5),
			material:planetLib.material.colorNormal(0xa04010),
			position:planetLib.position.center(),
			rotation:planetLib.rotation.fullCircle(50),	
		},
		
		
		//the Sun for this solar system
		suns:{
			type:sunLib.type.cube(100,100,100),
			dataType:sunLib.type.cube(100,100,100),
			material:sunLib.material.imgMaterial("img/galaxies/laGalaxy/brainfeeder/cosmogramma.png"),
		},
		
		
		//the dust for this solar system
		dust:dustLib.brainfeederSS,
		
		lights:{
			numOf:2,
			type: new THREE.DirectionalLight(0x111111),
			position:lightLib.position.line(2000,2)
			
		},
		
		//SECTIONS OF SOLAR SYSTEM 1
		sections:[
			{	
				//parts of the first section
				sun:{
					vertex:sunLib.visual.vertex.freqBuldge 
				},
				planet:{
					rotation:planetLib.visual.rotation.camPosZ0Y,
					vertex:planetLib.visual.vertex.nFreqBuldge		
				},
				dust:{
					position:dustLib.visual.position.center,
					rotation:dustLib.visual.rotation.nFreq,
					scale:dustLib.visual.scale.freqHalfLess,
					size:dustLib.visual.size.freq
				},
				lightVis:{
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
			z:-5000,
		}
}





var flyingLotus_hunger =	{


		title:"Flying Lotus - Hunger ft. Niki Randa",
		file:"flyingLotus_hunger.mp3",
		img:"img/galaxies/laGalaxy/brainfeeder/untilTheQuietComes.png",
		info:"'Hunger' is defined by the elegant vocals of Niki Randa and expansive basslines of Thundercat. The entire track is haunting, and as it rolls in and out of dark driving drums and solemn lyrics it consumes the listener with a power similar in many ways to Tool's '10,000 Days'. The first passage ends with a prominent vocal melody which brings the song to near silence as it waits for the next foreboding section. The next segment is introduced by a sparkling harmonic texture soon joined by an astonishingly sensitive, mixed meter melody in the bass which lulls the song forward. Each sophisticatedly lopsided measure pulls the listener further and further into the abyss of sound that Flying Lotus discerningly creates. It is absolutely lush, from its beginning, until the quiet comes.",
		links:[
			["Flying Lotus Website","http://www.flying-lotus.com/"],
			["Brainfeeder","http://www.brainfeedersite.com/"],
		],
		
		//This is the distance away
		//when the music starts playing
		radius:2000,
		
		
		//The Planets for this solar system
		planets:{
			numOf:50,
			type:planetLib.type.knot3(10,5,5),
			dataType: planetLib.type.knot3(10,5,5),
			scale:[3,3,3],
			material:planetLib.material.colorNormal(0xa04010),
			position:planetLib.position.center(),
			rotation:planetLib.rotation.fullCircle(50),	
		},
		
		
		//the Sun for this solar system
		suns:{
			type:sunLib.type.cube(50,50,50),
			dataType:sunLib.type.cube(50,50,50),
			material:sunLib.material.imgMaterial("img/galaxies/laGalaxy/brainfeeder/untilTheQuietComes.png"),
		},
		
		
		//the dust for this solar system
		dust:dustLib.brainfeederSS,
		
		lights:{
			numOf:2,
			type: new THREE.DirectionalLight(0x111111),
			position:lightLib.position.line(2000,2)
			
		},
		
		//SECTIONS OF SOLAR SYSTEM 1
		sections:[
			{	
				//parts of the first section
				sun:{
					vertex:sunLib.visual.vertex.freqBuldge 
				},
				planet:{
					rotation:planetLib.visual.rotation.camPosZ0Y,
					vertex:planetLib.visual.vertex.nFreqBuldge		
				},
				dust:{
					position:dustLib.visual.position.center,
					rotation:dustLib.visual.rotation.nFreq,
					scale:dustLib.visual.scale.freqHalfLess,
					size:dustLib.visual.size.freq
				},
				lightVis:{
					color:lightLib.visual.color.freqRed	
				},
				
				//Time when the first section comes in
				time:0
			},
			
			
			
		],
		
		
		//POSITION OF SOLAR SYSTEM
		position:{
			x:0,
			y:1000,
			z:5000,
		}
}




var lapalux_gutterGlitter =	{


		title:"Lapalux - Gutter Glitter",
		file:"lapalux_gutterGlitter.mp3",
		img:"img/galaxies/laGalaxy/brainfeeder/brainfeederSampler.png",
		info:"'Gutter Glitter' is one of those songs, whose chorus could be looped for eternity and still feel like it is progressing. Although it starts with a single sample, it soon is layered to a point where over the course of a single bar, a plethora of sounds carry the main melodic melody. From vocals to synths and samples to drums, each different noise gets it own instance as the main focal point of the song. This gives the listener a view of a shimmering object, glittering with noise as it slowly rotates.",
		links:[
			["Lapalux Website","http://www.lapalux.com/"],
			["Brainfeeder","http://www.brainfeedersite.com/"],
		],
		
		//This is the distance away
		//when the music starts playing
		radius:2000,
		
		
		//The Planets for this solar system
		planets:{
			numOf:50,
			type:planetLib.type.knot2(10,10,10),
			dataType:planetLib.type.knot2(10,10,10),
			material:planetLib.material.colorNormal(0xa04020),
			position:planetLib.position.fullCircle(500,50),
			scale:[2,3,1],
			rotation:planetLib.rotation.fullCircleY(50),	
		},
		
		
		//the Sun for this solar system
		suns:{
			type:planetLib.type.sphere(10,5,5),
			dataType:planetLib.type.sphere(10,5,5),
			material:planetLib.material.colorNormal(0xa0a000),
		},
		
		
		//the dust for this solar system
		dust:dustLib.brainfeederSS,
		
		lights:{
			numOf:5,
			type: new THREE.DirectionalLight(0xffffff),
			position:lightLib.position.randomBox(200)
			
		},
		
		//SECTIONS OF SOLAR SYSTEM 1
		sections:[
			{	
				//parts of the first section
				sun:{
					vertex:sunLib.visual.vertex.spike,
					rotation:planetLib.visual.rotation.freqXcamZ
				},
				planet:{
					vertex:planetLib.visual.vertex.hackNight7_small,
					//rotation:planetLib.visual.rotation.freqXcamZ,
					position:planetLib.visual.position.sinPlacement,
					
				},
				dust:{
					rotation:dustLib.visual.rotation.freqX,
					scale:dustLib.visual.scale.freqZeroXYZ,
					size:dustLib.visual.size.freq	
				},
				
				
				
				//Time when the first section comes in
				time:0
			},
			
		],
		
		//POSITION OF SOLAR SYSTEM
		position:{
			x:0,
			y:-5000,
			z:0
		}
}



var teebs_doubleFifths =	{


		title:"Teebs - Double Fifths",
		file:"teebs_doubleFifths.mp3",
		img:"img/galaxies/laGalaxy/brainfeeder/ardour.png",
		info:"Teebs, like many of the Brainfeeder artists, is extraordinarily adept at creating luscious sound scenes. 'Double Fifths' does this by providing a solid thumping bass beat while adding layer upon layer of new rhythmic tones. This provides a structure for an aethereal sparkling chorus to float on top of. This melody airly drifts down the stream of sound the textures create. Sub currents emerge with new bass lines, but the song always moves you forward. Lackadaisically coasting from verse to verse, 'Double Fifths' sweeps you away into a vibrant wonderland, and keeps you there until its eventual demise.",
		links:[
			["Teebs Soundcloud","https://soundcloud.com/teebsio"],
			["Brainfeeder","http://www.brainfeedersite.com/"],
		],
		
		//This is the distance away
		//when the music starts playing
		radius:1000,
		
		
		//The Planets for this solar system
		planets:{
			numOf:100,
			type:planetLib.type.cube(500,10,10),
			dataType: planetLib.type.cube(500,10,10),
			material:planetLib.material.colorNormal(0xa0a000),
			position:planetLib.position.fullCircle(200,100),
			rotation:planetLib.rotation.fullCircle(100),	
		},
		
		
		//the Sun for this solar system
		suns:{
			type:planetLib.type.knot4(5,5,5),
			dataType:planetLib.type.knot4(5,5,5),
			scale:[2,2,2],
			material:planetLib.material.colorNormal(0xa0a000),
		},
		
		
		//the dust for this solar system
		dust:dustLib.brainfeederSS,
		
		lights:{
			numOf:5,
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
					rotation:planetLib.visual.rotation.freqXcamZ,
					position:planetLib.visual.position.sinPlacement,
					vertex:planetLib.visual.vertex.hackNight2
					
				},
				dust:{
					rotation:dustLib.visual.rotation.freqX,
					scale:dustLib.visual.scale.freqZeroXYZ,
					size:dustLib.visual.size.freq	
				},
				
				
				
				//Time when the first section comes in
				time:0
			},
			
			
			
		],
		
		
		
		
		//POSITION OF SOLAR SYSTEM
		position:{
			x:3000,
			y:-3000,
			z:0
		}
}




var thundercat_forLove =	{


		title:"Thundercat - For Love (I Come Your Friend)",
		file:"thundercat_forLove.mp3",
		img:"img/galaxies/laGalaxy/brainfeeder/brainfeederSampler.png",
		info:"There is no doubt that Thundercat is a virtuosic bass player. Through the course of his lengthy career he has not only been featured on tracks by Erykah Badu, Shafiq Husayn and Bilal, but was also part of a boy band and Suicidal Tendencies. On this specific track, however, he needs no history to speak for him.<br/><br/>The rumbling bassline creates a stage for Thundercat's robust yet relaxed vocals to delicately adorn. His soulful singing eases you into his elegant rendition of George Duke's original 'For Love (I Come Your Friend)'. Midway through the track, after Thundercat's vocal proclamation, the drums kick in, and for the next minute Thundercat displays why he has been featured on so many projects over the past decade. Although there is no telling where Thundercat will go next, it is obvious that his time with Brainfeeder is well spent.",
		links:[
			["Thundercat Youtube Playlist",
			"http://www.youtube.com/watch?v=ISvcOoWW2tg&playnext=1&list=ALYL4kY05133rMBPGYxrqBNdMovOsSQdmc"],
			["Brainfeeder","http://www.brainfeedersite.com/"],
		],
		
		//This is the distance away
		//when the music starts playing
		radius:2000,
		
		
		//The Planets for this solar system
		planets:{
			numOf:100,
			type:planetLib.type.knot1(10,10,10),
			dataType:planetLib.type.knot1(10,10,10),
			material:planetLib.material.colorNormal(0xa0700f),
			position:planetLib.position.fullSphere(500,100),
			scale:[3,3,3],
			rotation:planetLib.rotation.fullCircle(100),	
		},
		
		
		//the Sun for this solar system
		suns:{
			type:planetLib.type.cube(50,50,50),
			dataType:planetLib.type.cube(50,50,50),
			material:planetLib.material.colorNormal(0xa0a000),
		},
		
		
		//the dust for this solar system
		dust:dustLib.brainfeederSS,
		
		lights:{
			numOf:5,
			type: new THREE.DirectionalLight(0xffffff),
			position:lightLib.position.randomBox(200)
			
		},
		
		//SECTIONS OF SOLAR SYSTEM 1
		sections:[
			{	
				//parts of the first section
				sun:{
					vertex:sunLib.visual.vertex.freqBuldge,
					rotation:planetLib.visual.rotation.freqXcamZ
				},
				planet:{
					vertex:planetLib.visual.vertex.hackNight6,
					rotation:planetLib.visual.rotation.freqXcamZ,
					position:planetLib.visual.position.sinPlacement,
					
					
				},
				dust:{
					rotation:dustLib.visual.rotation.freqX,
					scale:dustLib.visual.scale.freqZeroXYZ,
					size:dustLib.visual.size.freq	
				},
				
				
				
				//Time when the first section comes in
				time:0
			},
			
		],
		
		//POSITION OF SOLAR SYSTEM
		position:{
			x:5000,
			y:2000,
			z:0
		}
}




var tokimonsta_brightShadows =	{


		title:"Tokimonsta - Bright Shadows ",
		file:"tokimonsta_brightShadows.mp3",
		img:"img/galaxies/laGalaxy/brainfeeder/brainfeederSampler.png",
		info:"TOKiMONSTA was the first female to join the Brainfeeder crew, which is quite an accomplishment considering how male dominated the genre is. Although she recently was signed to Ultra Records, her time at brainfeeder was extremely productive and saw the creation of unfathomably danceable tracks such as 'Bright Shadows'.<br/><br/>Like many Brainfeeder tracks, 'Bright Shadows' starts off with a short textural introduction. It quickly defines the groove by harnessing simple harmonic notions, and a steady shaker layer. The track is set in full motion as the drums enter, adding to the intricacy of an already elaborate track. This rhythm continues through the rest of the piece, and although it stumbles at moments, it is only so when its structure returns, its strength is doubled. The song's end, though abrupt, only lets you know how much you want to listen to the track again.",
		links:[
			["Tokimonsta Website","http://www.tokimonsta.com/"],
			["Brainfeeder","http://www.brainfeedersite.com/"],
		],
		
		
		//This is the distance away
		//when the music starts playing
		radius:2000,
		
		
		//The Planets for this solar system
		planets:{
			numOf:20,
			type:planetLib.type.sphere(500,10,10),
			dataType: planetLib.type.sphere(500,10,10),
			material:planetLib.material.colorNormal(0xa0a000),
			position:planetLib.position.center(),
			rotation:planetLib.rotation.fullCircle(20),	
		},
		
		
		//the Sun for this solar system
		suns:{
			type:sunLib.type.cube(1000,1000,1000),
			dataType:sunLib.type.cube(1000,1000,1000),
			material:planetLib.material.colorNormal(0xa0a000),
		},
		
		
		//the dust for this solar system
		dust:dustLib.brainfeederSS,
		
		lights:{
			numOf:5,
			type: new THREE.DirectionalLight(0xffffff),
			position:lightLib.position.randomBox(200)
			
		},
		
		//SECTIONS OF SOLAR SYSTEM 1
		sections:[
			{	
				//parts of the first section
				sun:{
					vertex:sunLib.visual.vertex.freqBuldge,
					rotation:planetLib.visual.rotation.freqXcamZ
				},
				planet:{
					rotation:planetLib.visual.rotation.freqX,
					vertex:planetLib.visual.vertex.hackNight8
				},
				dust:{
					rotation:dustLib.visual.rotation.freqX,
					scale:dustLib.visual.scale.freqZeroXYZ,
					size:dustLib.visual.size.freq	
					
				},
				
				
				
				//Time when the first section comes in
				time:0
			},
			
			
			
		],
		
		
		//POSITION OF SOLAR SYSTEM
		position:{
			x:-2000,
			y:0,
			z:0
		}
}
