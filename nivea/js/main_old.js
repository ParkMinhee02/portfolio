$(function(){
            
   // Cont2 이벤트 이전 다음 버튼
    var i = 1;
    var altText = ['겉.차.속.촉 / 니베아 데일리 선세럼 SPF 50+ PA+++', '니베아 립케어 립 스크럽 로즈힙오일'];
    var link = ['#', '#'];
    var eventTitle = ['#겉차속촉 데일리 선세럼 세일 이벤트', '봄날의 건조한 입술! 립케어 리뷰 이벤트'];
    var eventText = ['2024.04.01 10:00 AM ~ 04.30 18:00 PM', '2024.03.01 10:00 AM ~ 03.31 18:00 PM'];
    var path1 = 'img/main/event_';
    var path2 = '.jpg';
    
    //다음 버튼 클릭 시 다음 사진으로
    $('.next').click(function(){
        if (i < altText.length) {
            i++;
        }else{ 
            i = 1;
        }
        view();
    });

    //이전 버튼 클릭 시 이전 사진으로
    $('.prev').click(function(){
        if (i > 1) {
            i--;
        }else{
            i = altText.length;
        }
        view();
    });

    function view(){
            $('#cont2_bot a img').attr({src:path1+i+path2, alt:altText[i-1]});
            $('#cont2_bot a img:last').css('opacity', '0.3').fadeTo('fast', 1);
            $('#cont2_text h2').text(eventTitle[i-1]);
            $('#cont2_bot a').attr('href', link[i-1]);
            $('#cont2_text p').text(eventText[i-1]);
    };

    $(window).resize(function(){
        if($(this).outerWidth() <= 768) {
            path2 = 'm.jpg';
        }else {
            path2 = '.jpg';
        }
        view();
    });

    $(window).trigger('resize');




    //데이터 전송 및 받기
    let data = location.href.split('#')[1]; // #을 기준으로 문자 구분 1번째꺼 => (cont2?deodorant)

    var titleText = ['전체제품', '데오드란트','립케어', '바디케어', '선케어','쉐이빙', '핸드케어'];
    $('.kb h1').text(titleText[data]); //kb 타이틀 이름 바꾸기
    $('title').text(titleText[data]); //타이틀 이름 바꾸기

    var pro = $('#cont2 .product li').index();
    $('.cont2_mid ul li').hide();
    $('#cont2 #all').prop('checked', true); // list1 항목 라디오 박스 체크 (구조화에서 가능)

    //content1 슬라이드
    $('#cont1_navi ul li').eq(0).addClass('on'); // 처음 li 기본 활성화
    $('#cont1_content > div').hide(); //각 탭 내용을 안 보이게 함
    $('#cont1_content > div').eq(0).show(); // 처음 내용 활성화

    $('#cont1_navi ul li').click(function(){ // 원하는 탭 항목 클릭

        var i = $(this).index(); // 선택한 순서번호

        $('#cont1_navi ul li').removeClass('on'); // 모든 탭 항목에 적용된 선택클래스를 제거
        $(this).addClass('on'); // 선택된 탭 항목 이름을 활성화 스타일 적용

        $('#cont1_content > div').hide(); // 모든 탭 내용 안 보이게 함
        $('#cont1_content > div').eq(i).css('opacity', '0.3').fadeTo('800', 1); // 선택된 탭 항목의 내용을 보여줌
    });

    //content2 라디오버튼
    $('.cnt').text($('.cont2_mid ul li').length);
    $('#cont2 .product li').click(function(){
        $('.cont2_mid ul li').hide();
        if($('#all').is(':checked') == true){
            $('.cont2_mid ul li').show();
            $('.cnt').text($('.cont2_mid ul li').length);
        }else if($('#deodorant').is(':checked') == true){
            $('.cont2_mid ul').find('.deodorant').show();
            $('.cnt').text($('.cont2_mid ul li.deodorant').length);
        }else if($('#lipcare').is(':checked') == true){
            $('.cont2_mid ul').find('.lipcare').show();
            $('.cnt').text($('.cont2_mid ul li.lipcare').length);
        }else if($('#bodycare').is(':checked') == true){
            $('.cont2_mid ul').find('.bodycare').show();
            $('.cnt').text($('.cont2_mid ul li.bodycare').length);
        }else if($('#suncare').is(':checked') == true){
            $('.cont2_mid ul').find('.suncare').show();
            $('.cnt').text($('.cont2_mid ul li.suncare').length);
        }else if($('#shaving').is(':checked') == true){
            $('.cont2_mid ul').find('.shaving').show();
            $('.cnt').text($('.cont2_mid ul li.shaving').length);
        }else {
            $('.cont2_mid ul').find('.handcare').show();
            $('.cnt').text($('.cont2_mid ul li.handcare').length);
        }
    });

    // content2 모바일 네비게이션 버튼
    $('#cont2 .m_title').click(function(){
        $(this).toggleClass('selected');

        $(this).find('+ #cont2_navi').slideToggle('fast');
    });

    //content2 정렬
    $('#align').click(function(){
        $('#align align_list').toggle();
        $(this).toggleClass('active'); // 항목 토글 시 화살표 움직임
    });

    $('.btn_popular').click(function() {
        $('.cont2_mid > ul').html($('.cont2_mid ul li').sort(sortPopular));
    });
    function sortPopular(p1,p2 /* hit1, hit2 */) {
        return parseInt($(p1).data('popular')) - parseInt($(p2).data('popular'));
    }
    
    $('.btn_new').click(function() {
        $('.cont2_mid > ul').html($('.cont2_mid ul li').sort(sortNew));
    });
    function sortNew(n1,n2) {
        return parseInt($(n1).data('new')) - parseInt($(n2).data('new'));
    }
    
});