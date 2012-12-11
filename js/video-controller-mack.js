// var events = popcornObj.getTrackEvents();
// if (events.length) {
//   for (var e in events) {
//     popcornObj.removeTrackEvent(events[e]._id);
//   }
// }

var debug = 1;

function logger(stuff){
  if(debug){
    console.log(stuff);
  }
}

function pPlay(playPoint){

  //pop.pause();

   pop.currentTime(playPoint);

   pop.play();

  

}

function pPause(){
     pop.pause();
}

function pClear(){
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

function safetyStopz(){

  if(safetyStop >= 100){
    stopExit = 0;
    safetyStop = 0;
      // pop.pause();
                  logger('safety Stopped!')
                  killIntervals();
                  idleTime = 0;
               
                //  pop.pause();
                  var events = pop.getTrackEvents();
                    if (events.length) {
                      for (var e in events) {
                      pop.removeTrackEvent(events[e]._id);
                      }
                    }
                    //  pop.pause();

                 

                  $('body').mousemove(function (e) {
                       if (stopExit == 0){
                    stopExit = 1;
                    safetyCont = 1;
                            idleTime = 0;
                            trigger = 0;
                           trigga(0);

                         }
                         
                          //  logger('party continues');
                        });
                        $(this).keypress(function (e) {
                             if (stopExit == 0){
                              idleTime = 0;
                          stopExit = 1;
                         // safetyStop = 0;
                            //playPop;
                             trigga(0);
                          }

                         //   logger('party continues from keys');
                        });

                      

                         setTimeout(function(){pop.pause();}, 100); 

                }

}

var secondFade = 1;
var stopExit = 0;


     var intervalArr = new Array();
        function intervalOne () { console.log ('foo');};
        function intervalTwo () { console.log ('bar');};

        function killIntervals(){
            while(intervalArr.length > 0)
            clearInterval(intervalArr.pop());
        };
 
 
   function timeOutz(numzz, timez, loopOut){  logger(timez);
            switch(numzz){



                case 0:

                        idleTime = 0;
                        trigger = 1;

                        
                       // idleTime = 0;

                        setTimeOutFunction1(timez, loopOut, 3000);

                            
                            
                        


                break;

                case 1:


                     intervalArr.push(setTimeout(function(){

                            
                            logger('Waiting');
                                //updateLooper(5);
                            

                        },5000));

                          //Zero the idle timer on mouse movement.
                        $(this).mousemove(function (e) {
                            idleTime = 0;
                        });
                        $(this).keypress(function (e) {
                            idleTime = 0;
                        });


                            logger(idleTime);
                            
                        

                        if( idleTime == timez){

                                clearTimeout(t2);
                                loopFrom = 3;
                                   idleTime = 0;

                                logger('Timeout '+ numzz +' Reached');

                                
                            }

                break;


                    }
            }




    function setTimeOutFunction1(timez, loopOut, intervalz){

        logger('timoutFunc1 vals Count: ' + timez + 'loopOut ' + loopOut + ' and interval ' + intervalz );
        


        intervalArr.push(setInterval(function(){

                             idleTime = idleTime + 1;
                                logger('Waiting');
                                //updateLooper(5);
                                 logger(idleTime);


                                 if( idleTime == timez){

                                //clearInterval(t2);
                                killIntervals();
                                loopFrom = loopOut;


                                logger(loopOut);
                               
                                idleTime = 0;

                                trigger = 0;
                                
                                loopTrigger(loopOut);
                                
                            }

                        }, intervalz));

                          //Zero the idle timer on mouse movement.
                        $(this).mousemove(function (e) {
                            idleTime = 0;
                        });
                        $(this).keypress(function (e) {
                            idleTime = 0;
                        });

                        logger(idleTime);

                        


    }
    
     




    var loopFrom = 1;
    

    function playPop(){

        //toggleRed();
       // goLive();

         
       loopTrigger(0);
    }







/////////// The Transition Functions /////////////////////////////


/////////////////////////////////////////////////////////////////////

function goLive(){
    $('#htmlvideo').show();
    $('#player_1').hide();
    //bellThrow();

   // bellHitEffect(50, 2000);
    
    pPlay(8.8);

     $('.donatebox').fadeIn(2000);

    pop.cue(13, function(){
          playPop();
        });


    bgMatte(1000);
}

function bellThrow(){
  pPlay(5.4);
  idleTime = 0;
  pop.cue(8.7, function(){
     bellHitEffect(20, 2000);
  });
  pop.cue(9, function(){
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
  idleTime = 0;
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



  pop.cue('first', function(){

    // setTimeout(function(){
    
    pop.currentTime(14).play();

  //}, 30);

   pop.currentTime(14).play();
  pop.cue('first', 18.7, function(){
    logger('in the mix! money drop exit');
    pop.play();
    pop.currentTime(0).play();
    loopTrigger(0);
    playPop();
  });
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

      pop
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

    function loopTrigger(cuez){
        switch(cuez){

            case 0:

                idleTime = 0;


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

                 
              pop.play(0);

              // pop.pause();
               firstPlayCount = firstPlayCount + 1;



              logger('first play count is ' + firstPlayCount);

                if (firstPlayCount >= 3 ){



                 // countFirst();



                  firstPlayCount = 0;

                  loopTrigger(2);

                 

                }

                else {

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
                      pop.cue('first', 5.25, function() {
                     eraseAllowed = 0;
                     //trigger=1;
                      safetyEscape = safetyEscape+1;

                       

                   //  if (pop.currentTime()>=1) {
                     // killIntervals();

                 //   };
                      logger('im in twwwzey');

                      pop.play(1.35);

                     
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

                eraseAllowed = 0;
            // pop.cue( 22, function() {
                logger('on third Case');
                // pop.play(0);
                 idleTime = 0;
                 pPlay(0);
                 

                 //killIntervals();
                  //loopFrom = 1;
                 // loopExit(0);
                 loopTrigger(4);

          //  });

            break;

             case 4:
            //  pop.play(0);
                
                    logger('Im trying to exit 4!' + idleTime);

                          //idleTime = 0;
                          

                    


                pop.cue('first', 1.3, function() {
                       pPlay(0);
                        
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
    $('.firstbox').fadeOut();
    vimeoHasPlayed = 1;
  }
}

function onPause() {
}

function onFinish() {
 //bellHitEffect(0, 2000);
    goLive();
}

function onPlayProgress(data) {
   // if (data.seconds >= 84.2){
     //  bellHitEffect(50, 2000);
     //  goLive();
   //  };
}




$(document).ready(function(){

    pop = Popcorn('#htmlvideo', {
      frameAnimation: true
    });

    $('#htmlvideo').hide();

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

