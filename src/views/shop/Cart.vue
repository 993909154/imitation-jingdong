<template>
  <div class="mask" v-if="showCart && calculations.total > 0" @click="handleCartShowChange"/>
  <div class="cart">
    <div class="product" v-if="showCart && calculations.total > 0">
      <div class="product_header">
        <div class="product_header_all" @click="() => {setCartItemsChecked(shopId)}">
          <span class="product_header_icon iconfont"
                v-html="calculations.allChecked ? '&#xe70f;' : '&#xe619;'"
          ></span>
          全选
        </div>
        <div class="product_header_clear">
          <span class="product_header_clear_btn" @click="() => {cleanCartProducts(shopId)}">清空购物车</span>
        </div>
      </div>
      <template v-for="item in productList" :key="item._id">
        <div class="product_item" v-if="item.count > 0">
          <div class="product_item_checked iconfont"
               v-html="item.check ? '&#xe70f;' : '&#xe619;'"
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
        <img class="check_icon_img" src="http://www.dell-lee.com/imgs/vue3/basket.png" alt=""
             @click="handleCartShowChange">
        <div class="check_icon_tag">{{ calculations.total }}</div>
      </div>
      <div class="check_info">总计：<span class="check_info_price">&yen;{{ calculations.totalPrice }}</span></div>
      <div class="check_btn" @click="handleOrderCreation()">去结算</div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import { commonCartEffect } from '../../effects/cartEffect'

const useCartEffect = (shopId) => {
  const store = useStore()
  const {
    productList,
    changeCartItemInfor,
    calculations
  } = commonCartEffect(shopId)

  const changeCartItemChecked = (shopId, productId) => {
    store.commit('changeCartItemChecked', {
      shopId,
      productId
    })
  }
  const cleanCartProducts = (shopId) => {
    store.commit('cleanCartProducts', {
      shopId
    })
  }
  const setCartItemsChecked = (shopId) => {
    store.commit('setCartItemsChecked', {
      shopId
    })
  }
  return {
    calculations,
    productList,
    changeCartItemChecked,
    cleanCartProducts,
    setCartItemsChecked,
    changeCartItemInfor
  }
}

// 展示隐藏购物车逻辑
const toggleCartEffect = () => {
  const showCart = ref(false)
  const handleCartShowChange = () => {
    showCart.value = !showCart.value
  }
  return {
    showCart,
    handleCartShowChange
  }
}

// 跳转结算页面
const OrderCreationEffect = (shopId) => {
  const router = useRouter()
  const handleOrderCreation = () => {
    router.push({ path: `/orderConfirmation/${shopId}` })
  }
  return { handleOrderCreation }
}
export default {
  name: 'Cart',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const {
      showCart,
      handleCartShowChange
    } = toggleCartEffect()
    const {
      calculations,
      productList,
      changeCartItemChecked,
      cleanCartProducts,
      setCartItemsChecked,
      changeCartItemInfor
    } = useCartEffect(shopId)
    const { handleOrderCreation } = OrderCreationEffect(shopId)
    return {
      calculations,
      productList,
      shopId,
      changeCartItemInfor,
      changeCartItemChecked,
      cleanCartProducts,
      setCartItemsChecked,
      showCart,
      handleCartShowChange,
      handleOrderCreation
    }
  }

}
</script>

<style lang="scss" scoped>
@import "../../style/viriables";
@import "../../style/mixins";

.mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.50);
  z-index: 1;
}

.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px 0 $content-bgColor;
  background-color: $bgColor;
  z-index: 2;
}

.product {
  flex: 1;
  overflow-y: scroll;
  background: $bgColor;

  &_header {
    display: flex;
    line-height: .52rem;
    border-bottom: .01rem solid $content-bgColor;
    font-size: .14rem;
    color: $content-fontcolor;
    margin: 0 .16rem;

    &_all {
      width: .64rem;
    }

    &_icon {
      color: $btn-bgColor;
      font-size: .2rem;
    }

    &_clear {
      flex: 1;
      text-align: right;

      &_btn {
        display: inline-block;
      }
    }
  }

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
    top: 50%;
    transform: translateY(-50%);
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
      display: inline-block;
      text-align: center;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
      width: .2rem;
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
    color: $content-fontcolor;
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
