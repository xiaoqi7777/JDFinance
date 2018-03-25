<template>
  <Panel :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.bg"></div>
      <p>立即下载</p>
    </section>
  </Panel>
</template>

<script>
import  Panel from '../core/panel';
  export default {
    components:{
      Panel,
    }
  }
</script>

<style lang="scss" module>
@import '../../css/element.scss';
html,body{
  background: #fff;
  }
.panel{
  @include panel;
  margin: 0 !important;  
  >h4{
    display: none;
  }
  .content{
    width: 100%;
    @include flex;
    justify-content: center;
    align-items: center;
    .bg{
        background: url(https://img12.360buyimg.com/jrpmobile/jfs/t8956/285/1249806938/50853/8cd3c8f0/59b65f36N05367075.png?) center center no-repeat;
        width: 600px;
        height: 800px;
        background-size: 100% auto;
        margin-top: -100px;
    }
    p{
      @include btn();
      font-size: 32px;
      width: 74%;
      height: 100px;
      line-height: 100px;
      background-image: linear-gradient(270deg,#F55C33 0,#EE2D1B 75%);
      box-shadow: 0 6px 16px 0 rgba(255,159,135,.6);
      position: fixed;
      bottom: 120px;
      color: #fff;
      font-weight: 700;
      font-family: 'PingFangSC-Regular'
    }
  }
}
</style>