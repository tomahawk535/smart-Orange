$(document).ready(function () {

    // анимация цифр

    var show = true;
    var countbox = ".benefits-inner";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 550 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.benefits-number').css('opacity', '1');
            $('.benefits-number').spincrement({
                thousandSeparator: "",
                duration: 1500,
                fade: true
            });

            show = false;
        }
    });

    // отображеине сервисов по клику
    // скрфтие сервисов по дефолту
    function hideService  () {
        $('.services-item-content').hide();
    }
    hideService();
    // переключение отображения сервисов
    function toggleServices () {
        $(this).siblings('.services-item-content').slideToggle(300);
        $(this).children('.services-item-toggle').toggleClass('fa-sort-down fa-sort-up');
    }
    $('.services-item-header').click(toggleServices);


    // слайдер для коментариев
    $('.response-slider').slick({
        mobileFirst: true,
        dots: false,
        arrows: false,
        slidesToShow: 2,
        autoplay: true,
        vertical: true,
        verticalSwiping: true,
        responsive: [{
            breakpoint: 1200,
                settings: {
                    arrows: true,
                    prevArrow: '<i class="fas fa-chevron-up"></i>',
                    nextArrow: '<i class="fas fa-chevron-down"></i>',
                    adaptiveHeight: true
                }

        }]
    });


    // вывод данных с формы в консоль
   function getData(){
       let data  = $('#feedback-form').serializeArray();
       $.each(data, function(){
           console.log(this.name+" = "+this.value)
       });
   }
   $('.feedback-form-submit').click(getData);

});
