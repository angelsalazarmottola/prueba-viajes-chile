$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$("h1").hover(function(){
    $(this).css({"color": "yellow",});
    });

$('h2').click(function () {
    $('.card-text').toggle();
});

$(".texto-footer").hover(function(){
    $(this).html("<h3> Encuéntranos en nuestras redes sociales! <h3/>");
    });