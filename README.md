# Audio

1. 单个音频播放的用法：

     new playAudio({files:"1.mp3",loop:false,pause:'true',callback:function(){}})
     
2. 多个音频连续播放：

     new playAudioList(["1.mp3","2.mp3","3.mp3"],function(){alert()})
