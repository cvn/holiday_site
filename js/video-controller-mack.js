$(document).ready(function(){
   // $('#htmlvideo').hide('fast');
   $('#htmlvideo').css({opacity: 0.0, visibility: "hidden"});

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


               $('#player_1').hide('normal');
                $('#htmlvideo').show();

                  $('#htmlvideo').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
                  $('#vimeoControls').hide('normal');
                  playPop();
        }

        function onPlayProgress(data) {
            status.text(data.seconds + 's played');
        }









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

        toggleRed();
         bgMatte();

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





    function trigga(triggz){
        switch(triggz){
            case 0:
                    if (trigger != 1){


                timeOutz(0, 4, 2); // case, timout count, loopOut
                
                } else {
                    console.log('Trigger has been pulled');
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
                    

                    pop.cue( .85, function() {

                      pop.play(11.5);
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

                pop.play(0);
                 trigga(0);
                 safetyEscape = 0;
                
                     loopTrigger(1);



            break;

            case 1:

                pop.cue( .85, function() {

                pop.play(0);


               

                

              // log count, which is 0 by default
              //console.log( count );
            });


            break;

            case 2:
                  

                    var safetyEscape = 0;

               // if (pop.currentTime()<=1) {

                 pop.cue( .85, function() {
                  // idleTime = 0;
                 //clearInterval(t2);
                  //clearInterval();
                 //clearInterval(t2);
                 // clearTimeout();
                 //trigga(0);
                 
                 pop.play(11.5);
                 //trigger=1;
                  safetyEscape = safetyEscape+1;

               //  if (pop.currentTime()>=1) {
                 // killIntervals();

             //   };
                  console.log('im in twwwzey');

                    
                    if (safetyEscape >=12){

                      console.log('rrruuuun from twwezy '+safetyEscape);

                      pop.currentTime(11.5);

                      safetyEscape = 0;
                      killIntervals();
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

                  pop.cue( 22, function() {
                    //killIntervals();  

                    console.log('case 2 cue22');
                   loopTrigger(3);


                    });

                    // }
                

            break;

            case 3:


            // pop.cue( 22, function() {
                console.log('on third Case');
                // pop.play(0);
                 idleTime = 0;
                 pop.play(0);
                 trigger = 0;

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
                          


                pop.cue( .85, function() {
                        pop.play(0);
                     loopTrigger(0);

                 });

            break;

            case 5:
                     pop.cue( 22, function() {
                    //killIntervals();  

                    console.log('case 2 cue22');
                   loopTrigger(3);


                    });



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

