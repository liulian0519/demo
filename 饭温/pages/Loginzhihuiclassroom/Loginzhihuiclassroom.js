// pages/Loginzhihuiclassroom/Loginzhihuiclassroom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    password:'',
    btn:'btn-login',
    userbox:'user-box',
    passbox:'pass-box'
  },
  bindusernameinput: function(e){
    this.setData({
      userbox: 'user-box-active'
    })
  },
  userblur: function(e){
    this.setData({
      userbox: 'user-box'
    })
  },
  passblur: function (e) {
    this.setData({
      passbox: 'pass-box'
    })
  },
  bindpasswordinput: function(e){
    this.setData({
      btn: 'btn-can',
      passbox:'pass-box-active'
    })
  },
  /**登陆智慧教室的请求 */
  formSubmit: function(e){
    
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