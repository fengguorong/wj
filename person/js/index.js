$(function(){
//初始化 菜单的宽高
    window.resize=function(){

    }
    var clientH=$(window).height();
    var clientW=$(window).width();
    var canvas=document.getElementsByTagName("canvas")[0];
    var backw=$(".backs").width();
    var backh=$(".backs").height();
    $(".backs").css({height:backw*2.01596+"px"});
    canvas.width=backw;
    canvas.height=backw*2.01596;
    $("body").css("height",backw*2.01596+"px");
    var cobj=canvas.getContext("2d");
// 侧面图片的位置
    $(".side-img-box>li").eq(0).css({width:clientW*0.15+"px",top:clientW*0.39+"px",left:clientW*0.09+"px"})
//导航的位置
    $("nav").css({position:"absolute",top:backw*0.7158+"px",left:backw*0.26+"px"})
//职业技能的位置
    $(".content:eq(0)").css({position:"absolute",top:backw*0.7158+"px",right:backw*0.15+"px"})
//职业技能的位置
    $(".content:eq(1)").css({position:"absolute",top:backw*1.5+"px",left:backw*0.15+"px",zIndex:10})
//个人资料的位置
    /*$(".personal:eq(0)").css({position:"absolute",top:backw*0.2264+"px",right:backw*0.18+"px"})
     $(".personal:eq(1)").css({position:"absolute",top:backw*1.2+"px",right:backw*0.15+"px"})*/
//底部的位置
    $(".bottoms").css({position:"absolute",top:backw*1.45+"px",left:"0",height:backw*0.567+"px"});
    $(".bottomet").css({borderTop:backw*0.15+"px solid #131313",borderRight:backw*0.15+"px solid #131313",borderBottom:backw*0.15+"px solid rgba(255,0,0,0.0)",borderLeft:backw*0.15+"px solid rgba(255,0,0,0.0)"});
    $(".bottomeb").css({width:backw*0.376+"px",height:backw*0.376+"px",top:backw*0.30+"px"});
    $(".bottoms>img").css({width:backw*0.85+"px",height:backw*0.4+"px"});
    $(".bottoms>.while").css({width:backw*0.785+"px",height:backw*0.482+"px"});
// topimgbox
    $(".topimgbox").css({width:backw*0.505+"px",height:backw*0.6+"px",left:backw*0.47+"px",top:backw*0.10+"px"});
// topimgbox
    $(".topimgbot").css({width:backw*0.495+"px",height:backw*0.225+"px",left:backw*0+"px",top:backw*0.49+"px"});
    $(".topimgbox>.mask").css({width:backw*0.2+"px",height:backw*0.18+"px",left:backw*0.4+"px",top:backw*0.535+"px"});
    $(".topimgbox>.whiletop").css({width:backw*0.785+"px",height:backw*0.482+"px",top:"607px",left:"-750px"});
// 第三块矩形
    $(".therebox").css({width:backw*0.685+"px",height:backw*0.405+"px",left:"0px",top:0.4559*backw+"px"});
//底部动画效果
var arr=[];
for (var i = 0; i < 50; i++) {
    var star=document.createElement("span");
    star.style.cssText="display:block;position:absolute;left:50%;top:50%;background:#fff;width:10px;height:10px;transform:translate("+(Math.random()*400-200)+","+(Math.random()*600-300)+")";

};

// 右上角三角形
    cobj.save();
    cobj.beginPath();
    cobj.translate(backw*0.372,0);
    cobj.fillStyle = '#F7F7F7';
    cobj.moveTo(0,0);
    cobj.lineTo(backw*0.628,0);
    cobj.lineTo(backw*0.628,backw*0.628);
    cobj.closePath();
    cobj.fill();
    cobj.restore();
//第二块矩形
    cobj.save();
    cobj.beginPath();
    cobj.translate(0,0);
    var grad  = cobj.createLinearGradient(backw,0,0,backw);
      /* 指定几个颜色 */
      grad.addColorStop(0,'#CDCDCD');    // 红
      grad.addColorStop(0.5,'#F7F7F7'); // 绿
      grad.addColorStop(1,'#F7F7F7');  // 紫
      /* 将这个渐变设置为fillStyle */
    cobj.fillStyle = grad;
    cobj.moveTo(0,0);
    cobj.lineTo(backw*0.372,0);
    cobj.lineTo(backw,backw*0.628);
    cobj.lineTo(backw,backw*1.45);
    cobj.lineTo(0,0.4559*backw);
    cobj.closePath();
    cobj.fill();
    cobj.restore();
//第三块矩形
    cobj.save();
    cobj.beginPath();
    cobj.translate(0,0.4559*backw);
    var grad  = cobj.createLinearGradient(0,0,0,backw*1.45-0.4559*backw);
      /* 指定几个颜色 */
      grad.addColorStop(0,'#010101');    // 红
      grad.addColorStop(0.15,'#050505'); // 绿
      grad.addColorStop(0.30,'#0A0A0A');  // 紫
      grad.addColorStop(0.45,'#020202');  // 紫
      grad.addColorStop(0.60,'#131313');  // 紫
      grad.addColorStop(0.75,'#232323');  // 紫
      grad.addColorStop(1,'#252525');  // 紫
      /* 将这个渐变设置为fillStyle */
    cobj.fillStyle = grad;
    cobj.moveTo(0,0);
    cobj.lineTo(backw,backw*1.45-0.4559*backw);
    cobj.lineTo(0.4286*backw,backw*1.45-0.4559*backw);
    cobj.lineTo(0,0.580*backw);
    cobj.closePath();
    cobj.fill();
    cobj.restore();
//第四块三角形
//     cobj.save();
//     cobj.beginPath();
//     cobj.translate(backw*0.7,backw*1.45);
//     var grad  = cobj.createLinearGradient(0,0,0,backw*1.45-0.4559*backw);
//       /* 指定几个颜色 */
//       grad.addColorStop(0,'#010101');    // 红
//       grad.addColorStop(0.15,'#050505'); // 绿
//       grad.addColorStop(0.30,'#0A0A0A');  // 紫
//       grad.addColorStop(0.45,'#020202');  // 紫
//       grad.addColorStop(0.60,'#131313');  // 紫
//       grad.addColorStop(0.75,'#232323');  // 紫
//       grad.addColorStop(1,'#252525');  // 紫
//       /* 将这个渐变设置为fillStyle */
//     cobj.fillStyle = grad;
//     cobj.moveTo(0,0);
//     cobj.lineTo(backw*0.3,0);
//     cobj.lineTo(backw*0.3,backw*0.3);
//     cobj.closePath();
//     cobj.fill();
//     cobj.restore();
// //第五块不规则图形
//     cobj.save();
//     cobj.beginPath();
//     cobj.translate(backw*0.785,backw*1.5343);
//     var grad  = cobj.createLinearGradient(0,0,0,backw*1.45-0.4559*backw);
//       /* 指定几个颜色 */
//       grad.addColorStop(0,'#010101');    // 红
//       grad.addColorStop(0.15,'#050505'); // 绿
//       grad.addColorStop(0.30,'#0A0A0A');  // 紫
//       grad.addColorStop(0.45,'#020202');  // 紫
//       grad.addColorStop(0.60,'#131313');  // 紫
//       grad.addColorStop(0.75,'#232323');  // 紫
//       grad.addColorStop(1,'#252525');  // 紫
//       /* 将这个渐变设置为fillStyle */
//     cobj.fillStyle = grad;
//     cobj.moveTo(0,0);
//     cobj.lineTo(backw*0.218,backw*0.2158);
//     cobj.lineTo(backw*0.218,backw*0.482);
//     cobj.lineTo(-backw*0.76,backw*0.482);
//     cobj.lineTo(-backw*0.76,backw*0.395);
//     cobj.lineTo(-backw*0.395,backw*0.395);
//     cobj.closePath();
//     cobj.fill();
//     cobj.restore();
//第六块三角形
    /*cobj.save();
    cobj.beginPath();
    cobj.translate(0,backw*1.45+backw*0.3);
    cobj.fillStyle = "#C94B52";
    cobj.moveTo(0,0);
    cobj.lineTo(backw*0.26596,backw*0.26596);
    cobj.lineTo(0,backw*0.26596);
    cobj.closePath();
    cobj.fill();
    cobj.restore();    */
})