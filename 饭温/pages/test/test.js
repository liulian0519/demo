// pages/release/release.js
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: '旭日苑', value: '旭日苑' },
      { name: '美食广场', value: '美食广场' },
      { name: '东升苑', value: '东升苑' }
    ],
    floor: [
      { name: '一楼', value: '一楼' },
      { name: '二楼', value: '二楼' },
    ],
    time: '',
    time1: '',
    starttime: '',
    starttime1: '',

    username: '刘莲',
    address: '东区一号楼',
    phone: '18292459148',
  },
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  bindTimeChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time1: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据  
    this.setData({
      time: time,
      time1: time,
      starttime: time,
      starttime1: time,
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

  }
})