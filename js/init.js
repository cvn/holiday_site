   function finalTreat(){

                                          console.log('Trigger Final Animation finalTreat');
                                          
                                           killIntervals();
                                           idleTime = 0;
                                           //trigger = 0;
                                           pop.pause();

                                           playMoneyDrop();
/*
                                             pop.cue(1.2, function(){

                                           pop.play(13.5);

                                         });
*/
                                        // pop.pause();

                                              // pop.currentTime(13.5);


                                         //      $('.playPopTrigger2').change();
                                            console.log('im playing treat maybe?');
                                    



                                                      //   console.log('Heeeeeeeey HEEEEEEy');
                                                        //  pop.currentTime(13.5).play();


                                                       pop.cue(18.79, function(){
                                                    

                                                

                                                 

                                               //  $('.flipper:first-child').removeClass('shy');
                                               //  $('input:radio[name=amount]')[1].checked = true;


                                                /*   if(postAdd == 0){

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



                                                       }*/



                                          //  playPop();


                                                     

                                                    //  });



                                               }); 

                                    $('.credFormz').toggle(1000);



                                        }



  /* <![CDATA[ */


                                        jQuery(document).ready(function($) {



                                         
                                               // $(".CounterZone").flipCounter();   


                                                $("#CounterZone").flipCounter(
                                                   "startAnimation", // scroll counter from the current number to the specified number
                                                      {
                                                             // number: <?php $donationsArray = getDonations();  echo ($donationsArray[1][total]); ?>, // the number we want to scroll from
                                                              end_number: donationTotal, // the number we want the counter to scroll to
                                                              easing: jQuery.easing.easeOutCubic, // this easing function to apply to the scroll.
                                                              duration: 1000, // number of ms animation should take to complete
                                                      //  number:0, // the initial number the counter should display, overrides the hidden field
                                                         numIntegralDigits:1, // number of places left of the decimal point to maintain
                                                        numFractionalDigits:0, // number of places right of the decimal point to maintain
                                                        //digitClass:"counter-digit", // class of the counter digits
                                                        counterFieldName:"counter-value", // name of the hidden field
                                                        formatNumberOptions:{format:"#,##0",locale:"us"},
                                                        digitHeight:68, // the height of each digit in the flipCounter-medium.png sprite image
                                                        digitWidth:44, // the width of each digit in the flipCounter-medium.png sprite image
                                                        imagePath:"images/flip-counter.png", // the path to the sprite image relative to your html document
                                                        easing: false, // the easing function to apply to animations, you can override this with a jQuery.easing method
                                                       // duration:20000, // duration of animations
                                                        onAnimationStarted:false, // call back for animation upon starting
                                                        onAnimationStopped:false, // call back for animation upon stopping
                                                        onAnimationPaused:false, // call back for animation upon pausing
                                                        onAnimationResumed:false // call back for animation upon resuming from pause
                                                });



                                        });
                                /* ]]> */



                             function containerFadeOut(outSpeed){

                                 $('.container').fadeOut(outSpeed);

                                 containerFadeIn(6000);

                                 // var inSpeed = 3000;

                              }
                             


                               function containerFadeIn(inSpeed){

                                    $('.container').fadeIn(inSpeed);
                                      // bgMatte(1000)

                              }


                              function bgMatte(inSpeed){

                               
                                   $('#htmlvideo').css({ opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0}, inSpeed-500).fadeIn(inSpeed-500);
                               
                                

                                  //containerFadeIn(inSpeed);
                                  setTimeout(function() {

                                     $('.mattePainting').fadeIn(inSpeed+3000);


                                  }, bgFadeWait);

                                



                              }

                            





                                 var $frame = $('<button class="closeForm" onClick="toggleRed();">Close X </button><br><iframe id="crossFrame" name="redCrossFrame" src="http://rdcrss.org/10OsFID" width="100%" height="100%">');
                         

                                function crossVal(){
                                        var donVal = $("doval").val();

                                     //  $('#crossFrame').contents().getElementById('custom-amount').value = donVal;
                                     //  window.frames['redCrossFrame'].document.getElementById('custom-amount').value = 'test successful';




                                }

                                
                                     function closeTestForm(){

                                        testFormToggle = 0;
                                        $('.closedTest').html('1');



                                          $('.testForm').toggle('slow', function() {

                                            console.log('Test Form Toga '+testFormToggle);
                                           
                                           // launchRed();
                                            // Animation complete.
                                          });
                                        }
                               
                                    function closedTest(){
                                      closedTestForm = 1;

                                        }



                                        function heckNo(){

                                           console.log('heck No');
                                      pop.play(5.4);

                                  //    pop.cue(8.7, function(){

                                      //   bellHitEffect(50, 2000);


                                   //   });


                                      /*   pop.cue(13, function(){

                                                            secondFade = 0;

                                                            playPop();

                                                          });
*/
                                        }

                                        function heckYes(){
                                          console.log('heck yes');

                                              $('.credFormz').toggle(1000);



                                        }

                                     



                                 /*   var $currentIFrame = $('#crossFrame');
                                        $currentIFrame.contents().find("body #custom-amount").val(donVal);

*/

      var bgFadeWait = 6000;
      var goLiveCatch = 0;
      var contentLock = 0;

      function toggleFace(){
        window.open("http://www.facebook.com/sharer/sharer.php?u=http://holiday.weareroyale.com","_blank", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=yes, top=300, left=400, width=400, height=400");
      }

      function toggleTwit(){
        window.open("http://twitter.com/share?text=Royale%20Presents%20The%20Bell%20Ringer%20Happy%20Holidays%20&url=http://holiday.weareroyale.com","_blank", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=yes, left=300, top=300, width=500, height=500");
      }

      function toggleMail(){

          console.log('Mail should be Toggled');

          window.open("http://holiday.weareroyale.com/emailShare.php","_blank", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=yes, left=300, top=300, width=500, height=500");

      }



                              $('.moneyCollectTrigger').change(function() {







                              })

                              function playDropped(){
                                  console.log('I saw this');

                                  pop.currentTime(13.5).play();

                                  
                                //

                                    
                               //  $('.moneyCollectTrigger').change();

                              }
 