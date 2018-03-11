//index.js
//获取应用实例
var API_URL = 'http://api.douban.com/v2/movie/top250'

Page({
  data: {
    title:"加载中...",
    movies:[],
  },

  onLoad: function () {
    var that = this;
    // 显示消息提示框
    wx.showToast ({
       title:"加载中...",
       icon:"loading",
       duration:10000
    });
    // 发起https请求
    wx.request({
       url:API_URL,
       data:{},
       header:{
        //'Content-Type':'application/json'这样会报错bad request400
        //开发工具升级后，请求的header的Content-type写法变了
        "Content-Type":"json"
       },
       success:function(res) {
          //拿到数据后，隐藏消息提示框
          wx.hideToast();
          var data = res.data;
          that.setData({
            title:data.title,
            movies:data.subjects,
          });
          console.log(res.data);
       }
    });
  },

})