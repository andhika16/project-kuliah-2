$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $("nav").addClass("md:bg-gradient-to-r from-green-500 to-green-700");  	
            $("nav").removeClass("md:opacity-100");  	
        }
        else {
            $("nav").removeClass("md:bg-gradient-to-r from-green-500 to-green-700");  	
            $("nav").addClass("md:opacity-100");
        }
    })
})




//   $(document).ready(function(){       
//     var scroll_start = 0;
//     var startchange = $('#startchange');
//     var offset = startchange.offset();
//      if (startchange.length){
//     $(document).scroll(function() { 
//        scroll_start = $(this).scrollTop();
//        if(scroll_start > offset.top) {
//            $("nav").addClass('bg-gradient-to-r from-green-500 to-green-800');
//         } else {
//             $("nav").addClass("opacity-100");
//         }
//     });
//      }
//  });

// var myNav = document.querySelector('.nav');
// window.onscroll = function () { 
//     "use strict";
//     if (document.body.scrollTop >= 200 ) {
//         // myNav.classList.add("bg-gradient-to-r from-green-500 to-green-800");
//         myNav.classList.add("opacity-100");
//     } 
//     else {
//         myNav.classList.add("bg-gradient-to-r from-green-500 to-green-800");
//         // myNav.classList.remove("opacity-100");
//     }
// };


const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});    


