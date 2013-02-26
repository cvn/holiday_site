function initCounter($counterElement, startTotal, endTotal) {
  centerFooter(donationTotal);
  $counterElement.flipCounter(
    "startAnimation", // scroll counter from the current number to the specified number
    {
      number: startTotal, // the number we want to scroll from
      end_number: endTotal, // the number we want the counter to scroll to
      // easing: jQuery.easing.easeOutCubic, // this easing function to apply to the scroll.
      duration: 1000, // number of ms animation should take to complete
      numIntegralDigits:1, // number of places left of the decimal point to maintain
      numFractionalDigits:0, // number of places right of the decimal point to maintain
      //digitClass:"counter-digit", // class of the counter digits
      formatNumberOptions:{format:"#,##0",locale:"us"},
      digitHeight:68, // the height of each digit in the flipCounter-medium.png sprite image
      digitWidth:44, // the width of each digit in the flipCounter-medium.png sprite image
      imagePath:"/thebellringer/images/flip-counter.png", // the path to the sprite image relative to your html document
      // duration:20000, // duration of animations
      // onAnimationStarted:false, // call back for animation upon starting
      // onAnimationStopped:false, // call back for animation upon stopping
      // onAnimationPaused:false, // call back for animation upon pausing
      // onAnimationResumed:false // call back for animation upon resuming from pause
    }
  );
}

function updateCounter($counterElement, endTotal){
    var startTotal = $("#CounterZone").flipCounter("getNumber");
    centerFooter(endTotal);
    $counterElement.flipCounter(
      "startAnimation", // scroll counter from the current number to the specified number
      { 
        number: startTotal, // the number we want to scroll from
        end_number: endTotal, // the number we want the counter to scroll to
      }
    );
}

function centerFooter(donationValue){
  // var width = $('#CounterZone').css('width');
  if ($.formatNumber) {
    var str_number = $.formatNumber(donationValue, {format:"#,##0",locale:"us"});
  } else {
    return(console.log('The numberformatter jQuery plugin is not loaded. This plugin is required to use the formatNumberOptions setting.'));
  }
  var numDigits = str_number.length;
  var counterDigitWidth = 44;
  var counterWidth = numDigits * counterDigitWidth;
  $('.footer-left').css({width:counterWidth});
}


$(document).ready(function(){

  // Set up the counter
  // donationInitial and donationTotal are set by PHP
  initCounter($("#CounterZone"), donationInitial, donationTotal);

  var currentDate = (new Date).getTime()
      ,endDate = 1357981200000  // Jan 12, 2013 1:00AM PST in miliseconds - epochconverter.com
      ,daysLeft = Math.floor((endDate - currentDate) / 1000 / 60 / 60 / 24);

  $("#countdown").flipCounter(
    {
      number: 0,
      numIntegralDigits:2, // number of places left of the decimal point to maintain
      numFractionalDigits:0, // number of places right of the decimal point to maintain
      digitHeight:68, // the height of each digit in the flipCounter-medium.png sprite image
      digitWidth:44, // the width of each digit in the flipCounter-medium.png sprite image
      imagePath:"/thebellringer/images/flip-counter-red.png", // the path to the sprite image relative to your html document
    }
  );

});