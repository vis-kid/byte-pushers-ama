$(document).ready(function() {
    'use strict';
  /*-----------------------------------------------------------------------------------*/
    /*	SWIPER
    /*-----------------------------------------------------------------------------------*/
    $('.swiper-container.image-carousel').each(function() {
        $(this).swiper({
            pagination: '.image-carousel-wrapper .swiper-pagination',
            nextButton: '.image-carousel-wrapper .swiper-button-next',
            prevButton: '.image-carousel-wrapper .swiper-button-prev',
            slidesPerView: "auto",
            centeredSlides: false,
            pagination: false,
            spaceBetween: 6,
            grabCursor: true
        });
        var $swipers = $(this);
    });
	/*-----------------------------------------------------------------------------------*/
    /*	FITVIDS VIDEO
	/*-----------------------------------------------------------------------------------*/
    $('.player').fitVids();
	/*-----------------------------------------------------------------------------------*/
    /*	LIGHTGALLERY
	/*-----------------------------------------------------------------------------------*/
    $('.light-gallery').lightGallery({
        thumbnail: false,
        selector: '.lgitem',
        animateThumb: true,
        showThumbByDefault: false,
        download: false,
        autoplayControls: false,
        thumbWidth: 100,
        thumbContHeight: 80,
        videoMaxWidth: '1000px'
    });
});