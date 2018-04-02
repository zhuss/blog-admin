<template>
    <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
body,h1,h2,h3,h4,p,ul,li{
  padding: 0;
  margin: 0;
}
body{
   font-size: 14px;
   background: #f2f5fa;
}
.breadcrumb{
  padding: 30px;
  border-bottom:1px solid #EEE; 
  background: #FFF;
}
/*wangEditor样式重置*/
.w-e-toolbar{
  border: 1px solid #E6E6E6 !important;
  background: #F7F7F7 !important;
  border-radius: 4px 4px 0 0;
}

.w-e-toolbar .w-e-menu i{
  color: #999999 !important;
}
.w-e-toolbar .w-e-active i{
  color: #20a0ff !important;
}
.w-e-text-container{
  height: auto !important;
  border: 1px solid #E6E6E6 !important;
  border-top:none !important;
  border-radius: 0 0 4px 4px;
  overflow: hidden;
}
.w-e-text{
  min-height: 300px !important;
  color: #1f2d3d;
  overflow: auto !important;
}
.w-e-text img{
  max-width: 100% !important;
  vertical-align: bottom !important;
}
.w-e-text img:hover{
  box-shadow: none !important;
}
.w-e-text img.w-e-selected{
  border: none !important;
}
.w-e-text-container .w-e-panel-container{
  box-shadow: none !important;
  border: 1px solid #E6E6E6 !important;
  border-top:none !important;
}
.w-e-text pre{
  padding: 15px;
  display: block;
  background: #EEE;
  overflow: auto;
  border:1px solid #CCC;
}
.w-e-text pre code{
  display: inline-block;
}
</style>
