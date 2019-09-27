
$(document).ready(function(){
    document.getElementById('nav-btn').addEventListener('click', handleNavAnimationClick);
});

$(document).scroll(function(){
    $(this).scrollTop() > 600 ?  $(scrollingArrows).addClass('v-hidden') : $(scrollingArrows).removeClass('v-hidden');
})


// Navigation
let nav = $('.navigation-menu-wrapper');
let navBtn = $('#nav-btn');
let sidenav = $('.nav-menu');
let main = $('.main');
let body = $('body');

handleNavAnimationClick = () => {
    if ($(navBtn).hasClass('on')){
        $(navBtn).removeClass('on');
        $(sidenav).removeClass('sidenav-transform-x');
        $(main).removeClass('main-transform-x');
        $(body).removeClass('no-scroll');
    } else {
        $(navBtn).addClass('on');
        $(sidenav).addClass('sidenav-transform-x');
        $(main).addClass('main-transform-x');
        $(body).addClass('no-scroll');
    }
}

// Hero
let scrollingArrows = $('.scroll-down-container');

// Projects Carousel (Flickity)
// let $carousel = $('.carousel').flickity({
//     imagesLoaded: true,
//     percentPosition: false,
// });
  
// let $imgs = $carousel.find('.carousel-cell img');
// let docStyle = document.documentElement.style;
// let transformProp = typeof docStyle.transform == 'string' ?
//     'transform' : 'WebkitTransform';
// let flkty = $carousel.data('flickity');
  
// $carousel.on( 'scroll.flickity', function() {
//     flkty.slides.forEach( function( slide, i ) {
//         let img = $imgs[i];
//         let x = ( slide.target + flkty.x ) * -1/3;
//         img.style[ transformProp ] = 'translateX(' + x  + 'px)';
//     });
// });