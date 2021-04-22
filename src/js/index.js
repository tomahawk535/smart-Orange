$(document).ready(function () {
    $('.mobile-nav-btn').click( function (){
       $('.navigation').toggleClass('show-nav');
       $('.mobile-nav-btn').toggleClass('fa-bars fa-times')
    });

    // вывод данных с формы в консоль
   function getData(){
       let data  = $('.feedback-form').serializeArray();
       $.each(data, function(){
           console.log(this.name+": "+this.value)
       });
   }
   $('.feedback-form-btn').click(getData);

});
