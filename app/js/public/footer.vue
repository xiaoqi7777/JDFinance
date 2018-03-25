<template>
    <Panel title="sssss" :class="$style.panel">
      <ul :class="$style.content">
          <li class="sg">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252" alt="">
          </li>
          <li>
            <div>
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108" alt="">
                <span>客户端</span>
            </div>
            <div>
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108" alt="">
                <span>客户端</span>
            </div>
            <div>
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108" alt="">
                <span>客户端</span>
            </div>
          </li>
          <li>
            Copyright © 2004-2018 京东JD.com 版权所有
          </li>
          <li>
            投资有风险，购买需谨慎
          </li>
           <li>
             京东金融平台服务协议
           </li>
            <li>
              京东金融隐私政策
            </li>
      </ul>
    </Panel>
</template>

<script>
import Panel from '../core/panel.vue'
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
  margin-bottom: 100px;
  >h4{
    display: none;
  }
  .content{
    background-color: #F5F5F5;    
    width: 100%;
    li{
      width: 100%;      
      >img{
        width: 100% ;
        height: 143px;
      }
      &:nth-child(2){
        @include list(row);
        background: #F5F5F5;
        padding-top: 40px;
        margin-bottom: 20px;
        border-top: none;
        div{
          width: 33.33333%;
          min-height: 135px;
          text-align: center;
          img{
            width: 90px;
            height: 90px;
          }
          span{
            display: block;
            font-size: 26px;
            text-align: center;
            display: block;
            color: #666;
            margin-top: 12px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
      }
       &:nth-child(1){
          border-top: none;
      }
      &:nth-child(n+3){
        background: #F5F5F5;
        text-align: center;
        font-size: 24px;
        line-height: 1.6;
        color: #999;
        box-sizing: border-box;
        padding: 24px 32px;
      border-top: 1px solid #ddd;        
      }
       
    }
  }
}
</style>