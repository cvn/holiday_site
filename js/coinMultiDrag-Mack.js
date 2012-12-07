 $(function() {

        var $soloCoin = $('.soloCoin');
         var $soloCoin2 = $('.soloCoin2');
        var coin1;
       var  testFormToggle = 0;
       var closedTestForm = $('.closedTest').html();
       var postAdd = 0;
       



        $( ".soloCoin" ).draggable({

            drag: function(){
                 coin1 = 0;
                 closedTestForm = $('.closedTest').html();
                if(  $( '#soloCoin' ).hasClass( "dropped" )){


                      //  $( '#soloCoin' ).removeClass( "dropped" ).html('');
                  };

                 console.log('closed test Form ' + closedTestForm);

                  if(closedTestForm == 1){

                    testFormToggle = 0;
                  }


                     //  testFormToggle = 0;

                

            },

            stop: function() {
                
                updateCoinStatus( $soloCoin);
            },

            revert: function(){

                  

                    resetCoin($soloCoin);

                  if(  $( '#soloCoin' ).hasClass( "dropped" )){
                            console.log('Im outta here');
                            coin1 = 0;
                              pop.currentTime(5.4).play();
                             return "true";

                  } else{
                    return "true";
                    //coin1 = 0;
                      console.log('Im in!');
                }
            }




        });


 $( ".soloCoin2" ).draggable({
            drag: function(){
                closedTestForm = $('.closedTest').html();
                coin1 = 1;

                if(  $( '#soloCoin' ).hasClass( "dropped" )){
                       // $( '#soloCoin' ).removeClass( "dropped" ).html('');

                       
                  };



                  if(closedTestForm == 1){

                    testFormToggle = 0;
                  }


            },

            stop: function() {
                
                updateCoinStatus( $soloCoin2);
            },

            revert: function(){

                   

                    resetCoin($soloCoin2);

                  if(  $( '#soloCoin' ).hasClass( "dropped" )){
                            console.log('Im outta here 2');
                            coin1 = 1;
                         pop.currentTime(13.5).play();
                            return "true";

                  } else{
                    return "true";
                     console.log('Im in 2!');
                    //coin1 = 0;
                }
            }




        });





    $( ".VideoSlice" ).droppable({
            drop: function( event, ui ) {




                    droppedEvent(coin1);

               


           }
        });



            function droppedEvent(dEvent){

                 switch(dEvent){

                    case 0:
                            var amount = 10;

                             $( '#soloCoin' )
                            .addClass( "dropped" )
                            .find( "p" )
                                .html( "Dropped $"+amount );

                                $('#doVal').val(amount);
                   
                          //  pop.currentTime(23).play();

                           //  console.log('Test Form Toga  case zero '+testFormToggle);

                          //  formPopFix();
                          
                           // $('.flipper:first-child').removeClass('shy');

                         //   $('input:radio[name=amount]')[0].checked = true;

                           // $('.confirmed').addClass('shy');

                           // $('.confirmed').closest('.flipper').addClass('shy').next().removeClass('shy');

                           //  killIntervals();
                         //    idleTime = 0;
                            // trigger = 0;


                               $('.bellThrowTrigger').change();

                                 pop.currentTime(5.4).play();

                                pop.cue(8.8, function(){






                                   // $('.wholeShabang').effect("shake", { times:3 }, 200, function(){

                                 $('.playPopTrigger').change();






                                });
    

                    break;

                    case 1:

                            var amount = 15;
                             $( '#soloCoin' )
                            .addClass( "dropped" )
                            .find( "p" )
                               .html( "Dropped $"+amount );

                                 $('#doVal').val(amount);


                               



                   
                                    pop.currentTime(13.5);

                                    

                           

                            pop.cue(18.79, function(){
                               $('.playPopTrigger').change();

                           

                            

                          //  $('.flipper:first-child').removeClass('shy');
                          //  $('input:radio[name=amount]')[1].checked = true;


                              if(postAdd == 0){

                                postAdd = 1;

                                            $.post('services/add-donation.php', {amount: 5}, function(data){


                                       var updatedz = $.parseJSON(data);
                                      

                                       var updatedTotalz = updatedz.total;

                                       console.log (Number(updatedTotalz));

                                       var oldTotalz = $("#CounterZone").flipCounter("getNumber");

                                      console.log( $("#CounterZone").flipCounter("getNumber"));

                                          setTimeout(function(){ postAdd = 0}, 1000);


                                                           $("#CounterZone").flipCounter(
                                                        "startAnimation", // scroll counter from the current number to the specified number
                                                { 

                                                  number: oldTotalz, // the number we want to scroll from
                                                  end_number: updatedTotalz, // the number we want the counter to scroll to
                                                 // easing: jQuery.easing.easeOutCubic, // this easing function to apply to the scroll.
                                                 // duration: 1500, // number of ms animation should take to complete
                                                  counterFieldName:"counter-value", // name of the hidden field
                                                //  onAnimationStarted: false, // the function to call when animation starts
                                               //   onAnimationStopped: false, // the function to call when animation stops
                                               //   onAnimationPaused: false, // the function to call when animation pauses
                                               //   onAnimationResumed: false // the function to call when animation resumes from pause
                                               }
                                                   );



                                              });



                                  }



                      


                                

                               //  });



                          }); 


                formPopFix();









                    break;

                };

            }


            function formPopFix(){

                if ( testFormToggle == 0) {

                                $('.testForm').toggle('slow', function() {
                                           // launchRed();

                                           testFormToggle = 1;
                                           $('.closedTest').html('0');
                                            // Animation complete.
                                          });
                            }
            }

        function updateCoinStatus($coin){
            if($coin.hasClass('active')){
                $coin.removeClass('active');
                $coin.addClass('dropped');

            }

        }

        function resetCoin($coin){
                if($coin.hasClass('dropped')){
                $coin.removeClass('dropped');
                $coin.addClass('active');


            }


        }



    });