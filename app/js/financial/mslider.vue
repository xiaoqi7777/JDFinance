<template>
    <Panel title="轮播图" :class="$style.panel">
        <Slider :options="options" :items="items" :class="$style.slider"></Slider>
    </Panel>
</template>

<script>
import Panel from '../core/panel.vue';
import Slider from '../core/slider.vue'
  export default {
    components:{
      Panel,
      Slider
    },
    data(){
      return{
        items:[
          {
            href:'3',
            src:'//img12.360buyimg.com/jrpmobile/jfs/t15097/249/2268830415/20640/397e0ddf/5a976c28Nc5f227d1.jpg?width=750&height=400',
          }, 
          {
            href:'2',
            src:'//img12.360buyimg.com/jrpmobile/jfs/t15097/249/2268830415/20640/397e0ddf/5a976c28Nc5f227d1.jpg?width=750&height=400',
          }, 
          {
            href:'1',
            src:'//img12.360buyimg.com/jrpmobile/jfs/t18724/53/552742550/28349/141d0cb1/5a976ab5N1f131e9c.jpg?width=750&height=400',
          },
        ],
        options:{
          autoplay:true,
          loop:true,
          notNextTick:true,
          pagination: {
                  el: '.swiper-pagination'
                },
        }
      }
    }
  }
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel{
  @include panel;
  margin-top: 120px;
  >h4{
    display: none;
  }
  .slider{
    width: 100%;
    img{
      width: 100%
    }
  }
}
</style>