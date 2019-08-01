// pages/react/react.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books:[
      { 
        src: '../../images/react/1.jpg',
        title: 'React精髓',
        price: 50
      }, {
        src: '../../images/react/2.jpg',
        title: 'React全栈',
        price: 50
      }, {
        src: '../../images/react/3.jpg',
        title: 'React Native',
        price: 50
      }, {
        src: '../../images/react/4.jpg',
        title: 'React 快速上手', 
        price: 50
      }, {
        src: '../../images/react/5.jpg',
        title: 'React 学习手册',
        price: 50
      }, {  
        src: '../../images/react/6.jpg',
        title: 'React 进阶之路',
        price: 50
      }
    ]
  },
  go: function(){
    wx.switchTab({
      url: '../order/order'
    });
  }
})