<template>
  <div class="tc-main">
    <router-view></router-view>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Footer from './pages/footer/index.vue'
// import { useRouter } from "vue-router";
// import { watch } from 'vue'
// 监听当前路由
// const router = useRouter();
// watch(
//   () => router.currentRoute.value,
//   (newValue: any) => {
//     if (!document.getElementsByClassName('tc-main') || !document.getElementsByClassName('tc-main').length) {
//       return
//     }
//     document.getElementsByClassName('tc-main')[0].scrollTop = 0
//     console.log('document.getEl----', document.getElementsByClassName('tc-main')[0].scrollTop)
//   },
//   { deep: true }
// )
</script>
<style scoped>
.tc-main{
  width:100%;
  height: 100%;
}
</style>
