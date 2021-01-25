$(document).ready(function() {

        var my_div = $(".show_hide");
        var div_top = my_div.offset().top;

        $(document).scroll(function() {
            if (div_top <= $(document).scrollTop()) {
                $('.show_hide').show(3000);
            }
        });

    });


// PERSONA SLIDESHOW JS
$(function() {
  let currentslidenumber = 0;
   $(".slideshow-captions-all div").eq(0).show().siblings().hide();

  $(".arrow-next").on('click', function() {
    currentslidenumber++;
    console.log(currentslidenumber);
    if(currentslidenumber>3) {
      currentslidenumber=0;
    }
    showSlide();
  });
  $(".arrow-prev").on('click', function() {
    currentslidenumber--;
    if (currentslidenumber<0) {
      currentslidenumber=3;
    }
    showSlide();
  });

  function showSlide() {
    let calculation=-846*currentslidenumber;
    $(".slideshow-images").animate({marginLeft:calculation},1000);
     $(".slideshow-captions-all div").eq(currentslidenumber).show().siblings().hide();
  };
});


// TABS JS


$(document).ready(function() {
  $("article:first").show().siblings().hide();



        $(".tabs li").on("click", function() {
          // $(this) is the current thing the event happened to
          let i = $(this).index();
          // Getting the index allows you to make applications
          // that don't need each element to have a unique name
          // consolve.log("index " +i)

          $("article").eq(i).show().siblings().hide();
          $(this).addClass("active").siblings().removeClass("active");
        });
});

// MID-FID PROTOTYPE SLIDESHOW JS
$(function() {
  let currentslidenumber = 0;
   $(".prototype-slideshow-captions-all div").eq(0).show().siblings().hide();

  $(".prototype-arrow-next").on('click', function() {
    currentslidenumber++;
    console.log(currentslidenumber);
    if(currentslidenumber>2) {
      currentslidenumber=0;
    }
    showSlide();
  });
  $(".prototype-arrow-prev").on('click', function() {
    currentslidenumber--;
    if (currentslidenumber<0) {
      currentslidenumber=2;
    }
    showSlide();
  });

  function showSlide() {
    let calculation=-850*currentslidenumber;
    $(".prototype-slideshow-images").animate({marginLeft:calculation},1000);
     $(".prototype-slideshow-captions-all div").eq(currentslidenumber).show().siblings().hide();
  };
});


// HIGH-FID PROTOTYPE SLIDESHOW JS
$(function() {
  let currentslidenumber = 0;
   $(".high-fid-prototype-slideshow-captions-all div").eq(0).show().siblings().hide();

  $(".prototype-arrow-next").on('click', function() {
    currentslidenumber++;
    console.log(currentslidenumber);
    if(currentslidenumber>2) {
      currentslidenumber=0;
    }
    showSlide();
  });
  $(".prototype-arrow-prev").on('click', function() {
    currentslidenumber--;
    if (currentslidenumber<0) {
      currentslidenumber=2;
    }
    showSlide();
  });

  function showSlide() {
    let calculation=-850*currentslidenumber;
    $(".prototype-slideshow-images").animate({marginLeft:calculation},1000);
     $(".high-fid-prototype-slideshow-captions-all div").eq(currentslidenumber).show().siblings().hide();
  };
});


// SIDEBAR JS
// $(function() {
//   var offset = $("#sidebar").offset();
//   var topPadding = 15;
//   $(window).scroll(function() {
//     if ($(window).scrollTop() > offset.top) {
//       $("#sidebar").stop().animate({
//         marginTop: $(window).scrollTop() - offset.top + topPadding
//       });

//     } else {
//       $("#sidebar").stop().animate({
//         marginTop: 0
//       });
//     };
//   });
// });

