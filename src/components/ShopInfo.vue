<template>
  <div class="shop">
    <img class="shop_item_img" :src="item.imgUrl" alt="">
    <div :class="{'shop_item_content': true, 'shop_item_content-bordered': hideBorder ? false : true}">
      <div class="shop_item_content_title">{{ item.name }}</div>
      <div class="shop_item_content_tags">
        <span class="shop_item_content_tag">月售：{{ item.sales }}</span>
        <span class="shop_item_content_tag">起送：{{ item.expressLimit }}</span>
        <span class="shop_item_content_tag">基础运费：{{ item.expressPrice }}</span>
      </div>
      <p class="shop_item_content_highLight">{{ item.slogan }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: ['item', 'hideBorder']
}
</script>

<style lang="scss" scoped>
@import "../style/viriables";

.shop {
  display: flex;
  padding-top: .12rem;

  &_item {
    &_img {
      width: .56rem;
      height: .56rem;
      margin-right: .16rem;
    }

    &_content {
      flex: 1;
      &-bordered {
        border-bottom: .01rem solid $content-bgColor;
      }
      padding-bottom: .12rem;

      &_title {
        line-height: .22rem;
        font-size: .16rem;
        color: $content-fontcolor;
      }

      &_tags {
        line-height: .18rem;
        font-size: .13rem;
        color: $content-fontcolor;
      }

      &_tag {
        margin-right: .16rem;
      }

      &_highLight {
        margin: .08rem 0 0 0;
        line-height: .18rem;
        font-size: .13rem;
        color: $highlight-fontColor;
      }
    }
  }
}
</style>
