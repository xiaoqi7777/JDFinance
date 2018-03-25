<template>
  <Panel :class="$style.panel">
    <Slider :items="items"></Slider>
  </Panel>
</template>

<script>
import Panel from '../core/panel';
import Slider from '../core/slider';
  export default {
    components:{
      Panel,
      Slider
    },
    data(){
      return{
        items:[
          {
            href:'1',
            src:'//img12.360buyimg.com/jrpmobile/jfs/t16192/335/2551594630/83964/64093ce3/5ab215c6N94e6936b.jpg?width=750&height=320',
          },
          {
            href:'2',
            src:'//img12.360buyimg.com/jrpmobile/jfs/t16798/322/621991060/49914/ec0d539b/5a991ebcN932c6731.jpg?width=750&height=320',
          }
        ]
      }
    }
  }
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel{
  @include panel;
  margin-top: 120px;
  margin-bottom: 0px;
  >h4{
    display: none;
  }
  img{
    width: 100%;
  }
}
</style>