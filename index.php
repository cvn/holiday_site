<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->
<head>
    <base target="_parent" />
    <title>The Bell Ringer Test</title>
    <meta name="description" content="">
    <meta name="author" content="">
        <!-- Mobile Specific Metas
  ================================================== -->
    <meta name="viewport" content="width=device-width, initial-scale=.3, maximum-scale=1">

    <!-- CSS
  ================================================== -->
    <link rel="stylesheet" href="stylesheets/base.css">
    <link rel="stylesheet" href="stylesheets/skeleton.css">
    <link rel="stylesheet" href="stylesheets/layout.css">

    <!--[if lt IE 9]>
        <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <!-- Favicons
    ================================================== -->
    <link rel="shortcut icon" href="images/favicon.ico">
    <link rel="apple-touch-icon" href="images/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="images/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="images/apple-touch-icon-114x114.png">


    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/style.css">
    
    <script src="js/jquery-1.8.2.min.js"></script>
    <script src="js/froogaloop2.min.js"></script>
    <script src="js/popcorn-complete.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/cardcheck.js"></script>
    <script src="js/form-handling.js"></script>


    <script src="js/video-controller-mack.js"></script>
    <script src="js/coinMultiDrag-Mack.js"></script>
   
    <script src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>


    <script src="js/jquery.easy-ticker.js" type="text/javascript"></script>
    <script src="js/jquery.flipCounter.1.2.pack.js" type="text/javascript"></script>

    

</head>
            



<body>






    <!-- Primary Page Layout
    ================================================== -->

   

    <div class="container">




                   <div class="brotherDarkness" style='display: none;' width="100%" height="100%"></div>

        

                <div class="wholeShabang">
    
            
                <!-- Save for Web Slices (112112_site_non_live_01.psd)  controls -->
               

                  <div class="nonLIve">


                                   <!--  <div class="TitleSlice"><a target="_parent" href="http://weareroyale.com/">
                                   <img src="images/nonLive/TitleSlice.png" alt=""></a>
                                 </div> -->

                         <div class="RoyalePresents">
                                 <img src="images/nonLive/RoyalePresents.png" width="231" height="127" alt="">
                         </div>
                         
                         <div class="daBellRinga">
                              <img src="images/nonLive/daBellRinga.png" width="276" height="127" alt="">
                        </div>
                        


                         <div class="bgTexture"></div>

                         <div id="CounterZone">
                              
                         <div id="counter"> <input type="hidden" name="counter-value" value="100" ></div>


                         </div>
                                <script type="text/javascript">
                                /* <![CDATA[ */
                                        jQuery(document).ready(function($) {
                                               // $(".CounterZone").flipCounter();   


                                                $("#CounterZone").flipCounter(
                                                   "startAnimation", // scroll counter from the current number to the specified number
                                                      {
                                                              number: 0000000000001, // the number we want to scroll from
                                                              end_number: 00000001024, // the number we want the counter to scroll to
                                                              easing: jQuery.easing.easeOutCubic, // this easing function to apply to the scroll.
                                                              duration: 5000, // number of ms animation should take to complete
                                                      //  number:0, // the initial number the counter should display, overrides the hidden field
                                                         numIntegralDigits:16, // number of places left of the decimal point to maintain
                                                      //  numFractionalDigits:0, // number of places right of the decimal point to maintain
                                                        digitClass:"counter-digit", // class of the counter digits
                                                        counterFieldName:"counter-value", // name of the hidden field
                                                        digitHeight:72, // the height of each digit in the flipCounter-medium.png sprite image
                                                        digitWidth:46, // the width of each digit in the flipCounter-medium.png sprite image
                                                        imagePath:"img/flipCounter-medium2.png", // the path to the sprite image relative to your html document
                                                        easing: false, // the easing function to apply to animations, you can override this with a jQuery.easing method
                                                        duration:20000, // duration of animations
                                                        onAnimationStarted:false, // call back for animation upon starting
                                                        onAnimationStopped:false, // call back for animation upon stopping
                                                        onAnimationPaused:false, // call back for animation upon pausing
                                                        onAnimationResumed:false // call back for animation upon resuming from pause
                                                });



                                        });
                                /* ]]> */
                                </script>



                         

                         <div class="counterText">
                               <img src="images/nonLive/counterText.png" width="908" height="74" alt="">
                        </div>


                   </div>

                       

                          
                           <input type="number" class='playPopTrigger' style='display: none'>0</input> 

                          


                                <div class="VideoSlice">

                                  <iframe class="video" id="player_1" src="http://player.vimeo.com/video/53978551?api=1&amp;player_id=player_1" frameborder="0" webkitallowfullscreen></iframe>

                                    <video id="htmlvideo" class="video"  > 


                                                
                                        <source src="video/Holiday_Interactive_Loops_v02.m4v">
                                        <source src="video/Holiday_Interactive_Loops_v02.webm" type='video/webm'>
                                            
                                                        
                                                

                                    </video>










<div class="flip-container">
            <form class="mini-form form-inline" >
                <div class="flipper shy">
                    <h5 class="form-title">How much would you like to donate?</h5>
                    <ul class="amount-list unstyled">
                        <li><input name="amount" id="amount1" class="amount-radio" type="radio" value="$10"><label for="amount1" class="radio">  $10</label></li>
                        <li><input name="amount" id="amount2" class="amount-radio" type="radio" value="$20"><label for="amount2" class="radio">  $20</label></li>
                        <li><input name="amount" id="amount3" class="amount-radio" type="radio" value="$50"><label for="amount3" class="radio">  $50</label></li>
                        <li><input name="amount" id="amount4" class="amount-radio" type="radio" value="$100"><label for="amount4" class="radio">  $100</label></li>
                        <li><input name="amount" id="amount5" class="amount-radio" type="radio" value="Other"><label for="amount5" class="radio">  Other</label></li>
                    </ul>
                    <div class="form-nav">
                        <button class="btn cancel">Cancel</button>
                    </div>
                </div>
                <div class="flipper shy">
                    <h5 class="form-title">How would you like to pay?</h5>
                    <div class="cards">
                        <div class="card-container left">
                            <label class="card-link">
                                <img class="card" src="images/pp_cc_mark_37x23.jpg" alt="">
                                <span class="card-label">
                                    <input name="paytype" id="type_paypal" class="type-radio" type="radio" value="paypal">
                                    Paypal account
                                </span>
                            </label>
                        </div>
                        <div class="card-container right">
                            <label class="card-link">
                                <img class="card" src="images/cc_generic.jpg" alt="">
                                <span class="card-label">
                                    <input name="paytype" id="type_cc" class="type-radio" type="radio" value="cc">                                  
                                    Credit card
                                </span>
                            </label>
                        </div>
                    </div>
                    <div class="form-nav">
                        <button class="btn back">Back</button>
                    </div>
                </div>
                <div class="flipper shy">
                    <h5 class="form-title">Enter your information, please.</h5>
                    <div class="form-horizontal">
                        <div class="control-group">
                            <label for="input_cc" class="control-label">Credit card</label>
                            <div class="controls">
                                <input type="text" name="cc" id="input_cc">
                            </div>
                        </div>
                        <div class="control-group">
                            <label for="input_exp" class="control-label">Exp Date</label>
                            <div class="controls">
                                <input type="text" name="cc" id="input_exp">
                            </div>
                        </div>
                        <div class="control-group">
                            <label for="input_cvv" class="control-label">CVV</label>
                            <div class="controls">
                                <input type="text" name="cc" id="input_cvv">
                            </div>
                        </div>
                    </div>
                    <div class="form-nav">
                        <button class="btn back">Back</button>
                    </div>
                    <div class="form-submit">
                        <button class="btn next btn-primary">Donate</button>
                    </div>
                </div>
                <div class="flipper shy">
                    <h5 class="form-title">Thank you!</h5>
                    <div class="form-submit">
                        <button class="btn next btn-primary">Done</button>
                    </div>
                </div>
            </form>
            </div>











                                </div>




                                <div class='daContent' >

                                   <div class="mattePainting" style='display: none;'></div>


                                 

                                    <div class="donatePlate" style='display: none;'>




                                            <div class="donateHeader">
                                                 <img src="images/live/DonateHeader.png"  alt="">
                                            </div>





                                             <div id="soloCoin">
                                            
                                                     <p></p>
                                             </div>

                                            <div class="soloCoin active">
                                                    <img src="images/coinsSolo.png"  alt="">
                                             </div>




                                                      <div class="zeroDolla">
                                                              <img src="images/live/0DollaramounSelector.png"  alt="">
                                                      </div>


                                              <div class="soloCoin2 active">
                                                 <img src="images/coinsSolo.png"  alt="">
                                             </div>

                                               <div class="fiveDolla">
                                                    <img src="images/live/5DollaramounSelector.png"  alt="">
                                              </div>


                                        <div class="Donate-div-BG"  >
                                            <img src="images/live/donationPlatter.png"  alt="">
                                        </div>  


                                        <div class="redCrossTray"  >
                                            <img src="images/live/redCrossLogoDonationTray.png"  alt="">
                                        </div>  
                                        

                                          <div class="crossText"  >
                                            <img src="images/live/proceedsText.png"  alt="">
                                        </div>  
                                        


                                    </div>
  <!--  
                                        <div class="leftContent" >
                                        
                                            <img src="images/nonLive/leftContent.png" alt="">
                                          

                                        </div>

                                     <div class='dividers'>
                                                  <div class="leftDivider">
                                                <img src="images/live/leftDivider.png"  alt="">
                                                 </div>

                                                  <div class="rightDivider">
                                                <img src="images/live/rightDivider.png"  alt="">
                                                 </div>
                                         </div> -->
<!-- 
                                      <div class="centerCont" >


                                            <div class="donateHeader">
                                                 <img src="images/live/DonateHeader.png"  alt="">
                                            </div>


                                            <div class="zeroDolla">
                                                    <img src="images/live/0DollaramounSelector.png"  alt="">
                                            </div>

                                            <div class="fiveDolla">
                                                    <img src="images/live/5DollaramounSelector.png"  alt="">
                                            </div>

                                             <div class="fifteenDolla">
                                                    <img src="images/live/15DollaramounSelector.png"  alt="">
                                            </div>

                                            <div class="fiftyDolla">
                                                    <img src="images/live/50DollaramounSelector.png"  alt="">
                                            </div>


                                           

                                             <div id="soloCoin">
                                            
                                                     <p></p>
                                             </div>

                                            <div class="soloCoin active">
                                                    <img src="images/coinsSolo.png"  alt="">
                                             </div>

                                              <div class="soloCoin2 active">
                                                 <img src="images/coinsSolo.png"  alt="">
                                             </div>


                                     </div>

                                    <div class="RedCrossIcon">
                                            <img src="images/nonLive/RedCrossIcon.png"  alt="">
                                    </div>


                                     <div class="underCrossContent">
                                          <img src="images/nonLive/underCrossContent.png"  alt="">
                                     </div>

 -->
                                 </div>
                        
                              <!--   </div> -->

                          <script type="text/javascript">
                            $(document).ready(function(){
                                $('.nameTicker').easyTicker({
                                    visible: 1,
                                    interval: 1500
                                });
                            });
                         </script>
                        

                              <script type="text/javascript">

                              var bgFadeWait = 6000;
                              var goLiveCatch = 0;
                              var contentLock = 0;

                        


                            

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
                         

                            $(function() {

                               
                                $('.redForm').html( $frame );
                                                    setTimeout( function() {
                                                    var doc = $frame[0].contentWindow.document;
                                                    var $body = $('.redForm',doc);
                                                   //$body.html('<h1>Test</h1>');
                                                }, 1 );

                           


                            });

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

                              </script>



                              



                         <div class="testForm"  style="display: none">   
                            <div class='closedTest' style='display: none'>0</div>
                            

                            <button class='closeTest' onClick="closeTestForm();">Close X</button>
                                <form action="db/postDb.php" >
                                        <input type="text" name="name" placeholder="Enter First and Last Name" required /></input>
                                        <input id='doVal' type="number" name="amount" min="10" max="9999" step="0.01" size="4" placeholder="Must be over $10" required></input>
                                        
                                        <br />

                                        <input id='ccIn' type="number" placeholder="Enter Credit Card Number" name="ccNum" required></input>


                                        <input type="submit" />  


                                </form>


                            </div>

                                <div class="nameTicker">
                                    <ul>
                          
                                        <?php


                                        /*
                                         * Anti-Pattern
                                         */
                                        # Connect

                                        //require_once "json/JSON.php";
                                        //$json = new Services_JSON();

                                        $username = 'root';
                                        $password = 'holiday535!';

                                        /*$name2 = $_GET["name"];
                                        $amount2 = $_GET["amount"];*/

                                        // echo $name2;

                                        //mysql_connect('localhost', 'root', 'holiday535!') or die('Could not connect: ' . mysql_error());


                                        //$name = 'Mack';
                                        try {
                                        $conn = new PDO('mysql:host=localhost;dbname=donations', $username, $password);
                                        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


                                        $stmt = $conn->prepare('SELECT name, amount FROM donatedTest ORDER BY amount DESC');
                                            $stmt->execute(array('name' => $name));


                                        //$result = $stmt->fetchAll();

                                        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                                                //print_r($row);
                                                $namez = $row['name'];
                                                $amountz =  $row['amount'];
                                                $datez = $row['date'];
                                                $value = array('name' => $namez, 'amount' =>$amountz, 'date' => $datez);

                                               // echo '<li>' . $row['name'].' </li> ';



                                            }


                                        } catch(PDOException $e) {
                                            echo 'ERROR: ' . $e->getMessage();
                                        }



                                        ?>  
                                    </ul>

                                    </div>
                                        <div class="openForm"> </div>
                                        <div class="redForm alpha" style="display: none"></div>


                                        
                                     <!--    <div class='frameHome'>

                                        <iframe id="crossFrame" name="redCrossFrame" src="http://rdcrss.org/10OsFID" width="100%" height="100%"></iframe>

                                            </div> -->
                </div>  



                <!-- End Save for Web Slices -->
           
            </div>

    </div><!-- container -->


<!-- End Document
================================================== -->

</body>
</html>