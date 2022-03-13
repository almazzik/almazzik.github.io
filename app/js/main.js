$(function(){

// $(".menu").on("click","a", function (event) {
//         event.preventDefault();
//         var id  = $(this).attr('href'),
//             top = $(id).offset().top;
//         $('body,html').animate({scrollTop: top}, 1000);
//     });

  const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

$('.reviews__inner').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><svg width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.25 3.75L7.75 15L19.25 26.5L15.75 30L0.750004 15L15.75 -4.91738e-07L19.25 3.75Z" fill="black"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 26.25L12.25 15L0.75 3.5L4.25 0L19.25 15L4.25 30L0.75 26.25Z" fill="black"/></svg></button>',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 941,
            settings: {
                arrows: false
            }
        }, 
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                arrows: false
            }
        }, 
        {
            breakpoint: 560,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        },
      ]
    });

    $('.menu__btn').on('click', function(){
      $('.menu__list').toggleClass('menu__list--active');
    });

    $('.menu__btn').on('click', function(){
      $('.top__inner').toggleClass('top__inner--active');
      $('.policy__box').toggleClass('policy__box--active');
      $('.thankyou__box').toggleClass('thankyou__box--active');
    });

});