<template > 
    <Header/>
    <div class="tc-nav">
        <header @click="goHome" class="tc-header"> 
            <img src="@/assets/return.png"  width="15px">
            返回 </header>
        <div v-for="item in data" :key="item.id" class="tc-nav-div" @click="goDetail(item.id,item.title)">
            <img :src="item.icon" class="tc-nav-img" >
            <div class="tc-nav-wrap">
                    <span class="tc-nav-title">{{item.title}}</span>
                    <span class="tc-nav-text">{{item.text}}</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref,onMounted,watch } from 'vue'
import Header from '../home/components/Header.vue'
import { dataList } from '../teaProduct/index'
import { resetSetItem } from '../home/index'
const router = useRouter();
const goHome = ()=>{
  resetSetItem('wellData', '茶类科普')
  router.push("/teaProduct");
}
const data = ref()
onMounted(()=>{
    data.value = dataList.find(p=>p.id === router.currentRoute.value.query.id)?.children
})
watch(()=>router.currentRoute.value.query.id, (newValue)=>{
    data.value = dataList.find(p=>p.id === newValue)?.children
})
const goDetail = (id:string, title:string)=>{
    router.push({path: "/teaDetail", 
    query: { 
        id:id as string,
        title: title as string, 
        parentId: router.currentRoute.value.query.id as string
    }});
}
</script>
<style scoped>
.tc-nav{
    width: 100%;
    min-height: calc(100% - 220px);
    background-image: url("@/assets/list-bg.png");
    background-size:cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    padding: 40px 336px;
    padding-top:120px;
}
.tc-nav-wrap{
    display: flex;
    flex-direction: column;
    padding: 20px;
}
.tc-nav-title{
    font-size: 48px;
    font-weight: 600;
    letter-spacing: 5px;
    line-height: 60px;
    color: rgba(51, 51, 51, 1);
}
.tc-nav-text{
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 40px;
    color: rgba(102, 102, 102, 1);
    margin-top:20px;
    display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tc-nav-div{
    display: flex;
    height: 320px;
    box-sizing: border-box;
    align-items: center;
    margin-bottom: 80px;
    margin-top:40px;
    cursor: pointer;
    /* width: 100%; */
    border-radius: 18px;
    background: rgba(255, 235, 209, 1);
}
.tc-header{
    font-size: 18px;
    cursor: pointer;
    font-weight: 500;
    letter-spacing: 0px;
    color: rgba(0, 0, 0, 1);
    display: flex;
    align-items: center;
}
.tc-nav-img {
    width: 50%;
    height: 100%;
    margin-top: 10px;
}
</style>