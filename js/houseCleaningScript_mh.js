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
                                                         numIntegralDigits:6, // number of places left of the decimal point to maintain
                                                        numFractionalDigits:0, // number of places right of the decimal point to maintain
                                                        //digitClass:"counter-digit", // class of the counter digits
                                                        counterFieldName:"counter-value", // name of the hidden field
                                                        formatNumberOptions:{format:"0,000",locale:"us"},
                                                        digitHeight:72, // the height of each digit in the flipCounter-medium.png sprite image
                                                        digitWidth:46, // the width of each digit in the flipCounter-medium.png sprite image
                                                        imagePath:"img/flipCounter-medium3.png", // the path to the sprite image relative to your html document
                                                        easing: false, // the easing function to apply to animations, you can override this with a jQuery.easing method
                                                       // duration:20000, // duration of animations
                                                        onAnimationStarted:false, // call back for animation upon starting
                                                        onAnimationStopped:false, // call back for animation upon stopping
                                                        onAnimationPaused:false, // call back for animation upon pausing
                                                        onAnimationResumed:false // call back for animation upon resuming from pause
                                                });



                                        });
                                /* ]]> */






                              function toggleRed(){

                                 $('.redForm').toggle('slow', function() {
                                           // launchRed();
                                            // Animation complete.
                                          });
                              }







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
                         

                          //  $(function() {

                               
                      /*          $('.redForm').html( $frame );
                                                    setTimeout( function() {
                                                    var doc = $frame[0].contentWindow.document;
                                                    var $body = $('.redForm',doc);
                                                   //$body.html('<h1>Test</h1>');
                                                }, 1 );

                           */


                          //  });

                                function crossVal(){
                                        var donVal = $("doval").val();

                                     //  $('#crossFrame').contents().getElementById('custom-amount').value = donVal;
                                     //  window.frames['redCrossFrame'].document.getElementById('custom-amount').value = 'test successful';




                                }

                                

                                    $('.RedCrossIcon').click(function() {
                                          $('.redForm').toggle('slow', function() {
                                           // launchRed();
                                            // Animation complete.
                                          });

                                      });

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




                                 /*   var $currentIFrame = $('#crossFrame');
                                        $currentIFrame.contents().find("body #custom-amount").val(donVal);

*/
