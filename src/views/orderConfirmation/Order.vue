<template>
  <div class="order">
    <div class="order_price">实付金额 <b class="order_total">¥{{ calculations.totalPrice }}</b></div>
    <div class="order_btn" @click="() => handleSubmitClick(true)">提交订单</div>
  </div>
  <div class="mask" v-show="showConfirm" @click="() => handleSubmitClick(false)">
    <div class="mask_content" @click.stop>
      <h3 class="mask_content_title">确认要离开收银台？</h3>
      <p class="mask_content_desc">请尽快完成支付，否则将被取消</p>
      <div class="mask_content_btns">
        <div class="mask_content_btn mask_content_btn-cancel" @click="() => handlConfirmOrder(true)">取消订单</div>
        <div class="mask_content_btn mask_content_btn-confirm" @click="() => handlConfirmOrder(false)">确认支付</div>
      </div>
    </div>
  </div>
  <Toast v-if="show" :message="toastMessage"/>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { commonCartEffect } from '../../effects/cartEffect'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast'
import { useStore } from 'vuex'
import { ref } from 'vue'

const useMaskOrderEffect = (shopName, productList, shopId) => {
  const router = useRouter()
  const store = useStore()
  const {
    toastMessage,
    show,
    showToast
  } = useToastEffect()
  const handlConfirmOrder = async (isCancel) => {
    const products = []
    for (const i in productList.value) {
      const product = productList.value[i]
      products.push({
        id: product._id,
        num: product.count
      })
    }
    try {
      const result = await post('/api/order', {
        addressId: 1,
        shopId,
        shopName: shopName.value,
        isCancel,
        products
      })
      if (result?.errno === 0) {
        store.commit('clearCartData', { shopId })
        router.push({ name: 'OrderList' })
      }
    } catch (e) {
      console.log(e)
      showToast('下单失败')
    }
  }
  return { toastMessage, show, handlConfirmOrder }
}

const useShowMaskEffect = () => {
  const showConfirm = ref(false)
  const handleSubmitClick = (state) => {
    showConfirm.value = state
  }
  return { showConfirm, handleSubmitClick }
}
export default {
  name: 'Order',
  components: { Toast },
  setup () {
    const route = useRoute()
    const shopId = parseInt(route.params.id, 10)
    const {
      calculations,
      shopName,
      productList
    } = commonCartEffect(shopId)
    const { toastMessage, show, handlConfirmOrder } = useMaskOrderEffect(shopName, productList, shopId)
    const { showConfirm, handleSubmitClick } = useShowMaskEffect()
    return {
      calculations,
      handlConfirmOrder,
      toastMessage,
      show,
      showConfirm,
      handleSubmitClick
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
    background-color: $bgColor;
    border-radius: .04rem;
    width: 3.01rem;
    height: 1.57rem;
    text-align: center;

    &_title {
      font-size: .18rem;
      color: $content-fontcolor;
      margin: .24rem 0 0;
      line-height: .25rem;
    }

    &_desc {
      font-size: .14rem;
      color: $medium-fontColor;
      margin-top: .08rem;
    }

    &_btns {
      display: flex;
      justify-content: center;
      margin: .24rem .58rem;
    }

    &_btn {
      flex: 1;
      border-radius: .16rem;
      width: .8rem;
      line-height: .32rem;
      font-size: .14rem;

      &-cancel {
        border: .01rem solid $btn-bgColor-aqua;
        color: $btn-bgColor;
        margin-right: .24rem;
      }

      &-confirm {
        color: $white-fontColor;
        background-color: $btn-bgColor-aqua;
      }
    }
  }
}
</style>
