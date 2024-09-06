<template>
  <div class="tc-footer">
    <div class="tc-footer-flex">
        <div>
            <p class="tc-footer-p">联系我们</p>
            <!-- <p class="tc-footer-p2">公  众  号：SDSZ茶文化研究社</p> -->
            <p class="tc-footer-p2">联系邮箱：office@chineseteas.net</p>
        </div>
        <div class="tc-footer-wrapper">
            <span class="tc-footer-p2">地址：</span>
            <img src="@/assets/address.png"/>
        </div>
    </div>
    <div class="tc-footer-policy">
        <span>@ 2024 Chinese teas</span>
        <span class="tc-marginLeft60">隐私政策</span>
    </div>
  </div>
</template>
<script setup lang='ts'>

</script>
<style scoped>
.tc-footer{
    color: rgba(51, 51, 51, 1);
    background-image: url("@/assets/footer-bg.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right bottom;
    /* height: 220px; */
    box-sizing: border-box;
    padding:30px 60px;
}
.tc-footer-flex{
    display: flex;
    flex-direction: row;
}
.tc-footer-p{
    font-size: 20px;
    font-weight: 500;
    /* line-height: 40px; */
}
.tc-footer-p2{
    font-size: 16px;
    font-weight: 400;
}
.tc-footer-wrapper{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 60px;
    
}
.tc-footer-wrapper img{
    margin-left: 20px;
    width: 220px;
    height: 110px;
}
.tc-footer-policy{
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0px;
    color: rgba(102, 102, 102, 1);
    width: 100%;
    text-align: center;
}
.tc-marginLeft60{
    margin-left:60px;
}
</style>