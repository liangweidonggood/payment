<template>
  <div  class=" indx" >
    <div v-if="len">
      <div class="detail1"  v-for="(item,index) in list" >
        <div  >
          <img class="pic" :src="item.url" alt="">
        </div>
        <div>
          <img class="cppic" src="../assets/images/pijs.jpg" alt="">
          <p>编　　　号：  {{item.code}}</p>
          <p>名　　　称  ：{{item.name}}</p>
          <p>规　　　格  ：{{item.specs}}</p>
          <p>年　　　代  ：{{item.years}}</p>
          <p>文　　　化  ：{{item.culture}}</p>
          <p>分布出处：{{item.origin}}</p>
          <p>备　　　注 ：{{item.remark}}</p>
<!--          <div class="hua"><img src="../assets/images/hua.png" alt=""></div>-->
        </div>
      </div>
    </div>

    <div v-else style="margin-top: 80px;">暂无数据</div>
  </div>
</template>

<script>

export default {
  name: "index",
  data() {
    return {
      list:[],
      id:"",
      len:0,
    };
  },
  created() {
    if(sessionStorage.getItem('datas')){
      var datas=JSON.parse(sessionStorage.getItem('datas'));
      this.id = datas.id;
      this.init()
    }
    if(sessionStorage.getItem('list')){
      this.list=JSON.parse(sessionStorage.getItem('list'));
      this.len=this.list.length;
    }

  },
  methods: {
    init(){
      var formData = new FormData();
      formData.append("id", this.id);
      this.$axios.post('/gem/oneGem',formData).then(ret => {
        this.list.push(ret.data);
        this.len=this.list.length;
      })
    }
  }
};
</script>

<style >
  .detail1{
    /*overflow-x: auto;*/
    display: flex;
    text-align: left;
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
