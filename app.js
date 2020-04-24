//app.js
// 引用百度地图微信小程序JSAPI模块
import bmap from "./libs/bmap-wx.min";
import { AK } from "./static/index";

App({
  globalData: {
    indicatorDots: false,
    vertical: false,
    autoplay: true,
    circular: true,
    interval: 5000,
    duration: 800,
    location: ""
  },
  changeLocation: function(e) {
    this.globalData.location = `${e.lng},${e.lat}`;
  },
  changeIndicatorDots: function(e) {
    this.globalData.indicatorDots = e;
  },
  changeVertical: function(e) {
    this.globalData.vertical = e;
  },
  changeAutoplay: function(e) {
    this.globalData.autoplay = e;
  },
  intervalChange: function(e) {
    this.globalData.interval = e;
  }, 
  isCircular: function(e) {
    this.globalData.circular = e;
  },
  durationChange: function(e) {
    this.globalData.duration = e;
  },
  getWeather:(e)=>{
return  new Promise((resolve,reject)=>{
    // 新建百度地图对象        
    let {location} = e
    let BMap = new bmap.BMapWX({
      ak: AK
    });

    let fail = function(data) {
    };
    let success = function(data) {
      const weatherData = data.currentWeather[0];
      let {date } = weatherData;
      const {weather_data,index} = data.originalData.results[0];
      let resultData={
        settings: e,
        weatherData,
        realTimeTemperature: date
          .split(" ")[2]
          .replace("(实时：", "")
          .replace("℃)", ""),
        otherWeather: weather_data.splice(0, 1),
        proposal: data ? index : "",
        otherDate: data ? weather_data : ""
      }
      resolve(resultData)
    };
    // 发起weather请求
    BMap.weather({
      fail,
      success,
      location
    })
})


  }
});
