$(document).ready(function(){
    $('.btn-search').click(function(){
        $('.form-wrap').toggleClass('active')
    });
    $('.arrow-block').click(function(){
        $(this).toggleClass('active');
    }); 
    $('.dashborad-button').click(function(){
        $(this).toggleClass('active');
        $('.arrow-tag').toggleClass('active');
        $('.dashboard-dropdown').slideToggle(); 
    });
    let count=0;
    $(window).scroll(function() {
        let windowsScrooll=$(window).scrollTop()+$(window).height();
        if (windowsScrooll > $(".footer").offset().top) {
            count=0;
            $('.scrolltop:hidden').stop(true, true).fadeIn();
            $('.scrolling-top-block').stop(true, true).fadeOut();
        } else {
            $('.scrolltop').stop(true, true).fadeOut();
            $('.scrolling-top-block:hidden').stop(true, true).fadeIn();
        }
    });
    $(".scrolling-top-block").click(function(event) {
        count++;
        let scrolling = $(window).height() * count;
        $("html, body").animate({ scrollTop: scrolling });
    });
    
    $(".scrolltop").click(function(event){
        $("html, body").animate({ scrollTop: 0 });
    });
    

    $('.mob-menu').click(function(){
        $(this).toggleClass('active-menu');
        $('.navigation-wrap-block').toggleClass('active');
        $('.navigation').toggleClass('active');
        $('.button-block').toggleClass('active');
    });
});



$(function() {
	$(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
	$(".accordion > .accordion-item").click(function() {
		$(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
		$(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
        $(this).toggleClass('.asked-vertical').addClass('active');
	});
});

$('.js-anchor-link').click(function(){
    let worksWrapBlock = $('.works-wrap-block').offset().top;
    $('body, html').animate({scrollTop: (worksWrapBlock - 40)+'px'}, 800);
});
