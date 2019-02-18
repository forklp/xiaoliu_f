//index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    src: ["images/logo.png", "images/p1s1.png", "images/s2.png", "images/p2s1.png","images/p1s1.png"],
navbar:['外语培训','留学咨询','作品集'],
    teacher: [{ src: "images/t1.png" }, { src: "images/t2.png" }, { src: "images/t3.png"}],
    array1: [],


  },navbarTap:function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },allTeacher:function(){
wx.navigateTo({
  url: 'teachers/teachers',
})
  },allInstitution:function(){
    wx.navigateTo({
      url: 'teachers/teachers',
    })
  },



  click: function(e) {
    this.setData({})
    var that = this;
    wx.request({
      url: 'http://132.232.91.230:8080/user/login',
      data: {
        account: 'klp2',
        password: 123456
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      success: function(res) {
        var target = ++e.target.dataset.id;
        var token = res.data.token;
        wx.request({
          url: 'http://132.232.91.230:8080/company/' + target,
          data: {
            page: 0,
            size: 4,
          },
          method: 'POST',
          header: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'token': token
          },
          success: function(res) {
            console.log(res.data);
            var array1 = [];


            for (var i = 0; i < 4; i++) {
              if (res.data[i]) {
                var arrayItem = {
                  message: res.data[i].companyTitle,
                  image: res.data[i].imageUrl,
                  url: res.data[i].companyUrl,
                };
                array1.push(arrayItem);
              }
            }
            wx.showLoading({
              title: '加载中',
            })
            setTimeout(function() {
                wx.hideLoading()
              }, 1000),
              that.setData({
                array1: array1,
                target: target,
                page: 1
              })

          },
          fail: function() {
            wx.showToast({
              title: '加载不到啊！',
              icon: 'success',
              duration: 2000,
              mask: true
            })
          },
          complete: function() {

            wx.showToast({
              title: '加载到了，哈哈哈！',
              icon: 'success',
              duration: 500,
              mask: true
            })

          }
        })


      }
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
    var that = this;
    wx.request({
      url: 'http://132.232.91.230:8080/user/login',
      data: {
        account: 'klp2',
        password: 123456
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      success: function(res) {
        var token = res.data.token;
        wx.request({
          url: 'http://132.232.91.230:8080/company/1',
          data: {
            page: 0,
            size: 2,
          },
          method: 'POST',
          header: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'token': token
          },
          success: function(res) {
            console.log(res.data);
            var array1 = [];
            for (var i = 0; i < 2; i++) {
              if (res.data[i]) {
                var arrayItem = {
                  message: res.data[i].companyTitle,
                  image: res.data[i].imageUrl,
                  url: res.data[i].companyUrl,
                };
                array1.push(arrayItem);
              }
            }
            wx.showLoading({
              title: '加载中',
            })
            setTimeout(function() {
                wx.hideLoading()
              }, 1000),
              that.setData({
                array1: array1
              })
          },
          fail: function() {
            wx.showToast({
              title: '加载不到啊。。。',
              icon: 'loading',
              duration: 2000,
              mask: true
            })

          },
          complete: function() {

            wx.showToast({
              title: '欢迎光临',
              icon: 'success',
              duration: 500,
              mask: true
            })

          }
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

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
    wx.showToast({
      title: '别拉了，没用的！',
      icon: 'success',
      duration: 2000,
      mask: true
    })

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    // var that = this;
    // console.log('加载中');
    // wx.request({
    //   url: 'http://132.232.91.230:8080/user/login',
    //   data: {
    //     account: 'klp2',
    //     password: 123456
    //   },
    //   method: 'POST',
    //   header: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   success: function(res) {
    //     var token = res.data.token;
    //     wx.request({
    //       url: 'http://132.232.91.230:8080/company/' + that.data.target,
    //       data: {
    //         page: that.data.page,
    //         size: 4,

    //       },
    //       method: 'POST',
    //       header: {
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //         'token': token
    //       },
    //       success: function(res) {
    //         console.log(res.data);
    //         var array1 = [];
    //         for (var i = 0; i < 4; i++) {
    //           if (res.data[i]) {
    //           var arrayItem = {
    //             message: res.data[i].companyTitle,
    //             image: res.data[i].imageUrl,
    //             url: res.data[i].companyUrl,
    //           };
    //           array1.push(arrayItem);
    //         }
    //         }
    //         wx.showLoading({
    //           title: '加载中',
    //         })
    //         setTimeout(function() {
    //             wx.hideLoading()
    //           }, 1000),

    //           that.setData({
    //             array1: that.data.array1.concat(array1),
    //             page: ++that.data.page
    //           })
    //       },
    //       fail: function() {
    //         wx.showToast({
    //           title: '加载不到啊！',
    //           icon: 'success',
    //           duration: 2000,
    //           mask: true
    //         })
    //       },
    //       complete: function() {
  
    //           wx.showToast({
    //             title: '加载完毕！',
    //             icon: 'success',
    //             duration: 500,
    //             mask: true
    //           });
          
    //       }
    //     })
    //   }
    // })


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