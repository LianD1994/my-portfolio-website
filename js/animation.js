// <!--google analytics script-->
(function (i, s, o, g, r, a, m) {
i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
}, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-101997709-1', 'auto');
ga('send', 'pageview');

var bottom_of_window = $(document).scrollTop() + $(document).height();

/* icon bar collapse animation */
if (screen.width >= 1024)
    $(document).on('scroll', function () {
        if ($(document).scrollTop() > 10) {
            $('.iconContainer img').css('width', '30px');
            $('.iconContainer img').css('height', '30px');
            $('.iconContainer').css('width', '300px');
            $('.resume-btn').css('height', '30px');
            $('.resume-btn').css('line-height', '5px');
            $('.resume-btn').css('right', '10px');
            $('.resume-btn').css('font-size', '16px');
            $('.blog-btn').css('height', '30px');
            $('.blog-btn').css('line-height', '5px');
            $('.blog-btn').css('right', '113px');
            $('.blog-btn').css('font-size', '16px');
        } else {
            $('.iconContainer img').css('width', '50px');
            $('.iconContainer img').css('height', '50px');
            $('.iconContainer').css('width', '340px');
            $('.resume-btn').css('height', '50px');
            $('.resume-btn').css('line-height', '25px');
            $('.resume-btn').css('right', '10px');
            $('.resume-btn').css('font-size', '20px');
            $('.blog-btn').css('height', '50px');
            $('.blog-btn').css('line-height', '25px');
            $('.blog-btn').css('right', '116px');
            $('.blog-btn').css('font-size', '20px');
        }

        if($(document).scrollTop() > $('#topSection').outerHeight()/3){
            $('#intro').css('max-width', '1000px');
            $('#intro').css('width', '85vw');
            $('#intro').css('opacity', '1');
        } else {
            $('#intro').css('width', '0vw');
            $('#intro').css('opacity', '0');
        }

        if($(document).scrollTop() > $('#intro').outerHeight()*3){
            $('#personal').css('max-width', '1000px');
            $('#personal').css('width', '85vw');
            $('#personal').css('opacity', '1');
        } else {
            $('#personal').css('width', '0vw');
            $('#personal').css('opacity', '0');
        }
    });

// scroll fade in animation
$(document).ready(function () {
    /* Every time the window is scrolled ... */
    $(window).scroll(function () {
        $(document).on('scroll', function () {
            if(screen.width >= 1024){
                var top_of_object = $('#blogSection').offset().top + $('#blogSection').outerHeight();
                if ($(document).scrollTop()+$(window).height() > top_of_object+150) {
                    $('#bottomIcon').show();
                } else {
                    $('#bottomIcon').hide();
                }
            }else{
                var bottom_of_object = $('#blogSection').offset().top + $('#blogSection').outerHeight();
                if ($(document).scrollTop()+$(window).height() > bottom_of_object+100) {
                    $('#bottomIcon').show();
                } else {
                    $('#bottomIcon').hide();
                }
            }
        });
    });
    
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
            });
        }
    });
});

// after the page finished loading 
window.onload = function () {
    // show I'm chris
    setTimeout(function(){
        $('#header').show();
    }, 1000);
    // show description after 1 sec
    setTimeout(function(){
        $('#paragraph').show();
    }, 2000);
    // show arrow after another sec
    setTimeout(function(){
        $('#arrow').show();
    }, 3000);
    // start bouncing after another sec
    setTimeout(function(){
        $('#arrow').addClass('bounce');
    }, 4000);
};

jQuery('.blog-btn').click(function(){
   jQuery(this).toggleClass('.blog-btn');
});