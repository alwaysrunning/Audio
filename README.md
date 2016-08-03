# Audio

API:

1. 单个音频播放：

     var obj = new playAudio({

  		files:"1.mp3",   //  音频源文件

  		loop:false,   //  是否循环音频

  		pause: false,  //  是否暂停播放音频

  		callback:function(){   //  音频播放完之后的回调函数

  			obj.destroy()

  		}

  	})
     
2. 多个音频连续播放：

     new playAudioList(["1.mp3","2.mp3","3.mp3"],function(){})
