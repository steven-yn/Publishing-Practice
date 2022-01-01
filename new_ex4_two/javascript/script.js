//JavavScript Document 
var imgs = 2;
var now = 0;

$(document).ready(function(){
    $(".nav>li").mouseover(function(){
      $(this).children(".submenu").stop().slideDown();
       });

    $(".nav>li").mouseleave(function(){
      $(this).children(".submenu").stop().slideUp();
       });

    start();
    
    
    //팝업창
	//partner img클릭하면
	$('.partner img').click(function(){
		//#popup에 active클래스를 더하고
		$('#popup').addClass('active');
	});
	//클로즈버튼을 클릭하면
	$('.btn').click(function(){
		//#popup에 active클래스를 빼라
		$('#popup').removeClass('active');
	});
    
    
    //탭메뉴------------------------------------
    $(function(){
     $('ul.tab li').click(function(){
        var activeTab = $(this).attr('data-tab');
        $('ul.tab li').removeClass('current');
        $('.tabcontent').removeClass('current');
        $(this).addClass('current');
        $('#' + activeTab).addClass('current');
         });
    });
    //-----------------------------------------
    
    
});

function start(){
    $(".imgs>img").eq(0).siblings().css({"margin-left":"-2000px"});
    setInterval(function(){slide();},2000);
}

function slide(){
    now = now == imgs?0:now+=1;
    $(".imgs>img").eq(now-1).css({"margin-left":"-2000px"});
    $(".imgs>img").eq(now).css({"margin-left":"0px"});
}






var win;
function winOpen(){
    win=window.open('contact.html','child', 'toolbar=no, location=no, status=no, menubar=no, resizable=no, scrollbars-=no, width=500, height=300')};