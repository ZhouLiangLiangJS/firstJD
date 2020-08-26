module.exports = {
  request,
  uploadFile,
}

let ajaxTimes = 0; // 处理数据请求的总数，用来控制loading图标

/** 
 * 处理数据请求的接口
 */
function request(params) {
  ajaxTimes++
  wx.showLoading({
    title: '加载中',
    mask: true
  })
  const baseUrl = "http://2087p773d1.wicp.vip/"
  return new Promise((resolve, reject) => {
    wx.request({
      ...params,
      url: baseUrl + params.url,
      dataType: 'json',
      header: {
        "accept": "*/*",
        "conent-type": "application/json",
        "token": wx.getStorageSync("token"),
      },
      success: (result) => {
        resolve(result)
      },
      fail: (err) => {
        reject(err)
      },
      complete: () => {
        ajaxTimes--
        if(ajaxTimes === 0) {
          wx.hideLoading()
        }
      }
    })
  })
}

let ajaxFileTimes = 0 // 上传的请求数量

/**
 * 上传图片
 */
function uploadFile(loaclFile) {
  ajaxFileTimes++
  wx.showLoading({
    title: '加载中',
    mask: true
  })
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: 'https://example.weixin.qq.com/upload',
      filePath: loaclFile,
      name: 'file',
      header: {
        "Content-Type": "multipart/form-data"
      },
      formData: {
        'user': 'test'
      },
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      },
      complete() {
        ajaxFileTimes--
        if (ajaxFileTimes === 0) {
          wx.hideLoading()
        }
      }
    })
  })
}