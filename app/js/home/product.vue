  <template>
    <Panel title="新品推荐" :class="$style.panel">
        <section :class="$style.content"> 
            <div :class="$style.arrow">更多尖活 ></div>
            <Slider :options="swiperOption" :items="items" cname="productSlider">
            </Slider>
        </section>
    </Panel>
</template>

<script>
import Panel from '../core/panel.vue';
import Slider from '../core/slider.vue';
  export default {
    components:{
      Panel,
      Slider
    },
    data(){
      return{
          items:[
            { 
              href:'#',
              src:'//img12.360buyimg.com/jrpmobile/jfs/t17500/129/612741991/43773/b9be060d/5a9d02d3N79dd6e76.jpg?width=335&height=421'
            },
            { 
              href:'#',
              src:'//img12.360buyimg.com/jrpmobile/jfs/t19381/282/641433664/36503/a7084d81/5a9d031cN6daf7d1d.jpg?width=335&height=421'
            },
            { 
              href:'#',
              src:'//img12.360buyimg.com/jrpmobile/jfs/t18736/21/452113740/50445/b97274fb/5a7d5bc4N592e324e.jpg?width=335&height=421'
            },
            { 
              href:'#',
              src:'//img12.360buyimg.com/jrpmobile/jfs/t14935/5/2384445307/37843/697e3be2/5a9d0375N91173d42.jpg?width=335&height=421'
            }
          ],
          swiperOption: {
            slidesPerView: 2.3,
            spaceBetween: 30,
            freeMode: true,
        }

      }
    }
  }
</script>
<style lang="scss">
.productSlider{
  .swiper-container{
    padding: 0 24px;
    box-sizing: border-box;
    .swiper-slide{
    a{
      display: inline-block;
      width: 100%;
      img{
        width: 100%;
        height: 314px;
        display: block;
        border: 1px solid #fafafa
      }
    }
    }
  }
}
</style>

<style lang='scss' module>
@import '../../css/element.scss';
.panel{
  @include panel; 
  >h4{
      font-weight: 700      
  }
  .content{
    padding-bottom:40px;
    position: relative;
    &>div{
      position: absolute;
      top:-65px;
      right: 10px;
      color:#999;
      font-size:28px;
    }
  }
}

</style>