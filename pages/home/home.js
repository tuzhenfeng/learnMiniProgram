// pages/home/home.js
import { getMultiData, getGoogsData} from '../../service/home.js'
const types = ['pop', 'new', 'sell']
const TOP=100;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    recommends:[],
    titles:['流行','新款','精选'],
    goods:{
      new:{page:0,list:[]},
      pop: { page: 0, list: [] },
      sell: { page: 0, list: [] },
      
    },
    currentType: 'pop',
    showBackTop:false,
    isTabFixed:false,
    tabscrolltop:0
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getMultiData()
    this._getDoodsData('pop')
    this._getDoodsData('new')
    this._getDoodsData('sell')

  },
  // ----------------------网络请求----------
  _getMultiData(){
    getMultiData().then(res => {
      // 取出轮播图和推荐的数据
      const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list
      // 将取出的数据放到data中
      this.setData({
        banners: banners,
        recommends: recommends
      })
    })
  },
  _getDoodsData(type){
    // 1.获取页码
    const page=this.data.goods[type].page+1

    // 2.发送网络请求
    getGoogsData(type,page).then(res=>{
        // 2.1 取出数据
        const list = res.data.data.list
        // 2.2 将数据设置到对应的type的list中
        const oldList = this.data.goods[type].list
        oldList.push(...list)
        // 2.3 将数据设置到对应的type中的goods中
        const typeKey=`goods.${type}.list`
        const pageKey=`goods.${type}.page`
        this.setData({
          [typeKey]:oldList,
          [pageKey]:page
        })
    })
  },
  // ------------------事件监听-----------------
  handletabclick(event){
    // 取出index
    const index=event.detail.index

    // 设置currentType
    this.setData({
      currentType:types[index]
    })
  },
  hanledImageLode(){
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
      console.log(rect)
      this.data.tabscrolltop=rect.top
    }).exec()
  },
  // onshow:页面显示出来的时候回调的函数
  // 页面显示是否意味着所有图片加载完成
  onShow(){
    // setTimeout(()=>{
    //   wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
    //     console.log(rect)
    //   }).exec()
    // },1000)
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // 上拉加载更多
    this._getDoodsData(this.data.currentType)
  },
  onPageScroll(option){
    // 取出scrollTop
    const scrollTop=option.scrollTop

    // 修改showbacktop属性
    // 官方：不要在滚动的函数中频繁调用this.setdata
    // 所以可以用变量先来判断 
    const flag = scrollTop >= TOP

    if(flag!==this.data.showBackTop){
      this.setData({
        showBackTop: flag
      })
    }  
    // 3.修改isTabFixed属性
    const flag2 = scrollTop>=this.data.tabscrolltop
    if(flag2!==this.data.isTabFixed){
      this.setData({
        isTabFixed: flag2
      })
    }
  },
  onShareAppMessage: function () {

  }

})