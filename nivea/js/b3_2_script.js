$(function(){

    //banner fixed
    var $w = $(window),
    footerHei = $('footer').outerHeight(),
    $banner = $('#banner');

    $w.on('scroll', function() {
        var sT = $w.scrollTop();
        var val = $(document).height() - $w.height() - footerHei;

        if (sT >= val)
            $banner.addClass('on')
        else
            $banner.removeClass('on')
    });

    //cont2 버튼
    $('#cont2 ul li').eq(0).addClass('act'); // 처음 li 기본 활성화
    $('#b_wrap .content > div').hide(); //각 탭 내용을 안 보이게 함
    $('#b_wrap .content').find('#cont3').show(); // 처음 내용 활성화

    $('#cont2 ul li').click(function(){ // 원하는 탭 항목 클릭

        var i = $(this).index(); // 선택한 순서번호

        $('#cont2 ul li').removeClass('act'); // 모든 탭 항목에 적용된 선택클래스를 제거
        $(this).addClass('act'); // 선택된 탭 항목 이름을 활성화 스타일 적용

        if (i == 0) {
            $('#b_wrap .content > div').hide(); // 모든 탭 내용 안 보이게 함
            $('#b_wrap .content').find('#cont3').show(); // 선택된 탭 항목의 내용을 보여줌
        } else if (i == 1) {

            $('html, body').animate({
                scrollTop : $('#cont3_text').offset().top - 100
            },1000);
        } else {
            $('#b_wrap .content > div').hide(); // 모든 탭 내용 안 보이게 함
            $('#b_wrap .content').find('#cont4').show(); // 선택된 탭 항목의 내용을 보여줌
        }

        return false;

    });

    //리뷰 더보기버튼
    $('.review_more').click(function(){
        $(this).toggleClass('review_act');
        if ($(this).hasClass('review_act')) {
            $(this).parents().find('div').css('-webkit-box-orient','unset'); 
        } else {
            $(this).parents().find('div').css('-webkit-box-orient','vertical');
        };
    });

    //리뷰 리스트 더보기 버튼
    var list = $('#cont4 > ul > li');
    var listLen = list.length;

    $('.sub_tab_body').hide();
    $('#cont4 > ul > li').hide();
    $('#cont4 > ul > li').eq(0).show();
    $('#cont4 > ul > li').eq(1).show();
    $('#cont4 > ul > li').eq(2).show();
    $('#cont4 > ul > li').eq(3).show();
    $('#cont4 > ul > li').eq(4).show();

    var l =1;
    $('#cont4_bot a').click(function(){
        l++;
        var tot = l * 5;
        if(tot <= listLen){
             for(var i = 0; i < tot; i++){
            list.eq(i).show();
        }
        /* console.log(tot, naveLen); */
        }

        return false;
    });

});