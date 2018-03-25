<template>
  <section :class="cname">
      <swiper :options="options" :not-next-tick="options.noNextTick">
        <swiperSlide v-for="item in items" :key="item.id">
            <router-link :to="{name : item.href}">
                <img :src="item.src" alt="">
            </router-link>
        </swiperSlide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
  export default {
    props:{
      items:Array,
      cname:String,
      options:{
        type:Object,
        default() {
            return{
                //自动
                autoplay:true,
                //分页导航 指示器
                pagination: {
                  el: '.swiper-pagination'
                },
                //循环
                loop:true,
                notNextTick:true,
            }
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style lang='scss'>
@import '~swiper/dist/css/swiper.css';

</style>