<template>
  <div class="tc-main">
    <!-- <Header v-if="!isShow"/> -->
    <router-view></router-view>
    <Footer v-if="!isShow"/>
  </div>
</template>
<script setup lang="ts">
// import Header from './pages/home/components/Header.vue'
import { watch,ref } from 'vue';
import { useRouter} from 'vue-router'
import Footer from './pages/footer/index.vue'

const router = useRouter()
const isShow = ref(true)
// 监听当前路由
watch(
  () => router.currentRoute.value,
  (newValue: any) => {
    if(newValue.path == '/home' || newValue.path == '/'){
      isShow.value = true
    } else {
      isShow.value = false
    }
  },
  { immediate: true }
)
</script>
<style scoped>
.tc-main{
  width:100%;
  height: 100%;
}
</style>
