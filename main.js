$(document).ready(function() {
    $('.faq__question').click(function() {
        $(this).next('.faq__answer').slideToggle(300);
        $('.faq__answer').not($(this).next()).slideUp(300);
    });
});