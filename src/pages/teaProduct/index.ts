import img1 from '/public/culture/img1.png'
import img2 from '/public/culture/img2.png'
import img3 from '/public/culture/img3.png'
import img4 from '/public/culture/img4.png'
import green1 from '/public/green-tea.png'
import red1 from '/public/red-tea.png'
import white1 from '/public/white-tea.png'
import black1 from '/public/black-tea.png'
import qing1 from '/public/qing-tea.png'
import yellow1 from '/public/yellow-tea.png'
import puer1 from '/public/puer-tea.png'
import dishes1 from  '/public/tea-dishes.png'
import culture1 from '/public/tea-culture.png'
import activity1 from '/public/practical-activity.png'
export const dataList = [
    {
        img: green1,
        title: '六大茶类之绿茶',
        id: '1',
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
        children:[{
            id:'4-1',
            icon: black1,
            title: '黑茶',
            text: '黑茶属于后发酵茶，是我们中国特有的茶种类。通常黑茶的原料比较粗老，加之制作过程中堆积发酵的时间较长，因而叶色油黑或黑褐色，故称为黑茶。......'
        }]
    },
    {
        img: qing1,
        title: '六大茶类之青茶',
        id: '5',
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
        children: []
    },
    {
        img: puer1,
        title: '普洱茶',
        id: '7',
        children: []
    },
    {
        img: dishes1,
        title: '茶皿',
        id: '8',
        children: []
    },
    {
        img: culture1,
        title: '茶文化',
        id: '9',
        children: [{
            icon: img1,
            title: '茶与神农（理工版）',
            id:'9-1',
            text: '“茶圣”陆羽在《茶经·六之饮》中说：“茶之为饮，发乎神农氏……”说的是茶作为一种饮料被人类所用，是从神农开始的。历代茶文化研究者......'
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
        }]
    }
]