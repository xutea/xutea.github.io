<template>
  <div class="header">
    <img src="/public/svg/cact-us.svg" alt="" @click="goHome">
    <span class="header_font" @click="goHome">Home</span>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const goHome = ()=>{
  router.push('/home')
}
</script>

<style scoped>
.header{
  display: flex;
  justify-content: space-between;
  padding: 60px 120px;
}
img{
  cursor: pointer;
}
.header_font{
  color:black;
  font-size: 16px;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
</style>