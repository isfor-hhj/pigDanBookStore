// pages/angular/angular.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: [
      {
        src: '../../images/angular/1.jpg',
        title: '权威教程',
        price: 50
      }, {
        src: '../../images/angular/2.jpg',
        title: '开发下一代web应用',
        price: 50
      }, {
        src: '../../images/angular/3.jpg',
        title: '高级编程',
        price: 50
      }, {
        src: '../../images/angular/4.jpg',
        title: '迈向Angular2',
        price: 50
      }
    ]
  },
  go: function () {
    wx.switchTab({
      url: '../order/order'
    });
  }
})