import { useStore } from 'vuex'

export const commonCartEffect = () => {
  const store = useStore()
  const cartList = store.state.cartList
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
    changeCartItemInfor
  }
}
