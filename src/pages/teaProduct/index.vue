<template>
  <div class="tc-product-content">
    <Header/>
    <div class="tc-product-main">
      <div v-for="item in data" :key="item.id" class="tc-div-wrapper" @click="golist(item.children,item.id)">
        <img :src="item.img"/>
        <span class="tc-span-title">{{ item.title }}</span>
      </div>
      <div class="tc-div-tooltip" v-show="isShow">敬请期待!</div>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue'
import {dataList} from './index'
import { useRouter } from "vue-router";
import Header from '../home/components/Header.vue'
import { resetSetItem } from '../home/index'
const data = ref(dataList)
const router = useRouter();
const isShow = ref(false)
const golist = (children:any,id:any)=>{
  if (children.length > 0) {
    if(id == '10') {
      resetSetItem('wellData', '活动')
    }
    router.push({path:'/teaCulture', query:{
      // title,
      id
    }});
    
  } else {
    isShow.value = !isShow.value
    setTimeout(()=>{
      isShow.value = false
    }, 1500)
  }
  
}
</script>
<style scoped>
.tc-product-content{
  background-image: url("@/assets/list-bg.png");
  background-size:cover;
  background-repeat: no-repeat;
  background-position:center;
  min-height: calc(100% - 220px);
}
.tc-product-main{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px 336px;
}
.tc-div-wrapper{
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 40px;
  cursor: pointer;
}
.tc-span-title{
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0px;
  color: rgba(36, 36, 36, 1);
}
.tc-div-tooltip{
  width: 150px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  border-radius: 8px;
  box-shadow: 0px 8px 12px 4px rgba(0, 0, 0, 0.25);
  font-size: 20px;
  background: white;
  position: absolute;
  top: 15%;
  left: 50%;
}
</style>