<template>
  <div class="content">
    <div class="category">
      <div :class="{'category_item': true, 'category_item-active': currentTab === item.tab}" v-for="item in categories"
           :key="item.name" @click="() => handleTabClick(item.tab)">{{ item.name }}
      </div>
    </div>
    <div class="product">
      <div class="product_item" v-for="item in list" :key="item._id">
        <img class="product_item_img" :src="item.imgUrl" alt="">
        <div class="product_item_detail">
          <h4 class="product_item_title">{{ item.name }}</h4>
          <p class="product_item_sales">月售 {{ item.sales }} 件</p>
          <p class="product_item_price">
            <span class="product_item_yen">&yen;</span>{{ item.price }}
            <span class="product_item_origin">&yen;{{ item.oldPrice }}</span>
          </p>
        </div>
        <div class="product_number">
          <span class="product_number_minus" @click="() => {changCartItem(shopId, item._id, item, -1, shopName)}">-</span>
          <span class="product_number_counter">{{ cartList?.[shopId]?.productList?.[item._id]?.count || 0 }}</span>
          <span class="product_number_add" @click="() => {changCartItem(shopId, item._id, item, 1, shopName)}">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from '../../utils/request'
import { useRoute } from 'vue-router'
import { reactive, ref, toRefs, watchEffect } from 'vue'
import { commonCartEffect } from '../../effects/cartEffect'
import { useStore } from 'vuex'

const categories = [
  {
    name: '全部商品',
    tab: 'all'
  },
  {
    name: '秒杀',
    tab: 'seckill'
  },
  {
    name: '新鲜水果',
    tab: 'fruit'
  }]
// 切换tab相关的逻辑
const useTabEffect = () => {
  const currentTab = ref(categories[0].tab)
  const handleTabClick = (tab) => {
    currentTab.value = tab
  }
  return {
    handleTabClick,
    currentTab
  }
}

// 展示content右边商品列表相关逻辑
const useCurrentListEffect = (currentTab, shopId) => {
  const content = reactive({
    list: []
  })
  const getContentData = async () => {
    const result = await get(`api/shop/${shopId}/products`, { tab: currentTab.value })
    if (result?.errno === 0 && result?.data?.length) {
      content.list = result.data
    }
  }
  watchEffect(() => {
    getContentData()
  })
  const {
    list
  } = toRefs(content)
  return {
    list
  }
}

// 购物车相关逻辑
const useCartEffect = () => {
  const store = useStore()
  const {
    cartList,
    changeCartItemInfor
  } = commonCartEffect()
  const changeShopName = (shopId, shopName) => {
    store.commit('changeShopName', {
      shopId, shopName
    })
  }
  const changCartItem = (shopId, productId, item, num, shopName) => {
    changeCartItemInfor(shopId, productId, item, num)
    changeShopName(shopId, shopName)
  }
  const getCartItemCount = (shopId, productId) => {
    return cartList?.[shopId]?.productList?.[productId]?.count || 0
  }
  return { cartList, changCartItem, getCartItemCount }
}
export default {
  name: 'Content',
  props: ['shopName'],
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const {
      handleTabClick,
      currentTab
    } = useTabEffect()
    const {
      list
    } = useCurrentListEffect(currentTab, shopId)
    const { cartList, changCartItem, getCartItemCount } = useCartEffect()
    return {
      list,
      categories,
      currentTab,
      shopId,
      cartList,
      handleTabClick,
      getCartItemCount,
      changCartItem
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables";
@import "../../style/mixins";

.content {
  display: flex;
  position: absolute;
  top: 1.5rem;
  bottom: .5rem;
  left: 0;
  right: 0;
}

.category {
  overflow-y: scroll;
  width: .76rem;
  height: 100%;
  background: $search-bgColor;

  &_item {
    background: $search-bgColor;
    border-radius: .02rem;
    font-size: .14rem;
    color: $content-fontcolor;
    line-height: .4rem;
    text-align: center;

    &-active {
      background: $bgColor;
    }
  }
}

.product {
  flex: 1;
  overflow-y: scroll;

  &_item {
    position: relative;
    display: flex;
    padding-bottom: .12rem;
    margin: 0 .16rem;
    border-bottom: .01rem solid $content-bgColor;

    &_detail {
      overflow: hidden;
    }

    &_img {
      height: .68rem;
      width: .68rem;
      margin-right: .16rem;
    }

    &_title {
      font-size: .14rem;
      color: $content-fontcolor;
      line-height: .2rem;
      margin: 0;
      @include ellipsis;
    }

    &_sales {
      line-height: .16rem;
      font-size: .12rem;
      color: $content-fontcolor;
      margin: .06rem 0;
    }

    &_price {
      margin: 0;
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
      display: inline-block;
      text-align: center;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
      width: .2rem;
    }
  }

}
</style>
