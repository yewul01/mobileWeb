<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cafe Tour</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://code.jquery.com/jquery-1.12.4.min.js"
        integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>
</head>

<body>
    <div id="wrap">

        <?php

            session_start();
            if ( isset($_SESSION['userid']) ) {
                $userid = $_SESSION['userid'];
                $username = $_SESSION['name'];
            } else $userid = '';

        ?>

        <header id="header" class="lnb_menu">
            <div id="lnb_menu" class="nav_menu">
                <a href="#"><i class="fas fa-bars"></i></a>
            </div>
            <div id="navWrap">
                <nav id="lnb">
                    <div class="nav_logo">
                        <img src="images/logo.png" alt="nav 로고">
                    </div>
                    <div class="member">
                        <?php if(!$userid) { ?>
                        <div class="inBtn loginBtn"><a href="login.html">로그인</a></div>
                        <div class="inBtn joinBtn"><a href="join.html">회원가입</a></div>
                        <?php } else { ?>
                        <div class="inBtn"><?php echo $userid ?>님 환영합니다.</div>
                        <div class="inBtn"><a href="logout.php">로그아웃</a></div>
                        <div class="inBtn"><a href="#none">정보수정</a></div>
                        <?php } ?>
                    </div>
                    <ul class="menuBox">
                        <li><a href="cafeStore.html">전국 카페 매장</a></li>
                        <li><a href="boardGame.html">보드게임 카페</a></li>
                        <li><a href="escapeRoom.html">방탈출 카페</a></li>
                        <li><a href="map.html">오시는길</a></li>
                        <li><a href="notice.html">공지사항</a></li>
                    </ul>

                    <div id="lnb_close">
                        <a href="#"><img src="images/close.png" alt="메뉴닫기"></a>
                    </div>
                </nav>
            </div>
            <h1 class="logo">
                <a href="index.html"><img src="images/logo.png" alt="cafe tour"></a>
            </h1>
            <div class="search-open">
                <a href="#">
                    <i class="fas fa-search"></i>
                    <span class="blind">검색</span>
                </a>
            </div>
            <div class="search-box">
                <form action="#" method="POST" class="search-form">
                    <fieldset>
                        <legend>검색창</legend>
                        <input type="text" name="search" id="search" placeholder="검색어를 입력해주세요.">
                        <button type="reset"><i class="fas fa-times"></i></button>
                        <button type="submit"><i class="fas fa-search"></i></button>
                    </fieldset>
                </form>
                <div class="search-close">
                    <a href="#"><i class="fas fa-times"></i></a>
                </div>
            </div>
        </header>

<section id="container">
    <div id="content" class="loginContent">
        <div class="contTit">
            <div class="prev">
                <!-- history.back : 기본값은 window -->
                <a href="index.html">
                    <i class="far fa-arrow-alt-circle-left"></i>
                </a>
            </div>
            <h2>로그인</h2>
        </div>
        <div id="login_box">
            <form name="login_form" method="post" action="login.php">
                <fieldset>
                    <legend>로그인</legend>
                    <div class="idpw_box">
                        <p>
                            <label for="idtext"></label>
                            <input type="text" name="id" id="idtext" placeholder="아이디">
                        </p>
                        <p>
                            <label for="pass"></label>
                            <input type="password" name="pass" id="pass" placeholder="비밀번호">
                        </p>
                    </div>
                    <button type="button" onclick="login_check()">로그인</button>
                    <div class="find-idpw">
                        <a href="#">아이디 찾기</a>
                        <a href="#">비밀번호 찾기</a>
                        <a href="join.html">회원가입</a>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
</section>

        <footer id="footer">
            <div class="csCenter">
                <div class="row">
                    <div class="quickMenu">
                        <a href="map.html">오시는길</a>
                        <a href="#">매장검색</a>
                    </div>
                </div>
                <div class="comInfo">
                    <span>전화 : 1234-5678</span>
                    <span>팩스 : 032-678-1234</span>
                    <span>이메일 : cafe_tour@daum.net</span>
                </div>
                <div class="contact">
                    <a href="#" target="_blank"><img src="images/sns_facebook.png" alt="페이스북"></a>
                    <a href="#" target="_blank"><img src="images/sns_insta.png" alt="인스타그램"></a>
                    <a href="#" target="_blank"><img src="images/sns_blog.png" alt="블로그"></a>
                    <a href="#" target="_blank"><img src="images/sns_youtube.png" alt="유튜브"></a>
                </div>
                <div class="privacy">
                    <a href="#"><span>개인정보처리방침</span></a>
                    <a href="#"><span>PC버전보기</span></a>
                </div>
                <P>
                    &copy; 2020 DOMESTIC CAFE TOUR. ALL RIGHT RESERVED.
                </P>
            </div>
        </footer>

        <script src="js/myScript.js"></script>


    </div>

    <div id="onlyMobile">
        이 사이트는 768px 이하에서만 보입니다.
    </div>
</body>

</html>