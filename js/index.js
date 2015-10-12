//<![CDATA[ 
var windowHeight = $(window).height();  
var navoffset;

function setTop(){
    windowHeight = $(window).height();
    $('div#navwhite').css('top', windowHeight-60 );
    $('div#main').css('top', windowHeight );
    $("nav").css('top', windowHeight-38+ 'px');
    navoffset = $('div#navwhite').offset().top+11;
};

$(window).load(function(){



    setTop();
    $( window ).resize(function() {
        setTop();
    });
    $('nav > span').on('click',function(){
        var target = $(this).text();
        $('html,body').animate({ scrollTop : $('#' + target).offset().top-60 }, 1000);
    });
     $( window ).scroll(function() {
        var scrolltop = $(this).scrollTop();
        var blurValue = scrolltop / 60;
        if(scrolltop >= navoffset){
            $('nav').addClass('fixed');
        }else{
            $('nav').removeClass('fixed');
            $(".logo").css({
                            'filter'        : 'blur('+blurValue+'px)',
                            '-webkit-filter': 'blur('+blurValue+'px)',
                            '-moz-filter'   : 'blur('+blurValue+'px)',
                            '-o-filter'     : 'blur('+blurValue+'px)',
                            '-ms-filter'    : 'blur('+blurValue+'px)'
                        });
            $("nav").css('top', windowHeight-38-scrolltop + 'px');
        }
     });

});//]]>  