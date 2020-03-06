import $ from 'jquery';
import slick from 'slick-carousel';

(function($, slick) {
    $(document).ready(function($) {
        let app = {
            init: function () {
                if(window.addEventListener){
                    window.addEventListener("scroll", function() {
                        app.animate();
                    }, false);
                }else{
                    window.attachEvent("scroll", function(){
                        app.animate();
                    });
                }
                
                if ($('#slider'))
                    app.slider($('#slider'))
                
                app.checkIE();
                app.animate();
            },
            
            slider: function (item) {
                item.slick({
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                })
            },
            
            checkIE : function(){
                var nav =   window.navigator.userAgent,
                    idx =   nav.indexOf("MSIE"),
                    tri =   nav.indexOf("Trident/");
                if(idx > 0 || tri > 0){
                    var version = (parseInt(nav.substring(idx + 5, nav.indexOf('.', idx)), 10));
                    app.ie  =   true;
                    document.body.classList.add('ie');
                    document.body.classList.add('ie'+version);
                }
            },
            animate: function(){
                $(".wa").each(function (i, v) {
                    var scrollTop    = $(window).scrollTop(),
                        el           = $(this),
                        elHeight     = el.height(),
                        winHeight    = $(window).height(),
                        offsetTop    = el.offset().top + parseInt(el.css("padding-top")),
                        bottomScreen = scrollTop + winHeight;
                    
                    if ( bottomScreen >= offsetTop ) {
                        el.addClass("animate");
                    } else {
                        el.removeClass("animate");
                    }
                });
            },
        }
        
        app.init();
    });
    
})($, slick);
