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