(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-details-product-details-module"],{

/***/ "./node_modules/recordrtc/RecordRTC.js":
/*!*********************************************!*\
  !*** ./node_modules/recordrtc/RecordRTC.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

// Last time updated: 2019-06-21 4:32:42 AM UTC

// ________________
// RecordRTC v5.5.8

// Open-Sourced: https://github.com/muaz-khan/RecordRTC

// --------------------------------------------------
// Muaz Khan     - www.MuazKhan.com
// MIT License   - www.WebRTC-Experiment.com/licence
// --------------------------------------------------

// ____________
// RecordRTC.js

/**
 * {@link https://github.com/muaz-khan/RecordRTC|RecordRTC} is a WebRTC JavaScript library for audio/video as well as screen activity recording. It supports Chrome, Firefox, Opera, Android, and Microsoft Edge. Platforms: Linux, Mac and Windows. 
 * @summary Record audio, video or screen inside the browser.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef RecordRTC
 * @class
 * @example
 * var recorder = RecordRTC(mediaStream or [arrayOfMediaStream], {
 *     type: 'video', // audio or video or gif or canvas
 *     recorderType: MediaStreamRecorder || CanvasRecorder || StereoAudioRecorder || Etc
 * });
 * recorder.startRecording();
 * @see For further information:
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - Single media-stream object, array of media-streams, html-canvas-element, etc.
 * @param {object} config - {type:"video", recorderType: MediaStreamRecorder, disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, desiredSampRate: 16000, video: HTMLVideoElement, etc.}
 */

function RecordRTC(mediaStream, config) {
    if (!mediaStream) {
        throw 'First parameter is required.';
    }

    config = config || {
        type: 'video'
    };

    config = new RecordRTCConfiguration(mediaStream, config);

    // a reference to user's recordRTC object
    var self = this;

    function startRecording(config2) {
        if (!config.disableLogs) {
            console.log('RecordRTC version: ', self.version);
        }

        if (!!config2) {
            // allow users to set options using startRecording method
            // config2 is similar to main "config" object (second parameter over RecordRTC constructor)
            config = new RecordRTCConfiguration(mediaStream, config2);
        }

        if (!config.disableLogs) {
            console.log('started recording ' + config.type + ' stream.');
        }

        if (mediaRecorder) {
            mediaRecorder.clearRecordedData();
            mediaRecorder.record();

            setState('recording');

            if (self.recordingDuration) {
                handleRecordingDuration();
            }
            return self;
        }

        initRecorder(function() {
            if (self.recordingDuration) {
                handleRecordingDuration();
            }
        });

        return self;
    }

    function initRecorder(initCallback) {
        if (initCallback) {
            config.initCallback = function() {
                initCallback();
                initCallback = config.initCallback = null; // recorder.initRecorder should be call-backed once.
            };
        }

        var Recorder = new GetRecorderType(mediaStream, config);

        mediaRecorder = new Recorder(mediaStream, config);
        mediaRecorder.record();

        setState('recording');

        if (!config.disableLogs) {
            console.log('Initialized recorderType:', mediaRecorder.constructor.name, 'for output-type:', config.type);
        }
    }

    function stopRecording(callback) {
        callback = callback || function() {};

        if (!mediaRecorder) {
            warningLog();
            return;
        }

        if (self.state === 'paused') {
            self.resumeRecording();

            setTimeout(function() {
                stopRecording(callback);
            }, 1);
            return;
        }

        if (self.state !== 'recording' && !config.disableLogs) {
            console.warn('Recording state should be: "recording", however current state is: ', self.state);
        }

        if (!config.disableLogs) {
            console.log('Stopped recording ' + config.type + ' stream.');
        }

        if (config.type !== 'gif') {
            mediaRecorder.stop(_callback);
        } else {
            mediaRecorder.stop();
            _callback();
        }

        setState('stopped');

        function _callback(__blob) {
            if (!mediaRecorder) {
                if (typeof callback.call === 'function') {
                    callback.call(self, '');
                } else {
                    callback('');
                }
                return;
            }

            Object.keys(mediaRecorder).forEach(function(key) {
                if (typeof mediaRecorder[key] === 'function') {
                    return;
                }

                self[key] = mediaRecorder[key];
            });

            var blob = mediaRecorder.blob;

            if (!blob) {
                if (__blob) {
                    mediaRecorder.blob = blob = __blob;
                } else {
                    throw 'Recording failed.';
                }
            }

            if (blob && !config.disableLogs) {
                console.log(blob.type, '->', bytesToSize(blob.size));
            }

            if (callback) {
                var url;

                try {
                    url = URL.createObjectURL(blob);
                } catch (e) {}

                if (typeof callback.call === 'function') {
                    callback.call(self, url);
                } else {
                    callback(url);
                }
            }

            if (!config.autoWriteToDisk) {
                return;
            }

            getDataURL(function(dataURL) {
                var parameter = {};
                parameter[config.type + 'Blob'] = dataURL;
                DiskStorage.Store(parameter);
            });
        }
    }

    function pauseRecording() {
        if (!mediaRecorder) {
            warningLog();
            return;
        }

        if (self.state !== 'recording') {
            if (!config.disableLogs) {
                console.warn('Unable to pause the recording. Recording state: ', self.state);
            }
            return;
        }

        setState('paused');

        mediaRecorder.pause();

        if (!config.disableLogs) {
            console.log('Paused recording.');
        }
    }

    function resumeRecording() {
        if (!mediaRecorder) {
            warningLog();
            return;
        }

        if (self.state !== 'paused') {
            if (!config.disableLogs) {
                console.warn('Unable to resume the recording. Recording state: ', self.state);
            }
            return;
        }

        setState('recording');

        // not all libs have this method yet
        mediaRecorder.resume();

        if (!config.disableLogs) {
            console.log('Resumed recording.');
        }
    }

    function readFile(_blob) {
        postMessage(new FileReaderSync().readAsDataURL(_blob));
    }

    function getDataURL(callback, _mediaRecorder) {
        if (!callback) {
            throw 'Pass a callback function over getDataURL.';
        }

        var blob = _mediaRecorder ? _mediaRecorder.blob : (mediaRecorder || {}).blob;

        if (!blob) {
            if (!config.disableLogs) {
                console.warn('Blob encoder did not finish its job yet.');
            }

            setTimeout(function() {
                getDataURL(callback, _mediaRecorder);
            }, 1000);
            return;
        }

        if (typeof Worker !== 'undefined' && !navigator.mozGetUserMedia) {
            var webWorker = processInWebWorker(readFile);

            webWorker.onmessage = function(event) {
                callback(event.data);
            };

            webWorker.postMessage(blob);
        } else {
            var reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onload = function(event) {
                callback(event.target.result);
            };
        }

        function processInWebWorker(_function) {
            try {
                var blob = URL.createObjectURL(new Blob([_function.toString(),
                    'this.onmessage =  function (eee) {' + _function.name + '(eee.data);}'
                ], {
                    type: 'application/javascript'
                }));

                var worker = new Worker(blob);
                URL.revokeObjectURL(blob);
                return worker;
            } catch (e) {}
        }
    }

    function handleRecordingDuration(counter) {
        counter = counter || 0;

        if (self.state === 'paused') {
            setTimeout(function() {
                handleRecordingDuration(counter);
            }, 1000);
            return;
        }

        if (self.state === 'stopped') {
            return;
        }

        if (counter >= self.recordingDuration) {
            stopRecording(self.onRecordingStopped);
            return;
        }

        counter += 1000; // 1-second

        setTimeout(function() {
            handleRecordingDuration(counter);
        }, 1000);
    }

    function setState(state) {
        if (!self) {
            return;
        }

        self.state = state;

        if (typeof self.onStateChanged.call === 'function') {
            self.onStateChanged.call(self, state);
        } else {
            self.onStateChanged(state);
        }
    }

    var WARNING = 'It seems that recorder is destroyed or "startRecording" is not invoked for ' + config.type + ' recorder.';

    function warningLog() {
        if (config.disableLogs === true) {
            return;
        }

        console.warn(WARNING);
    }

    var mediaRecorder;

    var returnObject = {
        /**
         * This method starts the recording.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * var recorder = RecordRTC(mediaStream, {
         *     type: 'video'
         * });
         * recorder.startRecording();
         */
        startRecording: startRecording,

        /**
         * This method stops the recording. It is strongly recommended to get "blob" or "URI" inside the callback to make sure all recorders finished their job.
         * @param {function} callback - Callback to get the recorded blob.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.stopRecording(function() {
         *     // use either "this" or "recorder" object; both are identical
         *     video.src = this.toURL();
         *     var blob = this.getBlob();
         * });
         */
        stopRecording: stopRecording,

        /**
         * This method pauses the recording. You can resume recording using "resumeRecording" method.
         * @method
         * @memberof RecordRTC
         * @instance
         * @todo Firefox is unable to pause the recording. Fix it.
         * @example
         * recorder.pauseRecording();  // pause the recording
         * recorder.resumeRecording(); // resume again
         */
        pauseRecording: pauseRecording,

        /**
         * This method resumes the recording.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.pauseRecording();  // first of all, pause the recording
         * recorder.resumeRecording(); // now resume it
         */
        resumeRecording: resumeRecording,

        /**
         * This method initializes the recording.
         * @method
         * @memberof RecordRTC
         * @instance
         * @todo This method should be deprecated.
         * @example
         * recorder.initRecorder();
         */
        initRecorder: initRecorder,

        /**
         * Ask RecordRTC to auto-stop the recording after 5 minutes.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * var fiveMinutes = 5 * 1000 * 60;
         * recorder.setRecordingDuration(fiveMinutes, function() {
         *    var blob = this.getBlob();
         *    video.src = this.toURL();
         * });
         * 
         * // or otherwise
         * recorder.setRecordingDuration(fiveMinutes).onRecordingStopped(function() {
         *    var blob = this.getBlob();
         *    video.src = this.toURL();
         * });
         */
        setRecordingDuration: function(recordingDuration, callback) {
            if (typeof recordingDuration === 'undefined') {
                throw 'recordingDuration is required.';
            }

            if (typeof recordingDuration !== 'number') {
                throw 'recordingDuration must be a number.';
            }

            self.recordingDuration = recordingDuration;
            self.onRecordingStopped = callback || function() {};

            return {
                onRecordingStopped: function(callback) {
                    self.onRecordingStopped = callback;
                }
            };
        },

        /**
         * This method can be used to clear/reset all the recorded data.
         * @method
         * @memberof RecordRTC
         * @instance
         * @todo Figure out the difference between "reset" and "clearRecordedData" methods.
         * @example
         * recorder.clearRecordedData();
         */
        clearRecordedData: function() {
            if (!mediaRecorder) {
                warningLog();
                return;
            }

            mediaRecorder.clearRecordedData();

            if (!config.disableLogs) {
                console.log('Cleared old recorded data.');
            }
        },

        /**
         * Get the recorded blob. Use this method inside the "stopRecording" callback.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.stopRecording(function() {
         *     var blob = this.getBlob();
         *
         *     var file = new File([blob], 'filename.webm', {
         *         type: 'video/webm'
         *     });
         *
         *     var formData = new FormData();
         *     formData.append('file', file); // upload "File" object rather than a "Blob"
         *     uploadToServer(formData);
         * });
         * @returns {Blob} Returns recorded data as "Blob" object.
         */
        getBlob: function() {
            if (!mediaRecorder) {
                warningLog();
                return;
            }

            return mediaRecorder.blob;
        },

        /**
         * Get data-URI instead of Blob.
         * @param {function} callback - Callback to get the Data-URI.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.stopRecording(function() {
         *     recorder.getDataURL(function(dataURI) {
         *         video.src = dataURI;
         *     });
         * });
         */
        getDataURL: getDataURL,

        /**
         * Get virtual/temporary URL. Usage of this URL is limited to current tab.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.stopRecording(function() {
         *     video.src = this.toURL();
         * });
         * @returns {String} Returns a virtual/temporary URL for the recorded "Blob".
         */
        toURL: function() {
            if (!mediaRecorder) {
                warningLog();
                return;
            }

            return URL.createObjectURL(mediaRecorder.blob);
        },

        /**
         * Get internal recording object (i.e. internal module) e.g. MutliStreamRecorder, MediaStreamRecorder, StereoAudioRecorder or WhammyRecorder etc.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * var internalRecorder = recorder.getInternalRecorder();
         * if(internalRecorder instanceof MultiStreamRecorder) {
         *     internalRecorder.addStreams([newAudioStream]);
         *     internalRecorder.resetVideoStreams([screenStream]);
         * }
         * @returns {Object} Returns internal recording object.
         */
        getInternalRecorder: function() {
            return mediaRecorder;
        },

        /**
         * Invoke save-as dialog to save the recorded blob into your disk.
         * @param {string} fileName - Set your own file name.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.stopRecording(function() {
         *     this.save('file-name');
         *
         *     // or manually:
         *     invokeSaveAsDialog(this.getBlob(), 'filename.webm');
         * });
         */
        save: function(fileName) {
            if (!mediaRecorder) {
                warningLog();
                return;
            }

            invokeSaveAsDialog(mediaRecorder.blob, fileName);
        },

        /**
         * This method gets a blob from indexed-DB storage.
         * @param {function} callback - Callback to get the recorded blob.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.getFromDisk(function(dataURL) {
         *     video.src = dataURL;
         * });
         */
        getFromDisk: function(callback) {
            if (!mediaRecorder) {
                warningLog();
                return;
            }

            RecordRTC.getFromDisk(config.type, callback);
        },

        /**
         * This method appends an array of webp images to the recorded video-blob. It takes an "array" object.
         * @type {Array.<Array>}
         * @param {Array} arrayOfWebPImages - Array of webp images.
         * @method
         * @memberof RecordRTC
         * @instance
         * @todo This method should be deprecated.
         * @example
         * var arrayOfWebPImages = [];
         * arrayOfWebPImages.push({
         *     duration: index,
         *     image: 'data:image/webp;base64,...'
         * });
         * recorder.setAdvertisementArray(arrayOfWebPImages);
         */
        setAdvertisementArray: function(arrayOfWebPImages) {
            config.advertisement = [];

            var length = arrayOfWebPImages.length;
            for (var i = 0; i < length; i++) {
                config.advertisement.push({
                    duration: i,
                    image: arrayOfWebPImages[i]
                });
            }
        },

        /**
         * It is equivalent to <code class="str">"recorder.getBlob()"</code> method. Usage of "getBlob" is recommended, though.
         * @property {Blob} blob - Recorded Blob can be accessed using this property.
         * @memberof RecordRTC
         * @instance
         * @readonly
         * @example
         * recorder.stopRecording(function() {
         *     var blob = this.blob;
         *
         *     // below one is recommended
         *     var blob = this.getBlob();
         * });
         */
        blob: null,

        /**
         * This works only with {recorderType:StereoAudioRecorder}. Use this property on "stopRecording" to verify the encoder's sample-rates.
         * @property {number} bufferSize - Buffer-size used to encode the WAV container
         * @memberof RecordRTC
         * @instance
         * @readonly
         * @example
         * recorder.stopRecording(function() {
         *     alert('Recorder used this buffer-size: ' + this.bufferSize);
         * });
         */
        bufferSize: 0,

        /**
         * This works only with {recorderType:StereoAudioRecorder}. Use this property on "stopRecording" to verify the encoder's sample-rates.
         * @property {number} sampleRate - Sample-rates used to encode the WAV container
         * @memberof RecordRTC
         * @instance
         * @readonly
         * @example
         * recorder.stopRecording(function() {
         *     alert('Recorder used these sample-rates: ' + this.sampleRate);
         * });
         */
        sampleRate: 0,

        /**
         * {recorderType:StereoAudioRecorder} returns ArrayBuffer object.
         * @property {ArrayBuffer} buffer - Audio ArrayBuffer, supported only in Chrome.
         * @memberof RecordRTC
         * @instance
         * @readonly
         * @example
         * recorder.stopRecording(function() {
         *     var arrayBuffer = this.buffer;
         *     alert(arrayBuffer.byteLength);
         * });
         */
        buffer: null,

        /**
         * This method resets the recorder. So that you can reuse single recorder instance many times.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.reset();
         * recorder.startRecording();
         */
        reset: function() {
            if (self.state === 'recording' && !config.disableLogs) {
                console.warn('Stop an active recorder.');
            }

            if (mediaRecorder && typeof mediaRecorder.clearRecordedData === 'function') {
                mediaRecorder.clearRecordedData();
            }
            mediaRecorder = null;
            setState('inactive');
            self.blob = null;
        },

        /**
         * This method is called whenever recorder's state changes. Use this as an "event".
         * @property {String} state - A recorder's state can be: recording, paused, stopped or inactive.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.onStateChanged = function(state) {
         *     console.log('Recorder state: ', state);
         * };
         */
        onStateChanged: function(state) {
            if (!config.disableLogs) {
                console.log('Recorder state changed:', state);
            }
        },

        /**
         * A recorder can have inactive, recording, paused or stopped states.
         * @property {String} state - A recorder's state can be: recording, paused, stopped or inactive.
         * @memberof RecordRTC
         * @static
         * @readonly
         * @example
         * // this looper function will keep you updated about the recorder's states.
         * (function looper() {
         *     document.querySelector('h1').innerHTML = 'Recorder\'s state is: ' + recorder.state;
         *     if(recorder.state === 'stopped') return; // ignore+stop
         *     setTimeout(looper, 1000); // update after every 3-seconds
         * })();
         * recorder.startRecording();
         */
        state: 'inactive',

        /**
         * Get recorder's readonly state.
         * @method
         * @memberof RecordRTC
         * @example
         * var state = recorder.getState();
         * @returns {String} Returns recording state.
         */
        getState: function() {
            return self.state;
        },

        /**
         * Destroy RecordRTC instance. Clear all recorders and objects.
         * @method
         * @memberof RecordRTC
         * @example
         * recorder.destroy();
         */
        destroy: function() {
            var disableLogsCache = config.disableLogs;

            config = {
                disableLogs: true
            };
            self.reset();
            setState('destroyed');
            returnObject = self = null;

            if (Storage.AudioContextConstructor) {
                Storage.AudioContextConstructor.close();
                Storage.AudioContextConstructor = null;
            }

            config.disableLogs = disableLogsCache;

            if (!config.disableLogs) {
                console.log('RecordRTC is destroyed.');
            }
        },

        /**
         * RecordRTC version number
         * @property {String} version - Release version number.
         * @memberof RecordRTC
         * @static
         * @readonly
         * @example
         * alert(recorder.version);
         */
        version: '5.5.8'
    };

    if (!this) {
        self = returnObject;
        return returnObject;
    }

    // if someone wants to use RecordRTC with the "new" keyword.
    for (var prop in returnObject) {
        this[prop] = returnObject[prop];
    }

    self = this;

    return returnObject;
}

RecordRTC.version = '5.5.8';

if (true /* && !!module.exports*/ ) {
    module.exports = RecordRTC;
}

if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return RecordRTC;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

RecordRTC.getFromDisk = function(type, callback) {
    if (!callback) {
        throw 'callback is mandatory.';
    }

    console.log('Getting recorded ' + (type === 'all' ? 'blobs' : type + ' blob ') + ' from disk!');
    DiskStorage.Fetch(function(dataURL, _type) {
        if (type !== 'all' && _type === type + 'Blob' && callback) {
            callback(dataURL);
        }

        if (type === 'all' && callback) {
            callback(dataURL, _type.replace('Blob', ''));
        }
    });
};

/**
 * This method can be used to store recorded blobs into IndexedDB storage.
 * @param {object} options - {audio: Blob, video: Blob, gif: Blob}
 * @method
 * @memberof RecordRTC
 * @example
 * RecordRTC.writeToDisk({
 *     audio: audioBlob,
 *     video: videoBlob,
 *     gif  : gifBlob
 * });
 */
RecordRTC.writeToDisk = function(options) {
    console.log('Writing recorded blob(s) to disk!');
    options = options || {};
    if (options.audio && options.video && options.gif) {
        options.audio.getDataURL(function(audioDataURL) {
            options.video.getDataURL(function(videoDataURL) {
                options.gif.getDataURL(function(gifDataURL) {
                    DiskStorage.Store({
                        audioBlob: audioDataURL,
                        videoBlob: videoDataURL,
                        gifBlob: gifDataURL
                    });
                });
            });
        });
    } else if (options.audio && options.video) {
        options.audio.getDataURL(function(audioDataURL) {
            options.video.getDataURL(function(videoDataURL) {
                DiskStorage.Store({
                    audioBlob: audioDataURL,
                    videoBlob: videoDataURL
                });
            });
        });
    } else if (options.audio && options.gif) {
        options.audio.getDataURL(function(audioDataURL) {
            options.gif.getDataURL(function(gifDataURL) {
                DiskStorage.Store({
                    audioBlob: audioDataURL,
                    gifBlob: gifDataURL
                });
            });
        });
    } else if (options.video && options.gif) {
        options.video.getDataURL(function(videoDataURL) {
            options.gif.getDataURL(function(gifDataURL) {
                DiskStorage.Store({
                    videoBlob: videoDataURL,
                    gifBlob: gifDataURL
                });
            });
        });
    } else if (options.audio) {
        options.audio.getDataURL(function(audioDataURL) {
            DiskStorage.Store({
                audioBlob: audioDataURL
            });
        });
    } else if (options.video) {
        options.video.getDataURL(function(videoDataURL) {
            DiskStorage.Store({
                videoBlob: videoDataURL
            });
        });
    } else if (options.gif) {
        options.gif.getDataURL(function(gifDataURL) {
            DiskStorage.Store({
                gifBlob: gifDataURL
            });
        });
    }
};

// __________________________
// RecordRTC-Configuration.js

/**
 * {@link RecordRTCConfiguration} is an inner/private helper for {@link RecordRTC}.
 * @summary It configures the 2nd parameter passed over {@link RecordRTC} and returns a valid "config" object.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef RecordRTCConfiguration
 * @class
 * @example
 * var options = RecordRTCConfiguration(mediaStream, options);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {type:"video", disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, video: HTMLVideoElement, getNativeBlob:true, etc.}
 */

function RecordRTCConfiguration(mediaStream, config) {
    if (!config.recorderType && !config.type) {
        if (!!config.audio && !!config.video) {
            config.type = 'video';
        } else if (!!config.audio && !config.video) {
            config.type = 'audio';
        }
    }

    if (config.recorderType && !config.type) {
        if (config.recorderType === WhammyRecorder || config.recorderType === CanvasRecorder || (typeof WebAssemblyRecorder !== 'undefined' && config.recorderType === WebAssemblyRecorder)) {
            config.type = 'video';
        } else if (config.recorderType === GifRecorder) {
            config.type = 'gif';
        } else if (config.recorderType === StereoAudioRecorder) {
            config.type = 'audio';
        } else if (config.recorderType === MediaStreamRecorder) {
            if (getTracks(mediaStream, 'audio').length && getTracks(mediaStream, 'video').length) {
                config.type = 'video';
            } else if (!getTracks(mediaStream, 'audio').length && getTracks(mediaStream, 'video').length) {
                config.type = 'video';
            } else if (getTracks(mediaStream, 'audio').length && !getTracks(mediaStream, 'video').length) {
                config.type = 'audio';
            } else {
                // config.type = 'UnKnown';
            }
        }
    }

    if (typeof MediaStreamRecorder !== 'undefined' && typeof MediaRecorder !== 'undefined' && 'requestData' in MediaRecorder.prototype) {
        if (!config.mimeType) {
            config.mimeType = 'video/webm';
        }

        if (!config.type) {
            config.type = config.mimeType.split('/')[0];
        }

        if (!config.bitsPerSecond) {
            // config.bitsPerSecond = 128000;
        }
    }

    // consider default type=audio
    if (!config.type) {
        if (config.mimeType) {
            config.type = config.mimeType.split('/')[0];
        }
        if (!config.type) {
            config.type = 'audio';
        }
    }

    return config;
}

// __________________
// GetRecorderType.js

/**
 * {@link GetRecorderType} is an inner/private helper for {@link RecordRTC}.
 * @summary It returns best recorder-type available for your browser.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef GetRecorderType
 * @class
 * @example
 * var RecorderType = GetRecorderType(options);
 * var recorder = new RecorderType(options);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {type:"video", disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, video: HTMLVideoElement, etc.}
 */

function GetRecorderType(mediaStream, config) {
    var recorder;

    // StereoAudioRecorder can work with all three: Edge, Firefox and Chrome
    // todo: detect if it is Edge, then auto use: StereoAudioRecorder
    if (isChrome || isEdge || isOpera) {
        // Media Stream Recording API has not been implemented in chrome yet;
        // That's why using WebAudio API to record stereo audio in WAV format
        recorder = StereoAudioRecorder;
    }

    if (typeof MediaRecorder !== 'undefined' && 'requestData' in MediaRecorder.prototype && !isChrome) {
        recorder = MediaStreamRecorder;
    }

    // video recorder (in WebM format)
    if (config.type === 'video' && (isChrome || isOpera)) {
        recorder = WhammyRecorder;

        if (typeof WebAssemblyRecorder !== 'undefined' && typeof ReadableStream !== 'undefined') {
            recorder = WebAssemblyRecorder;
        }
    }

    // video recorder (in Gif format)
    if (config.type === 'gif') {
        recorder = GifRecorder;
    }

    // html2canvas recording!
    if (config.type === 'canvas') {
        recorder = CanvasRecorder;
    }

    if (isMediaRecorderCompatible() && recorder !== CanvasRecorder && recorder !== GifRecorder && typeof MediaRecorder !== 'undefined' && 'requestData' in MediaRecorder.prototype) {
        if (getTracks(mediaStream, 'video').length || getTracks(mediaStream, 'audio').length) {
            // audio-only recording
            if (config.type === 'audio') {
                if (typeof MediaRecorder.isTypeSupported === 'function' && MediaRecorder.isTypeSupported('audio/webm')) {
                    recorder = MediaStreamRecorder;
                }
                // else recorder = StereoAudioRecorder;
            } else {
                // video or screen tracks
                if (typeof MediaRecorder.isTypeSupported === 'function' && MediaRecorder.isTypeSupported('video/webm')) {
                    recorder = MediaStreamRecorder;
                }
            }
        }
    }

    if (mediaStream instanceof Array && mediaStream.length) {
        recorder = MultiStreamRecorder;
    }

    if (config.recorderType) {
        recorder = config.recorderType;
    }

    if (!config.disableLogs && !!recorder && !!recorder.name) {
        console.log('Using recorderType:', recorder.name || recorder.constructor.name);
    }

    if (!recorder && isSafari) {
        recorder = MediaStreamRecorder;
    }

    return recorder;
}

// _____________
// MRecordRTC.js

/**
 * MRecordRTC runs on top of {@link RecordRTC} to bring multiple recordings in a single place, by providing simple API.
 * @summary MRecordRTC stands for "Multiple-RecordRTC".
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef MRecordRTC
 * @class
 * @example
 * var recorder = new MRecordRTC();
 * recorder.addStream(MediaStream);
 * recorder.mediaType = {
 *     audio: true, // or StereoAudioRecorder or MediaStreamRecorder
 *     video: true, // or WhammyRecorder or MediaStreamRecorder or WebAssemblyRecorder or CanvasRecorder
 *     gif: true    // or GifRecorder
 * };
 * // mimeType is optional and should be set only in advance cases.
 * recorder.mimeType = {
 *     audio: 'audio/wav',
 *     video: 'video/webm',
 *     gif:   'image/gif'
 * };
 * recorder.startRecording();
 * @see For further information:
 * @see {@link https://github.com/muaz-khan/RecordRTC/tree/master/MRecordRTC|MRecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @requires {@link RecordRTC}
 */

function MRecordRTC(mediaStream) {

    /**
     * This method attaches MediaStream object to {@link MRecordRTC}.
     * @param {MediaStream} mediaStream - A MediaStream object, either fetched using getUserMedia API, or generated using captureStreamUntilEnded or WebAudio API.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.addStream(MediaStream);
     */
    this.addStream = function(_mediaStream) {
        if (_mediaStream) {
            mediaStream = _mediaStream;
        }
    };

    /**
     * This property can be used to set the recording type e.g. audio, or video, or gif, or canvas.
     * @property {object} mediaType - {audio: true, video: true, gif: true}
     * @memberof MRecordRTC
     * @example
     * var recorder = new MRecordRTC();
     * recorder.mediaType = {
     *     audio: true, // TRUE or StereoAudioRecorder or MediaStreamRecorder
     *     video: true, // TRUE or WhammyRecorder or MediaStreamRecorder or WebAssemblyRecorder or CanvasRecorder
     *     gif  : true  // TRUE or GifRecorder
     * };
     */
    this.mediaType = {
        audio: true,
        video: true
    };

    /**
     * This method starts recording.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.startRecording();
     */
    this.startRecording = function() {
        var mediaType = this.mediaType;
        var recorderType;
        var mimeType = this.mimeType || {
            audio: null,
            video: null,
            gif: null
        };

        if (typeof mediaType.audio !== 'function' && isMediaRecorderCompatible() && !getTracks(mediaStream, 'audio').length) {
            mediaType.audio = false;
        }

        if (typeof mediaType.video !== 'function' && isMediaRecorderCompatible() && !getTracks(mediaStream, 'video').length) {
            mediaType.video = false;
        }

        if (typeof mediaType.gif !== 'function' && isMediaRecorderCompatible() && !getTracks(mediaStream, 'video').length) {
            mediaType.gif = false;
        }

        if (!mediaType.audio && !mediaType.video && !mediaType.gif) {
            throw 'MediaStream must have either audio or video tracks.';
        }

        if (!!mediaType.audio) {
            recorderType = null;
            if (typeof mediaType.audio === 'function') {
                recorderType = mediaType.audio;
            }

            this.audioRecorder = new RecordRTC(mediaStream, {
                type: 'audio',
                bufferSize: this.bufferSize,
                sampleRate: this.sampleRate,
                numberOfAudioChannels: this.numberOfAudioChannels || 2,
                disableLogs: this.disableLogs,
                recorderType: recorderType,
                mimeType: mimeType.audio,
                timeSlice: this.timeSlice,
                onTimeStamp: this.onTimeStamp
            });

            if (!mediaType.video) {
                this.audioRecorder.startRecording();
            }
        }

        if (!!mediaType.video) {
            recorderType = null;
            if (typeof mediaType.video === 'function') {
                recorderType = mediaType.video;
            }

            var newStream = mediaStream;

            if (isMediaRecorderCompatible() && !!mediaType.audio && typeof mediaType.audio === 'function') {
                var videoTrack = getTracks(mediaStream, 'video')[0];

                if (isFirefox) {
                    newStream = new MediaStream();
                    newStream.addTrack(videoTrack);

                    if (recorderType && recorderType === WhammyRecorder) {
                        // Firefox does NOT supports webp-encoding yet
                        // But Firefox do supports WebAssemblyRecorder
                        recorderType = MediaStreamRecorder;
                    }
                } else {
                    newStream = new MediaStream();
                    newStream.addTrack(videoTrack);
                }
            }

            this.videoRecorder = new RecordRTC(newStream, {
                type: 'video',
                video: this.video,
                canvas: this.canvas,
                frameInterval: this.frameInterval || 10,
                disableLogs: this.disableLogs,
                recorderType: recorderType,
                mimeType: mimeType.video,
                timeSlice: this.timeSlice,
                onTimeStamp: this.onTimeStamp,
                workerPath: this.workerPath,
                webAssemblyPath: this.webAssemblyPath,
                frameRate: this.frameRate, // used by WebAssemblyRecorder; values: usually 30; accepts any.
                bitrate: this.bitrate // used by WebAssemblyRecorder; values: 0 to 1000+
            });

            if (!mediaType.audio) {
                this.videoRecorder.startRecording();
            }
        }

        if (!!mediaType.audio && !!mediaType.video) {
            var self = this;

            var isSingleRecorder = isMediaRecorderCompatible() === true;

            if (mediaType.audio instanceof StereoAudioRecorder && !!mediaType.video) {
                isSingleRecorder = false;
            } else if (mediaType.audio !== true && mediaType.video !== true && mediaType.audio !== mediaType.video) {
                isSingleRecorder = false;
            }

            if (isSingleRecorder === true) {
                self.audioRecorder = null;
                self.videoRecorder.startRecording();
            } else {
                self.videoRecorder.initRecorder(function() {
                    self.audioRecorder.initRecorder(function() {
                        // Both recorders are ready to record things accurately
                        self.videoRecorder.startRecording();
                        self.audioRecorder.startRecording();
                    });
                });
            }
        }

        if (!!mediaType.gif) {
            recorderType = null;
            if (typeof mediaType.gif === 'function') {
                recorderType = mediaType.gif;
            }
            this.gifRecorder = new RecordRTC(mediaStream, {
                type: 'gif',
                frameRate: this.frameRate || 200,
                quality: this.quality || 10,
                disableLogs: this.disableLogs,
                recorderType: recorderType,
                mimeType: mimeType.gif
            });
            this.gifRecorder.startRecording();
        }
    };

    /**
     * This method stops recording.
     * @param {function} callback - Callback function is invoked when all encoders finished their jobs.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.stopRecording(function(recording){
     *     var audioBlob = recording.audio;
     *     var videoBlob = recording.video;
     *     var gifBlob   = recording.gif;
     * });
     */
    this.stopRecording = function(callback) {
        callback = callback || function() {};

        if (this.audioRecorder) {
            this.audioRecorder.stopRecording(function(blobURL) {
                callback(blobURL, 'audio');
            });
        }

        if (this.videoRecorder) {
            this.videoRecorder.stopRecording(function(blobURL) {
                callback(blobURL, 'video');
            });
        }

        if (this.gifRecorder) {
            this.gifRecorder.stopRecording(function(blobURL) {
                callback(blobURL, 'gif');
            });
        }
    };

    /**
     * This method pauses recording.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.pauseRecording();
     */
    this.pauseRecording = function() {
        if (this.audioRecorder) {
            this.audioRecorder.pauseRecording();
        }

        if (this.videoRecorder) {
            this.videoRecorder.pauseRecording();
        }

        if (this.gifRecorder) {
            this.gifRecorder.pauseRecording();
        }
    };

    /**
     * This method resumes recording.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.resumeRecording();
     */
    this.resumeRecording = function() {
        if (this.audioRecorder) {
            this.audioRecorder.resumeRecording();
        }

        if (this.videoRecorder) {
            this.videoRecorder.resumeRecording();
        }

        if (this.gifRecorder) {
            this.gifRecorder.resumeRecording();
        }
    };

    /**
     * This method can be used to manually get all recorded blobs.
     * @param {function} callback - All recorded blobs are passed back to the "callback" function.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.getBlob(function(recording){
     *     var audioBlob = recording.audio;
     *     var videoBlob = recording.video;
     *     var gifBlob   = recording.gif;
     * });
     * // or
     * var audioBlob = recorder.getBlob().audio;
     * var videoBlob = recorder.getBlob().video;
     */
    this.getBlob = function(callback) {
        var output = {};

        if (this.audioRecorder) {
            output.audio = this.audioRecorder.getBlob();
        }

        if (this.videoRecorder) {
            output.video = this.videoRecorder.getBlob();
        }

        if (this.gifRecorder) {
            output.gif = this.gifRecorder.getBlob();
        }

        if (callback) {
            callback(output);
        }

        return output;
    };

    /**
     * Destroy all recorder instances.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.destroy();
     */
    this.destroy = function() {
        if (this.audioRecorder) {
            this.audioRecorder.destroy();
            this.audioRecorder = null;
        }

        if (this.videoRecorder) {
            this.videoRecorder.destroy();
            this.videoRecorder = null;
        }

        if (this.gifRecorder) {
            this.gifRecorder.destroy();
            this.gifRecorder = null;
        }
    };

    /**
     * This method can be used to manually get all recorded blobs' DataURLs.
     * @param {function} callback - All recorded blobs' DataURLs are passed back to the "callback" function.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.getDataURL(function(recording){
     *     var audioDataURL = recording.audio;
     *     var videoDataURL = recording.video;
     *     var gifDataURL   = recording.gif;
     * });
     */
    this.getDataURL = function(callback) {
        this.getBlob(function(blob) {
            if (blob.audio && blob.video) {
                getDataURL(blob.audio, function(_audioDataURL) {
                    getDataURL(blob.video, function(_videoDataURL) {
                        callback({
                            audio: _audioDataURL,
                            video: _videoDataURL
                        });
                    });
                });
            } else if (blob.audio) {
                getDataURL(blob.audio, function(_audioDataURL) {
                    callback({
                        audio: _audioDataURL
                    });
                });
            } else if (blob.video) {
                getDataURL(blob.video, function(_videoDataURL) {
                    callback({
                        video: _videoDataURL
                    });
                });
            }
        });

        function getDataURL(blob, callback00) {
            if (typeof Worker !== 'undefined') {
                var webWorker = processInWebWorker(function readFile(_blob) {
                    postMessage(new FileReaderSync().readAsDataURL(_blob));
                });

                webWorker.onmessage = function(event) {
                    callback00(event.data);
                };

                webWorker.postMessage(blob);
            } else {
                var reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onload = function(event) {
                    callback00(event.target.result);
                };
            }
        }

        function processInWebWorker(_function) {
            var blob = URL.createObjectURL(new Blob([_function.toString(),
                'this.onmessage =  function (eee) {' + _function.name + '(eee.data);}'
            ], {
                type: 'application/javascript'
            }));

            var worker = new Worker(blob);
            var url;
            if (typeof URL !== 'undefined') {
                url = URL;
            } else if (typeof webkitURL !== 'undefined') {
                url = webkitURL;
            } else {
                throw 'Neither URL nor webkitURL detected.';
            }
            url.revokeObjectURL(blob);
            return worker;
        }
    };

    /**
     * This method can be used to ask {@link MRecordRTC} to write all recorded blobs into IndexedDB storage.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.writeToDisk();
     */
    this.writeToDisk = function() {
        RecordRTC.writeToDisk({
            audio: this.audioRecorder,
            video: this.videoRecorder,
            gif: this.gifRecorder
        });
    };

    /**
     * This method can be used to invoke a save-as dialog for all recorded blobs.
     * @param {object} args - {audio: 'audio-name', video: 'video-name', gif: 'gif-name'}
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.save({
     *     audio: 'audio-file-name',
     *     video: 'video-file-name',
     *     gif  : 'gif-file-name'
     * });
     */
    this.save = function(args) {
        args = args || {
            audio: true,
            video: true,
            gif: true
        };

        if (!!args.audio && this.audioRecorder) {
            this.audioRecorder.save(typeof args.audio === 'string' ? args.audio : '');
        }

        if (!!args.video && this.videoRecorder) {
            this.videoRecorder.save(typeof args.video === 'string' ? args.video : '');
        }
        if (!!args.gif && this.gifRecorder) {
            this.gifRecorder.save(typeof args.gif === 'string' ? args.gif : '');
        }
    };
}

/**
 * This method can be used to get all recorded blobs from IndexedDB storage.
 * @param {string} type - 'all' or 'audio' or 'video' or 'gif'
 * @param {function} callback - Callback function to get all stored blobs.
 * @method
 * @memberof MRecordRTC
 * @example
 * MRecordRTC.getFromDisk('all', function(dataURL, type){
 *     if(type === 'audio') { }
 *     if(type === 'video') { }
 *     if(type === 'gif')   { }
 * });
 */
MRecordRTC.getFromDisk = RecordRTC.getFromDisk;

/**
 * This method can be used to store recorded blobs into IndexedDB storage.
 * @param {object} options - {audio: Blob, video: Blob, gif: Blob}
 * @method
 * @memberof MRecordRTC
 * @example
 * MRecordRTC.writeToDisk({
 *     audio: audioBlob,
 *     video: videoBlob,
 *     gif  : gifBlob
 * });
 */
MRecordRTC.writeToDisk = RecordRTC.writeToDisk;

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.MRecordRTC = MRecordRTC;
}

var browserFakeUserAgent = 'Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45';

(function(that) {
    if (!that) {
        return;
    }

    if (typeof window !== 'undefined') {
        return;
    }

    if (typeof global === 'undefined') {
        return;
    }

    global.navigator = {
        userAgent: browserFakeUserAgent,
        getUserMedia: function() {}
    };

    if (!global.console) {
        global.console = {};
    }

    if (typeof global.console.log === 'undefined' || typeof global.console.error === 'undefined') {
        global.console.error = global.console.log = global.console.log || function() {
            console.log(arguments);
        };
    }

    if (typeof document === 'undefined') {
        /*global document:true */
        that.document = {
            documentElement: {
                appendChild: function() {
                    return '';
                }
            }
        };

        document.createElement = document.captureStream = document.mozCaptureStream = function() {
            var obj = {
                getContext: function() {
                    return obj;
                },
                play: function() {},
                pause: function() {},
                drawImage: function() {},
                toDataURL: function() {
                    return '';
                },
                style: {}
            };
            return obj;
        };

        that.HTMLVideoElement = function() {};
    }

    if (typeof location === 'undefined') {
        /*global location:true */
        that.location = {
            protocol: 'file:',
            href: '',
            hash: ''
        };
    }

    if (typeof screen === 'undefined') {
        /*global screen:true */
        that.screen = {
            width: 0,
            height: 0
        };
    }

    if (typeof URL === 'undefined') {
        /*global screen:true */
        that.URL = {
            createObjectURL: function() {
                return '';
            },
            revokeObjectURL: function() {
                return '';
            }
        };
    }

    /*global window:true */
    that.window = global;
})(typeof global !== 'undefined' ? global : null);

// _____________________________
// Cross-Browser-Declarations.js

// animation-frame used in WebM recording

/*jshint -W079 */
var requestAnimationFrame = window.requestAnimationFrame;
if (typeof requestAnimationFrame === 'undefined') {
    if (typeof webkitRequestAnimationFrame !== 'undefined') {
        /*global requestAnimationFrame:true */
        requestAnimationFrame = webkitRequestAnimationFrame;
    } else if (typeof mozRequestAnimationFrame !== 'undefined') {
        /*global requestAnimationFrame:true */
        requestAnimationFrame = mozRequestAnimationFrame;
    } else if (typeof msRequestAnimationFrame !== 'undefined') {
        /*global requestAnimationFrame:true */
        requestAnimationFrame = msRequestAnimationFrame;
    } else if (typeof requestAnimationFrame === 'undefined') {
        // via: https://gist.github.com/paulirish/1579671
        var lastTime = 0;

        /*global requestAnimationFrame:true */
        requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
}

/*jshint -W079 */
var cancelAnimationFrame = window.cancelAnimationFrame;
if (typeof cancelAnimationFrame === 'undefined') {
    if (typeof webkitCancelAnimationFrame !== 'undefined') {
        /*global cancelAnimationFrame:true */
        cancelAnimationFrame = webkitCancelAnimationFrame;
    } else if (typeof mozCancelAnimationFrame !== 'undefined') {
        /*global cancelAnimationFrame:true */
        cancelAnimationFrame = mozCancelAnimationFrame;
    } else if (typeof msCancelAnimationFrame !== 'undefined') {
        /*global cancelAnimationFrame:true */
        cancelAnimationFrame = msCancelAnimationFrame;
    } else if (typeof cancelAnimationFrame === 'undefined') {
        /*global cancelAnimationFrame:true */
        cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
}

// WebAudio API representer
var AudioContext = window.AudioContext;

if (typeof AudioContext === 'undefined') {
    if (typeof webkitAudioContext !== 'undefined') {
        /*global AudioContext:true */
        AudioContext = webkitAudioContext;
    }

    if (typeof mozAudioContext !== 'undefined') {
        /*global AudioContext:true */
        AudioContext = mozAudioContext;
    }
}

/*jshint -W079 */
var URL = window.URL;

if (typeof URL === 'undefined' && typeof webkitURL !== 'undefined') {
    /*global URL:true */
    URL = webkitURL;
}

if (typeof navigator !== 'undefined' && typeof navigator.getUserMedia === 'undefined') { // maybe window.navigator?
    if (typeof navigator.webkitGetUserMedia !== 'undefined') {
        navigator.getUserMedia = navigator.webkitGetUserMedia;
    }

    if (typeof navigator.mozGetUserMedia !== 'undefined') {
        navigator.getUserMedia = navigator.mozGetUserMedia;
    }
}

var isEdge = navigator.userAgent.indexOf('Edge') !== -1 && (!!navigator.msSaveBlob || !!navigator.msSaveOrOpenBlob);
var isOpera = !!window.opera || navigator.userAgent.indexOf('OPR/') !== -1;
var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1 && ('netscape' in window) && / rv:/.test(navigator.userAgent);
var isChrome = (!isOpera && !isEdge && !!navigator.webkitGetUserMedia) || isElectron() || navigator.userAgent.toLowerCase().indexOf('chrome/') !== -1;

var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (isSafari && !isChrome && navigator.userAgent.indexOf('CriOS') !== -1) {
    isSafari = false;
    isChrome = true;
}

var MediaStream = window.MediaStream;

if (typeof MediaStream === 'undefined' && typeof webkitMediaStream !== 'undefined') {
    MediaStream = webkitMediaStream;
}

/*global MediaStream:true */
if (typeof MediaStream !== 'undefined') {
    // override "stop" method for all browsers
    if (typeof MediaStream.prototype.stop === 'undefined') {
        MediaStream.prototype.stop = function() {
            this.getTracks().forEach(function(track) {
                track.stop();
            });
        };
    }
}

// below function via: http://goo.gl/B3ae8c
/**
 * Return human-readable file size.
 * @param {number} bytes - Pass bytes and get formatted string.
 * @returns {string} - formatted string
 * @example
 * bytesToSize(1024*1024*5) === '5 GB'
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */
function bytesToSize(bytes) {
    var k = 1000;
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) {
        return '0 Bytes';
    }
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(k)), 10);
    return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
}

/**
 * @param {Blob} file - File or Blob object. This parameter is required.
 * @param {string} fileName - Optional file name e.g. "Recorded-Video.webm"
 * @example
 * invokeSaveAsDialog(blob or file, [optional] fileName);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */
function invokeSaveAsDialog(file, fileName) {
    if (!file) {
        throw 'Blob object is required.';
    }

    if (!file.type) {
        try {
            file.type = 'video/webm';
        } catch (e) {}
    }

    var fileExtension = (file.type || 'video/webm').split('/')[1];

    if (fileName && fileName.indexOf('.') !== -1) {
        var splitted = fileName.split('.');
        fileName = splitted[0];
        fileExtension = splitted[1];
    }

    var fileFullName = (fileName || (Math.round(Math.random() * 9999999999) + 888888888)) + '.' + fileExtension;

    if (typeof navigator.msSaveOrOpenBlob !== 'undefined') {
        return navigator.msSaveOrOpenBlob(file, fileFullName);
    } else if (typeof navigator.msSaveBlob !== 'undefined') {
        return navigator.msSaveBlob(file, fileFullName);
    }

    var hyperlink = document.createElement('a');
    hyperlink.href = URL.createObjectURL(file);
    hyperlink.download = fileFullName;

    hyperlink.style = 'display:none;opacity:0;color:transparent;';
    (document.body || document.documentElement).appendChild(hyperlink);

    if (typeof hyperlink.click === 'function') {
        hyperlink.click();
    } else {
        hyperlink.target = '_blank';
        hyperlink.dispatchEvent(new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        }));
    }

    URL.revokeObjectURL(hyperlink.href);
}

/**
 * from: https://github.com/cheton/is-electron/blob/master/index.js
 **/
function isElectron() {
    // Renderer process
    if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
        return true;
    }

    // Main process
    if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
        return true;
    }

    // Detect the user agent when the `nodeIntegration` option is set to true
    if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
        return true;
    }

    return false;
}

function getTracks(stream, kind) {
    if (!stream || !stream.getTracks) {
        return [];
    }

    return stream.getTracks().filter(function(t) {
        return t.kind === (kind || 'audio');
    });
}

function setSrcObject(stream, element) {
    if ('srcObject' in element) {
        element.srcObject = stream;
    } else if ('mozSrcObject' in element) {
        element.mozSrcObject = stream;
    } else {
        element.srcObject = stream;
    }
}

/**
 * @param {Blob} file - File or Blob object.
 * @param {function} callback - Callback function.
 * @example
 * getSeekableBlob(blob or file, callback);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */
function getSeekableBlob(inputBlob, callback) {
    // EBML.js copyrights goes to: https://github.com/legokichi/ts-ebml
    if (typeof EBML === 'undefined') {
        throw new Error('Please link: https://cdn.webrtc-experiment.com/EBML.js');
    }

    var reader = new EBML.Reader();
    var decoder = new EBML.Decoder();
    var tools = EBML.tools;

    var fileReader = new FileReader();
    fileReader.onload = function(e) {
        var ebmlElms = decoder.decode(this.result);
        ebmlElms.forEach(function(element) {
            reader.read(element);
        });
        reader.stop();
        var refinedMetadataBuf = tools.makeMetadataSeekable(reader.metadatas, reader.duration, reader.cues);
        var body = this.result.slice(reader.metadataSize);
        var newBlob = new Blob([refinedMetadataBuf, body], {
            type: 'video/webm'
        });

        callback(newBlob);
    };
    fileReader.readAsArrayBuffer(inputBlob);
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.invokeSaveAsDialog = invokeSaveAsDialog;
    RecordRTC.getTracks = getTracks;
    RecordRTC.getSeekableBlob = getSeekableBlob;
    RecordRTC.bytesToSize = bytesToSize;
    RecordRTC.isElectron = isElectron;
}

// __________ (used to handle stuff like http://goo.gl/xmE5eg) issue #129
// Storage.js

/**
 * Storage is a standalone object used by {@link RecordRTC} to store reusable objects e.g. "new AudioContext".
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @example
 * Storage.AudioContext === webkitAudioContext
 * @property {webkitAudioContext} AudioContext - Keeps a reference to AudioContext object.
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */

var Storage = {};

if (typeof AudioContext !== 'undefined') {
    Storage.AudioContext = AudioContext;
} else if (typeof webkitAudioContext !== 'undefined') {
    Storage.AudioContext = webkitAudioContext;
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.Storage = Storage;
}

function isMediaRecorderCompatible() {
    if (isFirefox || isSafari || isEdge) {
        return true;
    }

    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var fullVersion = '' + parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;

    if (isChrome || isOpera) {
        verOffset = nAgt.indexOf('Chrome');
        fullVersion = nAgt.substring(verOffset + 7);
    }

    // trim the fullVersion string at semicolon/space if present
    if ((ix = fullVersion.indexOf(';')) !== -1) {
        fullVersion = fullVersion.substring(0, ix);
    }

    if ((ix = fullVersion.indexOf(' ')) !== -1) {
        fullVersion = fullVersion.substring(0, ix);
    }

    majorVersion = parseInt('' + fullVersion, 10);

    if (isNaN(majorVersion)) {
        fullVersion = '' + parseFloat(navigator.appVersion);
        majorVersion = parseInt(navigator.appVersion, 10);
    }

    return majorVersion >= 49;
}

// ______________________
// MediaStreamRecorder.js

/**
 * MediaStreamRecorder is an abstraction layer for {@link https://w3c.github.io/mediacapture-record/MediaRecorder.html|MediaRecorder API}. It is used by {@link RecordRTC} to record MediaStream(s) in both Chrome and Firefox.
 * @summary Runs top over {@link https://w3c.github.io/mediacapture-record/MediaRecorder.html|MediaRecorder API}.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://github.com/muaz-khan|Muaz Khan}
 * @typedef MediaStreamRecorder
 * @class
 * @example
 * var config = {
 *     mimeType: 'video/webm', // vp8, vp9, h264, mkv, opus/vorbis
 *     audioBitsPerSecond : 256 * 8 * 1024,
 *     videoBitsPerSecond : 256 * 8 * 1024,
 *     bitsPerSecond: 256 * 8 * 1024,  // if this is provided, skip above two
 *     checkForInactiveTracks: true,
 *     timeSlice: 1000, // concatenate intervals based blobs
 *     ondataavailable: function() {} // get intervals based blobs
 * }
 * var recorder = new MediaStreamRecorder(mediaStream, config);
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 *
 *     // or
 *     var blob = recorder.blob;
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {disableLogs:true, initCallback: function, mimeType: "video/webm", timeSlice: 1000}
 * @throws Will throw an error if first argument "MediaStream" is missing. Also throws error if "MediaRecorder API" are not supported by the browser.
 */

function MediaStreamRecorder(mediaStream, config) {
    var self = this;

    if (typeof mediaStream === 'undefined') {
        throw 'First argument "MediaStream" is required.';
    }

    if (typeof MediaRecorder === 'undefined') {
        throw 'Your browser does not support the Media Recorder API. Please try other modules e.g. WhammyRecorder or StereoAudioRecorder.';
    }

    config = config || {
        // bitsPerSecond: 256 * 8 * 1024,
        mimeType: 'video/webm'
    };

    if (config.type === 'audio') {
        if (getTracks(mediaStream, 'video').length && getTracks(mediaStream, 'audio').length) {
            var stream;
            if (!!navigator.mozGetUserMedia) {
                stream = new MediaStream();
                stream.addTrack(getTracks(mediaStream, 'audio')[0]);
            } else {
                // webkitMediaStream
                stream = new MediaStream(getTracks(mediaStream, 'audio'));
            }
            mediaStream = stream;
        }

        if (!config.mimeType || config.mimeType.toString().toLowerCase().indexOf('audio') === -1) {
            config.mimeType = isChrome ? 'audio/webm' : 'audio/ogg';
        }

        if (config.mimeType && config.mimeType.toString().toLowerCase() !== 'audio/ogg' && !!navigator.mozGetUserMedia) {
            // forcing better codecs on Firefox (via #166)
            config.mimeType = 'audio/ogg';
        }
    }

    var arrayOfBlobs = [];

    /**
     * This method returns array of blobs. Use only with "timeSlice". Its useful to preview recording anytime, without using the "stop" method.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * var arrayOfBlobs = recorder.getArrayOfBlobs();
     * @returns {Array} Returns array of recorded blobs.
     */
    this.getArrayOfBlobs = function() {
        return arrayOfBlobs;
    };

    /**
     * This method records MediaStream.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        // set defaults
        self.blob = null;
        self.clearRecordedData();
        self.timestamps = [];
        allStates = [];
        arrayOfBlobs = [];

        var recorderHints = config;

        if (!config.disableLogs) {
            console.log('Passing following config over MediaRecorder API.', recorderHints);
        }

        if (mediaRecorder) {
            // mandatory to make sure Firefox doesn't fails to record streams 3-4 times without reloading the page.
            mediaRecorder = null;
        }

        if (isChrome && !isMediaRecorderCompatible()) {
            // to support video-only recording on stable
            recorderHints = 'video/vp8';
        }

        if (typeof MediaRecorder.isTypeSupported === 'function' && recorderHints.mimeType) {
            if (!MediaRecorder.isTypeSupported(recorderHints.mimeType)) {
                if (!config.disableLogs) {
                    console.warn('MediaRecorder API seems unable to record mimeType:', recorderHints.mimeType);
                }

                recorderHints.mimeType = config.type === 'audio' ? 'audio/webm' : 'video/webm';
            }
        }

        // using MediaRecorder API here
        try {
            mediaRecorder = new MediaRecorder(mediaStream, recorderHints);

            // reset
            config.mimeType = recorderHints.mimeType;
        } catch (e) {
            // chrome-based fallback
            mediaRecorder = new MediaRecorder(mediaStream);
        }

        // old hack?
        if (recorderHints.mimeType && !MediaRecorder.isTypeSupported && 'canRecordMimeType' in mediaRecorder && mediaRecorder.canRecordMimeType(recorderHints.mimeType) === false) {
            if (!config.disableLogs) {
                console.warn('MediaRecorder API seems unable to record mimeType:', recorderHints.mimeType);
            }
        }

        // Dispatching OnDataAvailable Handler
        mediaRecorder.ondataavailable = function(e) {
            if (e.data) {
                allStates.push('ondataavailable: ' + bytesToSize(e.data.size));
            }

            if (typeof config.timeSlice === 'number') {
                if (e.data && e.data.size && e.data.size > 100) {
                    arrayOfBlobs.push(e.data);
                    updateTimeStamp();

                    if (typeof config.ondataavailable === 'function') {
                        // intervals based blobs
                        var blob = config.getNativeBlob ? e.data : new Blob([e.data], {
                            type: getMimeType(recorderHints)
                        });
                        config.ondataavailable(blob);
                    }
                }
                return;
            }

            if (!e.data || !e.data.size || e.data.size < 100 || self.blob) {
                // make sure that stopRecording always getting fired
                // even if there is invalid data
                if (self.recordingCallback) {
                    self.recordingCallback(new Blob([], {
                        type: getMimeType(recorderHints)
                    }));
                    self.recordingCallback = null;
                }
                return;
            }

            self.blob = config.getNativeBlob ? e.data : new Blob([e.data], {
                type: getMimeType(recorderHints)
            });

            if (self.recordingCallback) {
                self.recordingCallback(self.blob);
                self.recordingCallback = null;
            }
        };

        mediaRecorder.onstart = function() {
            allStates.push('started');
        };

        mediaRecorder.onpause = function() {
            allStates.push('paused');
        };

        mediaRecorder.onresume = function() {
            allStates.push('resumed');
        };

        mediaRecorder.onstop = function() {
            allStates.push('stopped');
        };

        mediaRecorder.onerror = function(error) {
            if (!error) {
                return;
            }

            if (!error.name) {
                error.name = 'UnknownError';
            }

            allStates.push('error: ' + error);

            if (!config.disableLogs) {
                // via: https://w3c.github.io/mediacapture-record/MediaRecorder.html#exception-summary
                if (error.name.toString().toLowerCase().indexOf('invalidstate') !== -1) {
                    console.error('The MediaRecorder is not in a state in which the proposed operation is allowed to be executed.', error);
                } else if (error.name.toString().toLowerCase().indexOf('notsupported') !== -1) {
                    console.error('MIME type (', recorderHints.mimeType, ') is not supported.', error);
                } else if (error.name.toString().toLowerCase().indexOf('security') !== -1) {
                    console.error('MediaRecorder security error', error);
                }

                // older code below
                else if (error.name === 'OutOfMemory') {
                    console.error('The UA has exhaused the available memory. User agents SHOULD provide as much additional information as possible in the message attribute.', error);
                } else if (error.name === 'IllegalStreamModification') {
                    console.error('A modification to the stream has occurred that makes it impossible to continue recording. An example would be the addition of a Track while recording is occurring. User agents SHOULD provide as much additional information as possible in the message attribute.', error);
                } else if (error.name === 'OtherRecordingError') {
                    console.error('Used for an fatal error other than those listed above. User agents SHOULD provide as much additional information as possible in the message attribute.', error);
                } else if (error.name === 'GenericError') {
                    console.error('The UA cannot provide the codec or recording option that has been requested.', error);
                } else {
                    console.error('MediaRecorder Error', error);
                }
            }

            (function(looper) {
                if (!self.manuallyStopped && mediaRecorder && mediaRecorder.state === 'inactive') {
                    delete config.timeslice;

                    // 10 minutes, enough?
                    mediaRecorder.start(10 * 60 * 1000);
                    return;
                }

                setTimeout(looper, 1000);
            })();

            if (mediaRecorder.state !== 'inactive' && mediaRecorder.state !== 'stopped') {
                mediaRecorder.stop();
            }
        };

        if (typeof config.timeSlice === 'number') {
            updateTimeStamp();
            mediaRecorder.start(config.timeSlice);
        } else {
            // default is 60 minutes; enough?
            // use config => {timeSlice: 1000} otherwise

            mediaRecorder.start(3.6e+6);
        }

        if (config.initCallback) {
            config.initCallback(); // old code
        }
    };

    /**
     * @property {Array} timestamps - Array of time stamps
     * @memberof MediaStreamRecorder
     * @example
     * console.log(recorder.timestamps);
     */
    this.timestamps = [];

    function updateTimeStamp() {
        self.timestamps.push(new Date().getTime());

        if (typeof config.onTimeStamp === 'function') {
            config.onTimeStamp(self.timestamps[self.timestamps.length - 1], self.timestamps);
        }
    }

    function getMimeType(secondObject) {
        if (mediaRecorder && mediaRecorder.mimeType) {
            return mediaRecorder.mimeType;
        }

        return secondObject.mimeType || 'video/webm';
    }

    /**
     * This method stops recording MediaStream.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        callback = callback || function() {};

        self.manuallyStopped = true; // used inside the mediaRecorder.onerror

        if (!mediaRecorder) {
            return;
        }

        this.recordingCallback = callback;

        if (mediaRecorder.state === 'recording') {
            mediaRecorder.stop();
        }

        if (typeof config.timeSlice === 'number') {
            setTimeout(function() {
                self.blob = new Blob(arrayOfBlobs, {
                    type: getMimeType(config)
                });

                self.recordingCallback(self.blob);
            }, 100);
        }
    };

    /**
     * This method pauses the recording process.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        if (!mediaRecorder) {
            return;
        }

        if (mediaRecorder.state === 'recording') {
            mediaRecorder.pause();
        }
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        if (!mediaRecorder) {
            return;
        }

        if (mediaRecorder.state === 'paused') {
            mediaRecorder.resume();
        }
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        if (mediaRecorder && mediaRecorder.state === 'recording') {
            self.stop(clearRecordedDataCB);
        }

        clearRecordedDataCB();
    };

    function clearRecordedDataCB() {
        arrayOfBlobs = [];
        mediaRecorder = null;
        self.timestamps = [];
    }

    // Reference to "MediaRecorder" object
    var mediaRecorder;

    /**
     * Access to native MediaRecorder API
     * @method
     * @memberof MediaStreamRecorder
     * @instance
     * @example
     * var internal = recorder.getInternalRecorder();
     * internal.ondataavailable = function() {}; // override
     * internal.stream, internal.onpause, internal.onstop, etc.
     * @returns {Object} Returns internal recording object.
     */
    this.getInternalRecorder = function() {
        return mediaRecorder;
    };

    function isMediaStreamActive() {
        if ('active' in mediaStream) {
            if (!mediaStream.active) {
                return false;
            }
        } else if ('ended' in mediaStream) { // old hack
            if (mediaStream.ended) {
                return false;
            }
        }
        return true;
    }

    /**
     * @property {Blob} blob - Recorded data as "Blob" object.
     * @memberof MediaStreamRecorder
     * @example
     * recorder.stop(function() {
     *     var blob = recorder.blob;
     * });
     */
    this.blob = null;


    /**
     * Get MediaRecorder readonly state.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * var state = recorder.getState();
     * @returns {String} Returns recording state.
     */
    this.getState = function() {
        if (!mediaRecorder) {
            return 'inactive';
        }

        return mediaRecorder.state || 'inactive';
    };

    // list of all recording states
    var allStates = [];

    /**
     * Get MediaRecorder all recording states.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * var state = recorder.getAllStates();
     * @returns {Array} Returns all recording states
     */
    this.getAllStates = function() {
        return allStates;
    };

    // if any Track within the MediaStream is muted or not enabled at any time, 
    // the browser will only record black frames 
    // or silence since that is the content produced by the Track
    // so we need to stopRecording as soon as any single track ends.
    if (typeof config.checkForInactiveTracks === 'undefined') {
        config.checkForInactiveTracks = false; // disable to minimize CPU usage
    }

    var self = this;

    // this method checks if media stream is stopped
    // or if any track is ended.
    (function looper() {
        if (!mediaRecorder || config.checkForInactiveTracks === false) {
            return;
        }

        if (isMediaStreamActive() === false) {
            if (!config.disableLogs) {
                console.log('MediaStream seems stopped.');
            }
            self.stop();
            return;
        }

        setTimeout(looper, 1000); // check every second
    })();

    // for debugging
    this.name = 'MediaStreamRecorder';
    this.toString = function() {
        return this.name;
    };
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.MediaStreamRecorder = MediaStreamRecorder;
}

// source code from: http://typedarray.org/wp-content/projects/WebAudioRecorder/script.js
// https://github.com/mattdiamond/Recorderjs#license-mit
// ______________________
// StereoAudioRecorder.js

/**
 * StereoAudioRecorder is a standalone class used by {@link RecordRTC} to bring "stereo" audio-recording in chrome.
 * @summary JavaScript standalone object for stereo audio recording.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef StereoAudioRecorder
 * @class
 * @example
 * var recorder = new StereoAudioRecorder(MediaStream, {
 *     sampleRate: 44100,
 *     bufferSize: 4096
 * });
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {sampleRate: 44100, bufferSize: 4096, numberOfAudioChannels: 1, etc.}
 */

function StereoAudioRecorder(mediaStream, config) {
    if (!getTracks(mediaStream, 'audio').length) {
        throw 'Your stream has no audio tracks.';
    }

    config = config || {};

    var self = this;

    // variables
    var leftchannel = [];
    var rightchannel = [];
    var recording = false;
    var recordingLength = 0;
    var jsAudioNode;

    var numberOfAudioChannels = 2;

    /**
     * Set sample rates such as 8K or 16K. Reference: http://stackoverflow.com/a/28977136/552182
     * @property {number} desiredSampRate - Desired Bits per sample * 1000
     * @memberof StereoAudioRecorder
     * @instance
     * @example
     * var recorder = StereoAudioRecorder(mediaStream, {
     *   desiredSampRate: 16 * 1000 // bits-per-sample * 1000
     * });
     */
    var desiredSampRate = config.desiredSampRate;

    // backward compatibility
    if (config.leftChannel === true) {
        numberOfAudioChannels = 1;
    }

    if (config.numberOfAudioChannels === 1) {
        numberOfAudioChannels = 1;
    }

    if (!numberOfAudioChannels || numberOfAudioChannels < 1) {
        numberOfAudioChannels = 2;
    }

    if (!config.disableLogs) {
        console.log('StereoAudioRecorder is set to record number of channels: ' + numberOfAudioChannels);
    }

    // if any Track within the MediaStream is muted or not enabled at any time, 
    // the browser will only record black frames 
    // or silence since that is the content produced by the Track
    // so we need to stopRecording as soon as any single track ends.
    if (typeof config.checkForInactiveTracks === 'undefined') {
        config.checkForInactiveTracks = true;
    }

    function isMediaStreamActive() {
        if (config.checkForInactiveTracks === false) {
            // always return "true"
            return true;
        }

        if ('active' in mediaStream) {
            if (!mediaStream.active) {
                return false;
            }
        } else if ('ended' in mediaStream) { // old hack
            if (mediaStream.ended) {
                return false;
            }
        }
        return true;
    }

    /**
     * This method records MediaStream.
     * @method
     * @memberof StereoAudioRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        if (isMediaStreamActive() === false) {
            throw 'Please make sure MediaStream is active.';
        }

        resetVariables();

        isAudioProcessStarted = isPaused = false;
        recording = true;

        if (typeof config.timeSlice !== 'undefined') {
            looper();
        }
    };

    function mergeLeftRightBuffers(config, callback) {
        function mergeAudioBuffers(config, cb) {
            var numberOfAudioChannels = config.numberOfAudioChannels;

            // todo: "slice(0)" --- is it causes loop? Should be removed?
            var leftBuffers = config.leftBuffers.slice(0);
            var rightBuffers = config.rightBuffers.slice(0);
            var sampleRate = config.sampleRate;
            var internalInterleavedLength = config.internalInterleavedLength;
            var desiredSampRate = config.desiredSampRate;

            if (numberOfAudioChannels === 2) {
                leftBuffers = mergeBuffers(leftBuffers, internalInterleavedLength);
                rightBuffers = mergeBuffers(rightBuffers, internalInterleavedLength);

                if (desiredSampRate) {
                    leftBuffers = interpolateArray(leftBuffers, desiredSampRate, sampleRate);
                    rightBuffers = interpolateArray(rightBuffers, desiredSampRate, sampleRate);
                }
            }

            if (numberOfAudioChannels === 1) {
                leftBuffers = mergeBuffers(leftBuffers, internalInterleavedLength);

                if (desiredSampRate) {
                    leftBuffers = interpolateArray(leftBuffers, desiredSampRate, sampleRate);
                }
            }

            // set sample rate as desired sample rate
            if (desiredSampRate) {
                sampleRate = desiredSampRate;
            }

            // for changing the sampling rate, reference:
            // http://stackoverflow.com/a/28977136/552182
            function interpolateArray(data, newSampleRate, oldSampleRate) {
                var fitCount = Math.round(data.length * (newSampleRate / oldSampleRate));
                var newData = [];
                var springFactor = Number((data.length - 1) / (fitCount - 1));
                newData[0] = data[0];
                for (var i = 1; i < fitCount - 1; i++) {
                    var tmp = i * springFactor;
                    var before = Number(Math.floor(tmp)).toFixed();
                    var after = Number(Math.ceil(tmp)).toFixed();
                    var atPoint = tmp - before;
                    newData[i] = linearInterpolate(data[before], data[after], atPoint);
                }
                newData[fitCount - 1] = data[data.length - 1];
                return newData;
            }

            function linearInterpolate(before, after, atPoint) {
                return before + (after - before) * atPoint;
            }

            function mergeBuffers(channelBuffer, rLength) {
                var result = new Float64Array(rLength);
                var offset = 0;
                var lng = channelBuffer.length;

                for (var i = 0; i < lng; i++) {
                    var buffer = channelBuffer[i];
                    result.set(buffer, offset);
                    offset += buffer.length;
                }

                return result;
            }

            function interleave(leftChannel, rightChannel) {
                var length = leftChannel.length + rightChannel.length;

                var result = new Float64Array(length);

                var inputIndex = 0;

                for (var index = 0; index < length;) {
                    result[index++] = leftChannel[inputIndex];
                    result[index++] = rightChannel[inputIndex];
                    inputIndex++;
                }
                return result;
            }

            function writeUTFBytes(view, offset, string) {
                var lng = string.length;
                for (var i = 0; i < lng; i++) {
                    view.setUint8(offset + i, string.charCodeAt(i));
                }
            }

            // interleave both channels together
            var interleaved;

            if (numberOfAudioChannels === 2) {
                interleaved = interleave(leftBuffers, rightBuffers);
            }

            if (numberOfAudioChannels === 1) {
                interleaved = leftBuffers;
            }

            var interleavedLength = interleaved.length;

            // create wav file
            var resultingBufferLength = 44 + interleavedLength * 2;

            var buffer = new ArrayBuffer(resultingBufferLength);

            var view = new DataView(buffer);

            // RIFF chunk descriptor/identifier 
            writeUTFBytes(view, 0, 'RIFF');

            // RIFF chunk length
            // changed "44" to "36" via #401
            view.setUint32(4, 36 + interleavedLength * 2, true);

            // RIFF type 
            writeUTFBytes(view, 8, 'WAVE');

            // format chunk identifier 
            // FMT sub-chunk
            writeUTFBytes(view, 12, 'fmt ');

            // format chunk length 
            view.setUint32(16, 16, true);

            // sample format (raw)
            view.setUint16(20, 1, true);

            // stereo (2 channels)
            view.setUint16(22, numberOfAudioChannels, true);

            // sample rate 
            view.setUint32(24, sampleRate, true);

            // byte rate (sample rate * block align)
            view.setUint32(28, sampleRate * 2, true);

            // block align (channel count * bytes per sample) 
            view.setUint16(32, numberOfAudioChannels * 2, true);

            // bits per sample 
            view.setUint16(34, 16, true);

            // data sub-chunk
            // data chunk identifier 
            writeUTFBytes(view, 36, 'data');

            // data chunk length 
            view.setUint32(40, interleavedLength * 2, true);

            // write the PCM samples
            var lng = interleavedLength;
            var index = 44;
            var volume = 1;
            for (var i = 0; i < lng; i++) {
                view.setInt16(index, interleaved[i] * (0x7FFF * volume), true);
                index += 2;
            }

            if (cb) {
                return cb({
                    buffer: buffer,
                    view: view
                });
            }

            postMessage({
                buffer: buffer,
                view: view
            });
        }

        if (config.noWorker) {
            mergeAudioBuffers(config, function(data) {
                callback(data.buffer, data.view);
            });
            return;
        }


        var webWorker = processInWebWorker(mergeAudioBuffers);

        webWorker.onmessage = function(event) {
            callback(event.data.buffer, event.data.view);

            // release memory
            URL.revokeObjectURL(webWorker.workerURL);

            // kill webworker (or Chrome will kill your page after ~25 calls)
            webWorker.terminate();
        };

        webWorker.postMessage(config);
    }

    function processInWebWorker(_function) {
        var workerURL = URL.createObjectURL(new Blob([_function.toString(),
            ';this.onmessage =  function (eee) {' + _function.name + '(eee.data);}'
        ], {
            type: 'application/javascript'
        }));

        var worker = new Worker(workerURL);
        worker.workerURL = workerURL;
        return worker;
    }

    /**
     * This method stops recording MediaStream.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof StereoAudioRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        callback = callback || function() {};

        // stop recording
        recording = false;

        mergeLeftRightBuffers({
            desiredSampRate: desiredSampRate,
            sampleRate: sampleRate,
            numberOfAudioChannels: numberOfAudioChannels,
            internalInterleavedLength: recordingLength,
            leftBuffers: leftchannel,
            rightBuffers: numberOfAudioChannels === 1 ? [] : rightchannel,
            noWorker: config.noWorker
        }, function(buffer, view) {
            /**
             * @property {Blob} blob - The recorded blob object.
             * @memberof StereoAudioRecorder
             * @example
             * recorder.stop(function(){
             *     var blob = recorder.blob;
             * });
             */
            self.blob = new Blob([view], {
                type: 'audio/wav'
            });

            /**
             * @property {ArrayBuffer} buffer - The recorded buffer object.
             * @memberof StereoAudioRecorder
             * @example
             * recorder.stop(function(){
             *     var buffer = recorder.buffer;
             * });
             */
            self.buffer = new ArrayBuffer(view.buffer.byteLength);

            /**
             * @property {DataView} view - The recorded data-view object.
             * @memberof StereoAudioRecorder
             * @example
             * recorder.stop(function(){
             *     var view = recorder.view;
             * });
             */
            self.view = view;

            self.sampleRate = desiredSampRate || sampleRate;
            self.bufferSize = bufferSize;

            // recorded audio length
            self.length = recordingLength;

            isAudioProcessStarted = false;

            if (callback) {
                callback(self.blob);
            }
        });
    };

    if (typeof Storage === 'undefined') {
        var Storage = {
            AudioContextConstructor: null,
            AudioContext: window.AudioContext || window.webkitAudioContext
        };
    }

    if (!Storage.AudioContextConstructor) {
        Storage.AudioContextConstructor = new Storage.AudioContext();
    }

    var context = Storage.AudioContextConstructor;

    // creates an audio node from the microphone incoming stream
    var audioInput = context.createMediaStreamSource(mediaStream);

    var legalBufferValues = [0, 256, 512, 1024, 2048, 4096, 8192, 16384];

    /**
     * From the spec: This value controls how frequently the audioprocess event is
     * dispatched and how many sample-frames need to be processed each call.
     * Lower values for buffer size will result in a lower (better) latency.
     * Higher values will be necessary to avoid audio breakup and glitches
     * The size of the buffer (in sample-frames) which needs to
     * be processed each time onprocessaudio is called.
     * Legal values are (256, 512, 1024, 2048, 4096, 8192, 16384).
     * @property {number} bufferSize - Buffer-size for how frequently the audioprocess event is dispatched.
     * @memberof StereoAudioRecorder
     * @example
     * recorder = new StereoAudioRecorder(mediaStream, {
     *     bufferSize: 4096
     * });
     */

    // "0" means, let chrome decide the most accurate buffer-size for current platform.
    var bufferSize = typeof config.bufferSize === 'undefined' ? 4096 : config.bufferSize;

    if (legalBufferValues.indexOf(bufferSize) === -1) {
        if (!config.disableLogs) {
            console.log('Legal values for buffer-size are ' + JSON.stringify(legalBufferValues, null, '\t'));
        }
    }

    if (context.createJavaScriptNode) {
        jsAudioNode = context.createJavaScriptNode(bufferSize, numberOfAudioChannels, numberOfAudioChannels);
    } else if (context.createScriptProcessor) {
        jsAudioNode = context.createScriptProcessor(bufferSize, numberOfAudioChannels, numberOfAudioChannels);
    } else {
        throw 'WebAudio API has no support on this browser.';
    }

    // connect the stream to the script processor
    audioInput.connect(jsAudioNode);

    if (!config.bufferSize) {
        bufferSize = jsAudioNode.bufferSize; // device buffer-size
    }

    /**
     * The sample rate (in sample-frames per second) at which the
     * AudioContext handles audio. It is assumed that all AudioNodes
     * in the context run at this rate. In making this assumption,
     * sample-rate converters or "varispeed" processors are not supported
     * in real-time processing.
     * The sampleRate parameter describes the sample-rate of the
     * linear PCM audio data in the buffer in sample-frames per second.
     * An implementation must support sample-rates in at least
     * the range 22050 to 96000.
     * @property {number} sampleRate - Buffer-size for how frequently the audioprocess event is dispatched.
     * @memberof StereoAudioRecorder
     * @example
     * recorder = new StereoAudioRecorder(mediaStream, {
     *     sampleRate: 44100
     * });
     */
    var sampleRate = typeof config.sampleRate !== 'undefined' ? config.sampleRate : context.sampleRate || 44100;

    if (sampleRate < 22050 || sampleRate > 96000) {
        // Ref: http://stackoverflow.com/a/26303918/552182
        if (!config.disableLogs) {
            console.log('sample-rate must be under range 22050 and 96000.');
        }
    }

    if (!config.disableLogs) {
        if (config.desiredSampRate) {
            console.log('Desired sample-rate: ' + config.desiredSampRate);
        }
    }

    var isPaused = false;
    /**
     * This method pauses the recording process.
     * @method
     * @memberof StereoAudioRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        isPaused = true;
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof StereoAudioRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        if (isMediaStreamActive() === false) {
            throw 'Please make sure MediaStream is active.';
        }

        if (!recording) {
            if (!config.disableLogs) {
                console.log('Seems recording has been restarted.');
            }
            this.record();
            return;
        }

        isPaused = false;
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof StereoAudioRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        config.checkForInactiveTracks = false;

        if (recording) {
            this.stop(clearRecordedDataCB);
        }

        clearRecordedDataCB();
    };

    function resetVariables() {
        leftchannel = [];
        rightchannel = [];
        recordingLength = 0;
        isAudioProcessStarted = false;
        recording = false;
        isPaused = false;
        context = null;

        self.leftchannel = leftchannel;
        self.rightchannel = rightchannel;
        self.numberOfAudioChannels = numberOfAudioChannels;
        self.desiredSampRate = desiredSampRate;
        self.sampleRate = sampleRate;
        self.recordingLength = recordingLength;

        intervalsBasedBuffers = {
            left: [],
            right: [],
            recordingLength: 0
        };
    }

    function clearRecordedDataCB() {
        if (jsAudioNode) {
            jsAudioNode.onaudioprocess = null;
            jsAudioNode.disconnect();
            jsAudioNode = null;
        }

        if (audioInput) {
            audioInput.disconnect();
            audioInput = null;
        }

        resetVariables();
    }

    // for debugging
    this.name = 'StereoAudioRecorder';
    this.toString = function() {
        return this.name;
    };

    var isAudioProcessStarted = false;

    function onAudioProcessDataAvailable(e) {
        if (isPaused) {
            return;
        }

        if (isMediaStreamActive() === false) {
            if (!config.disableLogs) {
                console.log('MediaStream seems stopped.');
            }
            jsAudioNode.disconnect();
            recording = false;
        }

        if (!recording) {
            if (audioInput) {
                audioInput.disconnect();
                audioInput = null;
            }
            return;
        }

        /**
         * This method is called on "onaudioprocess" event's first invocation.
         * @method {function} onAudioProcessStarted
         * @memberof StereoAudioRecorder
         * @example
         * recorder.onAudioProcessStarted: function() { };
         */
        if (!isAudioProcessStarted) {
            isAudioProcessStarted = true;
            if (config.onAudioProcessStarted) {
                config.onAudioProcessStarted();
            }

            if (config.initCallback) {
                config.initCallback();
            }
        }

        var left = e.inputBuffer.getChannelData(0);

        // we clone the samples
        var chLeft = new Float32Array(left);
        leftchannel.push(chLeft);

        if (numberOfAudioChannels === 2) {
            var right = e.inputBuffer.getChannelData(1);
            var chRight = new Float32Array(right);
            rightchannel.push(chRight);
        }

        recordingLength += bufferSize;

        // export raw PCM
        self.recordingLength = recordingLength;

        if (typeof config.timeSlice !== 'undefined') {
            intervalsBasedBuffers.recordingLength += bufferSize;
            intervalsBasedBuffers.left.push(chLeft);

            if (numberOfAudioChannels === 2) {
                intervalsBasedBuffers.right.push(chRight);
            }
        }
    }

    jsAudioNode.onaudioprocess = onAudioProcessDataAvailable;

    // to prevent self audio to be connected with speakers
    if (context.createMediaStreamDestination) {
        jsAudioNode.connect(context.createMediaStreamDestination());
    } else {
        jsAudioNode.connect(context.destination);
    }

    // export raw PCM
    this.leftchannel = leftchannel;
    this.rightchannel = rightchannel;
    this.numberOfAudioChannels = numberOfAudioChannels;
    this.desiredSampRate = desiredSampRate;
    this.sampleRate = sampleRate;
    self.recordingLength = recordingLength;

    // helper for intervals based blobs
    var intervalsBasedBuffers = {
        left: [],
        right: [],
        recordingLength: 0
    };

    // this looper is used to support intervals based blobs (via timeSlice+ondataavailable)
    function looper() {
        if (!recording || typeof config.ondataavailable !== 'function' || typeof config.timeSlice === 'undefined') {
            return;
        }

        if (intervalsBasedBuffers.left.length) {
            mergeLeftRightBuffers({
                desiredSampRate: desiredSampRate,
                sampleRate: sampleRate,
                numberOfAudioChannels: numberOfAudioChannels,
                internalInterleavedLength: intervalsBasedBuffers.recordingLength,
                leftBuffers: intervalsBasedBuffers.left,
                rightBuffers: numberOfAudioChannels === 1 ? [] : intervalsBasedBuffers.right
            }, function(buffer, view) {
                var blob = new Blob([view], {
                    type: 'audio/wav'
                });
                config.ondataavailable(blob);

                setTimeout(looper, config.timeSlice);
            });

            intervalsBasedBuffers = {
                left: [],
                right: [],
                recordingLength: 0
            };
        } else {
            setTimeout(looper, config.timeSlice);
        }
    }
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.StereoAudioRecorder = StereoAudioRecorder;
}

// _________________
// CanvasRecorder.js

/**
 * CanvasRecorder is a standalone class used by {@link RecordRTC} to bring HTML5-Canvas recording into video WebM. It uses HTML2Canvas library and runs top over {@link Whammy}.
 * @summary HTML2Canvas recording into video WebM.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef CanvasRecorder
 * @class
 * @example
 * var recorder = new CanvasRecorder(htmlElement, { disableLogs: true, useWhammyRecorder: true });
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {HTMLElement} htmlElement - querySelector/getElementById/getElementsByTagName[0]/etc.
 * @param {object} config - {disableLogs:true, initCallback: function}
 */

function CanvasRecorder(htmlElement, config) {
    if (typeof html2canvas === 'undefined') {
        throw 'Please link: https://cdn.webrtc-experiment.com/screenshot.js';
    }

    config = config || {};
    if (!config.frameInterval) {
        config.frameInterval = 10;
    }

    // via DetectRTC.js
    var isCanvasSupportsStreamCapturing = false;
    ['captureStream', 'mozCaptureStream', 'webkitCaptureStream'].forEach(function(item) {
        if (item in document.createElement('canvas')) {
            isCanvasSupportsStreamCapturing = true;
        }
    });

    var _isChrome = (!!window.webkitRTCPeerConnection || !!window.webkitGetUserMedia) && !!window.chrome;

    var chromeVersion = 50;
    var matchArray = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
    if (_isChrome && matchArray && matchArray[2]) {
        chromeVersion = parseInt(matchArray[2], 10);
    }

    if (_isChrome && chromeVersion < 52) {
        isCanvasSupportsStreamCapturing = false;
    }

    if (config.useWhammyRecorder) {
        isCanvasSupportsStreamCapturing = false;
    }

    var globalCanvas, mediaStreamRecorder;

    if (isCanvasSupportsStreamCapturing) {
        if (!config.disableLogs) {
            console.log('Your browser supports both MediRecorder API and canvas.captureStream!');
        }

        if (htmlElement instanceof HTMLCanvasElement) {
            globalCanvas = htmlElement;
        } else if (htmlElement instanceof CanvasRenderingContext2D) {
            globalCanvas = htmlElement.canvas;
        } else {
            throw 'Please pass either HTMLCanvasElement or CanvasRenderingContext2D.';
        }
    } else if (!!navigator.mozGetUserMedia) {
        if (!config.disableLogs) {
            console.error('Canvas recording is NOT supported in Firefox.');
        }
    }

    var isRecording;

    /**
     * This method records Canvas.
     * @method
     * @memberof CanvasRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        isRecording = true;

        if (isCanvasSupportsStreamCapturing && !config.useWhammyRecorder) {
            // CanvasCaptureMediaStream
            var canvasMediaStream;
            if ('captureStream' in globalCanvas) {
                canvasMediaStream = globalCanvas.captureStream(25); // 25 FPS
            } else if ('mozCaptureStream' in globalCanvas) {
                canvasMediaStream = globalCanvas.mozCaptureStream(25);
            } else if ('webkitCaptureStream' in globalCanvas) {
                canvasMediaStream = globalCanvas.webkitCaptureStream(25);
            }

            try {
                var mdStream = new MediaStream();
                mdStream.addTrack(getTracks(canvasMediaStream, 'video')[0]);
                canvasMediaStream = mdStream;
            } catch (e) {}

            if (!canvasMediaStream) {
                throw 'captureStream API are NOT available.';
            }

            // Note: Jan 18, 2016 status is that, 
            // Firefox MediaRecorder API can't record CanvasCaptureMediaStream object.
            mediaStreamRecorder = new MediaStreamRecorder(canvasMediaStream, {
                mimeType: config.mimeType || 'video/webm'
            });
            mediaStreamRecorder.record();
        } else {
            whammy.frames = [];
            lastTime = new Date().getTime();
            drawCanvasFrame();
        }

        if (config.initCallback) {
            config.initCallback();
        }
    };

    this.getWebPImages = function(callback) {
        if (htmlElement.nodeName.toLowerCase() !== 'canvas') {
            callback();
            return;
        }

        var framesLength = whammy.frames.length;
        whammy.frames.forEach(function(frame, idx) {
            var framesRemaining = framesLength - idx;
            if (!config.disableLogs) {
                console.log(framesRemaining + '/' + framesLength + ' frames remaining');
            }

            if (config.onEncodingCallback) {
                config.onEncodingCallback(framesRemaining, framesLength);
            }

            var webp = frame.image.toDataURL('image/webp', 1);
            whammy.frames[idx].image = webp;
        });

        if (!config.disableLogs) {
            console.log('Generating WebM');
        }

        callback();
    };

    /**
     * This method stops recording Canvas.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof CanvasRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        isRecording = false;

        var that = this;

        if (isCanvasSupportsStreamCapturing && mediaStreamRecorder) {
            mediaStreamRecorder.stop(callback);
            return;
        }

        this.getWebPImages(function() {
            /**
             * @property {Blob} blob - Recorded frames in video/webm blob.
             * @memberof CanvasRecorder
             * @example
             * recorder.stop(function() {
             *     var blob = recorder.blob;
             * });
             */
            whammy.compile(function(blob) {
                if (!config.disableLogs) {
                    console.log('Recording finished!');
                }

                that.blob = blob;

                if (that.blob.forEach) {
                    that.blob = new Blob([], {
                        type: 'video/webm'
                    });
                }

                if (callback) {
                    callback(that.blob);
                }

                whammy.frames = [];
            });
        });
    };

    var isPausedRecording = false;

    /**
     * This method pauses the recording process.
     * @method
     * @memberof CanvasRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        isPausedRecording = true;

        if (mediaStreamRecorder instanceof MediaStreamRecorder) {
            mediaStreamRecorder.pause();
            return;
        }
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof CanvasRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        isPausedRecording = false;

        if (mediaStreamRecorder instanceof MediaStreamRecorder) {
            mediaStreamRecorder.resume();
            return;
        }

        if (!isRecording) {
            this.record();
        }
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof CanvasRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        if (isRecording) {
            this.stop(clearRecordedDataCB);
        }
        clearRecordedDataCB();
    };

    function clearRecordedDataCB() {
        whammy.frames = [];
        isRecording = false;
        isPausedRecording = false;
    }

    // for debugging
    this.name = 'CanvasRecorder';
    this.toString = function() {
        return this.name;
    };

    function cloneCanvas() {
        //create a new canvas
        var newCanvas = document.createElement('canvas');
        var context = newCanvas.getContext('2d');

        //set dimensions
        newCanvas.width = htmlElement.width;
        newCanvas.height = htmlElement.height;

        //apply the old canvas to the new one
        context.drawImage(htmlElement, 0, 0);

        //return the new canvas
        return newCanvas;
    }

    function drawCanvasFrame() {
        if (isPausedRecording) {
            lastTime = new Date().getTime();
            return setTimeout(drawCanvasFrame, 500);
        }

        if (htmlElement.nodeName.toLowerCase() === 'canvas') {
            var duration = new Date().getTime() - lastTime;
            // via #206, by Jack i.e. @Seymourr
            lastTime = new Date().getTime();

            whammy.frames.push({
                image: cloneCanvas(),
                duration: duration
            });

            if (isRecording) {
                setTimeout(drawCanvasFrame, config.frameInterval);
            }
            return;
        }

        html2canvas(htmlElement, {
            grabMouse: typeof config.showMousePointer === 'undefined' || config.showMousePointer,
            onrendered: function(canvas) {
                var duration = new Date().getTime() - lastTime;
                if (!duration) {
                    return setTimeout(drawCanvasFrame, config.frameInterval);
                }

                // via #206, by Jack i.e. @Seymourr
                lastTime = new Date().getTime();

                whammy.frames.push({
                    image: canvas.toDataURL('image/webp', 1),
                    duration: duration
                });

                if (isRecording) {
                    setTimeout(drawCanvasFrame, config.frameInterval);
                }
            }
        });
    }

    var lastTime = new Date().getTime();

    var whammy = new Whammy.Video(100);
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.CanvasRecorder = CanvasRecorder;
}

// _________________
// WhammyRecorder.js

/**
 * WhammyRecorder is a standalone class used by {@link RecordRTC} to bring video recording in Chrome. It runs top over {@link Whammy}.
 * @summary Video recording feature in Chrome.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef WhammyRecorder
 * @class
 * @example
 * var recorder = new WhammyRecorder(mediaStream);
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {disableLogs: true, initCallback: function, video: HTMLVideoElement, etc.}
 */

function WhammyRecorder(mediaStream, config) {

    config = config || {};

    if (!config.frameInterval) {
        config.frameInterval = 10;
    }

    if (!config.disableLogs) {
        console.log('Using frames-interval:', config.frameInterval);
    }

    /**
     * This method records video.
     * @method
     * @memberof WhammyRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        if (!config.width) {
            config.width = 320;
        }

        if (!config.height) {
            config.height = 240;
        }

        if (!config.video) {
            config.video = {
                width: config.width,
                height: config.height
            };
        }

        if (!config.canvas) {
            config.canvas = {
                width: config.width,
                height: config.height
            };
        }

        canvas.width = config.canvas.width || 320;
        canvas.height = config.canvas.height || 240;

        context = canvas.getContext('2d');

        // setting defaults
        if (config.video && config.video instanceof HTMLVideoElement) {
            video = config.video.cloneNode();

            if (config.initCallback) {
                config.initCallback();
            }
        } else {
            video = document.createElement('video');

            setSrcObject(mediaStream, video);

            video.onloadedmetadata = function() { // "onloadedmetadata" may NOT work in FF?
                if (config.initCallback) {
                    config.initCallback();
                }
            };

            video.width = config.video.width;
            video.height = config.video.height;
        }

        video.muted = true;
        video.play();

        lastTime = new Date().getTime();
        whammy = new Whammy.Video();

        if (!config.disableLogs) {
            console.log('canvas resolutions', canvas.width, '*', canvas.height);
            console.log('video width/height', video.width || canvas.width, '*', video.height || canvas.height);
        }

        drawFrames(config.frameInterval);
    };

    /**
     * Draw and push frames to Whammy
     * @param {integer} frameInterval - set minimum interval (in milliseconds) between each time we push a frame to Whammy
     */
    function drawFrames(frameInterval) {
        frameInterval = typeof frameInterval !== 'undefined' ? frameInterval : 10;

        var duration = new Date().getTime() - lastTime;
        if (!duration) {
            return setTimeout(drawFrames, frameInterval, frameInterval);
        }

        if (isPausedRecording) {
            lastTime = new Date().getTime();
            return setTimeout(drawFrames, 100);
        }

        // via #206, by Jack i.e. @Seymourr
        lastTime = new Date().getTime();

        if (video.paused) {
            // via: https://github.com/muaz-khan/WebRTC-Experiment/pull/316
            // Tweak for Android Chrome
            video.play();
        }

        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        whammy.frames.push({
            duration: duration,
            image: canvas.toDataURL('image/webp')
        });

        if (!isStopDrawing) {
            setTimeout(drawFrames, frameInterval, frameInterval);
        }
    }

    function asyncLoop(o) {
        var i = -1,
            length = o.length;

        (function loop() {
            i++;
            if (i === length) {
                o.callback();
                return;
            }

            // "setTimeout" added by Jim McLeod
            setTimeout(function() {
                o.functionToLoop(loop, i);
            }, 1);
        })();
    }


    /**
     * remove black frames from the beginning to the specified frame
     * @param {Array} _frames - array of frames to be checked
     * @param {number} _framesToCheck - number of frame until check will be executed (-1 - will drop all frames until frame not matched will be found)
     * @param {number} _pixTolerance - 0 - very strict (only black pixel color) ; 1 - all
     * @param {number} _frameTolerance - 0 - very strict (only black frame color) ; 1 - all
     * @returns {Array} - array of frames
     */
    // pull#293 by @volodalexey
    function dropBlackFrames(_frames, _framesToCheck, _pixTolerance, _frameTolerance, callback) {
        var localCanvas = document.createElement('canvas');
        localCanvas.width = canvas.width;
        localCanvas.height = canvas.height;
        var context2d = localCanvas.getContext('2d');
        var resultFrames = [];

        var checkUntilNotBlack = _framesToCheck === -1;
        var endCheckFrame = (_framesToCheck && _framesToCheck > 0 && _framesToCheck <= _frames.length) ?
            _framesToCheck : _frames.length;
        var sampleColor = {
            r: 0,
            g: 0,
            b: 0
        };
        var maxColorDifference = Math.sqrt(
            Math.pow(255, 2) +
            Math.pow(255, 2) +
            Math.pow(255, 2)
        );
        var pixTolerance = _pixTolerance && _pixTolerance >= 0 && _pixTolerance <= 1 ? _pixTolerance : 0;
        var frameTolerance = _frameTolerance && _frameTolerance >= 0 && _frameTolerance <= 1 ? _frameTolerance : 0;
        var doNotCheckNext = false;

        asyncLoop({
            length: endCheckFrame,
            functionToLoop: function(loop, f) {
                var matchPixCount, endPixCheck, maxPixCount;

                var finishImage = function() {
                    if (!doNotCheckNext && maxPixCount - matchPixCount <= maxPixCount * frameTolerance) {
                        // console.log('removed black frame : ' + f + ' ; frame duration ' + _frames[f].duration);
                    } else {
                        // console.log('frame is passed : ' + f);
                        if (checkUntilNotBlack) {
                            doNotCheckNext = true;
                        }
                        resultFrames.push(_frames[f]);
                    }
                    loop();
                };

                if (!doNotCheckNext) {
                    var image = new Image();
                    image.onload = function() {
                        context2d.drawImage(image, 0, 0, canvas.width, canvas.height);
                        var imageData = context2d.getImageData(0, 0, canvas.width, canvas.height);
                        matchPixCount = 0;
                        endPixCheck = imageData.data.length;
                        maxPixCount = imageData.data.length / 4;

                        for (var pix = 0; pix < endPixCheck; pix += 4) {
                            var currentColor = {
                                r: imageData.data[pix],
                                g: imageData.data[pix + 1],
                                b: imageData.data[pix + 2]
                            };
                            var colorDifference = Math.sqrt(
                                Math.pow(currentColor.r - sampleColor.r, 2) +
                                Math.pow(currentColor.g - sampleColor.g, 2) +
                                Math.pow(currentColor.b - sampleColor.b, 2)
                            );
                            // difference in color it is difference in color vectors (r1,g1,b1) <=> (r2,g2,b2)
                            if (colorDifference <= maxColorDifference * pixTolerance) {
                                matchPixCount++;
                            }
                        }
                        finishImage();
                    };
                    image.src = _frames[f].image;
                } else {
                    finishImage();
                }
            },
            callback: function() {
                resultFrames = resultFrames.concat(_frames.slice(endCheckFrame));

                if (resultFrames.length <= 0) {
                    // at least one last frame should be available for next manipulation
                    // if total duration of all frames will be < 1000 than ffmpeg doesn't work well...
                    resultFrames.push(_frames[_frames.length - 1]);
                }
                callback(resultFrames);
            }
        });
    }

    var isStopDrawing = false;

    /**
     * This method stops recording video.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof WhammyRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        callback = callback || function() {};

        isStopDrawing = true;

        var _this = this;
        // analyse of all frames takes some time!
        setTimeout(function() {
            // e.g. dropBlackFrames(frames, 10, 1, 1) - will cut all 10 frames
            // e.g. dropBlackFrames(frames, 10, 0.5, 0.5) - will analyse 10 frames
            // e.g. dropBlackFrames(frames, 10) === dropBlackFrames(frames, 10, 0, 0) - will analyse 10 frames with strict black color
            dropBlackFrames(whammy.frames, -1, null, null, function(frames) {
                whammy.frames = frames;

                // to display advertisement images!
                if (config.advertisement && config.advertisement.length) {
                    whammy.frames = config.advertisement.concat(whammy.frames);
                }

                /**
                 * @property {Blob} blob - Recorded frames in video/webm blob.
                 * @memberof WhammyRecorder
                 * @example
                 * recorder.stop(function() {
                 *     var blob = recorder.blob;
                 * });
                 */
                whammy.compile(function(blob) {
                    _this.blob = blob;

                    if (_this.blob.forEach) {
                        _this.blob = new Blob([], {
                            type: 'video/webm'
                        });
                    }

                    if (callback) {
                        callback(_this.blob);
                    }
                });
            });
        }, 10);
    };

    var isPausedRecording = false;

    /**
     * This method pauses the recording process.
     * @method
     * @memberof WhammyRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        isPausedRecording = true;
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof WhammyRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        isPausedRecording = false;

        if (isStopDrawing) {
            this.record();
        }
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof WhammyRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        if (!isStopDrawing) {
            this.stop(clearRecordedDataCB);
        }
        clearRecordedDataCB();
    };

    function clearRecordedDataCB() {
        whammy.frames = [];
        isStopDrawing = true;
        isPausedRecording = false;
    }

    // for debugging
    this.name = 'WhammyRecorder';
    this.toString = function() {
        return this.name;
    };

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');

    var video;
    var lastTime;
    var whammy;
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.WhammyRecorder = WhammyRecorder;
}

// https://github.com/antimatter15/whammy/blob/master/LICENSE
// _________
// Whammy.js

// todo: Firefox now supports webp for webm containers!
// their MediaRecorder implementation works well!
// should we provide an option to record via Whammy.js or MediaRecorder API is a better solution?

/**
 * Whammy is a standalone class used by {@link RecordRTC} to bring video recording in Chrome. It is written by {@link https://github.com/antimatter15|antimatter15}
 * @summary A real time javascript webm encoder based on a canvas hack.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef Whammy
 * @class
 * @example
 * var recorder = new Whammy().Video(15);
 * recorder.add(context || canvas || dataURL);
 * var output = recorder.compile();
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */

var Whammy = (function() {
    // a more abstract-ish API

    function WhammyVideo(duration) {
        this.frames = [];
        this.duration = duration || 1;
        this.quality = 0.8;
    }

    /**
     * Pass Canvas or Context or image/webp(string) to {@link Whammy} encoder.
     * @method
     * @memberof Whammy
     * @example
     * recorder = new Whammy().Video(0.8, 100);
     * recorder.add(canvas || context || 'image/webp');
     * @param {string} frame - Canvas || Context || image/webp
     * @param {number} duration - Stick a duration (in milliseconds)
     */
    WhammyVideo.prototype.add = function(frame, duration) {
        if ('canvas' in frame) { //CanvasRenderingContext2D
            frame = frame.canvas;
        }

        if ('toDataURL' in frame) {
            frame = frame.toDataURL('image/webp', this.quality);
        }

        if (!(/^data:image\/webp;base64,/ig).test(frame)) {
            throw 'Input must be formatted properly as a base64 encoded DataURI of type image/webp';
        }
        this.frames.push({
            image: frame,
            duration: duration || this.duration
        });
    };

    function processInWebWorker(_function) {
        var blob = URL.createObjectURL(new Blob([_function.toString(),
            'this.onmessage =  function (eee) {' + _function.name + '(eee.data);}'
        ], {
            type: 'application/javascript'
        }));

        var worker = new Worker(blob);
        URL.revokeObjectURL(blob);
        return worker;
    }

    function whammyInWebWorker(frames) {
        function ArrayToWebM(frames) {
            var info = checkFrames(frames);
            if (!info) {
                return [];
            }

            var clusterMaxDuration = 30000;

            var EBML = [{
                'id': 0x1a45dfa3, // EBML
                'data': [{
                    'data': 1,
                    'id': 0x4286 // EBMLVersion
                }, {
                    'data': 1,
                    'id': 0x42f7 // EBMLReadVersion
                }, {
                    'data': 4,
                    'id': 0x42f2 // EBMLMaxIDLength
                }, {
                    'data': 8,
                    'id': 0x42f3 // EBMLMaxSizeLength
                }, {
                    'data': 'webm',
                    'id': 0x4282 // DocType
                }, {
                    'data': 2,
                    'id': 0x4287 // DocTypeVersion
                }, {
                    'data': 2,
                    'id': 0x4285 // DocTypeReadVersion
                }]
            }, {
                'id': 0x18538067, // Segment
                'data': [{
                    'id': 0x1549a966, // Info
                    'data': [{
                        'data': 1e6, //do things in millisecs (num of nanosecs for duration scale)
                        'id': 0x2ad7b1 // TimecodeScale
                    }, {
                        'data': 'whammy',
                        'id': 0x4d80 // MuxingApp
                    }, {
                        'data': 'whammy',
                        'id': 0x5741 // WritingApp
                    }, {
                        'data': doubleToString(info.duration),
                        'id': 0x4489 // Duration
                    }]
                }, {
                    'id': 0x1654ae6b, // Tracks
                    'data': [{
                        'id': 0xae, // TrackEntry
                        'data': [{
                            'data': 1,
                            'id': 0xd7 // TrackNumber
                        }, {
                            'data': 1,
                            'id': 0x73c5 // TrackUID
                        }, {
                            'data': 0,
                            'id': 0x9c // FlagLacing
                        }, {
                            'data': 'und',
                            'id': 0x22b59c // Language
                        }, {
                            'data': 'V_VP8',
                            'id': 0x86 // CodecID
                        }, {
                            'data': 'VP8',
                            'id': 0x258688 // CodecName
                        }, {
                            'data': 1,
                            'id': 0x83 // TrackType
                        }, {
                            'id': 0xe0, // Video
                            'data': [{
                                'data': info.width,
                                'id': 0xb0 // PixelWidth
                            }, {
                                'data': info.height,
                                'id': 0xba // PixelHeight
                            }]
                        }]
                    }]
                }]
            }];

            //Generate clusters (max duration)
            var frameNumber = 0;
            var clusterTimecode = 0;
            while (frameNumber < frames.length) {

                var clusterFrames = [];
                var clusterDuration = 0;
                do {
                    clusterFrames.push(frames[frameNumber]);
                    clusterDuration += frames[frameNumber].duration;
                    frameNumber++;
                } while (frameNumber < frames.length && clusterDuration < clusterMaxDuration);

                var clusterCounter = 0;
                var cluster = {
                    'id': 0x1f43b675, // Cluster
                    'data': getClusterData(clusterTimecode, clusterCounter, clusterFrames)
                }; //Add cluster to segment
                EBML[1].data.push(cluster);
                clusterTimecode += clusterDuration;
            }

            return generateEBML(EBML);
        }

        function getClusterData(clusterTimecode, clusterCounter, clusterFrames) {
            return [{
                'data': clusterTimecode,
                'id': 0xe7 // Timecode
            }].concat(clusterFrames.map(function(webp) {
                var block = makeSimpleBlock({
                    discardable: 0,
                    frame: webp.data.slice(4),
                    invisible: 0,
                    keyframe: 1,
                    lacing: 0,
                    trackNum: 1,
                    timecode: Math.round(clusterCounter)
                });
                clusterCounter += webp.duration;
                return {
                    data: block,
                    id: 0xa3
                };
            }));
        }

        // sums the lengths of all the frames and gets the duration

        function checkFrames(frames) {
            if (!frames[0]) {
                postMessage({
                    error: 'Something went wrong. Maybe WebP format is not supported in the current browser.'
                });
                return;
            }

            var width = frames[0].width,
                height = frames[0].height,
                duration = frames[0].duration;

            for (var i = 1; i < frames.length; i++) {
                duration += frames[i].duration;
            }
            return {
                duration: duration,
                width: width,
                height: height
            };
        }

        function numToBuffer(num) {
            var parts = [];
            while (num > 0) {
                parts.push(num & 0xff);
                num = num >> 8;
            }
            return new Uint8Array(parts.reverse());
        }

        function strToBuffer(str) {
            return new Uint8Array(str.split('').map(function(e) {
                return e.charCodeAt(0);
            }));
        }

        function bitsToBuffer(bits) {
            var data = [];
            var pad = (bits.length % 8) ? (new Array(1 + 8 - (bits.length % 8))).join('0') : '';
            bits = pad + bits;
            for (var i = 0; i < bits.length; i += 8) {
                data.push(parseInt(bits.substr(i, 8), 2));
            }
            return new Uint8Array(data);
        }

        function generateEBML(json) {
            var ebml = [];
            for (var i = 0; i < json.length; i++) {
                var data = json[i].data;

                if (typeof data === 'object') {
                    data = generateEBML(data);
                }

                if (typeof data === 'number') {
                    data = bitsToBuffer(data.toString(2));
                }

                if (typeof data === 'string') {
                    data = strToBuffer(data);
                }

                var len = data.size || data.byteLength || data.length;
                var zeroes = Math.ceil(Math.ceil(Math.log(len) / Math.log(2)) / 8);
                var sizeToString = len.toString(2);
                var padded = (new Array((zeroes * 7 + 7 + 1) - sizeToString.length)).join('0') + sizeToString;
                var size = (new Array(zeroes)).join('0') + '1' + padded;

                ebml.push(numToBuffer(json[i].id));
                ebml.push(bitsToBuffer(size));
                ebml.push(data);
            }

            return new Blob(ebml, {
                type: 'video/webm'
            });
        }

        function toBinStrOld(bits) {
            var data = '';
            var pad = (bits.length % 8) ? (new Array(1 + 8 - (bits.length % 8))).join('0') : '';
            bits = pad + bits;
            for (var i = 0; i < bits.length; i += 8) {
                data += String.fromCharCode(parseInt(bits.substr(i, 8), 2));
            }
            return data;
        }

        function makeSimpleBlock(data) {
            var flags = 0;

            if (data.keyframe) {
                flags |= 128;
            }

            if (data.invisible) {
                flags |= 8;
            }

            if (data.lacing) {
                flags |= (data.lacing << 1);
            }

            if (data.discardable) {
                flags |= 1;
            }

            if (data.trackNum > 127) {
                throw 'TrackNumber > 127 not supported';
            }

            var out = [data.trackNum | 0x80, data.timecode >> 8, data.timecode & 0xff, flags].map(function(e) {
                return String.fromCharCode(e);
            }).join('') + data.frame;

            return out;
        }

        function parseWebP(riff) {
            var VP8 = riff.RIFF[0].WEBP[0];

            var frameStart = VP8.indexOf('\x9d\x01\x2a'); // A VP8 keyframe starts with the 0x9d012a header
            for (var i = 0, c = []; i < 4; i++) {
                c[i] = VP8.charCodeAt(frameStart + 3 + i);
            }

            var width, height, tmp;

            //the code below is literally copied verbatim from the bitstream spec
            tmp = (c[1] << 8) | c[0];
            width = tmp & 0x3FFF;
            tmp = (c[3] << 8) | c[2];
            height = tmp & 0x3FFF;
            return {
                width: width,
                height: height,
                data: VP8,
                riff: riff
            };
        }

        function getStrLength(string, offset) {
            return parseInt(string.substr(offset + 4, 4).split('').map(function(i) {
                var unpadded = i.charCodeAt(0).toString(2);
                return (new Array(8 - unpadded.length + 1)).join('0') + unpadded;
            }).join(''), 2);
        }

        function parseRIFF(string) {
            var offset = 0;
            var chunks = {};

            while (offset < string.length) {
                var id = string.substr(offset, 4);
                var len = getStrLength(string, offset);
                var data = string.substr(offset + 4 + 4, len);
                offset += 4 + 4 + len;
                chunks[id] = chunks[id] || [];

                if (id === 'RIFF' || id === 'LIST') {
                    chunks[id].push(parseRIFF(data));
                } else {
                    chunks[id].push(data);
                }
            }
            return chunks;
        }

        function doubleToString(num) {
            return [].slice.call(
                new Uint8Array((new Float64Array([num])).buffer), 0).map(function(e) {
                return String.fromCharCode(e);
            }).reverse().join('');
        }

        var webm = new ArrayToWebM(frames.map(function(frame) {
            var webp = parseWebP(parseRIFF(atob(frame.image.slice(23))));
            webp.duration = frame.duration;
            return webp;
        }));

        postMessage(webm);
    }

    /**
     * Encodes frames in WebM container. It uses WebWorkinvoke to invoke 'ArrayToWebM' method.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof Whammy
     * @example
     * recorder = new Whammy().Video(0.8, 100);
     * recorder.compile(function(blob) {
     *    // blob.size - blob.type
     * });
     */
    WhammyVideo.prototype.compile = function(callback) {
        var webWorker = processInWebWorker(whammyInWebWorker);

        webWorker.onmessage = function(event) {
            if (event.data.error) {
                console.error(event.data.error);
                return;
            }
            callback(event.data);
        };

        webWorker.postMessage(this.frames);
    };

    return {
        /**
         * A more abstract-ish API.
         * @method
         * @memberof Whammy
         * @example
         * recorder = new Whammy().Video(0.8, 100);
         * @param {?number} speed - 0.8
         * @param {?number} quality - 100
         */
        Video: WhammyVideo
    };
})();

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.Whammy = Whammy;
}

// ______________ (indexed-db)
// DiskStorage.js

/**
 * DiskStorage is a standalone object used by {@link RecordRTC} to store recorded blobs in IndexedDB storage.
 * @summary Writing blobs into IndexedDB.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @example
 * DiskStorage.Store({
 *     audioBlob: yourAudioBlob,
 *     videoBlob: yourVideoBlob,
 *     gifBlob  : yourGifBlob
 * });
 * DiskStorage.Fetch(function(dataURL, type) {
 *     if(type === 'audioBlob') { }
 *     if(type === 'videoBlob') { }
 *     if(type === 'gifBlob')   { }
 * });
 * // DiskStorage.dataStoreName = 'recordRTC';
 * // DiskStorage.onError = function(error) { };
 * @property {function} init - This method must be called once to initialize IndexedDB ObjectStore. Though, it is auto-used internally.
 * @property {function} Fetch - This method fetches stored blobs from IndexedDB.
 * @property {function} Store - This method stores blobs in IndexedDB.
 * @property {function} onError - This function is invoked for any known/unknown error.
 * @property {string} dataStoreName - Name of the ObjectStore created in IndexedDB storage.
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */


var DiskStorage = {
    /**
     * This method must be called once to initialize IndexedDB ObjectStore. Though, it is auto-used internally.
     * @method
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.init();
     */
    init: function() {
        var self = this;

        if (typeof indexedDB === 'undefined' || typeof indexedDB.open === 'undefined') {
            console.error('IndexedDB API are not available in this browser.');
            return;
        }

        var dbVersion = 1;
        var dbName = this.dbName || location.href.replace(/\/|:|#|%|\.|\[|\]/g, ''),
            db;
        var request = indexedDB.open(dbName, dbVersion);

        function createObjectStore(dataBase) {
            dataBase.createObjectStore(self.dataStoreName);
        }

        function putInDB() {
            var transaction = db.transaction([self.dataStoreName], 'readwrite');

            if (self.videoBlob) {
                transaction.objectStore(self.dataStoreName).put(self.videoBlob, 'videoBlob');
            }

            if (self.gifBlob) {
                transaction.objectStore(self.dataStoreName).put(self.gifBlob, 'gifBlob');
            }

            if (self.audioBlob) {
                transaction.objectStore(self.dataStoreName).put(self.audioBlob, 'audioBlob');
            }

            function getFromStore(portionName) {
                transaction.objectStore(self.dataStoreName).get(portionName).onsuccess = function(event) {
                    if (self.callback) {
                        self.callback(event.target.result, portionName);
                    }
                };
            }

            getFromStore('audioBlob');
            getFromStore('videoBlob');
            getFromStore('gifBlob');
        }

        request.onerror = self.onError;

        request.onsuccess = function() {
            db = request.result;
            db.onerror = self.onError;

            if (db.setVersion) {
                if (db.version !== dbVersion) {
                    var setVersion = db.setVersion(dbVersion);
                    setVersion.onsuccess = function() {
                        createObjectStore(db);
                        putInDB();
                    };
                } else {
                    putInDB();
                }
            } else {
                putInDB();
            }
        };
        request.onupgradeneeded = function(event) {
            createObjectStore(event.target.result);
        };
    },
    /**
     * This method fetches stored blobs from IndexedDB.
     * @method
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.Fetch(function(dataURL, type) {
     *     if(type === 'audioBlob') { }
     *     if(type === 'videoBlob') { }
     *     if(type === 'gifBlob')   { }
     * });
     */
    Fetch: function(callback) {
        this.callback = callback;
        this.init();

        return this;
    },
    /**
     * This method stores blobs in IndexedDB.
     * @method
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.Store({
     *     audioBlob: yourAudioBlob,
     *     videoBlob: yourVideoBlob,
     *     gifBlob  : yourGifBlob
     * });
     */
    Store: function(config) {
        this.audioBlob = config.audioBlob;
        this.videoBlob = config.videoBlob;
        this.gifBlob = config.gifBlob;

        this.init();

        return this;
    },
    /**
     * This function is invoked for any known/unknown error.
     * @method
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.onError = function(error){
     *     alerot( JSON.stringify(error) );
     * };
     */
    onError: function(error) {
        console.error(JSON.stringify(error, null, '\t'));
    },

    /**
     * @property {string} dataStoreName - Name of the ObjectStore created in IndexedDB storage.
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.dataStoreName = 'recordRTC';
     */
    dataStoreName: 'recordRTC',
    dbName: null
};

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.DiskStorage = DiskStorage;
}

// ______________
// GifRecorder.js

/**
 * GifRecorder is standalone calss used by {@link RecordRTC} to record video or canvas into animated gif.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef GifRecorder
 * @class
 * @example
 * var recorder = new GifRecorder(mediaStream || canvas || context, { onGifPreview: function, onGifRecordingStarted: function, width: 1280, height: 720, frameRate: 200, quality: 10 });
 * recorder.record();
 * recorder.stop(function(blob) {
 *     img.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object or HTMLCanvasElement or CanvasRenderingContext2D.
 * @param {object} config - {disableLogs:true, initCallback: function, width: 320, height: 240, frameRate: 200, quality: 10}
 */

function GifRecorder(mediaStream, config) {
    if (typeof GIFEncoder === 'undefined') {
        var script = document.createElement('script');
        script.src = 'https://cdn.webrtc-experiment.com/gif-recorder.js';
        (document.body || document.documentElement).appendChild(script);
    }

    config = config || {};

    var isHTMLObject = mediaStream instanceof CanvasRenderingContext2D || mediaStream instanceof HTMLCanvasElement;

    /**
     * This method records MediaStream.
     * @method
     * @memberof GifRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        if (typeof GIFEncoder === 'undefined') {
            setTimeout(self.record, 1000);
            return;
        }

        if (!isLoadedMetaData) {
            setTimeout(self.record, 1000);
            return;
        }

        if (!isHTMLObject) {
            if (!config.width) {
                config.width = video.offsetWidth || 320;
            }

            if (!config.height) {
                config.height = video.offsetHeight || 240;
            }

            if (!config.video) {
                config.video = {
                    width: config.width,
                    height: config.height
                };
            }

            if (!config.canvas) {
                config.canvas = {
                    width: config.width,
                    height: config.height
                };
            }

            canvas.width = config.canvas.width || 320;
            canvas.height = config.canvas.height || 240;

            video.width = config.video.width || 320;
            video.height = config.video.height || 240;
        }

        // external library to record as GIF images
        gifEncoder = new GIFEncoder();

        // void setRepeat(int iter) 
        // Sets the number of times the set of GIF frames should be played. 
        // Default is 1; 0 means play indefinitely.
        gifEncoder.setRepeat(0);

        // void setFrameRate(Number fps) 
        // Sets frame rate in frames per second. 
        // Equivalent to setDelay(1000/fps).
        // Using "setDelay" instead of "setFrameRate"
        gifEncoder.setDelay(config.frameRate || 200);

        // void setQuality(int quality) 
        // Sets quality of color quantization (conversion of images to the 
        // maximum 256 colors allowed by the GIF specification). 
        // Lower values (minimum = 1) produce better colors, 
        // but slow processing significantly. 10 is the default, 
        // and produces good color mapping at reasonable speeds. 
        // Values greater than 20 do not yield significant improvements in speed.
        gifEncoder.setQuality(config.quality || 10);

        // Boolean start() 
        // This writes the GIF Header and returns false if it fails.
        gifEncoder.start();

        if (typeof config.onGifRecordingStarted === 'function') {
            config.onGifRecordingStarted();
        }

        startTime = Date.now();

        function drawVideoFrame(time) {
            if (self.clearedRecordedData === true) {
                return;
            }

            if (isPausedRecording) {
                return setTimeout(function() {
                    drawVideoFrame(time);
                }, 100);
            }

            lastAnimationFrame = requestAnimationFrame(drawVideoFrame);

            if (typeof lastFrameTime === undefined) {
                lastFrameTime = time;
            }

            // ~10 fps
            if (time - lastFrameTime < 90) {
                return;
            }

            if (!isHTMLObject && video.paused) {
                // via: https://github.com/muaz-khan/WebRTC-Experiment/pull/316
                // Tweak for Android Chrome
                video.play();
            }

            if (!isHTMLObject) {
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
            }

            if (config.onGifPreview) {
                config.onGifPreview(canvas.toDataURL('image/png'));
            }

            gifEncoder.addFrame(context);
            lastFrameTime = time;
        }

        lastAnimationFrame = requestAnimationFrame(drawVideoFrame);

        if (config.initCallback) {
            config.initCallback();
        }
    };

    /**
     * This method stops recording MediaStream.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof GifRecorder
     * @example
     * recorder.stop(function(blob) {
     *     img.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        callback = callback || function() {};

        if (lastAnimationFrame) {
            cancelAnimationFrame(lastAnimationFrame);
        }

        endTime = Date.now();

        /**
         * @property {Blob} blob - The recorded blob object.
         * @memberof GifRecorder
         * @example
         * recorder.stop(function(){
         *     var blob = recorder.blob;
         * });
         */
        this.blob = new Blob([new Uint8Array(gifEncoder.stream().bin)], {
            type: 'image/gif'
        });

        callback(this.blob);

        // bug: find a way to clear old recorded blobs
        gifEncoder.stream().bin = [];
    };

    var isPausedRecording = false;

    /**
     * This method pauses the recording process.
     * @method
     * @memberof GifRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        isPausedRecording = true;
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof GifRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        isPausedRecording = false;
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof GifRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        self.clearedRecordedData = true;
        clearRecordedDataCB();
    };

    function clearRecordedDataCB() {
        if (gifEncoder) {
            gifEncoder.stream().bin = [];
        }
    }

    // for debugging
    this.name = 'GifRecorder';
    this.toString = function() {
        return this.name;
    };

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');

    if (isHTMLObject) {
        if (mediaStream instanceof CanvasRenderingContext2D) {
            context = mediaStream;
            canvas = context.canvas;
        } else if (mediaStream instanceof HTMLCanvasElement) {
            context = mediaStream.getContext('2d');
            canvas = mediaStream;
        }
    }

    var isLoadedMetaData = true;

    if (!isHTMLObject) {
        var video = document.createElement('video');
        video.muted = true;
        video.autoplay = true;

        isLoadedMetaData = false;
        video.onloadedmetadata = function() {
            isLoadedMetaData = true;
        };

        setSrcObject(mediaStream, video);

        video.play();
    }

    var lastAnimationFrame = null;
    var startTime, endTime, lastFrameTime;

    var gifEncoder;

    var self = this;
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.GifRecorder = GifRecorder;
}

// Last time updated: 2019-06-21 4:09:42 AM UTC

// ________________________
// MultiStreamsMixer v1.2.2

// Open-Sourced: https://github.com/muaz-khan/MultiStreamsMixer

// --------------------------------------------------
// Muaz Khan     - www.MuazKhan.com
// MIT License   - www.WebRTC-Experiment.com/licence
// --------------------------------------------------

function MultiStreamsMixer(arrayOfMediaStreams, elementClass) {

    var browserFakeUserAgent = 'Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45';

    (function(that) {
        if (typeof RecordRTC !== 'undefined') {
            return;
        }

        if (!that) {
            return;
        }

        if (typeof window !== 'undefined') {
            return;
        }

        if (typeof global === 'undefined') {
            return;
        }

        global.navigator = {
            userAgent: browserFakeUserAgent,
            getUserMedia: function() {}
        };

        if (!global.console) {
            global.console = {};
        }

        if (typeof global.console.log === 'undefined' || typeof global.console.error === 'undefined') {
            global.console.error = global.console.log = global.console.log || function() {
                console.log(arguments);
            };
        }

        if (typeof document === 'undefined') {
            /*global document:true */
            that.document = {
                documentElement: {
                    appendChild: function() {
                        return '';
                    }
                }
            };

            document.createElement = document.captureStream = document.mozCaptureStream = function() {
                var obj = {
                    getContext: function() {
                        return obj;
                    },
                    play: function() {},
                    pause: function() {},
                    drawImage: function() {},
                    toDataURL: function() {
                        return '';
                    },
                    style: {}
                };
                return obj;
            };

            that.HTMLVideoElement = function() {};
        }

        if (typeof location === 'undefined') {
            /*global location:true */
            that.location = {
                protocol: 'file:',
                href: '',
                hash: ''
            };
        }

        if (typeof screen === 'undefined') {
            /*global screen:true */
            that.screen = {
                width: 0,
                height: 0
            };
        }

        if (typeof URL === 'undefined') {
            /*global screen:true */
            that.URL = {
                createObjectURL: function() {
                    return '';
                },
                revokeObjectURL: function() {
                    return '';
                }
            };
        }

        /*global window:true */
        that.window = global;
    })(typeof global !== 'undefined' ? global : null);

    // requires: chrome://flags/#enable-experimental-web-platform-features

    elementClass = elementClass || 'multi-streams-mixer';

    var videos = [];
    var isStopDrawingFrames = false;

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.style.opacity = 0;
    canvas.style.position = 'absolute';
    canvas.style.zIndex = -1;
    canvas.style.top = '-1000em';
    canvas.style.left = '-1000em';
    canvas.className = elementClass;
    (document.body || document.documentElement).appendChild(canvas);

    this.disableLogs = false;
    this.frameInterval = 10;

    this.width = 360;
    this.height = 240;

    // use gain node to prevent echo
    this.useGainNode = true;

    var self = this;

    // _____________________________
    // Cross-Browser-Declarations.js

    // WebAudio API representer
    var AudioContext = window.AudioContext;

    if (typeof AudioContext === 'undefined') {
        if (typeof webkitAudioContext !== 'undefined') {
            /*global AudioContext:true */
            AudioContext = webkitAudioContext;
        }

        if (typeof mozAudioContext !== 'undefined') {
            /*global AudioContext:true */
            AudioContext = mozAudioContext;
        }
    }

    /*jshint -W079 */
    var URL = window.URL;

    if (typeof URL === 'undefined' && typeof webkitURL !== 'undefined') {
        /*global URL:true */
        URL = webkitURL;
    }

    if (typeof navigator !== 'undefined' && typeof navigator.getUserMedia === 'undefined') { // maybe window.navigator?
        if (typeof navigator.webkitGetUserMedia !== 'undefined') {
            navigator.getUserMedia = navigator.webkitGetUserMedia;
        }

        if (typeof navigator.mozGetUserMedia !== 'undefined') {
            navigator.getUserMedia = navigator.mozGetUserMedia;
        }
    }

    var MediaStream = window.MediaStream;

    if (typeof MediaStream === 'undefined' && typeof webkitMediaStream !== 'undefined') {
        MediaStream = webkitMediaStream;
    }

    /*global MediaStream:true */
    if (typeof MediaStream !== 'undefined') {
        // override "stop" method for all browsers
        if (typeof MediaStream.prototype.stop === 'undefined') {
            MediaStream.prototype.stop = function() {
                this.getTracks().forEach(function(track) {
                    track.stop();
                });
            };
        }
    }

    var Storage = {};

    if (typeof AudioContext !== 'undefined') {
        Storage.AudioContext = AudioContext;
    } else if (typeof webkitAudioContext !== 'undefined') {
        Storage.AudioContext = webkitAudioContext;
    }

    function setSrcObject(stream, element) {
        if ('srcObject' in element) {
            element.srcObject = stream;
        } else if ('mozSrcObject' in element) {
            element.mozSrcObject = stream;
        } else {
            element.srcObject = stream;
        }
    }

    this.startDrawingFrames = function() {
        drawVideosToCanvas();
    };

    function drawVideosToCanvas() {
        if (isStopDrawingFrames) {
            return;
        }

        var videosLength = videos.length;

        var fullcanvas = false;
        var remaining = [];
        videos.forEach(function(video) {
            if (!video.stream) {
                video.stream = {};
            }

            if (video.stream.fullcanvas) {
                fullcanvas = video;
            } else {
                // todo: video.stream.active or video.stream.live to fix blank frames issues?
                remaining.push(video);
            }
        });

        if (fullcanvas) {
            canvas.width = fullcanvas.stream.width;
            canvas.height = fullcanvas.stream.height;
        } else if (remaining.length) {
            canvas.width = videosLength > 1 ? remaining[0].width * 2 : remaining[0].width;

            var height = 1;
            if (videosLength === 3 || videosLength === 4) {
                height = 2;
            }
            if (videosLength === 5 || videosLength === 6) {
                height = 3;
            }
            if (videosLength === 7 || videosLength === 8) {
                height = 4;
            }
            if (videosLength === 9 || videosLength === 10) {
                height = 5;
            }
            canvas.height = remaining[0].height * height;
        } else {
            canvas.width = self.width || 360;
            canvas.height = self.height || 240;
        }

        if (fullcanvas && fullcanvas instanceof HTMLVideoElement) {
            drawImage(fullcanvas);
        }

        remaining.forEach(function(video, idx) {
            drawImage(video, idx);
        });

        setTimeout(drawVideosToCanvas, self.frameInterval);
    }

    function drawImage(video, idx) {
        if (isStopDrawingFrames) {
            return;
        }

        var x = 0;
        var y = 0;
        var width = video.width;
        var height = video.height;

        if (idx === 1) {
            x = video.width;
        }

        if (idx === 2) {
            y = video.height;
        }

        if (idx === 3) {
            x = video.width;
            y = video.height;
        }

        if (idx === 4) {
            y = video.height * 2;
        }

        if (idx === 5) {
            x = video.width;
            y = video.height * 2;
        }

        if (idx === 6) {
            y = video.height * 3;
        }

        if (idx === 7) {
            x = video.width;
            y = video.height * 3;
        }

        if (typeof video.stream.left !== 'undefined') {
            x = video.stream.left;
        }

        if (typeof video.stream.top !== 'undefined') {
            y = video.stream.top;
        }

        if (typeof video.stream.width !== 'undefined') {
            width = video.stream.width;
        }

        if (typeof video.stream.height !== 'undefined') {
            height = video.stream.height;
        }

        context.drawImage(video, x, y, width, height);

        if (typeof video.stream.onRender === 'function') {
            video.stream.onRender(context, x, y, width, height, idx);
        }
    }

    function getMixedStream() {
        isStopDrawingFrames = false;
        var mixedVideoStream = getMixedVideoStream();

        var mixedAudioStream = getMixedAudioStream();
        if (mixedAudioStream) {
            mixedAudioStream.getTracks().filter(function(t) {
                return t.kind === 'audio';
            }).forEach(function(track) {
                mixedVideoStream.addTrack(track);
            });
        }

        var fullcanvas;
        arrayOfMediaStreams.forEach(function(stream) {
            if (stream.fullcanvas) {
                fullcanvas = true;
            }
        });

        // mixedVideoStream.prototype.appendStreams = appendStreams;
        // mixedVideoStream.prototype.resetVideoStreams = resetVideoStreams;
        // mixedVideoStream.prototype.clearRecordedData = clearRecordedData;

        return mixedVideoStream;
    }

    function getMixedVideoStream() {
        resetVideoStreams();

        var capturedStream;

        if ('captureStream' in canvas) {
            capturedStream = canvas.captureStream();
        } else if ('mozCaptureStream' in canvas) {
            capturedStream = canvas.mozCaptureStream();
        } else if (!self.disableLogs) {
            console.error('Upgrade to latest Chrome or otherwise enable this flag: chrome://flags/#enable-experimental-web-platform-features');
        }

        var videoStream = new MediaStream();

        capturedStream.getTracks().filter(function(t) {
            return t.kind === 'video';
        }).forEach(function(track) {
            videoStream.addTrack(track);
        });

        canvas.stream = videoStream;

        return videoStream;
    }

    function getMixedAudioStream() {
        // via: @pehrsons
        if (!Storage.AudioContextConstructor) {
            Storage.AudioContextConstructor = new Storage.AudioContext();
        }

        self.audioContext = Storage.AudioContextConstructor;

        self.audioSources = [];

        if (self.useGainNode === true) {
            self.gainNode = self.audioContext.createGain();
            self.gainNode.connect(self.audioContext.destination);
            self.gainNode.gain.value = 0; // don't hear self
        }

        var audioTracksLength = 0;
        arrayOfMediaStreams.forEach(function(stream) {
            if (!stream.getTracks().filter(function(t) {
                    return t.kind === 'audio';
                }).length) {
                return;
            }

            audioTracksLength++;

            var audioSource = self.audioContext.createMediaStreamSource(stream);

            if (self.useGainNode === true) {
                audioSource.connect(self.gainNode);
            }

            self.audioSources.push(audioSource);
        });

        if (!audioTracksLength) {
            // because "self.audioContext" is not initialized
            // that's why we've to ignore rest of the code
            return;
        }

        self.audioDestination = self.audioContext.createMediaStreamDestination();
        self.audioSources.forEach(function(audioSource) {
            audioSource.connect(self.audioDestination);
        });
        return self.audioDestination.stream;
    }

    function getVideo(stream) {
        var video = document.createElement('video');

        setSrcObject(stream, video);

        video.className = elementClass;

        video.muted = true;
        video.volume = 0;

        video.width = stream.width || self.width || 360;
        video.height = stream.height || self.height || 240;

        video.play();

        return video;
    }

    this.appendStreams = function(streams) {
        if (!streams) {
            throw 'First parameter is required.';
        }

        if (!(streams instanceof Array)) {
            streams = [streams];
        }

        streams.forEach(function(stream) {
            var newStream = new MediaStream();

            if (stream.getTracks().filter(function(t) {
                    return t.kind === 'video';
                }).length) {
                var video = getVideo(stream);
                video.stream = stream;
                videos.push(video);

                newStream.addTrack(stream.getTracks().filter(function(t) {
                    return t.kind === 'video';
                })[0]);
            }

            if (stream.getTracks().filter(function(t) {
                    return t.kind === 'audio';
                }).length) {
                var audioSource = self.audioContext.createMediaStreamSource(stream);
                self.audioDestination = self.audioContext.createMediaStreamDestination();
                audioSource.connect(self.audioDestination);

                newStream.addTrack(self.audioDestination.stream.getTracks().filter(function(t) {
                    return t.kind === 'audio';
                })[0]);
            }

            arrayOfMediaStreams.push(newStream);
        });
    };

    this.releaseStreams = function() {
        videos = [];
        isStopDrawingFrames = true;

        if (self.gainNode) {
            self.gainNode.disconnect();
            self.gainNode = null;
        }

        if (self.audioSources.length) {
            self.audioSources.forEach(function(source) {
                source.disconnect();
            });
            self.audioSources = [];
        }

        if (self.audioDestination) {
            self.audioDestination.disconnect();
            self.audioDestination = null;
        }

        if (self.audioContext) {
            self.audioContext.close();
        }

        self.audioContext = null;

        context.clearRect(0, 0, canvas.width, canvas.height);

        if (canvas.stream) {
            canvas.stream.stop();
            canvas.stream = null;
        }
    };

    this.resetVideoStreams = function(streams) {
        if (streams && !(streams instanceof Array)) {
            streams = [streams];
        }

        resetVideoStreams(streams);
    };

    function resetVideoStreams(streams) {
        videos = [];
        streams = streams || arrayOfMediaStreams;

        // via: @adrian-ber
        streams.forEach(function(stream) {
            if (!stream.getTracks().filter(function(t) {
                    return t.kind === 'video';
                }).length) {
                return;
            }

            var video = getVideo(stream);
            video.stream = stream;
            videos.push(video);
        });
    }

    // for debugging
    this.name = 'MultiStreamsMixer';
    this.toString = function() {
        return this.name;
    };

    this.getMixedStream = getMixedStream;

}

if (typeof RecordRTC === 'undefined') {
    if (true /* && !!module.exports*/ ) {
        module.exports = MultiStreamsMixer;
    }

    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
            return MultiStreamsMixer;
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
}

// ______________________
// MultiStreamRecorder.js

/*
 * Video conference recording, using captureStream API along with WebAudio and Canvas2D API.
 */

/**
 * MultiStreamRecorder can record multiple videos in single container.
 * @summary Multi-videos recorder.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef MultiStreamRecorder
 * @class
 * @example
 * var options = {
 *     mimeType: 'video/webm'
 * }
 * var recorder = new MultiStreamRecorder(ArrayOfMediaStreams, options);
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 *
 *     // or
 *     var blob = recorder.blob;
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStreams} mediaStreams - Array of MediaStreams.
 * @param {object} config - {disableLogs:true, frameInterval: 1, mimeType: "video/webm"}
 */

function MultiStreamRecorder(arrayOfMediaStreams, options) {
    arrayOfMediaStreams = arrayOfMediaStreams || [];
    var self = this;

    var mixer;
    var mediaRecorder;

    options = options || {
        elementClass: 'multi-streams-mixer',
        mimeType: 'video/webm',
        video: {
            width: 360,
            height: 240
        }
    };

    if (!options.frameInterval) {
        options.frameInterval = 10;
    }

    if (!options.video) {
        options.video = {};
    }

    if (!options.video.width) {
        options.video.width = 360;
    }

    if (!options.video.height) {
        options.video.height = 240;
    }

    /**
     * This method records all MediaStreams.
     * @method
     * @memberof MultiStreamRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        // github/muaz-khan/MultiStreamsMixer
        mixer = new MultiStreamsMixer(arrayOfMediaStreams, options.elementClass || 'multi-streams-mixer');

        if (getAllVideoTracks().length) {
            mixer.frameInterval = options.frameInterval || 10;
            mixer.width = options.video.width || 360;
            mixer.height = options.video.height || 240;
            mixer.startDrawingFrames();
        }

        if (options.previewStream && typeof options.previewStream === 'function') {
            options.previewStream(mixer.getMixedStream());
        }

        // record using MediaRecorder API
        mediaRecorder = new MediaStreamRecorder(mixer.getMixedStream(), options);
        mediaRecorder.record();
    };

    function getAllVideoTracks() {
        var tracks = [];
        arrayOfMediaStreams.forEach(function(stream) {
            getTracks(stream, 'video').forEach(function(track) {
                tracks.push(track);
            });
        });
        return tracks;
    }

    /**
     * This method stops recording MediaStream.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof MultiStreamRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        if (!mediaRecorder) {
            return;
        }

        mediaRecorder.stop(function(blob) {
            self.blob = blob;

            callback(blob);

            self.clearRecordedData();
        });
    };

    /**
     * This method pauses the recording process.
     * @method
     * @memberof MultiStreamRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        if (mediaRecorder) {
            mediaRecorder.pause();
        }
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof MultiStreamRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        if (mediaRecorder) {
            mediaRecorder.resume();
        }
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof MultiStreamRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        if (mediaRecorder) {
            mediaRecorder.clearRecordedData();
            mediaRecorder = null;
        }

        if (mixer) {
            mixer.releaseStreams();
            mixer = null;
        }
    };

    /**
     * Add extra media-streams to existing recordings.
     * @method
     * @memberof MultiStreamRecorder
     * @param {MediaStreams} mediaStreams - Array of MediaStreams
     * @example
     * recorder.addStreams([newAudioStream, newVideoStream]);
     */
    this.addStreams = function(streams) {
        if (!streams) {
            throw 'First parameter is required.';
        }

        if (!(streams instanceof Array)) {
            streams = [streams];
        }

        arrayOfMediaStreams.concat(streams);

        if (!mediaRecorder || !mixer) {
            return;
        }

        mixer.appendStreams(streams);

        if (options.previewStream && typeof options.previewStream === 'function') {
            options.previewStream(mixer.getMixedStream());
        }
    };

    /**
     * Reset videos during live recording. Replace old videos e.g. replace cameras with full-screen.
     * @method
     * @memberof MultiStreamRecorder
     * @param {MediaStreams} mediaStreams - Array of MediaStreams
     * @example
     * recorder.resetVideoStreams([newVideo1, newVideo2]);
     */
    this.resetVideoStreams = function(streams) {
        if (!mixer) {
            return;
        }

        if (streams && !(streams instanceof Array)) {
            streams = [streams];
        }

        mixer.resetVideoStreams(streams);
    };

    /**
     * Returns MultiStreamsMixer
     * @method
     * @memberof MultiStreamRecorder
     * @param {MediaStreams} mediaStreams - Array of MediaStreams
     * @example
     * let mixer = recorder.getMixer();
     * mixer.appendStreams([newStream]);
     */
    this.getMixer = function(streams) {
        return mixer;
    };

    // for debugging
    this.name = 'MultiStreamRecorder';
    this.toString = function() {
        return this.name;
    };
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.MultiStreamRecorder = MultiStreamRecorder;
}

// _____________________
// RecordRTC.promises.js

/**
 * RecordRTCPromisesHandler adds promises support in {@link RecordRTC}. Try a {@link https://github.com/muaz-khan/RecordRTC/blob/master/simple-demos/RecordRTCPromisesHandler.html|demo here}
 * @summary Promises for {@link RecordRTC}
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef RecordRTCPromisesHandler
 * @class
 * @example
 * var recorder = new RecordRTCPromisesHandler(mediaStream, options);
 * recorder.startRecording()
 *         .then(successCB)
 *         .catch(errorCB);
 * // Note: You can access all RecordRTC API using "recorder.recordRTC" e.g. 
 * recorder.recordRTC.onStateChanged = function(state) {};
 * recorder.recordRTC.setRecordingDuration(5000);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - Single media-stream object, array of media-streams, html-canvas-element, etc.
 * @param {object} config - {type:"video", recorderType: MediaStreamRecorder, disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, video: HTMLVideoElement, etc.}
 * @throws Will throw an error if "new" keyword is not used to initiate "RecordRTCPromisesHandler". Also throws error if first argument "MediaStream" is missing.
 * @requires {@link RecordRTC}
 */

function RecordRTCPromisesHandler(mediaStream, options) {
    if (!this) {
        throw 'Use "new RecordRTCPromisesHandler()"';
    }

    if (typeof mediaStream === 'undefined') {
        throw 'First argument "MediaStream" is required.';
    }

    var self = this;

    /**
     * @property {Blob} blob - Access/reach the native {@link RecordRTC} object.
     * @memberof RecordRTCPromisesHandler
     * @example
     * let internal = recorder.recordRTC.getInternalRecorder();
     * alert(internal instanceof MediaStreamRecorder);
     * recorder.recordRTC.onStateChanged = function(state) {};
     */
    self.recordRTC = new RecordRTC(mediaStream, options);

    /**
     * This method records MediaStream.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * recorder.startRecording()
     *         .then(successCB)
     *         .catch(errorCB);
     */
    this.startRecording = function() {
        return new Promise(function(resolve, reject) {
            try {
                self.recordRTC.startRecording();
                resolve();
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * This method stops the recording.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * recorder.stopRecording().then(function() {
     *     var blob = recorder.getBlob();
     * }).catch(errorCB);
     */
    this.stopRecording = function() {
        return new Promise(function(resolve, reject) {
            try {
                self.recordRTC.stopRecording(function(url) {
                    self.blob = self.recordRTC.getBlob();

                    if (!self.blob || !self.blob.size) {
                        reject('Empty blob.', self.blob);
                        return;
                    }

                    resolve(url);
                });
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * This method pauses the recording. You can resume recording using "resumeRecording" method.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * recorder.pauseRecording()
     *         .then(successCB)
     *         .catch(errorCB);
     */
    this.pauseRecording = function() {
        return new Promise(function(resolve, reject) {
            try {
                self.recordRTC.pauseRecording();
                resolve();
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * This method resumes the recording.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * recorder.resumeRecording()
     *         .then(successCB)
     *         .catch(errorCB);
     */
    this.resumeRecording = function() {
        return new Promise(function(resolve, reject) {
            try {
                self.recordRTC.resumeRecording();
                resolve();
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * This method returns data-url for the recorded blob.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * recorder.stopRecording().then(function() {
     *     recorder.getDataURL().then(function(dataURL) {
     *         window.open(dataURL);
     *     }).catch(errorCB);;
     * }).catch(errorCB);
     */
    this.getDataURL = function(callback) {
        return new Promise(function(resolve, reject) {
            try {
                self.recordRTC.getDataURL(function(dataURL) {
                    resolve(dataURL);
                });
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * This method returns the recorded blob.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * recorder.stopRecording().then(function() {
     *     recorder.getBlob().then(function(blob) {})
     * }).catch(errorCB);
     */
    this.getBlob = function() {
        return new Promise(function(resolve, reject) {
            try {
                resolve(self.recordRTC.getBlob());
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * Destroy RecordRTC instance. Clear all recorders and objects.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * let internalRecorder = await recorder.getInternalRecorder();
     * if(internalRecorder instanceof MultiStreamRecorder) {
     *     internalRecorder.addStreams([newAudioStream]);
     *     internalRecorder.resetVideoStreams([screenStream]);
     * }
     * @returns {Object} Returns internal recording object.
     */
    this.getInternalRecorder = function() {
        return new Promise(function(resolve, reject) {
            try {
                resolve(self.recordRTC.getInternalRecorder());
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * This method resets the recorder. So that you can reuse single recorder instance many times.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * await recorder.reset();
     * recorder.startRecording(); // record again
     */
    this.reset = function() {
        return new Promise(function(resolve, reject) {
            try {
                resolve(self.recordRTC.reset());
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * Destroy RecordRTC instance. Clear all recorders and objects.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * recorder.destroy().then(successCB).catch(errorCB);
     */
    this.destroy = function() {
        return new Promise(function(resolve, reject) {
            try {
                resolve(self.recordRTC.destroy());
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * Get recorder's readonly state.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * let state = await recorder.getState();
     * // or
     * recorder.getState().then(state => { console.log(state); })
     * @returns {String} Returns recording state.
     */
    this.getState = function() {
        return new Promise(function(resolve, reject) {
            try {
                resolve(self.recordRTC.getState());
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * @property {Blob} blob - Recorded data as "Blob" object.
     * @memberof RecordRTCPromisesHandler
     * @example
     * await recorder.stopRecording();
     * let blob = recorder.getBlob(); // or "recorder.recordRTC.blob"
     * invokeSaveAsDialog(blob);
     */
    this.blob = null;

    /**
     * RecordRTC version number
     * @property {String} version - Release version number.
     * @memberof RecordRTCPromisesHandler
     * @static
     * @readonly
     * @example
     * alert(recorder.version);
     */
    this.version = '5.5.8';
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.RecordRTCPromisesHandler = RecordRTCPromisesHandler;
}

// ______________________
// WebAssemblyRecorder.js

/**
 * WebAssemblyRecorder lets you create webm videos in JavaScript via WebAssembly. The library consumes raw RGBA32 buffers (4 bytes per pixel) and turns them into a webm video with the given framerate and quality. This makes it compatible out-of-the-box with ImageData from a CANVAS. With realtime mode you can also use webm-wasm for streaming webm videos.
 * @summary Video recording feature in Chrome, Firefox and maybe Edge.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef WebAssemblyRecorder
 * @class
 * @example
 * var recorder = new WebAssemblyRecorder(mediaStream);
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {webAssemblyPath:'webm-wasm.wasm',workerPath: 'webm-worker.js', frameRate: 30, width: 1920, height: 1080, bitrate: 1024}
 */
function WebAssemblyRecorder(stream, config) {
    // based on: github.com/GoogleChromeLabs/webm-wasm

    if (typeof ReadableStream === 'undefined' || typeof WritableStream === 'undefined') {
        // because it fixes readable/writable streams issues
        console.error('Following polyfill is strongly recommended: https://unpkg.com/@mattiasbuelens/web-streams-polyfill/dist/polyfill.min.js');
    }

    config = config || {};

    config.width = config.width || 640;
    config.height = config.height || 480;
    config.frameRate = config.frameRate || 30;
    config.bitrate = config.bitrate || 1200;

    function createBufferURL(buffer, type) {
        return URL.createObjectURL(new Blob([buffer], {
            type: type || ''
        }));
    }

    function cameraStream() {
        return new ReadableStream({
            start: function(controller) {
                var cvs = document.createElement('canvas');
                var video = document.createElement('video');
                video.srcObject = stream;
                video.onplaying = function() {
                    cvs.width = config.width;
                    cvs.height = config.height;
                    var ctx = cvs.getContext('2d');
                    var frameTimeout = 1000 / config.frameRate;
                    setTimeout(function f() {
                        ctx.drawImage(video, 0, 0);
                        controller.enqueue(
                            ctx.getImageData(0, 0, config.width, config.height)
                        );
                        setTimeout(f, frameTimeout);
                    }, frameTimeout);
                };
                video.play();
            }
        });
    }

    var worker;

    function startRecording(stream, buffer) {
        if (!config.workerPath && !buffer) {
            // is it safe to use @latest ?
            fetch(
                'https://unpkg.com/webm-wasm@latest/dist/webm-worker.js'
            ).then(function(r) {
                r.arrayBuffer().then(function(buffer) {
                    startRecording(stream, buffer);
                });
            });
            return;
        }

        if (!config.workerPath && buffer instanceof ArrayBuffer) {
            var blob = new Blob([buffer], {
                type: 'text/javascript'
            });
            config.workerPath = URL.createObjectURL(blob);
        }

        if (!config.workerPath) {
            console.error('workerPath parameter is missing.');
        }

        worker = new Worker(config.workerPath);

        worker.postMessage(config.webAssemblyPath || 'https://unpkg.com/webm-wasm@latest/dist/webm-wasm.wasm');
        worker.addEventListener('message', function(event) {
            if (event.data === 'READY') {
                worker.postMessage({
                    width: config.width,
                    height: config.height,
                    bitrate: config.bitrate || 1200,
                    timebaseDen: config.frameRate || 30,
                    realtime: true
                });

                cameraStream().pipeTo(new WritableStream({
                    write: function(image) {
                        if (!worker) {
                            return;
                        }

                        worker.postMessage(image.data.buffer, [image.data.buffer]);
                    }
                }));
            } else if (!!event.data) {
                if (!isPaused) {
                    arrayOfBuffers.push(event.data);
                }
            }
        });
    }

    /**
     * This method records video.
     * @method
     * @memberof WebAssemblyRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        arrayOfBuffers = [];
        isPaused = false;
        this.blob = null;
        startRecording(stream);

        if (typeof config.initCallback === 'function') {
            config.initCallback();
        }
    };

    var isPaused;

    /**
     * This method pauses the recording process.
     * @method
     * @memberof WebAssemblyRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        isPaused = true;
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof WebAssemblyRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        isPaused = false;
    };

    function terminate() {
        if (!worker) {
            return;
        }

        worker.postMessage(null);
        worker.terminate();
        worker = null;
    }

    var arrayOfBuffers = [];

    /**
     * This method stops recording video.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof WebAssemblyRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        terminate();

        this.blob = new Blob(arrayOfBuffers, {
            type: 'video/webm'
        });

        callback(this.blob);
    };

    // for debugging
    this.name = 'WebAssemblyRecorder';
    this.toString = function() {
        return this.name;
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof WebAssemblyRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        arrayOfBuffers = [];
        isPaused = false;
        this.blob = null;

        // todo: if recording-ON then STOP it first
    };

    /**
     * @property {Blob} blob - The recorded blob object.
     * @memberof WebAssemblyRecorder
     * @example
     * recorder.stop(function(){
     *     var blob = recorder.blob;
     * });
     */
    this.blob = null;
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.WebAssemblyRecorder = WebAssemblyRecorder;
}


/***/ }),

/***/ "./src/app/product-details/product-details.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/product-details/product-details.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPageModule", function() { return ProductDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-details.page */ "./src/app/product-details/product-details.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_stars__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-stars */ "./node_modules/ngx-stars/fesm5/ngx-stars.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-sharebuttons */ "./node_modules/ngx-sharebuttons/ngx-sharebuttons.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");












var routes = [
    {
        path: '',
        component: _product_details_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsPage"]
    }
];
var ProductDetailsPageModule = /** @class */ (function () {
    function ProductDetailsPageModule() {
    }
    ProductDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                ngx_stars__WEBPACK_IMPORTED_MODULE_8__["NgxStarsModule"],
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_9__["OwlModule"],
                ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_10__["ShareButtonsModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientJsonpModule"]
            ],
            declarations: [_product_details_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsPage"]]
        })
    ], ProductDetailsPageModule);
    return ProductDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/product-details/product-details.page.html":
/*!***********************************************************!*\
  !*** ./src/app/product-details/product-details.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar color=\"darkred\" text-uppercase>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"products\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n        Product Details\n    </ion-title>\n  <ion-buttons slot=\"end\" >\n          <ion-icon name=\"search\"></ion-icon>\n    </ion-buttons>\n\t     <ion-buttons slot=\"end\">\n          <ion-icon name=\"pin\"></ion-icon>\n    </ion-buttons>\n<ion-buttons slot=\"end\" >\n\t<ion-icon user-drop name=\"contact\" (click)=\"onButtonClickdrop()\"></ion-icon>\n\n\t </ion-buttons>\n  </ion-toolbar>\n      <div drop-down-menu *ngIf=\"buttonClickeddrop\">\n\t              <a routerLink=\"/your-account\"><ion-icon name=\"person\"></ion-icon> My Account</a>\n\t              <a routerLink=\"/wishlist\"><ion-icon name=\"heart\"></ion-icon>  Wishlist</a>\n\t              <a routerLink=\"/cart\"><ion-icon name=\"cart\"></ion-icon>  Cart</a>\n\t              <a routerLink=\"/notification\"><ion-icon name=\"notifications\"></ion-icon> Notification</a>\n\t   </div>\n</ion-header>  -->\n<ion-content >\n<div class=\"ion-padding\">\n<div header_height></div>\n<!-- <div header-inner class=\"ion-hide-lg-up\">\n<div delivery-location (click)=\"presentModal()\">\n<ion-icon name=\"pin\"></ion-icon> Deliver To Chandigarh 160022 <ion-icon name=\"arrow-down\"></ion-icon>\n</div>\n</div> -->\n<!-- Breadcrumb Start -->\n\t\t<div breadcrumb  class=\"ion-hide-md-down\">\n\t\t\t\t<div breadcrumb-inner>\n\t\t\t\t\t<ul list-inline list-unstyled>\n\t\t\t\t\t    <li><a routerLink=\"/home\">Home</a></li>\n\t\t\t\t\t\t<li class=\"active\">   Product Details</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div><!-- /.breadcrumb-inner -->\n\t\t</div>\n<!-- Breadcrumb Ends -->\n<!--  Product Detail Start  -->\n<div single-product>\n<!---  Product Slider Start -->\n   <div detail-block>\n         <div product-view-area>\n\t\t\t\t <ion-row>\n\t\t\t\t\t<ion-col big-image size-md=\"12\" size-sm=\"12\" size-lg=\"6\"  size=\"12\">\n\t\t\t\t\t\t\t<!--  Thumbnails Start -->\n\t\t\t\t\t\t\t<div thumbnail-main  class=\"ion-hide-md-down\" *ngIf=\"product?.product_images != ''\">\n\t\t\t\t\t\t\t\t<ul thumbnail-list>\n\t\t\t\t\t\t\t\t\t<li *ngFor=\"let img of product?.product_images \">\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"  gallery-thumb>\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{IMAGES_URL}}/product_images/{{img?.image}}\"/>\n\t\t\t\t\t\t\t\t\t\t </a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t       </ul>\n\t\t\t\t\t      </div>\n\t\t\t\t\t<!--  Thumbnails Ends -->\n\t\t\t\t\t<!--Large Image Start  -->\n\t\t\t\t\t  <div large-image class=\"ion-hide-md-down\">\n\t\t\t\t\t\t    <a large-inner>\n\t\t\t\t\t\t      <img *ngIf=\"errors.indexOf(product?.product_image) >= 0\" src=\"assets/images/products/no_image.svg\">\n\t\t\t\t\t\t\t  <img *ngIf=\"errors.indexOf(product?.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{product?.product_image}}\" alt=\"{{product?.product_name}}\">\n\t\t\t\t\t\t   </a>\n\t\t\t\t\t\t   <span sale-text *ngIf=\"errors.indexOf(product?.product_sale_price) == -1 && product?.product_sale_price != product?.product_purchase_price\">\n\t\t\t\t\t\t       Sale\n\t\t\t\t\t\t   </span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!---Large Image Ends  -->\n\n\t\t\t    </ion-col>\n\t\t\t\t<ion-col product-info-block size-md=\"12\" size-sm=\"12\" size-lg=\"6\"  size=\"12\">\n\t\t\t\t   <!--- Product Info Start -->\n\t\t\t\t  <div product-info>\n\t\t\t\t  <ion-fab  vertical=\"top\" horizontal=\"end\" class=\"ion-hide-lg-up\">\n\t\t\t\t    <ion-fab-button color=\"grey2\" size=\"small\">\n\t\t\t\t      <ion-icon name=\"share\"></ion-icon>\n\t\t\t\t    </ion-fab-button>\n\t\t\t\t    <ion-fab-list side=\"bottom\">\n\t\t\t\t      <ion-fab-button color=\"darkred\">\n\t\t\t\t      \t<share-button button=\"facebook\" url=\"{{shareURL}}\"></share-button>\n\t\t\t\t      </ion-fab-button>\n\t\t\t\t      <ion-fab-button color=\"darkred\">\n\t\t\t\t      \t<share-button button=\"twitter\" url=\"{{shareURL}}\"></share-button>\n\t\t\t\t      </ion-fab-button>\n\t\t\t\t      <ion-fab-button color=\"darkred\">\n\t\t\t\t      \t<share-button button=\"google\" url=\"{{shareURL}}\"></share-button>\n\t\t\t\t      </ion-fab-button>\n\t\t\t\t      <ion-fab-button color=\"darkred\">\n\t\t\t\t      \t<share-button button=\"linkedin\" url=\"{{shareURL}}\"></share-button>\n\t\t\t\t      </ion-fab-button>\n\t\t\t\t      <ion-fab-button color=\"darkred\">\n\t\t\t\t      \t<share-button button=\"email\" url=\"{{shareURL}}\"></share-button>\n\t\t\t\t      </ion-fab-button>\n\t\t\t\t    </ion-fab-list>\n\t\t\t\t  </ion-fab>\n\t\t\t\t  \t<h3 name>{{product?.brand_name}}</h3>\n\t\t\t\t\t<h1 name>\n\t\t\t\t\t\t {{product?.product_name}}\n\t\t\t\t\t  \t<div favorite-button float-right>\n\t\t\t\t\t\t\t<!-- <ion-button color=\"darkred\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-heart\"></i>\n\t\t\t\t\t\t\t</ion-button> -->\n\t\t\t\t\t\t\t<ion-item p-lr-0 border-none *ngIf=\"limit_reached == false\">\n\t\t\t\t\t\t        <ion-checkbox [checked]=\"comapred_products.indexOf(product?.product_id.toString()) >= 0\" (ionChange)=\"compareChecked($event)\" ></ion-checkbox>&nbsp;\n\t\t\t\t\t\t        <ion-label> Compare</ion-label>\n\t\t\t\t\t\t    </ion-item>\n\t\t\t\t\t\t    <ion-item p-lr-0 border-none *ngIf=\"limit_reached == true\">\n\t\t\t\t\t\t        <ion-checkbox [disabled]=\"true\"></ion-checkbox>&nbsp;\n\t\t\t\t\t\t        <ion-label> Compare</ion-label>\n\t\t\t\t\t\t    </ion-item>\n\t\t\t\t\t   \t</div>\n\t\t\t\t\t</h1>\n\n\t\t\t\t\t <ion-row>\n\t\t\t\t\t\t<ion-col  size=\"12\"  no-padding>\n\t\t\t\t\t\t  <div rateit-small float-left *ngIf=\"is_loaded == true\">\n\t\t\t\t\t\t\t  <ngx-stars [readonly]=\"true\" [maxStars]=\"5\" [initialStars]=\"product?.total_reviews[0]?.Average_Review\" [color]=\"'#a01616'\"></ngx-stars>\n\t\t\t\t\t\t   </div>\n                               <div reviews float-left>\n\t\t\t\t\t\t\t\t\t<a  lnk>({{product?.product_reviews?.length}} {{product?.product_reviews?.length == 1 ? 'Review' : 'Reviews'}})</a>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t </ion-col>\n\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t <!--Mob Product Slider Start-->\n\t\t\t\t\t  <ion-slides pager=\"true\" color=\"darkred\" class=\"ion-hide-lg-up\">\n\t\t\t\t\t\t  <ion-slide>\n\t\t\t\t\t\t\t <img *ngIf=\"errors.indexOf(product?.product_image) >= 0\" src=\"assets/images/products/no_image.svg\">\n\t\t\t\t\t\t\t <img *ngIf=\"errors.indexOf(product?.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{product?.product_image}}\" alt=\"{{product?.product_name}}\">\n\t\t\t\t\t\t  </ion-slide>\n\t\t\t\t\t\t  <ion-slide *ngFor=\"let img of product?.product_images\" >\n\t\t\t\t\t\t\t <img src=\"{{IMAGES_URL}}/product_images/{{img?.image}}\"/>\n\t\t\t\t\t\t  </ion-slide>\n\t\t\t\t\t</ion-slides>\n\t\t\t\t\t<!--Mob Product Slider Ends-->\n\t\t\t\t\t\t\t<div  product-price>\n\t\t\t\t\t\t\t\t<div price-box>\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"errors.indexOf(product?.product_sale_price) == -1 && product?.product_sale_price != product?.product_purchase_price && IsApplyVariation == false\" price> ${{product?.product_sale_price}}  </span>\n\n                \t\t<span *ngIf=\"(errors.indexOf(product?.product_sale_price) >= 0 || product?.product_sale_price == product?.product_purchase_price) && IsApplyVariation == false\" price> ${{product?.product_purchase_price}}  </span>\n\n                    <span *ngIf=\"errors.indexOf(product?.product_sale_price) == -1 && product?.product_sale_price != product?.product_purchase_price && IsApplyVariation == false\" price-before-discount>${{product?.product_purchase_price}}</span>\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"IsApplyVariation == true\" price>${{variationPrice}}</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t  <!-- Rating Start -->\n\t\t\t\t\t\t   <ion-row class=\"ion-hide-md-down\">\n\t\t\t\t\t\t\t\t<!-- <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" no-padding> -->\n\t\t\t\t\t\t\t\t <!-- <ion-row>  -->\n\t\t\t\t\t\t\t\t\t<!-- <ion-col size-md=\"4\" size=\"12\"  no-padding>\n\t\t\t\t\t\t\t\t\t  <div rateit-small>\n\t\t\t\t\t\t\t\t\t\t  <ion-icon  name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t  <ion-icon  name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t  <ion-icon  name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t  <ion-icon  name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t  <ion-icon  name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t\t\t\t </ion-col> -->\n\t\t\t\t\t\t\t\t\t <!-- <ion-col size-md=\"4\" size=\"12\"  no-padding>\n\t\t\t\t\t\t\t\t\t\t  <div reviews>\n\t\t\t\t\t\t\t\t\t\t\t\t<a  lnk>({{product?.product_reviews?.length}} {{product?.product_reviews?.length == 1 ? 'Review' : 'Reviews'}})</a>\n\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t </ion-col>  -->\n\t\t\t\t\t\t\t\t<!-- </ion-row> -->\n\t\t\t\t\t\t        <!-- </ion-col> -->\n\t\t\t\t\t\t\t\t<ion-col  size=\"12\" size-sm=\"12\" size-md=\"6\" no-padding >\n\t\t\t\t\t\t\t\t   <ion-row>\n\t\t\t\t\t\t\t\t\t<ion-col size=\"4\"  no-padding>\n\t\t\t\t\t\t\t\t\t  <div stock-box>\n\t\t\t\t\t\t\t\t\t\t    <span label>Availability :</span>\n\t\t\t\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t\t\t\t </ion-col>\n\t\t\t\t\t\t\t\t\t <ion-col size=\"8\"  no-padding>\n\t\t\t\t\t\t\t\t\t\t  <div stock-box>\n\t\t\t\t\t\t\t\t\t\t\t\t<span value *ngIf=\"product?.product_quantity != 0 && errors.indexOf(product?.product_quantity) == -1\">In Stock</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span value *ngIf=\"product?.product_quantity == 0 || errors.indexOf(product?.product_quantity) >= 0\">Out of Stock</span>\n\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t </ion-col>\n\t\t\t\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t   </ion-row>\n\t\t\t\t\t\t   <ion-row *ngIf=\"product_variations != ''\">\n\t\t\t\t\t\t   <ng-container *ngFor=\"let variation of product_variations; let  i = index;\">\n\t\t\t\t\t\t\t\t<ion-col size=\"4\" no-padding *ngIf=\"variation.name != 'price'\">\n\t\t\t\t\t\t\t\t    <ion-label>{{variation.name}}</ion-label>\n\t\t\t\t\t\t\t\t    <ion-select placeholder=\"Select One\" (ionChange)=\"selectedValue(variation,variation.id) \" [(ngModel)]=\"variation.id\">\n\t\t\t\t\t\t\t\t      <ion-select-option *ngFor=\"let value of variation.values\" value=\"{{value.id}}\">{{value.value}}</ion-select-option>\n\t\t\t\t\t\t\t\t    </ion-select>\n\t\t\t\t\t\t\t\t </ion-col>\n\t\t\t\t\t\t\t </ng-container>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t<!-- Rating Ends -->\n\t\t\t\t\t\t\t<!--- Description Start -->\n\t\t\t\t\t\t\t <div description-container>\n\t\t\t\t\t\t\t <h2 class=\"ion-hide-lg-up\">About This Item</h2>\n\t\t\t\t\t\t\t\t<p><span [innerHtml]=\"atob(product?.product_description)\"></span></p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<span sale-text *ngIf=\"errors.indexOf(product?.product_tags) == -1\">\n\t\t\t\t\t\t\t{{product?.product_tags}}\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<!--- Description Ends -->\n\t\t\t\t\t\t\t<!--- Vendor Info Start-->\n                                <div vendor-info>\n                                       \t   <ion-row>\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-col *ngIf=\"product?.product_user_type != 'Admin'\" size-sm=\"12\" size=\"12\" size-md=\"4\"  no-padding>\n\t\t\t\t\t\t\t\t\t\t\t\t      <p vendor-name>Sold by <a>{{product?.vendor_company}}</a></p>\n\t\t\t\t\t\t\t\t\t\t\t\t </ion-col>\n\t\t\t\t\t\t\t\t\t\t\t\t <!--ion-col size-sm=\"12\" size=\"12\"  size-md=\"8\"  no-padding text-right>\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <div video-message>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p contact-txt>Contact:</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div message-inner contact-btns>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-comments\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-video-camera\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t </ion-col-->\n\t\t\t\t\t\t\t\t\t\t\t</ion-row>\n\n                                </div>\n\t\t\t\t\t\t\t<!--- Vendor Info Ends-->\n                           <!-- Quantity Start -->\n\t\t\t\t\t\t\t\t\t <div  quantity-container>\n\t\t\t\t\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-col size-sm=\"2\" size-md=\"1\" size=\"2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span label d-inline-block>Qty :</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t\t\t\t <ion-col size-sm=\"4\" size-md=\"2\" size=\"6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div cart-quantity>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div quant-input>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div arrows>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div (click)=\"plusQuantity()\" arrow plus gradient><span ir>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <i class=\"ion-hide-md-down icon fa fa-sort-asc\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <ion-icon class=\"ion-hide-lg-up \" add-icon name=\"add\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div (click)=\"minusQuantity()\" arrow minus gradient>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <span ir>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <i class=\"ion-hide-md-down icon fa fa-sort-desc\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <ion-icon class=\"ion-hide-lg-up \" minus-icon name=\"remove\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input [(ngModel)]=\"final_quantity\" [disabled]=\"true\" type=\"text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-col size-sm=\"6\" size-md=\"4\" size=\"4\">\n\t\t\t\t\t\t\t\t\t\t\t\t   <ion-button [disabled]=\"product?.product_quantity == 0 || errors.indexOf(product?.product_quantity) >= 0\" (click)=\"addToCart(product?.product_id,product?.product_sale_price,product?.product_purchase_price)\" color=\"darkred\" style=\"margin-bottom: 7px;\"><ion-icon name=\"cart\"></ion-icon> <span class=\"\">ADD TO CART</span></ion-button>\n\n\t\t\t\t\t\t\t\t\t\t\t\t  <!--  <ion-button routerLink=\"/cart\" *ngIf=\"my_cart_products.indexOf(product?.product_id) >= 0\" color=\"darkred\" style=\"margin-bottom: 7px;\"><ion-icon name=\"cart\"></ion-icon> <span class=\"\">ADDED, GO TO CART</span></ion-button> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t   <ion-button *ngIf=\"my_wish_products.indexOf(product_id) == -1\" (click)=\"addToWish(product_id)\" color=\"darkred\" title=\"Wishlist\">\n\t\t\t\t\t\t\t\t\t\t\t\t \t\t<ion-icon name=\"heart\"></ion-icon> <span class=\"\">ADD TO Wishlist</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-button *ngIf=\"my_wish_products.indexOf(product_id) >= 0\" color=\"darkred\" title=\"Added\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon red_heart name=\"heart\">In Wishlist</ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t\t\t\t</div>\n                           <!-- Quantity Ends -->\n\t\t\t\t\t\t\t<!--- Bulk Section Start  -->\n\t\t\t\t\t\t\t\t<div bulk-section quantity-container *ngIf=\"product?.wholesale_price != 0 && product?.wholesale_products != 0 && errors.indexOf(product?.wholesale_products) == -1\">\n\t\t\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t\t\t<ion-col  size-md=\"8\" size-lg=\"9\" size=\"12\">\n\t\t\t\t\t\t\t\t\t\t\t<div bulk-price>\n\t\t\t\t\t\t\t\t\t\t\t\t<h5><!--Bulk Price--> Wants to buy product in wholesale? <!-- Add here! --></h5>\n\t\t\t\t\t\t\t\t\t\t\t\t<p>If you buy {{product?.wholesale_products}} items, cost per product will be <span>${{product?.wholesale_price}}</span></p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t\t<ion-col size-md=\"4\" size-lg=\"3\" size=\"12\">\n\t\t\t\t\t\t\t\t\t\t   <div video-message>\n\t\t\t\t\t\t\t\t\t\t\t\t<!--p contact-txt>Contact:</p-->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div message-inner contact-btns>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"messages()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-comments\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-video-camera\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t\t<!-- <ion-col size-sm=\"2\" size-md=\"1\" size=\"2\">\n\t\t\t\t\t\t\t\t\t\t\t<span label>Qty :</span>\n\t\t\t\t\t\t\t\t\t\t</ion-col>\n\n\t\t\t\t\t\t\t\t\t\t <ion-col size-sm=\"4\" size-md=\"2\" size=\"6\">\n\t\t\t\t\t\t\t\t\t\t\t<div cart-quantity>\n\t\t\t\t\t\t\t\t\t\t\t<div quant-input>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div arrows>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div (click)=\"plusWholeSaleQuantity()\" arrow plus gradient><span ir>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <i class=\"ion-hide-md-down icon fa fa-sort-asc\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <ion-icon class=\"ion-hide-lg-up \" add-icon name=\"add\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div (click)=\"minusWholeSaleQuantity()\" arrow minus gradient>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <span ir>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <i class=\"ion-hide-md-down icon fa fa-sort-desc\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <ion-icon class=\"ion-hide-lg-up \" minus-icon name=\"remove\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input [disabled]=\"true\" [(ngModel)]=\"choosed_wholesale_quantity\" type=\"text\" value=\"1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</ion-col>\n\n\t\t\t\t\t\t\t\t\t <ion-col size-sm=\"6\" size-md=\"2\" size=\"4\">\n\t\t\t\t\t\t\t\t\t\t<ion-button (click)=\"checkOutWholeSale(product?.wholesale_price,product?.wholesale_products)\" color=\"darkred\">CHECKOUT</ion-button>\n\t\t\t\t\t\t\t\t\t\t</ion-col> -->\n\t\t\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--- Bulk Section Ends  -->\n                            <!--  Share Section Start  -->\n                                   <div share-box class=\"ion-hide-down\">\n\t\t\t\t\t\t\t\t\t   <div title>Share in social media</div>\n\t\t\t\t\t\t\t\t\t\t\t<div socials-box>\n\t\t\t\t\t\t\t\t\t\t\t\t<share-button button=\"facebook\" url=\"{{shareURL}}\"></share-button>\n\t\t\t\t\t\t\t\t\t\t\t\t<share-button button=\"twitter\" url=\"{{shareURL}}\"></share-button>\n\t\t\t\t\t\t\t\t\t\t\t\t<share-button button=\"google\" url=\"{{shareURL}}\"></share-button>\n\t\t\t\t\t\t\t\t\t\t\t\t<share-button button=\"linkedin\" url=\"{{shareURL}}\"></share-button>\n\t\t\t\t\t\t\t\t\t\t\t\t<share-button button=\"email\" url=\"{{shareURL}}\"></share-button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n                            <!--  Share Section Ends  -->\n\t\t\t\t  \t\t\t\t\t</div>\n\t\t\t\t    <!--- Product Info Ends -->\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t </div>\n   </div>\n <!--  Product Slider Ends -->\n <!-- Product Tabs Start -->\n<div product-tabs>\n <ion-segment  [(ngModel)]=\"tabs\"  color=\"darkred\">\n\t\t\t<ion-segment-button value=\"description\">\n\t\t\t\t<ion-label>DESCRIPTION</ion-label>\n\t\t\t</ion-segment-button>\n\t\t\t<ion-segment-button value=\"review\">\n\t\t\t   <ion-label>REVIEW</ion-label>\n\t\t\t</ion-segment-button>\n</ion-segment>\n\t\t  <div  tab-content [ngSwitch]=\"tabs\">\n\t\t\t\t  <ion-list *ngSwitchCase=\"'description'\">\n\t\t\t\t      <div description>\n\t\t\t\t\t\t\t<p class=\"text\"><span [innerHtml]=\"atob(product?.product_description)\"></span></p>\n\t\t\t\t\t  </div>\n\t\t\t\t  </ion-list>\n\t\t\t\t    <ion-list *ngSwitchCase=\"'review'\">\n\t\t\t\t        <div product-reviews>\n\t\t\t\t\t\t    <h4 title>Customer Reviews</h4>\n\t\t\t\t\t\t\t  <!-- <div sidebar-widget product-tag review-tag>\n\t\t\t\t\t\t\t\t\t\t  <h3 section-title>Read reviews that mention</h3>\n\t\t\t\t\t\t\t\t\t\t  <div sidebar-widget-body>\n\t\t\t\t\t\t\t\t\t\t\t<div tag-list>\n\t\t\t\t\t\t\t\t\t\t\t\t<a item href=\"#\">Sound Quality</a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a item href=\"#\">Noise Cancellation</a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a item href=\"#\">Bluetooth</a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a item href=\"#\">Active Noise</a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a item href=\"#\">Headphones</a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a item href=\"#\">Highly Recommend</a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a item href=\"#\">Quality is good</a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a item href=\"#\">Price Point</a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a item href=\"#\">Ear Cups</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t     </div> -->\n\t\t\t\t\t\t\t\t <!--- Reviews Start -->\n\t\t\t\t\t\t\t\t<!-- \t<div class=\"dropdown\"   dropdown-med>\n\t\t\t\t\t\t\t\t\t\t<button data-toggle=\"dropdown\" type=\"button\" class=\"btn dropdown-toggle\"> Top Reviews <span class=\"caret\"></span> </button>\n\t\t\t\t\t\t\t\t\t\t<ul role=\"menu\" class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t<li role=\"presentation\"><a href=\"javascript:void(0)\">Top Reviews</a></li>\n\t\t\t\t\t\t\t\t\t\t<li role=\"presentation\"><a href=\"javascript:void(0)\">Most Recent</a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\t -->\n\t\t\t\t\t\t<!-- Review Start  -->\n\t\t\t\t\t\t\t\t<div reviews>\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"product?.product_reviews == ''\">\n\t\t\t\t\t\t\t\t\t<ion-item>Be the first to review this product.</ion-item>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let review of product?.product_reviews; let r_ind = index \">\n\t\t\t\t\t\t\t\t      <ion-item lines=\"none\" color=\"greyf8\">\n\t\t\t\t\t\t\t\t\t\t<ion-avatar>\n\t\t\t\t\t\t\t\t\t\t   <img *ngIf=\"errors.indexOf(review?.profile_picture) >= 0\" src=\"assets/images/default.png\">\n\t\t\t\t\t\t\t  \t\t\t   <img *ngIf=\"errors.indexOf(review?.profile_picture) == -1\" src=\"{{IMAGES_URL}}/userprofile/{{review?.profile_picture}}\" alt=\"{{review?.name}}\">\n\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t <div review-title>\n\t\t\t\t\t\t\t\t\t\t\t\t <span summary>{{review?.name}} {{review?.last_name}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span date><ion-icon name=\"calendar\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span> {{review?.date | timeAgo}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t </span>\n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t <div rateit-small>\n\t\t\t\t\t\t\t\t\t\t\t    <ngx-stars [readonly]=\"true\" [maxStars]=\"5\" [initialStars]=\"review?.stars\" [color]=\"'#a01616'\"></ngx-stars>\n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t <div text>\n\t\t\t\t\t\t\t\t\t\t\t   <p>\"{{review?.review}}\"</p>\n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t  <span review-action>\n\t\t\t\t\t\t\t\t\t\t\t\t  <a (click)=\"show_reply_text = review.review_id;reply_comment = ''\" href=\"javascript:void(0)\"> Reply</a>\n\t\t\t\t\t\t\t\t\t\t\t\t  <!-- / <a href=\"\"> Report Abuse</a> -->\n\t\t\t\t\t\t\t\t\t\t\t  </span>\n\t\t\t\t\t\t\t\t\t\t\t  <div *ngIf=\"show_reply_text == review.review_id\" reply_comm_div>\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-textarea [(ngModel)]=\"reply_comment\"></ion-textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t<button (click)=\"replyReview(review?.review_id,reply_comment,r_ind)\"><ion-icon name=\"send\"></ion-icon></button>\n\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t  </ion-item>\n\t\t\t\t\t\t\t\t\t  <ion-item lines=\"none\" color=\"greyf8\" review-comment *ngFor=\"let comment of review?.review_comments\">\n\t\t\t\t\t\t\t\t\t\t<ion-avatar>\n\t\t\t\t\t\t\t\t\t\t   <img *ngIf=\"errors.indexOf(comment?.profile_picture) >= 0\" src=\"assets/images/default.png\">\n\t\t\t\t\t\t\t  \t\t\t   <img *ngIf=\"errors.indexOf(comment?.profile_picture) == -1\" src=\"{{IMAGES_URL}}/userprofile/{{comment?.profile_picture}}\" alt=\"{{comment?.name}}\">\n\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t <div review-title>\n\t\t\t\t\t\t\t\t\t\t\t\t <span summary>{{comment?.name}} {{comment?.last_name}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span date><ion-icon name=\"calendar\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span> {{comment?.date | timeAgo}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t </span>\n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t <div text>\n\t\t\t\t\t\t\t\t\t\t\t   <p>\"{{comment?.review}}\"</p>\n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t  <!-- <span review-action>\n\t\t\t\t\t\t\t\t\t\t\t\t  <a href=\"#review-form\"> Reply</a> / <a href=\"\"> Report Abuse</a>\n\t\t\t\t\t\t\t\t\t\t\t  </span> -->\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t  </ion-item>\n\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t  \t  <!-- <ion-item lines=\"none\" color=\"greyf8\" review-comment class=\"ion-hide-md-down\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-avatar>\n\t\t\t\t\t\t\t\t\t\t\t\t   <img src=\"assets/images/testimonials/member2.png\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div review-title>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t <span summary>Hanry James</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span date><ion-icon name=\"calendar\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span> 3 days ago</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div rateit-small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <ion-icon name=\"star\" filled></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <ion-icon name=\"star\" filled></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <ion-icon name=\"star\" filled></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <ion-icon name=\"star\" filled></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <ion-icon name=\"star\" filled></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div text>\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <p>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam suscipit.\"</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <span review-action>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <a href=\"#review-form\"> Reply</a> / <a href=\"\"> Report Abuse</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  </span>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t  </ion-item>\n\t\t\t\t\t\t\t\t\t   <ion-item lines=\"none\" color=\"greyf8\" class=\"ion-hide-md-down\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-avatar>\n\t\t\t\t\t\t\t\t\t\t\t\t   <img src=\"assets/images/testimonials/member1.png\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div review-title>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t <span summary>John Smith</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span date><ion-icon name=\"calendar\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span> 3 days ago</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div rateit-small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <ion-icon name=\"star\" filled></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <ion-icon name=\"star\" filled></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <ion-icon name=\"star\" filled></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <ion-icon name=\"star\" filled></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <ion-icon name=\"star\" filled></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div text>\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <p>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam suscipit.\"</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <span review-action>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <a href=\"#review-form\"> Reply</a> / <a href=\"\"> Report Abuse</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  </span>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t  </ion-item> -->\n\t\t\t\t\t\t\t\t\t  <!-- <ion-item lines=\"none\" color=\"greyf8\" review-comment class=\"ion-hide-md-down\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-avatar>\n\t\t\t\t\t\t\t\t\t\t\t\t   <img src=\"assets/images/testimonials/member2.png\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div review-title>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t <span summary>Hanry James</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span date><ion-icon name=\"calendar\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span> 3 days ago</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div rateit-small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <ion-icon name=\"star\" filled></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <ion-icon name=\"star\" filled></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <ion-icon name=\"star\" filled></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <ion-icon name=\"star\" filled></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <ion-icon name=\"star\" filled></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div text>\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <p>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam suscipit.\"</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <span review-action>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <a href=\"#review-form\"> Reply</a> / <a href=\"\"> Report Abuse</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  </span>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t  </ion-item> -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- Review Ends  -->\n\t\t\t\t\t\t\t\t<!--- Reviews Ends -->\n\t\t\t\t\t\t</div>\n\t\t\t\t  </ion-list>\n\t\t  </div>\n</div>\n <!--- Product Tabs Ends -->\n <!-- Write Review Section Start -->\n   <div product-tabs *ngIf=\"product?.product_purchased != null\">\n\t\t   <div product-add-review>\n\t\t\t\t<h4 title>Write your own review</h4>\n\t\t   </div>\n\t\t   <div review-table>\n\t\t\t\t<!-- <div class=\"table-responsive reviews-content-right ion-hide-md-down\">\n\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th class=\"cell-label\">&nbsp;</th>\n\t\t\t\t\t\t\t\t<th>1 star</th>\n\t\t\t\t\t\t\t\t<th>2 stars</th>\n\t\t\t\t\t\t\t\t<th>3 stars</th>\n\t\t\t\t\t\t\t\t<th>4 stars</th>\n\t\t\t\t\t\t\t\t<th>5 stars</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td class=\"cell-label\">Quality</td>\n\t\t\t\t\t\t\t\t<td><input type=\"radio\" name=\"quality\" class=\"radio\" value=\"1\"></td>\n\t\t\t\t\t\t\t\t<td><input type=\"radio\" name=\"quality\" class=\"radio\" value=\"2\"></td>\n\t\t\t\t\t\t\t\t<td><input type=\"radio\" name=\"quality\" class=\"radio\" value=\"3\"></td>\n\t\t\t\t\t\t\t\t<td><input type=\"radio\" name=\"quality\" class=\"radio\" value=\"4\"></td>\n\t\t\t\t\t\t\t\t<td><input type=\"radio\" name=\"quality\" class=\"radio\" value=\"5\"></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div> -->\n\t\t\t\t<form form-cnt>\n\t\t\t\t<ion-row>\n\t\t\t\t <!-- <ion-col size-md=\"12\" size-sm=\"12\" size=\"12\" class=\"ion-hide-lg-up\"> -->\n\t\t\t\t <ion-col size-md=\"12\" size-sm=\"12\" size=\"12\">\n\t\t\t\t   <div form-group>\n\t\t\t\t\t  <ion-label position=\"stacked\">Rate Your Product: </ion-label>\n\t\t\t\t\t\t  <div rateit-small>\n\t\t\t\t\t\t\t<ngx-stars (ratingOutput)=\"onRatingSet($event)\" [maxStars]=\"5\" [color]=\"'#a01616'\"></ngx-stars>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t\t   <!-- <ion-col size-md=\"12\" size-sm=\"12\" size=\"12\">\n\t\t\t\t\t   <div  form-group>\n\t\t\t\t\t\t  <ion-label position=\"stacked\">Add Your Tags: </ion-label>\n\t\t\t\t\t\t  <ion-input type=\"text\" placeholder=\"\"></ion-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\t -->\n\t\t\t\t   <!-- <ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n\t\t\t\t\t   <div  form-group>\n\t\t\t\t\t\t  <ion-label position=\"stacked\">Your Name * </ion-label>\n\t\t\t\t\t\t  <ion-input type=\"text\" placeholder=\"\"></ion-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t <div  form-group>\n\t\t\t\t\t\t  <ion-label position=\"stacked\">Your Email *</ion-label>\n\t\t\t\t\t\t  <ion-input type=\"text\" placeholder=\"\"></ion-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col> -->\n\t                  <ion-col size-md=\"12\" size-sm=\"12\" size=\"12\">\n\t\t\t\t\t     <div form-group>\n\t\t\t\t\t\t  <ion-label position=\"stacked\">Review *</ion-label>\n\t\t\t\t\t\t  <ion-textarea name=\"review_text\" [(ngModel)]=\"review_text\" type=\"text\" placeholder=\"\"></ion-textarea>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ion-button color=\"darkred\" (click)=\"addReview(review_text)\" float-right>\n\t\t\t\t\t\t  Submit Review\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t</form>\n\t\t\t</div>\n  </div>\n <!-- Write Review Section Ends -->\n <!---  Product Comparison Section Start -->\n<div product-comparison class=\"ion-hide-md-down\" *ngIf=\"comapred_products_list != ''\">\n   <h1 heading-title>Compare with similar items</h1>\n   <div class=\"table-responsive\">\n       <table class=\"table compare-table\">\n\t      <tbody>\n\t        <tr>\n\t\t\t\t<th>Products</th>\n\t\t\t\t<td *ngFor=\"let pro of comapred_products_list\">\n\t\t\t\t\t<div product>\n\t\t\t\t\t\t<div product-image>\n\t\t\t\t\t\t\t<div image>\n\t\t\t\t\t\t\t\t<a routerLink=\"/product-details/{{pro.product_id}}\">\n\t\t\t\t\t\t\t\t    <img *ngIf=\"errors.indexOf(pro.product_image) >= 0\" src=\"assets/images/products/no_image.svg\">\n\t\t\t\t\t\t\t \t\t<img *ngIf=\"errors.indexOf(pro.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{pro.product_image}}\" alt=\"{{pro.product_name}}\">\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div product-info text-left>\n\t\t\t\t\t\t\t\t<h3 name>\n\t\t\t\t\t\t\t\t   <a routerLink=\"/product-details/{{pro.product_id}}\">{{pro.product_name}}</a>\n\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t<div action>\n\t\t\t\t\t\t\t\t   <ion-button text-capitalize color=\"darkred\" [disabled]=\"pro.product_quantity == 0 || errors.indexOf(pro.product_quantity) >= 0\" *ngIf=\"my_cart_products.indexOf(pro.product_id) == -1\" (click)=\"addToCart(pro.product_id,pro.product_sale_price,pro.product_purchase_price,1)\">{{(pro.product_quantity == 0 || errors.indexOf(pro.product_quantity) >= 0) ? 'Out of Stock' : 'Add To Cart'}} </ion-button>\n\n\t\t\t\t\t\t\t\t   <ion-button text-capitalize color=\"darkred\" routerLink=\"/cart\" *ngIf=\"my_cart_products.indexOf(pro.product_id) >= 0\">In Cart </ion-button>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t        <tr>\n\t\t\t\t<th>Description</th>\n\t\t\t\t<td *ngFor=\"let pro of comapred_products_list\">\n\t\t\t\t\t<p [innerHTML]=\"atob(pro.product_description)\"></p>\n\t\t\t\t</td>\n        \t</tr>\n\t\t    <tr>\n\t\t\t\t<th>Brand</th>\n\t\t\t\t<td *ngFor=\"let pro of comapred_products_list\">\n\t\t\t\t     <p>{{pro.brand_name}}</p>\n\t\t\t    </td>\n        \t</tr>\n        \t<tr>\n\t\t\t\t<th>Customer Rating</th>\n\t\t\t\t<td *ngFor=\"let pro of comapred_products_list\">\n\t\t\t\t     <a remove-icon>\n\t\t\t\t\t   <ngx-stars [readonly]=\"true\" [maxStars]=\"5\" [initialStars]=\"pro?.total_reviews[0]?.Average_Review\" [color]=\"'#a01616'\"></ngx-stars>\n\t\t\t\t\t </a>\n\t\t\t    </td>\n        \t</tr>\n\t\t    <tr>\n\t\t\t\t<th>Price</th>\n\t\t\t\t<td *ngFor=\"let pro of comapred_products_list\">\n\t\t\t\t\t<div product-price>\n\t\t\t\t\t\t<span *ngIf=\"errors.indexOf(pro.product_sale_price) == -1 && pro.product_sale_price != pro.product_purchase_price\" price> ${{pro.product_sale_price}}  </span>\n\n\t\t                <span *ngIf=\"errors.indexOf(pro.product_sale_price) >= 0 || pro.product_sale_price == pro.product_purchase_price\" price> ${{pro.product_purchase_price}}  </span>\n\n\t\t                <span *ngIf=\"errors.indexOf(pro.product_sale_price) == -1 && pro.product_sale_price != pro.product_purchase_price\" price-before-discount>${{pro.product_purchase_price}}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t    <tr>\n\t\t\t\t<th>Sold By</th>\n\t\t\t\t<td *ngFor=\"let pro of comapred_products_list\">\n\t\t\t\t\t<p in-stock>{{pro.vendor_company}}</p>\n\t\t\t\t</td>\n            </tr>\n<!-- \t\t    <tr>\n\t\t\t\t<th>Headphone Fit</th>\n\t\t\t\t<td>\n\t\t\t\t\t<p>Over-Ear</p>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t    <tr>\n\t\t\t\t<th>Item Dimensions</th>\n\t\t\t\t<td>\n\t\t\t\t\t<p>6.54 x 7.13 x 2.36 in</p>\n\t\t\t\t</td>\n    \t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<th>Item Weight</th>\n\t\t\t\t<td>\n\t\t\t\t\t<p>0.85 lb</p>\n\t\t\t\t</td>\n    \t\t</tr> -->\n\t\t\t<tr>\n\t\t\t\t<th>Remove</th>\n\t\t\t\t<td text-center *ngFor=\"let pro of comapred_products_list; let c_index = index \">\n\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"removeCompared(c_index)\" remove-icon><ion-icon name=\"close\"></ion-icon></a>\n\t\t\t\t</td>\n           </tr>\n\t\t</tbody>\n\t   </table>\n   </div>\n</div>\n<!---  Product Comparison Section Ends -->\n<!-- Product Comparison Mobile Start -->\n<div mob-product-comparison class=\"ion-hide-lg-up\" *ngIf=\"comapred_products_list != ''\">\n\t<ion-row products>\n\t    <ion-col size=\"4\" no-padding *ngFor=\"let pro of comapred_products_list; let cm_index = index \">\n\t\t    <ion-card no-margin product-main>\n\t\t\t<img *ngIf=\"errors.indexOf(pro.product_image) >= 0\" src=\"assets/images/products/no_image.svg\">\n\t\t\t<img *ngIf=\"errors.indexOf(pro.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{pro.product_image}}\" alt=\"{{pro.product_name}}\">\n\t\t\t<ion-icon (click)=\"removeCompared(cm_index)\" name=\"close-circle\" close-icon></ion-icon>\n\t\t    <ion-card-content text-center>\n\t\t\t    <h2><a>{{pro.product_name}}</a></h2>\n\t\t\t\t<p rating>\n\t\t\t\t <a>\n\t\t\t\t   <ngx-stars [readonly]=\"true\" [maxStars]=\"5\" [initialStars]=\"pro?.total_reviews[0]?.Average_Review\" [color]=\"'#a01616'\"></ngx-stars>\n\t\t\t\t </a>\n\t\t\t\t</p>\n\t\t\t\t    <div product-price>\n\t\t\t\t\t\t<span *ngIf=\"errors.indexOf(pro.product_sale_price) == -1 && pro.product_sale_price != pro.product_purchase_price\" price> ${{pro.product_sale_price}}  </span>\n\n\t\t                <span *ngIf=\"errors.indexOf(pro.product_sale_price) >= 0 || pro.product_sale_price == pro.product_purchase_price\" price> ${{pro.product_purchase_price}}  </span>\n\n\t\t                <span *ngIf=\"errors.indexOf(pro.product_sale_price) == -1 && pro.product_sale_price != pro.product_purchase_price\" price-before-discount>${{pro.product_purchase_price}}</span>\n    \t\t\t   </div>\n                <ion-button text-capitalize color=\"darkred\" [disabled]=\"pro.product_quantity == 0 || errors.indexOf(pro.product_quantity) >= 0\" *ngIf=\"my_cart_products.indexOf(pro.product_id) == -1\" (click)=\"addToCart(pro.product_id,pro.product_sale_price,pro.product_purchase_price,1)\">{{(pro.product_quantity == 0 || errors.indexOf(pro.product_quantity) >= 0) ? 'Out of Stock' : 'Add To Cart'}} </ion-button>\n\n\t\t\t\t<ion-button text-capitalize color=\"darkred\" routerLink=\"/cart\" *ngIf=\"my_cart_products.indexOf(pro.product_id) >= 0\">In Cart </ion-button>\n\t\t     </ion-card-content>\n\t\t  \t</ion-card>\n\t    </ion-col>\n\t</ion-row>\n\t<ion-row class=\"ion-margin-top\" description>\n\t\t<ion-col size=\"12\" no-padding>\n\t\t\t<h2 section-head text-center>Description</h2>\n\t\t</ion-col>\n\t    <ion-col size=\"4\" no-padding *ngFor=\"let pro of comapred_products_list\">\n\t\t    <ion-card no-margin>\n\t\t        <p text-center [innerHTML]=\"atob(pro.product_description)\"></p>\n\t        </ion-card>\n\t    </ion-col>\n\t</ion-row>\n\n\t<ion-row class=\"ion-margin-top\" description sold-by>\n\t\t <ion-col size=\"12\" no-padding>\n\t\t\t<h2 section-head text-center>Brand</h2>\n\t\t </ion-col>\n\t    <ion-col size=\"4\" no-padding *ngFor=\"let pro of comapred_products_list\">\n\t\t    <ion-card no-margin>\n\t\t        <p text-center>{{pro.brand_name}}</p>\n\t        </ion-card>\n\t    </ion-col>\n\t</ion-row>\n\n\t<ion-row class=\"ion-margin-top\" description sold-by>\n\t\t <ion-col size=\"12\" no-padding>\n\t\t\t<h2 section-head text-center>Sold By</h2>\n\t\t </ion-col>\n\t    <ion-col size=\"4\" no-padding *ngFor=\"let pro of comapred_products_list\">\n\t\t    <ion-card no-margin>\n\t\t        <p text-center>{{pro.vendor_company}}</p>\n\t        </ion-card>\n\t    </ion-col>\n\t</ion-row>\n\t<!-- <ion-row class=\"ion-margin-top\" description headphone-fit>\n\t\t <ion-col size=\"12\" no-padding>\n\t\t\t<h2 section-head text-center>Headphone Fit</h2>\n\t\t </ion-col>\n\t    <ion-col size=\"4\" no-padding>\n\t\t    <ion-card no-margin>\n\t\t        <p text-center>Over-Ear</p>\n\t        </ion-card>\n\t    </ion-col>\n\t</ion-row>\n\t<ion-row class=\"ion-margin-top\" description item-dimensions>\n\t\t <ion-col size=\"12\" no-padding>\n\t\t\t<h2 section-head text-center>Item Dimensions</h2>\n\t\t </ion-col>\n\t    <ion-col size=\"4\" no-padding>\n\t\t    <ion-card no-margin>\n\t\t        <p text-center>6.54 x 7.13 x 2.36 in</p>\n\t        </ion-card>\n\t    </ion-col>\n\t</ion-row>\n\t<ion-row class=\"ion-margin-top\" description item-weight>\n\t\t <ion-col size=\"12\" no-padding>\n\t\t\t<h2 section-head text-center>Item Weight</h2>\n\t\t </ion-col>\n\t    <ion-col size=\"4\" no-padding>\n\t\t    <ion-card no-margin>\n\t\t        <p text-center>0.85 lb</p>\n\t        </ion-card>\n\t    </ion-col>\n\t</ion-row> -->\n\t</div>\n<!--- Product Comparison Mobile Ends  -->\n<!--  Recently viewed Products  Start-->\n\t\t\t<app-recently-viewed></app-recently-viewed>\n\t\t\t<!--  Recently viewed Products Ends -->\n\t\t<ion-row  class=\"ion-margin-top ion-hide-md-down\">\n\n\n\t\t\t\t    <!--  New Products  Start-->\n\t\t\t\t   <ion-col size-lg=\"12\" size-md=\"12\" size-sm=\"12\" size=\"12\" new-product *ngIf=\"related_products != ''\">\n\t\t\t\t\t\t<ion-card id=\"product-tabs-slider\" scroll-tabs no-margin>\n\t\t\t\t\t\t\t  <div more-info-tab>\n\t\t\t\t\t\t\t\t<h3 new-product-title float-left>Related Products</h3>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t   <div product-slider>\n\t\t\t\t\t\t\t\t<ion-row padding>\n\t\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t<owl-carousel\n\t\t\t\t\t\t\t     [options]=\"{items: 6, dots: false, nav:true, margin: 20, navigation: true}\"\n\t\t\t\t\t\t\t     [items]=\"related_products\"\n\t\t\t\t\t\t\t     [carouselClasses]=\"['owl-theme', 'sliding']\">\n\t\t\t\t\t\t\t\t<div size-lg=\"2\" size-md=\"3\" *ngFor=\"let recent of related_products \">\n\t\t\t\t\t\t\t\t<div products>\n\t\t\t\t\t\t\t\t\t<div product>\n\t\t\t\t\t\t\t\t\t\t<div product-image>\n\t\t\t\t\t\t\t\t\t\t\t<div image>\n\t\t\t\t\t\t\t\t\t\t\t\t   <a routerLink=\"/product-details/{{recent.product_id}}\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(recent.product_image) >= 0\" src=\"assets/images/products/no_image.svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(recent.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{recent.product_image}}\" alt=\"{{recent.product_name}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t   </a>\n\t\t\t\t\t\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t\t\t\t\t\t<div tag new>\n\t\t\t\t\t\t\t\t\t\t\t   <span>new</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- <div tag hot>\n\t\t\t\t\t\t\t\t\t\t\t   <span>hot</span>\n\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t   <div product-info text-left>\n\t\t\t\t\t\t\t\t\t\t  <h3 name><a routerLink=\"/product-details/{{recent.product_id}}\" >{{recent.product_name}}</a></h3>\n\t\t\t\t\t\t\t\t\t\t  <div rating rateit-small>\n\t\t\t\t\t\t\t\t\t\t   <ngx-stars [readonly]=\"true\" [maxStars]=\"5\" [initialStars]=\"recent?.Average_Review\" [color]=\"'#a01616'\"></ngx-stars>\n\t\t\t\t\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t\t\t\t\t  <div description></div>\n\t\t\t\t\t\t\t\t\t\t  <div product-price>\n\t\t\t\t\t\t\t\t\t\t\t  <span *ngIf=\"errors.indexOf(recent.product_sale_price) == -1 && recent.product_sale_price != recent.product_purchase_price\" price> ${{recent.product_sale_price}}  </span>\n\n\t\t\t\t\t\t                      <span *ngIf=\"errors.indexOf(recent.product_sale_price) >= 0 || recent.product_sale_price == recent.product_purchase_price\" price> ${{recent.product_purchase_price}}  </span>\n\n\t\t\t\t\t\t                      <span *ngIf=\"errors.indexOf(recent.product_sale_price) == -1 && recent.product_sale_price != recent.product_purchase_price\" price-before-discount>${{recent.product_purchase_price}}</span>\n\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t   <div cart>\n\t\t\t\t\t\t\t\t\t  <div action>\n\t\t\t\t\t\t\t\t\t\t<ul list-unstyled>\n\t\t\t\t\t\t\t\t\t\t  <li add-cart-button btn-group>\n\t\t\t\t\t\t\t\t\t\t  <ion-button *ngIf=\"my_cart_products.indexOf(recent.product_id) == -1\" (click)=\"addToCart(recent.product_id,recent.product_sale_price,recent.product_purchase_price,1)\" add-to-cart color=\"darkred\" title=\"Add Cart\">\n\t\t\t\t\t\t\t\t\t\t\t <ion-icon name=\"cart\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t  </ion-button>\n\t\t\t\t\t\t\t\t\t\t  <ion-button *ngIf=\"my_cart_products.indexOf(recent.product_id) >= 0\" add-to-cart color=\"darkred\" title=\"Added\">\n\t\t\t\t\t\t\t\t\t\t\t <ion-icon name=\"checkmark\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t  </ion-button>\n\t\t\t\t\t\t\t\t\t\t  </li>\n\t\t\t\t\t\t\t\t\t\t  <li lnk wishlist>\n\t\t\t\t\t\t\t\t\t\t  <ion-button *ngIf=\"my_wish_products.indexOf(recent.product_id) == -1\" (click)=\"addToWish(recent.product_id)\" color=\"darkblue\" add-to-cart title=\"Wishlist\">\n\t\t\t\t\t\t\t\t\t\t \t<ion-icon name=\"heart\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t  </ion-button>\n\t\t\t\t\t\t\t\t\t\t  <ion-button *ngIf=\"my_wish_products.indexOf(recent.product_id) >= 0\" color=\"darkblue\" add-to-cart title=\"Added\">\n\t\t\t\t\t\t\t\t\t\t\t <ion-icon red_heart name=\"heart\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t  </ion-button>\n\t\t\t\t\t\t\t\t\t\t  </li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"recent?.product_user_type != 'Admin'\" vendor-name>Sold by <a>{{recent.vendor_company}}</a></p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</owl-carousel>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t\t</div>\n\t\t        \t    </ion-card>\n\t\t           </ion-col>\n\t\t\t\t <!--  Related Products Ends -->\n\t\t</ion-row>\n\t\t<app-upsell-products></app-upsell-products>\n\t\t\t\t<!--   Mobile Section Start  -->\n\t\t\t\t  <!-- Upsell Product Start-->\n\t\t<div mob-recently-viewed padding10 class=\"ion-hide-lg-up\" *ngIf=\"related_products != ''\">\n\t\t<h4 mob-head text-center text-uppercase>\n\t            Related Products\n\t\t</h4>\n\t\t<ion-row>\n\t\t<ion-col>\n\t\t<owl-carousel\n\t     [options]=\"{items: 2, dots: false, nav:true, margin: 20, navigation: true}\"\n\t     [items]=\"related_products\"\n\t     [carouselClasses]=\"['owl-theme', 'sliding']\">\n\t\t<div size=\"6\" size-md=\"4\"  size-sm=\"6\" size-xs=\"6\" size=\"12\" *ngFor=\"let recent of related_products \">\n\t\t\t <ion-card  no-margin>\n\t\t\t\t <img routerLink=\"/product-details/{{recent.product_id}}\" *ngIf=\"errors.indexOf(recent.product_image) >= 0\" src=\"assets/images/products/no_image.svg\">\n\t\t\t\t<img routerLink=\"/product-details/{{recent.product_id}}\" *ngIf=\"errors.indexOf(recent.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{recent.product_image}}\" alt=\"{{recent.product_name}}\">\n\n\t\t\t     <ion-card-content>\n\t\t\t\t  <ion-row align-items-center>\n\t\t\t\t\t  <ion-col size=\"9\">\n\t\t\t\t\t\t<h2>{{recent.product_name}}</h2>\n\t\t\t\t\t  </ion-col>\n\t\t\t\t\t <ion-col size=\"3\" *ngIf=\"errors.indexOf(recent.product_sale_price) == -1 && recent.product_sale_price != recent.product_purchase_price\">\n\t\t\t\t\t\t<ion-badge float-right color=\"darkgreymb\">\n\t                       {{(((recent.product_purchase_price-recent.product_sale_price)/recent.product_purchase_price)*100).toFixed(0)}}%\n\t\t\t\t\t\t</ion-badge>\n\t                  </ion-col>\n\t\t\t\t\t    <ion-col size=\"12\">\n\t\t\t\t\t     <div rating>\n\t\t\t\t\t\t      <ngx-stars [readonly]=\"true\" [maxStars]=\"5\" [initialStars]=\"recent?.Average_Review\" [color]=\"'#a01616'\"></ngx-stars>\n\t\t\t\t\t\t </div>\n\t\t\t\t\t  </ion-col>\n\t\t\t\t  </ion-row>\n\t\t\t\t\t   <ion-row align-items-center>\n\t\t\t\t\t  <ion-col size=\"9\">\n\t\t\t\t\t\t  <div product-price>\n\t\t\t\t\t\t\t <span *ngIf=\"errors.indexOf(recent.product_sale_price) == -1 && recent.product_sale_price != recent.product_purchase_price\" price> ${{recent.product_sale_price}}  </span>\n\n\t\t                    <span *ngIf=\"errors.indexOf(recent.product_sale_price) >= 0 || recent.product_sale_price == recent.product_purchase_price\" price> ${{recent.product_purchase_price}}  </span>\n\n\t\t                    <span *ngIf=\"errors.indexOf(recent.product_sale_price) == -1 && recent.product_sale_price != recent.product_purchase_price\" price-before-discount>${{recent.product_purchase_price}}</span>\n\t\t\t\t\t\t   </div>\n\t\t\t\t\t  </ion-col>\n\t\t\t\t\t    <ion-col size=\"3\" *ngIf=\"recent?.product_quantity != 0 && errors.indexOf(recent?.product_quantity) == -1\">\n\t\t                    <ion-buttons float-right *ngIf=\"my_cart_products.indexOf(recent.product_id) == -1\" (click)=\"addToCart(recent.product_id,recent.product_sale_price,recent.product_purchase_price,1)\">\n\t\t                        <ion-icon name=\"cart\"></ion-icon>\n\t\t                    </ion-buttons>\n\t\t                    <ion-buttons float-right *ngIf=\"my_cart_products.indexOf(recent.product_id) >= 0\">\n\t\t                        <ion-icon name=\"checkmark\"></ion-icon>\n\t\t                    </ion-buttons>\n\t\t                  </ion-col>\n\t\t\t\t  </ion-row>\n\t\t\t  </ion-card-content>\n\t\t\t</ion-card>\n\t\t</div>\n\t\t</owl-carousel>\n\t\t</ion-col>\n\t\t<ion-col size=\"12\" text-center >\n\t\t<ion-button color=\"grey2\" text-capitalize>View More\n\t\t</ion-button>\n\t\t</ion-col>\n\t\t</ion-row>\n\t\t</div>\n\t\t\t\t  <!--Related Product Ends-->\n\n\t\t\t\t  <!--Recently Viewed  Ends-->\n<!---   Mobile Section Ends  -->\n</div>\n<!--  Product Detail Ends   -->\n</div>\n<!-- *ngIf=\"product?.wholesale_price != 0 && product?.wholesale_products != 0 && errors.indexOf(product?.wholesale_products) == -1\" -->\n<div  class=\"row chat-window col-xs-12 col-md-3\" id=\"{{timestamp}}\" style=\"padding-left:0px;\" >\n    <div class=\"col-xs-12 col-md-12\" style=\"padding-left: 0px;\">\n    \t<div class=\"panel panel-default\">\n            <div class=\"panel-heading top-bar\">\n                <div class=\"col-md-8 col-xs-8\">\n                    <h3 class=\"panel-title\"><span class=\"glyphicon glyphicon-comment\"></span> Chat </h3>\n                </div>\n                <div class=\"col-md-4 col-xs-4\" style=\"text-align: right;\">\n                    <a href=\"javascript:void(0)\"><span id=\"minim_chat_window\" class=\"panel-collapsed glyphicon glyphicon-plus icon_minim\"></span></a>\n                    <a href=\"javascript:void(0)\" style=\"color: #fff !important;\"><span class=\"glyphicon glyphicon-remove icon_close\" id=\"chat_window_1\"></span></a>\n                </div>\n            </div>\n            <div class=\"panel-body msg_container_base\" style=\"display: none;\">\n            \t<ng-container *ngFor=\"let chat of chat_list\">\n\t                <div class=\"row msg_container {{chat.user_type == 'user' ? 'base_sent' : 'base_receive'}}\">\n\t                    <div class=\"col-md-10 col-xs-10\">\n\t                        <div class=\"messages {{chat.user_type == 'user' ? 'msg_sent' : 'msg_receive'}}\">\n\t                            <p *ngIf=\"chat.type == 'text'\">{{chat.message}}</p>\n\t                            <p *ngIf=\"chat.type == 'audio'\">\n\t                            <!-- (click)=\"playAudio(chat.message)\" -->\n\t                            \t<!-- <img width=\"100px\" src=\"assets/images/mp3.png\"> -->\n\t                            \t<audio style=\"width:100%\" controls><source [src]=\"sanitizer.bypassSecurityTrustResourceUrl(chat.message)\" type=\"audio/mpeg\">Your browser does not support the audio tag.</audio>\n\t                            </p>\n\t                            <span fnt_design>{{chat.date | timeAgo}}</span>\n\t                        </div>\n\t                    </div>\n\t                    <!-- <div class=\"col-md-2 col-xs-2 avatar\">\n\t                        <img src=\"http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg\" class=\" img-responsive \">\n\t                    </div> -->\n\t                </div>\n                </ng-container>\n            </div>\n            <div class=\"panel-footer\" style=\"display: none;\">\n            \t<form (ngSubmit)=\"addChat(message)\">\n\t                <div class=\"input-group\">\n\t                <ion-icon (mousedown)=\"startRecording()\"  (mouseup)=\"stopRecording()\" name=\"mic\" class=\"mike_icon\"></ion-icon>\n\t                    <input autocomplete=\"off\" [(ngModel)]=\"message\" name=\"message\" id=\"btn-input\" type=\"text\" class=\"form-control input-sm chat_input\" placeholder=\"Write your message here...\" />\n\t                    <span class=\"input-group-btn\">\n\t                    <button type=\"submit\" class=\"btn btn-primary btn-sm\" id=\"btn-chat\"><ion-icon ios=\"ios-paper-plane\" md=\"md-paper-plane\"></ion-icon></button>\n\t                    </span>\n\t                </div>\n                </form>\n            </div>\n\t\t</div>\n    </div>\n</div>\n\n\n<app-footer></app-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/product-details/product-details.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/product-details/product-details.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:var(--ion-color-grey);\n  font-family: var(--ion-font-family-2);\n  /*  Product Detail Start  */\n  /* Product Slider Start*/\n  /* Product Slider Ends*/\n  /* Product Detail Ends  */ }\n  ion-content [fnt_design] {\n    position: absolute;\n    right: 10%;\n    font-size: 10px;\n    color: #3e3939;\n    bottom: 2px; }\n  ion-content .panel {\n    margin-bottom: 0px; }\n  ion-content .mike_icon {\n    position: absolute;\n    left: 0;\n    z-index: 9;\n    background: #9f2f22;\n    padding: 9px;\n    color: #fff;\n    font-size: 15px;\n    border-bottom-left-radius: 3px;\n    border-top-left-radius: 3px; }\n  ion-content .chat_input {\n    padding-left: 37px; }\n  ion-content .chat-window {\n    bottom: 0;\n    position: fixed;\n    float: right;\n    right: 0;\n    margin-left: 10px;\n    z-index: 9; }\n  ion-content .chat-window > div > .panel {\n    border-radius: 5px 5px 0 0; }\n  ion-content .panel-default {\n    border-color: #a02f22; }\n  ion-content .icon_minim {\n    padding: 2px 10px;\n    color: #fff; }\n  ion-content .msg_container_base {\n    background: #e5e5e5;\n    margin: 0;\n    padding: 0 10px 10px;\n    max-height: 300px;\n    overflow-x: hidden; }\n  ion-content .top-bar {\n    background: #a01616;\n    color: white;\n    padding: 10px;\n    position: relative;\n    overflow: hidden; }\n  ion-content .msg_receive {\n    padding-left: 0;\n    margin-left: 0; }\n  ion-content .msg_receive p {\n      margin: 0px 0px 0.6rem 0; }\n  ion-content .msg_sent {\n    padding-bottom: 20px !important;\n    margin-right: 0; }\n  ion-content .messages {\n    background: white;\n    padding: 10px;\n    border-radius: 2px;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n    max-width: 100%; }\n  ion-content .messages > p {\n    font-size: 13px;\n    margin: 0 0 0.2rem 0; }\n  ion-content .messages > time {\n    font-size: 11px;\n    color: #ccc; }\n  ion-content .msg_container {\n    padding: 10px;\n    overflow: hidden;\n    display: flex; }\n  ion-content img {\n    display: block;\n    width: 100%; }\n  ion-content .avatar {\n    position: relative; }\n  ion-content .base_receive > .avatar:after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 0;\n    height: 0;\n    border: 5px solid #FFF;\n    border-left-color: rgba(0, 0, 0, 0);\n    border-bottom-color: rgba(0, 0, 0, 0); }\n  ion-content .base_sent {\n    justify-content: flex-end;\n    align-items: flex-end; }\n  ion-content .base_sent > .avatar:after {\n    content: \"\";\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 0;\n    height: 0;\n    border: 5px solid white;\n    border-right-color: transparent;\n    border-top-color: transparent;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); }\n  ion-content .msg_sent > time {\n    float: right; }\n  ion-content .input-sm, ion-content .form-horizontal .form-group-sm .form-control {\n    height: 33px !important; }\n  ion-content .btn-sm, ion-content .btn-group-sm > .btn {\n    padding: 5px 10px !important; }\n  ion-content .btn-primary {\n    color: #fff;\n    background-color: #a02f22;\n    border-color: #a02f22; }\n  ion-content .btn-primary ion-icon {\n    font-size: 16px; }\n  ion-content .msg_container_base::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    background-color: #F5F5F5; }\n  ion-content .msg_container_base::-webkit-scrollbar {\n    width: 12px;\n    background-color: #F5F5F5; }\n  ion-content .msg_container_base::-webkit-scrollbar-thumb {\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    background-color: #555; }\n  ion-content .btn-group.dropup {\n    position: fixed;\n    left: 0px;\n    bottom: 0; }\n  ion-content [reply_comm_div] ion-textarea {\n    font-size: 12px;\n    font-weight: normal;\n    border: 1px solid #a02f22; }\n  @media only screen and (min-width: 991px) {\n    ion-content {\n      --padding-top: var(--ion-padding-0); }\n      ion-content ion-slides {\n        height: 300px; } }\n  @media only screen and (max-width: 991px) {\n    ion-content {\n      --padding-start: var(--ion-padding-0);\n      --padding-end: var(--ion-padding-0);\n      --padding-top: var(--ion-padding-0);\n      --padding-bottom: var(--ion-padding-0); }\n      ion-content ion-slides {\n        height: 300px; } }\n  @media only screen and (max-width: 576px) {\n    ion-content ion-slides {\n      height: 200px; } }\n  ion-content [single-product] {\n    /* Write Review Section Start */\n    /* Write Review Section Ends */\n    /* Product Tabs Start */\n    /* Product Tabs Ends */ }\n  ion-content [single-product] [product-tabs] {\n      /* Review Table Start */\n      /* Review Ends */\n      /*Form Start*/\n      /*Form Ends*/ }\n  ion-content [single-product] [product-tabs] [product-add-review] h4[title] {\n        margin-bottom: var(--ion-margin-0);\n        margin-top: var(--ion-margin-5);\n        font-size: var(--ion-font-size-18);\n        font-family: var(--ion-font-family-2);\n        text-transform: uppercase;\n        font-weight: bold;\n        border-bottom: 1px solid #e3e3e3;\n        padding-bottom: var(--ion-padding-10);\n        padding: var(--ion-padding-18) var(--ion-padding-20);\n        color: var(--ion-color-darkblack); }\n  @media only screen and (max-width: 991px) {\n          ion-content [single-product] [product-tabs] [product-add-review] h4[title] {\n            padding: var(--ion-padding-15) var(--ion-padding-0) var(--ion-padding-10) var(--ion-padding-15);\n            font-size: var(--ion-font-size-14);\n            border: none; } }\n  ion-content [single-product] [product-tabs] [review-table] {\n        padding: var(--ion-padding-20); }\n  @media only screen and (max-width: 991px) {\n          ion-content [single-product] [product-tabs] [review-table] {\n            padding: var(--ion-padding-15); } }\n  ion-content [single-product] [product-tabs] [review-table] table tr th {\n          border: 1px solid #e5e5e5; }\n  ion-content [single-product] [product-tabs] [review-table] table tr td {\n          border: 1px solid #e5e5e5; }\n  @media only screen and (max-width: 991px) {\n        ion-content [single-product] [product-tabs] form ion-col {\n          padding: var(--ion-padding-0); }\n        ion-content [single-product] [product-tabs] form [rateit-small] {\n          color: var(--ion-color-greyc);\n          cursor: pointer; }\n          ion-content [single-product] [product-tabs] form [rateit-small] ion-icon {\n            cursor: pointer; } }\n  ion-content [single-product] [product-tabs] form[form-cnt] [form-group] {\n        margin-bottom: var(--ion-margin-15); }\n  @media only screen and (max-width: 991px) {\n          ion-content [single-product] [product-tabs] form[form-cnt] [form-group] {\n            margin-bottom: var(--ion-margin-10); } }\n  ion-content [single-product] [product-tabs] form[form-cnt] [form-group] ion-label {\n          font-weight: 700;\n          color: var(--ion-color-darkblack); }\n  @media only screen and (max-width: 991px) {\n            ion-content [single-product] [product-tabs] form[form-cnt] [form-group] ion-label {\n              font-weight: normal;\n              font-size: var(--ion-font-size-12); } }\n  ion-content [single-product] [product-tabs] form[form-cnt] [form-group] ion-input {\n          border: 1px solid var(--ion-color-greyc);\n          border-radius: var(--ion-value-4);\n          height: var(--ion-wh-34);\n          margin-top: var(--ion-margin-8); }\n  @media only screen and (max-width: 991px) {\n            ion-content [single-product] [product-tabs] form[form-cnt] [form-group] ion-input {\n              border: none;\n              border-radius: 0px;\n              margin-top: var(--ion-margin-0);\n              height: auto;\n              --padding-top: var(--ion-padding-0);\n              --padding-bottom: var(--ion-padding-0);\n              border-bottom: 1px solid #e3e3e3; } }\n  ion-content [single-product] [product-tabs] form[form-cnt] [form-group] ion-textarea {\n          border: 1px solid var(--ion-color-greyc);\n          border-radius: var(--ion-value-4);\n          min-height: 110px; }\n  @media only screen and (max-width: 991px) {\n            ion-content [single-product] [product-tabs] form[form-cnt] [form-group] ion-textarea {\n              min-height: auto;\n              border: none;\n              border-radius: 0px;\n              margin-top: var(--ion-margin-0);\n              height: auto;\n              border-bottom: 1px solid #e3e3e3; } }\n  ion-content [single-product] [product-tabs] form[form-cnt] ion-button {\n        --box-shadow:none; }\n  ion-content [single-product] [product-tabs] form[form-cnt] ion-button:hover {\n          opacity: 0.8; }\n  @media only screen and (max-width: 991px) {\n          ion-content [single-product] [product-tabs] form[form-cnt] ion-button {\n            font-size: var(--ion-font-size-12);\n            --border-radius: 4px!important;\n            height: var(--ion-wh-28); } }\n  ion-content [single-product] [product-tabs] {\n      margin-top: var(--ion-margin-30);\n      background-color: var(--ion-color-white);\n      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n      padding: var(--ion-padding-0);\n      overflow: hidden;\n      margin-bottom: var(--ion-margin-30);\n      /* Tabs Start*/\n      /* Tabs Ends */ }\n  ion-content [single-product] [product-tabs] ion-segment {\n        display: inline-block;\n        float: left; }\n  @media only screen and (max-width: 991px) {\n          ion-content [single-product] [product-tabs] ion-segment {\n            display: flex;\n            border-radius: 0px !important; } }\n  ion-content [single-product] [product-tabs] ion-segment ion-segment-button {\n          float: left;\n          font-family: var(--ion-font-family-2);\n          display: inline-block;\n          background: var(--ion-color-greyf8);\n          border-color: var(--ion-color-greyf8);\n          position: relative;\n          font-weight: 600;\n          color: var(--ion-color-darkblack); }\n  @media only screen and (max-width: 991px) {\n            ion-content [single-product] [product-tabs] ion-segment ion-segment-button {\n              min-height: var(--ion-wh-30);\n              border-radius: 0px !important; } }\n  ion-content [single-product] [product-tabs] ion-segment ion-segment-button ion-label {\n            margin: var(--ion-margin-0); }\n  ion-content [single-product] [product-tabs] ion-segment ion-segment-button.segment-button-checked {\n            background: var(--ion-color-darkred);\n            color: var(--ion-color-white);\n            overflow: visible;\n            position: relative; }\n  ion-content [single-product] [product-tabs] ion-segment ion-segment-button:after {\n            border-color: var(--ion-color-darkred) transparent transparent !important;\n            border-style: solid;\n            border-width: 7.5px 5.5px 7.5px 5.5px;\n            content: \"\";\n            height: var(--ion-wh-0);\n            position: absolute;\n            bottom: -15px;\n            width: var(--ion-value-0);\n            right: var(--ion-value-0);\n            left: var(--ion-value-0);\n            margin: 0 auto;\n            top: auto;\n            z-index: 1; }\n  @media only screen and (max-width: 991px) {\n              ion-content [single-product] [product-tabs] ion-segment ion-segment-button:after {\n                display: none; } }\n  ion-content [single-product] [product-tabs] ion-list {\n        clear: both;\n        padding: var(--ion-padding-24);\n        /* Description Tab Start */\n        /*  Description Tab Ends  */\n        /* Review Start */\n        /* Review Ends */ }\n  @media only screen and (max-width: 991px) {\n          ion-content [single-product] [product-tabs] ion-list {\n            padding: var(--ion-padding-15);\n            margin: var(--ion-margin-0); } }\n  ion-content [single-product] [product-tabs] ion-list [description] {\n          font-family: var(--ion-font-family-2);\n          line-height: var(--ion-value-20);\n          font-size: var(--ion-font-size-14);\n          color: var(--ion-color-darkblack); }\n  @media only screen and (max-width: 576px) {\n            ion-content [single-product] [product-tabs] ion-list [description] {\n              font-size: var(--ion-font-size-12); } }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] {\n          /* Review Start */\n          /* Review Ends */ }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] h4[title] {\n            color: var(--ion-color-darkgrey);\n            font-size: var(--ion-font-size-14);\n            font-weight: bold;\n            line-height: var(--ion-value-20);\n            margin: var(--ion-margin-0) var(--ion-margin-0) 1var --ion-margin-10;\n            font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 576px) {\n              ion-content [single-product] [product-tabs] ion-list [product-reviews] h4[title] {\n                font-size: var(--ion-font-size-12); } }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [dropdown-med] .btn {\n            font-family: var(--ion-font-family-2);\n            border: 1px solid #e5e5e5;\n            border-radius: var(--ion-value-0);\n            padding: var(--ion-padding-4) var(--ion-padding-12);\n            background: var(--ion-color-white);\n            font-size: var(--ion-font-size-13); }\n  @media only screen and (max-width: 991px) {\n              ion-content [single-product] [product-tabs] ion-list [product-reviews] [dropdown-med] .btn {\n                border-radius: var(--ion-value-30);\n                font-size: var(--ion-font-size-10); } }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item {\n            --padding-top: var(--ion-padding-15);\n            --padding-bottom: var(--ion-padding-15);\n            margin-top: var(--ion-margin-20);\n            /* avatar start*/\n            /*avatar ends*/\n            /*label start*/\n            /*title start*/\n            /*title ends*/\n            /* Description Start*/\n            /* Description Ends*/\n            /**Review Action Start */\n            /*Review Action Ends*/\n            /* Rate Start */\n            /* Rate Ends */ }\n  @media only screen and (max-width: 991px) {\n              ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item {\n                --ion-color-base: --var(-ion-color-white);\n                border-bottom: 1px solid #e3e3e3;\n                margin-top: var(--ion-margin-10);\n                --padding-top: var(--ion-padding-5);\n                --padding-bottom: var(--ion-padding-5);\n                --padding-start: var(--ion-padding-5);\n                --padding-end: var(--ion-padding-5); } }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item[review-comment] {\n              margin-left: 80px;\n              border-left: 3px solid var(--ion-color-darkred); }\n  @media only screen and (max-width: 991px) {\n                ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item[review-comment] {\n                  border-left: none;\n                  margin-left: var(--ion-margin-0); } }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item ion-avatar {\n              width: var(--ion-wh-55);\n              height: var(--ion-wh-55); }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item label {\n              padding-left: var(--ion-padding-20); }\n  @media only screen and (max-width: 991px) {\n                ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item label {\n                  padding-left: var(--ion-padding-10);\n                  width: calc(100% - 55px); } }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item [review-title] [summary] {\n              color: var(--ion-color-darkgrey);\n              font-size: var(--ion-font-size-14);\n              font-family: var(--ion-font-family-2);\n              font-weight: normal;\n              margin-right: var(--ion-margin-10);\n              font-style: italic; }\n  @media only screen and (max-width: 991px) {\n                ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item [review-title] [summary] {\n                  font-size: var(--ion-font-size-12); } }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item [review-title] [date] {\n              font-family: var(--ion-font-family-2);\n              font-weight: normal;\n              color: var(--ion-color-darkblack);\n              font-size: var(--ion-font-size-12);\n              margin-left: var(--ion-margin-5); }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item [review-title] [date] ion-icon {\n                top: 1px;\n                position: relative; }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item [review-title] [date] span {\n                color: var(--ion-color-darkred);\n                font-weight: normal;\n                margin-left: var(--ion-margin-2); }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item [text] p {\n              line-height: var(--ion-value-18);\n              font-size: var(--ion-font-size-14);\n              color: var(--ion-color-darkblack);\n              font-weight: normal;\n              margin-bottom: var(--ion-margin-0); }\n  @media only screen and (max-width: 991px) {\n                ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item [text] p {\n                  margin-left: var(--ion-margin-0);\n                  font-size: var(--ion-font-size-12); } }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item [review-action] {\n              margin-top: var(--ion-margin-6);\n              display: inline-block;\n              font-size: var(--ion-font-size-14);\n              color: var(--ion-color-darkblack);\n              font-weight: normal; }\n  @media only screen and (max-width: 991px) {\n                ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item [review-action] {\n                  font-size: var(--ion-font-size-12); } }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item [review-action] a {\n                color: var(--ion-color-darkred);\n                text-decoration: none; }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item [rateit-small] {\n              color: #ccc; }\n  @media only screen and (max-width: 991px) {\n                ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item [rateit-small] ion-icon {\n                  font-size: var(--ion-font-size-12); } }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item [rateit-small] ion-icon[filled] {\n                color: var(--ion-color-yellow);\n                font-size: var(--ion-font-size-16); }\n  @media only screen and (max-width: 991px) {\n                  ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item [rateit-small] ion-icon[filled] {\n                    font-size: var(--ion-font-size-12); } }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [sidebar-widget] {\n            background-color: var(--ion-color-white);\n            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n            padding: var(--ion-padding-20);\n            margin: var(--ion-margin-20) var(--ion-margin-0) var(--ion-margin-30); }\n  @media only screen and (max-width: 991px) {\n              ion-content [single-product] [product-tabs] ion-list [product-reviews] [sidebar-widget] {\n                background-color: transparent;\n                box-shadow: none;\n                padding: var(--ion-padding-0);\n                margin: var(--ion-margin-0); } }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [sidebar-widget] [section-title] {\n              font-size: var(--ion-font-size-14);\n              font-family: var(--ion-font-family-2);\n              border-bottom: 1px solid #e3e3e3;\n              padding-bottom: 12px;\n              text-transform: uppercase;\n              font-weight: bold;\n              margin-top: var(--ion-margin-0); }\n  @media only screen and (max-width: 576px) {\n                ion-content [single-product] [product-tabs] ion-list [product-reviews] [sidebar-widget] [section-title] {\n                  font-size: var(--ion-font-size-12);\n                  border-bottom: none;\n                  margin-top: var(--ion-margin-5);\n                  margin-bottom: var(--ion-margin-0); } }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [sidebar-widget] [sidebar-widget-body] [tag-list] a[item] {\n              background-color: #f5f5f5;\n              color: var(--ion-color-darkgrey);\n              display: inline-block;\n              margin-bottom: var(--ion-margin-5);\n              margin-right: var(--ion-margin-5);\n              padding: var(--ion-padding-6) var(--ion-padding-12);\n              text-decoration: none; }\n  @media only screen and (max-width: 991px) {\n                ion-content [single-product] [product-tabs] ion-list [product-reviews] [sidebar-widget] [sidebar-widget-body] [tag-list] a[item] {\n                  padding: var(--ion-padding-4);\n                  text-decoration: none;\n                  font-size: var(--ion-font-size-10); } }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [sidebar-widget] [sidebar-widget-body] [tag-list] a[item]:hover {\n                background-color: var(--ion-color-darkred);\n                color: var(--ion-color-white); }\n  ion-content [single-product] [detail-block] {\n      background-color: var(--ion-color-white);\n      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n      padding: var(--ion-padding-20);\n      overflow: hidden; }\n  @media only screen and (max-width: 991px) {\n        ion-content [single-product] [detail-block] {\n          padding: var(--ion-padding-0); } }\n  ion-content [single-product] [detail-block] [product-view-area] {\n        /*  Large Image Ends   */\n        /* Product Info Block  Start*/\n        /* Product Info Block  Ends*/ }\n  ion-content [single-product] [detail-block] [product-view-area] [big-image] {\n          /*  Thumbnails Start  */\n          /*  Thumbnails Ends  */\n          /*  Large Image Start   */ }\n  ion-content [single-product] [detail-block] [product-view-area] [big-image] [thumbnail-main] {\n            max-width: 100px;\n            padding: var(--ion-padding-0);\n            float: left;\n            position: relative; }\n  ion-content [single-product] [detail-block] [product-view-area] [big-image] [thumbnail-main] ul[thumbnail-list] {\n              padding: var(--ion-padding-0);\n              list-style-type: none;\n              text-align: center;\n              width: 100%;\n              float: left; }\n  ion-content [single-product] [detail-block] [product-view-area] [big-image] [thumbnail-main] ul[thumbnail-list] li {\n                border: 1px var(--ion-color-grey-e5) solid;\n                padding: var(--ion-padding-0);\n                width: 100px;\n                float: left;\n                display: block; }\n  ion-content [single-product] [detail-block] [product-view-area] [big-image] [large-image] {\n            width: calc(100% - 100px);\n            float: left;\n            border: 1px var(--ion-color-grey-e5) solid;\n            position: relative; }\n  ion-content [single-product] [detail-block] [product-view-area] [big-image] [large-image] span {\n              position: absolute;\n              top: var(--ion-value-10);\n              right: var(--ion-value-10);\n              font-family: var(--ion-font-family-2); }\n  ion-content [single-product] [detail-block] [product-view-area] [big-image] [large-image] span[sale-text] {\n                background: var(--ion-color-darkred);\n                color: var(--ion-color-white);\n                font-size: var(--ion-font-size-10);\n                padding: var(--ion-padding-2) var(--ion-padding-8);\n                border-radius: var(--ion-value-2); }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] {\n          padding-left: var(--ion-padding-20);\n          /* Price Start*/\n          /* Price Ends*/\n          /* Rating Start */\n          /* Rating Ends */\n          /* Review Start */\n          /*Review Ends */\n          /*Availability Section Start*/\n          /*Availability Section Ends*/\n          /* Short Description Start*/\n          /* Short Description Ends*/\n          /* Vendor Info Start*/\n          /* Vendor Info Ends*/\n          /* Quantity Section Start*/\n          /* Quantity Section Ends*/\n          /* Bulk Price Start*/\n          /* Bulk Price Ends*/\n          /* Share Section Start */\n          /* Share Section Ends */ }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] ion-fab {\n            margin-top: var(--ion-margin-0); }\n  @media only screen and (max-width: 991px) {\n            ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] {\n              padding: var(--ion-padding-0) var(--ion-padding-10); } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] h1 {\n            margin-top: var(--ion-margin-0);\n            font-weight: bold;\n            letter-spacing: -1px;\n            text-transform: uppercase;\n            font-family: var(--ion-font-family-2); }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] h1[name] {\n              font-size: var(--ion-font-size-36);\n              color: var(--ion-color-darkblack); }\n  @media only screen and (max-width: 991px) {\n                ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] h1[name] {\n                  font-size: var(--ion-font-size-20);\n                  margin-bottom: var(--ion-margin-5); } }\n  @media only screen and (max-width: 576px) {\n                ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] h1[name] {\n                  font-size: var(--ion-font-size-14);\n                  margin-bottom: var(--ion-margin-5); } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] h1[name] [favorite-button] ion-button {\n                --box-shadow:none;\n                margin-top: -16px;\n                font-size: var(--ion-font-size-12); }\n  @media only screen and (max-width: 576px) {\n                  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] h1[name] [favorite-button] ion-button {\n                    --border-radius: 2px!important;\n                    margin-top: -5px;\n                    height: var(--ion-wh-25);\n                    width: var(--ion-wh-25); } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [product-price] {\n            display: flex; }\n  @media only screen and (max-width: 991px) {\n              ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [product-price] {\n                margin-top: var(--ion-value-20);\n                margin-bottom: var(--ion-value-5); } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [product-price] [price] {\n              font-family: var(--ion-font-family-2);\n              font-weight: 700;\n              font-size: var(--ion-font-size-30);\n              line-height: var(--ion-value-50);\n              margin-right: var(--ion-value-3);\n              color: var(--ion-color-darkred); }\n  @media only screen and (max-width: 991px) {\n                ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [product-price] [price] {\n                  font-size: var(--ion-font-size-20);\n                  line-height: normal; } }\n  @media only screen and (max-width: 576px) {\n                ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [product-price] [price] {\n                  font-size: var(--ion-font-size-18);\n                  line-height: normal; } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [product-price] [price-before-discount] {\n              text-decoration: line-through;\n              color: #aaa;\n              font-weight: 400;\n              line-height: var(--ion-value-50);\n              font-size: var(--ion-font-size-16);\n              font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 576px) {\n                ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [product-price] [price-before-discount] {\n                  font-size: var(--ion-font-size-16);\n                  line-height: normal; } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [rateit-small] {\n            color: #ccc; }\n  @media only screen and (max-width: 991px) {\n              ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [rateit-small] ion-icon {\n                font-size: var(--ion-font-size-12); } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [rateit-small] ion-icon[filled] {\n              color: var(--ion-color-yellow);\n              font-size: var(--ion-font-size-16); }\n  @media only screen and (max-width: 576px) {\n                ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [rateit-small] ion-icon[filled] {\n                  font-size: var(--ion-font-size-12); } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [reviews] [lnk] {\n            color: #aaaaaa;\n            font-family: var(--ion-font-family-2);\n            text-decoration: none; }\n  @media only screen and (max-width: 576px) {\n              ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [reviews] [lnk] {\n                font-size: var(--ion-font-size-12); } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [stock-box] span {\n            font-size: var(--ion-font-size-13);\n            font-family: var(--ion-font-family-2);\n            line-height: var(--ion-value-18);\n            color: var(--ion-color-darkgrey);\n            padding: var(--ion-padding-0);\n            font-weight: normal; }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [stock-box] span[value] {\n              font-size: var(--ion-font-size-13);\n              color: var(--ion-color-darkred); }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [description-container] {\n            margin-top: var(--ion-margin-15); }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [description-container] h2 {\n              font-size: var(--ion-font-size-14);\n              font-weight: 700;\n              margin-bottom: var(--ion-margin-5); }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [description-container] p {\n              font-family: var(--ion-font-family-2);\n              line-height: var(--ion-value-20);\n              color: var(--ion-color-darkgrey); }\n  @media only screen and (max-width: 576px) {\n                ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [description-container] p {\n                  font-size: var(--ion-font-size-12);\n                  margin-bottom: var(--ion-margin-0); } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [vendor-info] {\n            /*[video-message]\r\n\t\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t\t@media only screen and (max-width:576px)\r\n\t\t\t\t\t\t\t\t\t {\r\n\t\t\t\t\t\t\t\t\t\t  text-align:left;\r\n\t\t\t\t\t\t\t\t\t }\r\n\t\t\t\t\t\t\t\t\t p\r\n\t\t\t\t\t\t\t\t\t {\r\n\t\t\t\t\t\t\t\t\t\t &[contact-txt]\r\n\t\t\t\t\t\t\t\t\t\t {       \r\n\t\t\t\t\t\t\t\t\t\t       \tfont-family:var(--ion-font-family-2);\t\r\n\t\t\t\t\t\t\t\t\t\t\t    color:var(--ion-color-darkblack);\r\n\t\t\t\t\t\t\t\t\t\t\t    display: inline-block;\r\n                                                margin-right: var(--ion-margin-5); \r\n\t\t\t\t\t\t\t\t\t\t }\r\n\t\t\t\t\t\t\t\t\t }\r\n\t\t\t\t\t\t\t\t\t [contact-btns]\r\n\t\t\t\t\t\t\t\t\t {\r\n\t\t\t\t\t\t\t\t\t\t    display: inline-block;\r\n                                            a\r\n\t\t\t\t\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t\t\t\t\twidth: var(--ion-wh-27);\r\n\t\t\t\t\t\t\t\t\t\t\t\theight:  var(--ion-wh-27);\r\n\t\t\t\t\t\t\t\t\t\t\t\tfont-size: var(--ion-font-size-13);\r\n\t\t\t\t\t\t\t\t\t\t\t\tline-height: var(--ion-value-23);\r\n\t\t\t\t\t\t\t\t\t\t\t\tmargin-left: var( --ion-margin-5);\r\n\t\t\t\t\t\t\t\t\t\t\t\tmargin-right: var( --ion-margin-5);\r\n\t\t\t\t\t\t\t\t\t\t\t\tbackground: var(--ion-color-darkblue);\r\n\t\t\t\t\t\t\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\t\t\t\t\t\t\tborder-radius: 50%;\r\n\t\t\t\t\t\t\t\t\t\t\t\tborder: 2px solid var(--ion-color-darkblue);\r\n\t\t\t\t\t\t\t\t\t\t\t\tcolor: var(--ion-color-white);\r\n\t\t\t\t\t\t\t\t\t\t\t\tdisplay:inline-block;\r\n                                                text-align: center\r\n\t\t\t\t\t\t\t\t\t\t\t}\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t }\r\n\t\t\t\t\t\t\t\t}*/ }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [vendor-info] p[vendor-name] {\n              font-size: var(--ion-font-size-13);\n              margin-bottom: var(--ion-margin-5);\n              margin-top: var(--ion-margin-10);\n              font-family: var(--ion-font-family-2);\n              color: var(--ion-color-darkblack); }\n  @media only screen and (max-width: 576px) {\n                ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [vendor-info] p[vendor-name] {\n                  margin-bottom: var(--ion-margin-10); } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [vendor-info] p[vendor-name] a {\n                color: var(--ion-color-darkred); }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [quantity-container] {\n            border-bottom: 1px solid var(--ion-color-greyf2);\n            border-top: 1px solid var(--ion-color-greyf2);\n            padding: var(--ion-padding-12) var(--ion-padding-0) var(--ion-padding-6); }\n  @media only screen and (max-width: 991px) {\n              ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [quantity-container] [minus-icon] {\n                width: var(--ion-wh-20);\n                height: var(--ion-wh-20);\n                border-radius: 50%;\n                border: 1px solid var(--ion-color-darkred);\n                color: var(--ion-color-darkred);\n                position: absolute;\n                left: -75px;\n                top: var(--ion-value-6); }\n              ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [quantity-container] [add-icon] {\n                width: var(--ion-wh-20);\n                height: var(--ion-wh-20);\n                border-radius: 50%;\n                border: 1px solid var(--ion-color-darkred);\n                color: var(--ion-color-darkred);\n                position: absolute;\n                top: var(--ion-value-6);\n                left: -20px; }\n              ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [quantity-container] input {\n                border: none; } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [quantity-container] ion-button {\n              font-family: var(--ion-font-family-2);\n              margin: var(--ion-margin-0);\n              font-size: var(--ion-font-size-13);\n              height: var(--ion-wh-34);\n              --border-radius:var(--ion-value-2);\n              --box-shadow:none; }\n  @media only screen and (max-width: 991px) {\n                ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [quantity-container] ion-button {\n                  height: var(--ion-wh-30);\n                  float: right; } }\n  @media only screen and (max-width: 576px) {\n                ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [quantity-container] ion-button {\n                  font-size: var(--ion-font-size-11); } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [quantity-container] ion-button ion-icon {\n                margin-right: var(--ion-margin-10); }\n  @media only screen and (max-width: 991px) {\n                  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [quantity-container] ion-button ion-icon {\n                    margin-right: var(--ion-margin-0); } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [quantity-container] ion-button:hover {\n                opacity: 0.8; }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [bulk-section] {\n            border: none; }\n  @media only screen and (max-width: 576px) {\n              ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [bulk-section] [video-message] {\n                text-align: left; } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [bulk-section] [video-message] p[contact-txt] {\n              font-family: var(--ion-font-family-2);\n              color: var(--ion-color-darkblack);\n              display: inline-block;\n              margin-right: var(--ion-margin-5); }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [bulk-section] [video-message] [contact-btns] {\n              display: inline-block; }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [bulk-section] [video-message] [contact-btns] a {\n                width: var(--ion-wh-40);\n                height: var(--ion-wh-40);\n                font-size: var(--ion-font-size-20);\n                line-height: var(--ion-value-40);\n                margin-left: var(--ion-margin-5);\n                margin-right: var(--ion-margin-5);\n                background: var(--ion-color-darkblue);\n                cursor: pointer;\n                border-radius: 50%;\n                border: 2px solid var(--ion-color-darkblue);\n                color: var(--ion-color-white);\n                display: inline-block;\n                text-align: center; }\n  @media only screen and (max-width: 576px) {\n                  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [bulk-section] [video-message] [contact-btns] a {\n                    margin-left: var(--ion-margin-0);\n                    width: var(--ion-wh-27);\n                    height: var(--ion-wh-27);\n                    font-size: var(--ion-font-size-13);\n                    line-height: var(--ion-value-22); } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [bulk-section] [bulk-price] h5 {\n              font-family: var(--ion-font-family-2);\n              margin-top: var(--ion-margin-0);\n              color: var(--ion-color-black);\n              font-weight: 700;\n              font-size: var(--ion-font-size-18); }\n  @media only screen and (max-width: 991px) {\n                ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [bulk-section] [bulk-price] h5 {\n                  font-size: var(--ion-font-size-12);\n                  margin-bottom: var(--ion-margin-5);\n                  font-weight: 500; } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [bulk-section] [bulk-price] p {\n              font-size: var(--ion-font-size-14);\n              color: var(--ion-color-darkblack);\n              font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 991px) {\n                ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [bulk-section] [bulk-price] p {\n                  font-size: var(--ion-font-size-12); } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [bulk-section] [bulk-price] p span {\n                font-size: var(--ion-font-size-16);\n                background: var(--ion-color-darkred);\n                color: var(--ion-color-white);\n                padding: var(--ion-padding-0) var(--ion-padding-5);\n                border-radius: var(--ion-value-4); }\n  @media only screen and (max-width: 991px) {\n                  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [bulk-section] [bulk-price] p span {\n                    font-size: var(--ion-font-size-12); } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [share-box] {\n            border-bottom: 1px solid var(--ion-color-greyf2);\n            border-top: 1px solid var(--ion-color-greyf2);\n            padding: var(--ion-padding-12) var(--ion-padding-0);\n            position: relative;\n            float: left;\n            width: 100%; }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [share-box] [title] {\n              font-family: var(--ion-font-family-2);\n              font-size: var(--ion-font-size-14);\n              color: var(--ion-color-darkblack);\n              font-weight: 600;\n              line-height: var(--ion-value-30);\n              float: left;\n              margin-right: 12px; }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [share-box] [socials-box] a {\n              font-size: var(--ion-font-size-16);\n              line-height: var(--ion-value-30);\n              width: var(--ion-wh-30);\n              display: inline-block;\n              color: #bababa;\n              margin: var(--ion-margin-0);\n              text-align: center; }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [share-box] [socials-box] a:hover {\n                color: var(--ion-color-darkred); }\n  ion-content [product-slider] [vendor-name] {\n    margin-bottom: var(--ion-margin-0); }\n  ion-content [product-slider] [vendor-name] a {\n      color: var(--ion-color-darkred);\n      text-decoration: none; }\n  [product-reviews] [reply_comm_div] {\n  width: 100% !important;\n  min-width: 320px;\n  position: relative; }\n  [product-reviews] [reply_comm_div] ion-textarea {\n  padding: 0 10px !important;\n  font-family: var(--ion-font-family-2) !important; }\n  [product-reviews] [reply_comm_div] button {\n  margin-top: 10px;\n  padding: 6px 8px 4px;\n  background: #a01616;\n  color: #fff;\n  float: right; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL2RvY3UvdGovc3JjL2FwcC9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUM7RUE4S0Esa0NBQWE7RUFDWixxQ0FBb0M7RUEwQnBDLDJCQUFBO0VBZytCRSx3QkFBQTtFQVlBLHVCQUFBO0VBQ0YseUJBQUEsRUFBMEI7RUF0ckMzQjtJQUdJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZUFBZTtJQUNmLGNBQWM7SUFDZCxXQUFXLEVBQUE7RUFQZjtJQVVHLGtCQUFrQixFQUFBO0VBVnJCO0lBYUEsa0JBQWtCO0lBQ2YsT0FBTztJQUNQLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLDJCQUEyQixFQUFBO0VBckI5QjtJQXdCQSxrQkFBa0IsRUFBQTtFQXhCbEI7SUEyQkcsU0FBUTtJQUNSLGVBQWM7SUFDZCxZQUFXO0lBQ1gsUUFBUTtJQUNSLGlCQUFnQjtJQUNoQixVQUFVLEVBQUE7RUFoQ2I7SUFtQ0csMEJBQTBCLEVBQUE7RUFuQzdCO0lBc0NHLHFCQUFxQixFQUFBO0VBdEN4QjtJQXlDRyxpQkFBZ0I7SUFDaEIsV0FBVyxFQUFBO0VBMUNkO0lBNkNDLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1Qsb0JBQW9CO0lBQ3BCLGlCQUFnQjtJQUNoQixrQkFBaUIsRUFBQTtFQWpEbEI7SUFvREMsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFBO0VBeERqQjtJQTJERyxlQUFjO0lBQ2QsY0FBYSxFQUFBO0VBNURoQjtNQThESSx3QkFBd0IsRUFBQTtFQTlENUI7SUFrRUcsK0JBQThCO0lBQzlCLGVBQWMsRUFBQTtFQW5FakI7SUFzRUMsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsd0NBQXdDO0lBQ3hDLGVBQWMsRUFBQTtFQTFFZjtJQTZFRyxlQUFlO0lBQ2Ysb0JBQW9CLEVBQUE7RUE5RXZCO0lBaUZHLGVBQWU7SUFDZixXQUFXLEVBQUE7RUFsRmQ7SUFxRkcsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhLEVBQUE7RUF2RmhCO0lBMEZHLGNBQWM7SUFDZCxXQUFXLEVBQUE7RUEzRmQ7SUE4Rkcsa0JBQWtCLEVBQUE7RUE5RnJCO0lBaUdHLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixRQUFRO0lBQ1IsU0FBUztJQUNULHNCQUFzQjtJQUN0QixtQ0FBbUM7SUFDbkMscUNBQXFDLEVBQUE7RUF6R3hDO0lBNkdDLHlCQUF5QjtJQUN6QixxQkFBcUIsRUFBQTtFQTlHdEI7SUFpSEcsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLCtCQUErQjtJQUMvQiw2QkFBNkI7SUFDN0IsMENBQWtDLEVBQUE7RUExSHJDO0lBOEhHLFlBQVksRUFBQTtFQTlIZjtJQWlJQSx1QkFBdUIsRUFBQTtFQWpJdkI7SUFvSUcsNEJBQTRCLEVBQUE7RUFwSS9CO0lBd0lHLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIscUJBQXFCLEVBQUE7RUExSXhCO0lBNklBLGVBQWUsRUFBQTtFQTdJZjtJQWtKRyxvREFBaUQ7SUFDakQseUJBQXlCLEVBQUE7RUFuSjVCO0lBd0pHLFdBQVc7SUFDWCx5QkFBeUIsRUFBQTtFQXpKNUI7SUE4Skcsb0RBQWdEO0lBQ2hELHNCQUFzQixFQUFBO0VBL0p6QjtJQW1LRyxlQUFjO0lBQ2QsU0FBUTtJQUNSLFNBQVEsRUFBQTtFQXJLWDtJQXlLSyxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHlCQUF5QixFQUFBO0VBTzdCO0lBbExEO01BdUxHLG1DQUFjLEVBQUE7TUF2TGpCO1FBcUxTLGFBQ0QsRUFBQSxFQUFDO0VBR1I7SUF6TEQ7TUEyTEcscUNBQWdCO01BQ2xCLG1DQUFjO01BQ2QsbUNBQWM7TUFDZCxzQ0FBaUIsRUFBQTtNQTlMbEI7UUFnTVMsYUFDRCxFQUFBLEVBQUM7RUFDTjtJQWxNSDtNQXNNUyxhQUNELEVBQUEsRUFBQztFQXZNVDtJQTZNQSwrQkFBQTtJQTRJQSw4QkFBQTtJQUVLLHVCQUFBO0lBOFVDLHNCQUFBLEVBQXVCO0VBenFCN0I7TUF5T1MsdUJBQUE7TUF1QkEsZ0JBQUE7TUFDQSxhQUFBO01BcUZBLFlBQUEsRUFBYTtFQXRWdEI7UUFzTmEsa0NBQWtDO1FBQ2xDLCtCQUErQjtRQUMvQixrQ0FBa0M7UUFDbEMscUNBQW9DO1FBQ3BDLHlCQUF5QjtRQUN6QixpQkFBaUI7UUFDakIsZ0NBQWdDO1FBQ2hDLHFDQUFvQztRQUNwQyxvREFBb0Q7UUFDcEQsaUNBQWdDLEVBQUE7RUFDaEM7VUFoT2I7WUFrT2MsK0ZBQWdHO1lBQ2hHLGtDQUFrQztZQUNsQyxZQUFXLEVBQUEsRUFFYjtFQXRPWjtRQTRPVSw4QkFBOEIsRUFBQTtFQUM1QjtVQTdPWjtZQStPWSw4QkFBOEIsRUFBQSxFQWdCaEM7RUEvUFY7VUF1UG1ELHlCQUN4QyxFQUFBO0VBeFBYO1VBMlBtRCx5QkFDeEMsRUFBQTtFQVFEO1FBcFFWO1VBd1FnRCw2QkFBNkIsRUFBQTtRQXhRN0U7VUE0UTZDLDZCQUE0QjtVQUU3RCxlQUFlLEVBQUE7VUE5UTNCO1lBaVJjLGVBQWUsRUFBQSxFQUNoQjtFQWxSYjtRQXdSZSxtQ0FBbUMsRUFBQTtFQUNwQztVQXpSZDtZQTJSWSxtQ0FBbUMsRUFBQSxFQTBDbEM7RUFyVWI7VUErUmtCLGdCQUFnQjtVQUNuQixpQ0FBZ0MsRUFBQTtFQUNsQztZQWpTYjtjQWtTa0IsbUJBQW1CO2NBQ3hCLGtDQUFpQyxFQUFBLEVBRWhDO0VBclNkO1VBd1NrQix3Q0FBd0M7VUFDM0MsaUNBQWdDO1VBQ2hDLHdCQUF1QjtVQUN2QiwrQkFBK0IsRUFBQTtFQUMvQjtZQTVTZjtjQThTaUIsWUFBVztjQUNYLGtCQUFpQjtjQUVqQiwrQkFBK0I7Y0FDL0IsWUFBVztjQUNYLG1DQUFjO2NBQytCLHNDQUFpQjtjQUMvRCxnQ0FBK0IsRUFBQSxFQUVqQztFQXZUZDtVQTBUa0Isd0NBQXdDO1VBQzNDLGlDQUFpQztVQUNqQyxpQkFBaUIsRUFBQTtFQUNoQjtZQTdUaEI7Y0E4VG9CLGdCQUFnQjtjQUNuQixZQUFXO2NBQUUsa0JBQWlCO2NBQzlCLCtCQUErQjtjQUMvQixZQUFXO2NBQ2IsZ0NBQStCLEVBQUEsRUFFaEM7RUFwVWQ7UUF3VWMsaUJBQWEsRUFBQTtFQXhVM0I7VUEyVWUsWUFBVyxFQUFBO0VBRVo7VUE3VWQ7WUErVWlCLGtDQUFrQztZQUNyQyw4QkFBZ0I7WUFDaEIsd0JBQXdCLEVBQUEsRUFFeEI7RUFuVmQ7TUE4VlksZ0NBQWdDO01BQ3RDLHdDQUF1QztNQUN2QywyQ0FBdUM7TUFDdkMsNkJBQTZCO01BQzdCLGdCQUFnQjtNQUNoQixtQ0FBbUM7TUFDbkMsY0FBQTtNQXlEQSxjQUFBLEVBQWU7RUE3WnJCO1FBdVdPLHFCQUFxQjtRQUNHLFdBQVcsRUFBQTtFQUNuQztVQXpXUDtZQTJXUSxhQUFhO1lBQ2MsNkJBQTRCLEVBQUEsRUFnRHhEO0VBNVpQO1VBZ1hZLFdBQVc7VUFDZCxxQ0FBb0M7VUFDTixxQkFBcUI7VUFDbkQsbUNBQW1DO1VBQ0wscUNBQXFDO1VBQ25FLGtCQUFpQjtVQUNqQixnQkFBZTtVQUNmLGlDQUFnQyxFQUFBO0VBQzlCO1lBeFhYO2NBeVhjLDRCQUE0QjtjQUMvQiw2QkFBNEIsRUFBQSxFQWlDOUI7RUEzWlQ7WUE4WHdDLDJCQUEwQixFQUFBO0VBOVhsRTtZQWtZUyxvQ0FBbUM7WUFDbkMsNkJBQTRCO1lBQzVCLGlCQUFnQjtZQUNoQixrQkFBaUIsRUFBQTtFQXJZMUI7WUF5WVUseUVBQXlFO1lBQ3pFLG1CQUFtQjtZQUNuQixxQ0FBcUM7WUFDckMsV0FBVztZQUNYLHVCQUF3QjtZQUN4QixrQkFBa0I7WUFDbEIsYUFBYTtZQUNiLHlCQUF5QjtZQUN6Qix5QkFBMEI7WUFDMUIsd0JBQXlCO1lBQ3pCLGNBQWM7WUFDZCxTQUFTO1lBQ1QsVUFBVSxFQUFBO0VBQ1Q7Y0F0Wlg7Z0JBd1pZLGFBQ0YsRUFBQSxFQUNBO0VBMVpWO1FBaWFXLFdBQVU7UUFDViw4QkFBK0I7UUFNbEMsMEJBQUE7UUFZQSwyQkFBQTtRQUNBLGlCQUFBO1FBaVBBLGdCQUFBLEVBQWlCO0VBblFqQjtVQW5hUjtZQXFhWSw4QkFBK0I7WUFDL0IsMkJBQTBCLEVBQUEsRUFpUS9CO0VBdnFCUDtVQTJhZ0IscUNBQW9DO1VBQ3ZDLGdDQUFnQztVQUNuQyxrQ0FBa0M7VUFDbEMsaUNBQWlDLEVBQUE7RUFDaEM7WUEvYVg7Y0FpYmEsa0NBQWtDLEVBQUEsRUFFbkM7RUFuYlo7VUF3Y2lELGlCQUFBO1VBNkpwQyxnQkFBQSxFQUFpQjtFQXJtQjlCO1lBNGJjLGdDQUFnQztZQUNoQyxrQ0FBa0M7WUFDbEMsaUJBQWlCO1lBQ2pCLGdDQUFnQztZQUNoQyxvRUFBcUU7WUFDckUscUNBQW9DLEVBQUE7RUFDcEM7Y0FsY2Q7Z0JBb2NnQixrQ0FBa0MsRUFBQSxFQUVwQztFQXRjZDtZQTRja0IscUNBQW9DO1lBQ3ZDLHlCQUF5QjtZQUN6QixpQ0FBZ0M7WUFDaEMsbURBQW9EO1lBQ3BELGtDQUFrQztZQUNsQyxrQ0FBa0MsRUFBQTtFQUNsQztjQWxkZjtnQkFvZG9CLGtDQUFrQztnQkFDZSxrQ0FBa0MsRUFBQSxFQUV2RjtFQXZkaEI7WUE2ZHFCLG9DQUFjO1lBQ2QsdUNBQWlCO1lBQ3ZCLGdDQUErQjtZQW1CL0IsZ0JBQUE7WUFNQyxjQUFBO1lBQ0EsY0FBQTtZQVVBLGNBQUE7WUFvQ0EsYUFBQTtZQUNBLHFCQUFBO1lBaUJBLG9CQUFBO1lBQ0Esd0JBQUE7WUFrQkEscUJBQUE7WUFDRCxlQUFBO1lBcUJBLGNBQUEsRUFBZTtFQWxJZjtjQWhlZjtnQkFrZXNCLHlDQUFpQjtnQkFDdkIsZ0NBQStCO2dCQUMvQixnQ0FBK0I7Z0JBQzlCLG1DQUFjO2dCQUNWLHNDQUFpQjtnQkFDakIscUNBQWdCO2dCQUNoQixtQ0FBYyxFQUFBLEVBMkhyQjtFQW5tQmQ7Y0EyZWdCLGlCQUFpQjtjQUNqQiwrQ0FBK0MsRUFBQTtFQUMvQztnQkE3ZWhCO2tCQThlaUIsaUJBQWdCO2tCQUNkLGdDQUFnQyxFQUFBLEVBRW5DO0VBamZoQjtjQXFmaUIsdUJBQXNCO2NBQ3RCLHdCQUF1QixFQUFBO0VBdGZ4QztjQTRmc0IsbUNBQW1DLEVBQUE7RUFDckM7Z0JBN2ZwQjtrQkErZm1CLG1DQUFtQztrQkFDbEMsd0JBQXdCLEVBQUEsRUFFMUI7RUFsZ0JsQjtjQXdnQm1CLGdDQUFnQztjQUNoQyxrQ0FBa0M7Y0FDbEMscUNBQW9DO2NBQ3BDLG1CQUFtQjtjQUNuQixrQ0FBa0M7Y0FDbEMsa0JBQWtCLEVBQUE7RUFDbEI7Z0JBOWdCbkI7a0JBZ2hCb0Isa0NBQWtDLEVBQUEsRUFFbkM7RUFsaEJuQjtjQXFoQmtCLHFDQUFvQztjQUNwQyxtQkFBa0I7Y0FDbEIsaUNBQWlDO2NBQ2pDLGtDQUFrQztjQUNsQyxnQ0FBZ0MsRUFBQTtFQXpoQmxEO2dCQTJoQm9CLFFBQVE7Z0JBQ1Isa0JBQWtCLEVBQUE7RUE1aEJ0QztnQkEraEJ1QiwrQkFBK0I7Z0JBQy9CLG1CQUFrQjtnQkFDckIsZ0NBQWdDLEVBQUE7RUFqaUJwRDtjQTZpQndCLGdDQUFnQztjQUN0QyxrQ0FBa0M7Y0FDbEMsaUNBQWlDO2NBQ2pDLG1CQUFrQjtjQUNsQixrQ0FBaUMsRUFBQTtFQUNoQztnQkFsakJuQjtrQkFvakJzQixnQ0FBZ0M7a0JBQzBCLGtDQUFrQyxFQUFBLEVBRWhHO0VBdmpCbEI7Y0E2akJ1QiwrQkFBK0I7Y0FDckMscUJBQXFCO2NBQ3JCLGtDQUFrQztjQUNsQyxpQ0FBaUM7Y0FDakMsbUJBQWtCLEVBQUE7RUFDbEI7Z0JBbGtCakI7a0JBb2tCb0Isa0NBQWtDLEVBQUEsRUFPckM7RUEza0JqQjtnQkF3a0JnQiwrQkFBK0I7Z0JBQy9CLHFCQUFvQixFQUFBO0VBemtCcEM7Y0FnbEJpQixXQUFVLEVBQUE7RUFFUDtnQkFsbEJwQjtrQkFvbEJvQixrQ0FBa0MsRUFBQSxFQVdwQztFQS9sQmxCO2dCQXdsQm9CLDhCQUE2QjtnQkFDN0Isa0NBQWtDLEVBQUE7RUFDakM7a0JBMWxCckI7b0JBNGxCb0Isa0NBQWtDLEVBQUEsRUFFcEM7RUE5bEJsQjtZQXdtQitDLHdDQUF3QztZQUM1RSwyQ0FBdUM7WUFDdkMsOEJBQThCO1lBQzlCLHFFQUFxRSxFQUFBO0VBQ3JFO2NBNW1CWDtnQkE4bUJjLDZCQUE2QjtnQkFDaEMsZ0JBQWdCO2dCQUNoQiw2QkFBNkI7Z0JBQzdCLDJCQUEyQixFQUFBLEVBa0Q1QjtFQW5xQlY7Y0FvbkJhLGtDQUFrQztjQUNsQyxxQ0FBb0M7Y0FDcEMsZ0NBQWdDO2NBQ2hDLG9CQUFvQjtjQUNwQix5QkFBeUI7Y0FDekIsaUJBQWlCO2NBQ2pCLCtCQUErQixFQUFBO0VBQy9CO2dCQTNuQmI7a0JBNm5CZ0Isa0NBQWtDO2tCQUNsQyxtQkFBa0I7a0JBQ2lDLCtCQUErQjtrQkFDL0Isa0NBQWtDLEVBQUEsRUFFeEY7RUFsb0JiO2NBMm9CZSx5QkFBeUI7Y0FDekIsZ0NBQWdDO2NBQ2hDLHFCQUFxQjtjQUNyQixrQ0FBa0M7Y0FDbEMsaUNBQWlDO2NBQ2pDLG1EQUFvRDtjQUNwRCxxQkFBb0IsRUFBQTtFQUNwQjtnQkFscEJmO2tCQXFwQmlCLDZCQUE2QjtrQkFDN0IscUJBQXFCO2tCQUNyQixrQ0FBbUMsRUFBQSxFQU9wQztFQTlwQmhCO2dCQTJwQmUsMENBQTBDO2dCQUNNLDZCQUE0QixFQUFBO0VBNXBCM0Y7TUE2cUJJLHdDQUF1QztNQUN2QywyQ0FBdUM7TUFDdkMsOEJBQThCO01BQzlCLGdCQUFnQixFQUFBO0VBQ2Y7UUFqckJMO1VBbXJCVyw2QkFBNEIsRUFBQSxFQW9mbkM7RUF2cUNKO1FBa3ZCSSx3QkFBQTtRQUNBLDZCQUFBO1FBa2JBLDRCQUFBLEVBQTZCO0VBcnFDakM7VUEyckJXLHVCQUFBO1VBNkJQLHNCQUFBO1VBQ0EseUJBQUEsRUFBMEI7RUF6dEI5QjtZQThyQlUsZ0JBQWdCO1lBQ2hCLDZCQUE2QjtZQUNoQyxXQUFXO1lBQ1gsa0JBQWtCLEVBQUE7RUFqc0J6QjtjQXNzQmEsNkJBQTZCO2NBQ2hDLHFCQUFxQjtjQUNyQixrQkFBa0I7Y0FDbEIsV0FBVztjQUNzQixXQUFXLEVBQUE7RUExc0J0RDtnQkE2c0J5QywwQ0FBMEM7Z0JBQzFDLDZCQUE2QjtnQkFDM0QsWUFBWTtnQkFDWixXQUFXO2dCQUNYLGNBQWMsRUFBQTtFQWp0QnpCO1lBNHRCUyx5QkFBeUI7WUFDNUIsV0FBVztZQUNYLDBDQUEwQztZQUMxQyxrQkFBaUIsRUFBQTtFQS90QnZCO2NBa3VCVyxrQkFBa0I7Y0FDckIsd0JBQXdCO2NBQ3hCLDBCQUEwQjtjQUMxQixxQ0FBb0MsRUFBQTtFQXJ1QjVDO2dCQXd1QlEsb0NBQW1DO2dCQUNuQyw2QkFBNEI7Z0JBQzVCLGtDQUFrQztnQkFDbEMsa0RBQWlEO2dCQUNqRCxpQ0FBZ0MsRUFBQTtFQTV1QnhDO1VBd3ZCUSxtQ0FBbUM7VUErQ25DLGVBQUE7VUEwQ0EsY0FBQTtVQUNBLGlCQUFBO1VBcUJBLGdCQUFBO1VBQ0EsaUJBQUE7VUFnQkEsZUFBQTtVQUNBLDZCQUFBO1VBa0JBLDRCQUFBO1VBQ0EsMkJBQUE7VUFzQkEsMEJBQUE7VUFDQSxxQkFBQTtVQTREQyxvQkFBQTtVQUNBLDBCQUFBO1VBbUVBLHlCQUFBO1VBQ0Esb0JBQUE7VUF3RkEsbUJBQUE7VUFDSCx3QkFBQTtVQXFDQSx1QkFBQSxFQUF3QjtFQWxxQzlCO1lBMnZCUywrQkFBK0IsRUFBQTtFQUVoQztZQTd2QlI7Y0ErdkJVLG1EQUFtRCxFQUFBLEVBb2FyRDtFQW5xQ1I7WUFtd0JrQiwrQkFBK0I7WUFDeEMsaUJBQWlCO1lBQ2pCLG9CQUFvQjtZQUNwQix5QkFBeUI7WUFDekIscUNBQW9DLEVBQUE7RUF2d0I3QztjQTB3QlUsa0NBQWlDO2NBQ2pDLGlDQUFnQyxFQUFBO0VBQy9CO2dCQTV3Qlg7a0JBOHdCVSxrQ0FBaUM7a0JBQUksa0NBQWlDLEVBQUEsRUF1QnRFO0VBckJGO2dCQWh4QlI7a0JBa3hCVyxrQ0FBaUM7a0JBQ0gsa0NBQWlDLEVBQUEsRUFrQmhFO0VBcnlCVjtnQkF5eEJZLGlCQUFhO2dCQUNiLGlCQUFpQjtnQkFPbEIsa0NBQWtDLEVBQUE7RUFOakM7a0JBM3hCWjtvQkE0eEJpQiw4QkFBZ0I7b0JBQ3BCLGdCQUFnQjtvQkFDakIsd0JBQXdCO29CQUN4Qix1QkFBdUIsRUFBQSxFQUd2QjtFQWx5Qlo7WUF5eUJhLGFBQWEsRUFBQTtFQUNoQjtjQTF5QlY7Z0JBNHlCZSwrQkFBK0I7Z0JBQ0ssaUNBQWlDLEVBQUEsRUFtQ3pFO0VBaDFCWDtjQWd6QmEscUNBQW9DO2NBQ25DLGdCQUFnQjtjQUNoQixrQ0FBa0M7Y0FDbEMsZ0NBQWdDO2NBQ2hDLGdDQUFpQztjQUNqQywrQkFBOEIsRUFBQTtFQUM5QjtnQkF0ekJkO2tCQXd6QmtCLGtDQUFpQztrQkFDaEMsbUJBQW1CLEVBQUEsRUFPcEI7RUFMSjtnQkEzekJkO2tCQTZ6QmtCLGtDQUFpQztrQkFDaEMsbUJBQW1CLEVBQUEsRUFFcEI7RUFoMEJsQjtjQWswQlksNkJBQTZCO2NBQzdCLFdBQVc7Y0FDWCxnQkFBZ0I7Y0FDaEIsZ0NBQWdDO2NBQ2hDLGtDQUFrQztjQUNsQyxxQ0FBb0MsRUFBQTtFQUNwQztnQkF4MEJaO2tCQTAwQmUsa0NBQWlDO2tCQUNqQyxtQkFBbUIsRUFBQSxFQUd0QjtFQTkwQlo7WUFxMUJPLFdBQVUsRUFBQTtFQUVUO2NBdjFCUjtnQkF5MUJvQixrQ0FBa0MsRUFBQSxFQVk5QztFQXIyQlI7Y0E2MUJVLDhCQUE2QjtjQUM3QixrQ0FBa0MsRUFBQTtFQUNsQztnQkEvMUJWO2tCQWkyQlcsa0NBQWlDLEVBQUEsRUFHcEM7RUFwMkJSO1lBNjJCUyxjQUFjO1lBQ2QscUNBQW9DO1lBQ3BDLHFCQUFvQixFQUFBO0VBQ3BCO2NBaDNCVDtnQkFrM0JXLGtDQUFpQyxFQUFBLEVBR25DO0VBcjNCVDtZQTgzQlksa0NBQWtDO1lBQ2xDLHFDQUFvQztZQUN2QyxnQ0FBZ0M7WUFDaEMsZ0NBQWlDO1lBQ2pDLDZCQUE2QjtZQUM3QixtQkFBbUIsRUFBQTtFQW40QjVCO2NBczRCZSxrQ0FBa0M7Y0FDUiwrQkFBK0IsRUFBQTtFQXY0QnhFO1lBKzRCWSxnQ0FBZ0MsRUFBQTtFQS80QjVDO2NBazVCUSxrQ0FBaUM7Y0FDakMsZ0JBQWU7Y0FDZixrQ0FBa0MsRUFBQTtFQXA1QjFDO2NBdzVCZ0MscUNBQW9DO2NBQzdELGdDQUErQjtjQUNSLGdDQUFpQyxFQUFBO0VBQ3hEO2dCQTM1QlA7a0JBNjVCVyxrQ0FBaUM7a0JBQy9CLGtDQUFrQyxFQUFBLEVBRXZDO0VBaDZCUjtZQXk3Qk87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzdRRSxFRGlUQztFQTc5QlY7Y0EwNkJhLGtDQUFrQztjQUNyQyxrQ0FBa0M7Y0FDbEMsZ0NBQWdDO2NBQ2hDLHFDQUFvQztjQUNwQyxpQ0FBZ0MsRUFBQTtFQUNoQztnQkEvNkJWO2tCQWk3QlksbUNBQW1DLEVBQUEsRUFNdEM7RUF2N0JUO2dCQXE3QlcsK0JBQThCLEVBQUE7RUFyN0J6QztZQW0rQmMsZ0RBQWdEO1lBQ3RELDZDQUE2QztZQUM3Qyx3RUFBeUUsRUFBQTtFQUN6RTtjQXQrQlI7Z0JBMCtCYSx1QkFBdUI7Z0JBQzFCLHdCQUF1QjtnQkFDdkIsa0JBQWtCO2dCQUNsQiwwQ0FBMEM7Z0JBQzFDLCtCQUE4QjtnQkFDM0Isa0JBQWtCO2dCQUNyQixXQUFXO2dCQUNYLHVCQUF1QixFQUFBO2NBai9CakM7Z0JBcS9CVyx1QkFBdUI7Z0JBQ3hCLHdCQUF1QjtnQkFDdkIsa0JBQWtCO2dCQUNsQiwwQ0FBMEM7Z0JBQzFDLCtCQUE4QjtnQkFDOUIsa0JBQWtCO2dCQUNsQix1QkFBdUI7Z0JBQ3ZCLFdBQVcsRUFBQTtjQTUvQnJCO2dCQWdnQ1UsWUFBVyxFQUFBLEVBQ1g7RUFqZ0NWO2NBb2dDVyxxQ0FBb0M7Y0FDdEMsMkJBQTBCO2NBQ3hCLGtDQUFrQztjQUNsQyx3QkFBd0I7Y0FDeEIsa0NBQWdCO2NBQ1MsaUJBQWEsRUFBQTtFQUNaO2dCQTFnQ3JDO2tCQTRnQ1ksd0JBQXdCO2tCQUNwQixZQUFZLEVBQUEsRUFvQmxCO0VBakJGO2dCQWhoQ1I7a0JBa2hDVSxrQ0FBa0MsRUFBQSxFQWVsQztFQWppQ1Y7Z0JBc2hDUSxrQ0FBaUMsRUFBQTtFQUNqQztrQkF2aENSO29CQXloQ1MsaUNBQWdDLEVBQUEsRUFHaEM7RUE1aENUO2dCQStoQ1UsWUFBVyxFQUFBO0VBL2hDckI7WUF1aUNXLFlBQVcsRUFBQTtFQUdkO2NBMWlDUjtnQkE0aUNXLGdCQUFlLEVBQUEsRUF1Q2xCO0VBbmxDUjtjQWtqQ2lCLHFDQUFvQztjQUN2QyxpQ0FBZ0M7Y0FDaEMscUJBQXFCO2NBQ1ksaUNBQWlDLEVBQUE7RUFyakNoRjtjQTBqQ2EscUJBQXFCLEVBQUE7RUExakNsQztnQkE2akNXLHVCQUF1QjtnQkFDdkIsd0JBQXlCO2dCQUN6QixrQ0FBa0M7Z0JBQ2xDLGdDQUFnQztnQkFDaEMsZ0NBQWlDO2dCQUNqQyxpQ0FBa0M7Z0JBQ2xDLHFDQUFxQztnQkFDckMsZUFBZTtnQkFDZixrQkFBa0I7Z0JBQ2xCLDJDQUEyQztnQkFDM0MsNkJBQTZCO2dCQUM3QixxQkFBb0I7Z0JBQ2dCLGtCQUFrQixFQUFBO0VBQ3JEO2tCQTFrQ1o7b0JBMmtDb0IsZ0NBQWlDO29CQUNwQyx1QkFBdUI7b0JBQzdCLHdCQUF5QjtvQkFDekIsa0NBQWtDO29CQUNsQyxnQ0FBZ0MsRUFBQSxFQUVoQztFQWpsQ1g7Y0F3bENTLHFDQUFvQztjQUNwQywrQkFBK0I7Y0FDL0IsNkJBQTZCO2NBQzdCLGdCQUFnQjtjQUNoQixrQ0FBa0MsRUFBQTtFQUNsQztnQkE3bENUO2tCQStsQ1Usa0NBQWtDO2tCQUNsQyxrQ0FBaUM7a0JBQUUsZ0JBQWdCLEVBQUEsRUFHcEQ7RUFubUNUO2NBc21DYSxrQ0FBa0M7Y0FDckMsaUNBQWlDO2NBQ2pDLHFDQUFvQyxFQUFBO0VBQ3BDO2dCQXptQ1Y7a0JBMm1DVyxrQ0FBa0MsRUFBQSxFQWNwQztFQXpuQ1Q7Z0JBK21DZSxrQ0FBa0M7Z0JBQ3JDLG9DQUFtQztnQkFDbkMsNkJBQTRCO2dCQUM1QixrREFBa0Q7Z0JBQ2xELGlDQUFpQyxFQUFBO0VBQ2pDO2tCQXBuQ1o7b0JBc25DYyxrQ0FBa0MsRUFBQSxFQUVyQztFQXhuQ1g7WUFnb0NXLGdEQUFnRDtZQUNuRCw2Q0FBOEM7WUFDOUMsbURBQW1EO1lBQ25ELGtCQUFrQjtZQUNsQixXQUFXO1lBQ1gsV0FBVyxFQUFBO0VBcm9DbkI7Y0F3b0NjLHFDQUFvQztjQUN2QyxrQ0FBa0M7Y0FDckMsaUNBQWlDO2NBQ2pDLGdCQUFnQjtjQUNoQixnQ0FBZ0M7Y0FDaEMsV0FBVztjQUNYLGtCQUFrQixFQUFBO0VBOW9DMUI7Y0FvcENlLGtDQUFrQztjQUN4QyxnQ0FBZ0M7Y0FDaEMsdUJBQXdCO2NBQ3hCLHFCQUFxQjtjQUNyQixjQUFjO2NBQ2QsMkJBQTJCO2NBQzNCLGtCQUFrQixFQUFBO0VBMXBDM0I7Z0JBNnBDTywrQkFBOEIsRUFBQTtFQTdwQ3JDO0lBNnFDUSxrQ0FBaUMsRUFBQTtFQTdxQ3pDO01BZ3JDTSwrQkFBK0I7TUFDL0IscUJBQW9CLEVBQUE7RUNoWDNCO0VEd1hJLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7RUNyWHRCO0VEd1hJLDBCQUF5QjtFQUN6QixnREFBZ0QsRUFBQTtFQ3JYcEQ7RUR3WEksZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4gaW9uLWNvbnRlbnRcclxueyAgXHJcblx0W2ZudF9kZXNpZ25de1xyXG5cdCAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ICAgIHJpZ2h0OiAxMCU7XHJcblx0ICAgIGZvbnQtc2l6ZTogMTBweDtcclxuXHQgICAgY29sb3I6ICMzZTM5Mzk7XHJcblx0ICAgIGJvdHRvbTogMnB4O1xyXG5cdH1cclxuXHQucGFuZWx7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLm1pa2VfaWNvbntcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIGJhY2tncm91bmQ6ICM5ZjJmMjI7XHJcbiAgICBwYWRkaW5nOiA5cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcclxufVxyXG4uY2hhdF9pbnB1dHtcclxuXHRwYWRkaW5nLWxlZnQ6IDM3cHg7XHJcbn1cclxuLmNoYXQtd2luZG93e1xyXG4gICAgYm90dG9tOjA7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gICAgei1pbmRleDogOTtcclxufVxyXG4uY2hhdC13aW5kb3cgPiBkaXYgPiAucGFuZWx7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcclxufVxyXG4ucGFuZWwtZGVmYXVsdCB7XHJcbiAgICBib3JkZXItY29sb3I6ICNhMDJmMjI7XHJcbn1cclxuLmljb25fbWluaW17XHJcbiAgICBwYWRkaW5nOjJweCAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLm1zZ19jb250YWluZXJfYmFzZXtcclxuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwIDEwcHggMTBweDtcclxuICBtYXgtaGVpZ2h0OjMwMHB4O1xyXG4gIG92ZXJmbG93LXg6aGlkZGVuO1xyXG59XHJcbi50b3AtYmFyIHtcclxuICBiYWNrZ3JvdW5kOiAjYTAxNjE2O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5tc2dfcmVjZWl2ZXtcclxuICAgIHBhZGRpbmctbGVmdDowO1xyXG4gICAgbWFyZ2luLWxlZnQ6MDtcclxuICAgIHB7XHJcbiAgICBcdG1hcmdpbjogMHB4IDBweCAwLjZyZW0gMDtcclxuICAgIH1cclxufVxyXG4ubXNnX3NlbnR7XHJcbiAgICBwYWRkaW5nLWJvdHRvbToyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MDtcclxufVxyXG4ubWVzc2FnZXMge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgbWF4LXdpZHRoOjEwMCU7XHJcbn1cclxuLm1lc3NhZ2VzID4gcCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW46IDAgMCAwLjJyZW0gMDtcclxuICB9XHJcbi5tZXNzYWdlcyA+IHRpbWUge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3I6ICNjY2M7XHJcbn1cclxuLm1zZ19jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbmltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5hdmF0YXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5iYXNlX3JlY2VpdmUgPiAuYXZhdGFyOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgI0ZGRjtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxufVxyXG5cclxuLmJhc2Vfc2VudCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuLmJhc2Vfc2VudCA+IC5hdmF0YXI6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggcmdiYShibGFjaywgMC4yKTsgXHJcbn1cclxuXHJcbi5tc2dfc2VudCA+IHRpbWV7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmlucHV0LXNtLCAuZm9ybS1ob3Jpem9udGFsIC5mb3JtLWdyb3VwLXNtIC5mb3JtLWNvbnRyb2x7XHJcblx0aGVpZ2h0OiAzM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bi1zbSwgLmJ0bi1ncm91cC1zbT4uYnRuIHtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhMDJmMjI7XHJcbiAgICBib3JkZXItY29sb3I6ICNhMDJmMjI7XHJcbn1cclxuLmJ0bi1wcmltYXJ5IGlvbi1pY29ue1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLm1zZ19jb250YWluZXJfYmFzZTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2tcclxue1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbn1cclxuXHJcbi5tc2dfY29udGFpbmVyX2Jhc2U6Oi13ZWJraXQtc2Nyb2xsYmFyXHJcbntcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxufVxyXG5cclxuLm1zZ19jb250YWluZXJfYmFzZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJcclxue1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsLjMpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcclxufVxyXG5cclxuLmJ0bi1ncm91cC5kcm9wdXB7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIGxlZnQ6MHB4O1xyXG4gICAgYm90dG9tOjA7XHJcbn1cclxuXHRbcmVwbHlfY29tbV9kaXZde1xyXG5cdFx0aW9uLXRleHRhcmVhe1xyXG5cdFx0ICAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdCAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdFx0ICAgIGJvcmRlcjogMXB4IHNvbGlkICNhMDJmMjI7XHJcblx0XHR9XHJcblx0fVxyXG5cdC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItZ3JleSk7XHJcblx0XHRmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTkxcHgpXHJcblx0XHR7IGlvbi1zbGlkZXNcclxuXHRcdFx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCBoZWlnaHQ6MzAwcHhcclxuXHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHQgIC0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG5cdFx0fVxyXG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0e1xyXG5cdCAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmctMCk7XHJcblx0XHQtLXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuXHRcdC0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG5cdFx0LS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmctMCk7aW9uLXNsaWRlc1xyXG5cdFx0XHRcdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0IGhlaWdodDozMDBweFxyXG5cdFx0XHRcdFx0XHRcdFx0IH1cclxuXHRcdH0gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KVxyXG5cdFx0XHRcdFx0XHRcdCB7ICAgIFxyXG5cdFx0XHRcdFx0XHRcdCAgICAgaW9uLXNsaWRlc1xyXG5cdFx0XHRcdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0IGhlaWdodDoyMDBweFxyXG5cdFx0XHRcdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdFx0XHQgfVxyXG5cdFx0LyogIFByb2R1Y3QgRGV0YWlsIFN0YXJ0ICAqL1xyXG5cdFx0ICAgICBbc2luZ2xlLXByb2R1Y3RdXHJcblx0XHRcdCB7XHJcblx0XHRcdFx0IFxyXG4gLyogV3JpdGUgUmV2aWV3IFNlY3Rpb24gU3RhcnQgKi9cclxuXHRcdFx0XHRcdFx0XHRcdFtwcm9kdWN0LXRhYnNdICBcclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0IFtwcm9kdWN0LWFkZC1yZXZpZXddXHJcblx0XHRcdFx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aDRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Jlt0aXRsZV1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0wKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tNSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlM2UzZTM7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTp2YXIoLS1pb24tcGFkZGluZy0xMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0xOCkgdmFyKC0taW9uLXBhZGRpbmctMjApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICB2YXIoLS1pb24tcGFkZGluZy0xNSkgdmFyKC0taW9uLXBhZGRpbmctMCkgdmFyKC0taW9uLXBhZGRpbmctMTApIHZhcigtLWlvbi1wYWRkaW5nLTE1KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyOm5vbmU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdCB9XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0IC8qIFJldmlldyBUYWJsZSBTdGFydCAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgW3Jldmlldy10YWJsZV1cclxuXHRcdFx0XHRcdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMjApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIHsgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCB0YWJsZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgdHJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRkXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAvKiBSZXZpZXcgRW5kcyAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgLypGb3JtIFN0YXJ0Ki9cclxuXHRcdFx0XHRcdFx0XHRcdFx0IGZvcm1cclxuXHRcdFx0XHRcdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpb24tY29sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0W3JhdGVpdC1zbWFsbF1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1ncmV5Yyk7ICBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgaW9uLWljb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgJltmb3JtLWNudF1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBbZm9ybS1ncm91cF1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgeyAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0xNSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTEwKTtcdFx0XHRcdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgaW9uLWxhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2spO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB7ICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTEyKTtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIGlvbi1pbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZ3JleWMpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBib3JkZXItcmFkaXVzOnZhcigtLWlvbi12YWx1ZS00KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgaGVpZ2h0OnZhcigtLWlvbi13aC0zNCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tOCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICBib3JkZXI6bm9uZTsgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGJvcmRlci1yYWRpdXM6MHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0wKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgaGVpZ2h0OmF1dG87XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIC0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZTNlM2UzO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgaW9uLXRleHRhcmVhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1ncmV5Yyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIGJvcmRlci1yYWRpdXM6IHZhcigtLWlvbi12YWx1ZS00KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgbWluLWhlaWdodDogMTEwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHsgICAgbWluLWhlaWdodDogYXV0bztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgYm9yZGVyOm5vbmU7IGJvcmRlci1yYWRpdXM6MHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTApOyBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgaGVpZ2h0OmF1dG87XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZTNlM2UzO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgaW9uLWJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIC0tYm94LXNoYWRvdzpub25lO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgJjpob3ZlclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBvcGFjaXR5OjAuODtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQtLWJvcmRlci1yYWRpdXM6IDRweCFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogdmFyKC0taW9uLXdoLTI4KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0IC8qRm9ybSBFbmRzKi8gXHJcblx0XHRcdFx0XHRcdFx0XHR9XHRcdFxyXG5cdFxyXG4gLyogV3JpdGUgUmV2aWV3IFNlY3Rpb24gRW5kcyAqL1xyXG5cdFx0XHRcdCBcclxuXHRcdFx0XHQgIC8qIFByb2R1Y3QgVGFicyBTdGFydCAqL1xyXG5cdFx0XHRcdFx0IFtwcm9kdWN0LXRhYnNdXHJcblx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0ICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTMwKTtcclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0XHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLDAsMCwuMDgpO1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG5cdFx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0zMCk7XHJcblx0XHRcdFx0XHRcdFx0LyogVGFicyBTdGFydCovIFxyXG5cdFx0XHRcdFx0XHRcdGlvbi1zZWdtZW50XHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG5cdFx0XHRcdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0eyAgXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHRcdFx0XHRcdFx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCFpbXBvcnRhbnRcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdCBpb24tc2VnbWVudC1idXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICBmbG9hdDogbGVmdDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyZXlmOCk7XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZXlmOCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6NjAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2spO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1x0XHQgIG1pbi1oZWlnaHQ6IHZhcigtLWlvbi13aC0zMCk7XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIGJvcmRlci1yYWRpdXM6IDBweCFpbXBvcnRhbnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOnZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgIH1cdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCYuc2VnbWVudC1idXR0b24tY2hlY2tlZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjp2YXIoLS1pb24tY29sb3Itd2hpdGUpOyBcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG92ZXJmbG93OnZpc2libGU7XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQmOmFmdGVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXItd2lkdGg6IDcuNXB4IDUuNXB4IDcuNXB4IDUuNXB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udGVudDogXCJcIjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogIHZhcigtLWlvbi13aC0wKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvdHRvbTogLTE1cHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogdmFyKC0taW9uLXZhbHVlLTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmlnaHQ6ICB2YXIoLS1pb24tdmFsdWUtMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsZWZ0OiAgdmFyKC0taW9uLXZhbHVlLTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0b3A6IGF1dG87ICBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHotaW5kZXg6IDE7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1x0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBkaXNwbGF5Om5vbmVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQvKiBUYWJzIEVuZHMgKi9cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRpb24tbGlzdFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdCAgICBjbGVhcjpib3RoO1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIHBhZGRpbmc6IHZhciggLS1pb24tcGFkZGluZy0yNCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIHBhZGRpbmc6IHZhciggLS1pb24tcGFkZGluZy0xNSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgbWFyZ2luOnZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0LyogRGVzY3JpcHRpb24gVGFiIFN0YXJ0ICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFtkZXNjcmlwdGlvbl1cclxuXHRcdFx0XHRcdFx0XHRcdFx0eyAgICAgICBcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICBmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1pb24tdmFsdWUtMjApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHQgICAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiAgRGVzY3JpcHRpb24gVGFiIEVuZHMgICovXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8qIFJldmlldyBTdGFydCAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRbcHJvZHVjdC1yZXZpZXdzXVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBoNFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Jlt0aXRsZV1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JleSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogdmFyKC0taW9uLXZhbHVlLTIwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiB2YXIoLS1pb24tbWFyZ2luLTApIHZhcigtLWlvbi1tYXJnaW4tMCkgMXZhcigtLWlvbi1tYXJnaW4tMTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIFJldmlldyBTdGFydCAqL1x0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Ryb3Bkb3duLW1lZF1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IHsgIGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6dmFyKC0taW9uLXZhbHVlLTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTQpICB2YXIoLS1pb24tcGFkZGluZy0xMik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTMpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgYm9yZGVyLXJhZGl1czogdmFyKC0taW9uLXZhbHVlLTMwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbcmV2aWV3c11cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1pdGVtXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7ICBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgLS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmctMTUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZy0xNSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDp2YXIoLS1pb24tbWFyZ2luLTIwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyAgIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIC0taW9uLWNvbG9yLWJhc2U6IC0tdmFyKC1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2UzZTNlMztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6dmFyKC0taW9uLW1hcmdpbi0xMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAtLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZy01KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmctNSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmctNSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIC0tcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLTUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQmW3Jldmlldy1jb21tZW50XSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogODBweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuICBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtib3JkZXItbGVmdDpub25lO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgbWFyZ2luLWxlZnQ6IHZhcigtLWlvbi1tYXJnaW4tMCk7XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAvKiBhdmF0YXIgc3RhcnQqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIGlvbi1hdmF0YXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB3aWR0aDp2YXIoLS1pb24td2gtNTUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgaGVpZ2h0OnZhcigtLWlvbi13aC01NSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIC8qYXZhdGFyIGVuZHMqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIC8qbGFiZWwgc3RhcnQqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICBsYWJlbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0taW9uLXBhZGRpbmctMjApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nLTEwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHdpZHRoOiBjYWxjKDEwMCUgLSA1NXB4KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgLyp0aXRsZSBzdGFydCovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBbcmV2aWV3LXRpdGxlXVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBbc3VtbWFyeV1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JleSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogdmFyKC0taW9uLW1hcmdpbi0xMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXN0eWxlOiBpdGFsaWM7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgW2RhdGVdXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHsgICAgIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDpub3JtYWw7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2spOyBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiB2YXIoLS1pb24tbWFyZ2luLTUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGlvbi1pY29uIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dG9wOiAxcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpOyBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBmb250LXdlaWdodDpub3JtYWw7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiB2YXIoLS1pb24tbWFyZ2luLTIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIC8qdGl0bGUgZW5kcyovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgLyogRGVzY3JpcHRpb24gU3RhcnQqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIFt0ZXh0XVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHsgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1pb24tdmFsdWUtMTgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2spO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOnZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgbWFyZ2luLWxlZnQ6IHZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgLyogRGVzY3JpcHRpb24gRW5kcyovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgLyoqUmV2aWV3IEFjdGlvbiBTdGFydCAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIFtyZXZpZXctYWN0aW9uXVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tNik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jazsgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6bm9ybWFsO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIC8qUmV2aWV3IEFjdGlvbiBFbmRzKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IC8qIFJhdGUgU3RhcnQgKi8gICBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICBbcmF0ZWl0LXNtYWxsXVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBjb2xvcjojY2NjO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGlvbi1pY29uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgeyBcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JltmaWxsZWRdXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIGNvbG9yOnZhcigtLWlvbi1jb2xvci15ZWxsb3cpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE2KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgfVx0XHRcdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAvKiBSYXRlIEVuZHMgKi8gXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBSZXZpZXcgRW5kcyAqL1x0XHRcdFx0XHRcdFx0XHRcdFx0ICBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRbc2lkZWJhci13aWRnZXRdXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsMCwwLC4wOCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTIwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiB2YXIoLS1pb24tbWFyZ2luLTIwKSB2YXIoLS1pb24tbWFyZ2luLTApIHZhcigtLWlvbi1tYXJnaW4tMzApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogbm9uZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogdmFyKC0taW9uLW1hcmdpbi0wKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtzZWN0aW9uLXRpdGxlXSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlM2UzZTM7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206bm9uZTtcdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tNSk7XHRcdFx0XHRcdFx0XHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTApO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbc2lkZWJhci13aWRnZXQtYm9keV1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgW3RhZy1saXN0XVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICZbaXRlbV1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2dyZXkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogdmFyKC0taW9uLW1hcmdpbi01KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy02KSAgdmFyKC0taW9uLXBhZGRpbmctMTIpOyBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogIHZhcigtLWlvbi1mb250LXNpemUtMTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQmOmhvdmVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0LyogUmV2aWV3IEVuZHMgKi9cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQgfVxyXG5cdFx0XHQgICAgLyogUHJvZHVjdCBUYWJzIEVuZHMgKi9cclxuXHRcdFx0XHQgXHJcblx0XHRcdFx0IFtkZXRhaWwtYmxvY2tdXHJcblx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6dmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsLjA4KTtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTIwKTtcclxuXHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdFx0XHQgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0XHRcdCB7ICAgIFxyXG5cdFx0XHRcdFx0XHRcdCAgICAgcGFkZGluZzp2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHQgW3Byb2R1Y3Qtdmlldy1hcmVhXVxyXG5cdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0IFtiaWctaW1hZ2VdXHJcblx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdCAgICAgICAgIC8qICBUaHVtYm5haWxzIFN0YXJ0ICAqL1xyXG5cdFx0XHRcdFx0XHRcdCBbdGh1bWJuYWlsLW1haW5dXHJcblx0XHRcdFx0XHRcdFx0IHsgXHJcblx0XHRcdFx0XHRcdFx0ICAgIG1heC13aWR0aDogMTAwcHg7XHJcblx0XHRcdFx0XHRcdFx0ICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0XHRcdFx0XHQgdWxcclxuXHRcdFx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAmW3RodW1ibmFpbC1saXN0XVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCB2YXIoLS1pb24tY29sb3ItZ3JleS1lNSkgc29saWQ7XHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICB3aWR0aDogMTAwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBmbG9hdDogbGVmdDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIGRpc3BsYXk6IGJsb2NrO1x0XHRcdFx0XHRcdFx0XHRcdCAgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgXHJcblx0XHRcdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHQvKiAgVGh1bWJuYWlscyBFbmRzICAqL1xyXG5cdFx0XHRcdFx0LyogIExhcmdlIEltYWdlIFN0YXJ0ICAgKi9cclxuXHRcdFx0XHRcdCBbbGFyZ2UtaW1hZ2VdXHJcblx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHQgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcclxuXHRcdFx0XHRcdFx0XHRmbG9hdDogbGVmdDtcclxuXHRcdFx0XHRcdFx0XHRib3JkZXI6IDFweCB2YXIoLS1pb24tY29sb3ItZ3JleS1lNSkgc29saWQ7XHJcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHRcdFx0XHRcdFx0c3BhblxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdCAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRvcDogdmFyKC0taW9uLXZhbHVlLTEwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmlnaHQ6IHZhcigtLWlvbi12YWx1ZS0xMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdFx0XHRcdFx0XHRcdCZbc2FsZS10ZXh0XVxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzp2YXIoLS1pb24tcGFkZGluZy0yKSB2YXIoLS1pb24tcGFkZGluZy04KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czp2YXIoLS1pb24tdmFsdWUtMik7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdCB9XHJcblx0XHRcdFx0XHQvKiAgTGFyZ2UgSW1hZ2UgRW5kcyAgICovXHJcblx0XHRcdFx0IC8qIFByb2R1Y3QgSW5mbyBCbG9jayAgU3RhcnQqL1xyXG5cdFx0XHRcdFx0IFtwcm9kdWN0LWluZm8tYmxvY2tdXHJcblx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHQgW3Byb2R1Y3QtaW5mb11cclxuXHRcdFx0XHRcdFx0IHsgICBcclxuXHRcdFx0XHRcdFx0ICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1pb24tcGFkZGluZy0yMCk7XHJcblx0XHRcdFx0XHRcdCAgIGlvbi1mYWJcclxuXHRcdFx0XHRcdFx0ICAge1xyXG5cdFx0XHRcdFx0XHQgICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0wKTtcclxuXHRcdFx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdFx0XHQgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdFx0XHRcdCAgIHtcclxuXHRcdFx0XHRcdFx0XHQgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMCkgdmFyKC0taW9uLXBhZGRpbmctMTApO1xyXG5cdFx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0XHRcdCAgIGgxXHJcblx0XHRcdFx0XHRcdCAgIHtcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG5cdFx0XHRcdFx0XHRcdCAgICZbbmFtZV1cclxuXHRcdFx0XHRcdFx0XHQgICB7IFxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgZm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMzYpIDtcclxuXHRcdFx0XHRcdFx0XHRcdCAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2spO1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgZm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMjApIDsgIG1hcmdpbi1ib3R0b206dmFyKC0taW9uLW1hcmdpbi01KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgZm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTQpIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTp2YXIoLS1pb24tbWFyZ2luLTUpO1x0XHRcdFx0XHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdFx0XHRcdCAgIFtmYXZvcml0ZS1idXR0b25dXHJcblx0XHRcdFx0XHRcdFx0XHQgICB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgIGlvbi1idXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIC0tYm94LXNoYWRvdzpub25lO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIG1hcmdpbi10b3A6IC0xNnB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICB7ICAgIC0tYm9yZGVyLXJhZGl1czogMnB4IWltcG9ydGFudDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgbWFyZ2luLXRvcDogLTVweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgaGVpZ2h0OiB2YXIoLS1pb24td2gtMjUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB3aWR0aDogdmFyKC0taW9uLXdoLTI1KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICBcclxuXHRcdFx0XHRcdFx0XHRcdCAgIH1cclxuXHRcdFx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0XHRcdCAgIH1cclxuXHRcdFx0XHRcdFx0ICAgLyogUHJpY2UgU3RhcnQqL1xyXG5cdFx0XHRcdFx0XHQgICBcdFx0XHQgICAgIFtwcm9kdWN0LXByaWNlXVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyAgZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tdmFsdWUtMjApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLXZhbHVlLTUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIFtwcmljZV1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMzApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogdmFyKC0taW9uLXZhbHVlLTUwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAgdmFyKC0taW9uLXZhbHVlLTMpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0yMCkgO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcdFx0XHRcdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xOCkgO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcdFx0XHRcdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0W3ByaWNlLWJlZm9yZS1kaXNjb3VudF0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjYWFhO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IHZhcigtLWlvbi12YWx1ZS01MCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE2KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTE2KSA7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ICAgLyogUHJpY2UgRW5kcyovXHJcblx0XHRcdFx0XHRcdCAgIC8qIFJhdGluZyBTdGFydCAqL1xyXG5cdFx0XHRcdFx0XHQgICBbcmF0ZWl0LXNtYWxsXVxyXG5cdFx0XHRcdFx0XHQgICB7XHJcblx0XHRcdFx0XHRcdFx0IGNvbG9yOiNjY2M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWljb25cclxuXHRcdFx0XHRcdFx0XHQge0BtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdCZbZmlsbGVkXVxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgIGNvbG9yOnZhcigtLWlvbi1jb2xvci15ZWxsb3cpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgZm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTIpIDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgXHJcblx0XHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0IH1cdFx0XHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdFx0XHQgICAvKiBSYXRpbmcgRW5kcyAqL1xyXG5cdFx0XHRcdFx0XHQgICAvKiBSZXZpZXcgU3RhcnQgKi9cclxuXHRcdFx0XHRcdFx0XHQgICBbcmV2aWV3c11cclxuXHRcdFx0XHRcdFx0XHQgICB7XHJcblx0XHRcdFx0XHRcdFx0XHQgICAgW2xua11cclxuXHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjYWFhYWFhO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0IEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTEyKSA7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcclxuXHQgICBcclxuXHRcdFx0XHRcdFx0XHQgICB9XHRcdFx0XHRcdFx0XHQgIFxyXG5cdFx0XHRcdFx0XHQgICAvKlJldmlldyBFbmRzICovXHJcblx0XHRcdFx0XHRcdCAgIC8qQXZhaWxhYmlsaXR5IFNlY3Rpb24gU3RhcnQqLyBcclxuXHRcdFx0XHRcdFx0ICAgIFtzdG9jay1ib3hdXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdCAgc3BhblxyXG5cdFx0XHRcdFx0XHRcdCAge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgIGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogdmFyKC0taW9uLXZhbHVlLTE4KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKCAtLWlvbi1jb2xvci1kYXJrZ3JleSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmW3ZhbHVlXVxyXG5cdFx0XHRcdFx0XHRcdFx0ICB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0ICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblx0XHRcdFx0XHRcdFx0ICB9XHRcdFx0XHRcdFx0XHQgIFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ICAgLypBdmFpbGFiaWxpdHkgU2VjdGlvbiBFbmRzKi9cclxuXHRcdFx0XHRcdFx0ICAgLyogU2hvcnQgRGVzY3JpcHRpb24gU3RhcnQqL1xyXG5cdFx0XHRcdFx0XHQgICBbZGVzY3JpcHRpb24tY29udGFpbmVyXVxyXG5cdFx0XHRcdFx0XHQgICB7ICAgIFxyXG4gIFx0XHRcdFx0XHRcdCAgICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0xNSk7XHJcblx0XHRcdFx0XHRcdFx0IGgyXHJcblx0XHRcdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0XHRcdCBmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XHJcblx0XHRcdFx0XHRcdFx0XHQgZm9udC13ZWlnaHQ6NzAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0IG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tNSk7XHQgXHJcblx0XHRcdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdFx0ICAgICBwXHJcblx0XHRcdFx0XHRcdFx0IHsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHRcdFx0XHRcdFx0XHQgXHJcblx0XHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDp2YXIoLS1pb24tdmFsdWUtMjApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdGNvbG9yOiB2YXIoIC0taW9uLWNvbG9yLWRhcmtncmV5KTtcclxuXHRcdFx0XHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTEyKSA7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMCk7XHQgXHJcblx0XHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdFx0IH1cdFx0XHRcdFx0XHRcdCAgIFxyXG5cdFx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0XHRcdCAgIC8qIFNob3J0IERlc2NyaXB0aW9uIEVuZHMqL1xyXG5cdFx0XHRcdFx0XHQgICAvKiBWZW5kb3IgSW5mbyBTdGFydCovXHJcblx0XHRcdFx0XHRcdCAgICAgIFt2ZW5kb3ItaW5mb11cclxuXHRcdFx0XHRcdFx0XHQgIHtcclxuXHRcdFx0XHRcdFx0XHRcdHBcclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Jlt2ZW5kb3ItbmFtZV1cclxuXHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTMpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi01KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1x0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0xMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdC8qW3ZpZGVvLW1lc3NhZ2VdXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIHRleHQtYWxpZ246bGVmdDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0IHBcclxuXHRcdFx0XHRcdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgJltjb250YWN0LXR4dF1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgeyAgICAgICBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgXHRmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogdmFyKC0taW9uLW1hcmdpbi01KTsgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0IFtjb250YWN0LWJ0bnNdXHJcblx0XHRcdFx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiB2YXIoLS1pb24td2gtMjcpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6ICB2YXIoLS1pb24td2gtMjcpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTMpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogdmFyKC0taW9uLXZhbHVlLTIzKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IHZhciggLS1pb24tbWFyZ2luLTUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IHZhciggLS1pb24tbWFyZ2luLTUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFya2JsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhcmtibHVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdFx0XHR9Ki9cclxuXHRcdFx0XHRcdFx0XHQgIH1cclxuXHRcdFx0XHRcdFx0ICAgIC8qIFZlbmRvciBJbmZvIEVuZHMqL1xyXG5cdFx0XHRcdFx0XHQgICAgLyogUXVhbnRpdHkgU2VjdGlvbiBTdGFydCovXHJcblx0XHRcdFx0XHRcdFx0ICBbcXVhbnRpdHktY29udGFpbmVyXVxyXG5cdFx0XHRcdFx0XHRcdCAgeyBcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZ3JleWYyKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1ncmV5ZjIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0xMikgIHZhcigtLWlvbi1wYWRkaW5nLTApIHZhcigtLWlvbi1wYWRkaW5nLTYpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRbbWludXMtaWNvbl1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIHdpZHRoOiB2YXIoLS1pb24td2gtMjApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OnZhcigtLWlvbi13aC0yMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsZWZ0OiAtNzVweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRvcDogdmFyKC0taW9uLXZhbHVlLTYpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRbYWRkLWljb25dXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IHdpZHRoOiB2YXIoLS1pb24td2gtMjApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OnZhcigtLWlvbi13aC0yMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRvcDogdmFyKC0taW9uLXZhbHVlLTYpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGVmdDogLTIwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyOm5vbmU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHQgIGlvbi1idXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdCAgeyBmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgbWFyZ2luOnZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgIGhlaWdodDp2YXIoIC0taW9uLXdoLTM0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgLS1ib3JkZXItcmFkaXVzOnZhcigtLWlvbi12YWx1ZS0yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tYm94LXNoYWRvdzpub25lO1x0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgaGVpZ2h0OnZhciggLS1pb24td2gtMzApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTEpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0aW9uLWljb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6dmFyKC0taW9uLW1hcmdpbi0xMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDp2YXIoLS1pb24tbWFyZ2luLTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0Jjpob3ZlclxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgb3BhY2l0eTowLjg7XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0ICB9XHJcblx0XHRcdFx0XHRcdFx0ICB9XHJcblx0XHRcdFx0XHRcdCAgICAvKiBRdWFudGl0eSBTZWN0aW9uIEVuZHMqL1xyXG5cdFx0XHRcdFx0XHQgICAgLyogQnVsayBQcmljZSBTdGFydCovXHJcblx0XHRcdFx0XHRcdFx0ICAgW2J1bGstc2VjdGlvbl1cclxuXHRcdFx0XHRcdFx0XHQgICB7IFxyXG5cdFx0XHRcdFx0XHRcdCAgICAgYm9yZGVyOm5vbmU7XHJcblx0XHRcdFx0XHRcdFx0XHQgW3ZpZGVvLW1lc3NhZ2VdXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIHRleHQtYWxpZ246bGVmdDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0IHBcclxuXHRcdFx0XHRcdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgJltjb250YWN0LXR4dF1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgeyAgICAgICBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgXHRmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogdmFyKC0taW9uLW1hcmdpbi01KTsgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0IFtjb250YWN0LWJ0bnNdXHJcblx0XHRcdFx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiB2YXIoLS1pb24td2gtNDApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6ICB2YXIoLS1pb24td2gtNDApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMjApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogdmFyKC0taW9uLXZhbHVlLTQwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IHZhciggLS1pb24tbWFyZ2luLTUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IHZhciggLS1pb24tbWFyZ2luLTUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFya2JsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhcmtibHVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgeyAgICAgICAgICBtYXJnaW4tbGVmdDogdmFyKCAtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICB3aWR0aDogdmFyKC0taW9uLXdoLTI3KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAgdmFyKC0taW9uLXdoLTI3KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IHZhcigtLWlvbi12YWx1ZS0yMik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYnVsay1wcmljZV1cclxuXHRcdFx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGg1XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYmxhY2spO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE4KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206dmFyKC0taW9uLW1hcmdpbi01KTtcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBcclxuXHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2spO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE2KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjp2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApIHZhcigtLWlvbi1wYWRkaW5nLTUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IHZhcigtLWlvbi12YWx1ZS00KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdCB9XHRcclxuXHRcdFx0XHRcdFx0XHQgICB9XHRcclxuXHRcdFx0XHRcdFx0ICAgIC8qIEJ1bGsgUHJpY2UgRW5kcyovXHJcblx0XHRcdFx0XHRcdFx0LyogU2hhcmUgU2VjdGlvbiBTdGFydCAqL1xyXG5cdFx0XHRcdFx0XHRcdFtzaGFyZS1ib3hdXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZ3JleWYyKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICB2YXIoLS1pb24tY29sb3ItZ3JleWYyKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTIpIHZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZsb2F0OiBsZWZ0O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0XHRbdGl0bGVdXHJcblx0XHRcdFx0XHRcdFx0eyAgICAgICBcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgIGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcdFxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IHZhcigtLWlvbi12YWx1ZS0zMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZsb2F0OiBsZWZ0O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEycHg7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFtzb2NpYWxzLWJveF1cclxuXHRcdFx0XHRcdFx0XHR7IFxyXG5cdFx0XHRcdFx0XHRcdCAgIGFcclxuXHRcdFx0XHRcdFx0XHQgICB7XHJcblx0XHRcdFx0XHRcdFx0XHQgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IHZhcigtLWlvbi12YWx1ZS0zMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6ICB2YXIoLS1pb24td2gtMzApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogI2JhYmFiYTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IHZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRcdFx0Jjpob3ZlclxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1x0XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0ICB9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0XHRcdFx0LyogU2hhcmUgU2VjdGlvbiBFbmRzICovXHJcblx0XHRcdFx0XHRcdCAgfVxyXG5cdFx0XHRcdFx0IH0gIFxyXG5cdFx0XHRcdFx0LyogUHJvZHVjdCBJbmZvIEJsb2NrICBFbmRzKi9cclxuXHRcdCAgICAgfVxyXG5cdFx0ICB9IFxyXG5cdCAgIH1cclxuXHQgICAvKiBQcm9kdWN0IFNsaWRlciBTdGFydCovXHJcblx0ICAgW3Byb2R1Y3Qtc2xpZGVyXSBcclxuXHQgICB7XHJcblx0XHRcdCAgIFt2ZW5kb3ItbmFtZV0gXHJcblx0XHRcdCAgIHsgIG1hcmdpbi1ib3R0b206dmFyKC0taW9uLW1hcmdpbi0wKTtcclxuXHRcdFx0XHRcdCAgIGFcclxuXHRcdFx0XHRcdCAgIHtcclxuXHRcdFx0XHRcdFx0IGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XHJcblx0XHRcdFx0XHRcdCB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuXHRcdFx0XHRcdCAgIH1cclxuXHRcdFx0ICAgfVxyXG5cdFx0fVxyXG5cdCAgIC8qIFByb2R1Y3QgU2xpZGVyIEVuZHMqL1xyXG5cdFx0LyogUHJvZHVjdCBEZXRhaWwgRW5kcyAgKi9cclxufVx0XHJcbltwcm9kdWN0LXJldmlld3NdIFtyZXBseV9jb21tX2Rpdl0ge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMzIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuW3Byb2R1Y3QtcmV2aWV3c10gW3JlcGx5X2NvbW1fZGl2XSBpb24tdGV4dGFyZWEge1xyXG4gICAgcGFkZGluZzowIDEwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMikgIWltcG9ydGFudDtcclxufVxyXG5bcHJvZHVjdC1yZXZpZXdzXSBbcmVwbHlfY29tbV9kaXZdIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNnB4IDhweCA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYTAxNjE2O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItZ3JleSk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG4gIC8qICBQcm9kdWN0IERldGFpbCBTdGFydCAgKi9cbiAgLyogUHJvZHVjdCBTbGlkZXIgU3RhcnQqL1xuICAvKiBQcm9kdWN0IFNsaWRlciBFbmRzKi9cbiAgLyogUHJvZHVjdCBEZXRhaWwgRW5kcyAgKi8gfVxuICBpb24tY29udGVudCBbZm50X2Rlc2lnbl0ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTAlO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogIzNlMzkzOTtcbiAgICBib3R0b206IDJweDsgfVxuICBpb24tY29udGVudCAucGFuZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDsgfVxuICBpb24tY29udGVudCAubWlrZV9pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiA5O1xuICAgIGJhY2tncm91bmQ6ICM5ZjJmMjI7XG4gICAgcGFkZGluZzogOXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4OyB9XG4gIGlvbi1jb250ZW50IC5jaGF0X2lucHV0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDM3cHg7IH1cbiAgaW9uLWNvbnRlbnQgLmNoYXQtd2luZG93IHtcbiAgICBib3R0b206IDA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB6LWluZGV4OiA5OyB9XG4gIGlvbi1jb250ZW50IC5jaGF0LXdpbmRvdyA+IGRpdiA+IC5wYW5lbCB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7IH1cbiAgaW9uLWNvbnRlbnQgLnBhbmVsLWRlZmF1bHQge1xuICAgIGJvcmRlci1jb2xvcjogI2EwMmYyMjsgfVxuICBpb24tY29udGVudCAuaWNvbl9taW5pbSB7XG4gICAgcGFkZGluZzogMnB4IDEwcHg7XG4gICAgY29sb3I6ICNmZmY7IH1cbiAgaW9uLWNvbnRlbnQgLm1zZ19jb250YWluZXJfYmFzZSB7XG4gICAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMCAxMHB4IDEwcHg7XG4gICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyB9XG4gIGlvbi1jb250ZW50IC50b3AtYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiAjYTAxNjE2O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gIGlvbi1jb250ZW50IC5tc2dfcmVjZWl2ZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAwOyB9XG4gICAgaW9uLWNvbnRlbnQgLm1zZ19yZWNlaXZlIHAge1xuICAgICAgbWFyZ2luOiAwcHggMHB4IDAuNnJlbSAwOyB9XG4gIGlvbi1jb250ZW50IC5tc2dfc2VudCB7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cbiAgaW9uLWNvbnRlbnQgLm1lc3NhZ2VzIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIG1heC13aWR0aDogMTAwJTsgfVxuICBpb24tY29udGVudCAubWVzc2FnZXMgPiBwIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWFyZ2luOiAwIDAgMC4ycmVtIDA7IH1cbiAgaW9uLWNvbnRlbnQgLm1lc3NhZ2VzID4gdGltZSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiAjY2NjOyB9XG4gIGlvbi1jb250ZW50IC5tc2dfY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDsgfVxuICBpb24tY29udGVudCBpbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlOyB9XG4gIGlvbi1jb250ZW50IC5hdmF0YXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICBpb24tY29udGVudCAuYmFzZV9yZWNlaXZlID4gLmF2YXRhcjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjRkZGO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7IH1cbiAgaW9uLWNvbnRlbnQgLmJhc2Vfc2VudCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7IH1cbiAgaW9uLWNvbnRlbnQgLmJhc2Vfc2VudCA+IC5hdmF0YXI6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgfVxuICBpb24tY29udGVudCAubXNnX3NlbnQgPiB0aW1lIHtcbiAgICBmbG9hdDogcmlnaHQ7IH1cbiAgaW9uLWNvbnRlbnQgLmlucHV0LXNtLCBpb24tY29udGVudCAuZm9ybS1ob3Jpem9udGFsIC5mb3JtLWdyb3VwLXNtIC5mb3JtLWNvbnRyb2wge1xuICAgIGhlaWdodDogMzNweCAhaW1wb3J0YW50OyB9XG4gIGlvbi1jb250ZW50IC5idG4tc20sIGlvbi1jb250ZW50IC5idG4tZ3JvdXAtc20gPiAuYnRuIHtcbiAgICBwYWRkaW5nOiA1cHggMTBweCAhaW1wb3J0YW50OyB9XG4gIGlvbi1jb250ZW50IC5idG4tcHJpbWFyeSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EwMmYyMjtcbiAgICBib3JkZXItY29sb3I6ICNhMDJmMjI7IH1cbiAgaW9uLWNvbnRlbnQgLmJ0bi1wcmltYXJ5IGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDE2cHg7IH1cbiAgaW9uLWNvbnRlbnQgLm1zZ19jb250YWluZXJfYmFzZTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTsgfVxuICBpb24tY29udGVudCAubXNnX2NvbnRhaW5lcl9iYXNlOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTsgfVxuICBpb24tY29udGVudCAubXNnX2NvbnRhaW5lcl9iYXNlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1OyB9XG4gIGlvbi1jb250ZW50IC5idG4tZ3JvdXAuZHJvcHVwIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMHB4O1xuICAgIGJvdHRvbTogMDsgfVxuICBpb24tY29udGVudCBbcmVwbHlfY29tbV9kaXZdIGlvbi10ZXh0YXJlYSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2EwMmYyMjsgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MXB4KSB7XG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgLS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmctMCk7IH1cbiAgICAgIGlvbi1jb250ZW50IGlvbi1zbGlkZXMge1xuICAgICAgICBoZWlnaHQ6IDMwMHB4OyB9IH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIGlvbi1jb250ZW50IHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmctMCk7XG4gICAgICAtLXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZy0wKTtcbiAgICAgIC0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xuICAgICAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmctMCk7IH1cbiAgICAgIGlvbi1jb250ZW50IGlvbi1zbGlkZXMge1xuICAgICAgICBoZWlnaHQ6IDMwMHB4OyB9IH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIGlvbi1jb250ZW50IGlvbi1zbGlkZXMge1xuICAgICAgaGVpZ2h0OiAyMDBweDsgfSB9XG4gIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0ge1xuICAgIC8qIFdyaXRlIFJldmlldyBTZWN0aW9uIFN0YXJ0ICovXG4gICAgLyogV3JpdGUgUmV2aWV3IFNlY3Rpb24gRW5kcyAqL1xuICAgIC8qIFByb2R1Y3QgVGFicyBTdGFydCAqL1xuICAgIC8qIFByb2R1Y3QgVGFicyBFbmRzICovIH1cbiAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIHtcbiAgICAgIC8qIFJldmlldyBUYWJsZSBTdGFydCAqL1xuICAgICAgLyogUmV2aWV3IEVuZHMgKi9cbiAgICAgIC8qRm9ybSBTdGFydCovXG4gICAgICAvKkZvcm0gRW5kcyovIH1cbiAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gW3Byb2R1Y3QtYWRkLXJldmlld10gaDRbdGl0bGVdIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0wKTtcbiAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi01KTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE4KTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTNlM2UzO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmctMTApO1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0xOCkgdmFyKC0taW9uLXBhZGRpbmctMjApO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7IH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gW3Byb2R1Y3QtYWRkLXJldmlld10gaDRbdGl0bGVdIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTE1KSB2YXIoLS1pb24tcGFkZGluZy0wKSB2YXIoLS1pb24tcGFkZGluZy0xMCkgdmFyKC0taW9uLXBhZGRpbmctMTUpO1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTsgfSB9XG4gICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIFtyZXZpZXctdGFibGVdIHtcbiAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMjApOyB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIFtyZXZpZXctdGFibGVdIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTE1KTsgfSB9XG4gICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gW3Jldmlldy10YWJsZV0gdGFibGUgdHIgdGgge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBbcmV2aWV3LXRhYmxlXSB0YWJsZSB0ciB0ZCB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTsgfVxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGZvcm0gaW9uLWNvbCB7XG4gICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMCk7IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBmb3JtIFtyYXRlaXQtc21hbGxdIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZXljKTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGZvcm0gW3JhdGVpdC1zbWFsbF0gaW9uLWljb24ge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9IH1cbiAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gZm9ybVtmb3JtLWNudF0gW2Zvcm0tZ3JvdXBdIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0xNSk7IH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gZm9ybVtmb3JtLWNudF0gW2Zvcm0tZ3JvdXBdIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMTApOyB9IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBmb3JtW2Zvcm0tY250XSBbZm9ybS1ncm91cF0gaW9uLWxhYmVsIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTsgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gZm9ybVtmb3JtLWNudF0gW2Zvcm0tZ3JvdXBdIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7IH0gfVxuICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGZvcm1bZm9ybS1jbnRdIFtmb3JtLWdyb3VwXSBpb24taW5wdXQge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1ncmV5Yyk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0taW9uLXZhbHVlLTQpO1xuICAgICAgICAgIGhlaWdodDogdmFyKC0taW9uLXdoLTM0KTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTgpOyB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBmb3JtW2Zvcm0tY250XSBbZm9ybS1ncm91cF0gaW9uLWlucHV0IHtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMCk7XG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgLS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmctMCk7XG4gICAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLTApO1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZTNlMzsgfSB9XG4gICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gZm9ybVtmb3JtLWNudF0gW2Zvcm0tZ3JvdXBdIGlvbi10ZXh0YXJlYSB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWdyZXljKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1pb24tdmFsdWUtNCk7XG4gICAgICAgICAgbWluLWhlaWdodDogMTEwcHg7IH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGZvcm1bZm9ybS1jbnRdIFtmb3JtLWdyb3VwXSBpb24tdGV4dGFyZWEge1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0wKTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZTNlMzsgfSB9XG4gICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGZvcm1bZm9ybS1jbnRdIGlvbi1idXR0b24ge1xuICAgICAgICAtLWJveC1zaGFkb3c6bm9uZTsgfVxuICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGZvcm1bZm9ybS1jbnRdIGlvbi1idXR0b246aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDAuODsgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBmb3JtW2Zvcm0tY250XSBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDRweCFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IHZhcigtLWlvbi13aC0yOCk7IH0gfVxuICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10ge1xuICAgICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0zMCk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMzApO1xuICAgICAgLyogVGFicyBTdGFydCovXG4gICAgICAvKiBUYWJzIEVuZHMgKi8gfVxuICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBpb24tc2VnbWVudCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZmxvYXQ6IGxlZnQ7IH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gaW9uLXNlZ21lbnQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50OyB9IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmV5ZjgpO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZXlmOCk7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2spOyB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiB2YXIoLS1pb24td2gtMzApO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDsgfSB9XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24gaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogdmFyKC0taW9uLW1hcmdpbi0wKTsgfVxuICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uOmFmdGVyIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiA3LjVweCA1LjVweCA3LjVweCA1LjVweDtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBoZWlnaHQ6IHZhcigtLWlvbi13aC0wKTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogLTE1cHg7XG4gICAgICAgICAgICB3aWR0aDogdmFyKC0taW9uLXZhbHVlLTApO1xuICAgICAgICAgICAgcmlnaHQ6IHZhcigtLWlvbi12YWx1ZS0wKTtcbiAgICAgICAgICAgIGxlZnQ6IHZhcigtLWlvbi12YWx1ZS0wKTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICAgICAgei1pbmRleDogMTsgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbjphZnRlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTsgfSB9XG4gICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGlvbi1saXN0IHtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTI0KTtcbiAgICAgICAgLyogRGVzY3JpcHRpb24gVGFiIFN0YXJ0ICovXG4gICAgICAgIC8qICBEZXNjcmlwdGlvbiBUYWIgRW5kcyAgKi9cbiAgICAgICAgLyogUmV2aWV3IFN0YXJ0ICovXG4gICAgICAgIC8qIFJldmlldyBFbmRzICovIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gaW9uLWxpc3Qge1xuICAgICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTUpO1xuICAgICAgICAgICAgbWFyZ2luOiB2YXIoLS1pb24tbWFyZ2luLTApOyB9IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBpb24tbGlzdCBbZGVzY3JpcHRpb25dIHtcbiAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1pb24tdmFsdWUtMjApO1xuICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2spOyB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBpb24tbGlzdCBbZGVzY3JpcHRpb25dIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTsgfSB9XG4gICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gaW9uLWxpc3QgW3Byb2R1Y3QtcmV2aWV3c10ge1xuICAgICAgICAgIC8qIFJldmlldyBTdGFydCAqL1xuICAgICAgICAgIC8qIFJldmlldyBFbmRzICovIH1cbiAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGlvbi1saXN0IFtwcm9kdWN0LXJldmlld3NdIGg0W3RpdGxlXSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtncmV5KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1pb24tdmFsdWUtMjApO1xuICAgICAgICAgICAgbWFyZ2luOiB2YXIoLS1pb24tbWFyZ2luLTApIHZhcigtLWlvbi1tYXJnaW4tMCkgMXZhciAtLWlvbi1tYXJnaW4tMTA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpOyB9XG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gaW9uLWxpc3QgW3Byb2R1Y3QtcmV2aWV3c10gaDRbdGl0bGVdIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpOyB9IH1cbiAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGlvbi1saXN0IFtwcm9kdWN0LXJldmlld3NdIFtkcm9wZG93bi1tZWRdIC5idG4ge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1pb24tdmFsdWUtMCk7XG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy00KSB2YXIoLS1pb24tcGFkZGluZy0xMik7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTsgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGlvbi1saXN0IFtwcm9kdWN0LXJldmlld3NdIFtkcm9wZG93bi1tZWRdIC5idG4ge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWlvbi12YWx1ZS0zMCk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEwKTsgfSB9XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBpb24tbGlzdCBbcHJvZHVjdC1yZXZpZXdzXSBbcmV2aWV3c10gaW9uLWl0ZW0ge1xuICAgICAgICAgICAgLS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmctMTUpO1xuICAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmctMTUpO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0yMCk7XG4gICAgICAgICAgICAvKiBhdmF0YXIgc3RhcnQqL1xuICAgICAgICAgICAgLyphdmF0YXIgZW5kcyovXG4gICAgICAgICAgICAvKmxhYmVsIHN0YXJ0Ki9cbiAgICAgICAgICAgIC8qdGl0bGUgc3RhcnQqL1xuICAgICAgICAgICAgLyp0aXRsZSBlbmRzKi9cbiAgICAgICAgICAgIC8qIERlc2NyaXB0aW9uIFN0YXJ0Ki9cbiAgICAgICAgICAgIC8qIERlc2NyaXB0aW9uIEVuZHMqL1xuICAgICAgICAgICAgLyoqUmV2aWV3IEFjdGlvbiBTdGFydCAqL1xuICAgICAgICAgICAgLypSZXZpZXcgQWN0aW9uIEVuZHMqL1xuICAgICAgICAgICAgLyogUmF0ZSBTdGFydCAqL1xuICAgICAgICAgICAgLyogUmF0ZSBFbmRzICovIH1cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBpb24tbGlzdCBbcHJvZHVjdC1yZXZpZXdzXSBbcmV2aWV3c10gaW9uLWl0ZW0ge1xuICAgICAgICAgICAgICAgIC0taW9uLWNvbG9yLWJhc2U6IC0tdmFyKC1pb24tY29sb3Itd2hpdGUpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTNlM2UzO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMTApO1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLTUpO1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLTUpO1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmctNSk7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmctNSk7IH0gfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBpb24tbGlzdCBbcHJvZHVjdC1yZXZpZXdzXSBbcmV2aWV3c10gaW9uLWl0ZW1bcmV2aWV3LWNvbW1lbnRdIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpOyB9XG4gICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGlvbi1saXN0IFtwcm9kdWN0LXJldmlld3NdIFtyZXZpZXdzXSBpb24taXRlbVtyZXZpZXctY29tbWVudF0ge1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogdmFyKC0taW9uLW1hcmdpbi0wKTsgfSB9XG4gICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGlvbi1saXN0IFtwcm9kdWN0LXJldmlld3NdIFtyZXZpZXdzXSBpb24taXRlbSBpb24tYXZhdGFyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IHZhcigtLWlvbi13aC01NSk7XG4gICAgICAgICAgICAgIGhlaWdodDogdmFyKC0taW9uLXdoLTU1KTsgfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBpb24tbGlzdCBbcHJvZHVjdC1yZXZpZXdzXSBbcmV2aWV3c10gaW9uLWl0ZW0gbGFiZWwge1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nLTIwKTsgfVxuICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBpb24tbGlzdCBbcHJvZHVjdC1yZXZpZXdzXSBbcmV2aWV3c10gaW9uLWl0ZW0gbGFiZWwge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1pb24tcGFkZGluZy0xMCk7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNTVweCk7IH0gfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBpb24tbGlzdCBbcHJvZHVjdC1yZXZpZXdzXSBbcmV2aWV3c10gaW9uLWl0ZW0gW3Jldmlldy10aXRsZV0gW3N1bW1hcnldIHtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JleSk7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogdmFyKC0taW9uLW1hcmdpbi0xMCk7XG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxuICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBpb24tbGlzdCBbcHJvZHVjdC1yZXZpZXdzXSBbcmV2aWV3c10gaW9uLWl0ZW0gW3Jldmlldy10aXRsZV0gW3N1bW1hcnldIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7IH0gfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBpb24tbGlzdCBbcHJvZHVjdC1yZXZpZXdzXSBbcmV2aWV3c10gaW9uLWl0ZW0gW3Jldmlldy10aXRsZV0gW2RhdGVdIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2spO1xuICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogdmFyKC0taW9uLW1hcmdpbi01KTsgfVxuICAgICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGlvbi1saXN0IFtwcm9kdWN0LXJldmlld3NdIFtyZXZpZXdzXSBpb24taXRlbSBbcmV2aWV3LXRpdGxlXSBbZGF0ZV0gaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIHRvcDogMXB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGlvbi1saXN0IFtwcm9kdWN0LXJldmlld3NdIFtyZXZpZXdzXSBpb24taXRlbSBbcmV2aWV3LXRpdGxlXSBbZGF0ZV0gc3BhbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1pb24tbWFyZ2luLTIpOyB9XG4gICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGlvbi1saXN0IFtwcm9kdWN0LXJldmlld3NdIFtyZXZpZXdzXSBpb24taXRlbSBbdGV4dF0gcCB7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1pb24tdmFsdWUtMTgpO1xuICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMCk7IH1cbiAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gaW9uLWxpc3QgW3Byb2R1Y3QtcmV2aWV3c10gW3Jldmlld3NdIGlvbi1pdGVtIFt0ZXh0XSBwIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1pb24tbWFyZ2luLTApO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTsgfSB9XG4gICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGlvbi1saXN0IFtwcm9kdWN0LXJldmlld3NdIFtyZXZpZXdzXSBpb24taXRlbSBbcmV2aWV3LWFjdGlvbl0ge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTYpO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxuICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBpb24tbGlzdCBbcHJvZHVjdC1yZXZpZXdzXSBbcmV2aWV3c10gaW9uLWl0ZW0gW3Jldmlldy1hY3Rpb25dIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7IH0gfVxuICAgICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGlvbi1saXN0IFtwcm9kdWN0LXJldmlld3NdIFtyZXZpZXdzXSBpb24taXRlbSBbcmV2aWV3LWFjdGlvbl0gYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cbiAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gaW9uLWxpc3QgW3Byb2R1Y3QtcmV2aWV3c10gW3Jldmlld3NdIGlvbi1pdGVtIFtyYXRlaXQtc21hbGxdIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNjY2M7IH1cbiAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gaW9uLWxpc3QgW3Byb2R1Y3QtcmV2aWV3c10gW3Jldmlld3NdIGlvbi1pdGVtIFtyYXRlaXQtc21hbGxdIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7IH0gfVxuICAgICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGlvbi1saXN0IFtwcm9kdWN0LXJldmlld3NdIFtyZXZpZXdzXSBpb24taXRlbSBbcmF0ZWl0LXNtYWxsXSBpb24taWNvbltmaWxsZWRdIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXllbGxvdyk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE2KTsgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gaW9uLWxpc3QgW3Byb2R1Y3QtcmV2aWV3c10gW3Jldmlld3NdIGlvbi1pdGVtIFtyYXRlaXQtc21hbGxdIGlvbi1pY29uW2ZpbGxlZF0ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpOyB9IH1cbiAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGlvbi1saXN0IFtwcm9kdWN0LXJldmlld3NdIFtzaWRlYmFyLXdpZGdldF0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0yMCk7XG4gICAgICAgICAgICBtYXJnaW46IHZhcigtLWlvbi1tYXJnaW4tMjApIHZhcigtLWlvbi1tYXJnaW4tMCkgdmFyKC0taW9uLW1hcmdpbi0zMCk7IH1cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBpb24tbGlzdCBbcHJvZHVjdC1yZXZpZXdzXSBbc2lkZWJhci13aWRnZXRdIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogdmFyKC0taW9uLW1hcmdpbi0wKTsgfSB9XG4gICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGlvbi1saXN0IFtwcm9kdWN0LXJldmlld3NdIFtzaWRlYmFyLXdpZGdldF0gW3NlY3Rpb24tdGl0bGVdIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlM2UzZTM7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0wKTsgfVxuICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBpb24tbGlzdCBbcHJvZHVjdC1yZXZpZXdzXSBbc2lkZWJhci13aWRnZXRdIFtzZWN0aW9uLXRpdGxlXSB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tNSk7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTApOyB9IH1cbiAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gaW9uLWxpc3QgW3Byb2R1Y3QtcmV2aWV3c10gW3NpZGViYXItd2lkZ2V0XSBbc2lkZWJhci13aWRnZXQtYm9keV0gW3RhZy1saXN0XSBhW2l0ZW1dIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JleSk7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi01KTtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1pb24tbWFyZ2luLTUpO1xuICAgICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy02KSB2YXIoLS1pb24tcGFkZGluZy0xMik7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBpb24tbGlzdCBbcHJvZHVjdC1yZXZpZXdzXSBbc2lkZWJhci13aWRnZXRdIFtzaWRlYmFyLXdpZGdldC1ib2R5XSBbdGFnLWxpc3RdIGFbaXRlbV0ge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctNCk7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTApOyB9IH1cbiAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBpb24tbGlzdCBbcHJvZHVjdC1yZXZpZXdzXSBbc2lkZWJhci13aWRnZXRdIFtzaWRlYmFyLXdpZGdldC1ib2R5XSBbdGFnLWxpc3RdIGFbaXRlbV06aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTsgfVxuICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0yMCk7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10ge1xuICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApOyB9IH1cbiAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSB7XG4gICAgICAgIC8qICBMYXJnZSBJbWFnZSBFbmRzICAgKi9cbiAgICAgICAgLyogUHJvZHVjdCBJbmZvIEJsb2NrICBTdGFydCovXG4gICAgICAgIC8qIFByb2R1Y3QgSW5mbyBCbG9jayAgRW5kcyovIH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtiaWctaW1hZ2VdIHtcbiAgICAgICAgICAvKiAgVGh1bWJuYWlscyBTdGFydCAgKi9cbiAgICAgICAgICAvKiAgVGh1bWJuYWlscyBFbmRzICAqL1xuICAgICAgICAgIC8qICBMYXJnZSBJbWFnZSBTdGFydCAgICovIH1cbiAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW2JpZy1pbWFnZV0gW3RodW1ibmFpbC1tYWluXSB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMCk7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtiaWctaW1hZ2VdIFt0aHVtYm5haWwtbWFpbl0gdWxbdGh1bWJuYWlsLWxpc3RdIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMCk7XG4gICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7IH1cbiAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtiaWctaW1hZ2VdIFt0aHVtYm5haWwtbWFpbl0gdWxbdGh1bWJuYWlsLWxpc3RdIGxpIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCB2YXIoLS1pb24tY29sb3ItZ3JleS1lNSkgc29saWQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMCk7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtiaWctaW1hZ2VdIFtsYXJnZS1pbWFnZV0ge1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggdmFyKC0taW9uLWNvbG9yLWdyZXktZTUpIHNvbGlkO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW2JpZy1pbWFnZV0gW2xhcmdlLWltYWdlXSBzcGFuIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB0b3A6IHZhcigtLWlvbi12YWx1ZS0xMCk7XG4gICAgICAgICAgICAgIHJpZ2h0OiB2YXIoLS1pb24tdmFsdWUtMTApO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpOyB9XG4gICAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbYmlnLWltYWdlXSBbbGFyZ2UtaW1hZ2VdIHNwYW5bc2FsZS10ZXh0XSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMCk7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMikgdmFyKC0taW9uLXBhZGRpbmctOCk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0taW9uLXZhbHVlLTIpOyB9XG4gICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1pb24tcGFkZGluZy0yMCk7XG4gICAgICAgICAgLyogUHJpY2UgU3RhcnQqL1xuICAgICAgICAgIC8qIFByaWNlIEVuZHMqL1xuICAgICAgICAgIC8qIFJhdGluZyBTdGFydCAqL1xuICAgICAgICAgIC8qIFJhdGluZyBFbmRzICovXG4gICAgICAgICAgLyogUmV2aWV3IFN0YXJ0ICovXG4gICAgICAgICAgLypSZXZpZXcgRW5kcyAqL1xuICAgICAgICAgIC8qQXZhaWxhYmlsaXR5IFNlY3Rpb24gU3RhcnQqL1xuICAgICAgICAgIC8qQXZhaWxhYmlsaXR5IFNlY3Rpb24gRW5kcyovXG4gICAgICAgICAgLyogU2hvcnQgRGVzY3JpcHRpb24gU3RhcnQqL1xuICAgICAgICAgIC8qIFNob3J0IERlc2NyaXB0aW9uIEVuZHMqL1xuICAgICAgICAgIC8qIFZlbmRvciBJbmZvIFN0YXJ0Ki9cbiAgICAgICAgICAvKiBWZW5kb3IgSW5mbyBFbmRzKi9cbiAgICAgICAgICAvKiBRdWFudGl0eSBTZWN0aW9uIFN0YXJ0Ki9cbiAgICAgICAgICAvKiBRdWFudGl0eSBTZWN0aW9uIEVuZHMqL1xuICAgICAgICAgIC8qIEJ1bGsgUHJpY2UgU3RhcnQqL1xuICAgICAgICAgIC8qIEJ1bGsgUHJpY2UgRW5kcyovXG4gICAgICAgICAgLyogU2hhcmUgU2VjdGlvbiBTdGFydCAqL1xuICAgICAgICAgIC8qIFNoYXJlIFNlY3Rpb24gRW5kcyAqLyB9XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIGlvbi1mYWIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0wKTsgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApIHZhcigtLWlvbi1wYWRkaW5nLTEwKTsgfSB9XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIGgxIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMCk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7IH1cbiAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBoMVtuYW1lXSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0zNik7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTsgfVxuICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIGgxW25hbWVdIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0yMCk7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTUpOyB9IH1cbiAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBoMVtuYW1lXSB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi01KTsgfSB9XG4gICAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBoMVtuYW1lXSBbZmF2b3JpdGUtYnV0dG9uXSBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTZweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpOyB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIGgxW25hbWVdIFtmYXZvcml0ZS1idXR0b25dIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDJweCFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdmFyKC0taW9uLXdoLTI1KTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHZhcigtLWlvbi13aC0yNSk7IH0gfVxuICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBbcHJvZHVjdC1wcmljZV0ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDsgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gW3Byb2R1Y3QtcHJpY2VdIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tdmFsdWUtMjApO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi12YWx1ZS01KTsgfSB9XG4gICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gW3Byb2R1Y3QtcHJpY2VdIFtwcmljZV0ge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMzApO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogdmFyKC0taW9uLXZhbHVlLTUwKTtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1pb24tdmFsdWUtMyk7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7IH1cbiAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBbcHJvZHVjdC1wcmljZV0gW3ByaWNlXSB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMjApO1xuICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDsgfSB9XG4gICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gW3Byb2R1Y3QtcHJpY2VdIFtwcmljZV0ge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE4KTtcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7IH0gfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIFtwcm9kdWN0LXByaWNlXSBbcHJpY2UtYmVmb3JlLWRpc2NvdW50XSB7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICAgICAgICBjb2xvcjogI2FhYTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLWlvbi12YWx1ZS01MCk7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNik7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7IH1cbiAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBbcHJvZHVjdC1wcmljZV0gW3ByaWNlLWJlZm9yZS1kaXNjb3VudF0ge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE2KTtcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7IH0gfVxuICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBbcmF0ZWl0LXNtYWxsXSB7XG4gICAgICAgICAgICBjb2xvcjogI2NjYzsgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gW3JhdGVpdC1zbWFsbF0gaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7IH0gfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIFtyYXRlaXQtc21hbGxdIGlvbi1pY29uW2ZpbGxlZF0ge1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXllbGxvdyk7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNik7IH1cbiAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBbcmF0ZWl0LXNtYWxsXSBpb24taWNvbltmaWxsZWRdIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7IH0gfVxuICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBbcmV2aWV3c10gW2xua10ge1xuICAgICAgICAgICAgY29sb3I6ICNhYWFhYWE7XG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBbcmV2aWV3c10gW2xua10ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7IH0gfVxuICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBbc3RvY2stYm94XSBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMyk7XG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLWlvbi12YWx1ZS0xOCk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtncmV5KTtcbiAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIFtzdG9jay1ib3hdIHNwYW5bdmFsdWVdIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTsgfVxuICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBbZGVzY3JpcHRpb24tY29udGFpbmVyXSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTE1KTsgfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIFtkZXNjcmlwdGlvbi1jb250YWluZXJdIGgyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi01KTsgfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIFtkZXNjcmlwdGlvbi1jb250YWluZXJdIHAge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogdmFyKC0taW9uLXZhbHVlLTIwKTtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JleSk7IH1cbiAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBbZGVzY3JpcHRpb24tY29udGFpbmVyXSBwIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTApOyB9IH1cbiAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gW3ZlbmRvci1pbmZvXSB7XG4gICAgICAgICAgICAvKlt2aWRlby1tZXNzYWdlXVxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICB0ZXh0LWFsaWduOmxlZnQ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdCBwXHJcblx0XHRcdFx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICZbY29udGFjdC10eHRdXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IHsgICAgICAgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgIFx0Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1x0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLWlvbi1tYXJnaW4tNSk7IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdCBbY29udGFjdC1idG5zXVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogdmFyKC0taW9uLXdoLTI3KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAgdmFyKC0taW9uLXdoLTI3KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IHZhcigtLWlvbi12YWx1ZS0yMyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiB2YXIoIC0taW9uLW1hcmdpbi01KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiB2YXIoIC0taW9uLW1hcmdpbi01KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmtibHVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYXJrYmx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0XHRcdFx0fSovIH1cbiAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBbdmVuZG9yLWluZm9dIHBbdmVuZG9yLW5hbWVdIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi01KTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0xMCk7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTsgfVxuICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIFt2ZW5kb3ItaW5mb10gcFt2ZW5kb3ItbmFtZV0ge1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0xMCk7IH0gfVxuICAgICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gW3ZlbmRvci1pbmZvXSBwW3ZlbmRvci1uYW1lXSBhIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpOyB9XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIFtxdWFudGl0eS1jb250YWluZXJdIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZ3JleWYyKTtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZ3JleWYyKTtcbiAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTEyKSB2YXIoLS1pb24tcGFkZGluZy0wKSB2YXIoLS1pb24tcGFkZGluZy02KTsgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gW3F1YW50aXR5LWNvbnRhaW5lcl0gW21pbnVzLWljb25dIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogdmFyKC0taW9uLXdoLTIwKTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHZhcigtLWlvbi13aC0yMCk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtNzVweDtcbiAgICAgICAgICAgICAgICB0b3A6IHZhcigtLWlvbi12YWx1ZS02KTsgfVxuICAgICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gW3F1YW50aXR5LWNvbnRhaW5lcl0gW2FkZC1pY29uXSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHZhcigtLWlvbi13aC0yMCk7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB2YXIoLS1pb24td2gtMjApO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiB2YXIoLS1pb24tdmFsdWUtNik7XG4gICAgICAgICAgICAgICAgbGVmdDogLTIwcHg7IH1cbiAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIFtxdWFudGl0eS1jb250YWluZXJdIGlucHV0IHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7IH0gfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIFtxdWFudGl0eS1jb250YWluZXJdIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuICAgICAgICAgICAgICBtYXJnaW46IHZhcigtLWlvbi1tYXJnaW4tMCk7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMyk7XG4gICAgICAgICAgICAgIGhlaWdodDogdmFyKC0taW9uLXdoLTM0KTtcbiAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOnZhcigtLWlvbi12YWx1ZS0yKTtcbiAgICAgICAgICAgICAgLS1ib3gtc2hhZG93Om5vbmU7IH1cbiAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBbcXVhbnRpdHktY29udGFpbmVyXSBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogdmFyKC0taW9uLXdoLTMwKTtcbiAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDsgfSB9XG4gICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gW3F1YW50aXR5LWNvbnRhaW5lcl0gaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTEpOyB9IH1cbiAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIFtxdWFudGl0eS1jb250YWluZXJdIGlvbi1idXR0b24gaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogdmFyKC0taW9uLW1hcmdpbi0xMCk7IH1cbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gW3F1YW50aXR5LWNvbnRhaW5lcl0gaW9uLWJ1dHRvbiBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogdmFyKC0taW9uLW1hcmdpbi0wKTsgfSB9XG4gICAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBbcXVhbnRpdHktY29udGFpbmVyXSBpb24tYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7IH1cbiAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gW2J1bGstc2VjdGlvbl0ge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lOyB9XG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBbYnVsay1zZWN0aW9uXSBbdmlkZW8tbWVzc2FnZV0ge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7IH0gfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIFtidWxrLXNlY3Rpb25dIFt2aWRlby1tZXNzYWdlXSBwW2NvbnRhY3QtdHh0XSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLWlvbi1tYXJnaW4tNSk7IH1cbiAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBbYnVsay1zZWN0aW9uXSBbdmlkZW8tbWVzc2FnZV0gW2NvbnRhY3QtYnRuc10ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIFtidWxrLXNlY3Rpb25dIFt2aWRlby1tZXNzYWdlXSBbY29udGFjdC1idG5zXSBhIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogdmFyKC0taW9uLXdoLTQwKTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHZhcigtLWlvbi13aC00MCk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTIwKTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogdmFyKC0taW9uLXZhbHVlLTQwKTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogdmFyKC0taW9uLW1hcmdpbi01KTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLWlvbi1tYXJnaW4tNSk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmtibHVlKTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYXJrYmx1ZSk7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBbYnVsay1zZWN0aW9uXSBbdmlkZW8tbWVzc2FnZV0gW2NvbnRhY3QtYnRuc10gYSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1pb24tbWFyZ2luLTApO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdmFyKC0taW9uLXdoLTI3KTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB2YXIoLS1pb24td2gtMjcpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTMpO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogdmFyKC0taW9uLXZhbHVlLTIyKTsgfSB9XG4gICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gW2J1bGstc2VjdGlvbl0gW2J1bGstcHJpY2VdIGg1IHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0wKTtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ibGFjayk7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xOCk7IH1cbiAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBbYnVsay1zZWN0aW9uXSBbYnVsay1wcmljZV0gaDUge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tNSk7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwOyB9IH1cbiAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBbYnVsay1zZWN0aW9uXSBbYnVsay1wcmljZV0gcCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTsgfVxuICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIFtidWxrLXNlY3Rpb25dIFtidWxrLXByaWNlXSBwIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7IH0gfVxuICAgICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gW2J1bGstc2VjdGlvbl0gW2J1bGstcHJpY2VdIHAgc3BhbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE2KTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMCkgdmFyKC0taW9uLXBhZGRpbmctNSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0taW9uLXZhbHVlLTQpOyB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIFtidWxrLXNlY3Rpb25dIFtidWxrLXByaWNlXSBwIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpOyB9IH1cbiAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gW3NoYXJlLWJveF0ge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1ncmV5ZjIpO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1ncmV5ZjIpO1xuICAgICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTIpIHZhcigtLWlvbi1wYWRkaW5nLTApO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTsgfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIFtzaGFyZS1ib3hdIFt0aXRsZV0ge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1pb24tdmFsdWUtMzApO1xuICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4OyB9XG4gICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gW3NoYXJlLWJveF0gW3NvY2lhbHMtYm94XSBhIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE2KTtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLWlvbi12YWx1ZS0zMCk7XG4gICAgICAgICAgICAgIHdpZHRoOiB2YXIoLS1pb24td2gtMzApO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIGNvbG9yOiAjYmFiYWJhO1xuICAgICAgICAgICAgICBtYXJnaW46IHZhcigtLWlvbi1tYXJnaW4tMCk7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gW3NoYXJlLWJveF0gW3NvY2lhbHMtYm94XSBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpOyB9XG4gIGlvbi1jb250ZW50IFtwcm9kdWN0LXNsaWRlcl0gW3ZlbmRvci1uYW1lXSB7XG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0wKTsgfVxuICAgIGlvbi1jb250ZW50IFtwcm9kdWN0LXNsaWRlcl0gW3ZlbmRvci1uYW1lXSBhIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cblxuW3Byb2R1Y3QtcmV2aWV3c10gW3JlcGx5X2NvbW1fZGl2XSB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMzIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG5bcHJvZHVjdC1yZXZpZXdzXSBbcmVwbHlfY29tbV9kaXZdIGlvbi10ZXh0YXJlYSB7XG4gIHBhZGRpbmc6IDAgMTBweCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpICFpbXBvcnRhbnQ7IH1cblxuW3Byb2R1Y3QtcmV2aWV3c10gW3JlcGx5X2NvbW1fZGl2XSBidXR0b24ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiA2cHggOHB4IDRweDtcbiAgYmFja2dyb3VuZDogI2EwMTYxNjtcbiAgY29sb3I6ICNmZmY7XG4gIGZsb2F0OiByaWdodDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/product-details/product-details.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/product-details/product-details.page.ts ***!
  \*********************************************************/
/*! exports provided: ProductDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPage", function() { return ProductDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _choose_location_choose_location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../choose-location/choose-location.page */ "./src/app/choose-location/choose-location.page.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-socket-io */ "./node_modules/ng-socket-io/dist/index.js");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng_socket_io__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var recordrtc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! recordrtc */ "./node_modules/recordrtc/RecordRTC.js");
/* harmony import */ var recordrtc__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(recordrtc__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");












var ProductDetailsPage = /** @class */ (function () {
    function ProductDetailsPage(modalController, toastController, userService, loadingController, activatedRoute, router, events, socket, sanitizer, cdr) {
        var _this = this;
        this.modalController = modalController;
        this.toastController = toastController;
        this.userService = userService;
        this.loadingController = loadingController;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.events = events;
        this.socket = socket;
        this.sanitizer = sanitizer;
        this.cdr = cdr;
        this.tabs = "description";
        this.isAndroid = false;
        this.buttonClickeddrop = false;
        this.comapred_products = [];
        this.comapred_products_list = [];
        this.compare_product_sub_cat = '';
        this.my_wish_products = [];
        this.given_stars = 0;
        this.choosed_wholesale_quantity = 1;
        this.errors = ['', null, undefined];
        this.final_quantity = 1;
        this.my_cart_products = [];
        this.is_loaded = false;
        this.isBrowser = localStorage.getItem('isBrowser');
        this.user_name = localStorage.getItem('sin_auth_user_name');
        this.limit_reached = false;
        this.product_variations = [];
        this.chat_list = [{
                'user_type': 'system',
                'message': 'Hello',
                'type': 'text',
                'date': new Date()
            }, {
                'user_type': 'system',
                'message': 'How may I assist you?',
                'type': 'text',
                'date': new Date()
            }];
        this.variations = [];
        this.selectedVariations = [];
        this.IsApplyVariation = false;
        this.variationPrice = 0;
        this.product_id = Number(activatedRoute.snapshot.paramMap.get('product_id'));
        this.IMAGES_URL = _config__WEBPACK_IMPORTED_MODULE_6__["config"].IMAGES_URL;
        this.shareURL = _config__WEBPACK_IMPORTED_MODULE_6__["config"].BASE_URL + '#/product-details/' + this.product_id;
        var current_date = new Date();
        this.timestamp = current_date.getTime();
        events.subscribe('wishlist:true', function (data) {
            _this.getCartProductsIds();
        });
        // if(this.errors.indexOf(this.product) == -1){
        this.getUpdates().subscribe(function (new_notis) {
            console.log('new_notis');
            console.log(new_notis);
            _this.new_notis_res = new_notis;
            if (_this.new_notis_res.room_id == _this.socket_room_id) {
                _this.chat_list.push(_this.new_notis_res);
            }
        });
        // }
    }
    ProductDetailsPage.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_7__(document).on('click', '#' + this.timestamp + ' .panel-heading span.icon_minim', function (e) {
            var $this = jquery__WEBPACK_IMPORTED_MODULE_7__(this);
            if (!$this.hasClass('panel-collapsed')) {
                $this.parents('.panel').find('.panel-body').slideUp();
                $this.parents('.panel').find('.panel-footer').hide();
                $this.addClass('panel-collapsed');
                $this.removeClass('glyphicon-minus').addClass('glyphicon-plus');
            }
            else {
                $this.parents('.panel').find('.panel-body').slideDown();
                $this.parents('.panel').find('.panel-footer').show();
                $this.removeClass('panel-collapsed');
                $this.removeClass('glyphicon-plus').addClass('glyphicon-minus');
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_7__(window).on('unload', function () {
            alert('end......');
        });
        var self = this;
        jquery__WEBPACK_IMPORTED_MODULE_7__(document).on('click', '#chat_window_1', function (e) {
            var $this = jquery__WEBPACK_IMPORTED_MODULE_7__(this);
            // if(document.getElementsByClassName('chat-window')){
            document.getElementById(self.timestamp).style.display = 'none';
            if (self.chat_list.length > 2) {
                self.storeChat();
            }
            // }
        });
    };
    ProductDetailsPage.prototype.ngAfterViewInit = function () {
        // set the initial state of the video
        // let video:HTMLVideoElement = this.video.nativeElement;
        // video.muted = false;
        // video.controls = true;
        // video.autoplay = false;
    };
    ProductDetailsPage.prototype.startRecording = function () {
        jquery__WEBPACK_IMPORTED_MODULE_7__(".mike_icon").attr('name', 'code-working');
        var mediaConstraints = {
            // video: {
            //   mandatory: {
            //     minWidth: 1280,
            //     minHeight: 720
            //   }
            // },
            audio: true
        };
        navigator.mediaDevices
            .getUserMedia(mediaConstraints)
            .then(this.successCallback.bind(this), this.errorCallback.bind(this));
    };
    ProductDetailsPage.prototype.errorCallback = function (stream) {
        console.log('error.........');
    };
    ProductDetailsPage.prototype.successCallback = function (stream) {
        var options = {
            mimeType: 'audio/mp3',
            audioBitsPerSecond: 128000,
            videoBitsPerSecond: 128000,
            bitsPerSecond: 128000 // if this line is provided, skip above two
        };
        this.stream = stream;
        this.recordRTC = recordrtc__WEBPACK_IMPORTED_MODULE_10__(stream, options);
        this.recordRTC.startRecording();
        // let video: HTMLVideoElement = this.video.nativeElement;
        // video.src = window.URL.createObjectURL(stream);
        // this.toggleControls();
    };
    ProductDetailsPage.prototype.toggleControls = function () {
        // let video: HTMLVideoElement = this.video.nativeElement;
        // video.muted = !video.muted;
        // video.controls = !video.controls;
        // video.autoplay = !video.autoplay;
    };
    ProductDetailsPage.prototype.stopRecording = function () {
        jquery__WEBPACK_IMPORTED_MODULE_7__(".mike_icon").attr('name', 'mic');
        var recordRTC = this.recordRTC;
        recordRTC.stopRecording(this.processVideo.bind(this));
        var stream = this.stream;
        stream.getAudioTracks().forEach(function (track) { return track.stop(); });
        stream.getVideoTracks().forEach(function (track) { return track.stop(); });
    };
    ProductDetailsPage.prototype.processVideo = function (audioVideoWebMURL) {
        // let video: HTMLVideoElement = this.video.nativeElement;
        var recordRTC = this.recordRTC;
        // video.src = audioVideoWebMURL;
        this.toggleControls();
        var recordedBlob = recordRTC.getBlob();
        var self = this;
        recordRTC.getDataURL(function (dataURL) {
            console.log(dataURL);
            self.emitMessage('audio', dataURL);
            // self.download();
        });
    };
    ProductDetailsPage.prototype.download = function () {
        console.log('downloading......');
        this.recordRTC.save('audio.mp3');
    };
    ProductDetailsPage.prototype.playAudio = function (url) {
        this.audio = new Audio();
        this.audio.src = url;
        this.audio.load();
        this.audio.play();
    };
    ProductDetailsPage.prototype.ionViewDidEnter = function () {
        // this.chat_list = [];
        this.comapred_products = [];
        this.comapred_products_list = [];
        localStorage.removeItem('sin_wholesale_items');
        var token = localStorage.getItem('sin_auth_token');
        this.userId = this.userService.decryptData(token, _config__WEBPACK_IMPORTED_MODULE_6__["config"].ENC_SALT);
        if (this.userId == 0) {
            this.loginId = localStorage.getItem('guestUserId');
        }
        else {
            this.loginId = this.userId;
        }
        var all_compared = JSON.parse(localStorage.getItem('sin_compare_products'));
        if (this.errors.indexOf(all_compared) == -1) {
            this.comapred_products_list = all_compared;
            var self = this;
            this.comapred_products_list.forEach(function (pro) {
                self.comapred_products.push(pro.product_id.toString());
            });
        }
        else {
            this.comapred_products_list = [];
        }
        if (this.isBrowser == 'true') {
            this.max_compare = 4;
        }
        else {
            this.max_compare = 3;
        }
        this.compare_product_sub_cat = localStorage.getItem('sin_compare_product_sub_cat');
        this.getCartProductsIds();
        if (this.userId != 0) {
            this.addProductViewCount();
        }
    };
    ProductDetailsPage.prototype.ionViewWillLeave = function () {
        if (this.chat_list.length > 0) {
            this.storeChat();
        }
    };
    ProductDetailsPage.prototype.storeChat = function () {
        this.userService.postData({ product_id: this.product_id, user_id: this.userId, chat_array: this.chat_list, to_user_id: this.product.product_added_by, to_user_type: this.product.product_user_type }, 'storeChat').subscribe(function (result) {
            console.log('chat stored');
            console.log(result);
        });
    };
    ProductDetailsPage.prototype.getProductDetails = function () {
        var _this = this;
        this.userService.postData({ product_id: this.product_id, user_id: this.userId }, 'getProductDetails').subscribe(function (result) {
            _this.stopLoading();
            _this.product = result.products;
            _this.socket_room_id = _this.product.product_user_type + '_' + _this.product.product_added_by + '_' + _this.loginId;
            console.log(_this.socket_room_id);
            console.log(_this.product);
            //this.variations = this.product.product_variations;
            var product_variations = _this.product.product_variations;
            if (product_variations != '') {
                var all_variations = [];
                for (var key in product_variations) {
                    var array = product_variations[key];
                    console.log(array);
                    var afterRemoveRedundantEntries = [];
                    for (var i = 0; i < array.length; i++) {
                        var IsValueExist = false;
                        for (var j = 0; j < afterRemoveRedundantEntries.length; j++) {
                            console.log(array[i].value);
                            console.log(afterRemoveRedundantEntries[j].value);
                            if (array[i].value == afterRemoveRedundantEntries[j].value) {
                                IsValueExist = true;
                            }
                        }
                        if (!IsValueExist) {
                            afterRemoveRedundantEntries.push(array[i]);
                        }
                    }
                    all_variations.push({ name: key, values: afterRemoveRedundantEntries });
                    _this.variations.push({ name: key, values: array });
                }
                _this.product_variations = all_variations;
            }
            console.log(_this.product_variations);
            _this.is_loaded = true;
            _this.getRelatedProducts();
            jquery__WEBPACK_IMPORTED_MODULE_7__("#minim_chat_window").trigger("click");
        }, function (err) {
            _this.stopLoading();
            _this.product = [];
        });
    };
    ProductDetailsPage.prototype.getCartProductsIds = function () {
        var _this = this;
        this.presentLoading();
        this.userService.postData({ user_id: this.userId }, 'getCartProductsIds').subscribe(function (result) {
            _this.my_cart_products = result.products;
            _this.my_wish_products = result.wishlist;
            _this.getProductDetails();
        }, function (err) {
            _this.stopLoading();
            _this.my_cart_products = [];
            _this.my_wish_products = [];
        });
    };
    ProductDetailsPage.prototype.getRelatedProducts = function () {
        var _this = this;
        this.userService.postData({ limit: '15', cat_id: this.product.product_sub_cat, product_id: this.product_id }, 'relatedProducts').subscribe(function (result) {
            _this.related_products = result.products;
        }, function (err) {
            _this.related_products = [];
        });
    };
    ProductDetailsPage.prototype.compareChecked = function (event) {
        if (event.detail.checked == true) {
            if (this.comapred_products.indexOf(this.product_id) == -1) {
                if (this.comapred_products.length == this.max_compare) {
                    this.limit_reached = true;
                    this.presentToast("You can't compare more than " + this.max_compare + " products.", 'danger');
                }
                else {
                    if (this.comapred_products.length == 0) {
                        this.compare_product_sub_cat = this.product.product_sub_cat;
                        localStorage.setItem('sin_compare_product_sub_cat', this.compare_product_sub_cat);
                        this.comapred_products.push(this.product_id);
                        this.comapred_products_list.push(this.product);
                        localStorage.setItem('sin_compare_products', JSON.stringify(this.comapred_products_list));
                    }
                    else {
                        if (this.compare_product_sub_cat == this.product.product_sub_cat) {
                            this.comapred_products.push(this.product_id);
                            this.comapred_products_list.push(this.product);
                            localStorage.setItem('sin_compare_products', JSON.stringify(this.comapred_products_list));
                        }
                        else {
                            this.limit_reached = true;
                            this.presentToast("You can compare only same type of products.", 'danger');
                        }
                    }
                }
            }
        }
        else {
            var index = this.comapred_products.indexOf(this.product_id);
            if (index >= 0) {
                this.comapred_products.splice(index, 1);
                this.comapred_products_list.splice(index, 1);
                localStorage.setItem('sin_compare_products', JSON.stringify(this.comapred_products_list));
            }
        }
    };
    ProductDetailsPage.prototype.removeCompared = function (index) {
        this.comapred_products.splice(index, 1);
        this.comapred_products_list.splice(index, 1);
        localStorage.setItem('sin_compare_products', JSON.stringify(this.comapred_products_list));
    };
    ProductDetailsPage.prototype.addProductViewCount = function () {
        this.userService.postData({ user_id: this.userId, product_id: this.product_id }, 'addProductViewCount').subscribe(function (result) {
            // added
        }, function (err) {
            console.log('Error');
        });
    };
    ProductDetailsPage.prototype.plusQuantity = function () {
        this.final_quantity = this.final_quantity + 1;
    };
    ProductDetailsPage.prototype.plusWholeSaleQuantity = function () {
        this.choosed_wholesale_quantity = this.choosed_wholesale_quantity + 1;
    };
    ProductDetailsPage.prototype.minusQuantity = function () {
        if (this.final_quantity != 1) {
            this.final_quantity = this.final_quantity - 1;
        }
    };
    ProductDetailsPage.prototype.minusWholeSaleQuantity = function () {
        if (this.choosed_wholesale_quantity != 1) {
            this.choosed_wholesale_quantity = this.choosed_wholesale_quantity - 1;
        }
    };
    ProductDetailsPage.prototype.checkOutWholeSale = function (wholesale_price, wholesale_products) {
        var product_arr = [];
        product_arr.push({ product_id: this.product_id, product_quantity: (this.choosed_wholesale_quantity * wholesale_products), product_purchase_price: (this.choosed_wholesale_quantity * wholesale_price), product_sale_price: 0 });
        localStorage.setItem('sin_wholesale_items', JSON.stringify(product_arr));
        this.router.navigate(['/checkout/direct']);
    };
    ProductDetailsPage.prototype.addToCart = function (product_id, product_sale_price, product_purchase_price, quantity) {
        if (quantity === void 0) { quantity = null; }
        // if(this.userId == 0){
        //   this.router.navigate(['/login']);
        // }
        // else{
        if (this.product_variations == '') {
            this.productAddToCart(product_id, product_sale_price, product_purchase_price, quantity = null);
        }
        else {
            if (this.selectedVariations.length < this.product_variations.length - 1) {
                //error
                this.presentToast('Error,Please select all variations.', 'danger');
            }
            else {
                this.productAddToCart(product_id, product_sale_price, product_purchase_price, quantity = null);
            }
        }
        // }
    };
    ProductDetailsPage.prototype.productAddToCart = function (product_id, product_sale_price, product_purchase_price, quantity) {
        var _this = this;
        if (quantity === void 0) { quantity = null; }
        quantity = quantity == null ? this.final_quantity : quantity;
        this.presentLoading();
        this.userService.postData({ product_id: product_id, user_id: this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId, product_qty: quantity, is_variation: this.IsApplyVariation, product_price: this.variationPrice, product_variations: this.selectedVariations }, 'addTocart').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                _this.my_cart_products.push(product_id);
                var p_price;
                if (_this.errors.indexOf(product_sale_price) == -1 && product_sale_price != product_purchase_price) {
                    p_price = product_sale_price;
                }
                else {
                    p_price = product_purchase_price;
                }
                _this.events.publish('cart_updated:true', { items_in_cart: _this.my_cart_products.length, cart_price: p_price, isAdd: true });
                _this.presentToast('Product added to cart.', 'success');
            }
            else {
                _this.presentToast('Error,Please try after some time.', 'danger');
            }
        }, function (err) {
            _this.stopLoading();
            _this.presentToast('Error,Please try after some time.', 'danger');
        });
    };
    // addToWish(product_id){
    //   if(this.userId == 0){
    //     this.router.navigate(['/login']);
    //   }
    //   else{
    //     this.presentLoading();
    //     this.userService.postData({product_id:product_id,user_id:this.userId},'addTowish').subscribe((result) => {
    //       this.stopLoading();
    //       if(result.status == 1){
    //         this.my_wish_products.push(product_id);
    //         this.presentToast('Product added to wishlist.','success');
    //       }
    //       else{
    //         this.presentToast('Error,Please try after some time.','danger');
    //       }
    //     },
    //     err => {
    //       this.stopLoading();
    //       this.presentToast('Error,Please try after some time.','danger');
    //     });
    //   }
    // }
    ProductDetailsPage.prototype.addToWish = function (product_id) {
        // if(this.userId == 0){
        //   this.router.navigate(['/login']);
        // }
        // else{
        this.presentAlert(product_id);
        // this.presentLoading();
        // this.userService.postData({product_id:product_id,user_id:this.userId},'addTowish').subscribe((result) => {
        //   this.stopLoading();
        //   if(result.status == 1){
        //     this.my_wish_products.push(product_id);
        //     this.presentToast('Product added to wishlist.','success');
        //   }
        //   else{
        //     this.presentToast('Error,Please try after some time.','danger');
        //   }
        // },
        // err => {
        //   this.stopLoading();
        //   this.presentToast('Error,Please try after some time.','danger');
        // });
        // }
    };
    ProductDetailsPage.prototype.presentAlert = function (product_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                localStorage.setItem('product', product_id);
                // const modal = await this.modalController.create({
                //   component: WishlistListingPage,
                //   componentProps: { value: product_id }
                // });
                // return await modal.present();
                this.userService.postData({ product_id: localStorage.getItem('product'), user_id: this.userId == 0 ? localStorage.getItem('guestUserId') : this.userId, wish_title: null, is_new: this.userId == 0 ? 3 : 0, wishlist_id: null }, 'addWishlistNew').subscribe(function (result) {
                    _this.stopLoading();
                    if (result.status == 1) {
                        // this.my_wish_products.push(product_id);
                        _this.presentToast('Product added to wishlist.', 'success');
                        _this.events.publish('wishlist:true', {});
                        // this.modalCtrl.dismiss();
                    }
                    else {
                        _this.presentToast('Error,Please try after some time.', 'danger');
                    }
                }, function (err) {
                    _this.stopLoading();
                    _this.presentToast('Error,Please try after some time.', 'danger');
                });
                return [2 /*return*/];
            });
        });
    };
    ProductDetailsPage.prototype.messages = function () {
        var vendor_type = 0;
        if (this.product.product_user_type == 'Admin') {
            vendor_type = 1;
        }
        localStorage.setItem('sin_chat_product_name', this.product.product_name);
        localStorage.setItem('sin_chat_pro_unique_id', this.product.pro_unique_id);
        this.router.navigate(['/messages/' + this.product_id + '/' + vendor_type + '/' + this.product.product_added_by]);
    };
    ProductDetailsPage.prototype.onRatingSet = function (stars) {
        this.given_stars = stars;
    };
    ProductDetailsPage.prototype.addReview = function (review_text) {
        if (this.errors.indexOf(review_text) >= 0) {
            this.presentToast('Please enter your reviews.', 'danger');
            return false;
        }
        else {
            this.postReview(review_text, 0);
        }
    };
    ProductDetailsPage.prototype.replyReview = function (review_id, reply_comment, r_ind) {
        if (this.errors.indexOf(reply_comment) >= 0) {
            this.presentToast('Please enter your reply.', 'danger');
            return false;
        }
        else {
            this.postReview(reply_comment, review_id, r_ind);
        }
    };
    ProductDetailsPage.prototype.atob = function (string) {
        return atob(string);
    };
    ProductDetailsPage.prototype.postReview = function (review_text, review_id, index) {
        var _this = this;
        if (index === void 0) { index = null; }
        this.presentLoading();
        this.userService.postData({ product_id: this.product_id, user_id: this.userId, review: review_text, stars: this.given_stars, parent: review_id }, 'addReview').subscribe(function (result) {
            _this.stopLoading();
            if (result.status == 1) {
                if (review_id == 0) {
                    _this.review_text = '';
                    _this.product.product_reviews.splice(0, 0, result.data);
                    _this.given_stars = 0;
                    _this.presentToast('Thanks! Your review has been posted.', 'success');
                }
                else {
                    _this.show_reply_text = '';
                    _this.presentToast('Thanks! Your reply has been posted.', 'success');
                    if (_this.errors.indexOf(_this.product.product_reviews[index]['review_comments']) >= 0) {
                        _this.product.product_reviews[index]['review_comments'] = [];
                    }
                    _this.product.product_reviews[index]['review_comments'].splice(0, 0, result.data);
                }
            }
            else {
                _this.presentToast('Error,Please try after some time.', 'danger');
            }
        }, function (err) {
            _this.given_stars = 0;
            _this.stopLoading();
            _this.presentToast('Error,Please try after some time.', 'danger');
        });
    };
    ProductDetailsPage.prototype.addChat = function (message) {
        if (this.errors.indexOf(message) == -1) {
            this.message = '';
            this.emitMessage('text', message);
        }
    };
    ProductDetailsPage.prototype.emitMessage = function (type, message) {
        this.socket.connect();
        var current_date = new Date();
        var socket_msg_id = this.product.product_user_type + '_' + this.product.product_added_by + '_' + this.loginId;
        var socket_to_id = this.product.product_user_type + '_' + this.product.product_added_by;
        var start_msg = 'Chat started for product ' + this.product.product_name + ' (' + this.product.pro_unique_id + ').';
        this.socket.emit('send_notification', { message: message, date: current_date, user_type: 'user', room_id: socket_msg_id, to_id: socket_to_id, user_id: this.loginId, start_msg: start_msg, user_name: (this.userId == 0 ? 'Unknown' : this.user_name), type: type });
        this.chat_list.push({ message: message, date: current_date, user_type: 'user', type: type });
    };
    ProductDetailsPage.prototype.getUpdates = function () {
        var self = this;
        var observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_9__["Observable"](function (observer) {
            self.socket.on('new_notification', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    ProductDetailsPage.prototype.onButtonClickdrop = function () {
        this.buttonClickeddrop = !this.buttonClickeddrop;
    };
    ProductDetailsPage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _choose_location_choose_location_page__WEBPACK_IMPORTED_MODULE_3__["ChooseLocationPage"],
                            componentProps: { value: 123 }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductDetailsPage.prototype.presentToast = function (message, color) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 3000,
                            position: 'bottom',
                            color: color,
                            showCloseButton: true
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductDetailsPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create()];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductDetailsPage.prototype.stopLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.loading != undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loading.dismiss()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        self = this;
                        setTimeout(function () {
                            self.stopLoading();
                        }, 1000);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ;
    ProductDetailsPage.prototype.selectedValue = function (variation, value) {
        // console.log(variation);
        // console.log(value);
        if (this.selectedVariations.length == 0) {
            var name_1 = '';
            for (var i = 0; i < variation.values.length; i++) {
                if (variation.values[i].id == value) {
                    name_1 = variation.values[i].value;
                }
            }
            this.selectedVariations.push({
                name: variation.name,
                selectedValue: value,
                value: name_1
            });
        }
        else {
            var IsVariationExist = false;
            var index = 0;
            for (var i = 0; i < this.selectedVariations.length; i++) {
                if (variation.name == this.selectedVariations[i].name) {
                    IsVariationExist = true;
                    index = i;
                }
            }
            if (!IsVariationExist) {
                var name_2 = '';
                for (var i = 0; i < variation.values.length; i++) {
                    if (variation.values[i].id == value) {
                        name_2 = variation.values[i].value;
                    }
                }
                this.selectedVariations.push({
                    name: variation.name,
                    selectedValue: value,
                    value: name_2
                });
            }
            else {
                var name_3 = '';
                for (var i = 0; i < variation.values.length; i++) {
                    if (variation.values[i].id == value) {
                        name_3 = variation.values[i].value;
                    }
                }
                this.selectedVariations[index] = {
                    name: variation.name,
                    selectedValue: value,
                    value: name_3
                };
            }
        }
        //here calculate variation
        //get only filtered variation values based on selected variation value
        var ExistedIndex = [];
        var selectedVariationIndex = 0;
        for (var j = 0; j < this.variations.length; j++) {
            if (variation.name == this.variations[j].name) {
                for (var k = 0; k < this.variations[j].values.length; k++) {
                    if (value == this.variations[j].values[k].id) {
                        ExistedIndex.push(k);
                    }
                }
            }
        }
        //return only filtered variation values based on selected variation value
        for (var j = 0; j < this.variations.length; j++) {
            var IsVariationSelected = false;
            for (var h = 0; h < this.selectedVariations.length; h++) {
                if (this.selectedVariations[h].name == this.variations[j].name) {
                    IsVariationSelected = true;
                    selectedVariationIndex = h;
                }
            }
            if (!IsVariationSelected) {
                var filteredValuesArray = [];
                for (var k = 0; k < ExistedIndex.length; k++) {
                    filteredValuesArray.push(this.variations[j].values[ExistedIndex[k]]);
                }
                this.product_variations[j] = [];
                this.product_variations[j] = {
                    values: filteredValuesArray,
                    name: this.variations[j].name
                };
            }
            else {
                // if variation selected
                //get all varations array which we have to skip before maing condition
                var skipedVariationsArray = [];
                var lastSkipedVariationIndex = 0;
                for (var i = 0; i < this.selectedVariations.length; i++) {
                    if (this.selectedVariations[i].name == variation.name) {
                        lastSkipedVariationIndex = i;
                    }
                }
                //all skiped varations list
                for (var i = 0; i <= lastSkipedVariationIndex; i++) {
                    skipedVariationsArray.push(this.selectedVariations[i].name);
                }
                var IsVariationExistInSkippedArray = false;
                for (var m = 0; m < skipedVariationsArray.length; m++) {
                    if (skipedVariationsArray[m] == this.variations[j].name) {
                        IsVariationExistInSkippedArray = true;
                    }
                }
                if (!IsVariationExistInSkippedArray) {
                    for (var n = 0; n < this.selectedVariations.length; n++) {
                        if (this.selectedVariations[n].name == this.variations[j].name) {
                            this.selectedVariations.splice(n, 1);
                        }
                    }
                    var filteredValuesArray = [];
                    for (var k = 0; k < ExistedIndex.length; k++) {
                        filteredValuesArray.push(this.variations[j].values[ExistedIndex[k]]);
                    }
                    this.product_variations[j] = [];
                    this.product_variations[j] = {
                        values: filteredValuesArray,
                        name: this.variations[j].name
                    };
                }
            }
        }
        if (this.selectedVariations.length == this.variations.length - 1) {
            for (var i = 0; i < this.product_variations.length; i++) {
                if (this.product_variations[i].name == 'price') {
                    this.IsApplyVariation = true;
                    this.variationPrice = this.product_variations[i].values[0];
                }
            }
        }
        else {
            this.IsApplyVariation = false;
        }
        this.cdr.detectChanges();
        console.log(this.product_variations);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('video'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductDetailsPage.prototype, "video", void 0);
    ProductDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-details',
            template: __webpack_require__(/*! ./product-details.page.html */ "./src/app/product-details/product-details.page.html"),
            styles: [__webpack_require__(/*! ./product-details.page.scss */ "./src/app/product-details/product-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], ng_socket_io__WEBPACK_IMPORTED_MODULE_8__["Socket"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], ProductDetailsPage);
    return ProductDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=product-details-product-details-module.js.map