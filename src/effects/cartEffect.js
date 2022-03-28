import { useStore } from 'vuex'
import { computed } from 'vue'

export const commonCartEffect = (shopId) => {
  const store = useStore()
  const cartList = store.state.cartList
  const productList = computed(() => {
    const productList = cartList[shopId]?.productList || {}
    const notEmptyProductList = {}
    for (const i in productList) {
      const product = productList[i]
      if (product.count > 0) {
        notEmptyProductList[i] = product
      }
    }
    return notEmptyProductList
  })
  const shopName = computed(() => {
    const shopName = cartList[shopId]?.shopName || ''
    return shopName
  })
  const changeCartItemInfor = (shopId, productId, productInfo, num) => {
    store.commit('changeCartItemInfor', {
      shopId,
      productId,
      productInfo,
      num
    })
  }
  const calculations = computed(() => {
    const productList = cartList[shopId]?.productList
    const result = {
      total: 0,
      totalPrice: 0,
      allChecked: true
    }
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        result.total += product.count
        if (product.check) {
          result.totalPrice += (product.count * product.price)
        }
        if (product.count > 0 && !product.check) {
          result.allChecked = false
        }
      }
      if (result.total >= 100) {
        result.total = 99 + '+'
      }
    }
    result.totalPrice = result.totalPrice.toFixed(2)
    return result
  })

  return {
    cartList,
    productList,
    shopName,
    changeCartItemInfor,
    calculations
  }
}
