<template>
  <div>

      <!--<section class="contenr">-->
          <!--<transition name="fade">-->
              <!--<router-view class="main"></router-view>-->
          <!--</transition>-->
      <!--</section>-->
  <p>{{msg}}</p>

      <div class="banner">
          <section class="box">
              <ul class="texts">
                  <p>打了死结的青春，捆死一颗苍白绝望的灵魂。</p>
                  <p>为自己掘一个坟墓来葬心，红尘一梦，不再追寻。</p>
                  <p>加了锁的青春，不会再因谁而推开心门。</p>
              </ul>
              <div class="avatar"><a href="#"><span>杨青</span></a> </div>
          </section>
      </div>
      <div class="template">
          <div class="box">
              <h3>
                  <p><span>个人博客</span>模板 Templates</p>
              </h3>
              <ul>
                  <li><a href="/"  target="_blank"><img src="../../images/01.jpg"></a><span>仿新浪博客风格·梅——古典个人博客模板</span></li>
                  <li><a href="/" target="_blank"><img src="../../images/02.jpg"></a><span>黑色质感时间轴html5个人博客模板</span></li>
                  <li><a href="/"  target="_blank"><img src="../../images/03.jpg"></a><span>Green绿色小清新的夏天-个人博客模板</span></li>
                  <li><a href="/" target="_blank"><img src="../../images/04.jpg"></a><span>女生清新个人博客网站模板</span></li>
                  <li><a href="/"  target="_blank"><img src="../../images/02.jpg"></a><span>黑色质感时间轴html5个人博客模板</span></li>
                  <li><a href="/"  target="_blank"><img src="../../images/03.jpg"></a><span>Green绿色小清新的夏天-个人博客模板</span></li>
              </ul>
          </div>
      </div>



      <article>
          <h2 class="title_tj">
              <p>文章<span>推荐</span></p>
          </h2>
          <div class="bloglist left" v-for="tods in todos">
            <template  v-for="h in jiss">
              <h3>{{tods.text}}</h3>
              <figure><img src="../../images/001.png"></figure>
              <ul>
                  <p>{{h.text}}</p>

                  <router-link class="readmore" to="/home/homeClinder">阅读全文>></router-link>

              </ul>
              <p class="dateview"><span>2013-11-04</span><span>作者：杨青</span><span>个人博客：[<a href="/news/life/">程序人生</a>]</span></p>
       </template>
          </div>
          <aside class="right">
              <div class="weather"><iframe width="250" scrolling="no" height="60" frameborder="0" allowtransparency="true" src="http://i.tianqi.com/index.php?c=code&id=12&icon=1&num=1"></iframe></div>
              <div class="news">
                  <h3>
                      <p>最新<span>文章</span></p>
                  </h3>
                  <ul class="rank">
                      <li><a href="/" title="Column 三栏布局 个人网站模板" target="_blank">Column 三栏布局 个人网站模板</a></li>
                      <li><a href="/" title="with love for you 个人网站模板" target="_blank">with love for you 个人网站模板</a></li>
                      <li><a href="/" title="免费收录网站搜索引擎登录口大全" target="_blank">免费收录网站搜索引擎登录口大全</a></li>
                      <li><a href="/" title="做网站到底需要什么?" target="_blank">做网站到底需要什么?</a></li>
                      <li><a href="/" title="企业做网站具体流程步骤" target="_blank">企业做网站具体流程步骤</a></li>
                      <li><a href="/" title="建站流程篇——教你如何快速学会做网站" target="_blank">建站流程篇——教你如何快速学会做网站</a></li>
                      <li><a href="/" title="box-shadow 阴影右下脚折边效果" target="_blank">box-shadow 阴影右下脚折边效果</a></li>
                      <li><a href="/" title="打雷时室内、户外应该需要注意什么" target="_blank">打雷时室内、户外应该需要注意什么</a></li>
                  </ul>
                  <h3 class="ph">
                      <p>点击<span>排行</span></p>
                  </h3>
                  <ul class="paih">
                      <li><a href="/" title="Column 三栏布局 个人网站模板" target="_blank">Column 三栏布局 个人网站模板</a></li>
                      <li><a href="/" title="withlove for you 个人网站模板" target="_blank">with love for you 个人网站模板</a></li>
                      <li><a href="/" title="免费收录网站搜索引擎登录口大全" target="_blank">免费收录网站搜索引擎登录口大全</a></li>
                      <li><a href="/" title="做网站到底需要什么?" target="_blank">做网站到底需要什么?</a></li>
                      <li><a href="/" title="企业做网站具体流程步骤" target="_blank">企业做网站具体流程步骤</a></li>
                  </ul>
                  <h3 class="links">
                      <p>友情<span>链接</span></p>
                  </h3>
                  <ul class="website">
                      <li><a href="/">个人博客</a></li>
                      <li><a href="/">谢泽文个人博客</a></li>
                      <li><a href="/">3DST技术网</a></li>
                      <li><a href="/">思衡网络</a></li>
                  </ul>
              </div>
              <!-- Baidu Button BEGIN -->
              <div id="bdshare" class="bdshare_t bds_tools_32 get-codes-bdshare"><a class="bds_tsina"></a><a class="bds_qzone"></a><a class="bds_tqq"></a><a class="bds_renren"></a><span class="bds_more"></span><a class="shareCount"></a></div>
              <a href="/" class="weixin"> </a></aside>
      </article>


  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      msg: '123',
      todos: [
              { text: '222' },
              { text: '学习 Vue' },
              { text: '整个牛项目' }
            ],
      jiss:[
        {text:"ceshi"},
        {text:"sdasdasd"},
        {text:"poppsadkjasdknkl"}
      ]
    }
  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .banner { background: url(../../images/banner_top.jpg) top center; height: 265px; overflow: hidden }
    .texts { width: 350px; line-height: 26px; margin: 60px 0 0 20px; float: left; font-size: 14px; }
    .texts p { -webkit-transform: translate(60px); -moz-transform: translate(60px); -o-transform: translate(60px); -ms-transform: translate(60px); transform: translate(60px); text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.8), 2px 2px 3px rgba(180, 151, 151, 0.3); }
    .texts p:nth-child(1) { -webkit-animation: animations 3s ease-out 1s backwards; -moz-animation: animations 3s ease-out 1s backwards; -o-animation: animations 3s ease-out 1s backwards; -ms-animation: animations 3s ease-out 1s backwards; animation: animations 3s ease-out 1s backwards; }
    .texts p:nth-child(2) { -webkit-animation: animations 3s ease-out 4s backwards; -moz-animation: animations 3s ease-out 4s backwards; -o-animation: animations 3s ease-out 4s backwards; -ms-animation: animations 3s ease-out 4s backwards; animation: animations 3s ease-out 4s backwards; }
    .texts p:nth-child(3) { -webkit-animation: animations2 5s ease-in-out 7s backwards; -moz-animation: animations2 5s ease-in-out 7s backwards; -o-animation: animations2 5s ease-in-out 7s backwards; -ms-animation: animations2 5s ease-in-out 7s backwards; animation: animations2 5s ease-in-out 7s backwards; }
    @-webkit-keyframes animations { 0% {
        -webkit-transform:translate(0);
        opacity:0;
    }
        50% {
            -webkit-transform:translate(30px);
            opacity:.5;
        }
        100% {
            -webkit-transform:translate(60px);
            opacity:1;
        }
    }
    @-moz-keyframes animations { 0% {
        -moz-transform:translate(0);
        opacity:0;
    }
        50% {
            -moz-transform:translate(30px);
            opacity:.5;
        }
        100% {
            -moz-transform:translate(60px);
            opacity:1;
        }
    }
    @-o-keyframes animations { 0% {
        -o-transform:translate(0);
        opacity:0;
    }
        50% {
            -o-transform:translate(30px);
            opacity:.5;
        }
        100% {
            -o-transform:translate(60px);
            opacity:1;
        }
    }
    @-ms-keyframes animations { 0% {
        -ms-transform:translate(0);
        opacity:0;
    }
        50% {
            -ms-transform:translate(30px);
            opacity:.5;
        }
        100% {
            -ms-transform:translate(60px);
            opacity:1;
        }
    }
    @keyframes animations { 0% {
        transform:translate(0);
        opacity:0;
    }
        50% {
            transform:translate(30px);
            opacity:.5;
        }
        100% {
            transform:translate(60px);
            opacity:1;
        }
    }
    @-webkit-keyframes animations2 { 0% {
        opacity:0;
    }
        40% {
            opacity:.8;
        }
        45% {
            opacity:.3;
        }
        50% {
            opacity:.8;
        }
        55% {
            opacity:.3;
        }
        60% {
            opacity:.8;
        }
        100% {
            opacity:1;
        }
    }
    @-moz-keyframes animations2 { 0% {
        opacity:0;
    }
        40% {
            opacity:.8;
        }
        45% {
            opacity:.3;
        }
        50% {
            opacity:.8;
        }
        55% {
            opacity:.3;
        }
        60% {
            opacity:.8;
        }
        100% {
            opacity:1;
        }
    }
    @-o-keyframes animations2 { 0% {
        opacity:0;
    }
        40% {
            opacity:.8;
        }
        45% {
            opacity:.3;
        }
        50% {
            opacity:.8;
        }
        55% {
            opacity:.3;
        }
        60% {
            opacity:.8;
        }
        100% {
            opacity:1;
        }
    }
    @-ms-keyframes animations2 { 0% {
        opacity:0;
    }
        40% {
            opacity:.8;
        }
        45% {
            opacity:.3;
        }
        50% {
            opacity:.8;
        }
        55% {
            opacity:.3;
        }
        60% {
            opacity:.8;
        }
        100% {
            opacity:1;
        }
    }
    @keyframes animations2 { 0% {
        opacity:0;
    }
        40% {
            opacity:.8;
        }
        45% {
            opacity:.3;
        }
        50% {
            opacity:.8;
        }
        55% {
            opacity:.3;
        }
        60% {
            opacity:.8;
        }
        100% {
            opacity:1;
        }
    }
    .avatar { float: right; margin: 40px; width: 130px; height: 130px; border-radius: 100%; overflow: hidden; border: #FFF 4px solid }
    .avatar a { display: block; padding-top: 97px; width: 160px; background: url(../../images/photos.jpg) no-repeat; background-size: 130px 130px }
    .avatar a span { display: block; margin-top: 63px; padding-top: 8px; width: 130px; height: 55px; text-align: center; line-height: 20px; color: #fff; background: rgba(0, 0, 0, .5); -webkit-transition: margin-top .2s ease-in-out; -moz-transition: margin-top .2s ease-in-out; -o-transition: margin-top .2s ease-in-out; transition: margin-top .2s ease-in-out; }
    .avatar a:hover span { display: block; margin-top: 0; }
    .template { background: #F1F0EE }
    .template h3 { border-bottom: #FFF 1px solid; width: 100%; overflow: hidden; font-size: 14px; margin: 0 0 10px; font-family: "微软雅黑"; display: block; clear: both; }
    .template h3 p { background: #474645; width: 180px; height: 25px; margin: 15px 0 0 10px; line-height: 25px; color: #fff; text-align: center; box-shadow: #999 4px 5px 1px; }
    .template h3 p span { color: #38b3d4; }
    .template ul { overflow: hidden; }
    .template ul li { margin: 3px; float: left; display: block; padding: 5px 5px 6px 5px; -webkit-transition: all 1s; -moz-transition: all 1s; -o-transition: all 1s; transition: all 1s; }
    .template li img { width: 142px; height: 80px; background: #FFF; padding: 4px; box-shadow: 0px 0px 2px rgba(0,0,0,.5); display: block; }
    .template li span { color: #F1F0EE; display: block; text-align: center; margin-top: 5px; width: 142px; overflow: hidden; text-overflow: ellipsis; height: 14px }
    .template li:hover { background: #666; padding: 5px 5px 6px 5px; }
    h2.title_tj { font: 18px "微软雅黑", Arial, Helvetica, sans-serif; color: #444; font-weight: bold; background: url(../../images/h_line.jpg) repeat-x 20px center; }
    h2.title_tj span { color: #FE5187 }
    h2.title_tj p { background: #fff; width: 90px }
    .bloglist { width: 740px; overflow: hidden; background: url(../../images/r_line.jpg) repeat-y right; }
    .bloglist h3 { margin: 20px 0 10px 0; color: #333 }
    .bloglist figure { float: left; width: 183px; }
    .bloglist figure img { padding: 4px; border: #f4f2f2 1px solid; width: 175px; }
    .bloglist ul { float: left; width: 520px; margin: 10px 0px 0 15px; line-height: 20px; }
    .dateview { width: 695px; overflow: hidden; clear: both; margin: 10px 0 0 0; display: inline-block; background: #f6f6f6 url(../../images/time.jpg) 15px center no-repeat; line-height: 26px; height: 26px; color: #838383; padding-left: 25px }
    .dateview span { margin: 0 10px; }
    .dateview span a { color: #099B43; }
    a.readmore { background: #fd8a61; color: #fff; padding: 5px 10px; float: right; margin: 20px 0 0 0 }
    .weather { background: url(../../images/weather_bg.jpg) no-repeat; height: 88px; margin: 20px 0;padding: 20px 0 0 75px; }
    .news h3 { font-size: 14px; background: url(../../images/r_title_bg.jpg) repeat-x center }
    .news h3 p { background: #fff; width: 70px }
    .news h3 span { color: #65b020 }
    .news h3.ph span { color: #37ccca; }
    .news h3.links span { color: #F17B6B; }
    .news ul { margin-bottom: 20px }
    .news ul li a:hover { text-decoration: underline }
    .rank li { height: 25px; line-height: 25px; clear: both; padding-left: 5px; overflow: hidden; padding-left: 15px; background: url(../../images/li.jpg) no-repeat left center; }
    .rank { margin: 10px 0 }
    .rank li a { color: #333; }
    .paih { background: url(../../images/ph.jpg) no-repeat left 8px; margin: 10px 0 }
    .paih li { line-height: 30px; height: 30px; overflow: hidden; padding-left: 24px; border-bottom: #CCC dotted 1px }
    .website { margin: 10px 0; background: #F3F3F3; border-radius: 50%; text-align: center; }
    .website li { line-height: 26px; text-shadow: #fff 1px 1px 1px; height: 26px; }
    .weixin { background: url(../../images/weixin.jpg) no-repeat; width: 100%; display: inline-block; height: 274px; overflow: hidden; margin: 10px 0; clear: both }

</style>
