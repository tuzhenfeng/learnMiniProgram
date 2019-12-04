// wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hobby:['吃饭','睡觉','打豆豆']
  },
  handleBtn(){
    console.log('触发了点击事件')
  },
  bindtap(event){
    console.log(event)
  },
  ontap(event){
    console.log(event)
    const index = event.currentTarget.dataset.index
    const item = event.currentTarget.dataset.item
    console.log(index,item)
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