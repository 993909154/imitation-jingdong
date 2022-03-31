<template>
  <div class="products">
    <div class="products_title">{{ shopName }}</div>
    <div class="products_wrapper">
      <div class="products_list">
        <template v-for="(item, index) in productList" :key="item._id">
          <div class="products_item" v-if="index <= isShowProducts">
            <img class="products_item_img" :src="item.imgUrl" alt="">
            <div class="products_item_detail">
              <h4 class="products_item_title">{{ item.name }}</h4>
              <p class="products_item_price">
              <span class="products_item_single">
                <span class="products_item_yen">&yen; </span>
                {{ item.price }}  x  {{ item.count }}
              </span>
                <span class="products_item_total">
                <span class="products_item_yen">&yen; </span>
                {{ (item.price * item.count).toFixed(2) }}
              </span>
              </p>
            </div>
          </div>
        </template>
        <div class="products_item_statistics">
          <div class="products_item_weight" @click="handleExpand">
            <div class="products_item_weight_title">共计{{ orderProducts }}件/1.4kg</div>
            <div class="products_item_weight_pulldown iconfont">&#xe6db;</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { commonCartEffect } from '../../effects/cartEffect'
import { ref } from 'vue'

const useOrderExpandEffect = (orderProducts) => {
  const isShowProducts = ref(2)
  const handleExpand = () => {
    if (isShowProducts.value !== orderProducts) {
      isShowProducts.value = orderProducts
    } else {
      isShowProducts.value = 2
    }
  }
  return {
    handleExpand,
    isShowProducts
  }
}
export default {
  name: 'ProductList',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const {
      productList,
      shopName
    } = commonCartEffect(shopId)
    const orderProducts = Object.keys(productList.value).length
    const {
      handleExpand,
      isShowProducts
    } = useOrderExpandEffect(orderProducts)
    console.log(isShowProducts)
    return {
      productList,
      shopName,
      orderProducts,
      handleExpand,
      isShowProducts
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables";
@import "../../style/mixins";

.products {
  margin: .16rem .18rem .1rem;
  background-color: $bgColor;
  border-radius: .04rem .04rem 0 0;

  &_title {
    font-size: .16rem;
    color: $content-fontcolor;
    font-weight: bolder;
    padding: .16rem;
  }

  &_wrapper {
    overflow-y: scroll;
    margin: 0 .18rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: .6rem;
    top: 2.6rem;
  }

  &_list {
    background-color: $bgColor;
  }

  &_item {
    position: relative;
    display: flex;
    padding: 0 .16rem .16rem;

    &_detail {
      flex: 1;
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
      display: flex;
      margin: .06rem 0 0 0;
      line-height: .2rem;
      font-size: .15rem;
      color: $highlight-fontColor;
    }

    &_single {
    }

    &_total {
      text-align: right;
      color: #000;
      flex: 1;
    }

    &_yen {
      font-size: .12rem;
    }

    &_statistics {
      padding-bottom: .16rem;
    }

    &_weight {
      display: flex;
      font-size: .14rem;
      color: #999999;
      background: $search-bgColor;
      margin: 0 .16rem;
      width: 3.07rem;
      line-height: .28rem;
      justify-content: center;

      &_title {
        padding-right: .06rem;
      }

      &_pulldown {
        transform: rotate(270deg);
      }
    }
  }
}
</style>
