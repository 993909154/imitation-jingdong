<template>
  <div class="wrapper">
    <TopArea/>
    <ProductList/>
    <Order/>
  </div>
</template>

<script>
import TopArea from './TopArea'
import ProductList from './ProductList'
import Order from './Order'

export default {
  name: 'OrderConfirmation',
  components: { Order, ProductList, TopArea }
}
</script>
<style lang="scss" scoped>
@import "../../style/viriables";
@import "../../style/mixins";

.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: $bgColor-eee;
  overflow-y: scroll;
}

</style>
