window.addEventListener('load', function() {
    var newVideo = document.getElementById('video_header');
    newVideo.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);

    newVideo.play();
});
/**
 * @param  {String} titulo
 * @param  {Number} id
 */
function escreverTitulo(titulo, id) {
    var _id = '#' + id;
    var counter = parseInt($(_id).attr('data-counter'));
    $(_id + ' span').remove();

    if (counter < titulo.length) {
        $(_id).html($(_id).html() + titulo.charAt(counter) + '<span class="text-pink">_</span>');
        counter++;
        $(_id).attr('data-counter', counter);
        setTimeout(function() {
            escreverTitulo(titulo, id);
        }, 225);
    } else {
        $(_id).addClass('blink');
    }

}
/**
 * Verifica se o elemento está visível
 * @param  {HTMLElement} elem
 */
function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top - 74;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

var robocup_scroll, picanha_scroll, integrantes_scroll = false;
function animacoesTitulo() {
    if (isScrolledIntoView($('#title_robocup')) && !$('#title_robocup').hasClass('blink') && !robocup_scroll) {
        robocup_scroll = true;
        escreverTitulo('O ROBOCUP', 'title_robocup');
    }

    if (isScrolledIntoView($('#title_picanha')) && !$('#title_picanha').hasClass('blink') && !picanha_scroll) {
        picanha_scroll = true;
        escreverTitulo('O PICANHA', 'title_picanha');
    }

    if (isScrolledIntoView($('#title_integrantes')) && !$('#title_integrantes').hasClass('blink') && !integrantes_scroll) {
        integrantes_scroll = true;
        escreverTitulo('OS INTEGRANTES', 'title_integrantes');
    }
}

/**
 * Cria um carrossel com slick
 * 
 * @param  {String} elem
 */
function createSlickCarrousel(elem)
{
    $(elem).slick({
        centerMode: true,
        slidesToShow: 3,
        lazyLoad: 'ondemand',
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false
            }
        }]
    });
}

$('.nav-item').on('click', function(){
    var href = $(this).data('href');

    $('.nav-item').removeClass('active');
    $(this).addClass('active');

    $('.navbar-collapse').collapse('hide');

    $("html, body").animate({ scrollTop: $(href).offset().top-75 }, 1250);
});

$(window).on('scroll', function(){
    animacoesTitulo();
});

$(document).ready(function() {
    animacoesTitulo();
    createSlickCarrousel('.slick');
});

$('form').on('submit', function(evt){
    evt.preventDefault();
    evt.stopPropagation();
});