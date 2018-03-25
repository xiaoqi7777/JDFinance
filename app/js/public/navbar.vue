<template>
    <Panel :class="$style.panel">
        <ul :class="$style.content">
          <li>
            <router-link :to="{name:'home'}">
              <img src="//img12.360buyimg.com/jrpmobile/jfs/t3541/110/627394787/2190/5d02d39c/580f1dfdNcf72af31.png?width=66&height=66" alt="">
              <p>首页</p>
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'financial'}">            
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t3811/55/345433999/2930/116d3dd1/580f1e25N028a1f2c.png?width=66&height=66" alt="">
            <p>理财</p>
            </router-link>
          </li>

          <li>
            <router-link :to="{name:'lous'}">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t3343/179/621044750/1484/5af6b11a/580f50e4N005181d0.png?width=66&height=66" alt="">
            <p>白条</p>
            </router-link>
          </li>

          <li>
            <router-link :to="{name:'#'}">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t3340/68/639059082/2591/800e2d6b/580f51cdN4caf20b2.png?width=66&height=66" alt="">
            <p>我的</p>
            </router-link>
          </li>
        </ul>

    </Panel>
</template>

<script>
import Panel from '../core/panel.vue';
  export default {
    components:{
      Panel
    }
  }
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel{
  @include panel;
  margin-bottom: 0;
  height: 100px;
  background: #fff;
  box-shadow: 0 -3px 4px rgba(0,0,0,.03);
  a{
    text-decoration: none;
  }
  >h4{
    display: none;
  }
  position: fixed;
  bottom: -1px;
  left: 0;
  right: 0;
  z-index: 99;
  .content{
    @include list(row);
    width: 100%;
    justify-content: space-around;
    text-align: center;
    img{
      width: 44px;
      margin: 12px auto 6px;
    }
    p{
      min-width: 2.9em;
      font-size: 22px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      color: #656565;
    }
  }
}
</style>