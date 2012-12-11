// var events = popcornObj.getTrackEvents();
// if (events.length) {
//   for (var e in events) {
//     popcornObj.removeTrackEvent(events[e]._id);
//   }
// }

var secondFade = 0;



     var intervalArr = new Array();
        function intervalOne () { console.log ('foo');};
        function intervalTwo () { console.log ('bar');};

        function killIntervals(){
            while(intervalArr.length > 0)
            clearInterval(intervalArr.pop());
        };
 
 
   function timeOutz(numzz, timez, loopOut){  console.log(timez);
            switch(numzz){



                case 0:

                        idleTime = 0;
                        trigger = 1;

                        
                       // idleTime = 0;

                        setTimeOutFunction1(timez, loopOut, 3000);

                            
                            
                        


                break;

                case 1:


                     intervalArr.push(setTimeout(function(){

                            
                            console.log('Waiting');
                                //updateLooper(5);
                            

                        },5000));

                          //Zero the idle timer on mouse movement.
                        $(this).mousemove(function (e) {
                            idleTime = 0;
                        });
                        $(this).keypress(function (e) {
                            idleTime = 0;
                        });


                            console.log(idleTime);
                            
                        

                        if( idleTime == timez){

                                clearTimeout(t2);
                                loopFrom = 3;
                                   idleTime = 0;

                                console.log('Timeout '+ numzz +' Reached');

                                
                            }

                break;


                    }
            }




    function setTimeOutFunction1(timez, loopOut, intervalz){

        console.log('timoutFunc1 vals Count: ' + timez + 'loopOut ' + loopOut + ' and interval ' + intervalz );
        


        intervalArr.push(setInterval(function(){

                             idleTime = idleTime + 1;
                                console.log('Waiting');
                                //updateLooper(5);
                                 console.log(idleTime);


                                 if( idleTime == timez){

                                //clearInterval(t2);
                                killIntervals();
                                loopFrom = loopOut;


                                console.log(loopOut);
                               
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

                        console.log(idleTime);

                        


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
    bellThrow();
    bgMatte(1000);
}

function bellThrow(){
  pop.play(5.4);
  pop.cue(8.7, function(){
     bellHitEffect(50, 2000);
  });
  pop.cue(9, function(){
  });
}

function bellHitEffect(inz, outz){
  if (contentLock == 0){
    contentLock = 1;
    $('.brotherDarkness').fadeIn(inz, function(){
      console.log('first BG Fade');
      $('.donatebox').fadeIn(2000);
      contentLock = 1;
      secondFade = 0;
      $('.brotherDarkness').fadeOut(outz, function() {
        pop.cue(13, function(){
          playPop();
        });
      });
    });
  } 
  if(secondFade == 1){
    $('.brotherDarkness').fadeIn(inz, function() {
      console.log('second BG Fade');
      $('.brotherDarkness').fadeOut(outz, function() {
        pop.cue(13, function(){
          secondFade = 0;
          playPop();
        });
      });
    });
  }
}

function playMoneyDrop(){
  pop.currentTime(14).play();
  pop.cue(18.79, function(){
    playPop();
  });
}




/////////// POPCORN JS STUFF STARTS HERE /////////////////////////////


/////////////////////////////////////////////////////////////////////


    var trigger = 0;

     var safetyEscape = 0;
     var safetyStop = 0;


    function trigga(triggz){
        switch(triggz){
            case 0:
                    if (trigger != 1){


                       timeOutz(0, 4, 2); // case, timout count, loopOut
                
                } else {
                    console.log('Trigger has been pulled saftey equals ' + safetyEscape + 'safetystop value is ' + safetyStop);
                    safetyEscape = safetyEscape+1;
                  //  idleTime = 0;

                   // safetyStop = safetyStop+1;

                        if (safetyEscape >=8){

                           safetyEscape = 0;
                          // safetyStop = safetyStop+1;

                          pop.cue( 5.4, function() {

                         // console.log('rrruuuun from twwezy '+safetyEscape);

                          pop.currentTime(0).play();

                          

                         
                         // killIntervals();
                         trigger = 0;

                          //loopExit(1);

                            });

                    };
                




                }

                


           // break;

        }

    } 



    function loopExit(frameNum){
        switch(frameNum){

            case 0:
                    console.log('Im trying to exit here!');

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

                            pop.currentTime(1.3);
                          //killIntervals();  

                          console.log('Loop Exit 1');
                         loopTrigger(3);


                    });

            break;

        };

    }

   

    function loopTrigger(cuez){
        switch(cuez){

            case 0:

                idleTime = 0;


                 
               
                pop.currentTime(0).play();
                 trigga(0);
                
                
                
                     loopTrigger(1);





            break;

            case 1:

                pop.cue( 1.26, function() {


                pop.currentTime(0);

               setTimeout(function(){

              secondFade = 1; }, 2000)  
               

                

              // log count, which is 0 by default
              //console.log( count );
            });


            break;

            case 2:
                  

                   

               // if (pop.currentTime()<=1) {

                 pop.cue( 1.26, function() {
                      // idleTime = 0;
                     //clearInterval(t2);
                      //clearInterval();
                     //clearInterval(t2);
                     // clearTimeout();
                     //trigga(0);
                     
                     
                     //trigger=1;
                      safetyEscape = safetyEscape+1;

                         pop.currentTime(1.4);

                   //  if (pop.currentTime()>=1) {
                     // killIntervals();

                 //   };
                      console.log('im in twwwzey');

                        
                        if (safetyEscape >=8){

                          console.log('rrruuuun from twwezy '+safetyEscape);

                          pop.currentTime(1.4).play();

                          

                          safetyEscape = 0;
                         // killIntervals();
                         trigger = 0;

                          //loopExit(1);



                    };
                

                       if(safetyStop >= 80){
                  console.log('safetyStoped!')
                 // killIntervals();
                  idleTime = 0;
                  pop.pause();



                  $('body').mousemove(function (e) {
                            safetyStop = 0;
                           pop.play();
                          //  console.log('party continues');
                        });
                        $(this).keypress(function (e) {
                          safetyStop = 0;
                            pop.play();
                         //   console.log('party continues from keys');
                        });



                }


                   // pop.cue( 22, function() {

                   //  });
                    //loopFrom = 3;


                   // timeOutz(0, 4);
                  // log count, which is 0 by default
                  //console.log( count );
                });

              // } else{  console.log('its go time towards 3');

                  pop.cue( 5.4, function() {
                          //killIntervals();  

                          console.log('case 2 cue22');
                          trigger = 0;
                         loopTrigger(3);
                         safetyEscape = 12;


                    });

                    // }
                

            break;

            case 3:


            // pop.cue( 22, function() {
                console.log('on third Case');
                // pop.play(0);
                 idleTime = 0;
                 pop.currentTime(1.33);
                 

                 //killIntervals();
                  //loopFrom = 1;
                 // loopExit(0);
                 loopTrigger(4);

          //  });

            break;

             case 4:
            //  pop.play(0);
                
                    console.log('Im trying to exit 4!' + idleTime);

                          //idleTime = 0;
                          


                pop.cue( 5.4, function() {
                        pop.currentTime(0);
                        

                     loopTrigger(0);

                 });

            break;

            case 5:
                     pop.cue( 5.29, function() {
                    //killIntervals();  

                    console.log('case 2 cue22');
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
    goLive();
}

function onPlayProgress(data) {
    // if (data.seconds >= 67){
    //    goLive();
    // };
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