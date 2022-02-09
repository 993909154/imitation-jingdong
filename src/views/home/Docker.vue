<template>
  <div class="docker">
    <div v-for="(item,index) in dockerList" :key="item.icon"
         :class="{'docker_item' : true, 'docker_item--active': index === 0 }"
    >
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker_title">{{ item.text }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      {
        icon: '&#xe692;',
        text: '首页'
      },
      {
        icon: '&#xe62e;',
        text: '购物车'
      },
      {
        icon: '&#xe713;',
        text: '订单'
      },
      {
        icon: '&#xe7ae;',
        text: '我的'
      }
    ]
    return { dockerList }
  }
}

</script>
<style lang="scss" scoped>
@import "../../style/viriables";

.docker {
  display: flex;
  position: absolute;
  box-sizing: border-box;
  padding: .07rem .18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  border-top: .01rem solid $content-bgColor;
  box-shadow: 0 -1px 1px 0 $content-bgColor;
  color: $content-fontcolor;

  &_item {
    flex: 1;
    text-align: center;

    .iconfont {
      margin: 0 0 .02rem 0;
      font-size: .18rem;
    }

    &--active {
      color: #1FA4FC
    }
  }

  &_title {
    font-size: .2rem;
    //浏览器所能显示的最小像素为12px，如果要使用小于12px的像素，请使用transform
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
