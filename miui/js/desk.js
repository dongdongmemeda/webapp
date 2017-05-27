$(function(){
 
          var iframe = $($(window).eq(0)[0].parent.document).find('#index');
          var button = $($(window).eq(0)[0].parent.document).find('.button');
         
                    $(".call").click(function(){
                 iframe.attr("src","app/call.html");
                 button.css("display","none");
           });
           $(".people").click(function(){
                  iframe.attr("src","app/people.html");
                  button.css("display","none");
           });
           $(".browser").click(function(){
                  iframe.attr("src","app/browser.html");
                  button.css("display","none");
           });
           $(".note").click(function(){
                  iframe.attr("src","app/note.html");
                  button.css("display","none");
           });       
});
