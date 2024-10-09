import new1 from '../../assets/culture/new1.jpg'
import new2 from '../../assets/culture/new2.jpg'
import new3 from '../../assets/culture/new3.jpg'
import new4 from '../../assets/culture/new4.jpg'
import huodong1 from '@/assets/details/huodong1.jpg'
import huodong2 from '@/assets/details/huodong2.jpg'
import about1 from'@/assets/culture/about1.png'
import about2 from'@/assets/culture/about2.png'
import about3 from'@/assets/culture/about3.png'

import naicha1 from '../../assets/culture/naicha1.jpg'
import naicha2 from '../../assets/culture/naicha2.jpg'
import naicha3 from '../../assets/culture/naicha3.jpg'
import naicha4 from '../../assets/culture/naicha4.jpg'
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
    img: new1,
    id: '11-1',
    title: '奶茶的潜在健康风险',
    des: '在当今快节奏的生活中，奶茶作为一种时尚饮品，已经成为许多年轻人的“必需品”。然而，在享受其美味的同时，健康专家警告，奶茶潜藏的健康隐患不容小觑......'
    }, {
    img: new2,
    id: '11-2',
    title: '奶茶对健康的负面影响',
    des: '在城市的每个角落，奶茶店如雨后春笋般涌现，成为年轻人社交生活的重要组成部分。然而，随着奶茶的流行，潜藏的健康问题也逐渐浮出水面。......'
    }, {
    img: new3,
    id: '11-3',
    title: '普洱茶的魅力与健康益处',
    des: '普洱茶，这种源自中国云南省的独特茶叶，以其独特的发酵过程和独特的风味而闻名。......'
    }, {
    img: new4,
    id: '11-4',
    title: '红茶的魅力与健康益处',
    des: '红茶作为世界上最受欢迎的茶类之一，以其浓郁的香气和独特的口感，吸引了全球的茶爱好者。它不仅是一种饮品，更被认为具有多种健康益处。......'
}]  
export const newsArr2 = [{
    img: naicha4,
    id: '11-1',
    title: '奶茶的潜在健康风险',
    des: '在当今快节奏的生活中，奶茶作为一种时尚饮品，已经成为许多年轻人的“必需品”。然而，在享受其美味的同时，健康专家警告，奶茶潜藏的健康隐患不容小觑......'
    }, {
    img: naicha2,
    id: '11-2',
    title: '奶茶对健康的负面影响',
    des: '在城市的每个角落，奶茶店如雨后春笋般涌现，成为年轻人社交生活的重要组成部分。然而，随着奶茶的流行，潜藏的健康问题也逐渐浮出水面。......'
    }, {
    img: naicha3,
    id: '11-3',
    title: '普洱茶的魅力与健康益处',
    des: '普洱茶，这种源自中国云南省的独特茶叶，以其独特的发酵过程和独特的风味而闻名。......'
    }, {
    img: naicha1,
    id: '11-4',
    title: '红茶的魅力与健康益处',
    des: '红茶作为世界上最受欢迎的茶类之一，以其浓郁的香气和独特的口感，吸引了全球的茶爱好者。它不仅是一种饮品，更被认为具有多种健康益处。......'
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