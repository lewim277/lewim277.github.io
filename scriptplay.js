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

$(".lever4").click(function() {
    console.log("off1");
    $(".eye2").show();
    $(".lever4").hide();
    $(".eye").hide();
});