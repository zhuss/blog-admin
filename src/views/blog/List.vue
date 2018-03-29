<template>
  <div class="page-blog-list">
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>博文管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="btn">
      <el-button type="primary" icon="el-icon-plus" @click="$router.push({name:'blogEdit'})">创建博文</el-button>
    </div>
    

    <div class="table">
        <el-table :data="rows">
            <el-table-column type="index"></el-table-column>
            <el-table-column label="ID" prop="id" width="100"></el-table-column>
            <el-table-column label="标题" prop="title"></el-table-column>
            <el-table-column label="作者" prop="author" width="100"></el-table-column>
            <el-table-column label="摘要" prop="abstract"></el-table-column>
            <el-table-column label="创建时间" width="200">
               <template slot-scope="scope">
                  <p>{{momnet(scope.row.createdAt).format('YYYY年MM月DD日')}}</p>
               </template>
            </el-table-column>
            <el-table-column label="操作"  width="200">
              <template slot-scope="scope">
                  <p>
                    <el-button @click="$router.push({name:'blogEdit',query:{id:scope.row.id}})" size="medium" type="success">编辑</el-button>
                    <el-button size="medium" type="warning">删除</el-button>
                  </p>
               </template>
            </el-table-column>
        </el-table>
    </div>
    <div class="pagination">
        <el-pagination
          layout="prev, pager, next"
          :total="count">
        </el-pagination>
    </div>
  </div>
</template>
<script>
import momnet from 'moment'
export default {
  data(){
    return{
      momnet:momnet,
      search:{
        pageNo:this.$route.query.pageNo||1
      },
      rows:[],
      count:0
    }
  },
  mounted(){
    this.getBlogList();//获取博文列表表
  },
  methods:{
    //获取列表
    async getBlogList(){
      let res = await this.$api.ListBlog(this.search);
      if(res.code == 200){
        this.rows = res.data.rows||[];
        this.count  =res.data.count||0;
      }else{
         this.rows = [];
        this.count = 0;
        this.$message.error("系统错误");
      }
    }
  }
}
</script>
<style lang="less" scoped>
.page-blog-list{
  .btn{
    position: absolute;
    top:95px;
    right: 30px;
  }
  >.pagination{
    margin-top:20px; 
    text-align: center;
  }
}
</style>

