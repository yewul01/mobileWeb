(function ($) {

    // 로고를 클릭하면 main.html의 #content를 load() 하시오.
    $('#wrap')
    .on("click", "#header h1 a, #footer .quickMenu a, .mainContent #step_area a, .contTit .prev a",function () {
        var url = this.href;
      $("#container > #content").remove();
      $("#container").load(url + " #content");
        return false;
      }
    );

    var usedata;
    $.ajax({
      type:'GET',
      url:'data/store.json',
      beforeSend: function (xhr) {
        if (xhr.overrideMimeType) {
          xhr.overrideMimeType("application/json");
        }
      },
    success : function(data){
      usedata = data
    
    },
    error:function(xhr){
      alert(xhr.status + '오류발생')
    }
    })
    
      $('#container').on('click','.storeContent .storeList a', function(e){
        e.preventDefault()
        var url = this.href;
        var part = $(this).attr('class')
          $("#container > #content").remove();
          $("#container").load(url + " #content", function(){
            var newContent = '';
            for (var i in usedata[part]) {
              newContent += `<li><div class="img"><img src="${usedata[part][i].photo}" alt=""></div>`
              newContent += `<div class="storeInfo"><strong>${usedata[part][i].name}</strong>`
              newContent += `<p>${usedata[part][i].recommend}</p>`
              newContent += `<div class="location">${usedata[part][i].location}</div></div></li>`
            }
            $('#content .part1StoreList').html(`<ul>${newContent}</ul>`)
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