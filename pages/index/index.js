//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    slider: [
      { picUrl: '../../images/react.jpg' },
      { picUrl: '../../images/vue.jpg' },
      { picUrl: '../../images/angular.jpg' }
    ],
    swiperCurrent: 0,
  },
  swiperChange: function(e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  }
})