(function ($) {
  $('.section .container').click(function () {
    const dom = $('.section .container h3').get(0)
    dom.append('歡迎光臨')
  })
  $(".page-footer").on("click", "p", function () { console.log('只點擊文字') });
})(jQuery);