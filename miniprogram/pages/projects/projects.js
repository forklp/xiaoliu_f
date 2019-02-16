// pages/projects/projects.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading:false,
    items:[
      {'imageSrc':'../../images/student.jpg',
      'country':'中国',
      'studentType':'科研',
      'lastTime':'1周',
      projectType:'游学',
      id:'1',
      },
      {
        'imageSrc': '../../images/student.jpg',
        'country': '中国',
        'studentType': '科研',
        'lastTime': '1周',
        projectType: '游学',
        id: '1',
      },
      {
        'imageSrc': '../../images/student.jpg',
        'country': '中国',
        'studentType': '科研',
        'lastTime': '1周',
        projectType: '游学',
        id: '1',
      },
      {
        'imageSrc': '../../images/student.jpg',
        'country': '中国',
        'studentType': '科研',
        'lastTime': '1周',
        projectType: '游学',
        id: '1',
      },
      {
        'imageSrc': '../../images/student.jpg',
        'country': '中国',
        'studentType': '科研',
        'lastTime': '1周',
        projectType: '游学',
        id: '1',
      },

    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //游学， 科研， 还是实习
    //修改title
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
      loading: true,
    })

    setTimeout((function () {
      this.setData({
        loading: false,
        items: this.data.items.concat(this.data.items),
      });
    }).bind(this), 1000);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})