// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // toast弹窗
  handleShow(){
    wx.showToast({
      title: '加载中',
      mask:true,
      success:function(){
        console.log('成功')
      },
      fail:function(){
        console.log('失败')
      },
      complete:function(){
        console.log('完成时')
      }
    })
  },
  // 文本选择弹框
  handleModule(){
    wx.showModal({
      title: '我是标题',
      content: '我是内容',
      // showCancel:false,
      cancelText:'退出',
      success:function(res){
        console.log(res)
      }
    })
  },
  // 加载中
  handleloading(){
    wx.showLoading({
      title: '加载中',
      mask:true
    })
    // 必须手动hideloading才会让loading消失
    setTimeout(function(){
      wx.hideLoading()
    },1000)
  },
  // 底部弹框
  handleaction(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      itemColor:'red',
      success:function(res){
        console.log(res)
        // switch(res.tapIndex)
      }
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
  onShareAppMessage: function (option) {
    return 
  }
})