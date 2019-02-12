Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots:true,
    autoplay:true,
    circular:true,
    qrCode:'../../images/time.jpg',
    contactUs:{
      icon:'../../images/time.jpg',
    },
    recentArticles:[{'src':'../../images/time.jpg',
      'alt': 'clock', id: '',},
      { 'src': '../../images/time.jpg', 'alt': 'clock', id: '',}],//滚动推荐的文章
    article1:{"imageSrc":"../../images/time.jpg",
          'articleSrc':'',
          'articleTitle':'',
          id:'',
        } ,
    article2: {
      "imageSrc": "../../images/time.jpg",
      'articleSrc': '',
      'articleTitle': '',
      id:'',
    },
    kaoQing1: {
      "imageSrc": "../../images/time.jpg",
      'articleSrc': '',
      articleTitle: '2019雅思真题',
      id: '',
    },
    kaoQing2: {
      "imageSrc": "../../images/time.jpg",
      'articleSrc': '',
      'articleTitle': '',
      id: '',
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    
  },
  toShouYe: function(){
    wx.navigateTo({
      url: '../home/home',
    })
  },
  toShangCheng: function () {
    wx.navigateTo({
      url: '../shangCheng/shangCheng',
    })
  },
  toTiSheng: function () {
    wx.navigateTo({
      url: '../tiSheng/tiSheng',
    })
  },
  toFenXiang: function () {
    wx.navigateTo({
      url: '../fenXiang/fenXiang',
    })
  },
  toWoDe: function () {
    wx.navigateTo({
      url: '../woDe/woDe',
    })
  },
  toArticle: function(event){
    id = event.target.dataset.id;
    wx.navigateTo({
      url: '../article/article?id='+id,
    })
  }
})