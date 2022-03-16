import { useStore } from 'vuex'
import { computed } from 'vue'

export const commonCartEffect = (shopId) => {
  const store = useStore()
  const cartList = store.state.cartList
  const productList = computed(() => {
    const productList = cartList[shopId]?.productList || []
    return productList
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
  return {
    cartList,
    productList,
    changeCartItemInfor,
    shopName
  }
}
