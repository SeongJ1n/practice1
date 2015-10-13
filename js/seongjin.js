/* GNB Design */

$(window).scroll(function() {
    if ($(".gnb").offset().top > 300) {
        $(".gnb").addClass("scroll-gnb");
        $(".gnb h1 a").addClass("scroll-h1");
    } else {
        $(".gnb").removeClass("scroll-gnb");
        $(".gnb h1 a").removeClass("scroll-h1");
    }
});

/* Swing animation */

$(document).ready(function(){
  $(".nav-link").click(function(e){
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);
    $("html, body").stop().animate({
      'scrollTop' : $target.offset().top
    }, 500, 'swing', function() {
      window.location.hash = target;
    });
  });
});

/* li Style */

$(window).scroll(function(){
  winTop = $(window).scrollTop();
  winH = $(window).height();

  var scrollLmt = winH/4

  if(winTop < winH-scrollLmt){
    $(".navigation").children("li").removeClass("active");
  }
  if(winTop >= $("#services").offset().top-scrollLmt){
    $(".navigation").children("li").removeClass("active");
    $(".navigation").children("li").eq(0).addClass("active");
  }
  if(winTop >= $("#portfolio").offset().top-scrollLmt){
    $(".navigation").children("li").removeClass("active");
    $(".navigation").children("li").eq(1).addClass("active");
  }
  if(winTop >= $("#about").offset().top-scrollLmt){
    $(".navigation").children("li").removeClass("active");
    $(".navigation").children("li").eq(2).addClass("active");
  }
  if(winTop >= $("#team").offset().top-scrollLmt){
    $(".navigation").children("li").removeClass("active");
    $(".navigation").children("li").eq(3).addClass("active");
  }
  if(winTop >= $("#contact").offset().top-scrollLmt){
  $(".navigation").children("li").removeClass("active");
  $(".navigation").children("li").eq(4).addClass("active");
  }
});
