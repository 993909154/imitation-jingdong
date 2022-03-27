<template>
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
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'TopArea',
  setup () {
    const router = useRouter()
    const handleBackClick = () => {
      router.back()
    }
    return { handleBackClick }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables";
@import "../../style/mixins";
.top {
  position: relative;
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0, 145, 255, 0.00) 4%, $btn-bgColor 50%);
  background-repeat: no-repeat;

  &_header {
    position: relative;
    padding-top: .4rem;
    line-height: .24rem;
    color: $white-fontColor;
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
    background: $bgColor;
    border-radius: .04rem;

    &_title {
      padding: .16rem 0 .14rem .16rem;
      line-height: .22rem;
      font-size: .16rem;
      color: $content-fontcolor;
      font-weight: bolder;
    }

    &_adress {
      padding: 0 .4rem 0 .16rem;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }

    &_info {
      padding: .06rem 0 0 .16rem;

      &_name, &_phone {
        line-height: .18rem;
        font-size: .12rem;
        color: $medium-fontColor;
        margin-right: .06rem;
      }

      &_choose {
        position: absolute;
        right: .16rem;
        top: .5rem;
        color: $medium-fontColor;
        font-size: .2rem;
        transform: rotate(180deg);
      }
    }
  }
}
</style>
