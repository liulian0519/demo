//index.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Wall: [{ time: '于17：00前到达', rest: '旭日苑', floor: '二楼', add: '西区长治公寓' }, { time: '于17：00前到达', rest: '旭日苑', floor: '二楼', add: '西区长治公寓' }],
    WallTwo: [{ time: '于19：00前到达', rest: '东升苑', floor: '二楼', add: '东区安悦公寓'}],
    WallThird: [{ time: '于12：00前到达', rest: '东升苑', floor: '二楼', add: '东区安美公寓' }],
    one:'',
    two:'none',
    third:'none',
    fontOne:'font',
    fontTwo:'',
    fontThird:''
  },
  changeone :function(){
    this.setData({
      one: 'block',
      two: 'none',
      third: 'none',
      fontOne: 'font',
      fontTwo: '',
      fontThird: ''
    })
  },
  changetwo: function () {
    this.setData({
      one: 'none',
      two:'block',
      third:'none',
      fontOne: '',
      fontTwo: 'font',
      fontThird: ''
    })
  },
  changethird: function () {
    this.setData({
      one: 'none',
      two: 'none',
      third: 'block',
      fontOne: '',
      fontTwo: '',
      fontThird: 'font'
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
