<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->
<head>
<script src="js/jquery-1.8.2.min.js"></script>
 <script src="js/popcorn-complete.min.js"></script>


    <script type="text/javascript">
   $(document).ready(function(){ 
var cues = [ 0, 4, 12, 23, 34 ],
    pop = Popcorn("#video");

$.each( cues, function( i, cue ) {

  $("body").append("<button data-cue='" + cue + "'>Jump To " + cue + "</button>");

});

$("button").live("click", function() {
    
  pop.currentTime( $(this).data("cue") );

});

})


 

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


 
 
/*usage**/
visibly.onVisible(function () {
    document.title = 'visible'
});
 
visibly.onVisible(function () {
    console.log('visible');
});
 
visibly.onHidden(function () {
    document.title = 'hidden';
});
 
visibly.onHidden(function () {
    console.log('hidden');
});

    </script>
</head>

<body>
	<video id="video" width="500" preload="auto" controls="" poster="http://cuepoint.org/images/poster.jpg">
    <source src="http://cuepoint.org/dartmoor.mp4">
    <source src="http://cuepoint.org/dartmoor-mobile.mp4">
    <source src="http://cuepoint.org/dartmoor.webm">
    <source src="http://cuepoint.org/dartmoor.ogv">
</video>
        
<ul></ul>

    </body>



    </html>