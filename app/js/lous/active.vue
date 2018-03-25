 <template>
  <Panel :class="$style.panel" title="精品活动">
    <section :class="$style.content">
      <div>
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t17374/350/576442826/54240/a9918a9/5a97d2c0N021cf2e0.png?width=376&height=264" alt="">
      </div>
      <div>
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t14653/159/1840910093/27778/53ebfb91/5a5c5cc9N28e0dc96.png?width=376&height=264" alt="">
      </div>
    </section>
  </Panel>
 </template>
 
 <script>
 import Panel from '../core/panel.vue';
   export default {
     components:{
       Panel,
     }
   }
 </script>
 
 <style lang="scss" module>
 @import '../../css/element.scss';
.panel{
  @include panel;
  padding-bottom: 40px;
  >h4{
    font-weight: 700;
  }
  .content{
    @include list(row);
    div{
      width: 50%;
      img{
        display: inline-block;
        width: 100%;
      }
    }
    
  }
}
 </style>