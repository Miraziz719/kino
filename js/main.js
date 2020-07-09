// header resize on scroll
$(window).on('scroll', function() {
  if ($(window).width() > 1200) {
    if ($(window).scrollTop()) {   
      $('.header').addClass('mini');
    } 
    else {
      $('.header').removeClass('mini');
    }
  }
})


// открыть по кнопке
$(".humberger").click(function () {
  $(".menu__box, .overlay").addClass("open")
  $('html, body').css({
    overflow: 'hidden'
  });
});
// закрыть на крестик
$(".close").click(function () {
  $(".menu__box, .overlay").removeClass("open")
  $('html, body').css({
    overflow: 'auto'
  });
});
// закрыть по клику вне окна
$(document).mouseup(function (e) {
  var popup = $(".menu__box");
  if (e.target != popup[0] && popup.has(e.target).length === 0) {
    $(".menu__box, .overlay").removeClass("open")
    $('html, body').css({
      overflow: 'auto'
    });
  }
});


// //  acardion menu
// for (var i = 0; i < $(".child").length; i++) {
//   $(".child")[i].click(function () {
//     $(this).addClass("open")
//   });
// }
//  acardion menu
var acc = document.getElementsByClassName("child");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var panel = this.lastElementChild;

    if (!panel.style.maxHeight) {
      for (i = 0; i < acc.length; i++) {
        acc[i].lastElementChild.style.maxHeight = null;
        acc[i].classList.remove("open");
      }
    }
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      this.classList.remove("open");
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      this.classList.add("open");
    } 
  });
}

// slick 
$('.slick').slick({
  speed: 500,
  cssEase: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
  autoplay: true,
  autoplaySpeed: 9000,
  centerMode: true,
  centerPadding: 0,
});

$('.slick__2').slick({
  slidesToShow: 5,
  slidesToScroll: 5,
  draggable: false,
  speed: 500,
  // cssEase: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
  infinite: false,
  responsive: [{
    breakpoint: 902,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4,
    }
  }, {
    breakpoint: 681,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
    }
  }, {
    breakpoint: 460,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    }
  }]
});

$('.slick__3').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: false,
  autoplay: true,
  responsive: [{
    breakpoint: 945,
    settings: {
      slidesToShow: 3,
    }
  }, {
    breakpoint: 630,
    settings: {
      slidesToShow: 2,
    }
  }, {
    breakpoint: 327,
    settings: {
      slidesToShow: 1,
    }
  }]
});


// 100% height wrapper
var minY = $( window ).height() - $('footer').height()
$('.wrapper').css('min-height', minY)
$( window ).resize(function() {
  var minY = $( window ).height() - $('footer').height()
  $('.wrapper').css('min-height', minY)
});


// image hover gif play
$('.poster__4').mouseover(function() {
  var elem = $(this).find("span.trigger");
  $(this).find("img.replacement").hide();
  var src = elem.attr('data-original');
  elem.replaceWith('<img class="trigger" src="' + src + '" style="display:block;"/>');
});
$('.poster__4').mouseout(function() {
  var elem = $(this).find("img.trigger");
  $(this).find("img.replacement").show();
  var src = elem.attr('src');
  elem.replaceWith('<span class="trigger" data-original="'+src+'"></span>');
});