$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('nav').toggleClass('active');
    })

    $('nav ul li a').click(function () {
        $('nav ul li a').removeClass('active');
        $(this).addClass('active');
    })
    //    image filter

    $('.portfolios').filterData({
        aspectRatio: '8:5',
        nOfRow: 3,
        itemDistance: 0
    });
    $('.portfolio-controllers button').on('click', function () {
        $('.portfolio-controllers button').removeClass('active-work');
        $(this).addClass('active-work');
    });

    //    go to top
    $('.totop').tottTop({
        scrollTop: 100
    });

    //    wow js
    new WOW().init();


});