$(document).ready(function() {
    $(window).scroll(function() {
        if($(window).scrollTop() > 10) {
          $(".menubarwhite").css({"background-color":"#ffffff"});
          $(".menubarwhite a").css({"color":"#06b9ba"});
          document.getElementById("logowhite").src = "images/logogreen.png";
        }
        else {
          $(".menubarwhite").css({"background-color":"transparent"});
          $(".menubarwhite a").css({"color":"#ffffff"});
          document.getElementById("logowhite").src = "images/logowhite.png";
        }
    });
});