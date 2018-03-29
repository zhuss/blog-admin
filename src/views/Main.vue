<template>
  <div class="page-main">
      <div class="top">
        <h2>博文管理后台</h2>
      </div>
      <div class="left">
      </div>
      <div class="contnet">
         <router-view/>
      </div>
  </div>
</template>
<style lang="less" scoped>
.page-main{
   .top{
     position: fixed;
     width: 100%;
     height: 80px;
     background: #333;
     z-index: 100;
     h2{
       margin: 0;
       padding: 0 30px;
       color: #FFF;
       line-height: 80px;
       font-weight: normal;
     }
   }
   .left{
     position: fixed;
     z-index: 10;
     width: 200px;
     height: 100%;
     background: #FFF;
     border-right:1px solid #E6E6E6;
     box-shadow: 2px 0  2px rgba(0,0,0,0.1);
   }
   .contnet{
     padding: 80px 0 0 200px;
   }
}
</style>

