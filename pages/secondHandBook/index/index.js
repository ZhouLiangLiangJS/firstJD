// pages/SHB/index/index.js
var template = require("../tabbar_template/index.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 首页轮播图
    carouselIndex: 0,
    swiper_index: [
      { img: "/image/secondHandBook_image/swiper01.png" },
      { img: "/image/secondHandBook_image/swiper02.png" },
      { img: "/image/secondHandBook_image/swiper03.png" },
    ],
    // 判断当前是买书还是借阅的页面 true 买书 false 借阅
    isBuy: true,
    // 买书页面数据
    booksArr: [
      {
        img: "/image/secondHandBook_image/book01.png",
        name: "百年孤独",
        author: "加西亚马尔克斯",
        inf: "仅翻阅，无笔记，无损坏",
        price: 10,
        ori_price: 40,
        new: "九成新",
      },
      {
        img: "/image/secondHandBook_image/book02.png",
        name: "百年孤独",
        author: "加西亚马尔克斯",
        inf: "仅翻阅，无笔记，无损坏",
        price: 10,
        ori_price: 40,
        new: "九成新",
      },
      {
        img: "/image/secondHandBook_image/book03.png",
        name: "百年孤独",
        author: "加西亚马尔克斯",
        inf: "仅翻阅，无笔记，无损坏",
        price: 10,
        ori_price: 40,
        new: "九成新",
      },
      {
        img: "/image/secondHandBook_image/book01.png",
        name: "百年孤独",
        author: "加西亚马尔克斯",
        inf: "仅翻阅，无笔记，无损坏",
        price: 10,
        ori_price: 40,
        new: "九成新",
      },
      {
        img: "/image/secondHandBook_image/book02.png",
        name: "百年孤独",
        author: "加西亚马尔克斯",
        inf: "仅翻阅，无笔记，无损坏",
        price: 10,
        ori_price: 40,
        new: "九成新",
      },
      {
        img: "/image/secondHandBook_image/book03.png",
        name: "百年孤独",
        author: "加西亚马尔克斯",
        inf: "仅翻阅，无笔记，无损坏",
        price: 10,
        ori_price: 40,
        new: "九成新",
      },
    ],
    // 底部输入部分
    isShow_hand: false,
    isShow_isn_error: false,
    isShow_by_isn: false,
    //是否显示蒙层
    isShow_back: false,
  },

  /**
   * 切换选中页面的函数
   *    改变到买书或借阅界面
   */
  changeChoose: function (e) {
    console.log(e.currentTarget.dataset.index);
    if (
      (e.currentTarget.dataset.index === "1" && this.data.isBuy === true) ||
      (e.currentTarget.dataset.index === "0" && this.data.isBuy === false)
    ) {
      this.setData({
        isBuy: !this.data.isBuy,
      });
    }
  },
  /**
   * 切换轮播图时触发
   *  返回当前轮播图中间的图片的索引
   */
  change: function (e) {
    this.setData({
      carouselIndex: e.detail.current,
    });
  },

  /**
   * 点击扫码买书触发
   *
   */
  input_hand: function () {
    this.setData({
      isShow_hand: !this.data.isShow_hand,
      isShow_isn_error: false,
      isShow_by_isn: false,
      isShow_back: !this.data.isShow_hand,
    });
    console.log("ccc");
    console.log(this.data.isShow_hand);
  },
  isn_error: function () {
    this.setData({
      isShow_hand: false,
      isShow_isn_error: !this.data.isShow_isn_error,
      isShow_by_isn: false,
    });
  },
  by_isn: function () {
    this.setData({
      isShow_hand: false,
      isShow_isn_error: false,
      isShow_by_isn: !this.data.isShow_by_isn,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  //tabBar部分
  onLoad: function (options) {
    template.tabbar("tabBar", 0, this);
  },
  quit: function () {
    this.setData({
      isShow_hand: false,
      isShow_isn_error: false,
      isShow_by_isn: false,
      isShow_back: false,
    });
    console.log("quit");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
