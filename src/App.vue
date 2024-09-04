<template>
  <div class="tc-main">
    <router-view></router-view>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Footer from './pages/footer/index.vue'
// 监听当前路由
// watch(
//   () => router.currentRoute.value,
//   (newValue: any) => {
//     if(newValue.path == '/home' || newValue.path == '/'){
//       isShow.value = true
//     } else {
//       isShow.value = false
//     }
//   },
//   { immediate: true }
// )
</script>
<style scoped>
.tc-main{
  width:100%;
  height: 100%;
}
</style>
