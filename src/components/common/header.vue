<template>
  <div>
    <div class="head-tab fix">
        <a v-show="menubtn" class="iconfont icon-celanliebiaogengduo head-menu-btn" href="javascript:" ></a>
        <router-link :to="{name:'search'}" v-show="searchbtn" class="iconfont icon-iconfontsousuo head-search-btn"></router-link>
        <a @click="back" v-show="backbtn" class="iconfont icon-fanhui1 head-back-btn"></a>
        <a class="head-msg" :class="{'font-center':center}">{{title}}</a> 
        <div v-show="ifsearch" class="search-input-group">
          <input @keydown="keydownsearch" class="search-input-text" v-model="keyword" type="text" name="searchBook" placeholder="输入书名/作者/关键字">
          <a @click="searchbook" class="search-input-btn"></a>
        </div>
    </div>
   
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
import api from '@/service/api'
import util from '@/util/util'
  export default {
    data() {
      return {
          keyword:''
      }
    },
    watch:{
      '$route':function(){
          this.keyword='';
      }
    },
    methods:{
        back(){
          if(this.go == -1){
             this.$router.go(-1);
           }else{
            this.$router.push({name:this.go})
           }
         
        },
        keydownsearch(el){
          if(el.keyCode == 13){
            this.searchbook()
          }
        },
        searchbook(){
          if(this.keyword == ''){
            Toast({
              message:'请输入关键字',
              duration:2000
            })
            return;
          }
          api.getSearchResult({query:this.keyword}).then(res=>{
              res.data.books.forEach(book=>{
                book.cover = util.staticPath+book.cover;
              })
              this.$store.commit('SetSearchResult',res.data);
            })
        }
    },
    props:{
          backbtn:{
            type:Boolean,
            default:false
          },
          searchbtn:{
            type:Boolean,
            default:false
          },
          menubtn:{
            type:Boolean,
            default:false
          },
          title:{
            type:String,
            default:''
          },
          center:{
            type:Boolean,
            default:false  
          },
          ifsearch:{
            type:Boolean,
            default:false
          },
          go:{
            default:-1
          }
      }
  }
</script>
<style type="text/css">
  .head-tab{
    background-color: #409EFF;
    padding: 0 60px;
    height: 44px;
    position: relative;
  }
  .head-menu-btn{
    position: absolute;
    z-index: 101;
    right: 20px;
    top: 10px;
    font-size: 20px;
  }
  .head-search-btn{
    position: absolute;
    z-index: 101;
    left: 20px;
    top:10px;
    font-size: 20px;
  }
  .head-back-btn{
    position: absolute;
    z-index: 101;
    left: 20px;
    top:10px;
    font-size: 24px;
  }
  .head-msg{
    height:44px;
    margin:0 auto;
    font-size: 16px;
    line-height: 45px;
    text-align: left;
  }
  .font-center{
    text-align: center!important;
  }
</style>