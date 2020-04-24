
const innerAudioContext = wx.createInnerAudioContext();
const { getWeather,globalData } = getApp();

Page({
  data: {
    musics: false,
    weatDatas:{}
  },
 /*暂停音乐*/
  parseMusic: function() {
    innerAudioContext.stop();
    this.setData({
      musics: false
    });
  },
  /*播放音乐*/
  playMusic: function() {
    innerAudioContext.play();
    this.setData({
      musics: true
    });
  },
  onLoad: function() {
    innerAudioContext.autoplay = this.data.musics;
    innerAudioContext.src =
      "https://webfs.yun.kugou.com/202004181004/6abd2278389a115a3f9f98e4935c8a0c/G096/M04/1B/07/AIcBAFvFUHKAP979AELAUC9HTIE224.mp3";
   
    getWeather.call(this,globalData).then(res=>{      
      this.setData({
        weatDatas:res
      }) 
     
      
    })
  }
});
