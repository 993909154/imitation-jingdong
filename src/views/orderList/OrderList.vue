<template>
  <div class="wrapper">
    <div class="title">我的订单</div>
    <div class="orders">
      <div class="order" v-for="(item, index) in list" :key="index">
        <div class="order_title">
          {{ item.shopName }}
          <span class="order_status">{{ item.isCancel ? '已取消' : '已下单' }}</span>
        </div>
        <div class="order_content">
          <div class="order_content_imgs">
            <template v-for="(innerItem, innerIndex) in item.products" :key="innerIndex">
              <img :src="innerItem.product.img" alt="" class="order_content_imgs_img" v-if="innerIndex <= 3">
            </template>
          </div>
          <div class="order_content_info">
            <div class="order_content_info_price">¥{{ item.totalPrice }}</div>
            <div class="order_content_info_count">共{{ item.totalNum }}件</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Docker :currentIndex="2"/>
</template>

<script>
import Docker from '../../components/Docker'
import { reactive, toRefs } from 'vue'
import { get } from '../../utils/request'

const useOrderListEffect = () => {
  const data = reactive({ list: [] })
  const getOrderList = async () => {
    const result = await get('/api/order')
    if (result?.errno === 0 && result?.data?.length) {
      const orderList = result.data
      orderList.forEach((order) => {
        const products = order.products || []
        let totalPrice = 0
        let totalNum = 0
        products.forEach((productItem) => {
          totalNum += (productItem?.orderSales || 0)
          totalPrice += ((productItem?.product?.price * productItem?.orderSales) || 0)
        })
        order.totalPrice = totalPrice
        order.totalNum = totalNum
      })
      data.list = orderList
    }
  }
  getOrderList()
  const { list } = toRefs(data)
  return { list }
}
export default {
  name: 'OrderList',
  components: { Docker },
  setup () {
    const { list } = useOrderListEffect()
    console.log(list)
    return { list }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables";

.wrapper {
  overflow: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  background-color: $bgColor-eee;
}

.title {
  line-height: .44rem;
  background-color: $bgColor;
  font-size: .16rem;
  color: $content-fontcolor;
  text-align: center;
}

.orders {
}

.order {
  margin: .16rem .18rem;
  padding: .16rem;
  background-color: $bgColor;
  border-radius: .04rem;

  &_title {
    margin-bottom: .16rem;
    line-height: .22rem;
    color: $content-fontcolor;
    font-size: .16rem;
  }

  &_status {
    font-size: .14rem;
    color: $light-fontColor;
    float: right;
  }

  &_content {
    display: flex;

    &_imgs {
      flex: 1;

      &_img {
        width: .4rem;
        height: .4rem;
        margin-right: .12rem;
      }
    }

    &_info {
      width: .7rem;
      text-align: right;

      &_price {
        font-size: .14rem;
        line-height: .2rem;
        margin-bottom: .04rem;
        color: $highlight-fontColor;
      }

      &_count {
        font-size: .12rem;
        color: $content-fontcolor;
        line-height: .14rem;
      }
    }
  }
}
</style>
