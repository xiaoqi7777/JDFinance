<template lang="html">
    <div :class="$style.home">
      <Header></Header>
      <Slider/>
      <Welfare/>
      <Footer/>
      <Nav></Nav>
    </div>
</template>

<script>
import Header  from '../public/header';
import Footer  from '../public/footer.vue';
import Nav     from '../public/navbar.vue';
import Slider  from './lslider.vue';
import Welfare from './welfare.vue';
export default {
  components:{
    Header,
    Footer,
    Nav,
    Slider,
    Welfare,
  }
}
</script>

<style lang="scss" module>

</style>
