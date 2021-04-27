$(document).ready(function(){
    $('.burger').click(function() {
        $('ul').toggleClass('show-nav');
        $(this).toggleClass('change');
    })
    //====== slider ========
    $('.banner__dots__icon').click(function(){
        var index = $(this).attr('idx');
        slider(index,'.banner__slider__bg','.banner__dots__icon','banner__dot--active')
    });
    $('.course__menu li').click (function(){
        var index = $(this).attr('idx');
        slider(index,'.course__main__content','.course__menu li','course__menu--active')
    })
    var slider = function(stt,slider,dot,active) {
        $(slider).hide();
        $(slider).eq(stt).show();
        $(dot).removeClass(active);
        $(dot).eq(stt).addClass(active);
    }
    // ====== filter=======
    $('.course__main__title li').click(function(){
        var value = $(this).attr('dataFilter');
        console.log(value);
        if (value == 'view') {
            $('.item__detail').show(1000);
            $(this).addClass('title--active').siblings().removeClass('title--active');
        }
        else {
            $('.item__detail').not('.'+value).hide(500);
            $('.item__detail').filter('.'+value).show(500);
            $(this).addClass('title--active').siblings().removeClass('title--active');
        }
        $('.view-all').css('display','none');
    })
    // ====== view all======
    $('b').click(function() {
        $('.item').css("display","flex");
        $('.view-all').css('display','none');
    })
    // =====slick slider======
    $('.book__slider').slick({
        dots: true,
        infinite: true,
        prevArrow: '.book__prev',
        nextArrow: '.book__next',
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    });
    // ========== Feel slider==========
    $('.feel__slider').slick({
        dots: true,
        infinite: true,
        prevArrow: '.feel__prev',
        nextArrow: '.feel__next',
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    });
    // ========== move to top=========
	$(window).scroll(function (e){
        const scroll_top = document.documentElement.scrollTop;
        var move_top = $('.move__top')[0];
        var slide_height = $('.banner').innerHeight();
        if(scroll_top >= slide_height) {
            move_top.style.display = "block";
        }
        else {
            move_top.style.display =" none";
        }
        move_top.addEventListener('click',function () {
            window.scrollTo({
                top:0,
                behavior: "smooth",
            })
        })
    })
})