// pages/index/betterFuture/betterFuture.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    projects:[{
      projectName:"日本关西大学：日本文化&语言学习",
      property:"语言学习",
      fee:"10343",
      language:"英语",
      gpa:"未做说明",
      startTime:"2018-6-1",
      endTime:"2018-7-31",
    }, {
        projectName: "日本关西大学：日本文化&语言学习",
        property: "语言学习",
        fee: "10343",
        language: "英语",
        gpa: "未做说明",
        startTime: "2018-6-1",
        endTime: "2018-7-31",
      },
      {
        projectName: "日本关西大学：日本文化&语言学习",
        property: "语言学习",
        fee: "10343",
        language: "英语",
        gpa: "未做说明",
        startTime: "2018-6-1",
        endTime: "2018-7-31",
      },
      {
        projectName: "日本关西大学：日本文化&语言学习",
        property: "语言学习",
        fee: "10343",
        language: "英语",
        gpa: "未做说明",
        startTime: "2018-6-1",
        endTime: "2018-7-31",
      },],
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
  showList: function(event){
    console.log(event.target.dataset);
  },
  search: function(){
    wx.navigateTo({
      url: '../select/select',
    })
  }
})