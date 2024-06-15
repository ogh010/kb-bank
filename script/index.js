$(document).ready(function () {
  $('.autoplay').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
$(function () {
  var n = 0;
  var timer = setInterval(fadeInOut, 3000);

  $('.slideImg').hide();
  $('.slideImg').eq(0).show();
  $('.indicator li').eq(0).find('a').css({
    'background-color': '#3E3832',
  });

  function fadeInOut() {
    $('.slideImg')
      .eq(n % 5)
      .fadeOut(1300);
    $('.indicator li')
      .eq(n % 5)
      .find('a')
      .delay(3000)
      .css({
        'background-color': '#F7B500',
      });
    n++;
    $('.slideImg')
      .eq(n % 5)
      .fadeIn(1000);
    $('.indicator li')
      .eq(n % 5)
      .find('a')
      .delay(3000)
      .css({
        'background-color': '#3E3832',
      });
  }

  $('.right').click(function () {
    clearInterval(timer);
    fadeInOut(n);
    timer = setInterval(fadeInOut, 3000);
  });
  $('.left').click(function () {
    clearInterval(timer);
    $('.slideImg')
      .eq(n % 5)
      .fadeOut();
    $('.indicator li')
      .eq(n % 5)
      .find('a')
      .delay(3000)
      .css({
        'background-color': '#F7B500',
      });
    n--;
    $('.slideImg')
      .eq(n % 5)
      .fadeIn();
    $('.indicator li')
      .eq(n % 5)
      .find('a')
      .delay(3000)
      .css({
        'background-color': '#3E3832',
      });
    timer = setInterval(fadeInOut, 3000);
  });
});

$(function () {
  var $tab_list = $('.tab_menu');

  $tab_list.find('ul ul').hide();
  $tab_list.find('li.active>ul').show();

  function tabMenu(e) {
    e.preventDefault();
    var $this = $(this);

    $this
      .next('ul')
      .show()
      .parent('li')
      .addClass('active')
      .siblings('li')
      .removeClass('active')
      .find('>ul')
      .hide();
  }
  $tab_list.find('ul>li>a').click(tabMenu).focus(tabMenu);
});
$(function () {
  $(window).scroll(function () {
    var wh = $(window).height();
    var nowSt = $(window).scrollTop();
    if (nowSt >= wh / 0.8) {
      $('#header,#header .nav ul li a, #header .logo').addClass('sticky');
    } else {
      $('#header,#header .nav ul li a, #header .logo').removeClass('sticky');
    }
  });
});
$(function () {
  var n = 0;
  var m = 1;
  var timer = setInterval(contgallery, 3000);
  function contgallery() {
    $('.cont2gallery div')
      .eq(n % 3)
      .animate({ left: -400 }, 'linear');
    $('.cont2gallery div')
      .eq(m % 3)
      .css('left', '400px')
      .animate({ left: 0 }, 'linear');
    n++;
    m++;
  }
});
/*박스*/
$(function () {
  $('.box3 .box31')
    .mouseenter(function () {
      $('.box3 .box32>span').stop().animate({ left: '0px' });
    })
    .mouseleave(function () {
      $('.box3 .box32>span').stop().animate({ left: '-200px' });
    });

  $('.box3 .box34')
    .mouseenter(function () {
      $('.box3 .box33>span').stop().animate({ left: '0px' });
    })
    .mouseleave(function () {
      $('.box3 .box33>span').stop().animate({ left: '200px' });
    });

  $('.box3 .box35')
    .mouseenter(function () {
      $('.box3 .box36>span').stop().animate({ left: '0px' });
    })
    .mouseleave(function () {
      $('.box3 .box36>span').stop().animate({ left: '-200px' });
    });
});
/*탭*/
$(function () {
  $('.tab_title li').click(function () {
    var idx = $(this).index();
    $('.tab_title li').removeClass('on');
    $('.tab_title li').eq(idx).addClass('on');
    $('.tab_cont > div').hide();
    $('.tab_cont > div').eq(idx).show();
  });
});

/*popup*/
$(function () {
  $('.popup button').click(function () {
    $('.popup').toggleClass('active');
    if ($(this).html() == '닫기') {
      $(this).html('보기');
    } else {
      $(this).html('닫기');
    }
  });

  $('.popup input[type=text]').click(function () {
    $(this).css({ width: '150px' });
  });
  $('.slideImg img').click(function () {
    $('.popup input[type=text]').css({ width: '100px' });
  });
  $('.popup input[type=text]')
    .focus(function () {
      $(this).addClass('focus');
    })
    .blur(function () {
      $(this).removeClass('focus');
    });

  /*박스탭*/

  $('.contBottom .bottomBox .box2 .box_2')
    .eq(0)
    .find('.caption')
    .addClass('on');
  $('.contBottom .bottomBox .box2 .box_2').mouseover(function () {
    var _index = $(this).index();
    $('.contBottom .bottomBox .box1 .box_1').removeClass('on');
    $('.contBottom .bottomBox .box1 .box_1').eq(_index).addClass('on');
  });
  $('.contBottom .bottomBox .box2 .box_2').mouseout(function () {
    $('.contBottom .bottomBox .box1 .box_1').removeClass('on');
    $(this).removeClass('on');
  });

  /*caption*/

  $('.contBottom .bottomBox .box2 .box21').mouseover(function () {
    $('.contBottom .bottomBox .box2 .box21 .caption')
      .stop()
      .css({ opacity: '1' });
  });
  $('.contBottom .bottomBox .box2 .box22, .contBottom .bottomBox .box2 .box23')
    .mouseover(function () {
      $('.contBottom .bottomBox .box2 .box21 .caption')
        .stop()
        .css({ opacity: '0' });
    })
    .mouseout(function () {
      $('.contBottom .bottomBox .box2 .box21 .caption')
        .stop()
        .css({ opacity: '1' });
    });
});
