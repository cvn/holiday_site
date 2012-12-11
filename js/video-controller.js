var pop = {}
  , atTheEnd = 0
  , loopStart = '2;00'
  , loopEnd = '3;23'
  , loopFrom = 1
  , stageLoopStart = '2;00'
  , stageLoopEnd = '3;23'
  , frameRate = 24;


function PopController(params) {
	this.params = {
		frameRate: params.frameRate || 24
		,beginWith: params.beginWith || ''
	}
	this.state = {
		atTheEnd: false
		,currentClip: null
		,timeStart: 0
		,timeEnd: 0
	}
	this.init();
}
PopController.prototype = {
	init: function(){
		console.log('--- init ---');
	}
	,addToQueue: function(item){
		console.log('--- addToQueue ---');
	}
	,clearQueue: function(){
		console.log('--- clearQueue ---');
		var events = popcornObj.getTrackEvents();
		// if (events.length) {
		// 	for (var e in events) {
		// 	  popcornObj.removeTrackEvent(events[e]._id);
		// 	}
		// }
	}
	,clearAndAdd: function(item){
		console.log('--- clearAndAdd ---');
		this.clearQueue();
		this.addToQueue(item);
	}
	,timecodeToSeconds: function(clip){
		console.log('--- timecodeToSeconds ---');
		this.state.timeStart = Popcorn.util.toSeconds(clip.timeStart, this.params.frameRate);

		loopStartInSeconds = Popcorn.util.toSeconds(loopStart, frameRate);
		loopEndInSeconds = Popcorn.util.toSeconds(loopEnd, frameRate);
	}
}

mainController = new PopController({beginWith: 'black'});

var clips = {
		black: {
			loop: false
			,timeStart: 0
			,timeEnd: 0
			,interruptable: true
			,interrupt: false
		}
		,transition1: {
			loop: false
			,timeStart: 0
			,timeEnd: '1;23'
			,interruptable: true
			,interrupt: false
			,exit: 'loop1'
		}
		,loop1: {
			loop: true
			,timeStart: '2;00'
			,timeEnd: '3;23'
			,interruptable: true
			,interrupt: false
		}
		,transition2: {
			loop: false
			,timeStart: '4;00'
			,timeEnd: '6;23'
			,interruptable: true
			,interrupt: false
			,exit: 'loop2'
		}
		,loop2: {
			loop: true
			,timeStart: '7;00'
			,timeEnd: '9;23'
			,interruptable: true
			,interrupt: false
		}
	}

var updateLooper = function(loopNumber){
	console.log('updateLooper');
	switch(loopNumber){
		case 0:
			if (loopFrom==1) {
				stageLoopStart = '14;00';
				stageLoopEnd = 0;
			} else if (loopFrom==2) {
				loopEnd = 0;
			}
			loopFrom = 0;
			break;
		case 1:
			if (loopFrom==2) {
				loopEnd = '13;23';
			}
			stageLoopStart = '2;00';
			stageLoopEnd = '3;23';
			loopFrom = 1;
			break;
		case 2:
			if (loopFrom==1) {
				loopEnd = '9;23';
			}
			stageLoopStart = '7;00';
			stageLoopEnd = '9;23';
			loopFrom = 2;
			break;
		default:
			break;
	}
	loopPointsToSeconds();
	changeLoopPoint(pop);
}

var loopSwitcher = function(popcornObj){
	console.log('loopSwitcher');
	$('.button').removeClass('active');

	console.log('A: '+loopStart+' '+loopEnd+' '+stageLoopStart+' '+stageLoopEnd);

	loopStart = stageLoopStart;
	loopEnd = stageLoopEnd;
	loopPointsToSeconds();
	console.log('B: '+loopStart+' '+loopEnd+' '+stageLoopStart+' '+stageLoopEnd);
}

var loopPointsToSeconds = function(){
	console.log('loopPointsToSeconds');
	loopStartInSeconds = Popcorn.util.toSeconds(loopStart, frameRate);
	loopEndInSeconds = Popcorn.util.toSeconds(loopEnd, frameRate);
}

var doLoop = function(popcornObj){
	console.log('doLoop');
	if (atTheEnd) {
		atTheEnd = 0;
		popcornObj.play(0);
	} else {
		popcornObj.play(loopStartInSeconds);
	}
}

var changeLoopPoint = function(popcornObj){
	console.log('changeLoopPoint');
	var events = popcornObj.getTrackEvents();
	if (events.length) {
		for (var e in events) {
		  popcornObj.removeTrackEvent(events[e]._id);
		}
	}
	console.log(loopEndInSeconds);
	console.log(loopFrom);
	popcornObj.cue(loopEndInSeconds, function(){
		if ((loopStart != stageLoopStart) || (loopEnd != stageLoopEnd)){
			loopSwitcher(popcornObj);
			changeLoopPoint(popcornObj);
		}
		doLoop(popcornObj);
	});
}

$(document).ready(function(){
	pop = Popcorn('#htmlvideo', {
    	frameAnimation: true
    });

    pop.on('loadeddata', function(){
    	$('.loading').hide();
    	$('video').show();
		// pop.play();
    });
	$('video').hide();

	loopPointsToSeconds();
	changeLoopPoint(pop);

	pop.cue(3,function(){
		$('.button-container').removeClass('shy');
	});
	// pop.on('timeupdate', function(){
	// 	if (pop.currentTime()>=loopEndInSeconds) {
	// 		loopSwitcher(pop);
	// 	}
	// });

	pop.on('ended',function(){
		atTheEnd = 1;
	});

	$('.button').on('mousedown',function(){
		console.log(' ');
		var $this = $(this);
		$this.addClass('active');

		if ($this.hasClass('button0')) {
			updateLooper(0);
		} else if ($this.hasClass('button1')) {
			updateLooper(1);
		} else if ($this.hasClass('button2')) {
			updateLooper(2);
		}

		if (atTheEnd) {
			doLoop(pop);
		}
	});
});