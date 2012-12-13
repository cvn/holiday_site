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

                // console.log('closed test Form ' + closedTestForm);

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
                              pop.play(5.4);
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





    $( ".video-container" ).droppable({
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


                               



                   
                                 




                                    $('.playPopTrigger2').change();

                                   // pop.pause();

                           



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



    })