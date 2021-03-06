$(document).ready(function () {
    $('#search').focus(function () {
        console.log('test');
        $('#auto-complate').css('visibility', 'visible');
    });
    $('#search').blur(function () {
        console.log('test');
        $('#auto-complate').css('visibility', 'hidden');
    });


    $('#section2').css('padding-top',$("nav").height()*2);
    for (var i = 0; i < $('.carousel-item').length; i++) {
        //슬라이드 갯수만큼 셀렉터 만듬..
        if (i == 0) {
            $('<li></li>').attr('data-target', '#section1-slide').attr('data-slide-to', i).addClass('active').appendTo('.carousel-indicators');
        } else {
            $('<li></li>').attr('data-target', '#section1-slide').attr('data-slide-to', i).appendTo('.carousel-indicators');
        }
    }
    $('html *').on("mousewheel DOMMouseScroll", function (event) {
        if ($('body').hasClass('menu-open')) {
            event.preventDefault();
            event.stopPropagation();

            return false;
        }
    });
    $('#section1').on("mousewheel DOMMouseScroll", function (e) {
        var delta = 0;
        if (!event) event = window.event;
        if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
            if (window.opera) delta = -delta;
        } else if (event.detail) delta = -event.detail / 3;
        var moveTop = null;
        if (delta < 0) {
            if ($(this).next().hasClass('scroll-smooth')) {
                moveTop = $(this).next().offset().top;
            }
        }
        $("html,body").stop().animate({
            scrollTop: moveTop + 'px'
        }, {
            duration: 900,
            complete: function () {
            }
        });
    });
    $('#section2').on("mousewheel DOMMouseScroll", function (e) {
        if ($('body').hasClass('menu-open')) {
            return;
        }
        var delta = 0;
        if (!event) event = window.event;
        if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
            if (window.opera) delta = -delta;
        } else if (event.detail) delta = -event.detail / 3;
        var moveTop = null;
        if (delta >= 0) {
            if ($(document).scrollTop() == 0 || $(document).scrollTop() > $('#section1').height()) {
                return
            }
            if ($(this).prev() && $(document).scrollTop() < $('#section2').offset().top) {
                e.preventDefault();
                moveTop = $(this).prev().offset().top;
                $("html,body").stop().animate({
                    scrollTop: moveTop + 'px'
                }, {
                    duration: 900,
                    complete: function () {
                    }
                });
            }
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() >= $('#section2').offset().top) {
            $('#header').addClass('black-bg-header');
        } else {
            $('#header').removeClass('black-bg-header');
        }
    });
    $('#bg-div').css('background-image', "url(" + $(".carousel-item.active").children('img').attr("src") + ")");
    $('#section1-slide').on('slid.bs.carousel', function () {
        $('#bg-div').css('background-image', "url(" + $(".carousel-item.active").children('img').attr("src") + ")");
    });

    var toggle = function () {
        $('body').toggleClass('menu-open');
    }
});
