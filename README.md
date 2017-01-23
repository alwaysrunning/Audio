## How to use

实例化对象

```bash
var audio = new _Audio({
    file:"1.mp3",        // 文件路径
    audioType:"cordova",  // h5播放(native) 和 底层播放方式(cordova) 两种播放方式。 安卓app里面只能用底层方法播放
    getCurrentPos: true, // 获取当前播放进度
    paused: true, // 初始化暂停
    loop: true, // 是否循环
    endCallback:function(){ alert(1111)}, // 播完之后回调
    failback:function(){alert(403)} // 错误回调
})
```

播放

```bash
audio.play()
```

暂停

```bash
audio.pause()
```

重播

```bash
audio.restart("*****.mp3", function(){alert("重播")})
```

获取当前文件的总长度

```bash
audio.duration
```

获取当前进度

```bash
audio.currentTime
```

设置当前进度

```bash
audio.seekTo(sec) 单位为秒
```

事件注册

```bash
audio.on("onPause", function(){alert("pause")})
```

删除当前文件

```bash
audio.destroy()
```

## License

MIT
