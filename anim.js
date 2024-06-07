var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var slides = document.getElementsByClassName("slide-input");
  for (i = 0; i < slides.length; i++) {
    slides[i].checked = false;
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].checked = true;
  setTimeout(carousel, 2000); // Change slide every 2 seconds
}

function toggleMenu() {
  var menu = document.getElementById('menu');
  menu.classList.toggle('active');
}

// function to open/close nav
function toggleNav(){
  // if nav is open, close it
  if($("nav").is(":visible")){
    $("nav").fadeOut();
    $("button").removeClass("menu");
  }
  // if nav is closed, open it
  else{
    $("button").addClass("menu");
    $("nav").fadeIn().css('display', 'flex');
  }
}

// when clicking + or ☰ button
$("button").click(function(){
  // when clicking ☰ button, open nav
  if($("header").hasClass("open")){
    toggleNav();
  }
  // when clicking + button, open header
  else{
    $("header").addClass("open");
  }
});

// close nav
$("#nav-close").click(function(){
  toggleNav();
});

// scroll to sections
$("nav li").click(function(){
  // get index of clicked li and select according section
  var index = $(this).index();
  var target = $("content section").eq(index);
  
  toggleNav();
  
  $('html,body').delay(300).animate({
    scrollTop: target.offset().top
  }, 500);
});