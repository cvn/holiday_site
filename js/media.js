// **Asset Manager**

// Asset Manager, well, manages named references to audio, video, and images.
//
// Media items are preloaded using a threaded queue system and includes callbacks for when each item is ready and when all items are ready.
//
// We also automatically append the right format extension for the current browser (using the audio and video components of [Modernizr](http://modernizr.com/)) if no file extension is provided.
//
// Asset Manager requires [jQuery 1.7.1+](http://jquery.com/) and [underscore 1.2.3+](http://documentcloud.github.com/underscore/)
//
// If you'd like to take the asset manager for a test drive, [a demo is available](demo.php).
//
// A downloadable version of this javascript is [also available](media.js).

//
//
var assetManager = (function() {

    // Modernizr includes a video and audio library that allows us to deliver the most-approriate media type.
    if (Modernizr){
      var mv = Modernizr.video;
      var ma = Modernizr.audio;

      // Use Modernizr to determine the best media format for the current browser.
      var video_ext = (mv.h264 ? '.mp4' : (mv.webm ? '.webm' : '.ogv' ));
      var audio_ext = (ma.mp3 ? '.mp3' : '.ogg');
    }

    var cache = {}, queue = [], threads = 0, loaded = 0, count = 0, maxThreads = 4, basePath = "YOUR_PATH_HERE";

    // We're using Underscore.js' debounce method to help power the queued preloading. 
    // More information about debounce is available in [the underscore documentation](http://documentcloud.github.com/underscore/#debounce).
    var processQueue = _.debounce(doProcessQueue, 50);

    var nocache = false;

    // Helper functions.
    return {

        setBasePath:function (path) {
            basePath = path;
        },

        getBasePath:function () {
            return basePath;
        },

        getVideo:function (src, allowStreaming, onComplete, onError) {
            src = normalizePath(src, basePath, video_ext);
            return getMedia('video', src, allowStreaming, onComplete, onError);
        },

        getAudio:function (src, allowStreaming, onComplete, onError) {
            src = normalizePath(src, basePath, audio_ext);
            return getMedia('audio', src, allowStreaming, onComplete, onError);
        },

        getImage:function (src, onComplete, onError) {
            src = normalizePath(src, basePath);
            return getMedia('image', src, false, onComplete, onError);
        }
    };

    // Normalize the media source path (or URL) by prepending the basePath to any URL that does not have "http" in the front and optionally appending a media format extension.
    function normalizePath(src, prependPath, appendExtension) {
        if (appendExtension != null && src.charAt(-4) != '.') src += appendExtension;
        if (src.substr(0, 4) != 'http') src = prependPath + src;
        return src;
    }

    // Returns image or media element and adds it to the queue
    function getMedia(type, src, allowStreaming, onComplete, onError) {

        if (cache[src] != null) return cache[src].media;

        if (nocache) src = src + '?' + (+new Date);

        var media;

        switch (type) {
            case 'image':
                media = new Image();
                break;

            case 'audio':
                media = document.createElement('audio');
                break;

            case 'video':
                media = document.createElement('video');
                break;
            default:
                console.error('Media type must be image, audio, or video');
                return null;
        }

        var item = { src:src, media:media, type:type, allowStreaming:allowStreaming, onComplete:onComplete, onError:onError  };
        cache[src] = item;
        queue.push(item);
        count++;
        processQueue();
        return media;
    }

    // This is guts of the queue processing.
    //
    // For each item in the queue, it will fire off a doLoadItem to load the referenced media file.
    function doProcessQueue() {
        while (queue.length > 0 && threads < maxThreads) {
            doLoadItem(queue.shift());
        }
        if (loaded == count) {
            setTimeout(function () {
                $(document).trigger('assetManager.assetLoadComplete', loaded);
            }, 100);
        }
    }

    // Here we actually load the item in question.
    //
    // If an item successfully loads, onRequestSuccess will be called afterward.
    //
    // If it fails to load, we'll call onRequestError
    //
    // onRequestComplete will fire in either case.
    function doLoadItem(item) {

        threads++;

        if (item.type == 'image') {
            item.media.onload = function () {
                item.media.onload = null;
                onRequestSuccess(item);
                onRequestComplete(item);
            };
            item.media.onerror = function () {
                onRequestError(item);
                onRequestComplete(item);
            };

            item.media.src = item.src;
        } else if ((item.type == 'audio' || item.type == 'video') && ((item.allowStreaming === true) || $.browser.msie)) {
            streamMediaItem(item);
        } else {
            $.get(item.src).success(
                function () {
                    onRequestSuccess(item);
                }).error(
                function () {
                    onRequestError(item);
                }).complete(function () {
                    onRequestComplete(item);
            });
        }

    }

    // This is the handler for streaming media items.
    function streamMediaItem(item) {

        var media = item.media;

        item.onCanPlayThrough = _.bind(onCanPlayThrough, item);
        item.onMediaError = _.bind(onMediaError, item);

        media.addEventListener('error', item.onMediaError, false);
        media.addEventListener('canplaythrough', item.onCanPlayThrough, false);

        media.preload = "auto";
        media.src = item.src;

        media.play();
        media.muted = true;
        clearTimeout(item.pendingPause);
        item.pendingPause = setTimeout(function () {
            try {
                media.pause();
                media.muted = false;
            } catch (e) {
            }
        }, 100);

        clearInterval(item.checkIt);
        item.checkIt = setInterval(function () {
            doCheckReadyState(item);
        }, 50);
    }

    // This check watches for the media to be in a state in which it's ready to play
    function doCheckReadyState(item) {
        // Safari will stay on 2, so check for >= 2 instead of waiting for 4
        if (item.media.readyState >= 2) {
            onRequestSuccess(item);
            onRequestComplete(item);
        }
    }

    function onCanPlayThrough() {
        onRequestSuccess(this);
        onRequestComplete(this);
    }

    function onMediaError() {
        onRequestError(this);
        onRequestComplete(this);
    }

    // This is called when an item is loaded and would be a good spot to add notifications if you need them.
    function onRequestSuccess(item) {
        loaded++;
        // Set src on media element
        if (item.media.src != item.src) item.media.src = item.src;
        item.media.muted = false;

        if (_.isFunction(item.onComplete)) item.onComplete.call(item);
    }

    // This is called when an item fails to load and would be a good spot to add notifications if you need them.
    function onRequestError(item) {
        if (_.isFunction(item.onError)) {
            item.onError.call(item);
            // if error is being watched for, don't fail to indicate progress
            loaded++;
        }
    }

    // This is fired after either success or error
    function onRequestComplete(item) {
        if (item.onCanPlayThrough) item.media.removeEventListener('canplaythrough', item.onCanPlayThrough, false);
        if (item.onMediaError) item.media.removeEventListener('error', item.onMediaError, false);
        item.onCanPlayThrough = null;
        item.onMediaError = null;

        clearInterval(item.checkIt);
        clearTimeout(item.pendingPause);

        threads--;
        processQueue();
    }

}());
