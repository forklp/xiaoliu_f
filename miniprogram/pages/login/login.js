const app =getApp();

Page({
  data:{
    token:'',
  },

  formSubmit: function(event){
    console.log(event.detail.value);
    if (event.detail.value.username.length!=11){
    wx.showToast({
      title: '手机号错误',
      icon:'loading',
      duration:500,
    }),
      setTimeout(function () {
        wx.hideToast()
      }, 2000)
    }
    else if (event.detail.value.password.length<1){
      wx.showToast({
        title: '密码为空',
        icon: 'loading',
        duration:500,
      }),
      setTimeout(function (){
        wx.hideToast()
      },2000)
        }
    else{
      var that = this;
      wx.request({

        url: 'http://132.232.91.230:8080/user/login',
        header: {

          "Content-Type": "application/x-www-form-urlencoded"

        },
        method:'POST',
        data:{
          account:event.detail.value.username,
          password:event.detail.value.password,
        },
        
        success: function(res){
          console.log(res);
          console.log("登录成功");
          let account = '';
          // account = event.detail.value.username.toString();
          console.log(res.data.token);
          if (false){

          }
          else{
            //登录成功
            
            
            
            wx.setStorage({
              key: 'token',
              data: res.data.token,
              //页面间传值，使用wx.getStorage获取值
              success: function(){
                
                wx.navigateTo({
                  url: '../../',//进入商城界面
                })
              }
            }
            )
          }
        },
        fail: function(){
          console.log("登录失败");          
        },
        complete: function(){
          console.log("提交完成");
        },
      })

    }
  },
  registerBtn: function(options){
    console.log('reigsterBtn');
      wx.navigateTo({
        url: '../register/register',
      })
  },
  forgetPwd: function(options){
    wx.navigateTo({
      url: '../forgetPwd/forgetPwd',
    })
  }

})