$(function(){
    /* content1 변수 */
    var $btnOne = $('#cont1 #cont1_q #q1 .q_btn ul li');
    var $btnTwo = $('#cont1 #cont1_q #q2 .q_btn ul li');
    var $cont2Btn = $('#cont2_r ul');
    var $cont2Act = $('#cont1 #cont1_q #q2 li.active');
    var q1Btn = ['#건성', '#지성', '#중성', '#복합성', '#민감성', '#여드름', '#아토피'];
    var q2Btn = ['#10대', '#20대', '#30대', '#40대'];
    var q2Cnt;

    var h_top; //각콘텐츠 top 위치
    var box_id; //각 콘텐츠별 아이디명
    var offset = 200;

    /* content2 변수 */
    var $tg = $('#cont2_l'); //변수 앞 $가 있으면 선택자
    var visual = $tg.find('ul li'); // 슬라이딩 되는 큰 이미지
    var visualLen = visual.length; // 전체 이미지 갯수
    var cnt = 0; // 현재 보여지는 이미지 번호
    var link = ['b3_2.html', 'b3_2.html', 'b3_2.html', 'b3_2.html', 'b3_2.html', 'b3_2.html', 'b3_2.html', 'b3_2.html', 'b3_2.html', 'b3_2.html', 'b3_2.html', 'b3_2.html', 'b3_2.html', 'b3_2.html', 'b3_2.html', 'b3_2.html'];

    // 라인 생성할 위치 선택자
    var $thumb = $('#cont2 #cont2_r ul li');

    /* content1 */
    $cont2Btn.find('li').hide();
    $cont2Btn.find('.ten').show();
    var type_text = '';
    $btnOne.click(function(){
        var i = $(this).index();
        if($('#cont1 #cont1_q #q1 .q_btn ul li.active').length < 2) {
            $(this).toggleClass('active');
        }else {
            $(this).removeClass('active');
        };
        type_text += q1Btn[i];
    });

    $btnTwo.click(function(){
        $btnTwo.removeClass('active');
        $(this).addClass('active');

        q2Cnt = $(this).index();
    });

        $('#cont1 #cont1_q #q_select a').click(function(){

            $cont2Btn.find('li').hide();
            $thumb.removeClass('on');

            if (q2Cnt == 0) {
                $cont2Btn.find('.ten').show();
                $thumb.eq(0).addClass('on');
                visual.eq(0).css({left: 0});
            } else if (q2Cnt == 1) {
                $cont2Btn.find('.twenty').show();
                $thumb.eq(4).addClass('on');
                visual.eq(4).css({left: 0});
            } else if (q2Cnt == 2) {
                $cont2Btn.find('.thirty').show();
                $thumb.eq(8).addClass('on');
                visual.eq(8).css({left: 0});
            } else {
                $cont2Btn.find('.forty').show();
                $thumb.eq(12).addClass('on');
                visual.eq(12).css({left: 0});
            };

            $('#cont2_text h2 span').eq(0).text(type_text);
            $('#cont2_text h2 span').eq(1).text(q2Btn[q2Cnt]);

            box_id = $(this).attr('href');  //해당 콘텐츠 id명

            h_top = $(box_id).offset().top;

            $('html, body').animate({
                scrollTop: h_top
            },500);

            //초기화
            for(var k=0 ; k < $btnOne.length;k++){
                $btnOne.eq(k).removeClass('active');
            }
            for(var j=0 ; j < $btnTwo.length;j++){
                $btnTwo.eq(j).removeClass('active');
            }

            type_text = '';
            return false;
        });


    // content2

    // 첫번째 썸네일 이미지 라인 활성화
    $thumb.eq(0).addClass('on');

    $thumb.click(function(){ // 원하는 탭 항목 클릭

        if (cnt == i) return;

        var i = $(this).index(); // 선택한 순서번호

        $thumb.removeClass('on'); // 모든 탭 항목에 적용된 선택클래스를 제거
        $(this).addClass('on'); // 선택된 탭 항목 이름을 활성화 스타일 적용

        var cnt_img = visual.eq(cnt); //현재 보이는 이미지
        var next_img = visual.eq(i) //새로 보여질 이미지

        if(cnt > i) {
            cnt_img.css({left: 0}).stop().animate({left: '100%'});
            next_img.css({left: '-100%'}).stop().animate({left: 0});
        }; // 현재 번호가 새로 들어온 번호보다 크면 이전 이미지 방향전환
        if(cnt < i) {
            cnt_img.css({left: 0}).stop().animate({left: '-100%'});
            next_img.css({left: '100%'}).stop().animate({left: 0});
        }; // 현재 번호가 새로 들어온 번호보다 작으면 다음 이미지 방향전환

        $('#cont2_l .cont2_link a').attr('href', link[i]);

        cnt = i;
    });
});