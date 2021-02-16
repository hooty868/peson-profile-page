(function ($) {
  $(function () {
    $('.sidenav').sidenav()
    $('.parallax').parallax()
  }) // end of document ready

})(jQuery); // end of jQuery name space

$(window).scroll(function () {
  let currentscrollTop = $(window).scrollTop();
  if (currentscrollTop > 0) {
    $('.navbar').css('opacity', (currentscrollTop / 250))
  } else {
    $('.navbar').css('opacity', 0)
  }
})
// set sidenav view
$(document).ready(function () {
  $('.sidenav').sidenav({
    // 側邊導覽列從右邊展開
    edge: 'right',
    // 側邊導覽列打開時，頁面仍可滑動
    preventScrolling: false
  })
  $('.slider').slider({
    // 不顯示操控圓鈕
    indicators: false,
    // 每張照片播三秒
    interval: 1000
  })
  $('.scrollspy').scrollSpy()
})

$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true
});

// set send email plugin
function processFormData() {
  const form = document.forms['form'];
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  if (!name && !email && !message) {
    alert("聯絡資訊再麻煩您填完歐！")
    return
  }
  Email.send({
    SecureToken: "5c4a7f1c-afd7-466d-98a2-65e4ed57b90a",
    To: 'wortwonnn@gmail.com',
    From: 'hooty868@gmail.com',
    Subject: name,
    Body: `${email}:${message}`
  }).then(
    message => alert(message)
  )
}

document.getElementById("myBtn").addEventListener("click", function () {
  processFormData()
})

let targgleCard = false
$(".cta-button").mouseup(function () {
  $('#card-hide').animate({
    top: '-=377px'
  }, 1500, 'easeOutBounce');
  $(".cta-button").css({ "display": "none" });
  $(".cta-text").css({ "font-size": "1.5rem" });
  targgleCard = true
})

$(".back-btn").mouseup(function () {
  if (targgleCard) {
    $('#card-hide').animate({
      top: '+=377px'
    }, 1500, 'easeOutBounce');
    $(".cta-button").css({ "display": "block" });
    $(".cta-text").css({ "font-size": "0.9rem" });
    targgleCard = false
  }
})