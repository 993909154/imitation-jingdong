<template>
  <div class="wrapper">
    <div class="title">我的全部购物车（2）</div>
    <div class="carts">
      <div class="cart" >
        <div class="cart_title">
          {{ 111 }}
        </div>
        <div class="cart_content">
          <div class="cart_content_imgs">
<!--            <template v-for="(innerItem, innerIndex) in item.products" :key="innerIndex">-->
<!--              <img :src="innerItem.product.img" alt="" class="cart_content_imgs_img" v-if="innerIndex <= 3">-->
<!--            </template>-->
          </div>
          <div class="cart_content_info">
            <div class="cart_content_info_price">¥{{ 111 }}</div>
            <div class="cart_content_info_count">共{{ 111 }}件</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Docker :currentIndex="1"/>
</template>

<script>
import Docker from '../../components/Docker'

export default {
  name: 'CartList',
  components: { Docker }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables";

.wrapper {
  overflow: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  background-color: $bgColor-eee;
}

.title {
  line-height: .44rem;
  background-color: $bgColor;
  font-size: .16rem;
  color: $content-fontcolor;
  text-align: center;
}

.carts {
}

.cart {
  margin: .16rem .18rem;
  padding: .16rem;
  background-color: $bgColor;
  bcart-radius: .04rem;

  &_title {
    margin-bottom: .16rem;
    line-height: .22rem;
    color: $content-fontcolor;
    font-size: .16rem;
  }

  &_status {
    font-size: .14rem;
    color: $light-fontColor;
    float: right;
  }

  &_content {
    display: flex;

    &_imgs {
      flex: 1;

      &_img {
        width: .4rem;
        height: .4rem;
        margin-right: .12rem;
      }
    }

    &_info {
      width: .7rem;
      text-align: right;

      &_price {
        font-size: .14rem;
        line-height: .2rem;
        margin-bottom: .04rem;
        color: $highlight-fontColor;
      }

      &_count {
        font-size: .12rem;
        color: $content-fontcolor;
        line-height: .14rem;
      }
    }
  }
}
</style>
