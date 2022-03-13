import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {
      // { shopId: { shopName:'', productList: { productId: {} } } }
      // shopId: {
      //   shopName: '',
      //   productList: {
      //     _id: '',
      //     name: '',
      //     imgUrl: '',
      //     sales: 0,
      //     price: 33.6,
      //     oldPrice: 39.6,
      //     count: 0
      //   }
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
      const shopInfo = state.cartList[shopId] || {
        shopName: '',
        productList: {}
      }
      let product = shopInfo.productList[productId]
      if (!product) {
        productInfo.count = 0
        product = productInfo
      }
      product.count += num
      payload.num > 0 && (product.check = true)
      product.count < 0 && (product.count = 0)
      shopInfo.productList[productId] = product
      state.cartList[shopId] = shopInfo
    },
    changeCartItemChecked (state, payload) {
      const {
        shopId,
        productId
      } = payload
      const product = state.cartList[shopId].productList[productId]
      product.check = !product.check
    },
    cleanCartProducts (state, payload) {
      const { shopId } = payload
      state.cartList[shopId].productList = {}
    },
    setCartItemsChecked (state, payload) {
      const { shopId } = payload
      const products = state.cartList[shopId].productList
      if (products) {
        for (const key in products) {
          const product = products[key]
          product.check = true
        }
      }
    },
    changeShopName (state, payload) {
      const {
        shopId,
        shopName
      } = payload
      const shopInfo = state.cartList[shopId] || {
        shopName: '',
        productList: {}
      }
      shopInfo[shopName] = shopName
      state.cartList[shopId] = shopInfo
    }
  },
  actions: {},
  modules: {}
})
