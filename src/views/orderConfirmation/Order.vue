<template>
  <div class="order">
    <div class="order_price">实付金额 <b class="order_total">¥{{ calculations.totalPrice }}</b></div>
    <div class="order_btn">提交订单</div>
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
</style>
