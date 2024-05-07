<template > 
    <div class="tc-nav">
        <Header/>
        <header @click="goHome" class="tc-header"> 
            <img src="@/assets/others/return.png"  width="15px">
            返回 </header>
        <div v-for="item in data" :key="item.id" class="tc-nav-div" @click="goDetail(item.id,item.title)">
            <img :src="item.icon"class="tc-nav-img" >
            <div class="tc-nav-wrap">
                    <span class="tc-nav-title">{{item.title}}</span>
                    <span class="tc-nav-text">{{item.text}}</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref,onMounted } from 'vue'
import Header from '../home/components/Header.vue'
import { dataList } from '../teaProduct/index'
const router = useRouter();
const goHome = ()=>{
  router.push("/teaProduct");
}
const data = ref()
onMounted(()=>{
    data.value = dataList.find(p=>p.id === router.currentRoute.value.query.id)?.children
})
const goDetail = (id:string, title:string)=>{
    router.push({path: "/teaDetail", query: { id,title, parentId: router.currentRoute.value.query.id}});
}
</script>
<style scoped>
.tc-nav{
    width: 100%;
    min-height: calc(100% - 220px);
    padding:60px;
    background-image: url("@/assets/others/list-bg.png");
    background-size:cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    /* max-height: 100%; */
}
.tc-nav-wrap{
    display: flex;
    flex-direction: column;
    padding: 40px;
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
}
.tc-nav-div{
    display: flex;
    align-items: center;
    margin-bottom: 80px;
    margin-top:40px;
    cursor: pointer;
    width: 100%;
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
    height: 40%;
}
</style>