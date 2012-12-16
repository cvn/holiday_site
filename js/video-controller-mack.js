// var events = popcornObj.getTrackEvents();
// if (events.length) {
//   for (var e in events) {
//     popcornObj.removeTrackEvent(events[e]._id);
//   }
// }

var debug = 1;
var autoPause = 0;

function logger(stuff){
  if(debug){
    console.log(stuff);
  }
}

function pPlay(playPoint){

  //pop.pause();

   pop.currentTime(playPoint);

   if(exitCatch == 0){

      pop.cue(13.9, function(){ logger('Exit Catch');});
      exitCatch = 1;

   }

   pop.play();

  

}

function pPause(){
     pop.pause();
}

/*function pClear(){
  var events = pop.getTrackEvents();
    if (events.length) {
      for (var e in events) {
      pop.removeTrackEvent(events[e]._id);
      }
    }
    pop.cue(1.3, function(){

      loopTrigger(0);
    });

    pop.cue(13.5, function(){

      loopTrigger(0);
    });
   // setTimeout(function(){loopTrigger(0)}, 200);

}
*/


var secondFade = 1;
var stopExit = 0;
var readyToAnimate = 0;

     var intervalArr = new Array();
        function intervalOne () { console.log ('foo');};
        function intervalTwo () { console.log ('bar');};

        function killIntervals(){
            while(intervalArr.length > 0)
            clearInterval(intervalArr.pop());
        };
 


     




    var loopFrom = 1;
    

    function playPop(){

        //toggleRed();
       // goLive();

         
       loopTrigger(0);
    }




var isOpera = !!(window.opera && window.opera.version);  // Opera 8.0+
var isFirefox = testCSS('MozBoxSizing');                 // FF 0.8+
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // At least Safari 3+: "[object HTMLElementConstructor]"
var isChrome = !isSafari && testCSS('WebkitTransform');  // Chrome 1+
var isIE = /*@cc_on!@*/false || testCSS('msTransform');  // At least IE6

function testCSS(prop) {
    return prop in document.documentElement.style;
}



/////////// The Transition Functions /////////////////////////////


/////////////////////////////////////////////////////////////////////
var readyPlay = 0;
var happyHol = 0;
var exitCatch = 0;

function goBlack(){

   $('.brotherDarkness').fadeIn(inz, function() {
      logger('second BG Fade');
      $('.brotherDarkness').fadeOut(outz, function() {


    
      });
    });

}


function goLive(){
   
    $('#player_1').hide();
    $('.blackout-vimeo').hide();
    setTimeout(function(){
      $('.blackout-interactive').fadeOut(1000);
    }, 1000);
    $('.skipbutton').fadeOut(2000);
    //bellThrow();
    //loading - 



    //show and play hide loading 

   // bellHitEffect(50, 2000);
  
   // readyPlay = pop.readyState();



readyState();
   
   


   
}


function readyState(){
  readyPlay = pop.readyState();
  if (readyPlay >= 2){
    logger('ready to play');

    

   pPlay(8.8);

   autoPause = 1;
    $('#htmlvideo').fadeIn(3000);

  $('.donatebox').fadeIn(1250);


     pop.cue('first', 13);
    pop.cue('first', function(){
    //  plaqueButtonsDisabled = 0;
          playPop();
        });

     bgMatte(1000);


}else{
  setTimeout( function(){
    logger('not ready yet'); 
    readyState();
      }, 200);

}

}

function bellThrow(){
 
  pPlay(5.4);
   readyHeck = 0;
   //readyToAnimate = 0;
  //idleTime = 0;
  pop.cue( 8.67, function(){
     bellHitEffect(10, 2000);
  });
 
}

function bellHitEffect(inz, outz){
  if (contentLock == 0){
    contentLock = 1;
    $('.brotherDarkness').fadeIn(inz, function(){
      logger('first BG Fade');
      $('.donatebox').fadeIn(2000);
      contentLock = 1;
    //  secondFade = 0;
      $('.brotherDarkness').fadeOut(outz, function() {
        pop.cue(13, function(){
          playPop();
        });
      });
    });
  } 
  if(secondFade == 1){
    $('.brotherDarkness').fadeIn(inz, function() {
      logger('second BG Fade');
      $('.brotherDarkness').fadeOut(outz, function() {
        pop.cue(13, function(){
          secondFade = 0;
          deselectButtons(1);
          playPop();
        });
      });
    });
  }
}



function finalTreat(){
 /* var events = pop.getTrackEvents();
    if (events.length) {
      for (var e in events) {
      pop.removeTrackEvent(events[e]._id);
      }
    }*/

  logger('Trigger Final Animation finalTreat');
 // killIntervals();
 // idleTime = 0;
  readyToAnimate = 0;
 // pop.pause();
//  playMoneyDrop();
  logger('im playing treat maybe?');
// pop.cue('treat', 0, function() {
 
 //pop.pause();
// pop.pause();
playMoneyDrop();


// });

  //pop.cue(18.79, function(){
 //    playPop();
//  });
  $('.credFormz').toggle(1000);
}

function playMoneyDrop(){
/*  pop.pause(14)
  pop.currentTime(14);
  pop.play(14);*/


/*
  pop.cue('first', function(){

    // setTimeout(function(){
    logger('first drop play');
    pop.currentTime(14).play();

  //}, 30);
  });
*/


 if(isSafari){safariCue();} else {



   pop.currentTime(14).play();
   // pop.cue('first', 18.7);
  pop.cue(18.7, function(){
     logger('last drop play');
    logger('in the mix! money drop exit');
    happyHol = 1;
    pop.play();
    pop.currentTime(0).play();
    loopTrigger(0);
    playPop();
  });


}

}



function safariCue(){

  var events = pop.getTrackEvents();
    if (events.length) {
      for (var e in events) {

       // logger(events[e]._id);    


      pop.removeTrackEvent(events[e]._id);

      }

    }

     
 // pop.removeTrackEvent('first');

logger('beep bepp');
      
pop.currentTime(14).play();
    

/*pop.cue('first', 17);
 pop.cue('first', function(){*/
   // pop.cue('first', 18.79);
    pop.exec(18.7, function(){
      

    logger('in the mix! money drop exit');
    happyHol = 1;
    //pop.play();
    pop.currentTime(0);
    pop.play();
    loopTrigger(0);
    playPop();
  });




}


/////////// POPCORN JS STUFF STARTS HERE /////////////////////////////


/////////////////////////////////////////////////////////////////////


    var trigger = 0;

     var safetyEscape = 0;
     var safetyStop = 0;
     var safetyCont = 0;
     var firstPlayCount = 0;
     var eraseAllowed = 1;


     function countFirst(){
       //eraseAllowed = 1;
        logger('First Exit ');



        if(eraseAllowed == 1){


            pop.cue('first', 8, function() {

              pPlay(7);

            })
      var eventId = pop.getLastTrackEventId();

     
     // pop.cue(eventId, 5.4);
     // pop.cue(eventId, function(){

    //    logger('ive moved');
//
     //   pop.pause();

       //  loopTrigger(2);

    //  });



      //  pop.removeTrackEvent(eventId);

       // var eventId2 = pop.getLastTrackEventId();

      //  pop.removeTrackEvent(eventId2);


}


           // idleTime = 0;

            // trigger = 0;
            
           

        
       // body...
     }

    function trigga(triggz){
        switch(triggz){
            case 0:
                    if (trigger != 1){

                      //  countFirst();
                     //  timeOutz(0, 4, 2); // case, timout count, loopOut
                         // if(safetyCont == 1){ pPlay(0); safetyCont = 0;}
                
                } else {
                    logger('Trigger has been pulled saftey equals ' + safetyEscape + 'safetystop value is ' + safetyStop);
                    safetyEscape = safetyEscape+1;
                  //  idleTime = 0;
                 // countFirst();
                   // safetyStop = safetyStop+1;

                
                  //  safetyStopz();
                   if (safetyEscape >=14){

                          logger('rrruuuun from twwezy '+safetyEscape);


                          pop.cue( 1.3, function() {
                         

                        
                          safetyEscape = 0;
                         // killIntervals();
                         trigger = 0;
                         loopTrigger(2);

                          //loopExit(1);

                         safetyStopz();

                            });


                    };




                }

                


           // break;

        }

    } 



    function loopExit(frameNum){
        switch(frameNum){

            case 0:
                    logger('Im trying to exit here!');

                          idleTime = 0;
                          trigger = 0;

                //pop.play(0);


                
               /*  pop.cue( .9, function() {
                        pop.play(0);*/
                     loopTrigger(0);

                /* });*/

            break;

            case 1:
                    

                    pop.cue( 1.29, function() {

                            pPlay(1.3);
                          //killIntervals();  

                          logger('Loop Exit 1');
                         loopTrigger(3);


                    });

            break;

        };

    }

   

   function case1Extend(){

     if (firstPlayCount <= 2 ){

       firstPlayCount = firstPlayCount + .25;

        pop.cue('first', function() {

                 
              pop.play(0);
              loopTrigger(1);

            });


     } else{ loopTrigger(1); }
   }


   function exitFirst(){
      readyHeck = 0;
    logger('exitFirst');
   // readyToAnimate = 0;
  // plaqueButtonsDisabled = 1;

 

    loopTrigger(2);
  var timeOutx = setTimeout(function(){}, 200) ;

   }

    function loopTrigger(cuez){
        switch(cuez){

            case 0:
           // plaqueButtonsDisabled = 1;
                idleTime = 0;

                  if(happyHol==1){

                    shelfExtend('thanks');
                    setTimeout(function(){
                      shelfRetract('thanks');
                    },4000);

                    happyHol = 0;
                  };
                 //pop.pause();
               
                pPlay(0);
              //   trigga(0);
               //  safetyStopz();
                setTimeout(function(){

              secondFade = 1; }, 2000)  
                
                     loopTrigger(1);





            break;

            case 1:



                pop.cue('first', 1.3, function() {

                  readyHeck = 1;

                 // readyToAnimate = 1;

                //  deselectButtons(1);

                  logger(readyToAnimate);
                 
              pop.play(0);

              // pop.pause();
               firstPlayCount = firstPlayCount + 1;



              logger('first play count is ' + firstPlayCount);

                if (firstPlayCount >= 3 ){



                 // countFirst();



                  firstPlayCount = 0;

                exitFirst();

                  

                 

                } else {

                case1Extend();
                
              }
              // log count, which is 0 by default
              //logger( count );
            });


                       
                


            break;

            case 2:
                  
            

                    // setTimeout(function(){pop.currentTime(1.35);}, 50);

               // if (pop.currentTime()<=1) {

               //  pop.cue( 1.3, function() {
                      // idleTime = 0;
                     //clearInterval(t2);
                      //clearInterval();
                     //clearInterval(t2);
                     // clearTimeout();
                     //trigga(0);
                      pop.cue('first', 5.29, function() {

                            readyHeck = 1;
                   //  eraseAllowed = 0;
                     //trigger=1;
                      safetyEscape = safetyEscape+1;
                       // readyHeck = 1;
                  //    plaqueButtonsDisabled = 0;

                    //   deselectButtons(1);

                   //  if (pop.currentTime()>=1) {
                     // killIntervals();

                 //   };
                      logger('im in twwwzey');

                       pPlay(0);

                     // pop.play(1.31);

                     
/*    
                        if (safetyEscape >=5){

                           safetyEscape = 0;
                           safetyStop = safetyStop+1;

                          pop.cue( 5.4, function() {

                         logger('rrruuuun from twwezy '+safetyEscape);

                          pPlay(0);

                          

                         
                         // killIntervals();
                         trigger = 0;

                          //loopExit(1);

                            });

                    };
                      */

                   // pop.cue( 22, function() {

                   //  });
                    //loopFrom = 3;


                   // timeOutz(0, 4);
                  // log count, which is 0 by default
                  //logger( count );
            //    });

              // } else{  logger('its go time towards 3');

                 
                          //killIntervals();  

                          logger('case 2 cue22');
                         // trigger = 0;
                         loopTrigger(3);
                         safetyEscape = 12;
                       //  safetyStopz();


                    });

                    // }
                

            break;

            case 3:

                pop.cue('first', 1.3, function(){
                  readyHeck = 1;
                eraseAllowed = 0;
               // deselectButtons(1);
            // pop.cue( 22, function() {
                logger('on third Case');
                // pop.play(0);
                 idleTime = 0;
                 pPlay(0);
                 

                 //killIntervals();
                  //loopFrom = 1;
                 // loopExit(0);
                 loopTrigger(4);

              //   });

            });

            break;

             case 4:
            //  pop.play(0);
                
                    logger('Im trying to exit 4!' + idleTime);

                          //idleTime = 0;
                          

                    


                pop.cue('first', 1.3, function() {

                       pPlay(0);
                         readyHeck = 1;
                       eraseAllowed = 0;
                     loopTrigger(0);

                 });

            break;

            case 5:
                     pop.cue( 5.29, function() {
                    //killIntervals();  

                    logger('case 2 cue22');
                   loopTrigger(3);


                    });



            break;

            case 6:

               safetyEscape = 0;

              idleTime = 0;
               setTimeout(function() {

                pop.currentTime(0);
                 trigga(0);
                
                
               
                     loopTrigger(1);
                   }, 2000);

            break;



        }




    }


var vimeoPlayer, 
    vimeoUrl,
    vimeoHasPlayed = 0;

// Handle messages received from the player
function onMessageReceived(e) {
    var data = JSON.parse(e.data);
    
    switch (data.event) {
        case 'ready':
            onReady();
            break;
           
        case 'playProgress':
            onPlayProgress(data.data);
            break;
            
        case 'play':
            onPlay();
            break;
           
        case 'pause':
            onPause();
            break;
           
        case 'finish':
            onFinish();
            break;
    }
}

// Helper function for sending a message to the player
function vimeoController(action, value) {
    var data = { method: action };
    
    if (value) {
        data.value = value;
    }
    
    vimeoPlayer[0].contentWindow.postMessage(JSON.stringify(data), vimeoUrl);
}

function onReady() {
    // vimeoController('play');
    vimeoController('addEventListener', 'play');
    vimeoController('addEventListener', 'pause');
    vimeoController('addEventListener', 'finish');
    vimeoController('addEventListener', 'playProgress');
}

function onPlay() {
  if(!vimeoHasPlayed) {
    $('.blackout-vimeo').fadeOut(1000);
    vimeoHasPlayed = 1;
  }
}

function onPause() {
}

function onFinish() {
 //bellHitEffect(0, 2000);
    //goLive();
}
var liveSwitch = 0;
function onPlayProgress(data) {
   if (data.seconds >= 84.87){
      //bellHitEffect(50, 2000);
      liveSwitch = liveSwitch + 1;

      if (liveSwitch == 1){
        logger(data.seconds);
        vimeoController('pause');

           goLive();
        liveSwitch = 2;
      }
     
    };
}



// Set the name of the hidden property and the change event for visibility
var hidden, visibilityChange; 
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
    hidden = "hidden";
    visibilityChange = "visibilitychange";
} else if (typeof document.mozHidden !== "undefined") {
    hidden = "mozHidden";
    visibilityChange = "mozvisibilitychange";
} else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
}
  
var videoElement = document.getElementById("videoElement");
 
// If the page is hidden, pause the video;
// if the page is shown, play the video
function handleVisibilityChange() {

  if(autoPause==1){

        if (document[hidden]) {
            pop.pause();
        } else {
            pop.play();
        }

  }
}
 
// Warn if the browser doesn't support addEventListener or the Page Visibility API
if (typeof document.addEventListener === "undefined" || 
    typeof hidden === "undefined") {

    var has_blurred = 0;
    function meep()
    {
        has_blurred = 1;
        pop.pause();
    }
    window.onblur=meep;

    function handleFocus()
    {
        if( has_blurred )
            pop.play();              
        has_blurred = 0; // reset has_blurred state
    }
    window.onfocus=handleFocus;
   // alert("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
} else {
 
    // Handle page visibility change   
    document.addEventListener(visibilityChange, handleVisibilityChange, false);
     
   
   }





$(document).ready(function(){

    pop = Popcorn('#htmlvideo', {
      frameAnimation: true
    });


  
    vimeoPlayer = $('#player_1');
    vimeoUrl = vimeoPlayer.attr('src').split('?')[0];

    // Listen for messages from the player
    if (window.addEventListener){
        window.addEventListener('message', onMessageReceived, false);
    }
    else {
        window.attachEvent('onmessage', onMessageReceived, false);
    }

    // Call the API when a button is pressed
    $('vimeoButton').on('click', function() {
        vimeoController($(this).text().toLowerCase());
    });

}); /* end document ready */
