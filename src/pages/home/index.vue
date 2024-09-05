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
          <div class="carousel-inner" ref="bannerImg" v-for="ss,index in item" :key="index" :style="{ backgroundImage: `url(${ss.img})` }">
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
      <div v-for="item in huodongArr" class="tc-box-flex" :class="item.type == 2 ? 'flex-reverse': ''" @click="goCulturePage">
        <img :src="item.img"/>
        <div class="tc-text-box">
          <div class="tc-activity-title">{{ item.title }}</div>
          <div class="tc-activity-des">{{ item.des }}</div>
          <div class="tc-container-btn margintop30" >{{ homeContentData.btnText }}</div>
        </div>
      </div>
    </div>
    <div class="tc-center">
      <span class="tc-title">新闻</span>
      <div class="tc-title-bg"></div>
    </div>
    <div class="tc-news-content tc-box-flex">
      <div v-for="item in newsArr" class="tc-w-50 " @click="goNewsPage">
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
    <div class="tc-add-box">
      <div class="tc-add-right">
        <p class="font18">提问</p>
        <p class="colorWhite">如何<br/>加入我们</p>
        <div v-for="item in addArr" class="tc-add-p">
          <img src="/public/culture/pic.jpg"/>
          <span class="tc-add-title">{{ item.title }}</span>
        </div>
        <div class="tc-container-btn" style="margin-top: 40px;">{{ homeContentData.btnText }}</div>
      </div>
    </div>
    <div class="tc-center">
      <span class="tc-title">关于我们</span>
      <div class="tc-title-bg"></div>
    </div>
    <div class="tc-news-content tc-box-flex">
      <div v-for="item in aboutArr" class="tc-w-33" :style="{backgroundImage: 'url(' +item.img + ')'}" >
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
import { resetSetItem } from './index'
import Header from './components/Header.vue'
// import { ElCarousel } from 'element-plus'
// import 'element-plus/lib/components/button/style/css'

window.resetSetItem = resetSetItem

let newDataList = []
let current = 0
if(dataList && dataList.length>0){
  for(let i=0;i<=dataList.length-1;i++){
    if(i%3 !== 0 || i === 0 ){
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




const router = useRouter();
const goProductPage = ()=>{
  resetSetItem('wellData', '茶类科普')
  router.push({path: "/teaProduct"});
}
const huodongArr = ref([{
  img: '/public/details/huodong1.jpg',
  title: '茗香飘万里 何须恋糖精',
  type:1,
  des: '中国是茶的故乡，同时也是茶文化走向世界的窗口。在中国的神话传说中，茶是神农氏尝百草后解毒的灵药；在古代时，茶是士大夫们抒发雅兴的道具；到现在，普通人也可以享受到品茶的宁静与优雅，并享受茶对健康所带来的益处。茶有茶道，陆羽所著的《茶经》洋洋七千余言，讲茶的一......'
}, {
  img: '/public/details/huodong2.jpg',
  title: '茶与养生保健',
  type:2,
  des: '昨天线下活动开展后，有同学问我，喝茶到底对身体有什么好处？这毕竟是个严肃的问题，回答的内容必须要有依据。于是我查阅了一些资料，并整理如下。李时珍在《本草纲目》中记载：“茶体轻浮，采摘之时芽蘖初萌，正得春生之气。味虽苦......'
}])
const newsArr = ref([{
  img: '/public/culture/kafei1.png',
  title: '由卫生局调查研究碳酸饮料对身体有巨大危害',
  des: '我们在日常生活中很喜欢在任何时候喝一杯凉凉的碳酸饮料去缓解疲惫，但是我们却不知道这将对我们的身体造成多大的危害。据有关报道说......'
}, {
  img: '/public/culture/kafei2.png',
  title: '奶茶对于人体的危害性简直难以想象',
  des: '经过长达五年的观察，我对一组天天喝三杯奶茶的十人为一组，共一百组进行了调查。发现他们的衰老速度要比每天喝水的人要快出1.5倍之多......'
}, {
  img: '/public/culture/kafei3.png',
  title: '咖啡是当代人的续命饮品，但危害难以想象',
  des: '咖啡其实在透支着人的生命。咖啡因会刺激人类更有精神的去进行一些日常活动，但你是否想过这些不断给你添加的动力就像兴奋剂一样的东......'
}, {
  img: '/public/culture/kafei4.png',
  title: '你是否还在喝咖啡？你知道它对你的伤害吗？',
  des: '咖啡的伤害简直难以想象。我们日常一杯咖啡对人的伤害是巨大的。他不仅会透支我们的身体，还会对神经造成不可挽回的伤害。让我们来具......'
}]) 
const addArr = ref([{
  title: '通过公众号'
}, {
  title: '通过联系电话'
}, {
  title: '欢迎想要了解茶文化的学生联系我们'
}, {
  title: '欢迎想做茶文化推广的学生联系我们'
}])
const aboutArr = ref([{
  img: '/public/culture/about1.svg',
  title: '为什么创办网站',
}, {
  img: '/public/culture/about2.svg',
  title: '社团介绍',
}, {
  img: '/public/culture/about3.svg',
  title: '如何联系',
}]) 

const goCulturePage = () => {
  resetSetItem('wellData', '活动')
  router.push(`/teaCulture?id=10`)
}
const goNewsPage = () =>{
  resetSetItem('wellData', '新闻')
  router.push("/news")
}
const newHeight = ref('300px')


onMounted(()=> {
  const clientHeight = document.querySelector('.tc-carousel-box')?.clientHeight || 280
  newHeight.value = clientHeight + 20 + 'px'
})
</script>
<style scoped>
.tc-container {
  box-sizing: border-box;
  padding:0;
  width: 100%;
  height: 100%;
  background-image: url("/public/tea-bg.png");
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
  width: 400px;
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
  border-radius: 0 0 24px 24px;
}
.tc-w-50{
  width:48%;
  flex-shrink: 0;  /* 禁止子元素收缩 */
  height:450px;
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
  width: 32%;
  flex-shrink: 0;  /* 禁止子元素收缩 */
  height:350px;
  border-radius: 12px;
  box-shadow: 0px 4px 16px  rgba(0, 0, 0, 0.25);
  margin-bottom: 64px;
  margin-right: 20px;
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
}
.tc-w-33:last-child{
  margin-right: 0;
}
.tc-news-img{
  width: 100% !important;
  height: 270px !important;
  display: block;
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
  height: 200px;
  background: rgba(170, 181, 172, 1);
  margin-top:-160px;
}
.tc-activity-title{
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 0px;
  line-height: 52.13px;
  color: rgba(51, 51, 51, 1);
}
.tc-activity-des{
  font-size: 20px;
  letter-spacing: 0px;
  line-height: 42px;
  color: rgba(102, 102, 102, 1);
}
.tc-news-content{
  padding: 0 200px;
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
  /* width: 100%; */
  height:660px;
  background-image: url('/public/culture/add-bg.png');
  background-repeat: no-repeat;
  position: relative;
  border-radius: 12px;
  box-shadow: 0px 4px 16px  rgba(0, 0, 0, 0.25);
  margin: 64px 200px;
  background-position: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 64px;
}
.tc-add-right{
  width: 410px;
  /* height: 550px; */
  border-radius: 12px;
  background: rgba(30, 49, 58, 1);
  background-position: center;
  background-size: contain;
  box-sizing: border-box;
  padding: 20px 40px;
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
  top: 34%;
}
::v-deep .el-carousel__arrow--left{
  background: #FFEB3B;
  color: #333;
  top: 34%;
}
</style>
