<template>
    <Panel title="理财精选" :class="$style.panel">
      <ul :class="$style.content">
        <li  :class="$style.list" v-for="item in items" :key="item.index">
          <img :src="item.src" :alt="item.title">
          <div>
            <p :class="$style.title">{{item.title}}</p>
            <p :class="$style.desc">{{item.desc}}</p> 
            <span>去挣钱 ></span>
          </div>
        </li>
      </ul>
    </Panel> 
</template>

<script>
import Panel from '../core/panel.vue';
export default {
    components:{
      Panel
    },
    data(){
      return{
        items:[
          {
            src:'//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76',
            title:'阅读理财',
            desc:'预期年化收益率4.50%',
          },
          {
            src:'//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76',
            title:'季度理财',
            desc:'历史年化回报率5.50%',
          },
          {
            src:'//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76',
            title:'一年理财',
            desc:'历史年化回报率5.80%',
          },
        ]
      }
    }
  }
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel{
  @include panel;
  >h4{
      font-weight: 700;
    }
  .content{
    @include list;
    width: 100%;
    padding-bottom:40px ;
    .list{
      height: 140px;
      position: relative;      
      img{
        display: inline-block;
        font-size: 24px;
        width: 88px;
        text-align: center;
        background: #fff;
        margin: 24px 32px 0; 
        color: #9891FF;
      }
      div{
        display: inline-block;
        max-width: 35%;
        text-align: left;
        height: 88px; 
        line-height: 88px;
        margin: 26px 0 0;
        box-sizing: border-box;
        .title{
          font-size: 32px;
          color: #333;
          display: block;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .desc{
          font-size: 24px;
          color: #ff3232;
          display: block;
          line-height: 1.1;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        span{
          position: absolute;
          right: -25px;
          top:30px;
          font-size: 28px;
          max-width: 39%;
          color: #FF801A;
          padding: 0 36px 0 20px;
          margin-right: 32px;
        }
      }
    }
  }
}
</style>