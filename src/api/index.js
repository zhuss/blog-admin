import axios from 'axios'

axios.interceptors.response.use(res=>{
    return res.data||res||{code:100};
});

let baseUrl =  'http://47.100.55.91:3000';

export function get(path,data){
    let url = baseUrl + path;
    let params = {
        params:data
    }
    return axios.get(url,params);
}

export function post(path,data){
    let url = baseUrl + path;
    let req = {data:data}
    return axios.post(url,req);
}

export default {
    //获取博文列表
    ListBlog(data){
      return get('/blog/list',data);
    },
    //获取博文详情
    getBlogById(data){
        return get('/blog/get',data)
    },
    updateBlog(data){
        return post('/blog/update',data)
    },
    createBlog(data){
        return post('/blog/create',data)
    }
}