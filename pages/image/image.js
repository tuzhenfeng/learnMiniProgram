// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagepath:''

  },
  choose(){
    // 系统api，让用户在相册中选择图片（或者拍照）
    const that=this
    wx:wx.chooseImage({
      success: function(res) {
        // 取出路径
        const path=res.tempFilePaths[0]
        // 设置imagepath
        that.setData({
         imagepath:path
        })
      }
    })
  },
  imageload(){
    console.log('图片懒加载')
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