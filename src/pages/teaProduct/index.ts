import img1 from '@/assets/culture/img1.png'
import img2 from '@/assets/culture/img2.png'
import img3 from '@/assets/culture/img3.png'
import img4 from '@/assets/culture/img4.png'
import img5 from '@/assets/culture/img5.jpg'
// import img6 from '@/assets/culture/img6.jpg'
import img7 from '@/assets/culture/img7.jpg'
import img8 from '@/assets/culture/img8.jpg'
import img9 from '@/assets/culture/img9.jpg'

import green1 from '@/assets/green-tea.png'
import red1 from '@/assets/red-tea.png'
import white1 from '@/assets/white-tea.png'
import black1 from '@/assets/black-tea.png'
import qing1 from '@/assets/qing-tea.png'
import yellow1 from '@/assets/yellow-tea.png'
import puer1 from '@/assets/puer-tea.png'
import dishes1 from  '@/assets/tea-dishes.png'
import culture1 from '@/assets/tea-culture.png'
import activity1 from '@/assets/practical-activity.png'

export const dataList = [
    {
        img: green1,
        title: '六大茶类之绿茶',
        id: '1',
        text: `绿茶是历史上最早出现的茶类，绿茶的出现距今已经有3000多年了。
            陆羽的《茶经》中已经记载有绿茶的蒸汽杀青技术......`,
        children: [{
            icon: green1,
            title: '绿茶',
            id:'1-1',
            text: `绿茶是历史上最早出现的茶类，绿茶的出现距今已经有3000多年了。
            陆羽的《茶经》中已经记载有绿茶的蒸汽杀青技术。宋徽宗在《大观茶论》中对......`
        }]
    },
    {
        img: red1,
        title: '六大茶类之红茶',
        text: '作为世界红茶鼻祖，“正山小种”迄今已有四百五十多年历史，由福建武夷山茶区的茶农发明，一直延续至今......',
        id: '2',
        children:[{
            icon: red1,
            title: '红茶',
            id:'2-1',
            text: '作为世界红茶鼻祖，“正山小种”迄今已有四百五十多年历史，由福建武夷山茶区的茶农发明，一直延续至今。现在印度、斯里兰卡的红茶均是由“......'
        }]
    },
    {
        img: white1,
        title: '六大茶类之白茶',
        id: '3',
        text: '中国茶类的划分有多种方法，根据制作方法和茶多酚氧化（发酵）程度的不同，可分为六大类......',
        children:[{
            id:'3-1',
            icon: white1,
            title: '白茶',
            text: '中国茶类的划分有多种方法，根据制作方法和茶多酚氧化（发酵）程度的不同，可分为六大类(茶叶中发酵程度的轻重不是绝对的，当有小幅度的误差)......'
        }]
    },
    {
        img: black1,
        title: '六大茶类之黑茶',
        id: '4',
        text: '黑茶属于后发酵茶，是我们中国特有的茶种类。通常黑茶的原料比较粗老，加之制作过程中堆积发酵的时间较长......',
        children:[{
            id:'4-1',
            icon: black1,
            title: '黑茶',
            text: '黑茶属于后发酵茶，是我们中国特有的茶种类。通常黑茶的原料比较粗老，加之制作过程中堆积发酵的时间较长，因而叶色油黑或黑褐色，故称为黑茶。......'
        },  {
            icon: dishes1,
            title: '六堡茶',
            id: '4-2',
            text: '六堡茶(LIU PAO TEA)是历史名茶,因原产于广西梧州市苍梧县六堡镇而得名。据《广西通志稿》记载“六堡茶在苍梧，茶叶出产之盛，以多贤乡之六堡及五堡为最，六堡尤为著名......'
        }, {
            icon: img5,
            title: '六堡茶的功效',
            id: '4-3',
            text: '茶饮的养生功效，在中国古代早已有文献记载。三国医学家吴普作注、清人辑录的《神农本草经》中提到:“苦茶，一名荼草，一名选......'
        }, {
            icon: img7,
            title: '细数那些曾经在东洋茶桌占领“C位”的六堡茶',
            id: '4-4',
            text: '六堡茶与日本的渊源不可谓不深，而中茶六堡的“旅日”经历，更是可以用奇妙来形容——由于经过一批日本黑茶专家的前期研究......'
        }]
    },
    {
        img: qing1,
        title: '六大茶类之青茶',
        id: '5',
        text: '青茶俗称乌龙茶，属半发酵茶，是我国六大基本茶类中独具特色的一个茶类。青茶的总体品质，介于红茶与绿茶之间，兼具两种茶的品质特征......',
        children: [{
            id:'5-1',
            icon: qing1,
            title: '青茶',
            text: '青茶俗称乌龙茶，属半发酵茶，是我国六大基本茶类中独具特色的一个茶类。青茶的总体品质，介于红茶与绿茶之间，兼具两种茶的品质特征，即色泽青褐，汤色黄亮，具有浓郁的花香，叶底绿叶红镶边......'
        }]
    },
    {
        img: yellow1,
        title: '六大茶类之黄茶',
        id: '6',
        text: '中国茶根据制作方法和发酵程度的不同，可分为六大类：不发酵的绿茶，轻微发酵的白茶，轻发酵的黄茶......',
        children: [{
            id: '6-1',
            icon: yellow1,
            title: '黄茶',
            text: '中国茶根据制作方法和发酵程度的不同，可分为六大类：不发酵的绿茶，轻微发酵的白茶，轻发酵的黄茶，半发酵的青茶（乌龙茶），后发酵的黑茶和全发酵的红茶，外观由绿向黄绿、黄、青褐、黑色渐变，茶汤也由绿向黄绿、黄、青褐、红褐色渐变，霍山，黄芽的茶株本身也绿中泛黄......'
        }]   
    },
    {
        img: puer1,
        title: '普洱茶',
        id: '7',
        text: '普洱茶作为一种中国特色的茶叶，在茶叶市场上一直备受瞩目......',
        children: [{
            id: '7-1',
            icon: puer1,
            title: '普洱茶',
            text: '普洱茶作为一种中国特色的茶叶，在茶叶市场上一直备受瞩目......'
        }]
    },
  
    // {
    //     img: dishes1,
    //     title: '茶皿',
    //     id: '8',
    //     children: []
    // },
    {
        img: culture1,
        title: '茶文化',
        id: '9',
        text: '“茶圣”陆羽在《茶经·六之饮》中说：“茶之为饮，发乎神农氏......',
        children: [{
            icon: img1,
            title: '茶与神农（理工版）',
            id:'9-1',
            text: '“茶圣”陆羽在《茶经·六之饮》中说：“茶之为饮，发乎神农氏......'
        },
        {
            icon: img2,
            title: '茶与神农（文史哲版）',
            id:'9-2',
            text: '“茶圣”陆羽在《茶经·六之饮》中说：“茶之为饮，发乎神农氏……”说的是茶作为一种饮料被人类所用，是从神农开始的。历代茶文化研究者......'
        }]
    },
    {
        img: activity1,
        title: '我们的实践活动',
        id: '10',
        text: '中国是茶的故乡，同时也是茶文化走向世界的窗口。在中国的神话传说中，茶是神农氏尝百草后解毒的灵药......',
        children:[{
            icon: img3,
            id:'10-1',
            title: '茗香飘万里 何须恋糖精',
            text: '中国是茶的故乡，同时也是茶文化走向世界的窗口。在中国的神话传说中，茶是神农氏尝百草后解毒的灵药；在古代时，茶是士大夫们抒发雅兴的道具......'
        },
        {
            icon: img4,
            id:'10-2',
            title: '茶与养生保健',
            text: '昨天线下活动开展后，有同学问我，喝茶到底对身体有什么好处？这毕竟是个严肃的问题，回答的内容必须要有依据。于是我查阅了一些资料，并整理如......'
        }, {
            icon: img8,
            id:'10-3',
            title: '六堡茶韵绕京彩，三伏时节享清欢',
            text: '京彩瓷博物馆的馆长史琴，是我的茶友，也是我忘年交。在六大茶类中，史馆长偏好黑茶，其中以广西六堡为最爱。......'
        },{
            icon: img9,
            id:'10-4',
            title: '小小的叶子 大大的健康',
            text: '茶，一片片绿叶，一年年发芽，却承载着几千年的文化底蕴，它不仅是饮品，更是滋养身心的良药......'
        }]
    }
]