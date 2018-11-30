// pages/articles/article.js
Page({

      /**
       * 页面的初始数据
       */
      data: {
        title: '新航道',
        author: '小留同学信息平台',
        time: '11月14日',
        src1: '../images/xiaoliu.gif',
        src2: '../images/dot.gif',
        nodes: [
          {
            name: 'h3',
            attrs: {
              style: 'line-height:150rpx;color:grey;text-align:center;'
            },
            children: [{
              type: 'text',
              text: '机构简介'
            }]
          },
          {
            name: 'p',
            attrs: {
              style: 'margin:5%;text-indent:2rpx;'
            },
            children: [{
              type: 'text',
              text: '新航道是一家全国连锁机构，有着14年的办学历史，特有的划阶段上课模式，以雅思托福教学为主，主打班型是1对1VIP班型，2-5人钻石班，8-15人精英班和25人的经典班，师资力量雄厚，属于成都一线语言培训品牌。'
            }]
          },
        {
          name: 'p',
          attrs: {
            style: 'margin:5%;text-indent:2rpx;'
          },
          children: [{
            type: 'text',
            text: '校区覆盖成都许多重要位置，包括川大江安校区，铂金城校区，川大望江校区，环球中心校区等，适合希望能在学校附近上课的学生。'
          }]
          }, {
            name: 'h3',
            attrs: {
              style: 'line-height:150rpx;color:grey;text-align:center;'
            },
            children: [{
              type: 'text',
              text: '名师介绍'
            }]
          }, {
            name: 'img',
            attrs: {
              src:'../images/teacher.jpg',
              style:'margin:0 auto;'
            }, },  
            {
            name: 'p',
            attrs: {
              style: 'margin:5%;text-indent:2rpx;'
            },
            children: [{
              type: 'text',
              text: '何研 新航道成都学校教学总监，毕业于英国格拉斯哥大学，获最具含金量的TESOL硕士学位证书。拥有丰富的留学生活经历并专注于出国语言教学研究数年。她善于激发学生对听力的热情但又不乏严谨，擅长给学生制定个性化学习方案，有针对性的帮学生提高听力成绩。'
            }]
          }, {
            name: 'h3',
            attrs: {
              style: 'line-height:150rpx;color:grey;text-align:center;'
            },
            children: [{
              type: 'text',
              text: '开设课程'
            }]
          },
          {
            name: 'p',
            attrs: {
              style: 'margin:5%;text-indent:2rpx;'
            },
            children: [{
              type: 'text',
              text: '     新航道开设雅思、托福、G类语言课程，以及SAT考试的培训（注：雅思托福划分为7个阶段：L1-L4为留学预备阶段，L5-L7为强化学习阶段）。'
            }]
          }, {
            name: 'h3',
            attrs: {
              style: 'line-height:150rpx;color:grey;text-align:center;'
            },
            children: [{
              type: 'text',
              text: '所在位置'
            }]
          },
          {
            name: 'p',
            attrs: {
              style: 'margin:5%;text-indent:2rpx;'
            },
            children: [{
              type: 'text',
              text: '铂金城校区，川大江安校区，环球中心校区等（详细地址请扫描下方二维码咨询）'
            }]
          }
         
     

    ]

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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})