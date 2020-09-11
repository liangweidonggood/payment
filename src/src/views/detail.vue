<template>
  <div  class="detail1">
    <div>
      <img class="pic" src="../assets/images/pic1.png" alt="">
    </div>
    <div>
      <img class="cppic" src="../assets/images/pijs.jpg" alt="">
      <p>编　　　号：  2020091204</p>
      <p>名　　　称  ：水晶手链</p>
      <p>规　　　格  ：最大直径10mm</p>
      <p>年　　　代  ：约公元前20</p>
      <p>文　　　化  ：铁器时代早期海上丝绸之路</p>
      <p>分布出处：伊朗、阿富汗</p>
      <p>备　　　注 ：铁器时代早期典型的半宝石珠，多棱柱形或多面
        几何形，通透澄澈。此类半宝石珠的制作中心在中亚和南亚地区，
        加工工艺可能源自亚历山大东征时期的希腊化风潮，在印度十六
        雄国时期至贵霜王朝时期有连续地层，佛教时代以后常出自佛塔
        基座中，在早期佛像上也有同类璎珞珠饰品对应。同时期在东南
        亚海上丝绸之路沿线的港口和遗址中均有考古样品出土，汉晋时
        期，中国两广地区的合浦、徐闻、广州等重要股港口皆有同类样
        品发现。为铁器时代早期东西方文化贸易交流的重要物证。</p>
      <div class="hua"><img src="../assets/images/hua.png" alt=""></div>
    </div>
  </div>
</template>

<script>

export default {
  name: "index",
  data() {
    return {

    };
  },
  created() {

  },

  methods: {

  }
};
</script>

<style >
  .detail1{
    /*overflow-x: auto;*/
    display: flex;
  }
  .detail1 p{
    margin: 5px 0;
    width: 500px;
    margin-left: 20px;
  }
.pic{
  width: 366px;
  height: 237px;
   margin:30px 20px;
  margin-top: 110px;
  margin-right: 40px;
}
  .cppic{
    margin-top: 60px;
  }
  .hua{
    width: 70%;
    text-align: center;
  }
  .hua img{
    margin-top: 20px;
  }
</style>
