// pages/index/select/select.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sourceData:{
    countries: [],
    courses: [],
    language: [],
    fees: [],
    studentsNum: [],
    },
    selectTypes: ['countries','courses','languages','fees','studentsNum','startTime'],
    selected: {
      countries:'',
      course:'',
      languages:'',
      fees:'',
      studentNum:'',
      startTime:'',
    },
    isSelected: {
      countries: false,
      course: false,
      languages: false,
      fees: false,
      studentNum: false,
      startTime: false,
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        sourceData: { countries: ['未选择','美国', '英国', '新加坡', '欧洲','日本','香港','大陆','其他'],
          courses:['未选择','游学','实习','科研',],//项目类型
          languages:['英语','中文','日语','其他'],
          fees:['10k','20k','30k'],
          studentsNum:['未选择','人文社科','理工','医学','商科','艺术'],//改为学生类型
          startTime: ['未选择','1周', '2周', '一个月', '其他'],//改为持续时间
        },
      });
      this.setData({
        selected:{countries:this.data.sourceData.countries[0],
          courses: this.data.sourceData.courses[0],
          languages:this.data.sourceData.languages[0],
          fees:this.data.sourceData.fees[0],
          studentsNum: this.data.sourceData.studentsNum[0],
          startTime:this.data.sourceData.startTime[0],
        },
      });
      
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
    var index = event.target.dataset.name;
    var data = {};
    data[index] = true;
    this.setData({isSelected:
      data
    });
    
  },
  selectThis: function(event){
    var data = {};
    
    var item = event.target.dataset.item;
    var index = event.target.dataset.index;
    var name = event.target.dataset.name;
    this.setData(
      {
        selected:{
          countries: this.data.selected.countries,
          courses: this.data.selected.courses,
          languages: this.data.selected.languages,
          fees: this.data.selected.fees,
          studentsNum: this.data.selected.studentsNum,
          startTime: this.data.selected.startTime,
          [item]:name,
        }
      }
    );
    
    
  
    this.setData({
      isSelected:{
        countries:this.data.isSelected.countries,
        courses: this.data.isSelected.courses,
        languages: this.data.isSelected.languages,
        fees: this.data.isSelected.fees,
        studentsNum: this.data.isSelected.studentsNum,
        startTime: this.data.isSelected.startTime,
        [item]:false,
      }
    });
    
  }
})