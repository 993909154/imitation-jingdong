<template>
  <div class="nearby">
    <h3 class="nearby_title">附近店铺</h3>
    <div v-for="item in nearByList" class="nearby_item" :key="item.id">
      <img class="nearby_item_img" :src="item.imgUrl" alt="">
      <div class="nearby_item_content">
        <div class="nearby_item_content_title">{{ item.title }}</div>
        <div class="nearby_item_content_tags">
          <span v-for="(innerItem, innerIndex) in item.tags" :key="innerIndex" class="nearby_item_content_tag">{{
              innerItem
            }}</span>
        </div>
        <p class="nearby_item_content_highLight">{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NearBy',
  setup () {
    const nearByList = [
      {
        id: 1,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '沃尔玛',
        tags: ['月售1万', '起送¥0', '基础运费¥5'],
        desc: 'VIP尊享满89元减4元运费券（每月3张）'
      }
    ]
    return { nearByList }
  }
}
</script>

<style lang="scss" scoped>
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
