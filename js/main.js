$(document).ready(function() {
    //*MENU CONTROLL FUNCTION**//
    $(function() {
        var btn  = $('.menu').find('.menu-btn'),
            menu = $('.menu').find('.menu-list'),
            item = menu.find('.menu-item');

            $(document).mouseup(function(e){

          		if (!menu.is(e.target)
          		    && menu.has(e.target).length === 0) {
          			menu.removeClass('active');
          		}
                else {
                    item.click(function() {
                     menu.removeClass('active');
                    });
                }

            btn.click(function() {
                if (menu.hasClass('active')) {
                    menu.removeClass('active')
                }
                else (
                    menu.addClass('active')
                )
            });
      	});
    });
    //*ancors*//
    // $(function(){
    //     $('body').anchor({
    //         'speed': 800,//скорость анимации прокрутки
    //         'anchortotop':100,//дистанция активации до топа экрана px
    //         'moveto': 'true'//true только первый вызов для перехода к якорю
    //     });
    //
    //     $(window).scroll(function() {
    //         $('body').anchor();//moveto тут не задавать!
    //     });
    // });

    //*SECTION PORTFOLIO SLICK SLIDER*//
    $(function() {
        $('.portfolio-container').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            arrows: false,
            responsive: [
                   {
                       breakpoint: 1000,
                       settings: {
                           rows: 1,
                           slidesToScroll: 1,
                           slidesToShow: 1,
                           dots: false
                       }
                   },
                   {
                       breakpoint: 480,
                       settings: {
                           rows: 1,
                           slidesToScroll: 1,
                           slidesToShow: 1,
                           dots: false
                       }
                   }
               ]
      });
        $('[data-action]').click(function() {
                var target = $(this).attr('data-action');
                if (target == 'prev') {
                    $('.portfolio-container').slick('prev');
                }
                else  {
                    $('.portfolio-container').slick('next');
                }
        });
    });

    //**SCROLL DOWN BUTTON**//
    //!function($){
     //  $(document).on('click', 'a[href^=#]', function () {
    //        $('html, body').animate({ scrollTop:  $('a[name="'+this.hash.slice(1)+'"]').offset().top }, 1000 );

    //        return false;
    //    });
    //}(jQuery);
    $(function(){
       $('#bottomdown').click(function() {
            $('body').animate({scrollTop: $(window).height()}, 500);
        });
    });

    //*send mail ajax*//
    $(function(){
        $('[data-mail="msgform"]').click(function() {
            var msg = $('#sendmsgform').serialize();
            $.ajax({
                method: "POST",
                type: 'POST',
                url: 'sendmail.php',
                data: msg,
                success: function() {
                    console.log('success');
                    $('#sendmsgform > .contact-form > [name=name]').val('');
                    $('#sendmsgform > .contact-form > [name=email]').val('');
                    $('#sendmsgform > .contact-form > [name=comment]').val('');

                },
                error: function() {
                    console.log('error');
                }
            });
        });
    });
    //*tabulator*//
    $(function(){
        $('.tabulator[data-idblok]').click(function(){
            var target = $(this).attr('data-idblok');
            if (!$(this).hasClass('active')){
                $('.tabulator').removeClass('active');
                $('[data-idblok='+target+']').addClass('active');
                $('#'+target+'').addClass('active');
            }
        });
    });

});
