const app = getApp();


// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  
  /**
   * 页面的初始数据
   */
  data: {

    latitude: "", //纬度
    longitude: "",//经度
    scale:"",//缩放层级
    markers:[]//自身标记
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    let that = this
    //获取当前的地理位置、速度
    wx.chooseLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {
        //赋值经纬度
        console.log(res)
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          scale:18,
 
        })
      }
    })
 
 
 
  },
/*
点击地图获取经纬度
*/ 


  eventhandle(e){
    console.log(e)
    app.changeLocation({lng:e.detail.longitude,lat:e.detail.latitude});
    wx.switchTab({
      url: "../../pages/index/index",
      success: function(e) {
        let page = getCurrentPages().pop();
        if (page == undefined || page == null) return;
        page.onLoad();
        that.setData({
          inputVal: "",
          scrollAZ: null,
          scrollNow: 0,
          cityResults: that.data.citys
        });
      }
    });
  },
/**
 * 点击定位获取位置信息并且跳转
 * 
 * 
 * 
*/
  touchLocation(){
    let that = this
    //获取当前的地理位置、速度
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {
        //赋值经纬度
        console.log(res)
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          scale:18,
 
        })
      }
    })


  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})