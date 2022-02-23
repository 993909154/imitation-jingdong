<template>
  <div class="cart">
    <div class="product">
      <template v-for="item in productList" :key="item._id">
        <div class="product_item" v-if="item.count > 0">
          <div class="product_item_checked iconfont"
               v-html="item.check ? '&#xe7e2;' : '&#xe6f7;'"
               @click="() => {changeCartItemChecked(shopId, item._id)}"
          />
          <img class="product_item_img" :src="item.imgUrl" alt="">
          <div class="product_item_detail">
            <h4 class="product_item_title">{{ item.name }}</h4>
            <p class="product_item_price">
              <span class="product_item_yen">&yen;</span>{{ item.price }}
              <span class="product_item_origin">&yen;{{ item.oldPrice }}</span>
            </p>
          </div>
          <div class="product_number">
            <span class="product_number_minus" @click="() => {changeCartItemInfor(shopId, item._id, item, -1)}">-</span>
            <span class="product_number_counter">{{ item.count }}</span>
            <span class="product_number_add" @click="() => {changeCartItemInfor(shopId, item._id, item, 1)}">+</span>
          </div>
        </div>
      </template>
    </div>
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
import { commonCartEffect } from './commonCartEffect'

const useCartEffect = (shopId) => {
  const store = useStore()
  const cartList = store.state.cartList
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
        if (product.check) {
          count += (product.count * product.price)
        }
      }
    }
    return count.toFixed(2)
  })
  const productList = computed(() => {
    const productList = cartList[shopId] || []
    return productList
  })
  const changeCartItemChecked = (shopId, productId) => {
    store.commit('changeCartItemChecked', {
      shopId,
      productId
    })
  }
  return {
    total,
    totalPrice,
    productList,
    changeCartItemChecked
  }
}

export default {
  name: 'Cart',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const {
      total,
      totalPrice,
      productList,
      changeCartItemChecked
    } = useCartEffect(shopId)
    const {
      cartList,
      changeCartItemInfor
    } = commonCartEffect()
    return {
      total,
      totalPrice,
      productList,
      cartList,
      shopId,
      changeCartItemInfor,
      changeCartItemChecked
    }
  }

}
</script>

<style lang="scss" scoped>
@import "../../style/viriables";
@import "../../style/mixins";

.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px 0 $content-bgColor;
  background-color: $white-fontColor;
}

.product {
  flex: 1;
  overflow-y: scroll;
  background: $bgColor;

  &_item {
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid $content-bgColor;

    &_checked {
      line-height: .46rem;
      font-size: .2rem;
      color: $btn-bgColor;
      margin-right: .16rem;
    }

    &_detail {
      overflow: hidden;
    }

    &_img {
      height: .46rem;
      width: .46rem;
      margin-right: .16rem;
    }

    &_title {
      font-size: .14rem;
      color: $content-fontcolor;
      line-height: .2rem;
      margin: 0;
      @include ellipsis;
    }

    &_price {
      margin: .06rem 0 0 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $highlight-fontColor;
    }

    &_yen {
      font-size: .12rem;
    }

    &_origin {
      font-size: .12rem;
      color: $light-fontColor;
      line-height: .2rem;
      text-decoration: line-through;
      margin-left: .06rem;
    }
  }

  &_number {
    position: absolute;
    bottom: .12rem;
    right: 0;

    &_minus, &_add {
      display: inline-block;
      width: .2rem;
      height: .2rem;
      line-height: .2rem;
      border-radius: 50%;
      font-size: .2rem;
      text-align: center;
    }

    &_minus {
      border: .01rem solid $medium-fontColor;
      color: $medium-fontColor;
      margin-right: .05rem;
    }

    &_add {
      background-color: $btn-bgColor;
      color: $bgColor;
      margin-left: .05rem;
    }

    &_counter {
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
    }
  }

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
