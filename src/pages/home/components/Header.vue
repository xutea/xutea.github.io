<template>
  <div class="header">
    <span class="header-span" @click="goHome">茶文化研究</span>
    <div class="header-right" >
      <span class="header_font"   v-for="item in arr" @click="goPage(item.name)" :style="{color: item.active ? 'rgba(242, 153, 74, 1)': 'white'}">{{ item.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref , onMounted } from 'vue';
import { resetSetItem } from '../index'
const router = useRouter();
// window.resetSetItem = resetSetItem
const goHome = ()=>{
  router.push('/home')
  changeActive('首页')
}


const arr = ref([
  {name: '首页', id: 1, active: true},
  {name: '茶类科普', id: 2, active: false},
  {name: '活动', id: 3, active: false},
  {name: '新闻', id: 4, active: false},
  {name: '加入', id: 5, active: false},
  {name: '关于我们', id: 6, active: false}
])
const goPage = (name: string)=>{
  let obj:any = {
    '茶类科普': '/teaProduct',
    '首页': '/home',
    '活动': '/teaCulture?id=10',
    '新闻': '/news',
    '加入': '/home',
    '关于我们': '/home'
  }
  resetSetItem('wellData', name)
  changeActive(name)
  router.push(obj[name])
}
const changeActive = (name: string) =>{
  arr.value.forEach((element:any) => {
    if(element.name == name) {
      element.active = true
    } else {
      element.active = false
    }
  });
}
onMounted(()=> {
  window.addEventListener('setItem', () => {
    let newVal:any = sessionStorage.getItem('wellData')
    let wellDetails:any = newVal
    if (wellDetails) {
      changeActive(wellDetails)
    }
  })
  const activeName = sessionStorage.getItem('wellData') || ''
  if (activeName !== '' || activeName !== undefined || activeName != null) {
    changeActive(activeName)
  }
})
</script>

<style scoped>
.header{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 98px;
  align-items: center;
  padding-right: 100px;
  padding-left: 100px;

  background: rgba(0, 0, 0, 0.64);
  box-shadow: 0px 2px 4px  rgba(0, 0, 0, 0.25);
  color:white;
}
.header-right{
  display: flex;
  align-items: center;
  height: 100%;
}
.header_font{
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  display: inline-block;
  margin-right: 60px;
}
.header-span{
  cursor: pointer;
  font-size: 32px;
  font-weight:bold;
}
</style>