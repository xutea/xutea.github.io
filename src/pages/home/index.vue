<template>
  <div class="tc-container">
    <Header />
    <div class="tc-container-content" >
      <h1 class="tc-container-title">{{ homeContentData.cultureTitle }}</h1>
      <div class="tc-container-text">{{ homeContentData.cultureText }}</div>
      <div class="tc-container-btn" @click="goProductPage">{{ homeContentData.btnText }}</div>
    </div>
  </div>
  <div class="tc-carousel-warpper">
    <div class="tc-center">
      <span class="tc-title">茶类科普</span>
      <div class="tc-title-bg"></div>
    </div>
    
    <div class="tc-carousel-box">
      <el-carousel :interval="4000"  :height="newHeight"  arrow="always" >
        <el-carousel-item class="el-car-item" v-for="item,key in swperData" :key="key"  >
          <div class="carousel-inner" ref="bannerImg" v-for="ss,index in item" :key="index" :style="{ backgroundImage: `url(${ss.img})` }" @click="goCulturePage2(ss.id)">
            <div class="tc-warp"></div>
            <div class="tc-carousel-content">
              <div class="tc-carousel-title">{{ ss.title }}</div>
              <div  class="tc-carousel-des">{{  ss.text}}</div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
      
    </div>
    <div class="tc-carousel-footer"></div>
  </div>
  <div>
    <div class="tc-center">
      <span class="tc-title">活动</span>
      <div class="tc-title-bg"></div>
    </div>
    <div class="tc-news-content">
      <div v-for="item in huodongArr" class="tc-box-flex" :class="item.type == 2 ? 'flex-reverse': ''" @click="goCulturePage('10')">
        <img :src="item.img"/>
        <div class="tc-text-box">
          <div class="tc-activity-title">{{ item.title }}</div>
          <div class="tc-activity-des">{{ item.des }}</div>
          <div style="text-align: center;display: flex;justify-content: center;"><div class="tc-container-btn margintop30" >{{ homeContentData.btnText }}</div></div>
        </div>
      </div>
    </div>
    <div class="tc-center">
      <span class="tc-title">新闻</span>
      <div class="tc-title-bg"></div>
    </div>
    <div class="tc-news-content tc-box-flex">
      <div v-for="item in newsArr2" class="tc-w-50 " @click="goNewsPage">
        <!-- <div :style="{backgroundImage: `url(${item.img})`}" class="tc-news-img"></div> -->
        <img :src="item.img" class="tc-news-img"/>
        <div class="padding20">
          <div class="tc-news-title">{{ item.title }}</div>
          <div class="tc-news-des">{{ item.des }}</div>
        </div>
      </div>
    </div>
    <div class="tc-center">
      <span class="tc-title">加入我们</span>
      <div class="tc-title-bg"></div>
    </div>
    <div class="tc-add-box" @click="goAddPage">
      <div class="tc-add-warpper">
        <div class="tc-add-right">
          <p class="font18">提问</p>
          <p class="colorWhite">如何<br/>加入我们</p>
          <div v-for="item in addArr" class="tc-add-p">
            <img src="@/assets/culture/pic.jpg"/>
            <span class="tc-add-title">{{ item.title }}</span>
          </div>
          <div class="tc-container-btn marginTop40" >查看详情</div>
        </div>
      </div>
    </div>
    <div class="tc-center">
      <span class="tc-title">关于我们</span>
      <div class="tc-title-bg"></div>
    </div>
    <div class="tc-news-content tc-box-flex">
      <div v-for="item in aboutArr" class="tc-w-33" :style="{backgroundImage: 'url(' +item.img + ')'}" @click="goPage">
        <div >{{ item.title }}</div>
        <div class="tc-container-btn tc-mini-btn" >查看详情</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { homeContentData } from "./index.ts";
import { useRouter } from "vue-router";
import { ref,onMounted } from 'vue';
import { dataList } from '../teaProduct/index'
import { resetSetItem, newsArr2, huodongArr, aboutArr } from './index'
import Header from './components/Header.vue'
const router = useRouter();
// window.resetSetItem = resetSetItem
resetSetItem('wellData', '首页')
let newDataList = []
let current = 0
if(dataList && dataList.length>0){
  for(let i=0;i<=dataList.length-1;i++){
    if(i%4 !== 0 || i === 0 ){
      if(!newDataList[current]){
        newDataList.push([dataList[i]])
      }else{
        newDataList[current].push(dataList[i])
      }
    }else{
      current++
      newDataList.push([dataList[i]])
    }
  }
}
const swperData = ref([...newDataList])
const goPage = () =>{
  resetSetItem('wellData', '关于我们')
  router.push({path: "/aboutUs"});
}
const goAddPage = ()=>{
  resetSetItem('wellData', '加入')
  router.push({path: "/joinUs"});
}

const goProductPage = ()=>{
  resetSetItem('wellData', '茶类科普')
  router.push({path: "/teaProduct"});
}


const addArr = ref([{
  title: '通过公众号'
}, {
  title: '通过联系电话'
}, {
  title: '欢迎想要了解茶文化的学生联系我们'
}, {
  title: '欢迎想做茶文化推广的学生联系我们'
}])


const goCulturePage = (id:string) => {
  resetSetItem('wellData', '活动')
  router.push(`/teaCulture?id=${id}`)
}
const goCulturePage2 = (id:string) => {
  if (id == '10') {
    resetSetItem('wellData', '活动')
  } else {
    resetSetItem('wellData', '茶类科普')
  }
  router.push(`/teaCulture?id=${id}`)
}
const goNewsPage = () =>{
  resetSetItem('wellData', '新闻')
  router.push("/news")
}
const newHeight = ref('300px')


onMounted(()=> {
  const clientHeight = document.querySelector('.tc-carousel-box')?.clientHeight || 280
  newHeight.value = clientHeight + 30 + 'px'
})
</script>
<style scoped>
.tc-container {
  box-sizing: border-box;
  padding:0;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/tea-bg.png");
  background-size:cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
}
.tc-container-content {
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  padding-left: 100px;
  transform: translateY(-40%);
  width: 100%;
}
.tc-container-title {
  font-size: 84px;
  font-weight: bold;
  color: white;
  margin-top: 0;
}
.tc-container-text {
  font-size: 16px;
  line-height: 32px;
  width: 35%;
  letter-spacing: 0.5px;
  color: rgba(255, 255, 255, 1);
}
.tc-container-btn {
  width: 190px;
  height: 66px;
  font-size: 18px;
  font-weight: bold;
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
::v-deep.el-carousel__arrow--left{
  left: 0;
}
.padding20{
  padding:20px;
}
.marginTop40{
  margin-top: 40px !important;
}
.tc-carousel-box{
  height: 264px;
  /* display: flex;
  overflow: hidden; */
  margin-top:64px;
  padding-left: 40px;
  width: 100%;
}
.tc-carousel-warpper{
  margin-top: 64px;
  margin-bottom: 64px;
}
.carousel-inner{
  width: 392px;
  height: 264px;
  border-radius: 24px;
  box-sizing: border-box;
  background-size: cover;
  flex-shrink: 0;  /* 禁止子元素收缩 */
}
.el-car-item {
  width: 100%;
  display: flex;
  justify-content: center;
}
/* .el-car-item:last-child{
  justify-content: flex-start;
} */
.carousel-inner:hover{
  transform: scale(1.1); /* 鼠标悬停时卡片缩放 */
  z-index: 1;
  cursor: pointer;
}
.tc-carousel-des{
  font-size: 16px;
  line-height: 24px;
  color: rgba(105, 105, 105, 1);
  padding:5px;
}
.tc-carousel-title{
  font-size: 24px;
  font-weight: bold;
  color: rgba(36, 36, 36, 1);
  text-align: center;
}
.tc-warp{
  width:100%;
  height: 40%;
}
.tc-carousel-content{
  background: linear-gradient(10deg, rgba(255, 255, 255, 1) 20%, rgba(255, 255, 255, 0) 100%);
  /* background: rgba(255,255,255, 0.75); */
  height: 52%; 
  margin: 14px;
  margin-top: 0;
  padding-top: 12px;
  padding-bottom: 10px;
  border-radius: 0 0 24px 24px;
  margin-right: 6px;
  margin-top: 0;
}
.tc-w-50{
  width:48%;
  flex-shrink: 0;  /* 禁止子元素收缩 */
  /* height:414px; */
  border-radius: 12px;
  box-shadow: 0px 4px 16px  rgba(0, 0, 0, 0.25);
  margin-bottom: 64px;
}
.tc-w-50:hover{
  transform: scale(1.1); /* 鼠标悬停时卡片缩放 */
}
.tc-w-50:nth-child(odd){
  margin-right: 40px;
}
.tc-w-50:nth-child(3){
  margin-bottom: 0;
}
.tc-w-50:nth-child(4){
  margin-bottom: 0;
}
.tc-w-33{
  width: 31%;
  flex-shrink: 0;  /* 禁止子元素收缩 */
  height:530px;
  border-radius: 12px;
  box-shadow: 0px 4px 16px  rgba(0, 0, 0, 0.25);
  margin-bottom: 64px;
  margin-right: 30px;
  background-position: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 40px;
  background-size: cover;
}
.tc-w-33:last-child{
  margin-right: 0;
}
.tc-news-img{
  width: 100% !important;
  height: 250px !important;
  display: block;
  /* background-position: center; */
}
.tc-title{
  font-size: 28px;
  font-weight: bold;
  color:black;
}
.tc-title-bg{
  height:20px;
  background:  rgba(242, 153, 74, 1);
  border-radius: 20px;
  width: 120px;
  margin: 0 auto;
  margin-top:-20px;
}
.tc-center{
  text-align: center;
}
.tc-carousel-footer{
  height: 205px;
  background: rgba(170, 181, 172, 1);
  margin-top:-160px;
}
.tc-activity-title{
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 0px;
  line-height: 52.13px;
  color: rgba(51, 51, 51, 1);
  margin-bottom: 40px;
  text-align: center;
}
.tc-activity-des{
  font-size: 20px;
  letter-spacing: 0px;
  line-height: 42px;
  color: rgba(102, 102, 102, 1);
}
.tc-news-content{
  padding: 0 336px;
  margin-top: 64px;
  margin-bottom: 64px;
  cursor: pointer;
}
.tc-box-flex{
  display: flex;
  flex-wrap: wrap;
}
.margintop30{
  margin-top:30px !important;
}
.flex-reverse{
  flex-direction: row-reverse;
}
.tc-box-flex img{
  width:50%;
  height: 560px;
}
.tc-text-box{
  background: rgba(170, 181, 172, 1);
  height: 560px;
  padding: 60px;
  flex:1;
}
.tc-news-title{
  font-size: 24px;
  font-weight: bold;
  color: rgba(36, 36, 36, 1);
  margin-bottom: 10px;
}
.tc-news-des{
  font-size: 16px;
  line-height: 24px;
  color: rgba(105, 105, 105, 1);
}
.tc-add-box{
  width: 100%;
  height:740px;
  box-sizing: border-box;
  position: relative;
  
  padding: 64px 336px;
  
  
}
.tc-add-warpper{
  width: 100%;
  height: 100%;
  border-radius: 12px;
  box-shadow: 0px 4px 16px  rgba(0, 0, 0, 0.25);
  background-image: url('@/assets/culture/add-bg.png');
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 64px;
  background-size: cover; /* 图片充满div */
  background-size: 108% 108%;
}
.tc-add-right{
  width: 410px;
  height: 550px;
  border-radius: 12px;
  background: rgba(30, 49, 58, 1);
  background-position: center;
  background-size: contain;
  box-sizing: border-box;
  box-sizing: border-box;
  padding: 40px 0px 40px 50px;
}
.tc-add-p{
  height: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}
.tc-add-p img{
  width: 20px;
  height: 20px;
  margin-right: 10px;  
}
.font18{
  font-size: 18px;
  color: white;
}
.colorWhite{
  color: white;
  margin-bottom: 0;
  font-size: 56px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 10px;
}
.tc-add-title{
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.68);
}
.tc-mini-btn{
  width: 128px !important;
  height: 52px !important;
  line-height: 52px;
  margin-top: 20px !important;
}
.el-carousel__container{
  position: relative;
}
::v-deep .el-carousel__arrow--right{
  background: #FFEB3B;
  color: #333;
  top: 35%;
}
::v-deep .el-carousel__arrow--left{
  background: #FFEB3B;
  color: #333;
  top: 35%;
}
::v-deep .el-carousel__indicators--horizontal{
  bottom: -10px;
}
</style>
