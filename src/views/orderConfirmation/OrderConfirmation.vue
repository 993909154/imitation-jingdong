<template>
  <div class="wrapper">
    <div class="top">
      <div class="top_header">
        <div class="top_header_back iconfont">&#xe6db;</div>
        <div class="top_header_title">确认订单</div>
      </div>
      <div class="top_receiver">
        <div class="top_receiver_title">收货地址</div>
        <div class="top_receiver_adress">北京理工大学国防科技园2号楼10层</div>
        <div class="top_receiver_info">
          <span class="top_receiver_info_name">瑶妹</span>
          <span class="top_receiver_info_phone">18911024266</span>
        </div>
        <div class="top_receiver_info_choose iconfont">&#xe6db;</div>
      </div>
    </div>
    <div class="products">
      <div class="products_title">{{ shopName }}</div>
      <div class="products_list">
        <div class="products_item" v-for="item in productList" :key="item._id">
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
                {{ item.price * item.count }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { commonCartEffect } from '../../effects/cartEffect'

export default {
  name: 'OrderConfirmation',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { productList, shopName } = commonCartEffect(shopId)
    return { productList, shopName }
  }
}
</script>
<style lang="scss" scoped>
@import "src/style/viriables";
@import "src/style/mixins";

.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #EEE;
}

.top {
  position: relative;
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0, 145, 255, 0.00) 4%, #0091FF 50%);
  background-color: #EEE;
  background-repeat: no-repeat;

  &_header {
    padding-top: .4rem;
    line-height: .24rem;
    color: #FFFFFF;
    text-align: center;
    font-size: .16rem;

    &_back {
      position: absolute;
      left: .18rem;
      font-size: .22rem
    }
  }

  &_receiver {
    position: absolute;
    left: .18rem;
    right: .18rem;
    bottom: 0;
    height: 1.11rem;
    background: #FFF;
    border-radius: .04rem;

    &_title {
      padding: .16rem 0 .14rem .16rem;
      line-height: .22rem;
      font-size: .16rem;
      color: #333;
      font-weight: bolder;
    }

    &_adress {
      padding: 0 .4rem 0 .16rem;
      line-height: .2rem;
      font-size: .14rem;
      color: #333;
    }

    &_info {
      padding: .06rem 0 0 .16rem;

      &_name, &_phone {
        line-height: .18rem;
        font-size: .12rem;
        color: #666;
        margin-right: .06rem;
      }

      &_choose {
        position: absolute;
        right: .16rem;
        top: .5rem;
        color: #666;
        font-size: .2rem;
        transform: rotate(180deg);
      }
    }
  }
}

.products {
  margin: .16rem .18rem 0;
  background-color: #FFF;
  border-radius: .04rem .04rem 0 0;

  &_title {
    font-size: .16rem;
    color: #333333;
    font-weight: bolder;
    padding: .16rem;
  }

  &_list {
  }

  &_item {
    position: relative;
    display: flex;
    padding-bottom: .15rem;
    margin: 0 .16rem;
    border-bottom: .01rem solid $content-bgColor;

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
  }
}

</style>
