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
               newStorageEvent.initStorageEvent('setItem', false, false, k, null, val, null, null);
 
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
                 newStorageEvent.initStorageEvent('setItem', false, false, k, null, val, null, null);
 
                 // 派发对象
                 window.dispatchEvent(newStorageEvent)
             }
         }
         return storage.setItem(key, newVal);
     }
 }
 
 