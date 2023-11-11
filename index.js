
var whereAreWe="25:00";
var isTimerRunning = false;
var countdownInterval;

function text(time){
  return $(".timer h1").text(time);
}
function styleBut(rgb){
  $("body").css("background-color",rgb);
  $(".start-button h1").css("color",rgb);
  $("body").css("transition","background-color 0.5s ease-in-out 0s");
}

$(".pomo h3").click(function(){
  whereAreWe=text("25:00");
  whereAreWe=whereAreWe.text();
  styleBut("rgb(186, 73, 73)");
  
  
  
})

$(".short h3").click(function(){
  whereAreWe=text("5:00");
  whereAreWe=whereAreWe.text();
  styleBut("rgb(56, 133, 138)")
  
})

$(".long h3").click(function(){
  whereAreWe=text("15:00");
  whereAreWe=whereAreWe.text();
  styleBut("rgb(57, 112, 151)");
  
})




$(".start-button").click(function(){
  
  if (!isTimerRunning) {
    var timerValue = whereAreWe.split(':');
    var minutes = parseInt(timerValue[0]);
    var seconds = parseInt(timerValue[1]);

    countdownInterval = setInterval(function(){
      if (seconds === 0) {
          if (minutes === 0) {
              clearInterval(countdownInterval);
              isTimerRunning = false;
              alert("Time's up!");
          } else {
              minutes--;
              seconds = 59;
          }
      } else {
          seconds--;
      }

      var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
      var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

      $(".timer h1").text(formattedMinutes + ":" + formattedSeconds);
    }, 1000);

    isTimerRunning = true;
    $(".start-button h1").text("Pause");
  } else {
    clearInterval(countdownInterval);
    isTimerRunning = false;
    $(".start-button h1").text("Start");
  }
  
})




