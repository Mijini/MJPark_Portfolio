$(document).ready(function(){
  //fadein out
  // var currentIndex = 0;

  // setInterval(function(){
  //  if(currentIndex < 1){
  //     currentIndex++   
  //  }else{
  //     currentIndex = 0;
  //  }

  //  $(".Img").eq(currentIndex).siblings().fadeOut(500);
  //  $(".Img").eq(currentIndex).fadeIn(500);
   
  // },3000);

  //slider
  var slideCount =$(".Img").length;
  var currentIndex = 0;
  var slidePosition;

  setInterval(function(){
    if(currentIndex < slideCount -1){
      currentIndex++;
    }else{
      currentIndex = 0;
    }
    slidePosition = currentIndex * (-100) + "%";
    $(".slider").animate({left:slidePosition},400);
  },3000);

  //media screen 480 nav
  $(".menuBtn").click(function(){
    $(this).toggleClass("active");
  });
  $(".menuBtn").click(function(){
    $("nav >ul").toggleClass("active");
  });




  //div 위치변경
  // if (matchMedia("screen and (min-width: 480px)").matches) {
  // } else {
  //   $(".divChangeImg").insertAfter(".divChangeText");
  // }  

    // scrolTop
    $('.topbtn').hide();
    $(window).scroll(function(){
        if($(this).scrollTop() >=500){
            $('.topbtn').fadeIn();
        }else{
            $('.topbtn').fadeOut();

        }
    });
    $('.topbtn').click(function(e){
        e.preventDefault();
        $('html,body').stop().animate({scrollTop:0},500);
    });

    //fadein
    $( '.fadein' ).hide();
    setTimeout(mmm(),1000);
    function mmm(){
    $( '.fadein' ).fadeIn( 2000 );
  }

    // fadein
    function isElementUnderBottom(elem, triggerDiff) {
        const { top } = elem.getBoundingClientRect();
        const { innerHeight } = window;
        return top > innerHeight + (triggerDiff || 0);
      }
      
      function handleScroll() {
        const elems = document.querySelectorAll('.up-on-scroll');
        elems.forEach(elem => {
          if (isElementUnderBottom(elem, -20)) {
            elem.style.opacity = "0";
            elem.style.transform = 'translateY(70px)';
          } else {
            elem.style.opacity = "1";
            elem.style.transform = 'translateY(0px)';
          }
        })
      }
      
      window.addEventListener('scroll', handleScroll);

    //   슬라이드
    $(window).fadeThis({speed:1000,
      reverse:false});

});