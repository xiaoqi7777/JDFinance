<template lang="html">
    <div :class="$style.home">
      <Header></Header>
      <Slider></Slider>
      <Novice></Novice>
      <Product></Product>
      <Move></Move>
      <car/>
      <Footer/>
      <Nav></Nav>
    </div>
</template>

<script>
import Header  from '../public/header';
import Slider  from './hslider.vue';
import Novice  from './novice.vue';
import Product from './product.vue';
import Move    from './move.vue';
import Car     from './car.vue';
import Footer  from '../public/footer.vue';
import Nav     from '../public/navbar.vue';
export default {
  components:{
    Header,
    Slider,
    Novice,
    Product,
    Move,
    Car,
    Footer,
    Nav
  }
}
</script>

<style lang="scss" module>

</style>
