// pages/order/order.js
var resulttime='15.00';
var result1='将于';
var la = result1+resulttime+'前送达'
Page({

  /**
   * 页面的初始数据
   */
 
  data: {
    MyRelease:'',
    MyHelp:'MyRelease',
    release:'release1',
    help:'',
    Release: [{ time: '2017-11-19 17:00', rest: '东升苑', result: '无人接单' }, {time: '2017-11-25 18:00', rest: '旭日苑', result:la}],
    Help: [{ time: la, rest: '东升苑', add: '东区安美公寓三号楼', phone: '136-0921-9504' }, { time: la, rest: '东升苑', add: '东区安美公寓三号楼', phone: '136-0921-9504'  }],
  },
  texweigh: function () {
    this.setData({
      release: 'release1',
      help: '',
      MyRelease: '',
      MyHelp:'MyRelease'
    })
  },
  textweight: function(){
      this.setData({
        release:'',
        help:'help1',
        MyRelease:'MyRelease',
        MyHelp:''
      })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var result = this.data.Release[0].result;
    if(result=='无人接单'){
      this.setData({
        result:'resut'
      })
    }
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
  
  }
})