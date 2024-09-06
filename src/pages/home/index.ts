import kafei1 from '../../assets/culture/kafei1.png'
import kafei2 from '../../assets/culture/kafei2.png'
import kafei3 from '../../assets/culture/kafei3.png'
import kafei4 from '../../assets/culture/kafei4.png'
import huodong1 from '@/assets/details/huodong1.jpg'
import huodong2 from '@/assets/details/huodong2.jpg'
import about1 from'@/assets/culture/about1.png'
import about2 from'@/assets/culture/about2.png'
import about3 from'@/assets/culture/about3.png'

export const homeContentData = {
   cultureTitle: '中国茶文化',
   cultureText: '“茶圣”陆羽在《茶经·六之饮》中说：“茶之为饮，发乎神农氏……”说的是茶作为一种饮料被人类所用，是从神农开始的。历代茶文化研究者，一般均以此为据，认为茶与人类的第一次亲密接触，是从距今五千多年前上古时期的神农时代开始的。',
   btnText: '查看更多',
   teaTypeTitle: '茶的种类',
   teaTypeText: '中国茶类的划分有多种方法，根据制作方法和茶多酚氧化（发酵）程度的不同，可分为六大类(茶叶中发酵程度的轻重不是绝对的，当有小幅度的误差)：绿茶（不发酵）、白茶（轻微发酵）、黄茶（轻发酵）、青茶（乌龙茶、半发酵）、黑茶（后发酵）、红茶（全发酵）。外观由绿向黄绿、黄、青褐、黑色渐变，茶汤也由绿向黄绿、黄、青褐、红褐色渐变。今天我们首先来介绍白茶。'
}
export function resetSetItem  (key:any, newVal:any) {
   if (key === 'watchStorage') {
       // 创建一个StorageEvent事件
       var newStorageEvent = document.createEvent('StorageEvent');
       const storage = {
           setItem: function (k:any, val:any) {
               sessionStorage.setItem(k, val);
 
               // 初始化创建的事件
               newStorageEvent.initStorageEvent('setItem', false, false, k, null, val);
 
               // 派发对象
               window.dispatchEvent(newStorageEvent)
           }
       }
       return storage.setItem(key, newVal);
   }
     if (key === 'wellData') {
         // 创建一个StorageEvent事件
         var newStorageEvent = document.createEvent('StorageEvent');
         const storage = {
             setItem: function (k:any, val:any) {
                 sessionStorage.setItem(k, val);
 
                 // 初始化创建的事件
                 newStorageEvent.initStorageEvent('setItem', false, false, k, null, val);
 
                 // 派发对象
                 window.dispatchEvent(newStorageEvent)
             }
         }
         return storage.setItem(key, newVal);
     }
}

export const newsArr = [{
    img: kafei1,
    title: '由卫生局调查研究碳酸饮料对身体有巨大危害',
    des: '我们在日常生活中很喜欢在任何时候喝一杯凉凉的碳酸饮料去缓解疲惫，但是我们却不知道这将对我们的身体造成多大的危害。据有关报道说......'
    }, {
    img: kafei2,
    title: '奶茶对于人体的危害性简直难以想象',
    des: '经过长达五年的观察，我对一组天天喝三杯奶茶的十人为一组，共一百组进行了调查。发现他们的衰老速度要比每天喝水的人要快出1.5倍之多......'
    }, {
    img: kafei3,
    title: '咖啡是当代人的续命饮品，但危害难以想象',
    des: '咖啡其实在透支着人的生命。咖啡因会刺激人类更有精神的去进行一些日常活动，但你是否想过这些不断给你添加的动力就像兴奋剂一样的东......'
    }, {
    img: kafei4,
    title: '你是否还在喝咖啡？你知道它对你的伤害吗？',
    des: '咖啡的伤害简直难以想象。我们日常一杯咖啡对人的伤害是巨大的。他不仅会透支我们的身体，还会对神经造成不可挽回的伤害。让我们来具......'
}]  
export const huodongArr = [{
    img: huodong1,
    title: '茗香飘万里 何须恋糖精',
    type:1,
    des: '中国是茶的故乡，同时也是茶文化走向世界的窗口。在中国的神话传说中，茶是神农氏尝百草后解毒的灵药；在古代时，茶是士大夫们抒发雅兴的道具；到现在，普通人也可以享受到品茶的宁静与优雅，并享受茶对健康所带来的益处。茶有茶道，陆羽所著的《茶经》洋洋七千余言，讲茶的一......'
  }, {
    img: huodong2,
    title: '茶与养生保健',
    type:2,
    des: '昨天线下活动开展后，有同学问我，喝茶到底对身体有什么好处？这毕竟是个严肃的问题，回答的内容必须要有依据。于是我查阅了一些资料，并整理如下。李时珍在《本草纲目》中记载：“茶体轻浮，采摘之时芽蘖初萌，正得春生之气。味虽苦......'
}]
export const aboutArr = [{
    img: about1,
    title: '为什么创办网站',
  }, {
    img: about2,
    title: '社团介绍',
  }, {
    img: about3,
    title: '如何联系',
}]