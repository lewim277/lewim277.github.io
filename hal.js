$(window).keypress(function(event) {
    console.log(event);
    if(event.keyCode == 114) {
        //user pressed "r"
        $("h1").hide();
    }
    
    
});

$(".lever2").click(function() {
    console.log("off");
  $(".warning").show();
  $(".warning1").hide();
  $(".lever2").hide();
});

$(".lever3").click(function() {
    console.log("off");
  $(".lever2").show();
  $(".lever8").hide();
});

$(".lever4").click(function() {
    console.log("off1");
    $(".eye2").show();
    $(".lever4").hide();
    $(".eye").hide();
});

$(".lever5").click(function() {
    console.log("off1");
    $(".eye3").show();
    $(".lever5").hide();
    $(".eye2").hide();
});

$(".lever6").click(function() {
    console.log("off1");
    $(".lever5").show();
    $(".lever6").hide();
});

$(".lever7").click(function() {
    console.log("off1");
    $(".lever6").show();
    $(".lever2").hide();
});

$(".lever8").click(function() {
    console.log("off1");
    $(".lever10").hide();
    $(".leve8").hide();
});

$(".lever1").click(function() {
    console.log("off1");
    $(".lever9").hide();
    $(".leve1").hide();
});

$(".lever10").click(function() {
    console.log("off2");
    $(".lever10").hide();
    $(".leve9").show();
});

$(".lever9").click(function() {
    console.log("off1");
    window.location.href="art2.html";
});

setTimeout(function(){ 
     var audio = new Audio('hal.mp3');
        audio.play();
     }, 10);