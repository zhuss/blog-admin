<template>
  <div class="page-blog-edit">
      <div class="breadcrumb">
      <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{path:'/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{name:'blogList'}">博文管理</el-breadcrumb-item>
          <el-breadcrumb-item>编辑文章</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="form">
      <el-form>
        <el-form-item label="标题">
            <el-input v-model="blog.title" :maxlength="30"></el-input>
        </el-form-item>
        <el-form-item label="作者">
            <el-input v-model="blog.author" :maxlength="30"></el-input>
        </el-form-item>
        <el-form-item label="摘要">
            <el-input v-model="blog.abstract" :maxlength="100"></el-input>
        </el-form-item>
        <el-form-item>
            <div ref="editor"></div>
        </el-form-item>
        <el-form-item>
          <el-button v-if="id" @click="saveBtnClick">保存</el-button>
          <el-button v-else @click="createBtnClick">创建</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import E from 'wangeditor'
export default {
  data(){
    return {
       id:this.$route.query.id,
       editor:null,
       blog:{
         title:'',
         author:'',
         abstract:'',
         content:''
       }
    }
  },
  mounted(){
    this.initEditor();
  },
  methods:{
    //获取数据
    async getBlog(){
      let req = {id:this.id};
      let res = await this.$api.getBlogById(req);
      if(res.code == 200){
        this.blog = res.data||{};
        this.editor.txt.html(this.blog.content);//设置编辑信息
      }else{
        this.$message.error("系统错误");
      }
    },
    //初始化编辑器
    initEditor(){
      this.$nextTick(()=>{
        this.editor = new E(this.$refs.editor);
        this.editor.customConfig.menus = ['bold','italic','underline'];
        this.editor.customConfig.zIndex = 0;
        this.editor.create();
        //如果有id
        if(this.id){
          this.getBlog();
        }
      })
    },
    //验证
    validateForm(){
      //验证
       if(this.blog.title==''){
         this.$message.warning('请输入文章标题');
         return false;
       }
       if(this.blog.author==''){
         this.$message.warning('请输入文章作者');
         return false;
       }
       if(this.blog.abstract==''){
         this.$message.warning('请输入文章摘要');
         return false;
       }
       return true;
    },
    //保存
    async saveBtnClick(){
       this.blog.content = this.editor.txt.html();
       if(!this.validateForm()){
          return false;
       }
       //修改
      let res = await this.$api.updateBlog(this.blog);
      if(res.code == 200){
        this.$message.success('保存成功');
        this.$router.back();
      }else{
        this.$message.error('保存失败');
      }
    },
    //创建
    async createBtnClick(){
        this.blog.content = this.editor.txt.html();
       if(!this.validateForm()){
          return false;
       }
       //修改
      let res = await this.$api.createBlog(this.blog);
      if(res.code == 200){
        this.$message.success('创建成功');
        this.$router.back();
      }else{
        this.$message.error('保存失败');
      }
    }
  }
}
</script>
<style lang="less" scoped>
.page-blog-edit{
   >.form{
     padding: 30px;
     width: 500px;
   }
}
</style>


