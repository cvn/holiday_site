var bgFadeWait = 3000
    ,goLiveCatch = 0
    ,contentLock = 0;

// this identifies your website in the createToken call below
Stripe.setPublishableKey('pk_test_Vt3bh8kq7E1FRWhk8Id61GZ8');

function resetForm($form){
    $form.find('.submit-button').removeAttr("disabled");
    $form[0].reset();
}

function stripeResponseHandler(status, response) {
    if (response.error) {
        // re-enable the submit button
        $('.submit-button').removeAttr("disabled");
        // show the errors on the form
        $("#payment-form .payment-errors").html(response.error.message).effect('highlight');
    } else {
        var form$ = $("#payment-form");
        // token contains id, last4, and card type
        var token = response['id'];
        // insert the token into the form so it gets submitted to the server
        form$.append("<input type='hidden' name='stripeToken' value='" + token + "' />");
        // and submit
        // form$.get(0).submit();
        donateFormSubmit(form$);
    }
}

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
      imagePath:"images/flip-counter.png", // the path to the sprite image relative to your html document
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

function donateFormSubmit($form){
  $.post('services/add-donation.php', $form.serialize(), function(data){
    var responseObj = $.parseJSON(data);
    var newTotal = responseObj.total;
    updateCounter($("#CounterZone"), newTotal);
    $('.donateshelf').hide('slide', { direction: 'right' }, 500);
    $('.plaquebutton.donate').removeClass('active');
    resetForm($form);
    finalTreat();
  });
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


function heckNo(){
  secondFade = 1;
  pop.cue('first', 1.3, function() {
    bellThrow();
  });
  logger('Trigger Angry Throw');
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

// Plaque button handling

var plaqueButtonsDisabled = 1;

function plaqueRouter($button,visibleShelf){
  var targetShelf = $button.data('link');
  if (visibleShelf == targetShelf) return plaqueButtonsDisabled = 0;

  switch (targetShelf) {
    case 'donate':
      shelfExtend($button,targetShelf);
      break;
    case 'nodonate':
      heckNo();
      break;
    case 'info':
      shelfExtend($button,targetShelf);
      break;
  }
}

function shelfExtend($button,shelfName){
    $('.'+shelfName+'shelf').show('slide', { direction: 'right' }, 500,function(){
      plaqueButtonsDisabled = 0;
    });
}

function deselectButtons(reenable) {
  $('.plaquebutton').each(function(){
    console.log(this);
    $(this).removeClass('active');
  });
  if(reenable){
    plaqueButtonsDisabled = 0;
  }
}


// Video initialization

function splashOutVidIn(targetSelector) {
  $('.splash').fadeOut();
  $(targetSelector).show();
  $('.video-container').removeClass('shy');
}


// Doc ready

jQuery(document).ready(function($) {

  $('.playmovie').on('click',function(){
    splashOutVidIn('#player_1');
    vimeoController('play');
  });

  $('.skipmovie').on('click',function(){
    if(vimeoHasPlayed) {
      vimeoController('pause');
    }
    splashOutVidIn('#htmlvideo');
    goLive();
  });


  $('.plaquebutton').on('click',function(){
    if (plaqueButtonsDisabled == 1) return false;
    plaqueButtonsDisabled = 1;
    var $button = $(this);

    $(this).toggleClass('active');

    var $visibleShelf = $('.shelf:visible');
    var visibleShelfName = $visibleShelf.data('link');

    if($visibleShelf.length){
      var buttonName = $visibleShelf.data('link');
      $('.plaquebutton.'+buttonName).removeClass('active');
      $visibleShelf.hide('slide', { direction: 'right' }, 500,function(){
        plaqueRouter($button,visibleShelfName);
      });
    } else {
      plaqueRouter($button,visibleShelfName);
    }
  });

  $('.closebutton').on('click',function(){
    $(this).closest('.shelf').hide('slide', { direction: 'right' }, 500);
    deselectButtons();
  });

  $('.sharebutton.facebook').on('click',function(){
    window.open("http://www.facebook.com/sharer/sharer.php?u=http://holiday.weareroyale.com","_blank", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=yes, top=300, left=400, width=400, height=400");
  });
  $('.sharebutton.twitter').on('click',function(){
    window.open("http://twitter.com/share?text=Royale%20Presents%20The%20Bell%20Ringer%20Happy%20Holidays%20&url=http://holiday.weareroyale.com","_blank", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=yes, left=300, top=300, width=500, height=500");
  });
  $('.sharebutton.mail').on('click',function(){
    window.open("emailShare.php","_blank", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=yes, left=100, top=100, width=550, height=700");
  });

  // Set up the counter
  // donationInitial and donationTotal are set by PHP
  initCounter($("#CounterZone"), donationInitial, donationTotal);

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
      imagePath:"images/flip-counter-red.png", // the path to the sprite image relative to your html document
    }
  );

  $('.amount-other').on('focus',function(){
    $('#amount-custom').prop('checked',true);
  });

  $("#payment-form").submit(function(event) {
      // disable the submit button to prevent repeated clicks
      $('.submit-button').attr("disabled", "disabled");
      // createToken returns immediately - the supplied callback submits the form if there are no errors
      var $form = $(this);
      Stripe.createToken({
          name: $form.find('.card-name').val(),
          number: $form.find('.card-number').val(),
          cvc: $form.find('.card-cvc').val(),
          exp_month: $form.find('.card-expiry-month').val(),
          exp_year: $form.find('.card-expiry-year').val()
      }, stripeResponseHandler);
      return false; // submit from callback
  });

  var creditCard = $('.card-number')
  creditCard.cardcheck({
    iconDir: '/images/cc-icons/',
    acceptedCards: ['visa','mastercard','amex', 'discover', 'jcb'],
    iconLocation: '#accepted-cards-images',
    onReset: function() {     
      creditCard.removeClass('error success');
    },
    onError: function( type ) {
      creditCard.removeClass('success').addClass('error');
    },
    onValidation: function( type, niceName ) {
      creditCard.removeClass('error').addClass('success');
    },
  });

}); /* end document ready */
