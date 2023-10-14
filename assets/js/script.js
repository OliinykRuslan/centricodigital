$(document).ready(function(){
    //open mobile menu
    $(document).on("click", ".showMobmenu", function(){
        $(this).toggleClass("opened");
        $(".toggleMobmenu").toggleClass("menu-open");
        $("body").toggleClass("active-menu");
    });
    
    // open left navigation
    $(document).on("click", ".showMenu", function(){
        $(this).toggleClass("opened");
        $(".side-navigation-menu").toggleClass("active-menu");

        $(".toggleMobmenu").removeClass("menu-open");
        $(".showMobmenu").removeClass("opened");
    });
    // navigation menu - close btn
    $(document).on("click", ".navigationMenu", function(){
        $(".side-navigation-menu").removeClass("active-menu");
        $(".showMenu").removeClass("opened");
    });

    // $(document).mouseup(function (e) {
    //     var navigationMenu = $(".side-navigation-menu");
    //     // hide desktop menu
    //     if (navigationMenu.has(e.target).length === 0){
    //         navigationMenu.removeClass('active-menu');
    //         $('.showMenu').removeClass('opened');
    //     }
    // });

    // sticky menu    
    var objToStick = $(".navbar-wrapper");
    var topOfObjToStick = $(objToStick).offset().top;
    $(window).scroll(function () {
        var windowScroll = $(window).scrollTop();
        if (windowScroll > topOfObjToStick) {
            $(objToStick).addClass("navbar-sticky");
            $(objToStick).addClass("translateDown");
        } else {
            $(objToStick).removeClass("navbar-sticky");
            $(objToStick).removeClass("translateDown");
        };
    });

    // back top button
    var backtotop = $('.backtop-btn');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            backtotop.addClass('visible');
        } else {
            backtotop.removeClass('visible');
        }
    });
    backtotop.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });

    // hover close button
    $(".navigation-menu-wrapper").hover(function () {
        $(this).find('.navbar-toggler').addClass("fadeIn");
        $(this).find('.navbar-toggler').removeClass("fadeOut");
        $(".head-menu .navbar-toggler").addClass("fadeOut");
        $(".head-menu .navbar-toggler").removeClass("fadeIn");
    },
    function () {
        $(this).find('.navbar-toggler').addClass("fadeOut");
        $(this).find('.navbar-toggler').removeClass("fadeIn");
        $(".head-menu .navbar-toggler").addClass("fadeIn");
        $(".head-menu .navbar-toggler").removeClass("fadeOut");
    });

    // smooth link
    $(".navigation-menu").on("click",".anchor", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    // Repeat demo content
    var $body = $('body');
    var $box = $('.box');
    for (var i = 0; i < 20; i++) {
        $box.clone().appendTo($body);
    }

    // Helper function for add element box list in WOW
    WOW.prototype.addBox = function(element) {
        this.boxes.push(element);
    };

    // Init WOW.js and get instance
    var wow = new WOW();
    wow.init();

    // Attach scrollSpy to .wow elements for detect view exit events,
    // then reset elements and add again for animation
    $('.wow').on('scrollSpy:exit', function() {
        $(this).css({
            'visibility': 'hidden',
            'animation-name': 'none'
        }).removeClass('animated');
        wow.addBox(this);
    }).scrollSpy();
    

    $(document).on("focus", ".contact-form input", function(){
        $(this).closest('.form-group').addClass('is-focus');
    });
    $(document).on("blur", ".contact-form input", function(){
        if( $(this).val().length > 0 ) {
            $(this).closest('.form-group').addClass('is-focus');
        } else {
            $(this).closest('.form-group').removeClass('is-focus');
        }
    });
    
});
