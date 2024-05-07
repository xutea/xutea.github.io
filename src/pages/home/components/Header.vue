<template>
  <div class="header">
    <span class="header-span" :style="{color: isWhite? 'white': 'black'}" @click="goHome">CHINESE Teas</span>
    <span class="header_font" :style="{color: isWhite? 'white': 'black'}" @click="goHome">Home</span>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import {  } from 'vue';
const router = useRouter();
const goHome = ()=>{
  router.push('/home')
}
defineProps({
  isWhite: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.header{
  display: flex;
  justify-content: space-between;
  /* padding: 60px; */
  width: 100%;
  margin-bottom: 40px;
}

.header_font{
  color:black;
  font-size: 24px;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.header-span{
  cursor: pointer;
  font-size: 24px;
  font-weight:bold;
  color: black;
}
</style>