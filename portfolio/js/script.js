$(function(){
  // 隠す
  $('#toTop').hide();

  // 変数
  let height0 = 0;
  let height1 = $('#about').offset().top;
  height1 = height1 -100;
  let height2 = $('#skill').offset().top;
  height2 = height2 -100;
  let height3 = $('#work').offset().top;
  height3 = height3 -100;
  let height4 = $('#contact').offset().top;
  height4 = height4 -100;
  let windowHeight = $(window).height();
  console.log(windowHeight);

  // ローダー
  // $(function(){
  //   $(window).on('load',function(){
  //     $('.loader').delay(500).fadeOut(500);
  //     $('.loader_wrapper').delay(800).fadeOut(700);
  //   });
  //   setTimeout(function(){
  //     $('.loader_wrapper').fadeOut(500);
  //     },5000);
  // });

  // // メインビジュアルアニメーション　https://hajimete.org/jquery-text-animation-one-by-one
  // $(window).on('load', function(){
  // // アニメーションさせたいクラス
  //   var container = $(".main_visual p");
  //   // アニメーションスピード
  //   var speed = 80;

  //   // テキストの間にスペースを入れます
  //   var content = container.html();
  //   var text = $.trim(content);
  //   var newHtml = "";

  //   // スペースで区切ったテキストを、テキストの数だけspanで囲む
  //   text.split("").forEach(function(v) {
  //   newHtml += '<span>' + v + '</span>';
  //   });

  //   // spanで囲んだテキスト群をHTMLに戻す
  //   container.html(newHtml);

  //   // 1文字ずつ表示
  //   var txtNum = 0;
  //   container.css({opacity: 1});
  //   setInterval(function() {
  //     container.find('span').eq(txtNum).css({opacity: 1});
  //   txtNum++
  //   }, speed);
  // });

  $(window).on("load scroll resize", function () {
    let st = $(window).scrollTop();
    // トップメニューの切り替え
    if(height0 <= st && st < height1){
      $('header nav ul li').removeClass('cuurent');
    } else if (height1 <= st && st < height2) {
      $('header nav ul li').removeClass('cuurent');
      $('#no1').addClass('cuurent');
    } else if (height2 <= st && st < height3){
      $('header nav ul li').removeClass('cuurent');
      $('#no2').addClass('cuurent');
    } else if (height3 <= st && st < height4){
      $('header nav ul li').removeClass('cuurent');
      $('#no3').addClass('cuurent');
    } else {
      $('header nav ul li').removeClass('cuurent');
      $('#no4').addClass('cuurent');
    }

    // トップへ戻るボタン
    if(st > height0) {
      $('#toTop').fadeIn();
    }else {
      $('#toTop').fadeOut();
    }

    // ふわっとセクション表示 参考: https://dezanari.com/jquery-scroll-fadein/
    $('section').each(function(){
      let targetPosition = $(this).offset().top;
      if (st > targetPosition - windowHeight + 100) {
        $(this).addClass("is-fadein");
      }
    })
  });

  // ハンバーガーメニュー
  $('#bars').on('click', function(){
    $('#modal').addClass('show');
    $('#bars').hidden();
  });
  $('#xbtn').on('click', function(){
    $('#modal').removeClass('show');
    $('#bars').show();
  });
  $('#modal a').on('click', function(){
    $('#modal').removeClass('show');
    $('#bars').show();
  });
});