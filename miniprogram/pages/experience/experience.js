// pages/experience/experience.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: false,
    items:[{
      "imageSrc":"../../images/time.jpg",
      "title": "高二IELTS就考7.5是什么体验？",
      "id":"123",
      "like":false,
      },
      {
        "imageSrc": "../../images/time.jpg",
        "title": "高二IELTS就考7.5是什么体验？",
        "id": "124",
        "like": false,
      },
      {
        "imageSrc": "../../images/time.jpg",
        "title": "高二IELTS就考7.5是什么体验？",
        "id": "125",
        "like": false,
      },
      {
        "imageSrc": "../../images/time.jpg",
        "title": "高二IELTS就考7.5是什么体验？",
        "id": "126",
        "like": false,
      },
      {
        "imageSrc": "../../images/time.jpg",
        "title": "高二IELTS就考7.5是什么体验？",
        "id": "127",
        "like": false,
      },
      ],
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
    //动态加载
    if (this.data.loading) {
      return;
    }
    this.setData({
      loading:true,
    })
    
    setTimeout((function(){
      this.setData({
        loading: false,
        items: this.data.items.concat(this.data.items),
      });
    }).bind(this),1000);
   
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  toArticle: function(event){
    console.log("wtf is going on");
    let id = event.target.dataset.id;
    console.log("id="+id);
    wx.navigateTo({
      url: '../articles/article?id='+id,
    })
  },
  clickLike: function(event){
    let id = event.target.dataset.id;
    console.log("id:"+id);
    //发送请求 id, 改变服务器like
    let localItems = this.data.items;
    localItems.forEach(function(item){
      if (item.id==id){
        item.like=!item.like;
      }
    });
    this.setData({items:localItems});
  }
})