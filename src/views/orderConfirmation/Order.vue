<template>
  <div class="order">
    <div class="order_price">实付金额 <b class="order_total">¥{{ calculations.totalPrice }}</b></div>
    <div class="order_btn">提交订单</div>
  </div>
  <div class="mask">
    <div class="mask_content">
      <h3 class="mask_content_title">确认要离开收银台？</h3>
      <p class="mask_content_desc">请尽快完成支付，否则将被取消</p>
      <div class="mask_content_btns">
        <div class="mask_content_btn mask_content_btn-cancellation">取消订单</div>
        <div class="mask_content_btn mask_content_btn-confirm">确认支付</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { commonCartEffect } from '../../effects/cartEffect'

export default {
  name: 'Order',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const {
      calculations
    } = commonCartEffect(shopId)
    return {
      calculations
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables";

.order {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: .49rem;
  line-height: .49rem;
  background-color: $bgColor;
  font-size: .14rem;

  &_price {
    flex: 1;
    text-indent: .24rem;
    color: $content-fontcolor;
  }

  &_total {
    font-size: .16rem;
  }

  &_btn {
    width: .98rem;
    background-color: $btn-bgColor-aqua;
    color: $white-fontColor;
    text-align: center;
  }
}

.mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.50);
  z-index: 1;

  &_content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #FFFFFF;
    border-radius: .04rem;
    width: 3.01rem;
    height: 1.57rem;
    text-align: center;

    &_title {
      font-size: .18rem;
      color: #333333;
      margin: .24rem 0 0;
      line-height: .25rem;
    }

    &_desc {
      font-size: .14rem;
      color: #666666;
      margin-top: .08rem;
    }

    &_btns {
      display: flex;
      justify-content: center;
      margin: .24rem .58rem;
    }

    &_btn {
      flex: 1;
      border: .01rem solid #4FB0F9;
      border-radius: .16rem;
      width: .8rem;
      line-height: .32rem;
      font-size: .14rem;
      &-cancellation {
        color: #0091FF;
        margin-right: .24rem;
      }
      &-confirm {
        color: #FFFFFF;
        background-color: #4FB0F9;
      }
    }
  }
}
</style>
