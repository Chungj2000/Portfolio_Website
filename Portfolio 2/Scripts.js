$(document).ready(function(){

    loadTop();
    
    setInterval(loadscreenPercentage, 100);

    //Enable scrolling after 6 seconds (loadscreen).
    setInterval(disable_scrollLock, 6000);

    scrollNavigation();
    home_Display();
    decisiveBattlefront_Display();

});

/*
    Pauses and resumes animation based on whether there is user activity on the webpage.
    This reduces load.
*/
window.addEventListener('focus', function() {
    $(document).find('.active-animation').removeClass('pause-animation');
    $(document).find('.active-animation').children().removeClass('pause-animation');   
    //console.log('Resume tab.'); 
});

window.addEventListener('blur', function() {
    $(document).find('.active-animation').addClass('pause-animation');
    $(document).find('.active-animation').children().addClass('pause-animation');
    //console.log('Pause tab.'); 
});

function loadTop() {
    //Auto top page when page is loaded e.g. Refresh.
    history.scrollRestoration = "manual";
    //Scroll for triggering default animation.
    window.scrollTo(0, 5);
}

//Display & update loadscreen percentage.
function loadscreenPercentage() {
    $('#loadscreen-percentage').text(Math.round($('#loadbar-fill').width()/$('#loadbar-fill').parent().width() * 100) + "%");
}

function disable_scrollLock() {
    $('body').css({
        overflow: 'auto',
        height: 'auto'
    });
}

const navigationItems = ["home", "decisiveBattlefront", "bloodTide", "characterConnect", "modelingAnimation"];
const offsetBy1 = 1;

//When user scrolls to another section, update navigation UI.
function scrollNavigation() {
    $(window).scroll(function() {    
    
        //alert('Scrolled');

        //Vertical scrollbar position, based on display window of the page.
        var scroll = $(window).scrollTop();

        //Identify current section based on scroll, and offsets (from the top of the page) of each section.
        for(let i = navigationItems.length - offsetBy1; i > -1; i--) {
            if(scroll >= $('#' + navigationItems[i]).offset().top) {

                //alert(navigationItems[i]);

                var sliderHeight = 7.2 * (i + offsetBy1);

                $('#navigation-slider').css('top', sliderHeight + 'vh');
                $('.navigation-list li span a').removeClass('active');
                $('#navigation-' + navigationItems[i] + ' span a').addClass('active');

                $('#' + navigationItems[i] + ' .content-header').addClass('animation-trigger');
                $('#' + navigationItems[i] + ' .content-header h1').addClass('animation-trigger');

                break;

            } 
        }

    });
}

function home_Display() {
    $(window).scroll(function() {

        var scroll = $(window).scrollTop();

        if(scroll == $('#' + navigationItems[0]).offset().top) {

            //alert('Home Section.');

            $('#animation-html img').removeClass('pause-animation');
            //alert('Active.');

        } else {
            $('#animation-html img').addClass('pause-animation');
            //alert('Inactive.');
        }
    });
}

function decisiveBattlefront_Display() {
    $(window).scroll(function() {

        var scroll = $(window).scrollTop();

        if(scroll == $('#' + navigationItems[1]).offset().top) {

            //alert('Decisive Battlefront Section.');

            $('#animation-gears1 img').removeClass('pause-animation');
            $('#animation-gears2 img').removeClass('pause-animation');
            //alert('Active.');

        } else {
            $('#animation-gears1 img').addClass('pause-animation');
            $('#animation-gears2 img').addClass('pause-animation');
            //alert('Inactive.');
        }
    });
}

//Legacy Code

/*
        if(scroll >= $("#modelingAnimation").offset().top - 100) {
            //alert('Modeling & Animation');

            $('#navigation-slider').css('top', '36vh');
            $('.navigation-list li span a').removeClass('active');
            $('#navigation-modelingAnimation span a').addClass('active');

        }else if(scroll >= $("#characterConnect).offset().top - 100) {
            //alert('Character Connect');

            $('#navigation-slider').css('top', '28.8vh');
            $('.navigation-list li span a').removeClass('active');
            $('#navigation-characterConnect span a').addClass('active');

        }else if(scroll >= $("#bloodTide").offset().top - 100) {
            //alert('Game 2');

            $('#navigation-slider').css('top', '21.6vh');
            $('.navigation-list li span a').removeClass('active');
            $('#navigation-bloodTide span a').addClass('active');

        }else if(scroll >= $("#decisiveBattlefront").offset().top - 100) {
            //alert('Game 1');

            $('#navigation-slider').css('top', '14.4vh');
            $('.navigation-list li span a').removeClass('active');
            $('#navigation-decisiveBattlefront span a').addClass('active');

        }else if (scroll >= $("#home").offset().top - 100) {
            //alert('Home');

            $('#navigation-slider').css('top', '7.2vh');
            $('.navigation-list li span a').removeClass('active');
            $('#navigation-home span a').addClass('active');

        }else{
    
            $('.navigation-list li span a').removeClass('active');

        }
*/