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
      .fadeOut();
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
      .fadeIn();
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
