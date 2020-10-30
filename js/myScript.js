(function ($) {

    // 로고를 클릭하면 main.html의 #content를 load()
    $('#wrap')
    .on("click", "#header h1 a,#header .menuBox a, #footer .quickMenu a, .mainContent #step_area a, .contTit .prev a",function () {
        var url = this.href;
      $("#container > #content").remove();
      $("#container").load(url + " #content");
        return false;
      }
    );


    // 전국 카페
    var cafe1data;
    $.ajax({
      type:'GET',
      url:'data/cafeStore.json',
      beforeSend: function (xhr) {
        if (xhr.overrideMimeType) {
          xhr.overrideMimeType("application/json");
        }
      },
    success : function(data){
      cafe1data = data
    
    },
    error:function(xhr){
      alert(xhr.status + '오류발생')
    }
    })
    
    
      $('#container').on('click','.storeContent .storeList a', function(e){
        e.preventDefault()
        var url = this.href;
        var cafe = $(this).attr('class')
          $("#container > #content").remove();
          $("#container").load(url + " #content", function(){
            var newContent = '';
            for (var i in cafe1data[cafe]) {
              newContent += `<li><div class="img"><img src="${cafe1data[cafe][i].photo}" alt=""></div>`
              newContent += `<div class="storeInfo"><strong>${cafe1data[cafe][i].name}</strong>`
              newContent += `<p><i class="far fa-thumbs-up"></i> ${cafe1data[cafe][i].recommend}</p>`
              newContent += `<div class="location"><i class="fas fa-map-marker-alt"></i> ${cafe1data[cafe][i].location}</div></div></li>`
            }
            $('#content .part1StoreList').html(`<ul>${newContent}</ul>`)
          });
          
    })



    // 보드게임 카페
    var boardData;
    $.ajax({
      type:'GET',
      url:'data/cafeStore.json',
      beforeSend: function (xhr) {
        if (xhr.overrideMimeType) {
          xhr.overrideMimeType("application/json");
        }
      },
    success : function(data){
      boardData = data
    
    },
    error:function(xhr){
      alert(xhr.status + '오류발생')
    }
    })
    
    
      $('#container').on('click', '.serch_wrap .board_game a', function(e){
        e.preventDefault()
        var url = this.href;
        var board = $(this).attr('class')
          $("#container > #content").remove();
          $("#container").load(url + " #content", function(){
            var newContent = '';
            for (var i in boardData[board]) {
              newContent += `<li><div class="img"><img src="${boardData[board][i].photo}" alt=""></div>`
              newContent += `<div class="boardGameInfo"><strong>${boardData[board][i].name}</strong>`
              newContent += `<p class="time"><i class="far fa-clock"></i> ${boardData[board][i].time}</p>`
              newContent += `<p class="cost"><i class="far fa-won-sign"></i> ${boardData[board][i].cost}<br></p>`
              newContent += `<div class="location"><i class="fas fa-map-marker-alt"></i> ${boardData[board][i].location}</div></div></li>`
            }
            $('#content .boardGameStoreList').html(`<ul>${newContent}</ul>`)
          });
          
    })

    // 햄버거 버튼 클릭하면 네비박스 열기
    $('#lnb_menu').on('click',function(){
      $(this).next().css({ display:'block' })
      $('#lnb').animate({left:'0px'}, 500)
    })
    $('#lnb_close').on('click',function(){
      $('#lnb').animate({ left:'-274px'}, 500, function(){
      $('#navWrap').css({ display:'none'})
      })
    })



      
  })(jQuery);