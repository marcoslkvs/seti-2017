(function($) {

$(document).ready(function() {

    // Animação dos ícones ao dar scroll
    var kaboomImg = $('#kaboom-img');
    var boomImg = $('#boom-img');
    var pooofImg = $('#pooof-img');

    showOnScrollListener(kaboomImg, $('#publico-alvo'), 'fadeInLeft');
    showOnScrollListener(boomImg, $('#evento'), 'fadeInRight');
    showOnScrollListener(pooofImg, $('#novidades'), 'fadeInLeft');

    // Coloração do menu
    var linkHome = $('#link-home');
    var linkEvento = $("#link-evento");
    var linkPalestrantes = $('#link-palestrantes')
    var linkLocalizacao = $("#link-localizacao");
    var linkPatrocinadores = $("#link-patrocinadores");
    var linkProgramacao = $("#link-programacao");
    var linkContato = $("#link-contato");

    setMenuFocus(linkHome, $("#home"), $("#publico-alvo"));
    setMenuFocus(linkEvento, $("#publico-alvo"), $("#DCC"));
    setMenuFocus(linkLocalizacao, $("#DCC"), $("#palestrantes"));
    setMenuFocus(linkPalestrantes, $("#palestrantes"), $("#patrocinadores"));
    setMenuFocus(linkPatrocinadores, $("#patrocinadores"), $("#contato"));
    setMenuFocus(linkContato, $("#contato"), $("#footer"));


    function showOnScrollListener(element, trigger, classes) {
        element.hide();
        var documentHeight = $(document).height();
        addScrollEventListener(trigger, documentHeight, function() {
            if (!element.hasClass('animated')) {
                element.show();
                element.addClass('animated');
                // element.addClass(classes);
            }
        });
    }

    function setMenuFocus(element, top, bottom) {
        addScrollEventListener(top, bottom, setHightlight, function() {
            element.removeClass('teste2');
        });

        scrollIsBetweenLimits(top, bottom, setHightlight);

        function setHightlight() {
            element.addClass('teste2');
        }
    }

    function addScrollEventListener(begin, end, callback, beforeCallback) {
        $(window).scroll(function(event) {
            scrollIsBetweenLimits(begin, end, callback, beforeCallback);
        });
    }

    function scrollIsBetweenLimits(begin, end, callback, beforeCallback) {
        var topRangeBegin = begin.position().top;
        var topRangeEnd = end.position ? end.position().top : end;

        var topPositionScroll = $(window).scrollTop() + $(window).height() * 0.30;
        var maximumTop = $(document).height() - $(window).height();
        if (topPositionScroll >= maximumTop) {
            topPositionScroll = maximumTop - 200;
        }

        if (beforeCallback) {
            beforeCallback();
        }

        if (topPositionScroll > topRangeBegin && topPositionScroll < topRangeEnd) {
            callback();
        }
    }

});

})(jQuery);


    $(".slick-prev ").click(function()
    {
        $(".slick-active h2")[0].click();
    });

    $(".slick-next").click(function()
    {
        alert("cliquei");
        $(".slick-active h2")[0].click();
    });

$(window).scroll(function()
{   
    var scroll = $(window).scrollTop();
    if( scroll > 460)
    {
        $(".navbar").addClass("mtop0");
    }
    else
    {
        $(".navbar").removeClass("mtop0");
    }
});