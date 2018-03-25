<template lang="html">
    <div :class="$style.home">
      <Header></Header>
      <Slider/>
      <Welfare/>
      <Active/>
      <ActiveTwo/>
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
import Active from './active';
import ActiveTwo from './activeTwo';
export default {
  components:{
    Header,
    Footer,
    Nav, 
    Slider,
    Welfare,
    Active,
    ActiveTwo,
  }
}
</script>

<style lang="scss" module>

</style>
