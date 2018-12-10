$(function(){
    $(window).on('scroll', function() {
        var nav = $('.scrolling-navbar');
        if($(window).scrollTop()>30) {
            // nav.css({
            //     "padding-top":"0",
            //     "padding-bottom":"0"
            // });
            nav.addClass('bg-nav-scroll');
        }
        else{
            // nav.css({
            //     "padding-top":"8px",
            //     "padding-bottom":"8px"
            // });
            nav.removeClass('bg-nav-scroll');
        }
    });
    $('.dropdown-menu button').on("click",function(){
        $(this).parent().prev().text($(this).text());
    });
    $('.navbar-nav .dropdown').on({
        'mouseenter': function(){
            $(this).toggleClass('show');
            $(this).find('.dropdown-menu').addClass('show');
        },
        'mouseleave': function(){
            $(this).toggleClass('show');
            $(this).find('.dropdown-menu').removeClass('show');
        }
    });

    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
        });
    }, false);

    
    $('.expand-icon-close').hide();
    $('.expand-button').click(function(){
        $('.expand-icon-close').toggle();
        $('.expand-icon-open').toggle();
    });
});