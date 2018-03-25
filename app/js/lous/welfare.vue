<template>
    <Panel title="理财精选" :class="$style.panel">
      <ul :class="$style.content">
        <li  :class="$style.list" v-for="item in items" :key="item.index">
          <img :src="item.src" :alt="item.title">
          <div>
            <p :class="$style.title">{{item.title}}</p>
            <p :class="$style.desc">{{item.desc}}</p> 
            <span>{{item.span1}} ></span>
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
            src:'//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120',
            title:'开通白条',
            desc:'送百元元礼包',
            span1:'立即查看'
          },
          {
            src:'//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120',
            title:'白条提额',
            desc:'金融app专享提额礼包',
            span1:'去提额'
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
  margin-top: 0px;
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
          line-height: 60px;
          font-size: 32px;
          color: #333;
          display: block;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .desc{
          font-size: 24px;
          color: #999;
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