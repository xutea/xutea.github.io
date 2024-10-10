<template>
    <Header/>
    <div class="tc-detail" >
        <header @click="goHome" class="tc-header"> 
            <img src="@/assets/return.png" width="15px">返回 
        </header>
        <p class="tc-detail-title">加入</p>
        <p v-html="joinData" class="tc-detail-p"></p>
        <div>
            <p class="tc-contact-p">联系我们</p>
            <p class="tc-contact-p">公  众  号：SDSZ茶文化研究社</p>
            <p class="tc-contact-p">联系邮箱：office@chineseteas.net</p>
        </div>
    </div>
</template>
<script setup lang="ts">
import Header from '../home/components/Header.vue'
import { useRouter } from "vue-router";
import { joinData} from '../aboutUs/index'
import { resetSetItem } from '../home/index'
const router = useRouter();

const goHome = ()=>{
    resetSetItem('wellData', '首页')
    router.push("/home");
}
</script>
<style scoped>
.tc-detail{
    padding: 40px 336px;
    background-image: url("@/assets/detail-bg.png");
    background-size:cover;
    background-repeat: no-repeat;
    background-position: top;
    min-height: calc(100% - 180px);
    padding-top: 120px;
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
.tc-contact-p{
    font-size: 24px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    text-align: center;
}
</style>