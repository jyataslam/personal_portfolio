
$(document).ready(function(){
    document.getElementById('nav-btn').addEventListener('click', handleNavAnimationClick);
});

$(document).scroll(function(){
    $(this).scrollTop() > 120 ?  $(scrollingArrows).addClass('v-hidden') : $(scrollingArrows).removeClass('v-hidden');
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
        $(sidenav).removeClass('width-250');
        $(main).removeClass('mr-250');
        $(body).removeClass('no-scroll');
    } else {
        $(navBtn).addClass('on');
        $(sidenav).addClass('width-250');
        $(main).addClass('mr-250');
        $(body).addClass('no-scroll');
    }
}

// Hero
let scrollingArrows = $('.scroll-down-container');