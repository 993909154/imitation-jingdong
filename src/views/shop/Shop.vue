<template>
  <div class="wrapper">
    <div class="search">
      <div class="search_back iconfont" @click="handleBackClick">&#xe6db;</div>
      <div class="search_content">
        <span class="search_content_icon iconfont">&#xe741;</span>
        <input class="search_content_input" placeholder="请输入商品名称搜索">
      </div>
    </div>
    <ShopInfo :item="item" :hideBorder="true" v-show="item.imgUrl"/>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import ShopInfo from '../../components/ShopInfo'
import { useRouter, useRoute } from 'vue-router'
import { get } from '../../utils/request'

const useShopInfoEffect = () => {
  const data = reactive({
    item: {}
  })
  const route = useRoute()
  const getItemData = async () => {
    const result = await get(`/api/shop/${route.params.id}`)
    if (result?.errno === 0 && result?.data) {
      data.item = result.data
    }
  }
  const { item } = toRefs(data)
  return {
    item,
    getItemData
  }
}

const useBackRouterEffect = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }
  return { handleBackClick }
}
export default {
  name: 'Shop',
  components: { ShopInfo },
  setup () {
    const { item, getItemData } = useShopInfoEffect()
    const { handleBackClick } = useBackRouterEffect()
    getItemData()
    return { item, handleBackClick }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables";

.wrapper {
  padding: 0 .18rem;
}

.search {
  display: flex;
  margin: .14rem 0 .04rem 0;
  line-height: .32rem;

  &_back {
    width: .3rem;
    font-size: .24rem;
    color: #B6B6B6;
  }

  &_content {
    display: flex;
    flex: 1;
    background: $search-bgColor;
    border-radius: .16rem;

    &_icon {
      width: .44rem;
      text-align: center;
      color: $search-fontColor;
    }

    &_input {
      display: block;
      width: 100%;
      padding-right: .2rem;
      height: .32rem;
      border: none;
      outline: none;
      background: none;
      color: $content-fontcolor;

      &::placeholder {
        color: $content-fontcolor;
      }
    }
  }
}
</style>
