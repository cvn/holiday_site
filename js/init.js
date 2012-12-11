var bgFadeWait = 6000
    ,goLiveCatch = 0
    ,contentLock = 0;

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





function heckNo(){

 /* var events = pop.getTrackEvents();
    if (events.length) {
      for (var e in events) {
      pop.removeTrackEvent(events[e]._id);
      }
    }*/

     pop.cue('first', 1.3, function() {
      bellThrow();
     });

   logger('Trigger Angry Throw');
 // killIntervals();
  //idleTime = 0;
  //pop.pause();
  playAngryThrow();

}

function playAngryThrow(){
  logger('playing Angryness');
  //  bellThrow();
     // pPlay(5.4);
    //  pop.cue(13.4, function(){


      //  playPop();
     // });
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
  logger('I saw this');
  pop.currentTime(13.5).play();
}

jQuery(document).ready(function($) {

  $('.playmovie').on('click',function(){
    $('.splash').fadeOut();
    $('.main').css({visibility:'visible'});
    vimeoController('play');
  });

  $('.skipmovie').on('click',function(){
    $('.splash').fadeOut();
    $('.main').css({visibility:'visible'});
    goLive();
  });

  $('.standardbutton.yes').on('click',function(){
    $this = $(this);
    if ($this.hasClass('active')){
      $('.donateshelf').hide('slide', { direction: 'right' }, 500);
    } else {
      $('.donateshelf').show('slide', { direction: 'right' }, 500);
    }
    $(this).toggleClass('active');
  });

  $('.standardbutton.no').on('click',function(){
    $(this).addClass('active');
    setTimeout(function(){
      $('.standardbutton.no').removeClass('active');
    },5000);
    //pop.play(5.4);
    heckNo();
  });

  $('.standardbutton.questionmark').on('click',function(){

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
      $('.standardbutton.yes').removeClass('active');
      finalTreat();
  });

  $("#CounterZone").flipCounter(
    "startAnimation", // scroll counter from the current number to the specified number
    {
      number: donationInitial, // the number we want to scroll from
      end_number: donationTotal, // the number we want the counter to scroll to
      easing: jQuery.easing.easeOutCubic, // this easing function to apply to the scroll.
      duration: 1000, // number of ms animation should take to complete
      numIntegralDigits:10, // number of places left of the decimal point to maintain
      numFractionalDigits:0, // number of places right of the decimal point to maintain
      //digitClass:"counter-digit", // class of the counter digits
      formatNumberOptions:{format:"0,000,000,000",locale:"us"},
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

  var currentDate = (new Date).getTime()
      ,endDate = 1357027200000  // Jan 1, 2013 12:00AM PST in miliseconds
      ,daysLeft = Math.floor((endDate - currentDate) / 1000 / 60 / 60 / 24);

  $("#countdown").flipCounter(
    {
      number: daysLeft,
      numIntegralDigits:2, // number of places left of the decimal point to maintain
      numFractionalDigits:0, // number of places right of the decimal point to maintain
      digitHeight:68, // the height of each digit in the flipCounter-medium.png sprite image
      digitWidth:44, // the width of each digit in the flipCounter-medium.png sprite image
      imagePath:"images/flip-counter.png", // the path to the sprite image relative to your html document
    }
  );

}); /* end document ready */
