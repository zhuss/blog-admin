<template>
  <div class="page-main">
      <div class="top">
        <h2>博文管理后台</h2>
      </div>
      <div class="left">
        <ul class="nav">
          <li>
            <router-link :to="{name:'blogList'}">博客管理</router-link>
          </li>
        </ul>
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
     .nav{
       padding-top:80px;
       > li a{
         display: block;
         padding: 0 30px;
         height: 50px;
         line-height: 50px;
         text-decoration: none;
         color: #333;
         &:hover{
           background: #EEE;
         }
       }
     }
   }
   .contnet{
     padding: 80px 0 0 200px;
   }
}
</style>

