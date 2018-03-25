<template>
    <Panel title="理财精选" :class="$style.panel">
      <ul :class="$style.content">
        <li :class="$style.item"  v-for="item in items" :key="item.id">
          <div><h4>{{item.title}}</h4> <span>{{item.span}}</span></div>
          <p :class="$style.number">{{item.number}}%</p>
          <p :class="$style.desc">{{item.desc}}</p> 
        </li>
      </ul>
    </Panel>
</template>

<script>
import Panel from '../core/panel.vue'
  export default {
    components:{
      Panel,
    },
    data(){
      return{
        items:[
          {
            title:'定期理财',
            span:'90天可质押',
            number:5.50,
            desc:'历史年化结算利息'
          },
          {
            title:'定期理财',
            span:'90天可质押',
            number:5.50,
            desc:'历史年化结算利息'
          },{
            title:'定期理财',
            span:'90天可质押',
            number:5.50,
            desc:'历史年化结算利息'
          },{
            title:'定期理财',
            span:'90天可质押',
            number:5.50,
            desc:'历史年化结算利息'
          }]
      }
    }
  }
</script>

<style lang="scss" module>
@import '../../css/element.scss';
  .panel{
    @include panel;
    >h4{
      font-weight: 700      
    }
    .content{
      @include list(row);
      width: 100%;
      .item{
        width: 50%;
        padding-left: 32px;
        height: 218px;
        box-sizing: border-box;
        &:first-child{
          border-right: 1px solid #eee;
          border-bottom: 1px solid #eee;   
        }
        &:nth-child(2){
           border-bottom: 1px solid #eee; 
        }
        &:nth-child(3){
          border-right: 1px solid #eee;
        }
        div{
              height: 42px; 
            line-height: 42px;
            box-sizing: border-box;
            margin: 34px 0 16px;
          h4{
            display: inline-block;      
            color: #333;
            font-size: 30px;
            font-weight: 700;
            height: 42px;
            line-height: 42px;   
          }
          span{
            display: inline-block;
            border: 2px solid #FF5155;
            height: 32px;
            line-height: 32px;
            font-size: 22px;
            padding: 0 14px;
            box-sizing: border-box;
          }
        }
          .number{
            font-weight: 700;
            font-size: 44px;
            height: 58px;
            line-height: 58px;
            color: #FF5155;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .desc{
            font-size: 24px;
            height: 34px;
            line-height: 34px;
            color: #999;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
      }
     }
  }
</style>