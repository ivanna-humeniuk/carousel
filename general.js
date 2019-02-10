var SM = SM || {};

SM.Carousel = (function () {


    function initListeners() {
        var $carousel = $('.carousel');
        var $images = $('img', $carousel);

        $images.each(function () {
            $(this).mouseover(function () {
                showTitle($(this));
            });

            $(this).mouseout(function () {
                hideTitle($(this));
            });
        });
    }

    function showTitle(image) {
        image.addClass('active');
        var imageTitle = image.attr('alt');
        var $titleBlock = $('.images-title');
        $titleBlock.append(imageTitle).fadeIn(500);
    }


    function hideTitle(image) {
        image.removeClass('active');
        var $titleBlock = $('.images-title');
        $titleBlock.empty().fadeOut(500);
    }

    return {

        init: function () {
            initListeners();
        }
    }

}());

SM.Carousel.init();



