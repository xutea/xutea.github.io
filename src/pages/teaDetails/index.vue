<template>
    <div class="tc-detail">
        <header @click="goHome" class="tc-header">返回</header>
        <p class="tc-detail-title">{{title}}</p>
        <p v-html="detailData" class="tc-detail-p"></p>
    </div>
</template>
<script setup lang="ts">
import { ref,onMounted } from 'vue'
import { useRouter } from "vue-router";
import { dataList} from './index'
const router = useRouter();
const detailData = ref()
const title = ref()
onMounted(()=>{
    if(router.currentRoute.value.query.id){
        let id: any = router.currentRoute.value.query.id
        title.value = id
        detailData.value = dataList[id].text
       
    }
})
const goHome = ()=>{
    router.push({ path:"/cultureList", query:{
        type: router.currentRoute.value.query.type || '1'
    }});
}
</script>
<style scoped>
.tc-detail{
    padding: 0 120px;
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
    cursor: pointer;
}
</style>