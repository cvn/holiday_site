var bgFadeWait = 3000
    ,goLiveCatch = 0
    ,contentLock = 0;

var readyHeck = 0;

function heckNo(){

    pop.removeTrackEvent('first');

  secondFade = 1;

  //if(readyHeck== 1){

  //pop.cue('first', 1.3, function() {
    bellThrow();
 // });


  logger('Trigger Angry Throw');

/*} else {
          setTimeout(function(){
            heckNo();
          }, 10);
      }*/
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

function bgMatteOut(inSpeed){
 // $('#htmlvideo').css({ opacity: 1, visibility: "visible"}).animate({opacity: 0}, inSpeed-500).fadeIn(inSpeed-500);
  //containerFadeIn(inSpeed);
  setTimeout(function() {
     $('.mattePainting').fadeOut(inSpeed+3000);
  }, bgFadeWait);
}

function playDropped(){
  logger('I saw this');
  pop.currentTime(13.5).play();
}

// Plaque button handling

var plaqueButtonsDisabled = 0;

function plaqueRouter($button,visibleShelf){
  var targetShelf = $button.data('link');
  if (visibleShelf == targetShelf) return plaqueButtonsDisabled = 0;

  switch (targetShelf) {
    case 'donate':
      if(donated == 0){
      shelfExtend(targetShelf);
      }else{
        finalTreat();
      }
      break;
    case 'nodonate':
      heckNo();
      break;
    case 'info':
      shelfExtend(targetShelf);
      break;
  }
}

function shelfRetract(shelf,callback){
  //accepts names as strings or jQuery objects
  if (!(shelf instanceof jQuery)){
    shelf = $('.'+shelf+'shelf');
  }
  shelf.hide('slide', { direction: 'right' }, 500, callback);
}

function shelfExtend(shelf){
  //accepts names as strings or jQuery objects
  if (!(shelf instanceof jQuery)){
    shelf = $('.'+shelf+'shelf');
  }
  shelf.show('slide', { direction: 'right' }, 500,function(){
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
  $('.splash').hide();
  $(targetSelector).show();
  $('.video-container').removeClass('shy');
}



// Audio

var soundbedVolume = 1;
var popVol = 0;

function animVol(fadeSpeed){
   // if(vertz == true){
if(autoPause==1){
        if($('.mutebutton').hasClass('muted')){
          pop.volume(0);
        } else {
          if (popVol <= 1){ 
                setTimeout(function(){popVol = popVol + .1; animVol();}, fadeSpeed);
            } else {  popVol = 1;}
             logger(popVol);
        pop.volume(popVol);
        // return popVol;
      }
  }

        }

  function fadeDown(fadeSpeed){

     if (popVol >= 0){ 
           setTimeout(function(){popVol = popVol - .1; fadeDown();}, fadeSpeed);
       } else{  popVol = 0;}

      // audioFadeOut();

      pop.volume(popVol);

  }


var DualFadeIn = function(){
  $obj = $('#soundbed');
  $obj[0].volume = 0;
 if($('.mutebutton').hasClass('muted')){
   
    } else {
       if(autoPause==1){
          $obj.trigger('play');
          animVol(500, true);
          $obj.animate({volume: soundbedVolume}, 1000);
        }
    }
}

function audioReset(){
  fadeDown(500);
  $obj = $('#soundbed');
 // $obj[0].volume = 0;
   $obj.animate({volume: 0}, 1000, function(){
    $obj.trigger('pause');
     pop.pause();
  });   

}

var audioFadeIn = function($obj){
  $obj[0].volume = 0;
  $obj.trigger('play');
  $obj.animate({volume: soundbedVolume}, 1000);
}
var audioFadeOut = function($obj){
  $obj.animate({volume: 0}, 1000, function(){
    $obj.trigger('pause');
  });     
}

$(document).ready(function(){
  $('.play').on('click',function(event){
    event.preventDefault();
    var $audioObj = $($(this).attr('rel')).eq(0);
    audioFadeIn($audioObj);
  });
  $('.stop').on('click',function(event){
    event.preventDefault();
    var $audioObj = $($(this).attr('rel')).eq(0);
    audioFadeOut($audioObj);
  });

  $('.mutebutton').on('click',function(event){
    event.preventDefault();
    $('.mutebutton').toggleClass('muted');
    if($('.mutebutton').hasClass('muted')){
       popVol = 1;
    $obj = $('#soundbed');
    fadeDown(500);
      $obj = $('#soundbed');
       audioFadeOut($obj);  
    }else{
       popVol = 0;
       animVol(1000);
        DualFadeIn();
    }
  });
});


function replayVim(){
logger('im in vim');
if(vimeoHasPlayed == 0){
$('.vimeo-container').html(vimeoIframe);
    splashOutVidIn('#player_1');
    vimeoPlayer = $('#player_1');
    vimeoUrl = vimeoPlayer.attr('src').split('?')[0];


  $('#player_1').show();
  vimeoController('seekTo', 0);
  vimeoController('play');
  $('.blackout-interactive').show();
 bgMatteOut(500);

 $('.donatebox').fadeOut();
 $('.final-share').fadeOut();

  $('#htmlvideo').hide();
  $('.skipmovie').show();
  $('.replay').fadeOut();
  $('.mutebutton').fadeOut();
  audioReset();


  } else {


  $('#player_1').show();
  vimeoController('seekTo', 0);
  vimeoController('play');
  $('.blackout-interactive').show();
 bgMatteOut(500);

 $('.donatebox').fadeOut();
 $('.final-share').fadeOut();

  $('#htmlvideo').hide();
  $('.skipmovie').show();
  $('.replay').fadeOut();
  $('.mutebutton').fadeOut();
  audioReset();




  }

   setTimeout(function(){
     $('.footer-trouble').fadeIn();



      $('.header-share').fadeIn();
    }, 2000);


}
// Doc ready

jQuery(document).ready(function($) {

  $('.playmovie').on('click',function(){
    $('.vimeo-container').html(vimeoIframe);
    splashOutVidIn('#player_1');
    vimeoPlayer = $('#player_1');
    vimeoUrl = vimeoPlayer.attr('src').split('?')[0];
    setTimeout(function(){
     $('.footer-trouble').fadeIn();



      $('.header-share').fadeIn();
    }, 2000);
  });

  $('.skipmovie').on('click',function(){
    if(vimeoHasPlayed) {
      vimeoController('pause');
    }
    $('.blackout-interactive').addClass('loading');
    splashOutVidIn('#htmlvideo');
    goLive();
  });

 $('.splash-skipmovie').on('click',function(){
    if(vimeoHasPlayed) {
      vimeoController('pause');
    }
    $('.blackout-interactive').addClass('loading');
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
      shelfRetract($visibleShelf,function(){
        plaqueRouter($button,visibleShelfName);
      });
    } else {
      plaqueRouter($button,visibleShelfName);
    }
  });

  $('.closebutton').on('click',function(){
    shelfRetract($(this).closest('.shelf'));
    deselectButtons();
  });

  $('.sharebutton.facebook').on('click',function(){
    window.open("http://www.facebook.com/sharer/sharer.php?u=https://weareroyale.com/thebellringer","_blank", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=yes, top=300, left=400, width=400, height=400");
  });
  $('.sharebutton.twitter').on('click',function(){

    window.open("http://twitter.com/share?text=Watch%20Royale's%20latest%20animated%20short%20%22The%20Bell%20Ringer%22%20and%20help%20those%20affected%20by%20Hurricane%20Sandy.%20%23weareroyale.%20&url=https://weareroyale.com/thebellringer","_blank", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=yes, left=300, top=300, width=500, height=500");
  });
  $('.sharebutton.mail').on('click',function(){
    window.open("emailShare.php","_blank", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=yes, left=100, top=100, width=550, height=700");
  });

  $('.sharebutton.embed').on('click',function(){
    window.open("embed.php","_blank", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=yes, left=100, top=100, width=550, height=700");
  });

  $('.replay').on('click',function(){
        replayVim();
  });


}); /* end document ready */
