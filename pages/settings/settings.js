// pages/settings/settings.js
const { globalData } = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: "",
    vertical: "",
    autoplay: "",
    circular: "",
    interval: 0,
    duration: 0
  },
  changeProperty: function(e) {
    var propertyName = e.currentTarget.dataset.propertyName;
    var newData = {};
    newData[propertyName] = e.detail.value;
    this.setData(newData);
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    });
    this.globalData.changeIndicatorDots(this.data.indicatorDots);
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    });
    this.globalData.changeAutoplay(this.data.autoplay);
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    });
    this.globalData.intervalChange(this.data.interval);
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    });
    this.globalData.durationChange(this.data.duration);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(getApp());
    this.setData({
      indicatorDots: globalData.indicatorDots,
      vertical: globalData.vertical,
      autoplay: globalData.autoplay,
      circular: globalData.circular,
      interval: globalData.interval,
      duration: globalData.duration
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});
