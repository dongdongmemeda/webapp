
$(function(){
  // 时间显示
  var date,h,m,s,t,str,len;

     // 点击触发
        function both(a,b){
          if($(a).css("display") == "none" ){
                   $(a).css("display","block");
                   $(b).css("display","block");
               }
               else if($(a).css("display") == "block" ){
                    $(a).css("display","none");
                    $(b).css("display","none");
               }
             }
             
       function init(el,a,b){
             $(el).css({
                top:a,
                left:b
             });
           }
            $(".func").click(function(){
              $(".mask").css("opacity","0.8");
               both(".mask",".demo");
               init("#fly","295px","114px");
               init("#mute","295px","306px");
               init("#restart","477px","114px");
               init("#off","477px","306px");
            });
            // 显示小图标
         function  de(){
             len = $(".info").children("i");
             for( var i=0;i<len.length;i++){
                  if( len.eq(i).attr("name") == 0 ){
                      len.eq(i).css("visibility","hidden");
                  }else if( len.eq(i).attr("name") == 1 ){
                     len.eq(i).css("visibility","visible");
                  }
                }
             }
            de();

         var cont = 0;
         
            function demo(a){
              $(a).click(function(){
                if( cont == 0 ){
                $(".demo").css("display","none");
                $(this).css("display","block");
                $(this).animate({
                  top:"385px",
                  left:"212px"
                });
                cont = 1;
              }
              else if(cont == 1){
                 both(".mask",".demo");
                 cont = 0;
                 switch(a){
                    case "#fly":
                        $(".fa .fa-plane").attr("name","1");
                        $("fa fa-wifi").attr("name","0");
                        de();
                       break;
                    case "#mute":
                        $(".fa .fa-bell-slash").attr("name","1");
                        de();
                       break;
                    case "#restart":
                        $(".fa .fa-lock").attr("name","1");
                        $(".mask").css({
                          opacity:"0.8",
                          display:"block"
                        });
                        de();
                       break;
                    case "#off":
                        $(".mask").css({
                          opacity:"1",
                          display:"block"
                        });
                       break;
                    default:
                       break;
                 }
              }
            });
        }
          demo("#fly");
          demo("#mute");
          demo("#restart");
          demo("#off");            

     $(".home").click(function(){
          $("#index").attr("src","app/desk1.html");
          $(".button").css("display","block");
          $(".button").attr("name","0");
          $(".button").eq(1).attr("name","1");
          check();
     });
     
    $(".back").click(function(){
        $("#index").attr("src",history.back());
        $(".button").css("display","block");
    });
          // 圆点颜色
     var colorNum;
     function check(){
        for(var i=0;i<$(".button").length;i++){
           colorNum = $(".container").children(".button").eq(i);
        if(colorNum.attr("name") == 1)  colorNum.css("background-color","orange");
        else if(colorNum.attr("name") == 0)  colorNum.css("background-color","#fff");
     }
 }
     check();
       var title,a,b;
        $(".button").click(function(){
             if(  $(this).attr("name") ==  0  ){
                   title = $(this).attr("title");
                   switch(title){
                       case "0":
                          $("#index").attr("src","app/desk0.html");
                           break;
                      case "1":
                           $("#index").attr("src","app/desk1.html");
                           break;
                      case "2":
                          $("#index").attr("src","app/desk2.html");
                          break;
                      default:
                          break;
                   }
                   $(".button").attr("name","0");
                   $(this).attr("name","1");
                   check();
             }
        });
});
     function timeGet(){
           date = new Date();
           h = date.getHours();
           m = date.getMinutes();
           s = date.getSeconds();
           if(h < 10){
             h = "0" + h;
           }
           if(m<10){
            m = "0" + m;
           }
           if(s<10){
            s = "0" + s;
           }
           str = h + ":" + m + ":" + s;
           $(".timer").text(str);
           t = setTimeout("timeGet()",1000);
   }
        timeGet(); 