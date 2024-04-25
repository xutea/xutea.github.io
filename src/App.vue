<template>
  <div class="tc-main">
    <Header/>
    <!-- <Home/> -->
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
// import Home from './pages/home/index.vue'
import Header from './pages/home/components/Header.vue'

</script>
<style scoped>
.tc-main{
  /* padding: 60px 120px; */
  width:100%;
  height:100%;
}
</style>
