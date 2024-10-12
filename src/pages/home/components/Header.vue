<template>
  <div class="header">
    <div>
      <span class="header-span" @click="goHome">茶文化研究</span>
      <span class="header_font" style="display: block;" @click="goHome">Research on Tea Culture</span>
    </div>
    <div class="header-right" >
      <div  v-for="item in arr"  @click="goPage(item.name)" >
        <span class="header_font"  :style="{color: item.active ? 'rgba(242, 153, 74, 1)': 'white'}">{{ item.name }}</span>
        <div class="header_en_font">{{ item.enName }}</div>
      </div>
     
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
  {name: '首页', id: 1, active: true, enName: 'Home'},
  {name: '茶类科普', id: 2, active: false, enName: 'Tea Science Popularization'},
  {name: '活动', id: 3, active: false, enName: 'Activity'},
  {name: '新闻', id: 4, active: false,  enName: 'News'},
  {name: '加入', id: 5, active: false, enName: 'Join'},
  {name: '关于我们', id: 6, active: false, enName: 'About Us'}
])
console.log('arr----', arr)
const goPage = (name: string)=>{
  let obj:any = {
    '茶类科普': '/teaProduct',
    '首页': '/home',
    '活动': '/teaCulture?id=10',
    '新闻': '/news',
    '加入': '/joinUs',
    '关于我们': '/aboutUs'
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
  position: fixed;
  top:0;
  z-index: 999;
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
  /* margin-right: 60px; */
}
.header_en_font{
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-right: 60px;
}
.header-span{
  cursor: pointer;
  font-size: 32px;
  font-weight:bold;
}
</style>