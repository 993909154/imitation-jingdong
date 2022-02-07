<template>
  <div class="nearby">
    <h3 class="nearby_title">附近店铺</h3>
    <div class="nearby_item">
      <img class="nearby_item_img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
      <div class="nearby_item_content">
        <div class="nearby_item_content_title">沃尔玛</div>
        <div class="nearby_item_content_tags">
          <span class="nearby_item_content_tag">月售1万+</span>
          <span class="nearby_item_content_tag">起送¥0</span>
          <span class="nearby_item_content_tag">基础运费¥5</span>
        </div>
        <p class="nearby_item_content_highLight">VIP尊享满89元减4元运费券（每月3张）</p>
      </div>
    </div>
    <div class="nearby_item">
      <img class="nearby_item_img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
      <div class="nearby_item_content">
        <div class="nearby_item_content_title">沃尔玛</div>
        <div class="nearby_item_content_tags">
          <span class="nearby_item_content_tag">月售1万+</span>
          <span class="nearby_item_content_tag">起送¥0</span>
          <span class="nearby_item_content_tag">基础运费¥5</span>
        </div>
        <p class="nearby_item_content_highLight">VIP尊享满89元减4元运费券（每月3张）</p>
      </div>
    </div>
    <div class="nearby_item">
      <img class="nearby_item_img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
      <div class="nearby_item_content">
        <div class="nearby_item_content_title">沃尔玛</div>
        <div class="nearby_item_content_tags">
          <span class="nearby_item_content_tag">月售1万+</span>
          <span class="nearby_item_content_tag">起送¥0</span>
          <span class="nearby_item_content_tag">基础运费¥5</span>
        </div>
        <p class="nearby_item_content_highLight">VIP尊享满89元减4元运费券（每月3张）</p>
      </div>
    </div>
    <div class="nearby_item">
      <img class="nearby_item_img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
      <div class="nearby_item_content">
        <div class="nearby_item_content_title">沃尔玛</div>
        <div class="nearby_item_content_tags">
          <span class="nearby_item_content_tag">月售1万+</span>
          <span class="nearby_item_content_tag">起送¥0</span>
          <span class="nearby_item_content_tag">基础运费¥5</span>
        </div>
        <p class="nearby_item_content_highLight">VIP尊享满89元减4元运费券（每月3张）</p>
      </div>
    </div>
    <div class="nearby_item">
      <img class="nearby_item_img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
      <div class="nearby_item_content">
        <div class="nearby_item_content_title">沃尔玛</div>
        <div class="nearby_item_content_tags">
          <span class="nearby_item_content_tag">月售1万+</span>
          <span class="nearby_item_content_tag">起送¥0</span>
          <span class="nearby_item_content_tag">基础运费¥5</span>
        </div>
        <p class="nearby_item_content_highLight">VIP尊享满89元减4元运费券（每月3张）</p>
      </div>
    </div>
    <div class="nearby_item">
      <img class="nearby_item_img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
      <div class="nearby_item_content">
        <div class="nearby_item_content_title">沃尔玛</div>
        <div class="nearby_item_content_tags">
          <span class="nearby_item_content_tag">月售1万+</span>
          <span class="nearby_item_content_tag">起送¥0</span>
          <span class="nearby_item_content_tag">基础运费¥5</span>
        </div>
        <p class="nearby_item_content_highLight">VIP尊享满89元减4元运费券（每月3张）</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NearBy'
}
</script>

<style lang="scss">
@import "../../style/viriables";

.nearby {
  &_title {
    margin: .16rem 0 .04rem 0;
    font-size: .18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }

  &_item {
    display: flex;
    padding-top: .12rem;

    &_img {
      width: .56rem;
      height: .56rem;
      margin-right: .16rem;
    }

    &_content {
      flex: 1;
      border-bottom: 1px solid $content-bgColor;
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
        color: #E93B3B;
      }
    }
  }
}

</style>
