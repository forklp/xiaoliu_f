const app =getApp();

Page({
  data:{

  },

  formSubmit: function(event){
    console.log(event.detail.value);
    if (event.detail.value.username.length<1){
    wx.showToast({
      title: '手机号为空',
      icon:'loading',
      duration:500,
    }),
      setTimeout(function () {
        wx.hideToast()
      }, 2000)
    }
    else if (event.detail.value.password)
  }
})