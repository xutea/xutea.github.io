<template>
    <Header/>
    <div class="tc-detail" >
        <header @click="goHome" class="tc-header"> 
            <img src="/public/return.png" width="15px">返回 
        </header>
        <p class="tc-detail-title">{{router.currentRoute.value.query.title}}</p>
        <p v-html="detailData" class="tc-detail-p"></p>
    </div>
</template>
<script setup lang="ts">
import Header from '../home/components/Header.vue'
import { ref,onMounted } from 'vue'
import { useRouter } from "vue-router";
import { dataList} from './index'
const router = useRouter();
const detailData = ref()
interface TeaData {
  title: string;
  text: string;
}
const dataListType: Record<string, TeaData> = dataList as unknown as Record<string, TeaData>;
onMounted(()=>{
    if (router.currentRoute.value.query.id) {
    // 使用 unknown 类型，然后进行类型判断
    let title: unknown = router.currentRoute.value.query.title || '绿茶';
    if (typeof title === 'string') {
      // 类型收窄为字符串后，可以安全地使用索引访问
      detailData.value = dataListType[title as string].text;
    }
  }
})
const goHome = ()=>{
    router.push({ path:"/teaCulture", query:{
        id: router.currentRoute.value.query.parentId
    }});
}
</script>
<style scoped>
.tc-detail{
    padding: 40px 80px;
    background-image: url("/public/detail-bg.png");
    background-size:cover;
    background-repeat: no-repeat;
    background-position: center center;
    min-height: calc(100% - 220px);
    /* max-height: 100%; */
}
.tc-detail-p{
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 40px;
    color: rgba(0, 0, 0, 1);
    text-indent: 2em; 
}
.tc-detail-title{
    font-size: 48px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 0px;
    color: rgba(0, 0, 0, 1);
    text-align: center;
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
</style>