// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
// no 时间戳
  data: {
    MyRelease: '',
    MyHelp: 'MyRelease',
    release: 'release1',
    help: '',
    Release: [{ time: '2017-11-19 17:00', partner: '陈宇天', no: '201711281249' }, { time: '2017-11-25 18:00', partner: '陈宇天', no: '201711281250' }],
    Help: [{ time: '2017-11-19 17:00', add: '东区安美公寓三号楼', no: '201711281229' }, { time: '2017-11-19 17:00', add: '西区长治公寓三号楼', no: '201710281229' }],
  },
  texweigh: function () {
    this.setData({
      release: 'release1',
      help: '',
      MyRelease: '',
      MyHelp: 'MyRelease'
    })
  },
  textweight: function () {
    this.setData({
      release: '',
      help: 'help1',
      MyRelease: 'MyRelease',
      MyHelp: ''
    })

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

  }
})