(function ($) {

    // 로고를 클릭하면 main.html의 #content를 load()
    $('#wrap')
    .on("click", "#header h1 a,#header .menuBox a, #footer .quickMenu a, .mainContent #step_area a, .contTit .prev a, .member .loginBtn a, .member .joinBtn a"
    ,function () {
        var url = this.href;
      $("#container > #content").remove();
      $("#container").load(url + " #content");
        return false;
      }
    );


    // 전국 카페
    var cafedata;
    $.ajax({
      type:'GET',
      url:'data/cafeStore.json',
      timeout:2000,
      beforeSend: function (xhr) {
        if (xhr.overrideMimeType) {
          xhr.overrideMimeType("application/json");
        }
      },
    success : function(data){
      cafedata = data
    
    },
    error:function(error){
      alert(error.status + '오류발생')
    }
    })
    
    
      $('#container').on('click','.storeContent .storeList a', function(e){
        e.preventDefault()
        var url = this.href;
        var cafe = $(this).attr('class')
          $("#container > #content").remove();
          $("#container").load(url + " #content", function(){
            var newContent = '';
            for (var i in cafedata[cafe]) {
              newContent += `<li><div class="img"><img src="${cafedata[cafe][i].photo}" alt=""></div>`
              newContent += `<div class="storeInfo"><strong>${cafedata[cafe][i].name}</strong>`
              newContent += `<p><i class="far fa-thumbs-up"></i> ${cafedata[cafe][i].recommend}</p>`
              newContent += `<div class="location"><i class="fas fa-map-marker-alt"></i> ${cafedata[cafe][i].location}</div></div></li>`
            }
            $('#content .part1StoreList').html(`<ul>${newContent}</ul>`)
          });
          
    })



    // 보드게임 카페
    var boardData;
    $.ajax({
      type:'GET',
      url:'data/boardStore.json',
      timeout:2000,
      beforeSend: function (xhr) {
        if (xhr.overrideMimeType) {
          xhr.overrideMimeType('application/json');
        }
      },
    success : function(data2){
      boardData = data2
    
    },
    error:function(error2){
      alert(error2.status + '오류발생')
    }
    })
    
    
      $('#container').on('click', '.serch_wrap .board_game a', function(e){
        e.preventDefault()
        var url = this.href;
        var board = $(this).attr('href');
          $("#container > #content").remove();
          $("#container").load(url + " #content", function(){
            var boardCafe = '';
            for (var i in boardData[board]) {
              boardCafe += `<li><div class="img"><img src="${boardData[board][i].photo}" alt="보드게임 카페 레드버튼"></div>`
              boardCafe += `<div class="boardGameInfo"><strong>${boardData[board][i].name}</strong>`
              boardCafe += `<p class="time"><i class="far fa-clock"></i> ${boardData[board][i].time}</p>`
              boardCafe += `<p class="cost"><i class="far fa-won-sign"></i> ${boardData[board][i].cost}<br></p>`
              boardCafe += `<div class="location"><i class="fas fa-map-marker-alt"></i> ${boardData[board][i].location}</div></div></li>`
            }
            $('#content .boardGameStoreList').html(`<ul>${boardCafe}</ul>`)
            return false;
          });
          
    })

    // 햄버거 버튼 클릭하면 네비박스 열기
    $('#lnb_menu').on('click',function(){
      $(this).next().css({ display:'block' })
      $('#lnb').animate({left:'0px'}, 500)
    })
    // 햄버거 버튼 클릭하면 네비박스 닫기
    $('#lnb_close').on('click',function(){
      $('#lnb').animate({ left:'-274px'}, 500, function(){
      $('#navWrap').css({ display:'none'})
      })
    })

    // 네비 메뉴 클릭시 햄버거 버튼만 보이게 하기
    $('#lnb .menuBox a, .member a').on('click',function(){
      $('#navWrap, #lnb_close').hide()
    })

    
    // 검색 아이콘 클릭시 검색창 열기
    $('.search-open a').on('click',function(){
      $('.search-box').addClass('on')
      return false;
    })
    // 닫기 버튼 클릭시 검색창 닫기
    $('.search-close a').on('click',function(){
      $(this).parents('.search-box').removeClass('on')
      return false;
    })

      
  })(jQuery);

  function join_check() {

    if ( !document.member_form.id.value ) {
      alert('아이디를 입력해주세요')
      document.member_form.id.focus()
      return false
    }
  
    if ( !document.member_form.pass.value ) {
      alert('비밀번호를 입력해주세요')
      document.member_form.pass.focus()
      return false
    }
  
    if ( !document.member_form.passok.value ) {
      alert('비밀번호를 확인해주세요')
      document.member_form.passok.focus()
      return false
    }
  
    if ( !document.member_form.name.value ) {
      alert('이름을 입력해주세요')
      document.member_form.name.focus()
      return false
    }
  
    if ( !document.member_form.tel.value ) {
      alert('전화번호를 입력해주세요')
      document.member_form.tel.focus()
      return false
    }
  
    if (document.member_form.pass.value !== document.member_form.passok.value ) {
      alert('비밀번호가 일치하지 않습니다.')
      document.member_form.pass.focus()
      return false
    }
  
    document.member_form.submit()
  
  }

  function login_check() {
    if ( !document.login_form.id.value ) {
      alert('아이디를 입력해주세요')
      document.login_form.id.focus()
      return false
    }
  
    if ( !document.login_form.pass.value ) {
      alert('비밀번호를 입력해주세요')
      document.login_form.pass.focus()
      return false
    }

    document.login_form.submit()
  }