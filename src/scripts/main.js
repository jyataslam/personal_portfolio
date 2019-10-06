
$(document).ready(function(){
    document.getElementById('nav-btn').addEventListener('click', handleNavAnimationClick);
});

$(document).scroll(function(){
    $(this).scrollTop() > 100 ?  $(scrollingArrows).addClass('v-hidden') : $(scrollingArrows).removeClass('v-hidden');
    $(this).scrollTop() > 10 ? $(navSpan).addClass('turn-span-black') : $(navSpan).removeClass('turn-span-black');
})


// Navigation
let nav = $('.navigation-menu-wrapper');
let navBtn = $('#nav-btn');
let sidenav = $('.nav-menu');
let navSpan = $('.nav-span');
let main = $('.main');
let body = $('body');

handleNavAnimationClick = () => {
    if ($(navBtn).hasClass('on')){
        $(navBtn).removeClass('on move-navbox-down');
        $(sidenav).removeClass('sidenav-transform-x');
        $(main).removeClass('main-transform-x');
        $(body).removeClass('no-scroll');
    } else {
        $(navBtn).addClass('on move-navbox-down');
        $(sidenav).addClass('sidenav-transform-x');
        $(main).addClass('main-transform-x');
        $(body).addClass('no-scroll');
    }
}

// Hero
let scrollingArrows = $('.scroll-down-container');
