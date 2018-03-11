// pages/movie/movie.js
var API_URL = "http://api.douban.com/v2/movie/subject/";
Page({

  /**
   * 页面的初始数据
   */
  data: {
     movie:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (params) {
    var that = this;
    console.log(params);
    wx.request({
      url:API_URL+params.id,
      data:{

      },
      header:{
        "Content-Type":"json"
      },
      success:function(res) {
        console.log(res.data);
        that.setData({
          movie:res.data
        })
      }
    })
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