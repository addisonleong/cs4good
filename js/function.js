$(".menubarwhite a").css({"color":"#ffffff"});
$(".menubarwhite").css({"background-color":"transparent"});
$(".menubargreen a").css({"color":"#06b9ba"});
$(".menubargreen").css({"background-color":"transparent"});

$(document).ready(function() {
    $(window).scroll(function() {
        if($(window).scrollTop() > 10) {
          if ($(".menubarwhite")[0]) {
            $(".menubarwhite").css({"background-color":"#ffffff"});
            $(".menubarwhite a").css({"color":"#06b9ba"});
            $(".menubarwhite a").css({"border-color":"#06b9ba"});
            document.getElementById("logowhite").src = "images/logogreen.png";
          }
          else if ($(".menubargreen")[0]) {
            $(".menubargreen").css({"background-color":"#000000"});
            $(".menubargreen a").css({"color":"#ffffff"});
            $(".menubargreen a").css({"border-color":"#ffffff"});
            document.getElementById("logogreen").src = "images/logowhite.png";
          }
        }
        else {
          if ($(".menubarwhite")[0]) {
            $(".menubarwhite").css({"background-color":"transparent"});
            $(".menubarwhite a").css({"color":"#ffffff"});
            $(".menubarwhite a").css({"border-color":"#ffffff"});
            document.getElementById("logowhite").src = "images/logowhite.png";
          }
          else if ($(".menubargreen")[0]) {
            $(".menubargreen").css({"background-color":"transparent"});
            $(".menubargreen a").css({"color":"#06b9ba"});
            $(".menubargreen a").css({"border-color":"#06b9ba"});
            document.getElementById("logogreen").src = "images/logogreen.png";
          }
        }
    });
});