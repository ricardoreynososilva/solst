(function ($) {
    "use strict";
  
    //Page cursors
  
    document
      .getElementsByTagName("body")[0]
      .addEventListener("mousemove", function (n) {
        (t.style.left = n.clientX + "px"),
          (t.style.top = n.clientY + "px"),
          (e.style.left = n.clientX + "px"),
          (e.style.top = n.clientY + "px"),
          (i.style.left = n.clientX + "px"),
          (i.style.top = n.clientY + "px");
      });
    var t = document.getElementById("cursor"),
      e = document.getElementById("cursor2"),
      i = document.getElementById("cursor3");
    function n(t) {
      e.classList.add("hover"), i.classList.add("hover");
    }
    function s(t) {
      e.classList.remove("hover"), i.classList.remove("hover");
    }
    s();
    for (
      var r = document.querySelectorAll(".hover-target"), a = r.length - 1;
      a >= 0;
      a--
    ) {
      o(r[a]);
    }
    function o(t) {
      t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
    }
  
    //Navigation
  
    var app = (function () {
      var body = undefined;
      var menu = undefined;
      var menuItems = undefined;
      var init = function init() {
        body = document.querySelector("body");
        menu = document.querySelector(".menu-icon");
        menuItems = document.querySelectorAll(".nav__list-item");
        applyListeners();
      };
      var applyListeners = function applyListeners() {
        menu.addEventListener("click", function () {
          return toggleClass(body, "nav-active");
        });
      };
      var toggleClass = function toggleClass(element, stringClass) {
        if (element.classList.contains(stringClass))
          element.classList.remove(stringClass);
        else element.classList.add(stringClass);
      };
      init();
    })();
  
    //Switch light/dark
  
    $("#switch").on("click", function () {
      if ($("body").hasClass("light")) {
        $("body").removeClass("light");
        $("#switch").removeClass("switched");
      } else {
        $("body").addClass("light");
        $("#switch").addClass("switched");
      }
    });
  })(jQuery);

  /**3d */

 // I hope this over-commenting helps. Let's do this!
// Let's use the 'active' variable to let us know when we're using it
let active = false;

// First we'll have to set up our event listeners
// We want to watch for clicks on our scroller
document.querySelector('.scroller').addEventListener('mousedown',function(){
  active = true;
  // Add our scrolling class so the scroller has full opacity while active
  document.querySelector('.scroller').classList.add('scrolling');
});
// We also want to watch the body for changes to the state,
// like moving around and releasing the click
// so let's set up our event listeners
document.body.addEventListener('mouseup',function(){
  active = false;
  document.querySelector('.scroller').classList.remove('scrolling');
});
document.body.addEventListener('mouseleave',function(){
  active = false;
  document.querySelector('.scroller').classList.remove('scrolling');
});

// Let's figure out where their mouse is at
document.body.addEventListener('mousemove',function(e){
  if (!active) return;
  // Their mouse is here...
  let x = e.pageX;
  // but we want it relative to our wrapper
  x -= document.querySelector('.wrapper').getBoundingClientRect().left;
  // Okay let's change our state
  scrollIt(x);
});

// Let's use this function
function scrollIt(x){
    let transform = Math.max(0,(Math.min(x,document.querySelector('.wrapper').offsetWidth)));
    document.querySelector('.after').style.width = transform+"px";
    document.querySelector('.scroller').style.left = transform-25+"px";
}

// Let's set our opening state based off the width, 
// we want to show a bit of both images so the user can see what's going on
scrollIt(150);

// And finally let's repeat the process for touch events
// first our middle scroller...
document.querySelector('.scroller').addEventListener('touchstart',function(){
  active = true;
  document.querySelector('.scroller').classList.add('scrolling');
});
document.body.addEventListener('touchend',function(){
  active = false;
  document.querySelector('.scroller').classList.remove('scrolling');
});
document.body.addEventListener('touchcancel',function(){
  active = false;
  document.querySelector('.scroller').classList.remove('scrolling');
});

  /***fin */

  /**preload*/

  // ==== Preloader

  window.onload = function () {
    window.setTimeout(fadeout, 1800);
  };

  function fadeout() {
    document.querySelector("#contenedor").style.opacity = "0";
    document.querySelector("#contenedor").style.display = "none";
  }

  /*fin*/

  


  