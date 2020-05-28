STREAM.prototype = {
	
	createAudio:function (){ 
  		var audio = new Audio();
		audio.preload = "none"
		audio.src = this.file;
		audio.loop = true;
		this.audio=audio
	},
	
	createSource:function() {

    

       
        if(this.audio){ 

          this.source = this.musicContext.createMediaElementSource(this.audio);
          
          this.analyser= this.musicContext.createAnalyser();
          
          this.panner = this.musicContext.createPanner();
          
          this.panner.setPosition(
              this.whichSoundObj.globalPos.x,
              this.whichSoundObj.globalPos.y,
              this.whichSoundObj.globalPos.z
          );
        
          this.source.connect(this.panner)
          this.panner.connect(this.analyser)
          this.analyser.connect(gain)
       
         

        }else{
        
        }

	},

	start:function(){	
		
		this.createAudio();
		var self = this

		if(self.source !== undefined){
			this.createSource();
			self.audio.play();
			console.log('Playback 1');
			
		}else{
			self.audio.play();
			console.log('Playback 2');
		}
		
	},		


	stop:function(){
		
		this.audio.pause();
		this.destroySource();
		console.log('paused');
		//this.createAudio();	
	
	},
	
	play:function(){
    
	  this.audio.play();
	  console.log('Playback resumed successfully');
    
    },
			
	destroySource:function(){

      //console.log('DESTROYING SOURCE')
      if(this.analyser){
		this.analyser.disconnect(gain)
      }

      if(this.pannner){
		this.panner.disconnect(this.analyser)
      }

      if(this.source){
		this.source.disconnect(this.panner)
	  }	
	
      this.source = undefined
      this.panner = undefined
	  this.analyser = undefined
	  this.audio = undefined
	},
	
	update:function(){
					 	
		this.freqByteData = new Uint8Array(this.analyser.frequencyBinCount)
		this.analyser.getByteFrequencyData(this.freqByteData)
		//console.log(freqByteData)
		
		for(var i=0;i<this.analyser.frequencyBinCount;i++){
			if(this.whichSoundObj.visualize){
				this.whichSoundObj.visualize(this.freqByteData[i],this.analyser.frequencyBinCount,i);
			}
		}
		
	
		this.musicContext.listener.setPosition(
			this.whichSoundObj.globalPos.x + (this.whichSoundObj.posToCamera.x/this.whichSoundObj.radius)*10,
			this.whichSoundObj.globalPos.y + (this.whichSoundObj.posToCamera.y/this.whichSoundObj.radius)*10,
			this.whichSoundObj.globalPos.z + (this.whichSoundObj.posToCamera.z/this.whichSoundObj.radius)*10
		)
		
		
		this.musicContext.listener.setOrientation(
			camera.direction.front.x,
			camera.direction.front.y,
			camera.direction.front.z,
			camera.direction.up.x,
			camera.direction.up.y,
			camera.direction.up.z
		)
		
		pannerDir = new THREE.Vector3(camera.position.x,camera.position.y,camera.position.z)
		pannerDir.normalize();
		
		this.panner.setOrientation(
			pannerDir.x,
			pannerDir.y,
			pannerDir.z
		)	
	},
	
	

		
	
}
		
function STREAM(whichSoundObj,file){
	
	//sets the musicContext equal to global music context
	this.musicContext = music
	
	//this.fileArray=[]
	this.file=file
	
	//Set the Solar System that the song belongs to
	this.whichSoundObj = whichSoundObj
	
	//gets just the track name, removing the mp3
	this.trackID= file.split('.')[file.split('.').length-2];
	
	//this.createAudio(); 
}	
