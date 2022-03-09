<template>
  <div id="app">
   <Card 
   :imgSrc="require('../public/images/1616602932395-pg1.jpg')"
   summary="剑指Java面试-Offer直通车 百度资深面试官授课"
   />
   <Card
    :imgSrc="require('../public/images/1616602932395-pg1.jpg')"
   summary="剑指Java面试-Offer直通车 百度资深面试官授课"
   >
  <template v-slot:footer>
    <div class="footer">
      <div class="level">中级 . 520人报名</div>
      <div class="price">￥299.00</div>
    </div>
  </template>
   </Card>


   <Card
    :imgSrc="require('../public/images/1616602932395-pg1.jpg')"
    summary="剑指Java面试-Offer直通车 百度资深面试官授课"
    :width="500"
    :imgHeight="300"
   >
  <template v-slot:footer>
    <div class="footer">
      <div class="level">中级 . 520人报名</div>
      <div class="price">￥299.00</div>
    </div>
  </template>
   </Card>


  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return {
      imgSrc:""
    }
  }
}
</script>

<style lang="scss">
.image{
  width: 100px;
  height: 100px;
}
  .footer{
    padding: 0 8px;
    font-size: 12px;
    text-align: left;
  }

  .level{
    color: #9199A1;
    margin-bottom:8px;
  }

  .price{
    color: #F01414;
  }
</style>
