<template>
  <div class="wrapper">
    <StaticPart/>
    <NearBy/>
  </div>
  <Docker :currentIndex="0"/>
</template>

<script>
import StaticPart from './StaticPart'
import NearBy from './NearBy'
import Docker from '../../components/Docker'
export default {
  name: 'Home',
  components: {
    StaticPart,
    NearBy,
    Docker
  }
}
</script>
<style lang="scss" scoped>
@import "../../style/viriables";
@import "../../style/mixins";

.wrapper {
  overflow: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 .19rem;
}
</style>
