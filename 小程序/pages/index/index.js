//index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '../images/store.jpg',
    url: '../introduction/introduction',
    nodes: [{
      name: 'div',
      attrs: {
        style: 'line-height:150rpx;color:grey;text-align:center;'
      },
      children: [{
        type: 'text',
        text: '小留商城|我们到底是谁？'
      }]
    }],
    currentTab: 0,
    menu: [{
      submenu: '外语培训',
    }, {
      submenu: '留学咨询',
    }, {
      submenu: '作品集',
    }],
    array1: [{
        message: '新航道',
        image: '../images/0.jpg',
        url: '../articles/article',
      },
      {
        message: '心语陪教育',
        image: '../images/0.jpg',
        url: '../articles/article',
      },
      {
        message: '学为贵',
        image: '../images/0.jpg',
        url: '../articles/article',
      },
      {
        message: '英桥教育',
        image: '../images/0.jpg',
        url: '../articles/article',
      }
    ],
    array2: [{
        message: '不同出国',
        image: '../images/0.jpg',
        url: '../articles/article',
      },
      {
        message: '不同出国',
        image: '../images/0.jpg',

      },
      {
        message: '不同出国',
        image: '../images/0.jpg',

      },
      {
        message: '不同出国',
        image: '../images/0.jpg',
      }
    ],
    array3: [{
        message: '新航道',
        image: '../images/0.jpg',

      },
      {
        message: '新航道',
        image: '../images/0.jpg',

      },
      {
        message: '新航道',
        image: '../images/0.jpg',

      },
      {
        message: '新航道',
        image: '../images/0.jpg',

      }
    ]

  },
  click: function(e) {

    this.setData({
      currentTab: e.target.dataset.id
    })

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log('加载中');
    wx.showNavigationBarLoading();
    wx.request({
      url: 'http://',
      data: {},
      method: 'GET',
      success: function() {},
      fail: function() {},
      complete: function() {
        wx.hideNavigationBarLoading();
        wx.stopPullDownRefresh();
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '小留同学贼6',
      path: '/pages/index/index'
    }
  }
})