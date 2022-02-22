<template>
  <div class="cart">
    <div class="check">
      <div class="check_icon">
        <img class="check_icon_img" src="http://www.dell-lee.com/imgs/vue3/basket.png" alt="">
        <div class="check_icon_tag">{{ total }}</div>
      </div>
      <div class="check_info">总计：<span class="check_info_price">&yen;{{ totalPrice }}</span></div>
      <div class="check_btn">去结算</div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const useCartEffect = () => {
  const store = useStore()
  const route = useRoute()
  const cartList = store.state.cartList
  const shopId = route.params.id
  const total = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        count += product.count
      }
      if (count >= 100) {
        count = 99 + '+'
      }
    }
    return count
  })
  const totalPrice = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        count += (product.count * product.price)
      }
    }
    return count.toFixed(2)
  })
  return {
    total,
    totalPrice
  }
}

export default {
  name: 'Cart',
  setup () {
    const {
      total,
      totalPrice
    } = useCartEffect()
    return {
      total,
      totalPrice
    }
  }

}
</script>

<style lang="scss" scoped>
@import "../../style/viriables";

.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: .49rem;
  box-shadow: 0 -1px 1px 0 $content-bgColor;
  background-color: $white-fontColor;
}

.check {
  display: flex;
  line-height: .5rem;

  &_icon {
    position: relative;
    width: .84rem;

    &_img {
      display: block;
      height: .26rem;
      width: .28rem;
      margin: .12rem auto;
    }

    &_tag {
      position: absolute;
      left: .46rem;
      top: .04rem;
      padding: 0 .04rem;
      min-width: .2rem;
      height: .2rem;
      background-color: $highlight-fontColor;
      border-radius: .1rem;
      font-size: .12rem;
      line-height: .2rem;
      text-align: center;
      color: $white-fontColor;
      transform: scale(.5, .5);
      transform-origin: left center;
    }
  }

  &_info {
    flex: 1;
    color: #333333;
    font-size: .12rem;

    &_price {
      font-size: .18rem;
      color: $highlight-fontColor;
    }
  }

  &_btn {
    width: .98rem;
    font-size: .14rem;
    color: $white-fontColor;
    text-align: center;
    background-color: $btn-bgColor-aqua;
  }
}
</style>
