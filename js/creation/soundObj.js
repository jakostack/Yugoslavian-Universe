SOUNDOBJ.prototype = {
	
	
	/*
		this snippet; 
		
		var newObj = this
		if(whichObj){
			newObj = whichObj	
		}
		
		is used in various functions so that the
		parent or child can be passed through
		and become the new  object of focus
	
	*/
	
	
	//Function to add Objects, making sure they are '!alive'
	//then adding them to the scene, making them 'alive'
	addObjects:function(whichObj){
		var newObj = this
		if(whichObj){
			newObj = whichObj	
		}
		
		if(newObj.alive == false){
			for(var propt in newObj.objects){
				newObj.objects[propt].addAll()
			}
		}
		newObj.alive = true
	},
	
	//Opposite of adding objects	
	removeObjects:function(whichObj){
		
		var newObj = this
		if(whichObj){
			newObj = whichObj	
		}
		
		if(newObj.alive == true){
			for(var propt in newObj.objects){
				newObj.objects[propt].removeAll()
			}
		}
		
		newObj.alive = false
	},
	
	
	//Adds all children of a scene
	addChildren:function(whichObj){
		
		var newObj = this
		if(whichObj){
			newObj = whichObj	
		}
		
		for(var i = 0; i<newObj.children.length;i++){
			newObj.children[i].addObjects(newObj.children[i]);		
		}
		
	},
	
	removeChildren:function(whichObj){
		
		var newObj = this
		if(whichObj){
			newObj = whichObj	
		}
		
		for(var i = 0; i<newObj.children.length;i++){
			newObj.children[i].removeObjects(newObj.children[i]);
		}
	},
	
	checkAudio:function(){
		if(this.parent){
	  
            if(!this.parent.audio.audio){
			  
			}else{
			  this.parent.audio.stop()
			}
		}
		if(this.children){
			for(var i =  0; i< this.children.length;i++){
				
				if(!this.children[i].audio.audio){
			       
                }else{
					this.children[i].audio.stop()
				}
			}
			
		}
        
		
	},
	
	//function to be called when are is entered
	enter:function(whichObj){
	
		var newObj = this
		if(whichObj){
			newObj = whichObj	
		}

             		
		//Makes sure no other audio is playing
		newObj.checkAudio()
		
		//Audio
		newObj.audio.start()
		
		
		//TravelLog / Blog
		newObj.addToTravelLog()
		newObj.addBlogInfo()
	
        //First Attempt at 'Z Fighting' by dynamically changing near and far
		camera.far  = newObj.radius*10
		camera.near = newObj.radius/1000
		camera.updateProjectionMatrix();
		
		//controls.movementSpeed = newObj.radius/1000
		if(newObj.parent){
		
          //changes controls for the leap (or non leap)
          if(leapControls == false){
              controls.maxSpeed = newObj.radius/5
              controls.acceleration = newObj.radius/500
          }else{
              controls.maxSpeed = newObj.radius/5
              controls.acceleration = newObj.radius/1000
              
          }
	
	
		//If we are in the ultimate universe
		//make movement much slower, so that its harder to reach the secret level
		}else{
			
			//changes controls for the leap (or non leap)
			if(leapControls ==false){
				controls.maxSpeed = newObj.radius/20
				controls.acceleration = newObj.radius/1000
			}else{
				controls.maxSpeed = newObj.radius/5
				controls.acceleration = newObj.radius/10000
			}
		}
		
		
		if(newObj.parent){
			
			//removes all the objects of the parents
			//as well as the parents children
			newObj.parent.removeObjects(newObj.parent)
			for(var i=0; i < newObj.parent.children.length; i++){
				if(newObj.parent.children[i] != newObj){
					newObj.parent.children[i].removeObjects(newObj.parent.children[i])
				}
			}
			
			newObj.addObjects()
			
		}else{
			newObj.addObjects()
		}
		
		
		if(newObj.children){
			newObj.addChildren()
		}
		
		//assign current to this
		current = newObj
		
	},
	
	//function to be called when area is left (and parent entered)
	exit:function(whereToEnter){
		
        
		//If this one has a parent, exit to it
		if(this.parent){
			//remove all the children of this level
			if(this.children){
				this.removeChildren()
			}

			//The only way that exit will be called is if it enters its parent

			//If there is somewhere specific to enter, enter that region
			if(whereToEnter){
			
              

				//TODO,
				//create function that finds object by id
				this.enter(whereToEnter)
			}

			//otherwise enter the parent
			
			this.enter(this.parent)
			
		//If there is no parent, takes user to random sound Object
		}


       		
        
	
	},
	
	
	//checks the children to see if they are entered
	//and checks to see if the area is exited
	check:function(){
		this.getPosToCamera()
		if(this.children){
			this.checkChildren()
		}
	
		this.checkExit()
		
	},
	
	
	//checks Children, to see if any of them are close enought to enter
	checkChildren:function(){
		for(var i = 0; i< this.children.length; i++){
			this.children[i].checkEnter()
		}
	},
	
	
	
	/*
	
		THESE SECTIONS NEED WORK!
	
		specifically, they will be the sections we use in order to make the transitions between scenes
		'smooth', right now this is done by 'scaling' scenes, as well as assigning 'opacity' to the parent scenes objects
		the issue is that 'opacity' needs to go to 1, no matter what! even when a user uses the travel log...
	
	*/
	
	checkEnter:function(){
		this.getPosToCamera()
		
		
		//NEED TO MAKE SURE THAT SCALE ALWAYS GOES TO 1 ! 
	
		if(this.posToCamera.d < (this.radius +this.radius/4)){
			
			//gets a value between 1 & 0 to determine the radius
			var opacity = (this.posToCamera.d-this.radius)/(this.radius/4)
			
			if(opacity >=.9){
				opacity = 1 - 0.001
			}
			
			
			//scene.fog.density = .00001/opacity
			
			if(this.parent){
				
				//Fades Out objects in parent area
				for(var propt in this.parent.objects){
					if(propt != 'lights' ){
   						this.parent.objects[propt].array[0].material.opacity = opacity
						
					}
				}	
			
			
				if(this.parent.children){
				
					//Fades out all children except the one we are moving into
					for(var i = 0; i < this.parent.children.length; i++){
						
						if(this.parent.children[i] != this){
							var obj = this.parent.children[i]
							obj.scene.scale.x = opacity+0.001
							obj.scene.scale.y = opacity+0.001
							obj.scene.scale.z = opacity+0.001
						
						}
					}
				
				}
				
				//changes gain for the music context to elegantly fade in and out
				gain.gain.value = 0.5 * opacity
			}
			
			
		}
	//*/
		
		
		if(this.posToCamera.d < this.radius){
			this.enter(this)	
		}
	},
	
	checkExit:function(){
		
		
		
		//NEED TO MAKE SURE SCALE ALWAYS GOES TO 1 !
		if(this.posToCamera.d > this.radius-(this.radius/4)){
			var opacity = (this.radius-this.posToCamera.d)/(this.radius/4)
			
			if(opacity >=.9){
				opacity = 1 - 0.001
			}
			
			
			if(this.children){
				for(var i = 0; i <this.children.length ; i++){
					var obj = this.children[i]
					
					this.children[i].scene.scale.x = opacity+0.001
					this.children[i].scene.scale.y = opacity+0.001
					this.children[i].scene.scale.z = opacity+0.001
					
				}
			}
			
			gain.gain.value = 0.5 * opacity
		}
	
				

		if(this.posToCamera.d > this.radius){
			
			// the below if statment is to take users to a 'secret' level
			// which has not been fully implemented yet,
			// but will probably be credits, or something of the sort
			if(this.parent){
				//if(!this.params.secret){
				this.exit()	
				/*}else{
					camera.position.x = 6000000
					camera.position.y = 0
					camera.position.z = 0
					this.exit()		
				}*/
			}else{
				
				controls.movementSpeed = 0

                controls.acceleration = current.radius/500000
				secretEnter = this.children[0]
				camera.position.x = secretEnter.scene.position.x+(controls.forward.x*(secretEnter.radius*2))
				camera.position.y = secretEnter.scene.position.y+(controls.forward.y*(secretEnter.radius*2))
				camera.position.z = secretEnter.scene.position.z+(controls.forward.z*(secretEnter.radius*2))
				
				camera.lookAt(secretEnter.scene.position)
				
			
			}
		}
	
			

	},
	
	//gets the position to the camera	
	getPosToCamera:function(){
		
		this.posToCamera.x = camera.position.x - this.globalPos.x
		this.posToCamera.y = camera.position.y - this.globalPos.y
		this.posToCamera.z = camera.position.z - this.globalPos.z
		
		this.posToCamera.d = Math.sqrt(
			(this.posToCamera.x *this.posToCamera.x)+
			(this.posToCamera.y*this.posToCamera.y)+
			(this.posToCamera.z*this.posToCamera.z)
		)
		
		
		//Used for some of the visuals
		var polar  = cabMATH.toPolar(this.posToCamera.x,this.posToCamera.y,this.posToCamera.z)
		this.posToCamera.r = polar.r
		this.posToCamera.t = polar.t
		this.posToCamera.p = polar.p
	},
	
	
	//bubbles up parent tree until global position is determined
	getGlobalPos:function(whichObj,curPos){
		var self = this
	
		var toPass = {
			x:curPos.x,
			y:curPos.y,
			z:curPos.z	
		}
		if(self.parent){
			toPass.x += self.parent.scene.position.x
			toPass.y += self.parent.scene.position.y
			toPass.z += self.parent.scene.position.z
			self.parent.getGlobalPos(whichObj,toPass)
		}else{
			
			//sets the global position if there are no more parents
			whichObj.globalPos = toPass
			//hashArray.push(
			
		}
		
	},
	
	

	
	
	
	/*
		
		Travel Log / Blog
	
	*/
	
	addToTravelLog:function(){
		var self = this
		var linkAddFunction = function(){
			
			//hacking a bit, so you don't arrive right in the center,
			var newX= self.globalPos.x + ((Math.random()*self.radius)/20 - self.radius/40)
			var newY= self.globalPos.y + ((Math.random()*self.radius)/20 - self.radius/40)
			var newZ= self.globalPos.z + ((Math.random()*self.radius)/20 - self.radius/40)
		
			var functionToReturn = "moveToLocation("+newX+","+newY+","+newZ+")"
		
			var strToReturn = "<a onclick='"+functionToReturn+"'>"+self.title+"</a>"
			return strToReturn
		}
		
		var linkToAdd = linkAddFunction();
		
		var lastTravel
		if($("#travelLog a")[0]){
			lastTravel = $("#travelLog a")[0].innerHTML
		}
		
		if(self.title != lastTravel){
			$("#travelLog").prepend($(linkToAdd).fadeIn('slow'))
		}
		
	},
	

	addBlogInfo:function(){
		var self = this
		$("#title").fadeOut('slow',function(){
			var linkText = "<a onclick='toggleBlogInfo()'>"+self.title+"</a>"
			$("#title h1.blog").html(linkText)
			$("#title img.blog").attr("src",self.img)
			$("#blogLinks").html("")
			for(var i=0;i<self.links.length;i++){
				$("#blogLinks").append(function(){
					strToReturn ="<a target='_blank' href='"+self.links[i][1]+"'>"+self.links[i][0]+"</a>"
					return strToReturn
				})
			}
			$("#title").fadeIn('slow')	
		})
		
		//Shows and hides info.blog based on if there is information to show
		var infoBlogDisplay = $("#info.blog").css("display")
		
		function infoNoInfo(){
			if(self.info){
				$("#info.blog").html(self.info)
			}else{
				$("#info.blog").html("No Information for this section yet.")
			}
		}
		if(infoBlogDisplay=='block' ){
				$("#info.blog").slideToggle('slow',function(){
					infoNoInfo();
				});
		}else{
			infoNoInfo();
		}
		
	},
	
	
	
	/*
		
		INIT FUNCTIONS
	
	*/
	
	init:function(){
		
		//creates a new STREAM object from the file
		this.audio = new STREAM(this,this.params.file)
	
		//Creates blog info
		this.title = this.params.title
		this.info = this.params.info
		this.img = this.params.img
		this.links = this.params.links
		this.color = new THREE.Color(this.params.color)
		
			
		//Creates a scene for the cluster, that all of its children will be added to
		this.scene = new THREE.Object3D();
		this.scene.position.x = this.params.position.x
		this.scene.position.y = this.params.position.y
		this.scene.position.z = this.params.position.z
		
		if(this.parent){
			this.parent.scene.add(this.scene)
		}else{
			scene.add(this.scene)
		}
		
		
	
		//This will be boolean we will use to figure out if 
		//objects are part of the scene or not (used so that objects will not be 'readded')
		this.alive = false
		
		this.radius = this.params.radius
		
		//gets global position
		this.getGlobalPos(this, this.params.position);
		
		this.posToCamera = {}
		this.getPosToCamera()
		
		this.createObjects();
		this.createSections();
		this.createChildren();
		
		this.id = soundObjArray.length
		soundObjArray.push(this)
		
	},
	
	createObjects:function(){
		this.objects = {}
		
		/* ASSIGNS OBJECTS TO SCENE */
		
		if(this.params.suns){
			this.objects.suns = new OBJECTS(this , this.params.suns)
		}
		if(this.params.planets){
			this.objects.planets = new OBJECTS(this , this.params.planets)
		}
		if(this.params.lights){
			this.objects.lights =  new LIGHTS(this , this.params.lights)
		}
		if(this.params.dust){
			this.objects.dust = new DUST(this , this.params.dust)
		}
		
	},
	
	createSections:function(){
		
		//Creates sections for visualizations
		//although typically all sound objects will only have one section
		//want to keep it open to having more
		if(this.params.sections){
		
			this.sections = []
		
		
			for(var i = 0 ; i < this.params.sections.length; i++){
				var sectionToPush = new SECTION(this,this.params.sections[i]);
				this.sections.push(sectionToPush)
			}
			
			this.visualize =  function(fbd,fbc,n){
				for(var i=0; i< this.sections[0].visArray.length; i++){
					this.sections[0].visArray[i](fbd,fbc,n);			
				}	
			}
		}
		
	},
	
	
	
	
	
	createChildren:function(){
		//Creates children if there are any
		if(this.params.children){
			this.children = []
			
			if(!this.placingFunction){
				this.getPlacingFunction()
			}
		
			
			for(var i=0 ; i<this.params.children.length;i++){
			
				if(!this.params.children[i].position){
					this.placeChildren(i)
				}
				
				if(!this.params.children[i].radius){
					this.giveRadius(i)
				}
				
				
				if(!this.params.children[i].title){
					this.createTitle(i)
				}
				
				if(!this.params.children[i].img){
					this.params.children[i].img = this.params.img
				}
				if(!this.params.children[i].links){
					this.params.children[i].links = this.params.links
				}
				
				
				//pass through the kidObjs Array to its child
				if(!this.params.children[i].theme){
					this.params.children[i].theme = this.params.theme
				}
				
				
				//pass through the kidObjs Array to its child
				if(!this.params.children[i].color){
					this.params.children[i].color = this.params.color
				}
				
				
				
				if(this.params.children[i].theme && this.params.children[i].theme !='none'){
					var whichObj = this.params.children[i]
					createTheme(whichObj)	
				}
				
				var kidToPush = new SOUNDOBJ(this,this.params.children[i])
				
				this.children.push(kidToPush)
				
			}
			
		}
	},
	
	
	giveRadius:function(whichChild){
		this.params.children[whichChild].radius = this.radius/10	
	},
	
	
	
	//this gets called if the child doesn't have a position
	placeChildren:function(i){
		if(this.placingFunction){
			this.placingFunction(i)
		}else{
			console.log('SOMETHING IS WRONG WITH THE PLACING FUNCTION')
		}
		
	},
	
	getPlacingFunction:function(){
		//TODO
		//Create a an algorithm to find a new random placing function
		this.placingFunction = function(whichChild){
			this.params.children[whichChild].position = cabMATH.toCart(this.radius/2, ((2*Math.PI*whichChild)-Math.PI)/this.params.children.length , .00001)	
		}
	},

	
	//Short function to parse file of a section into a title
	createTitle:function(whichChild){
		
		var child = this.params.children[whichChild]
		var fileText = child.file
		
		var artist = fileText.split('_')[0]
		var Artist = cCtoSpace(artist)
		var song = fileText.split('_')[1].split('.mp3')[0]
		var Song = cCtoSpace(song)
		
		child.title = Artist + " - " + Song
	}
	
	
}



//Used to create new sound object
function SOUNDOBJ(){
	
	//get the parent. If Ultimate Object, set as null / undefined
	this.parent = arguments[0]
	this.params = arguments[1]
	this.init();
}

