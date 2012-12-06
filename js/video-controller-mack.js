$(document).ready(function(){

var finCatch = 0;

   // $('#htmlvideo').hide('fast');
   $('#htmlvideo').css({ opacity: 0.0, visibility: "hidden", display: 'none'});

        var f = $('iframe'),
            url = f.attr('src').split('?')[0],
            status = $('.status');

        // Listen for messages from the player
        if (window.addEventListener){
            window.addEventListener('message', onMessageReceived, false);
        }
        else {
            window.attachEvent('onmessage', onMessageReceived, false);
        }

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
                    
                case 'pause':
                    onPause();

                    break;
                   
                case 'finish':
                    onFinish();
                    break;
            }
        }

        // Call the API when a button is pressed
        $('button').on('click', function() {
            post($(this).text().toLowerCase());
        });

        // Helper function for sending a message to the player
        function post(action, value) {
            var data = { method: action };
            
            if (value) {
                data.value = value;
            }
            
            f[0].contentWindow.postMessage(JSON.stringify(data), url);
        } 

        function onReady() {
            status.text('ready');
            post('play');
            post('addEventListener', 'pause');
            post('addEventListener', 'finish');
            post('addEventListener', 'playProgress');
        }

        function onPause() {
            status.text('paused');

             console.log('pausseed');
                 
        }

        function onFinish() {
            status.text('finished');
           
            if(finCatch == 0){
                
                  goLive();

            };

              
        }



        function onPlayProgress(data) {
            status.text(data.seconds + 's played');

            if (data.seconds >= 67){
                
               goLive();
               finCatch = 1;

            };
        }









/////////// The Transition Functions /////////////////////////////


/////////////////////////////////////////////////////////////////////





  function goLive(){

          

                if (goLiveCatch == 0){

                         goLiveCatch = 1;

                                 $('#player_1').fadeOut(2000, function(){

                                 

                                  $('#player_1').css({visibility: "hidden"});

                                   

                              });
                         //  $('#htmlvideo').show().fadeIn(2000);

                             // $('#htmlvideo').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});

                            
                              $('#vimeoControls').hide('normal');
                             // playPop();

                              




                                bellThrow();

                                bgMatte(1000);

                          }



          }

                              function bellThrow(){



                                pop.play(5.4);

                                pop.cue(8.7, function(){

                                   bellHitEffect(50, 2000);


                                });

                                pop.cue(9, function(){

                                   //shakeBake(100);


                                   





                                });
                                 

                              //  pop.cue(17.7, function(){

                                     // playPop();
                                    

                              //  });
                              }




                               function bellHitEffect(inz, outz){



                                   if (contentLock == 0){
                                            contentLock = 1;

                                              $('.brotherDarkness').fadeIn(inz, function(){
                                                       // launchRed();
                                                        // Animation complete.

                                                         $('.donatePlate').fadeIn(2000);

                                                        contentLock = 1;

                                                         $('.brotherDarkness').fadeOut(outz, function() {
                                                             pop.cue(13, function(){

                                                               playPop();

                                                             });

                                                         });


                                                      });

                                    } else {

                                                 $('.brotherDarkness').fadeIn(inz, function() {

                                                 


                                                     $('.brotherDarkness').fadeOut(outz, function() {


                                                            playPop();



                                                     });


                                                 });

                                       }





                                }


                              function shakeBake(speedz){

                                 $('.wholeShabang').effect("shake", { times:3 }, speedz, function(){

                                    pop.play();

                                 });

                                 
                              }


/////////// Coin PlayBack Catches /////////////////////////////


/////////////////////////////////////////////////////////////////////

var $popTriggerz = $('.playPopTrigger').html();


 $('.bellThrowTrigger').change(function(){

     pop.currentTime(13.5);
     
 });

$('.playPopTrigger').change(function() {
    
 console.log('I saw that change Dawg, Cooinz!!');
   //  $('.wholeShabang').effect("shake", { times:3 }, 200, function(){

                                   // $('.playPopTrigger').html('1');


                                //   killIntervals();
                                   // idleTime = 0;
                                  //  trigger = 0;


                                          playPop();




                                          playPop();

                             

                                  //  loopTrigger(0);

                             //    });

   

  

});






/////////// POPCORN JS STUFF STARTS HERE /////////////////////////////


/////////////////////////////////////////////////////////////////////









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
    
     




    pop = Popcorn('#htmlvideo', {
                frameAnimation: true
            });


    pop.on('loadeddata', function(){
                $('.loading').hide();
                $('video').show();
                
            });

    var loopFrom = 1;
    

    function playPop(){

        //toggleRed();
       // goLive();

         

        loopTrigger(0);
    }


/*
    if (loopFrom == 1){

      pop.cue( 64.1, function() {

                pop.play(62.3);


                timeOutz(0, 4, 2);
              // log count, which is 0 by default
              //console.log( count );
            });
    }

    if (loopFrom == 2){
        pop.cue( 64.1, function() {

                pop.play(11);

                loopFrom = 3;


               // timeOutz(0, 4);
              // log count, which is 0 by default
              //console.log( count );
            });
    }

    if (loopFrom == 3 ){

        pop.cue( 22, function() {

             pop.play(62.3);

              loopFrom = 1;

        });

    }   */

    var trigger = 0;

     var safetyEscape = 0;



    function trigga(triggz){
        switch(triggz){
            case 0:
                    if (trigger != 1){


                       timeOutz(0, 4, 2); // case, timout count, loopOut
                
                } else {
                    console.log('Trigger has been pulled saftey equals ' + safetyEscape);
                    safetyEscape = safetyEscape+1;
                  //  idleTime = 0;
               
                 


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

                pop.cue( 1.3, function() {


                pop.currentTime(0);


               

                

              // log count, which is 0 by default
              //console.log( count );
            });


            break;

            case 2:
                  

                   

               // if (pop.currentTime()<=1) {

                 pop.cue( 1.3, function() {
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

                        
                        if (safetyEscape >=4){

                          console.log('rrruuuun from twwezy '+safetyEscape);

                          pop.currentTime(1.4).play();

                          

                          safetyEscape = 0;
                         // killIntervals();
                         trigger = 0;

                          //loopExit(1);



                    };
                

                
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

    pop.on('timeupdate', function(){

 

      //  if (loopFrom == 2){
           
      //  }


          //   if (loopFrom == 3 ){

            //loopTrigger(loopFrom);

      //  }   



        /*if (loopFrom == 1){

          
        }*/



    });



});

