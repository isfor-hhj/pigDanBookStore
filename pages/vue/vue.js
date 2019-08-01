// pages/vue/vue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: [
      {
        src: '../../images/vue/1.jpg',
        title: 'Vue 前端开发',
        price: 50
      }, {
        src: '../../images/vue/2.jpg',
        title: 'Vue 实战',
        price: 50
      }, {
        src: '../../images/vue/3.jpg',
        title: 'Vue 全栈开发',
        price: 50
      }, {
        src: '../../images/vue/4.jpg',
        title: 'Vue 移动开发',
        price: 50
      }, {
        src: '../../images/vue/5.jpg',
        title: '深入浅出 Vue',
        price: 50
      }]
  },
  go: function () {
    wx.switchTab({
      url: '../order/order'
    });
  }
})