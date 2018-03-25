<template lang="html">
    <div class="home">
      <Header></Header>
      <Mslider></Mslider>
      <Active/>
      <Novice/>
      <ActiveTwo/>
      <Monery/>
      <Footer/>
      <Nav></Nav>

    </div>
</template>

<script>
import Header  from '../public/header';
import Footer  from '../public/footer.vue';
import Nav     from '../public/navbar.vue';
import Mslider from './mslider.vue';
import Active from  './active.vue';
import Novice from  './novice.vue';
import ActiveTwo from './activeTwo.vue'; 
import Monery  from   './monry.vue' 
export default {
  components:{
    Header,
    Footer,
    Nav,
    Mslider,
    Active,
    Novice,
    ActiveTwo,
    Monery,
  }
}
</script>

<style lang="scss" >
.sg{
  display: none
}
</style>
