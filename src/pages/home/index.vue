<template>
  <div class="tc-container">
    <div class="tc-container-content" @click="goCulturePage">
      <h1 class="tc-container-title">{{ homeContentData.cultureTitle }}</h1>
      <div class="tc-container-text">{{ homeContentData.cultureText }}</div>
      <div class="tc-container-btn">{{ homeContentData.btnText }}</div>
    </div>
    <div class="tc-section-wrap" @click="goType">
      <div>
        <img src="/public/svg/tea1.png" alt="" />
        <img src="/public/svg/tea2.png" class="tc-section-img" />
      </div>
      <div class="tc-section-right">
        <h1 class="tc-container-title" style="margin-top: 0">
          {{ homeContentData.teaTypeTitle }}
        </h1>
        <div class="tc-container-text tc-section-text">
          {{ homeContentData.teaTypeText }}
        </div>
        <img src="/public/svg/tea3.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { homeContentData } from "./index.ts";
import { useRouter } from "vue-router";
const router = useRouter();
const goCulturePage = ()=>{
  router.push({path: "/cultureList", query:{
    type: '1'
  }});
}
const goType = ()=>{
  router.push({ path:"/cultureList", query:{
    type: '2'
  }});
}
</script>
<style scoped>
.tc-container {
  box-sizing: border-box;
  padding: 60px 0 120px 120px;
}
.tc-container-content {
  box-sizing: border-box;
  width: 100%;
  height: 826px;
  background-image: url("/public/svg/tea-bg.png");
  /* background-size: 1000px 620px; */
  background-repeat: no-repeat;
  cursor: pointer;
  background-position: right center;
}
.tc-container-title {
  font-size: 84px;
  font-weight: 700;
  color: rgba(56, 56, 56, 1);
}
.tc-container-text {
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  width: 40%;
  color: rgba(136, 136, 136, 1);
}
.tc-container-btn {
  width: 170px;
  height: 64px;
  line-height: 62px;
  opacity: 1;
  background: rgba(242, 153, 74, 1);
  font-size: 16px;
  font-weight: 700;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  margin-top: 42px;
}
.tc-section-wrap {
  margin-top: 120px;
  display: flex;
  padding-right: 120px;
  cursor: pointer;
}
.tc-section-img {
  margin-top: 74px;
}
.tc-section-right {
  margin-left: 70px;
}
.tc-section-text {
  width: 100% !important;
  margin-bottom: 26px;
}
</style>
