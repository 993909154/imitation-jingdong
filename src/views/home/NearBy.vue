<template>
  <div class="nearby">
    <h3 class="nearby_title">附近店铺</h3>
    <router-link :to="`/shop/${item._id}`" v-for="item in nearByList" :key="item._id">
      <ShopInfo :item="item"/>
    </router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo'

const useNearByEffect = () => {
  const nearByList = ref([])
  const getNearbyList = async () => {
    const result = await get('/api/shop/hot-list')
    if (result?.errno === 0 && result?.data?.length) {
      nearByList.value = result.data
    }
  }
  return {
    nearByList,
    getNearbyList
  }
}
export default {
  name: 'NearBy',
  components: { ShopInfo },
  setup () {
    const {
      nearByList,
      getNearbyList
    } = useNearByEffect()
    getNearbyList()
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
}

a {
  text-decoration: none;
}
</style>
