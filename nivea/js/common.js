var $ = jQuery;

$(function(){

    // 네비게이션 활성화 / 닫기 (햄버거메뉴 포함)
    var menutime = 800;

    $('.menu-button').click(function(){
        $(this).toggleClass('cross');
        if($(this).hasClass('cross')){
            $('.navi, .main_navi').stop().animate ({
                right:0
            },menutime,'easeOutQuint');
            $('header').addClass('shadow');
            $('.big_menu li').removeClass('on');
            $('.small_menu > div').hide();
            $('.small_menu').css('opacity', '0');
            $('.mb_sub_navi').hide();
            $('body').css('overflow', 'hidden');
            $('.mb_navi .navi_text > li > a').removeClass('selected');
        }else {
            $('.navi, .main_navi').stop().animate ({
                right: '-100%'
            },menutime,'easeOutQuint');
            $('header').removeClass('shadow');
            $('body').css('overflow', 'auto');
        };

        return false;
    });

    // 대메뉴 마우스 오버 시 서브메뉴 보이기
    var n = $('.big_menu li').length;

    $('.small_menu > div').hide();
    $('.small_menu').css('opacity', '0');

    $('.big_menu li').mouseover(function(){

        var i = $(this).index();

        $('.small_menu').css('opacity', '1');
        $('.big_menu li').removeClass('on');
        $(this).addClass('on');

        $('.small_menu > div').hide();
        $('.small_menu > div').eq(i).show();

    });

    // 메뉴 클릭 시 네비게이션바 사라지기
    $('.big_menu, .small_menu').click(function(){
        $('#navi, #main_navi').stop().animate ({
            right: '-100%'
        },menutime,'easeOutQuint');
        $('header').removeClass('shadow');
        $('.menu-button').removeClass('cross');
        $('body').css('overflow', 'auto');
    });
    $('.mb_sub_navi li a').click(function(){
        $('#mb_main_navi').stop().animate ({
            right: '-100%'
        },menutime,'easeOutQuint');
        $('header').removeClass('shadow');
        $('.menu-button').removeClass('cross');
    });

    // 모바일 대메뉴 클릭 시 서브메뉴 열리고 닫힘
    $('.mb_navi .navi_text > li > a').click(function(){
        $(this).toggleClass('selected');
        $('.mb_navi .navi_text > li > a').not(this).removeClass('selected');

        $(this).find('+.mb_sub_navi').slideToggle('fast');
        $('.mb_navi .navi_text > li > a').not(this).find('+.mb_sub_navi').slideUp('fast');

        return false;
    });

    // 화면 리사이즈 시 네비게이션 닫힘
    $(window).resize(function(){
        $('.navi, .main_navi').css({
            right: '-100%'
        });
        $('header').removeClass('shadow');
        $('.menu-button').removeClass('cross');
        $('body').css('overflow', 'auto');
    });

    // 푸터 브랜드사이트 버튼
    $('.text_site').click(function(){
        $('#brand_site > ul').toggle();
        $(this).find('.f_icon').toggleClass('down'); // 항목 토글 시 화살표 움직임 
    });
    $('#brand_site > ul li a').click(function(){
        $('img.st').text($(this).text()); // 카테고리 선택 시에만 사용
        $('#brand_site > ul').hide(); // 활성화 시 닫힘
        $('.text_site .f_icon').removeClass('down'); // 클릭 시 화살표 닫힘
    });

    //모바일 스크롤바
    $('#mb_main_navi').mCustomScrollbar({theme:"light-2"});
});