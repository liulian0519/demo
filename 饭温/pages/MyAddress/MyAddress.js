// pages/MyAddress/MyAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:'',
    username:'',
    phone:''
  },
  LoginAdd: function(){
    wx.navigateTo({
      url: '../Addaddress/Addaddress',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var username = options.username;
    console.log(username);
    if(username!=""){
      console.log(options.address);
      var phone = options.phone;
      var p1 = phone.substring(0, 3);
      var p2 = phone.substring(3, 7);
      var p3 = phone.substring(7, 11)
      var p = new Array(p1, p2, p3);
      var result = p.join("-");
      this.setData({
        address: options.address,
        username: options.username,
        phone: result
      })
    }
    // console.log(options)
  
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