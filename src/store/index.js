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
      if (payload.num > 0) {
        product.check = true
      }
      if (product.count < 0) {
        product.count = 0
      }
      shopInfo[productId] = product
      state.cartList[shopId] = shopInfo
    },
    changeCartItemChecked (state, payload) {
      const {
        shopId,
        productId
      } = payload
      const product = state.cartList[shopId][productId]
      product.check = !product.check
    }
  },
  actions: {},
  modules: {}
})
