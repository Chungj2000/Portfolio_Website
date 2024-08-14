$(document).ready(function(){

    loadTop();

    //alert("Test");

    /*
    $('.navigation-list li span a').click(function() {    
    
        //alert('Clicked');
        $('.navigation-list li span a').removeClass('active');
        $(this).addClass('active');

    });
    */

    $(window).scroll(function() {    
    
        //alert('Scrolled');

        var scroll = $(window).scrollTop();

        if(scroll >= $("#modeling-animation").offset().top - 100) {
            //alert('Modeling & Animation');

            $('#navigation-slider').css('top', '36vh');
            $('.navigation-list li span a').removeClass('active');
            $('#navigation-modelingAnimation span a').addClass('active');

        }else if(scroll >= $("#characterConnect").offset().top - 100) {
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

            unformatHome();
            $('#navigation-slider').css('top', '14.4vh');
            $('.navigation-list li span a').removeClass('active');
            $('#navigation-decisiveBattlefront span a').addClass('active');

        }else if (scroll >= $("#home").offset().top - 100) {
            //alert('Home');

            formatHome();
            $('#navigation-slider').css('top', '7.2vh');
            $('.navigation-list li span a').removeClass('active');
            $('#navigation-home span a').addClass('active');

        }else{
    
            $('.navigation-list li span a').removeClass('active');

        }

    });

    $('.slideshow-prev').click(function() { 
        prevSlide($(this).attr('id'));
    });

    $('.slideshow-next').click(function() { 
        nextSlide($(this).attr('id'));
    });

    $('.slidePage-Button').click(function() { 
        updateCurrentSlide($(this).attr('id'));
    });

});

function loadTop() {
    //Auto top page when page is loaded e.g. Refresh.
    history.scrollRestoration = "manual";
    //Scroll for triggering default animation.
    window.scrollTo(0, 5);
}

function formatHome() {
    $('#arrow1, #arrow2, #arrow3').css({
        'opacity': '1',
        'transform': 'translate(0vh, 0)'
    });
}

function unformatHome() {
    $('#arrow1, #arrow2, #arrow3').css({
        'opacity': '0',
        'transform': 'translate(-150vh, 0)'
    });
}

/* Slideshow Content */

var currentSlideshow = 1;
var arrayOffset = 1;

var slideshow_slideTitles = [['Scenic Lake', 'Rizzed  Cat', 'Sakura Trees', 'Dark Souls', 'Comfy Minimalist'],
                             ['Just Text B', 'Some Text B', 'Insert Text B', 'Random Text B', 'Last Text B'],
                             ['Just Text C', 'Some Text C', 'Insert Text C', 'Random Text C', 'Last Text C'],
                             ['Just Text D', 'Some Text D', 'Insert Text D', 'Random Text D', 'Last Text D']];
const slideshow_numberofSlides = [5,5,5,5,5];
var slideshow_currentSlide = [1,1,1,1,1];

//Identify current active slideshow, and which slide it needs to change to.
function updateCurrentSlide(slideID) {
    //alert("Slide changed.");
    //slideNumber = Number(slideID.replace('slideshow1-slideButton',''));
    
    setCurrentSlide(slideID);
    displayCurrentSlide();
}

//Update all visible elements of the slideshow based the current slide of the slideshow.
function displayCurrentSlide() {
    /*
    $('#slideshow' + currentSlideshow + '-slide1, #slideshow' 
                   + currentSlideshow + '-slide2, #slideshow' 
                   + currentSlideshow + '-slide3, #slideshow' 
                   + currentSlideshow + '-slide4, #slideshow' 
                   + currentSlideshow + '-slide5').css({
        'visibility': 'hidden'
    });

    $('#slideshow' + currentSlideshow + '-number h1 span').fadeOut(150, function(){
        $('#slideshow' + currentSlideshow + '-number h1 span').text('0' + getCurrentSlide() + '.').fadeIn(150);
    });
    */

    $('#slideshow' + currentSlideshow + '-slide1, #slideshow' 
                   + currentSlideshow + '-slide2, #slideshow' 
                   + currentSlideshow + '-slide3, #slideshow' 
                   + currentSlideshow + '-slide4, #slideshow' 
                   + currentSlideshow + '-slide5').fadeOut(150, function() {

                    $('#slideshow' + currentSlideshow + '-slide1, #slideshow' 
                                + currentSlideshow + '-slide2, #slideshow' 
                                + currentSlideshow + '-slide3, #slideshow' 
                                + currentSlideshow + '-slide4, #slideshow' 
                                + currentSlideshow + '-slide5').css({
                        'visibility': 'hidden'
                    }).fadeIn(150);

    });
            

    $('#slideshow' + currentSlideshow + '-slide' + getCurrentSlide()).fadeOut(150, function() {
        $('#slideshow' + currentSlideshow + '-slide' + getCurrentSlide()).css({
            'visibility': 'visible'}).fadeIn(150);
    });
    
    toggleSlidePage();
    updateSlideNumber();
    updateSlideTitle();
}

//Update the slideshow buttons at the bottom right to reflect the current slide being viewed.
function toggleSlidePage() {
    $('#slideshow' + currentSlideshow + '-slideButton1, #slideshow' 
                   + currentSlideshow + '-slideButton2, #slideshow' 
                   + currentSlideshow + '-slideButton3, #slideshow' 
                   + currentSlideshow + '-slideButton4, #slideshow' 
                   + currentSlideshow + '-slideButton5').css({
        'background-color': 'crimson'
    });

    $('#slideshow' + currentSlideshow + '-slideButton1, #slideshow' 
                   + currentSlideshow + '-slideButton2, #slideshow' 
                   + currentSlideshow + '-slideButton3, #slideshow' 
                   + currentSlideshow + '-slideButton4, #slideshow' 
                   + currentSlideshow + '-slideButton5').parent().css({
        'background-color': 'transparent'
    });

    $('#slideshow' + currentSlideshow + '-slideButton' + getCurrentSlide()).css({
        'background-color': 'white'
    });

    $('#slideshow' + currentSlideshow + '-slideButton' + getCurrentSlide()).parent().css({
        'background-color': 'black'
    });
}

function updateSlideNumber() {
    
    $('#slideshow' + currentSlideshow + '-number h1 span').animate({
        'width': '0',
        'opacity': '0'
    },  250);

    setTimeout(function () {
        $('#slideshow' + currentSlideshow + '-number h1 span').text('0' + getCurrentSlide() + '.').animate({
            'width': '10vh',
            'opacity': '1'
        },  250);
    }, 250);
    
}

function updateSlideTitle() {
    $('#slideshow' + currentSlideshow + '-number p').fadeOut(250, function(){
            $('#slideshow' + currentSlideshow + '-number p').text(slideshow_slideTitles[currentSlideshow - arrayOffset][getCurrentSlide() - arrayOffset]).fadeIn(250);
    });
}

//Parse most recently interacted element of a slideshow as data to identify current slide of a slideshow.
function setCurrentSlide(slideID) {

    slideNumber = slideID.slice(22);
    setCurrentSlideshow(slideID);
    //alert("Current slideshow: " + currentSlideshow);

    slideshow_currentSlide[currentSlideshow - arrayOffset] = Number(slideNumber);
}

//Set the currently active slideshow as the most recently interacted slideshow.
function setCurrentSlideshow(elementID) {
    currentSlideshow = Number(elementID.slice(9,10));
    //alert("Current slideshow: " + currentSlideshow);
}

//Return the current slide of the most recently interacted slideshow.
function getCurrentSlide() {
    return slideshow_currentSlide[currentSlideshow - arrayOffset];
}

function nextSlide(buttonID) {

    setCurrentSlideshow(buttonID);

    //Loop back to slide 1 when value is greater than maximum number of slides in the slideshow.
    slideshow_currentSlide[currentSlideshow - arrayOffset] += 1;
    if(slideshow_currentSlide[currentSlideshow - arrayOffset] > slideshow_numberofSlides[currentSlideshow - arrayOffset]) {
        slideshow_currentSlide[currentSlideshow - arrayOffset] = 1;
    }
    
    displayCurrentSlide();
}

function prevSlide(buttonID) {

    setCurrentSlideshow(buttonID);

    //Loop back to the highest value index slide when less than slide 1.
    slideshow_currentSlide[currentSlideshow - arrayOffset] -= 1;
    if(slideshow_currentSlide[currentSlideshow - arrayOffset] < 1) {
        slideshow_currentSlide[currentSlideshow - arrayOffset] = slideshow_numberofSlides[currentSlideshow - arrayOffset];
    }
    
    displayCurrentSlide();
}

//Zoom in image when hovered logic.
$(function(){

    var slideID;
    var zoomValue;
    var enhanceZoom = false;
    
    $(".slideshow div").on("mousemove", function(event) {

        slideID = $(this).attr('id');

        //Offset values for the Y axis per slideshow.
        var slideshowOffset = slideID.slice(9,10) - 1;
        var verticalOffset = $('#slideshow2-slide1').offset().top - $('#slideshow1-slide1').offset().top;

        //alert('Slide ID: ' + slideID);
        //alert(verticalOffset);

        var mousePosX = event.pageX - $(".slideshow div").offset().left;
        var mousePosY = (event.pageY - $(".slideshow div").offset().top) - verticalOffset * slideshowOffset;

        if(enhanceZoom == false) {
            zoomValue = 3;
        } else {
            zoomValue = 10;
        }

        //alert(mousePosY);

        $("#" + slideID + " img").css({
            'transform': 'scale(' + zoomValue + ')',
            'transform-origin': mousePosX + 'px' + ' ' + mousePosY + 'px'
        });

        $(".slideshow div").click(function() {
            if(enhanceZoom == false) {
                enhanceZoom = true;

                $(".slideshow div:hover").css({
                    'cursor': 'zoom-out'
                });
            } else {
                enhanceZoom = false;

                $(".slideshow div:hover").css({
                    'cursor': 'zoom-in'
                });
            }
        });
        
    });

    $(".slideshow div").on("mouseout", function() {

        enhanceZoom = false;

        $("#" + slideID + " img").css({
            'transform': 'scale(1)'
        });

    });
    
})