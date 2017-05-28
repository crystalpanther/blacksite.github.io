$.fn.anchor = function(options) {

   var settings = $.extend({
       'speed': 3000,
       'anchortotop':100,
       'moveto': 'false'
   }, options);

   var    $selector      = this,
          $offset        = window.pageYOffset,
          $lengthancors  = $selector.find('[data-anchor]').length,
          $offsetdispley = $(window).height(),
          $firstancor    = $selector.find('[data-anchor]').height(),
          $name          = window.location.hash;

       function hashteg() {
           $selector.find('[data-anchor]').each(function() {
               var $offsetancors = $(this).offset().top,
                   min = Math.abs($offset-$offsetancors);

               if ( min < settings.anchortotop) {
                   $firstancor = min;
                   $name = $(this).attr('data-anchor');
               }
           });
           window.location.hash = $name;
       }
       if (settings.moveto == "true" && !$name == ""){
           console.log($name);
           $(this).animate({ scrollTop: $('[data-anchor="'+$name+'"]').offset().top }, settings.speed);
       }else{
           hashteg();
       }

}
