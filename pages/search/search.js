const app = getApp();
import {
  citys
} from "../../static/city";
import {
  AK
} from "../../static/index";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollAZ: null,
    scrollNow: 0,
    cityResults: null,
    address: "",
    inputVal: ""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      cityResults: this.data.cityResults === null ? citys : ""
    });
  },
  clickAddress: function (e) {
    this.setData({
      address: e.currentTarget.dataset.cityname
    });
    wx.request({
      url: `https://api.map.baidu.com/geocoder/v2/?address=${
        this.data.address
      }&output=json&ak=${AK}`, //仅为示例，并非真实的接口地址
      success:(res)=> {
        app.changeLocation(res.data.result.location);
        wx.switchTab({
          url: "../../pages/index/index",
          success:  (e) => {
            let page = getCurrentPages().pop();
            if (page == undefined || page == null) return;
            page.onLoad();
            this.setData({
              inputVal: "",
              scrollAZ: null,
              scrollNow: 0,
              cityResults:citys
            });
          }
        })
      }
    });
  },
  bindAZ: function (e) {
    let {id} = e.currentTarget.dataset;
    let {
      scrollAZ,
      scrollNow
    } = data
    //放入A-Z的scrollTop参数
    if (scrollAZ == null) {
      wx.createSelectorQuery()
        .selectAll(".city-item-A-Z")
        .fields({
            dataset: true,
            size: true,
            rect: true
          },
          function (res) {
            res.forEach(function (re) {
              console.log(re);
              
              if (id == re.dataset.cityname) {
                wx.pageScrollTo({
                  scrollTop: re.top + scrollNow - 55.5,
                  duration: 0
                });
              }
            });
          }
        )
        .exec();
    } else {
      scrollAZ.forEach(function (re) {
        console.log(re);
        
        if (id == re.dataset.cityname) {
          wx.pageScrollTo({
            scrollTop: re.top + scrollNow - 55.5,
            duration: 0
          });
        }
      });
    }
  },
  onPageScroll: function (e) {
    // 获取滚动条当前位置
    this.setData({
      scrollNow: e.scrollTop
    });
  },

  bindSarchInput: function (e) {
    let {
      inputVal
    } = this.data;
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 0
    });
    inputVal = e.detail.value;
    let cityResultsTemp = new Array();

    if (inputVal === null || inputVal.trim() === "") {
      this.setData({
        cityResults: citys
      });
      return;
    }

    // for (let i = 0; i < citys.length; i++) {
    for (let item of citys) {
      let {
        cityName,
        cityPY,
        cityPinYin
      } = item

      if (
        cityName.indexOf(inputVal) == 0 ||
        cityPY.indexOf(inputVal.toLowerCase()) == 0 ||
        cityPinYin.indexOf(inputVal.toLowerCase()) == 0
      ) {
        //去除热门城市
        if (cityPY.indexOf("#") != -1) {
          continue;
        }
        let ifHas = false;
        for (let itemj of cityResultsTemp) {
          if (itemj == item) {
            ifHas = true;
            break;
          }
        }
        if (!ifHas) {
          cityResultsTemp.push(item);
        }
      }
    }
    this.setData({
      cityResults: cityResultsTemp
    });
  },


});