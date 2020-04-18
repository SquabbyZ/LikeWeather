//app.js
App({
  globalData: {
    indicatorDots: false,
    vertical: false,
    autoplay: true,
    circular: true,
    interval: 5000,
    duration: 800,
    locations: ""
  },
  changeLocation: function(e) {
    console.log(e);
    console.log(this.globalData.locations);
    this.globalData.locations = `${e.lng},${e.lat}`;
    console.log(this.globalData.locations);
  },
  changeIndicatorDots: function(e) {
    console.log(e);

    this.globalData.indicatorDots = e;
  },
  changeVertical: function(e) {
    console.log(e);
    this.globalData.vertical = e;
  },
  changeAutoplay: function(e) {
    console.log(e);
    this.globalData.autoplay = e;
  },
  intervalChange: function(e) {
    console.log(e);
    this.globalData.interval = e;
  },
  isCircular: function(e) {
    console.log(e);
    this.globalData.circular = e;
  },
  durationChange: function(e) {
    console.log(e);
    this.globalData.duration = e;
  }
});
