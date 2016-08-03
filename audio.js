(function(win,undefined){
	function _Audio(opts){
		var paused;
		this.audio = opts;
		this.typeAudio = "native";
		this.state = 'init';


		if(opts instanceof Object){
			this.files = opts.files;
	        this.callback = opts.callback;
	        this.loop = opts.loop || false;
	        paused= opts.pause || false
	        this.audio = new Audio(this.files);	        
		}
		if(this.loop){
			this.audio.loop = true
		}

        if(!paused){
        	this.audio.play()

        }
        this.audio.addEventListener("ended",this.completed.bind(this))
        

	}
	_Audio.prototype.constructor = _Audio;

	_Audio.prototype.play = function(){
			this.audio.play();
			this.state='play'		
	}
	_Audio.prototype.stop = function(){
		    this.audio.stop()
		    this.state='pause'
	}
	_Audio.prototype.pause= function(){
		   this.audio.pause()
		   this.state='pause'
	}
	_Audio.prototype.completed= function(){
		if(!this.loop && this.callback)
			this.callback.apply(this)
		   this.state='completed'
	}
	_Audio.prototype.seekTo = function(milliansecond){
          this.audio.currentTime = milliansecond
	}
	_Audio.prototype.destroy = function(){
		  if(this.state!='completed'){
		  	this.audio&&this.audio.pause()
		  	this.audio&&this.audio.removeEventListener('ended',this.end,false)
		  }
		  delete this.state;
		  delete this.audio;
		  this.audio = null; 
	}


	function _AudioList(list,_callback){
         this.list = [];
         this.audioList = list;
         this.index = 0;
         this._callback = _callback;
         this.init();
	}
	_AudioList.prototype.init = function(){
		var al, self=this;
		for(var i=0; i<this.audioList.length; i++){
			al = new _Audio({files:this.audioList[i],callback:function(){
				 self.index++
                 if(self.index<self.audioList.length){
                 	self.play()
                 }else{
                 	self._callback()
                 }
			},pause:true})
			this.list.push(al)
		}
		this.play()
	}
	
	_AudioList.prototype.play = function(){
		this.list[this.index].play()
	}
	_AudioList.prototype.constructor = _AudioList
	_AudioList.prototype.pause = function(){
		this.list[this.index].pause()
	}
	_AudioList.prototype.destroy = function(){
		for(var i=0; i<this.audioList.length;i++){
			 this.list && this.list[i].destroy()
			 this.list[i] = null
		}
	}

	win.playAudio = _Audio
	win.playAudioList = _AudioList
})(window)
