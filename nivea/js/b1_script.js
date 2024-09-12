$(function(){

    //데이터 전송 및 받기
    let data = location.href.split('#')[1]; // #을 기준으로 문자 구분 1번째꺼 => (cont2?deodorant)

    var titleText = ['전체제품', '데오드란트','립케어', '바디케어', '선케어','쉐이빙', '핸드케어'];

    $('.cont2_mid ul li').hide();
    $('#cont2 .product li').eq(data).find("input").prop('checked', true); // 해당 항목 라디오 박스 체크 (구조화에서 가능)
   
    

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
   var prTot = $('.product li').length;
    //button page
    var eaLen =[];
    eaLen[0] = $('.cont2_mid ul li').length;
    eaLen[1] = $('.cont2_mid ul .deodorant').length;
    eaLen[2] = $('.cont2_mid ul .lipcare').length;
    eaLen[3] = $('.cont2_mid ul .bodycare').length;
    eaLen[4] = $('.cont2_mid ul .suncare').length;
    eaLen[5] = $('.cont2_mid ul .shaving').length;
    eaLen[6] = $('.cont2_mid ul .handcare').length;
    var prClass = ['','.deodorant','.lipcare','.bodycare','.suncare','.shaving','.handcare'];
    var pg ; //각 제품별 전체 페이지 수 변수
    pgNum(); //각 제품별 페이지 버튼 생성 함수 호출

    function pgNum(){
        
        for(var i=0;i<prTot;i++){
            $('.cont2_bot').append('<div class="sub_btn"></div>');//각 제품 페이지 번호 묶어줄 태그
            pg = Math.ceil(eaLen[i] / 20); //각 제품별 페이지 수 구하기
            for(var k=1;k <=pg;k++){
                $('.cont2_bot .sub_btn').eq(i).append('<span>'+k+'</span>');
            } //각 제품별 페이지 수만큼 버튼 생성
            
        }
        $('.cont2_bot').find('.sub_btn').hide();
        $('.cont2_bot').find('.sub_btn').eq(data).show(); //해당 페이지만 보여주기
        
    }
    
    var n = data; //현재 보여지는 제품 목록 순서
    select(n); //해당 제품 보여주는 함수 호출
    $('#cont2 .product li').click(function(){
        $('.cont2_mid ul li').hide();
        n = $(this).index();
        select(n); //.cont2_mid ul li 호출
    });
    
    function select(n) { //각 해당 제품 보여주는 함수 정의
        $('.cnt').text(eaLen[n]);
        $('.kb h1').text(titleText[n]);
        if($('#handcare').is(':checked') == true){
            $('.cont2_mid ul').find('.handcare').show();
        }else if($('#deodorant').is(':checked') == true){
            $('.cont2_mid ul').find('.deodorant').show();
        }else if($('#lipcare').is(':checked') == true){
            $('.cont2_mid ul').find('.lipcare').show();  
        }else if($('#bodycare').is(':checked') == true){
            $('.cont2_mid ul').find('.bodycare').show();
        }else if($('#suncare').is(':checked') == true){
            $('.cont2_mid ul').find('.suncare').show();
        }else if($('#shaving').is(':checked') == true){
            $('.cont2_mid ul').find('.shaving').show();
        }else {
            if(eaLen[n]>20){
                for(var c=0;c < 20 ;c++){
                    $('.cont2_mid ul li').eq(c).show();
                }
            }
        }
        $('.cont2_bot').find('.sub_btn').hide();
        $('.cont2_bot').find('.sub_btn').eq(n).show();
        $('.cont2_bot .sub_btn span').removeClass('act');
        $('.cont2_bot .sub_btn span:first-child').addClass('act');
    }   
    for(var bNum=0;bNum < prTot;bNum++){
        $('.cont2_bot .sub_btn:eq('+bNum+') span').click(function(){
            var sbn = $(this).parent().index();
            var i= $(this).index();
            $('.cont2_bot .sub_btn span').removeClass('act');
            $(this).addClass('act');
            $('.cont2_mid ul li').hide();
            for(var j=0; j < pg ; j++){
                for(var c=i*20;c < (i+1)*20 ;c++){
                    $('.cont2_mid ul li'+prClass[sbn]).eq(c).show();
                }
            }
        });
    }
    

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