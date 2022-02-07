<template>
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
.docker {
  display: flex;
  position: absolute;
  box-sizing: border-box;
  padding: .07rem .18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  border-top: 1px solid #F1F1F1;
  box-shadow: 0 -1px 1px 0 #F1F1F1;
  &_item {
    flex: 1;
    text-align: center;
    color: #333333;
    .iconfont {
      margin: 0 0 .02rem 0;
      font-size: .18rem;
    }
    &--active {
      color: #1FA4FC
    }
  }
  &_title {
    font-size: 20px;
    //浏览器所能显示的最小像素为12px，如果要使用小于12px的像素，请使用transform
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}

</style>
