<template>
  <div class="wrapper">
    <div class="position">
      <span class="iconfont position_icon">&#xe7f1;</span>
      北京理工大学国防科技园2号楼10层
      <span class="iconfont position_notice">&#xe613;</span>
    </div>
  </div>
  <div class="docker">
    <span class="docker_item docker_item--active">
      <div class="iconfont">&#xe692;</div>
      <div class="docker_title">首页</div>
    </span>
    <span class="docker_item">
      <div class="iconfont">&#xe62e;</div>
      <div class="docker_title">购物车</div>
      </span>
    <span class="docker_item">
      <div class="iconfont">&#xe713;</div>
      <div class="docker_title">订单</div>
    </span>
    <span class="docker_item">
      <div class="iconfont">&#xe7ae;</div>
      <div class="docker_title">我的</div>
    </span>
  </div>
</template>

<style lang="scss">
@import "./style/viriables";
@import "./style/mixins";
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 .19rem;
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
}
.docker {
  display: flex;
  position: absolute;
  box-sizing: border-box;
  padding: .07rem .18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  border-top: .01rem solid #F1F1F1;
  box-shadow: 0 -1px 1px 0 #F1F1F1;
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
