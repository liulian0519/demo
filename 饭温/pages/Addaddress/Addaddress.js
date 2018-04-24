// pages/Addaddress/Addaddress.js
var name="";
var phonenumber="";
var address="";
var floor=""
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: '东区', value: '东区' },
      { name: '西区', value: '西区'}
    ]
  },
  nameinput:function(e){
    name = e.detail.value;
    console.log(name);
  },
  phoneinput: function (e) {
    phonenumber = e.detail.value;
    console.log(phonenumber);
  },
  radioChange: function(e){
    address=e.detail.value;
    console.log(address);
  },
  floorinput: function(e){
    floor=e.detail.value;
  },
  add: function(){
    address = address+floor;
    console.log(address);
    wx.redirectTo({
   
      url: '../MyAddress/MyAddress?address='+address +'&username='+name+'&phone='+phonenumber
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