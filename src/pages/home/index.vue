<template>
  <div class="tc-container">
    <Header :isWhite="true"/>
    <div class="tc-container-content" >
      <h1 class="tc-container-title">{{ homeContentData.cultureTitle }}</h1>
      <div class="tc-container-text">{{ homeContentData.cultureText }}</div>
      <div class="tc-container-btn" @click="goCulturePage">{{ homeContentData.btnText }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Header from './components/Header.vue'
import { homeContentData } from "./index.ts";
import { useRouter } from "vue-router";
const router = useRouter();
const goCulturePage = ()=>{
  router.push({path: "/teaProduct"});
}
</script>
<style scoped>
.tc-container {
  box-sizing: border-box;
  padding: 60px;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/others/tea-bg.png");
  background-size:cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  position: relative;
}
.tc-container-content {
  box-sizing: border-box;
  position: absolute;
  top: 40%;
  transform: translateY(-40%);
}
.tc-container-title {
  font-size: 84px;
  font-weight: 700;
  color: white;
  margin-top: 0;
}
.tc-container-text {
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  width: 35%;
  letter-spacing: 0.5px;
  color: rgba(255, 255, 255, 1);
}
.tc-container-btn {
  width: 190px;
  height: 66px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 64px;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  margin-top: 110px;
  border-radius: 16px;
  background: rgba(242, 153, 74, 1);
  box-shadow: 0px 10px 4px  rgba(0, 0, 0, 0.25);
  cursor: pointer;
}
</style>
