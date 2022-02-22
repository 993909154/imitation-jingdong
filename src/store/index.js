import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {
      // shopId: {
      //   _id: '',
      //   name: '',
      //   imgUrl: '',
      //   sales: 0,
      //   price: 33.6,
      //   oldPrice: 39.6,
      //   count: 0
      // }
    }
  },
  mutations: {
    changeCartItemInfor (state, payload) {
      const {
        shopId,
        productId,
        productInfo,
        num
      } = payload
      let shopInfo = state.cartList[shopId]
      if (!shopInfo) {
        shopInfo = {}
      }
      let product = shopInfo[productId]
      if (!product) {
        product = productInfo
        product.count = 0
      }
      product.count += num
      if (product.count < 0) {
        product.count = 0
      }
      shopInfo[productId] = product
      state.cartList[shopId] = shopInfo
    }
  },
  actions: {},
  modules: {}
})
