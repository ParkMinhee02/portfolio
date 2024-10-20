<?php if(!defined("__XE__"))exit;?><header>
        <div class="row_c">
            <div id="logo">
                <a href="http://pmhportfolio.dothome.co.kr/nivea/main.html">
                        <img src="http://pmhportfolio.dothome.co.kr/nivea/img/main/logo.png" alt="NIVEA">
                </a>
            </div>
            <nav id="main_menu">
                <ul>
                    <li>
                        <form action="#"><input type="hidden" name="error_return_url" value="<?php echo htmlspecialchars(getRequestUriByServerEnviroment(), ENT_COMPAT | ENT_HTML401, 'UTF-8', false) ?>" /><input type="hidden" name="act" value="<?php echo $__Context->act ?>" /><input type="hidden" name="mid" value="<?php echo $__Context->mid ?>" /><input type="hidden" name="vid" value="<?php echo $__Context->vid ?>" />
                            <input type="search" id="sh_box" placeholder="검색어를 입력해주세요.">
                            <input type="submit" value="검색" id="sh_btn">
                        </form>
                    </li>
                    <li><a href="#"><img src="http://pmhportfolio.dothome.co.kr/nivea/img/main/btn_shoping.png" alt="장바구니"></a></li>
                    <li><a href="#"><img src="http://pmhportfolio.dothome.co.kr/nivea/img/main/btn_user.png" alt="마이페이지"></a></li>
                    <li>
                        <a class="menu-button" href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header> <!-- header -->
    <div id="navigation">
        <!-- 모바일 네비게이션바 -->
        <div id="mb_main_navi" class="navi">
            <nav class="mb_navi">
                <ul class="navi_text main_navi">
                    <li>
                        <a href="#"><span>ABOUT</span></a>
                        <div class="mb_sub_navi">
                            <ul>
                                <li><a href="http://pmhportfolio.dothome.co.kr/nivea/a1.html">브랜드스토리</a></li>
                                <li><a href="http://pmhportfolio.dothome.co.kr/nivea/a1.html">연혁</a></li>
                                <li><a href="http://pmhportfolio.dothome.co.kr/nivea/a1.html">지속가능성</a></li>
                            </ul>
                        </div>
                    </li><!-- 1 -->
                    <li>
                        <a href="#"><span>PRODUCT</span></a>
                        <div class="mb_sub_navi">
                            <ul>
                                <li><a href="http://pmhportfolio.dothome.co.kr/nivea/b1.html#0">전체제품</a></li>
                                <li><a href="http://pmhportfolio.dothome.co.kr/nivea/b1.html#1">데오드란트</a></li>
                                <li><a href="http://pmhportfolio.dothome.co.kr/nivea/b1.html#2">립케어</a></li>
                                <li><a href="http://pmhportfolio.dothome.co.kr/nivea/b1.html#3">바디케어</a></li>
                                <li><a href="http://pmhportfolio.dothome.co.kr/nivea/b1.html#4">선케어</a></li>
                                <li><a href="http://pmhportfolio.dothome.co.kr/nivea/b1.html#5">쉐이빙</a></li>
                                <li><a href="http://pmhportfolio.dothome.co.kr/nivea/b1.html#6">핸드케어</a></li>
                            </ul>
                        </div>
                    </li><!-- 2 -->
                    <li>
                        <a href="#"><span>FOR U</span></a>
                        <div class="mb_sub_navi">
                            <ul>
                                <li><a href="http://pmhportfolio.dothome.co.kr/nivea/c1.html">추천제품</a></li>
                                <li><a href="http://pmhportfolio.dothome.co.kr/nivea/c1.html">리뷰</a></li>
                            </ul>
                        </div>
                    </li><!-- 3 -->
                    <li>
                        <a href="#"><span>SOCIETY</span></a>
                        <div class="mb_sub_navi">
                            <ul>
                                <li><a href="http://pmhportfolio.dothome.co.kr/nivea/d1.html">멤버십안내</a></li>
                                <li><a href="http://pmhportfolio.dothome.co.kr/nivea/d1.html">주문배송</a></li>
                                <li><a href="http://pmhportfolio.dothome.co.kr/nivea/d1.html">케어포인트</a></li>
                            </ul>
                        </div>
                    </li><!-- 4 -->
                    <li>
                        <a href="#"><span>COMMUNITY</span></a>
                        <div class="mb_sub_navi">
                            <ul>
                                <li><a href="http://pmhportfolio.dothome.co.kr/xe/e1">공지사항</a></li>
                                <li><a href="http://pmhportfolio.dothome.co.kr/xe/e1">FAQ</a></li>
                                <li><a href="http://pmhportfolio.dothome.co.kr/xe/e1">고객의 소리</a></li>
                                <li><a href="http://pmhportfolio.dothome.co.kr/xe/e1">채용</a></li>
                            </ul>
                        </div>
                    </li><!-- 5 -->
                </ul>
            </nav>
            <div class="mb_btn">
                <ul>
                    <li><a href="#"><img src="http://pmhportfolio.dothome.co.kr/nivea/img/main/btn_w_search.png" alt="검색"></a></li>
                    <li><a href="http://pmhportfolio.dothome.co.kr/nivea/login.html"><img src="http://pmhportfolio.dothome.co.kr/nivea/img/main/btn_w_shoping.png" alt="장바구니"></a></li>
                    <li><a href="http://pmhportfolio.dothome.co.kr/nivea/login.html"><img src="http://pmhportfolio.dothome.co.kr/nivea/img/main/btn_w_user.png" alt="마이페이지"></a></li>
                </ul>
            </div>
        </div>
        <!-- pc 네비게이션 바 -->
        <nav id="navi" class="navi">
            <div id="main_navi" class="main_navi">
                <ul class="big_menu">
                    <li><a href="http://pmhportfolio.dothome.co.kr/nivea/a1.html">ABOUT</a></li>
                    <li><a href="http://pmhportfolio.dothome.co.kr/nivea/b1.html#0">PRODUCT</a></li>
                    <li><a href="http://pmhportfolio.dothome.co.kr/nivea/c1.html">FOR U</a></li>
                    <li><a href="http://pmhportfolio.dothome.co.kr/nivea/d1.html">SOCIETY</a></li>
                    <li><a href="http://pmhportfolio.dothome.co.kr/xe/e1">COMMUNITY</a></li>
                </ul>
                <div class="small_menu">
                    <div><!-- 1 -->
                        <ul>
                            <li><a href="http://pmhportfolio.dothome.co.kr/nivea/a1.html">브랜드스토리</a></li>
                            <li><a href="http://pmhportfolio.dothome.co.kr/nivea/a1.html">연혁</a></li>
                            <li><a href="http://pmhportfolio.dothome.co.kr/nivea/a1.html">지속가능성</a></li>
                        </ul>
                    </div>
                    <div><!-- 2 -->
                        <ul>
                            <li><a href="http://pmhportfolio.dothome.co.kr/nivea/b1.html#0">전체제품</a></li>
                            <li><a href="http://pmhportfolio.dothome.co.kr/nivea/b1.html#1">데오드란트</a></li>
                            <li><a href="http://pmhportfolio.dothome.co.kr/nivea/b1.html#2">립케어</a></li>
                            <li><a href="http://pmhportfolio.dothome.co.kr/nivea/b1.html#3">바디케어</a></li>
                            <li><a href="http://pmhportfolio.dothome.co.kr/nivea/b1.html#4">선케어</a></li>
                            <li><a href="http://pmhportfolio.dothome.co.kr/nivea/b1.html#5">쉐이빙</a></li>
                            <li><a href="http://pmhportfolio.dothome.co.kr/nivea/b1.html#6">핸드케어</a></li>
                        </ul>
                    </div>
                    <div><!-- 3 -->
                        <ul>
                            <li><a href="http://pmhportfolio.dothome.co.kr/nivea/c1.html">추천제품</a></li>
                            <li><a href="http://pmhportfolio.dothome.co.kr/nivea/c1.html">리뷰</a></li>
                        </ul>
                    </div>
                    <div><!-- 4 -->
                        <ul>
                            <li><a href="http://pmhportfolio.dothome.co.kr/nivea/d1.html">멤버십안내</a></li>
                            <li><a href="http://pmhportfolio.dothome.co.kr/nivea/d1.html">주문배송</a></li>
                            <li><a href="http://pmhportfolio.dothome.co.kr/nivea/d1.html">케어포인트</a></li>
                        </ul>
                    </div>
                    <div><!-- 5 -->
                        <ul>
                            <li><a href="http://pmhportfolio.dothome.co.kr/xe/e1">공지사항</a></li>
                            <li><a href="http://pmhportfolio.dothome.co.kr/xe/e1">FAQ</a></li>
                            <li><a href="http://pmhportfolio.dothome.co.kr/xe/e1">고객의 소리</a></li>
                            <li><a href="http://pmhportfolio.dothome.co.kr/xe/e1">채용</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav> <!-- navi -->
    </div> <!-- navigation -->
    <div class="kb">
        <div class="row_c">
            <h1 class="title">공지사항</h1>
            <p class="text">100년 넘는 기간 동안 사랑받은, 항상 믿을 수 있는 제품, 니베아</p>
        </div>
        <div class="kb_bdrs"></div>
    </div>
    <div id="cont1" class="pdb">
        <div id="bd_title">
            <div class="row_c">
                <h2 class="title">공지사항</h2>
                <p class="text">니베아의 제품은 우리에게 깊은 신뢰를 보여주는 소비자의 요구를 만족시키기 위해 노력하고 있습니다. 니베아의 공지사항을 알아보세요.</p>
            </div>
        </div>
        <div id="bd_wrap" class="row_c">
            <!-- 게시판 삽입부분 -->
            <?php echo $__Context->content ?>
        </div>
    </div>
    <footer>
        <div id="footer" class="row_c">
            <div id="footer_l">
                <a href="http://pmhportfolio.dothome.co.kr/nivea/main.html"><img src="http://pmhportfolio.dothome.co.kr/nivea/img/main/logo_white.png" alt="Nivea"></a>
                <div id="footer_btn">
                    <ul>
                        <li><a href="#">개인정보처리방침</a></li>
                        <li><a href="#">법적고지</a></li>
                        <li><a href="#">이용약관</a></li>
                    </ul>
                </div>
                <p>COPYRIGHT © beiersdorf ALL RIGHTS RESERVED.</p>
            </div>
            <div id="footer_r">
                <div id="f_sns">
                    <ul>
                        <li><a href="https://www.instagram.com/niveakorea/">인스타그램</a></li>
                        <li><a href="https://www.facebook.com/niveakorea">페이스북</a></li>
                    </ul>    
                </div>
                <div id="brand_site">
                    <div class="text_site">
                        <span class="st">BRAND SITE</span>
                        <img src="http://pmhportfolio.dothome.co.kr/nivea/img/main/btn_footer.png" alt="열림,닫힘 버튼" class="f_icon">
                    </div>
                    <ul>
                        <li><a href="https://www.nivea.com/">NIVEA GLOBAL</a></li>
                        <li><a href="https://www.beiersdorf.co.kr/">BEIERSDORF</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer> <!-- footer -->