var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:null,
    password:null
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
  
  },
  login: function(){
    var name = this.data.username;
    var pass = this.data.password;
    if(name.length!=8||pass.length!=8){
      console.log("请重新输入");
      
    }
    else{
      app.appData.userinfo = { username: this.data.username, password: this.data.password }
      wx.redirectTo({
        url: '../user/user',
      })
    }
 
  },
  bindUsernameInput: function(event){
    // console.log(event.detail.value);
    this.setData({username:event.detail.value});
  },
   bindpasswordInput: function(event){
     this.setData({password: event.detail.value });
   }
})