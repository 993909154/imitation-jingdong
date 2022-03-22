<template>
  <div class="wrapper">
    <div class="top">
      <div class="top_header">
        <div class="top_header_back iconfont" @click="handleBackClick">&#xe6db;</div>
        <div class="top_header_title">确认订单</div>
      </div>
      <div class="top_receiver">
        <div class="top_receiver_title">收货地址</div>
        <div class="top_receiver_adress">北京理工大学国防科技园2号楼10层</div>
        <div class="top_receiver_info">
          <span class="top_receiver_info_name">瑶妹（先生）</span>
          <span class="top_receiver_info_phone">18911024266</span>
        </div>
        <div class="top_receiver_info_choose iconfont">&#xe6db;</div>
      </div>
    </div>
    <div class="products">
      <div class="products_title">{{ shopName }}</div>
      <div class="products_wrapper">
        <div class="products_list">
          <tempalte v-for="item in productList" :key="item._id">
          <div class="products_item" v-if="item.count > 0">
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
          </tempalte>
          <div class="products_item_statistics">
            <div class="products_item_weight">
              <div class="products_item_weight_title">共计3件/1.4kg</div>
              <div class="products_item_weight_pulldown iconfont">&#xe6db;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="order">
      <div class="order_price">实付金额 <b class="order_total">¥{{ calculations.totalPrice }}</b></div>
      <div class="order_btn">提交订单</div>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { commonCartEffect } from '../../effects/cartEffect'

export default {
  name: 'OrderConfirmation',
  setup () {
    const route = useRoute()
    const router = useRouter()
    const shopId = route.params.id
    const handleBackClick = () => {
      router.back()
    }
    const {
      productList,
      shopName,
      calculations
    } = commonCartEffect(shopId)
    return {
      productList,
      shopName,
      handleBackClick,
      calculations
    }
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
  overflow-y: scroll;
}

.top {
  position: relative;
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0, 145, 255, 0.00) 4%, #0091FF 50%);
  background-repeat: no-repeat;

  &_header {
    position: relative;
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
  margin: .16rem .18rem .1rem;
  background-color: #FFF;
  border-radius: .04rem .04rem 0 0;

  &_title {
    font-size: .16rem;
    color: #333333;
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
    background-color: #FFF;
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
      background: #F5F5F5;
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

.order {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: .49rem;
  line-height: .49rem;
  background-color: #FFF;
  font-size: .14rem;

  &_price {
    flex: 1;
    text-indent: .24rem;
    color: #333333;
  }

  &_total {
    font-size: .16rem;
  }

  &_btn {
    width: .98rem;
    background-color: #4FB0F9;
    color: #FFF;
    text-align: center;
  }
}
</style>
