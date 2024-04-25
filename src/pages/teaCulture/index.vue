<template > 
    <div class="tc-nav">
        <header @click="goHome" class="tc-header">返回</header>
        <nav >
            <div v-for="item in data" :key="item.id" class="tc-nav-div" @click="goDetail(item.title)">
                <img :src="item.icon">
                <div class="tc-nav-wrap">
                    <span class="tc-nav-title">{{item.title}}</span>
                    <span class="tc-nav-text">{{item.text}}</span>
                </div>
            </div>
        </nav>
    </div>
</template>
<script setup lang="ts">
import { listData, typeData } from './index'
import { useRouter } from "vue-router";
import { ref,onMounted } from 'vue'
const router = useRouter();
const goHome = ()=>{
  router.push("/home");
}
const data = ref()
onMounted(()=>{
    if(router.currentRoute.value.query.type == '1'){
        data.value = listData
    } else if(router.currentRoute.value.query.type == '2'){
        data.value = typeData
    }
})
const goDetail = (id:any)=>{
    router.push({path: "/teaDetail", query: { id: id, type: router.currentRoute.value.query.type}});
}
</script>
<style scoped>
.tc-nav{
    width: 100%;
    height: 100%;
    padding:0 120px;
}
.tc-nav-wrap{
    display: flex;
    flex-direction: column;
    margin-left: 36px;
}
.tc-nav-title{
    font-size: 48px;
    font-weight: 600;
    letter-spacing: 5px;
    line-height: 30px;
    color: rgba(0, 0, 0, 1);
    margin-bottom: 40px;
}
.tc-nav-text{
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 40px;
    color: rgba(105, 105, 105, 1);
}
.tc-nav-div{
    display: flex;
    align-items: center;
    margin-bottom: 80px;
    margin-top:40px;
    cursor: pointer;
}
.tc-header{
    cursor: pointer;
}
</style>