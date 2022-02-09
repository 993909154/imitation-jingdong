<template>
  <div class="position">
    <span class="iconfont position_icon">&#xe7f1;</span>
    北京理工大学国防科技园2号楼10层
    <span class="iconfont position_notice">&#xe613;</span>
  </div>
  <div class="search">
    <span class="iconfont">&#xe741;</span>
    <span>山姆会员商店优惠商品</span>
  </div>
  <div class="banner">
    <img class="banner_img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt="">
  </div>
  <div class="icons">
    <div v-for="(item,index) in iconList" :key="index" class="icons_item">
      <img :src="`http://www.dell-lee.com/imgs/vue3/${item.icon}.png`" alt="" class="icons_item_img">
      <p class="icons_item_desc">{{item.desc}}</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconList = [
      {
        icon: '超市',
        desc: '超市便利'
      },
      {
        icon: '菜市场',
        desc: '菜市场'
      },
      {
        icon: '水果店',
        desc: '水果店'
      },
      {
        icon: '鲜花',
        desc: '鲜花绿植'
      },
      {
        icon: '医药健康',
        desc: '医药健康'
      },
      {
        icon: '蛋糕',
        desc: '烘焙蛋糕'
      },
      {
        icon: '家居',
        desc: '家居时尚'
      },
      {
        icon: '签到',
        desc: '签到'
      },
      {
        icon: '大牌免运',
        desc: '大牌免运'
      },
      {
        icon: '红包',
        desc: '红包套餐'
      }
    ]
    return { iconList }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";

.position {
  color: $content-fontcolor;
  position: relative;
  padding: .16rem .24rem .16rem 0;
  line-height: .22rem;
  font-size: .16rem;
  @include ellipsis;

  .position_icon {
    position: relative;
    top: .01rem;
    font-size: .2rem;
  }

  .position_notice {
    position: absolute;
    top: .17rem;
    right: 0;
    font-size: .2rem;
  }
}

.search {
  margin-bottom: .12rem;
  line-height: .32rem;
  background-color: #F5F5F5;
  color: #B7B7B7;
  border-radius: .16rem;
  font-size: .14rem;

  .iconfont {
    font-size: .2rem;
    display: inline-block;
    position: relative;
    top: .02rem;
    padding: 0 .01rem 0 .16rem;
  }
}

.banner {
  margin-bottom: .12rem;
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;

  &_img {
    width: 100%;
  }
}

.icons {
  display: flex;
  flex-wrap: wrap;

  &_item {
    width: 20%;

    &_img {
      display: block;
      height: .4rem;
      width: .4rem;
      margin: 0 auto;
    }

    &_desc {
      text-align: center;
      color: $content-fontcolor;
    }
  }
}

.gap {
  height: .1rem;
  background-color: $content-bgColor;
  margin: 0 -.18rem;
}
</style>
