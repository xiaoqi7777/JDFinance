<template>
  <Panel title="有车有钱" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t17800/224/698056253/28974/d3ad0665/5aa0ec80N348451f8.png?width=375&height=233" alt="">
      </div>
      <div :class="$style.item">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t14215/140/1757206721/24186/81b4e53c/5a56c877Nee6cfc4d.jpg?width=375&height=233" alt="">  
      </div>
    </section>  
    <section :class="$style.listContent">
        <div :class="$style.list" v-for="item in items" :key="item.id">
            <img :src="item.src" :alt="item.title">
            <p>{{item.title}}</p>
        </div>
    </section>
  </Panel> 
</template>

<script>
import Panel from '../core/panel.vue'
  export default {
    components:{
      Panel
    },
    data(){
      return{
        items:[
          {
            src:'//img12.360buyimg.com/jrpmobile/jfs/t12799/50/704102454/5247/19eac80a/5a4f2622Nc4aca701.png?width=90&height=90 ',
            title:'旅游'
          },
          {
            src:'//img12.360buyimg.com/jrpmobile/jfs/t16033/196/1306232362/4705/4c678227/5a4f265bN66ef5ae8.png?width=90&height=90',
            title:'医美',
          },
          {
            src:'//img12.360buyimg.com/jrpmobile/jfs/t13051/63/2559290659/4702/e4068917/5a4f2693N937f1905.png?width=88&height=88',
            title:'房抵贷',
          },
          {
            src:'//img12.360buyimg.com/jrpmobile/jfs/t15133/16/1440686097/5786/1b038e03/5a4f26bfN03ed1f66.png?width=90&height=90',
            title:'驾校',
          },
          {
            src:'//img12.360buyimg.com/jrpmobile/jfs/t14896/125/1435676873/3668/a8b392f7/5a4f26edN6cdfda66.png?width=88&height=88',
            title:'分期用',
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
    width: 100%;
    padding-bottom: 40px;
    @include list(row);
    .item{
      flex: 1;
    } 
    img{
      width: 100%;
    } 
  }
  .listContent{
    @include list(row);
    width: 100%;
    padding-top: 40px; 
    margin-bottom: 20px;
    justify-content: space-around;
    .list{
        text-align: center;
        img{
          width: 90px;
          height: 90px;
          margin: 0 auto;
        }
        p{
          font-size: 26px;
          text-align: center;
          display: block;
          color: #666;
          margin-top: 6px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
    }
  }
}
</style>