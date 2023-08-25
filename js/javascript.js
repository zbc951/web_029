//下拉選單
$(function(){
    $("header .bottom .center .navGroup .sport").hover(function(){
        $("header .downList").toggleClass("display");
        $("header .downList .sport").addClass("display");
        $("header .downList .sport").siblings().removeClass("display");
    })
    $("header .bottom .center .navGroup .live").hover(function(){
        $("header .downList").toggleClass("display");
        $("header .downList .live").addClass("display");
        $("header .downList .live").siblings().removeClass("display");
    })
    $("header .bottom .center .navGroup .slot").hover(function(){
        $("header .downList").toggleClass("display");
        $("header .downList .slot").addClass("display");
        $("header .downList .slot").siblings().removeClass("display");
    })
    $("header .bottom .center .navGroup .ticket").hover(function(){
        $("header .downList").toggleClass("display");
        $("header .downList .ticket").addClass("display");
        $("header .downList .ticket").siblings().removeClass("display");
    })
    $("header .bottom .center .navGroup .fish").hover(function(){
        $("header .downList").toggleClass("display");
        $("header .downList .fish").addClass("display");
        $("header .downList .fish").siblings().removeClass("display");
    })
    $("header .bottom .center .navGroup .board").hover(function(){
        $("header .downList").toggleClass("display");
        $("header .downList .board").addClass("display");
        $("header .downList .board").siblings().removeClass("display");
    })
    $("header .downList").hover(function(){
        $(this).toggleClass("display");
    })
})

//swiper
$(function(){
    var swiper = new Swiper('.swiper', {
        loop: true, 
        autoHeight: true, 
        autoplay: { 
            delay: 5500, 
            disableOnInteraction: false, 
            pauseOnMouseEnter: true, 
        },
        slidesPerView: 1, 
        spaceBetween: 0, 
        pagination: { 
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: { 
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})

//回到頂部
$(function(){
	var scrollTop = $(window).scrollTop();

	if(scrollTop > 0)
	{
		$("header").addClass("scroll");
		$(".backTop").addClass("display");
	}
	else
	{
		$("header").removeClass("scroll");
        $(".backTop").removeClass("display");
	}

	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();

        if(scrollTop > 0)
        {
            $("header").addClass("scroll");
            $(".backTop").addClass("display");
        }
        else
        {
            $("header").removeClass("scroll");
            $(".backTop").removeClass("display");
        }
	})
})
$(function(){
	$(".backTop").click(function(){
        $("html").animate({
            scrollTop: 0,
        },500)
    })
})


//登入後 彈窗
$(function(){
    $("header .top .login form .buttonGroup a .loginBtn").click(function(){
        $(".filter").addClass("display");
    })
})

//關閉彈窗
$(function(){
    $(".close").click(function(){
        $(".filter").addClass("display");
    })
})

//記住密碼
$(function(){
    $("header .top .center form .check").click(function(){
        $("header .top .center form .check input").toggleClass("display");
    })
})



