import { useStore } from 'vuex'
import { toRefs } from 'vue'

export const commonCartEffect = () => {
  const store = useStore()
  const changeCartItemInfor = (shopId, productId, productInfo, num) => {
    store.commit('changeCartItemInfor', {
      shopId,
      productId,
      productInfo,
      num
    })
  }
  const { cartList } = toRefs(store.state)
  return {
    cartList,
    changeCartItemInfor
  }
}
