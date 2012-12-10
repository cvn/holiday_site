var bgFadeWait = 6000;
var goLiveCatch = 0;
var contentLock = 0;

function donateFormSubmit(){
  $.post('services/add-donation.php', {amount: 5}, function(data){
    var updatedz = $.parseJSON(data);
    var updatedTotalz = updatedz.total;
    var oldTotalz = $("#CounterZone").flipCounter("getNumber");
    $("#CounterZone").flipCounter(
      "startAnimation", // scroll counter from the current number to the specified number
      { 
        number: oldTotalz, // the number we want to scroll from
        end_number: updatedTotalz, // the number we want the counter to scroll to
        // easing: jQuery.easing.easeOutCubic, // this easing function to apply to the scroll.
        // duration: 1500, // number of ms animation should take to complete
        counterFieldName:"counter-value", // name of the hidden field
      }
    );
  });
}

function finalTreat(){
  console.log('Trigger Final Animation finalTreat');
  killIntervals();
  idleTime = 0;
  pop.pause();
  playMoneyDrop();
  console.log('im playing treat maybe?');
  pop.cue(18.79, function(){
    //  playPop();
  });
  $('.credFormz').toggle(1000);
}

function containerFadeOut(outSpeed){
  $('.container').fadeOut(outSpeed);
  containerFadeIn(6000);
}

function containerFadeIn(inSpeed){
  $('.container').fadeIn(inSpeed);
}

function bgMatte(inSpeed){
  $('#htmlvideo').css({ opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0}, inSpeed-500).fadeIn(inSpeed-500);
  //containerFadeIn(inSpeed);
  setTimeout(function() {
     $('.mattePainting').fadeIn(inSpeed+3000);
  }, bgFadeWait);
}

function playDropped(){
  console.log('I saw this');
  pop.currentTime(13.5).play();
}

jQuery(document).ready(function($) {

  $('.donatebutton.playmovie').on('click',function(){
    $(this).toggleClass('active');
    $('.firstbox').fadeOut();
    vimeoController('play');
  });

  $('.donatebutton.skipmovie').on('click',function(){
    $(this).toggleClass('active');
    $('.firstbox').fadeOut();
    goLive();
  });

  $('.donatebutton.yes').on('click',function(){
    $this = $(this);
    if ($this.hasClass('active')){
      $('.donateshelf').hide('slide', { direction: 'right' }, 500);
    } else {
      $('.donateshelf').show('slide', { direction: 'right' }, 500);
    }
    $(this).toggleClass('active');
  });

  $('.donatebutton.no').on('click',function(){
    $(this).addClass('active');
    setTimeout(function(){
      $('.donatebutton.no').removeClass('active');
    },5000);
    pop.play(5.4);
  });

  $('.donatebutton.questionmark').on('click',function(){

  });

  $('.sharebutton.facebook').on('click',function(){
    window.open("http://www.facebook.com/sharer/sharer.php?u=http://holiday.weareroyale.com","_blank", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=yes, top=300, left=400, width=400, height=400");
  });
  $('.sharebutton.twitter').on('click',function(){
    window.open("http://twitter.com/share?text=Royale%20Presents%20The%20Bell%20Ringer%20Happy%20Holidays%20&url=http://holiday.weareroyale.com","_blank", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=yes, left=300, top=300, width=500, height=500");
  });
  $('.sharebutton.mail').on('click',function(){
    window.open("emailShare.php","_blank", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=yes, left=300, top=300, width=500, height=500");
  });

  $('.shelf-submit').on('click',function(){
      $('.donateshelf').hide('slide', { direction: 'right' }, 500);
      $('.donatebutton.yes').removeClass('active');
      finalTreat();
  });

  $("#CounterZone").flipCounter(
    "startAnimation", // scroll counter from the current number to the specified number
    {
      number: donationInitial, // the number we want to scroll from
      end_number: donationTotal, // the number we want the counter to scroll to
      easing: jQuery.easing.easeOutCubic, // this easing function to apply to the scroll.
      duration: 1000, // number of ms animation should take to complete
      numIntegralDigits:1, // number of places left of the decimal point to maintain
      numFractionalDigits:0, // number of places right of the decimal point to maintain
      //digitClass:"counter-digit", // class of the counter digits
      formatNumberOptions:{format:"#,##0",locale:"us"},
      digitHeight:68, // the height of each digit in the flipCounter-medium.png sprite image
      digitWidth:44, // the width of each digit in the flipCounter-medium.png sprite image
      imagePath:"images/flip-counter.png", // the path to the sprite image relative to your html document
      easing: false, // the easing function to apply to animations, you can override this with a jQuery.easing method
      // duration:20000, // duration of animations
      onAnimationStarted:false, // call back for animation upon starting
      onAnimationStopped:false, // call back for animation upon stopping
      onAnimationPaused:false, // call back for animation upon pausing
      onAnimationResumed:false // call back for animation upon resuming from pause
    }
  );

}); /* end document ready */
