// pages/component-share/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shareOne: {
      avatar: '',
      nickname: '',
      showShareModel: false
    },
    shareTwo: {
      avatar: '',
      nickname: '',
      incomeMoney: '',
      joinNumber: '',
      joinAvatarList: '',
      adImageUrl: '',
      adName: '',
      adTime: '',
      showShareModel: false
    },

    shareThree: {
      avatar: '',
      nickname: '',
      awardMoney: '',
      showShareModel: false
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  handleTapOne: function(){
    this.setData({
      shareOne: {
        avatar: 'https://wx.qlogo.cn/mmopen/vi_32/gcs9nfrPIjZSfZvMmVCK81MpPbWqDspNfc2lRLqllfrpYT61RQWNMHXCfzSia7OiapOfXTjYFR6EF7JQZib5MRCdA/132',
        nickname: '极客学苑',
        showShareModel: true
      }
    })
  },

  handleTapTwo: function () {
    this.setData({
      shareTwo: {
        avatar: 'https://wx.qlogo.cn/mmopen/vi_32/gcs9nfrPIjZSfZvMmVCK81MpPbWqDspNfc2lRLqllfrpYT61RQWNMHXCfzSia7OiapOfXTjYFR6EF7JQZib5MRCdA/132',
        nickname: 'stone',
        incomeMoney: '666',
        joinNumber: '100',
        joinAvatarList: ['https://wx.qlogo.cn/mmopen/vi_32/gcs9nfrPIjZSfZvMmVCK81MpPbWqDspNfc2lRLqllfrpYT61RQWNMHXCfzSia7OiapOfXTjYFR6EF7JQZib5MRCdA/132', 'https://wx.qlogo.cn/mmopen/vi_32/gcs9nfrPIjZSfZvMmVCK81MpPbWqDspNfc2lRLqllfrpYT61RQWNMHXCfzSia7OiapOfXTjYFR6EF7JQZib5MRCdA/132', 'https://wx.qlogo.cn/mmopen/vi_32/gcs9nfrPIjZSfZvMmVCK81MpPbWqDspNfc2lRLqllfrpYT61RQWNMHXCfzSia7OiapOfXTjYFR6EF7JQZib5MRCdA/132', 'https://wx.qlogo.cn/mmopen/vi_32/gcs9nfrPIjZSfZvMmVCK81MpPbWqDspNfc2lRLqllfrpYT61RQWNMHXCfzSia7OiapOfXTjYFR6EF7JQZib5MRCdA/132', 'https://wx.qlogo.cn/mmopen/vi_32/gcs9nfrPIjZSfZvMmVCK81MpPbWqDspNfc2lRLqllfrpYT61RQWNMHXCfzSia7OiapOfXTjYFR6EF7JQZib5MRCdA/132'],
        adImageUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2155967225,3553147031&fm=27&gp=0.jpg',
        adName: '极客学苑超神之路',
        adTime: '5月20日 ~ 5月21日',
        showShareModel: true
      },
    })
  },

  handleTapThree: function () {
    this.setData({
      shareThree: {
        avatar: 'https://wx.qlogo.cn/mmopen/vi_32/gcs9nfrPIjZSfZvMmVCK81MpPbWqDspNfc2lRLqllfrpYT61RQWNMHXCfzSia7OiapOfXTjYFR6EF7JQZib5MRCdA/132',
        nickname: '极客学苑',
        awardMoney: '200',
        showShareModel: true
      }
    })
  }
})