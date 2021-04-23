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
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../header/header.module */ "./src/app/header/header.module.ts");













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
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientJsonpModule"],
                _header_header_module__WEBPACK_IMPORTED_MODULE_12__["HeaderPageModule"]
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

module.exports = "\n<ion-content >\n<app-header ></app-header>\n\n<div class=\"ion-padding\">\n<div header_height></div>\n\n\t\t<div breadcrumb  class=\"ion-hide-md-down\">\n\t\t\t\t<div breadcrumb-inner>\n\t\t\t\t\t<ul list-inline list-unstyled style='margin:0 0 15px 0'>\n\t\t\t\t\t    <li style=\"float:left;margin:0 10px 0 0\">\n\t\t\t\t\t    \t<a routerLink=\"/blog\">Home / </a>\n\t\t\t\t\t    </li>\n\t\t\t\t\t\t<li class=\"active\">Product Details</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div><!-- /.breadcrumb-inner -->\n\t\t</div>\n<!-- Breadcrumb Ends -->\n<!--  Product Detail Start  -->\n<div single-product>\n<!---  Product Slider Start -->\n   <div detail-block>\n         <div product-view-area>\n\t\t\t\t <ion-row>\n\t\t\t\t\t<ion-col big-image size-md=\"12\" size-sm=\"12\" size-lg=\"6\"  size=\"12\">\n\t\t\t\t\t\t\t<!--  Thumbnails Start -->\n\t\t\t\t\t\t\t<div thumbnail-main  class=\"ion-hide-md-down\" *ngIf=\"product?.product_images != ''\">\n\t\t\t\t\t\t\t\t<ul thumbnail-list>\n\t\t\t\t\t\t\t\t\t<li *ngFor=\"let img of product?.product_images \">\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"  gallery-thumb>\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{IMAGES_URL}}/product_images/{{img?.image}}\"/>\n\t\t\t\t\t\t\t\t\t\t </a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t       </ul>\n\t\t\t\t\t      </div>\n\t\t\t\t\t<!--  Thumbnails Ends -->\n\t\t\t\t\t<!--Large Image Start  -->\n\t\t\t\t\t  <div large-image class=\"ion-hide-md-down\">\n\t\t\t\t\t\t    <a large-inner>\n\t\t\t\t\t\t      <img *ngIf=\"errors.indexOf(product?.product_image) >= 0\" src=\"assets/images/products/no_image.svg\">\n\t\t\t\t\t\t\t  <img *ngIf=\"errors.indexOf(product?.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{product?.product_image}}\" alt=\"{{product?.product_name}}\">\n\t\t\t\t\t\t   </a>\n\t\t\t\t\t\t   <span sale-text *ngIf=\"errors.indexOf(product?.product_sale_price) == -1 && product?.product_sale_price != product?.product_purchase_price\">\n\t\t\t\t\t\t       Sale\n\t\t\t\t\t\t   </span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!---Large Image Ends  -->\n\n\t\t\t    </ion-col>\n\t\t\t\t<ion-col product-info-block size-md=\"12\" size-sm=\"12\" size-lg=\"6\"  size=\"12\">\n\t\t\t\t   <!--- Product Info Start -->\n\t\t\t\t  <div product-info>\n\t\t\t\t  <ion-fab  vertical=\"top\" horizontal=\"end\" class=\"ion-hide-lg-up\">\n\t\t\t\t    <ion-fab-button color=\"grey2\" size=\"small\">\n\t\t\t\t      <ion-icon name=\"share\"></ion-icon>\n\t\t\t\t    </ion-fab-button>\n\t\t\t\t    <ion-fab-list side=\"bottom\">\n\t\t\t\t      <ion-fab-button color=\"darkred\">\n\t\t\t\t      \t<share-button button=\"facebook\" url=\"{{shareURL}}\"></share-button>\n\t\t\t\t      </ion-fab-button>\n\t\t\t\t      <ion-fab-button color=\"darkred\">\n\t\t\t\t      \t<share-button button=\"twitter\" url=\"{{shareURL}}\"></share-button>\n\t\t\t\t      </ion-fab-button>\n\t\t\t\t      <ion-fab-button color=\"darkred\">\n\t\t\t\t      \t<share-button button=\"google\" url=\"{{shareURL}}\"></share-button>\n\t\t\t\t      </ion-fab-button>\n\t\t\t\t      <ion-fab-button color=\"darkred\">\n\t\t\t\t      \t<share-button button=\"linkedin\" url=\"{{shareURL}}\"></share-button>\n\t\t\t\t      </ion-fab-button>\n\t\t\t\t      <ion-fab-button color=\"darkred\">\n\t\t\t\t      \t<share-button button=\"email\" url=\"{{shareURL}}\"></share-button>\n\t\t\t\t      </ion-fab-button>\n\t\t\t\t    </ion-fab-list>\n\t\t\t\t  </ion-fab>\n\t\t\t\t  \t<h3 name>{{product?.brand_name}}</h3>\n\t\t\t\t\t<h1 name>\n\t\t\t\t\t\t {{product?.product_name}}\n\t\t\t\t\t  \t\n\t\t\t\t\t  \t<!-- <div favorite-button float-right>\n\t\t\t\t\t\t\t<ion-item p-lr-0 border-none *ngIf=\"limit_reached == false\">\n\t\t\t\t\t\t        <ion-checkbox [checked]=\"comapred_products.indexOf(product?.product_id.toString()) >= 0\" (ionChange)=\"compareChecked($event)\" ></ion-checkbox>&nbsp;\n\t\t\t\t\t\t        <ion-label> Compare</ion-label>\n\t\t\t\t\t\t    </ion-item>\n\t\t\t\t\t\t    <ion-item p-lr-0 border-none *ngIf=\"limit_reached == true\">\n\t\t\t\t\t\t        <ion-checkbox [disabled]=\"true\"></ion-checkbox>&nbsp;\n\t\t\t\t\t\t        <ion-label> Compare</ion-label>\n\t\t\t\t\t\t    </ion-item>\n\t\t\t\t\t   \t</div> -->\n\n\t\t\t\t\t</h1>\n\n\t\t\t\t\t <ion-row>\n\t\t\t\t\t\t<ion-col  size=\"12\"  no-padding>\n\t\t\t\t\t\t  <div rateit-small float-left *ngIf=\"is_loaded == true\">\n\t\t\t\t\t\t\t  <ngx-stars [readonly]=\"true\" [maxStars]=\"5\" [initialStars]=\"product?.total_reviews[0]?.Average_Review\" [color]=\"'#a01616'\"></ngx-stars>\n\t\t\t\t\t\t   </div>\n                               <div reviews float-left>\n\t\t\t\t\t\t\t\t\t<a  lnk>({{product?.product_reviews?.length}} {{product?.product_reviews?.length == 1 ? 'Review' : 'Reviews'}})</a>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t </ion-col>\n\n\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t <!--Mob Product Slider Start-->\n\t\t\t\t\t  <ion-slides pager=\"true\" color=\"darkred\" class=\"ion-hide-lg-up\">\n\t\t\t\t\t\t  <ion-slide>\n\t\t\t\t\t\t\t <img *ngIf=\"errors.indexOf(product?.product_image) >= 0\" src=\"assets/images/products/no_image.svg\">\n\t\t\t\t\t\t\t <img *ngIf=\"errors.indexOf(product?.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{product?.product_image}}\" alt=\"{{product?.product_name}}\">\n\t\t\t\t\t\t  </ion-slide>\n\t\t\t\t\t\t  <ion-slide *ngFor=\"let img of product?.product_images\" >\n\t\t\t\t\t\t\t <img src=\"{{IMAGES_URL}}/product_images/{{img?.image}}\"/>\n\t\t\t\t\t\t  </ion-slide>\n\t\t\t\t\t</ion-slides>\n\t\t\t\t\t<!--Mob Product Slider Ends-->\n\t\t\t\t\t\t\t<div  product-price>\n\t\t\t\t\t\t\t\t<div price-box>\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"errors.indexOf(product?.product_sale_price) == -1 && product?.product_sale_price != product?.product_purchase_price && IsApplyVariation == false\" price> ${{product?.product_sale_price}}  </span>\n\n                \t\t<span *ngIf=\"(errors.indexOf(product?.product_sale_price) >= 0 || product?.product_sale_price == product?.product_purchase_price) && IsApplyVariation == false\" price> ${{product?.product_purchase_price}}  </span>\n\n                    <span *ngIf=\"errors.indexOf(product?.product_sale_price) == -1 && product?.product_sale_price != product?.product_purchase_price && IsApplyVariation == false\" price-before-discount>${{product?.product_purchase_price}}</span>\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"IsApplyVariation == true\" price>${{variationPrice}}</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t  <!-- Rating Start -->\n\t\t\t\t\t\t   <ion-row class=\"ion-hide-md-down\">\n\t\t\t\t\t\t\t\t<!-- <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" no-padding> -->\n\t\t\t\t\t\t\t\t <!-- <ion-row>  -->\n\t\t\t\t\t\t\t\t\t<!-- <ion-col size-md=\"4\" size=\"12\"  no-padding>\n\t\t\t\t\t\t\t\t\t  <div rateit-small>\n\t\t\t\t\t\t\t\t\t\t  <ion-icon  name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t  <ion-icon  name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t  <ion-icon  name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t  <ion-icon  name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t  <ion-icon  name=\"star-outline\"></ion-icon>\n\t\t\t\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t\t\t\t </ion-col> -->\n\t\t\t\t\t\t\t\t\t <!-- <ion-col size-md=\"4\" size=\"12\"  no-padding>\n\t\t\t\t\t\t\t\t\t\t  <div reviews>\n\t\t\t\t\t\t\t\t\t\t\t\t<a  lnk>({{product?.product_reviews?.length}} {{product?.product_reviews?.length == 1 ? 'Review' : 'Reviews'}})</a>\n\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t </ion-col>  -->\n\t\t\t\t\t\t\t\t<!-- </ion-row> -->\n\t\t\t\t\t\t        <!-- </ion-col> -->\n\t\t\t\t\t\t\t\t<ion-col  size=\"12\" size-sm=\"12\" size-md=\"6\" no-padding >\n\t\t\t\t\t\t\t\t   <ion-row>\n\t\t\t\t\t\t\t\t\t<ion-col size=\"4\"  no-padding>\n\t\t\t\t\t\t\t\t\t  <div stock-box>\n\t\t\t\t\t\t\t\t\t\t    <span label>Availability :</span>\n\t\t\t\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t\t\t\t </ion-col>\n\t\t\t\t\t\t\t\t\t <ion-col size=\"8\"  no-padding>\n\t\t\t\t\t\t\t\t\t\t  <div stock-box>\n\t\t\t\t\t\t\t\t\t\t\t\t<span value *ngIf=\"product?.product_quantity != 0 && errors.indexOf(product?.product_quantity) == -1\">In Stock</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span value *ngIf=\"product?.product_quantity == 0 || errors.indexOf(product?.product_quantity) >= 0\">Out of Stock</span>\n\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t </ion-col>\n\t\t\t\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t   </ion-row>\n\t\t\t\t\t\t   <ion-row *ngIf=\"product_variations != ''\">\n\t\t\t\t\t\t   <ng-container *ngFor=\"let variation of product_variations; let  i = index;\">\n\t\t\t\t\t\t\t\t<ion-col size=\"4\" no-padding *ngIf=\"variation.name != 'price'\">\n\t\t\t\t\t\t\t\t    <ion-label>{{variation.name}}</ion-label>\n\t\t\t\t\t\t\t\t    <ion-select placeholder=\"Select One\" (ionChange)=\"selectedValue(variation,variation.id) \" [(ngModel)]=\"variation.id\">\n\t\t\t\t\t\t\t\t      <ion-select-option *ngFor=\"let value of variation.values\" value=\"{{value.id}}\">{{value.value}}</ion-select-option>\n\t\t\t\t\t\t\t\t    </ion-select>\n\t\t\t\t\t\t\t\t </ion-col>\n\t\t\t\t\t\t\t </ng-container>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t<!-- Rating Ends -->\n\t\t\t\t\t\t\t<!--- Description Start -->\n\t\t\t\t\t\t\t <div description-container>\n\t\t\t\t\t\t\t <h2 class=\"ion-hide-lg-up\">About This Item</h2>\n\t\t\t\t\t\t\t\t<p><span [innerHtml]=\"atob(product?.product_description)\"></span></p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<span sale-text *ngIf=\"errors.indexOf(product?.product_tags) == -1\">\n\t\t\t\t\t\t\t{{product?.product_tags}}\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<!--- Description Ends -->\n\t\t\t\t\t\t\t<!--- Vendor Info Start-->\n                                <div vendor-info>\n                                       \t   <ion-row>\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-col *ngIf=\"product?.product_user_type != 'Admin'\" size-sm=\"12\" size=\"12\" size-md=\"4\"  no-padding>\n\t\t\t\t\t\t\t\t\t\t\t\t      <p vendor-name>Sold by <a>{{product?.vendor_company}}</a></p>\n\t\t\t\t\t\t\t\t\t\t\t\t </ion-col>\n\t\t\t\t\t\t\t\t\t\t\t\t <!--ion-col size-sm=\"12\" size=\"12\"  size-md=\"8\"  no-padding text-right>\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <div video-message>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p contact-txt>Contact:</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div message-inner contact-btns>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-comments\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-video-camera\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t </ion-col-->\n\t\t\t\t\t\t\t\t\t\t\t</ion-row>\n\n                                </div>\n\t\t\t\t\t\t\t<!--- Vendor Info Ends-->\n                           <!-- Quantity Start -->\n\t\t\t\t\t\t\t\t\t <div  quantity-container>\n\t\t\t\t\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-col size-sm=\"2\" size-md=\"1\" size=\"2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span label d-inline-block>Qty :</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t\t\t\t <ion-col size-sm=\"4\" size-md=\"2\" size=\"6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div cart-quantity>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div quant-input>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input [(ngModel)]=\"final_quantity\"  type=\"number\" style=\"width:100%\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-col size-sm=\"6\" size-md=\"4\" size=\"4\" style='width:500px;float:left;'>\n\t\t\t\t\t\t\t\t\t\t\t\t   <ion-button [disabled]=\"product?.product_quantity == 0 || errors.indexOf(product?.product_quantity) >= 0\" (click)=\"addToCart(product?.product_id,product?.product_sale_price,product?.product_purchase_price)\" color=\"darkred\" style=\"margin-bottom: 7px;position:inherit;\"><ion-icon name=\"cart\"></ion-icon> <span class=\"\">ADD TO CART</span></ion-button>\n\t\t\t\t\t\t\t\t\t\t\t   \t</ion-col>\n\n\t\t\t\t\t\t\t\t\t\t\t   \t<ion-col size-sm=\"6\" size-md=\"4\" size=\"4\" style='width:500px;float:left;'>\n\t\t\t\t\t\t\t\t\t\t\t\t   <ion-button *ngIf=\"my_wish_products.indexOf(product_id) == -1\" (click)=\"addToWish(product_id)\" color=\"darkred\" title=\"Wishlist\"  style='position:inherit;'>\n\t\t\t\t\t\t\t\t\t\t\t\t \t\t<ion-icon name=\"heart\"></ion-icon> <span class=\"\">ADD TO Wishlist</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-button *ngIf=\"my_wish_products.indexOf(product_id) >= 0\" color=\"darkred\" title=\"Added\" style='position:inherit;'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon red_heart name=\"heart\">In Wishlist</ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t\t\t\t</div>\n                           <!-- Quantity Ends -->\n\t\t\t\t\t\t\t<!--- Bulk Section Start  -->\n\t\t\t\t\t\t\t\t<div bulk-section quantity-container *ngIf=\"product?.wholesale_price != 0 && product?.wholesale_products != 0 && errors.indexOf(product?.wholesale_products) == -1\">\n\t\t\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t\t\t<ion-col  size-md=\"8\" size-lg=\"9\" size=\"12\">\n\t\t\t\t\t\t\t\t\t\t\t<div bulk-price>\n\t\t\t\t\t\t\t\t\t\t\t\t<h5><!--Bulk Price--> Wants to buy product in wholesale? <!-- Add here! --></h5>\n\t\t\t\t\t\t\t\t\t\t\t\t<p>If you buy {{product?.wholesale_products}} items, cost per product will be <span>${{product?.wholesale_price}}</span></p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t\t<ion-col size-md=\"4\" size-lg=\"3\" size=\"12\">\n\t\t\t\t\t\t\t\t\t\t   <div video-message>\n\t\t\t\t\t\t\t\t\t\t\t\t<!--p contact-txt>Contact:</p-->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div message-inner contact-btns>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"messages()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-comments\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-video-camera\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t\t<!-- <ion-col size-sm=\"2\" size-md=\"1\" size=\"2\">\n\t\t\t\t\t\t\t\t\t\t\t<span label>Qty :</span>\n\t\t\t\t\t\t\t\t\t\t</ion-col>\n\n\t\t\t\t\t\t\t\t\t\t <ion-col size-sm=\"4\" size-md=\"2\" size=\"6\">\n\t\t\t\t\t\t\t\t\t\t\t<div cart-quantity>\n\t\t\t\t\t\t\t\t\t\t\t<div quant-input>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div arrows>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div (click)=\"plusWholeSaleQuantity()\" arrow plus gradient><span ir>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <i class=\"ion-hide-md-down icon fa fa-sort-asc\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <ion-icon class=\"ion-hide-lg-up \" add-icon name=\"add\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div (click)=\"minusWholeSaleQuantity()\" arrow minus gradient>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <span ir>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <i class=\"ion-hide-md-down icon fa fa-sort-desc\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <ion-icon class=\"ion-hide-lg-up \" minus-icon name=\"remove\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input [disabled]=\"true\" [(ngModel)]=\"choosed_wholesale_quantity\" type=\"text\" value=\"1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</ion-col>\n\n\t\t\t\t\t\t\t\t\t <ion-col size-sm=\"6\" size-md=\"2\" size=\"4\">\n\t\t\t\t\t\t\t\t\t\t<ion-button (click)=\"checkOutWholeSale(product?.wholesale_price,product?.wholesale_products)\" color=\"darkred\">CHECKOUT</ion-button>\n\t\t\t\t\t\t\t\t\t\t</ion-col> -->\n\t\t\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--- Bulk Section Ends  -->\n                            <!--  Share Section Start  -->\n                                   <div share-box class=\"ion-hide-down\">\n\t\t\t\t\t\t\t\t\t   <div title>Share in social media</div>\n\t\t\t\t\t\t\t\t\t\t\t<div socials-box>\n\t\t\t\t\t\t\t\t\t\t\t\t<share-button button=\"facebook\" url=\"{{shareURL}}\"></share-button>\n\t\t\t\t\t\t\t\t\t\t\t\t<share-button button=\"twitter\" url=\"{{shareURL}}\"></share-button>\n\t\t\t\t\t\t\t\t\t\t\t\t<share-button button=\"google\" url=\"{{shareURL}}\"></share-button>\n\t\t\t\t\t\t\t\t\t\t\t\t<share-button button=\"linkedin\" url=\"{{shareURL}}\"></share-button>\n\t\t\t\t\t\t\t\t\t\t\t\t<share-button button=\"email\" url=\"{{shareURL}}\"></share-button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n                            <!--  Share Section Ends  -->\n\t\t\t\t  \t\t\t\t\t</div>\n\t\t\t\t    <!--- Product Info Ends -->\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t </div>\n   </div>\n <!--  Product Slider Ends -->\n <!-- Product Tabs Start -->\n<div product-tabs>\n <ion-segment  [(ngModel)]=\"tabs\"  color=\"darkred\">\n\t\t\t<ion-segment-button value=\"description\">\n\t\t\t\t<ion-label>DESCRIPTION</ion-label>\n\t\t\t</ion-segment-button>\n\t\t\t<ion-segment-button value=\"review\">\n\t\t\t   <ion-label>REVIEW</ion-label>\n\t\t\t</ion-segment-button>\n</ion-segment>\n\t\t  <div  tab-content [ngSwitch]=\"tabs\">\n\t\t\t\t  <ion-list *ngSwitchCase=\"'description'\">\n\t\t\t\t      <div description>\n\t\t\t\t\t\t\t<p class=\"text\"><span [innerHtml]=\"atob(product?.product_description)\"></span></p>\n\t\t\t\t\t  </div>\n\t\t\t\t  </ion-list>\n\t\t\t\t    <ion-list *ngSwitchCase=\"'review'\">\n\t\t\t\t        <div product-reviews>\n\t\t\t\t\t\t    <h4 title>Customer Reviews</h4>\n\t\t\t\t\t\t\t  <!-- <div sidebar-widget product-tag review-tag>\n\t\t\t\t\t\t\t\t\t\t  <h3 section-title>Read reviews that mention</h3>\n\t\t\t\t\t\t\t\t\t\t  <div sidebar-widget-body>\n\t\t\t\t\t\t\t\t\t\t\t<div tag-list>\n\t\t\t\t\t\t\t\t\t\t\t\t<a item href=\"#\">Sound Quality</a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a item href=\"#\">Noise Cancellation</a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a item href=\"#\">Bluetooth</a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a item href=\"#\">Active Noise</a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a item href=\"#\">Headphones</a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a item href=\"#\">Highly Recommend</a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a item href=\"#\">Quality is good</a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a item href=\"#\">Price Point</a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a item href=\"#\">Ear Cups</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t     </div> -->\n\t\t\t\t\t\t\t\t <!--- Reviews Start -->\n\t\t\t\t\t\t\t\t<!-- \t<div class=\"dropdown\"   dropdown-med>\n\t\t\t\t\t\t\t\t\t\t<button data-toggle=\"dropdown\" type=\"button\" class=\"btn dropdown-toggle\"> Top Reviews <span class=\"caret\"></span> </button>\n\t\t\t\t\t\t\t\t\t\t<ul role=\"menu\" class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t<li role=\"presentation\"><a href=\"javascript:void(0)\">Top Reviews</a></li>\n\t\t\t\t\t\t\t\t\t\t<li role=\"presentation\"><a href=\"javascript:void(0)\">Most Recent</a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\t -->\n\t\t\t\t\t\t<!-- Review Start  -->\n\t\t\t\t\t\t\t\t<div reviews>\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"product?.product_reviews == ''\">\n\t\t\t\t\t\t\t\t\t<ion-item>Be the first to review this product.</ion-item>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let review of product?.product_reviews; let r_ind = index \">\n\t\t\t\t\t\t\t\t      <ion-item lines=\"none\" color=\"greyf8\">\n\t\t\t\t\t\t\t\t\t\t<ion-avatar>\n\t\t\t\t\t\t\t\t\t\t   <img *ngIf=\"errors.indexOf(review?.profile_picture) >= 0\" src=\"assets/images/default.png\">\n\t\t\t\t\t\t\t  \t\t\t   <img *ngIf=\"errors.indexOf(review?.profile_picture) == -1\" src=\"{{IMAGES_URL}}/userprofile/{{review?.profile_picture}}\" alt=\"{{review?.name}}\">\n\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t <div review-title>\n\t\t\t\t\t\t\t\t\t\t\t\t <span summary>{{review?.name}} {{review?.last_name}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span date><ion-icon name=\"calendar\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span> {{review?.date | timeAgo}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t </span>\n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t <div rateit-small>\n\t\t\t\t\t\t\t\t\t\t\t    <ngx-stars [readonly]=\"true\" [maxStars]=\"5\" [initialStars]=\"review?.stars\" [color]=\"'#a01616'\"></ngx-stars>\n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t <div text>\n\t\t\t\t\t\t\t\t\t\t\t   <p>\"{{review?.review}}\"</p>\n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t  <span review-action>\n\t\t\t\t\t\t\t\t\t\t\t\t  <a (click)=\"show_reply_text = review.review_id;reply_comment = ''\" href=\"javascript:void(0)\"> Reply</a>\n\t\t\t\t\t\t\t\t\t\t\t\t  <!-- / <a href=\"\"> Report Abuse</a> -->\n\t\t\t\t\t\t\t\t\t\t\t  </span>\n\t\t\t\t\t\t\t\t\t\t\t  <div *ngIf=\"show_reply_text == review.review_id\" reply_comm_div>\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-textarea [(ngModel)]=\"reply_comment\"></ion-textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t<button (click)=\"replyReview(review?.review_id,reply_comment,r_ind)\"><ion-icon name=\"send\"></ion-icon></button>\n\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t  </ion-item>\n\t\t\t\t\t\t\t\t\t  <ion-item lines=\"none\" color=\"greyf8\" review-comment *ngFor=\"let comment of review?.review_comments\">\n\t\t\t\t\t\t\t\t\t\t<ion-avatar>\n\t\t\t\t\t\t\t\t\t\t   <img *ngIf=\"errors.indexOf(comment?.profile_picture) >= 0\" src=\"assets/images/default.png\">\n\t\t\t\t\t\t\t  \t\t\t   <img *ngIf=\"errors.indexOf(comment?.profile_picture) == -1\" src=\"{{IMAGES_URL}}/userprofile/{{comment?.profile_picture}}\" alt=\"{{comment?.name}}\">\n\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t <div review-title>\n\t\t\t\t\t\t\t\t\t\t\t\t <span summary>{{comment?.name}} {{comment?.last_name}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span date><ion-icon name=\"calendar\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span> {{comment?.date | timeAgo}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t </span>\n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t <div text>\n\t\t\t\t\t\t\t\t\t\t\t   <p>\"{{comment?.review}}\"</p>\n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t  <!-- <span review-action>\n\t\t\t\t\t\t\t\t\t\t\t\t  <a href=\"#review-form\"> Reply</a> / <a href=\"\"> Report Abuse</a>\n\t\t\t\t\t\t\t\t\t\t\t  </span> -->\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t  </ion-item>\n\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t  \t  <!-- <ion-item lines=\"none\" color=\"greyf8\" review-comment class=\"ion-hide-md-down\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-avatar>\n\t\t\t\t\t\t\t\t\t\t\t\t   <img src=\"assets/images/testimonials/member2.png\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div review-title>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t <span summary>Hanry James</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span date><ion-icon name=\"calendar\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span> 3 days ago</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div rateit-small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <ion-icon name=\"star\" filled></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <ion-icon name=\"star\" filled></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <ion-icon name=\"star\" filled></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <ion-icon name=\"star\" filled></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <ion-icon name=\"star\" filled></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div text>\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <p>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam suscipit.\"</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <span review-action>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <a href=\"#review-form\"> Reply</a> / <a href=\"\"> Report Abuse</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  </span>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t  </ion-item>\n\t\t\t\t\t\t\t\t\t   <ion-item lines=\"none\" color=\"greyf8\" class=\"ion-hide-md-down\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-avatar>\n\t\t\t\t\t\t\t\t\t\t\t\t   <img src=\"assets/images/testimonials/member1.png\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div review-title>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t <span summary>John Smith</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span date><ion-icon name=\"calendar\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span> 3 days ago</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div rateit-small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <ion-icon name=\"star\" filled></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <ion-icon name=\"star\" filled></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <ion-icon name=\"star\" filled></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <ion-icon name=\"star\" filled></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <ion-icon name=\"star\" filled></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div text>\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <p>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam suscipit.\"</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <span review-action>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <a href=\"#review-form\"> Reply</a> / <a href=\"\"> Report Abuse</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  </span>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t  </ion-item> -->\n\t\t\t\t\t\t\t\t\t  <!-- <ion-item lines=\"none\" color=\"greyf8\" review-comment class=\"ion-hide-md-down\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-avatar>\n\t\t\t\t\t\t\t\t\t\t\t\t   <img src=\"assets/images/testimonials/member2.png\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div review-title>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t <span summary>Hanry James</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span date><ion-icon name=\"calendar\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span> 3 days ago</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div rateit-small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <ion-icon name=\"star\" filled></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <ion-icon name=\"star\" filled></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <ion-icon name=\"star\" filled></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <ion-icon name=\"star\" filled></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <ion-icon name=\"star\" filled></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div text>\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <p>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam suscipit.\"</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <span review-action>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <a href=\"#review-form\"> Reply</a> / <a href=\"\"> Report Abuse</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  </span>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t  </ion-item> -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- Review Ends  -->\n\t\t\t\t\t\t\t\t<!--- Reviews Ends -->\n\t\t\t\t\t\t</div>\n\t\t\t\t  </ion-list>\n\t\t  </div>\n</div>\n <!--- Product Tabs Ends -->\n <!-- Write Review Section Start -->\n   <div product-tabs *ngIf=\"product?.product_purchased != null\">\n\t\t   <div product-add-review>\n\t\t\t\t<h4 title>Write your own review</h4>\n\t\t   </div>\n\t\t   <div review-table>\n\t\t\t\t<!-- <div class=\"table-responsive reviews-content-right ion-hide-md-down\">\n\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th class=\"cell-label\">&nbsp;</th>\n\t\t\t\t\t\t\t\t<th>1 star</th>\n\t\t\t\t\t\t\t\t<th>2 stars</th>\n\t\t\t\t\t\t\t\t<th>3 stars</th>\n\t\t\t\t\t\t\t\t<th>4 stars</th>\n\t\t\t\t\t\t\t\t<th>5 stars</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td class=\"cell-label\">Quality</td>\n\t\t\t\t\t\t\t\t<td><input type=\"radio\" name=\"quality\" class=\"radio\" value=\"1\"></td>\n\t\t\t\t\t\t\t\t<td><input type=\"radio\" name=\"quality\" class=\"radio\" value=\"2\"></td>\n\t\t\t\t\t\t\t\t<td><input type=\"radio\" name=\"quality\" class=\"radio\" value=\"3\"></td>\n\t\t\t\t\t\t\t\t<td><input type=\"radio\" name=\"quality\" class=\"radio\" value=\"4\"></td>\n\t\t\t\t\t\t\t\t<td><input type=\"radio\" name=\"quality\" class=\"radio\" value=\"5\"></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div> -->\n\t\t\t\t<form form-cnt>\n\t\t\t\t<ion-row>\n\t\t\t\t <!-- <ion-col size-md=\"12\" size-sm=\"12\" size=\"12\" class=\"ion-hide-lg-up\"> -->\n\t\t\t\t <ion-col size-md=\"12\" size-sm=\"12\" size=\"12\">\n\t\t\t\t   <div form-group>\n\t\t\t\t\t  <ion-label position=\"stacked\">Rate Your Product: </ion-label>\n\t\t\t\t\t\t  <div rateit-small>\n\t\t\t\t\t\t\t<ngx-stars (ratingOutput)=\"onRatingSet($event)\" [maxStars]=\"5\" [color]=\"'#a01616'\"></ngx-stars>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t\t   <!-- <ion-col size-md=\"12\" size-sm=\"12\" size=\"12\">\n\t\t\t\t\t   <div  form-group>\n\t\t\t\t\t\t  <ion-label position=\"stacked\">Add Your Tags: </ion-label>\n\t\t\t\t\t\t  <ion-input type=\"text\" placeholder=\"\"></ion-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\t -->\n\t\t\t\t   <!-- <ion-col size-md=\"6\" size-sm=\"12\" size=\"12\">\n\t\t\t\t\t   <div  form-group>\n\t\t\t\t\t\t  <ion-label position=\"stacked\">Your Name * </ion-label>\n\t\t\t\t\t\t  <ion-input type=\"text\" placeholder=\"\"></ion-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t <div  form-group>\n\t\t\t\t\t\t  <ion-label position=\"stacked\">Your Email *</ion-label>\n\t\t\t\t\t\t  <ion-input type=\"text\" placeholder=\"\"></ion-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col> -->\n\t                  <ion-col size-md=\"12\" size-sm=\"12\" size=\"12\">\n\t\t\t\t\t     <div form-group>\n\t\t\t\t\t\t  <ion-label position=\"stacked\">Review *</ion-label>\n\t\t\t\t\t\t  <ion-textarea name=\"review_text\" [(ngModel)]=\"review_text\" type=\"text\" placeholder=\"\"></ion-textarea>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ion-button color=\"darkred\" (click)=\"addReview(review_text)\" float-right>\n\t\t\t\t\t\t  Submit Review\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t</form>\n\t\t\t</div>\n  </div>\n <!-- Write Review Section Ends -->\n <!---  Product Comparison Section Start -->\n\t<div product-comparison class=\"ion-hide-md-down\" *ngIf=\"comapred_products_list != ''\" style=\"display:none;\">\n\t   <h4 heading-title>Compare with similar items</h4>\n\t   \t<div class=\"table-responsive\">\n\t       <table class=\"table compare-table\">\n\t\t      <tbody>\n\t\t        <tr>\n\t\t\t\t\t<th>Products</th>\n\t\t\t\t\t<td *ngFor=\"let pro of comapred_products_list\">\n\t\t\t\t\t\t<div product>\n\t\t\t\t\t\t\t<div product-image>\n\t\t\t\t\t\t\t\t<div image>\n\t\t\t\t\t\t\t\t\t<a routerLink=\"/product-details/{{pro.product_id}}\">\n\t\t\t\t\t\t\t\t\t    <img *ngIf=\"errors.indexOf(pro.product_image) >= 0\" src=\"assets/images/products/no_image.svg\" style=\"width:100px\">\n\t\t\t\t\t\t\t\t \t\t<img *ngIf=\"errors.indexOf(pro.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{pro.product_image}}\" alt=\"{{pro.product_name}}\"  style=\"width:100px\">\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div product-info text-left>\n\t\t\t\t\t\t\t\t\t<h3 name>\n\t\t\t\t\t\t\t\t\t   <a routerLink=\"/product-details/{{pro.product_id}}\">{{pro.product_name}}</a>\n\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t<div action>\n\t\t\t\t\t\t\t\t\t   <ion-button text-capitalize color=\"darkred\" [disabled]=\"pro.product_quantity == 0 || errors.indexOf(pro.product_quantity) >= 0\" *ngIf=\"my_cart_products.indexOf(pro.product_id) == -1\" (click)=\"addToCart(pro.product_id,pro.product_sale_price,pro.product_purchase_price,1)\">{{(pro.product_quantity == 0 || errors.indexOf(pro.product_quantity) >= 0) ? 'Out of Stock' : 'Add To Cart'}} </ion-button>\n\n\t\t\t\t\t\t\t\t\t   <ion-button text-capitalize color=\"darkred\" routerLink=\"/cart\" *ngIf=\"my_cart_products.indexOf(pro.product_id) >= 0\">In Cart </ion-button>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t        <tr>\n\t\t\t\t\t<th>Description</th>\n\t\t\t\t\t<td *ngFor=\"let pro of comapred_products_list\">\n\t\t\t\t\t\t<p [innerHTML]=\"atob(pro.product_description)\"></p>\n\t\t\t\t\t</td>\n\t        \t</tr>\n\t\t\t    <tr>\n\t\t\t\t\t<th>Brand</th>\n\t\t\t\t\t<td *ngFor=\"let pro of comapred_products_list\">\n\t\t\t\t\t     <p>{{pro.brand_name}}</p>\n\t\t\t\t    </td>\n\t        \t</tr>\n\t        \t<tr>\n\t\t\t\t\t<th>Customer Rating</th>\n\t\t\t\t\t<td *ngFor=\"let pro of comapred_products_list\">\n\t\t\t\t\t     <a remove-icon>\n\t\t\t\t\t\t   <ngx-stars [readonly]=\"true\" [maxStars]=\"5\" [initialStars]=\"pro?.total_reviews[0]?.Average_Review\" [color]=\"'#a01616'\"></ngx-stars>\n\t\t\t\t\t\t </a>\n\t\t\t\t    </td>\n\t        \t</tr>\n\t\t\t    <tr>\n\t\t\t\t\t<th>Price</th>\n\t\t\t\t\t<td *ngFor=\"let pro of comapred_products_list\">\n\t\t\t\t\t\t<div product-price>\n\t\t\t\t\t\t\t<span *ngIf=\"errors.indexOf(pro.product_sale_price) == -1 && pro.product_sale_price != pro.product_purchase_price\" price> ${{pro.product_sale_price}}  </span>\n\n\t\t\t                <span *ngIf=\"errors.indexOf(pro.product_sale_price) >= 0 || pro.product_sale_price == pro.product_purchase_price\" price> ${{pro.product_purchase_price}}  </span>\n\n\t\t\t                <span *ngIf=\"errors.indexOf(pro.product_sale_price) == -1 && pro.product_sale_price != pro.product_purchase_price\" price-before-discount>${{pro.product_purchase_price}}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t    <tr>\n\t\t\t\t\t<th>Sold By</th>\n\t\t\t\t\t<td *ngFor=\"let pro of comapred_products_list\">\n\t\t\t\t\t\t<p in-stock>{{pro.vendor_company}}</p>\n\t\t\t\t\t</td>\n\t            </tr>\n\t\t\t</tbody>\n\t\t   </table>\n\t   </div>\n\t</div>\n<!---  Product Comparison Section Ends -->\n<!-- Product Comparison Mobile Start -->\n<div mob-product-comparison class=\"ion-hide-lg-up\" *ngIf=\"comapred_products_list != ''\">\n\t<ion-row products>\n\t    <ion-col size=\"4\" no-padding *ngFor=\"let pro of comapred_products_list; let cm_index = index \">\n\t\t    <ion-card no-margin product-main>\n\t\t\t<img *ngIf=\"errors.indexOf(pro.product_image) >= 0\" src=\"assets/images/products/no_image.svg\">\n\t\t\t<img *ngIf=\"errors.indexOf(pro.product_image) == -1\" src=\"{{IMAGES_URL}}/product_images/{{pro.product_image}}\" alt=\"{{pro.product_name}}\">\n\t\t\t<ion-icon (click)=\"removeCompared(cm_index)\" name=\"close-circle\" close-icon></ion-icon>\n\t\t    <ion-card-content text-center>\n\t\t\t    <h2><a>{{pro.product_name}}</a></h2>\n\t\t\t\t<p rating>\n\t\t\t\t <a>\n\t\t\t\t   <ngx-stars [readonly]=\"true\" [maxStars]=\"5\" [initialStars]=\"pro?.total_reviews[0]?.Average_Review\" [color]=\"'#a01616'\"></ngx-stars>\n\t\t\t\t </a>\n\t\t\t\t</p>\n\t\t\t\t    <div product-price>\n\t\t\t\t\t\t<span *ngIf=\"errors.indexOf(pro.product_sale_price) == -1 && pro.product_sale_price != pro.product_purchase_price\" price> ${{pro.product_sale_price}}  </span>\n\n\t\t                <span *ngIf=\"errors.indexOf(pro.product_sale_price) >= 0 || pro.product_sale_price == pro.product_purchase_price\" price> ${{pro.product_purchase_price}}  </span>\n\n\t\t                <span *ngIf=\"errors.indexOf(pro.product_sale_price) == -1 && pro.product_sale_price != pro.product_purchase_price\" price-before-discount>${{pro.product_purchase_price}}</span>\n    \t\t\t   </div>\n                <ion-button text-capitalize color=\"darkred\" [disabled]=\"pro.product_quantity == 0 || errors.indexOf(pro.product_quantity) >= 0\" *ngIf=\"my_cart_products.indexOf(pro.product_id) == -1\" (click)=\"addToCart(pro.product_id,pro.product_sale_price,pro.product_purchase_price,1)\">{{(pro.product_quantity == 0 || errors.indexOf(pro.product_quantity) >= 0) ? 'Out of Stock' : 'Add To Cart'}} </ion-button>\n\n\t\t\t\t<ion-button text-capitalize color=\"darkred\" routerLink=\"/cart\" *ngIf=\"my_cart_products.indexOf(pro.product_id) >= 0\">In Cart </ion-button>\n\t\t     </ion-card-content>\n\t\t  \t</ion-card>\n\t    </ion-col>\n\t</ion-row>\n\t<ion-row class=\"ion-margin-top\" description>\n\t\t<ion-col size=\"12\" no-padding>\n\t\t\t<h2 section-head text-center>Description</h2>\n\t\t</ion-col>\n\t    <ion-col size=\"4\" no-padding *ngFor=\"let pro of comapred_products_list\">\n\t\t    <ion-card no-margin>\n\t\t        <p text-center [innerHTML]=\"atob(pro.product_description)\"></p>\n\t        </ion-card>\n\t    </ion-col>\n\t</ion-row>\n\n\t<ion-row class=\"ion-margin-top\" description sold-by>\n\t\t <ion-col size=\"12\" no-padding>\n\t\t\t<h2 section-head text-center>Brand</h2>\n\t\t </ion-col>\n\t    <ion-col size=\"4\" no-padding *ngFor=\"let pro of comapred_products_list\">\n\t\t    <ion-card no-margin>\n\t\t        <p text-center>{{pro.brand_name}}</p>\n\t        </ion-card>\n\t    </ion-col>\n\t</ion-row>\n\n\t<ion-row class=\"ion-margin-top\" description sold-by>\n\t\t <ion-col size=\"12\" no-padding>\n\t\t\t<h2 section-head text-center>Sold By</h2>\n\t\t </ion-col>\n\t    <ion-col size=\"4\" no-padding *ngFor=\"let pro of comapred_products_list\">\n\t\t    <ion-card no-margin>\n\t\t        <p text-center>{{pro.vendor_company}}</p>\n\t        </ion-card>\n\t    </ion-col>\n\t</ion-row>\n</div>\n\n</div>\n<!--  Product Detail Ends   -->\n</div>\n<!-- *ngIf=\"product?.wholesale_price != 0 && product?.wholesale_products != 0 && errors.indexOf(product?.wholesale_products) == -1\" -->\n<div  class=\"row chat-window col-xs-12 col-md-3\" id=\"{{timestamp}}\" style=\"padding-left:0px;\" >\n    <div class=\"col-xs-12 col-md-12\" style=\"padding-left: 0px;\">\n    \t<div class=\"panel panel-default\">\n            <div class=\"panel-heading top-bar\">\n                <div class=\"col-md-8 col-xs-8\" style='float:left'>\n                    <h3 class=\"panel-title\"><span class=\"glyphicon glyphicon-comment\"></span> Chat </h3>\n                </div>\n                <div class=\"col-md-4 col-xs-4\" style=\"text-align: right;float: right;width: 87px;padding: 0;margin: 5px 0 0 0;\">\n                    <a href=\"javascript:void(0)\">\n                    \t<span id=\"minim_chat_window\" class=\"panel-collapsed glyphicon glyphicon-plus icon_minim\">\n                    \t\t&#8645;\n                    \t</span>\n                    </a>\n                    <a href=\"javascript:void(0)\" style=\"color: #fff !important;\">\n                    \t<span class=\"glyphicon glyphicon-remove icon_close\" id=\"chat_window_1\">\n                    \t\t&#10005;\n                    \t</span>\n                    </a>\n                </div>\n            </div>\n            <div class=\"panel-body msg_container_base\" style=\"display: none;\">\n            \t<ng-container *ngFor=\"let chat of chat_list\">\n\t                <div class=\"row msg_container {{chat.user_type == 'user' ? 'base_sent' : 'base_receive'}}\">\n\t                    <div class=\"col-md-10 col-xs-10\">\n\t                        <div class=\"messages {{chat.user_type == 'user' ? 'msg_sent' : 'msg_receive'}}\">\n\t                            <p *ngIf=\"chat.type == 'text'\">{{chat.message}}</p>\n\t                            <p *ngIf=\"chat.type == 'audio'\">\n\t                            <!-- (click)=\"playAudio(chat.message)\" -->\n\t                            \t<!-- <img width=\"100px\" src=\"assets/images/mp3.png\"> -->\n\t                            \t<audio style=\"width:100%\" controls><source [src]=\"sanitizer.bypassSecurityTrustResourceUrl(chat.message)\" type=\"audio/mpeg\">Your browser does not support the audio tag.</audio>\n\t                            </p>\n\t                            <span fnt_design>{{chat.date | timeAgo}}</span>\n\t                        </div>\n\t                    </div>\n\t                    <!-- <div class=\"col-md-2 col-xs-2 avatar\">\n\t                        <img src=\"http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg\" class=\" img-responsive \">\n\t                    </div> -->\n\t                </div>\n                </ng-container>\n            </div>\n            <div class=\"panel-footer\" style=\"display: none;\">\n            \t<form (ngSubmit)=\"addChat(message)\">\n\t                <div class=\"input-group\">\n\t                <ion-icon (mousedown)=\"startRecording()\"  (mouseup)=\"stopRecording()\" name=\"mic\" class=\"mike_icon\"></ion-icon>\n\t                    <input autocomplete=\"off\" [(ngModel)]=\"message\" name=\"message\" id=\"btn-input\" type=\"text\" class=\"form-control input-sm chat_input\" placeholder=\"Write your message here...\" />\n\t                    <span class=\"input-group-btn\">\n\t                    <button type=\"submit\" class=\"btn btn-primary btn-sm\" id=\"btn-chat\"><ion-icon ios=\"ios-paper-plane\" md=\"md-paper-plane\"></ion-icon></button>\n\t                    </span>\n\t                </div>\n                </form>\n            </div>\n\t\t</div>\n    </div>\n</div>\n\n\n<app-footer></app-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/product-details/product-details.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/product-details/product-details.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:var(--ion-color-grey);\n  font-family: var(--ion-font-family-2);\n  /*  Product Detail Start  */\n  /* Product Slider Start*/\n  /* Product Slider Ends*/\n  /* Product Detail Ends  */ }\n  ion-content [fnt_design] {\n    position: absolute;\n    right: 10%;\n    font-size: 10px;\n    color: #3e3939;\n    bottom: 2px; }\n  ion-content .panel {\n    margin-bottom: 0px; }\n  ion-content .mike_icon {\n    position: absolute;\n    left: 0;\n    z-index: 9;\n    background: #9f2f22;\n    padding: 9px;\n    color: #fff;\n    font-size: 15px;\n    border-bottom-left-radius: 3px;\n    border-top-left-radius: 3px; }\n  ion-content .chat_input {\n    padding-left: 37px; }\n  ion-content .chat-window {\n    bottom: 0;\n    position: fixed;\n    float: right;\n    right: 0;\n    margin-left: 10px;\n    z-index: 9; }\n  ion-content .chat-window > div > .panel {\n    border-radius: 5px 5px 0 0; }\n  ion-content .panel-default {\n    border-color: #a02f22; }\n  ion-content .icon_minim {\n    padding: 2px 10px;\n    color: #fff; }\n  ion-content .msg_container_base {\n    background: #e5e5e5;\n    margin: 0;\n    padding: 0 10px 10px;\n    max-height: 300px;\n    overflow-x: hidden; }\n  ion-content .top-bar {\n    background: #a01616;\n    color: white;\n    padding: 10px;\n    position: relative;\n    overflow: hidden; }\n  ion-content .msg_receive {\n    padding-left: 0;\n    margin-left: 0; }\n  ion-content .msg_receive p {\n      margin: 0px 0px 0.6rem 0; }\n  ion-content .msg_sent {\n    padding-bottom: 20px !important;\n    margin-right: 0; }\n  ion-content .messages {\n    background: white;\n    padding: 10px;\n    border-radius: 2px;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n    max-width: 100%; }\n  ion-content .messages > p {\n    font-size: 13px;\n    margin: 0 0 0.2rem 0; }\n  ion-content .messages > time {\n    font-size: 11px;\n    color: #ccc; }\n  ion-content .msg_container {\n    padding: 10px;\n    overflow: hidden;\n    display: flex; }\n  ion-content img {\n    display: block;\n    width: 100%; }\n  ion-content .avatar {\n    position: relative; }\n  ion-content .base_receive > .avatar:after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 0;\n    height: 0;\n    border: 5px solid #FFF;\n    border-left-color: rgba(0, 0, 0, 0);\n    border-bottom-color: rgba(0, 0, 0, 0); }\n  ion-content .base_sent {\n    justify-content: flex-end;\n    align-items: flex-end; }\n  ion-content .base_sent > .avatar:after {\n    content: \"\";\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 0;\n    height: 0;\n    border: 5px solid white;\n    border-right-color: transparent;\n    border-top-color: transparent;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); }\n  ion-content .msg_sent > time {\n    float: right; }\n  ion-content .input-sm, ion-content .form-horizontal .form-group-sm .form-control {\n    height: 33px !important; }\n  ion-content .btn-sm, ion-content .btn-group-sm > .btn {\n    padding: 5px 10px !important; }\n  ion-content .btn-primary {\n    color: #fff;\n    background-color: #a02f22;\n    border-color: #a02f22; }\n  ion-content .btn-primary ion-icon {\n    font-size: 16px; }\n  ion-content .msg_container_base::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    background-color: #F5F5F5; }\n  ion-content .msg_container_base::-webkit-scrollbar {\n    width: 12px;\n    background-color: #F5F5F5; }\n  ion-content .msg_container_base::-webkit-scrollbar-thumb {\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    background-color: #555; }\n  ion-content .btn-group.dropup {\n    position: fixed;\n    left: 0px;\n    bottom: 0; }\n  ion-content [reply_comm_div] ion-textarea {\n    font-size: 12px;\n    font-weight: normal;\n    border: 1px solid #a02f22; }\n  @media only screen and (min-width: 991px) {\n    ion-content {\n      --padding-top: var(--ion-padding-0); }\n      ion-content ion-slides {\n        height: 300px; } }\n  @media only screen and (max-width: 991px) {\n    ion-content {\n      --padding-start: var(--ion-padding-0);\n      --padding-end: var(--ion-padding-0);\n      --padding-top: var(--ion-padding-0);\n      --padding-bottom: var(--ion-padding-0); }\n      ion-content ion-slides {\n        height: 300px; } }\n  @media only screen and (max-width: 576px) {\n    ion-content ion-slides {\n      height: 200px; } }\n  ion-content [single-product] {\n    /* Write Review Section Start */\n    /* Write Review Section Ends */\n    /* Product Tabs Start */\n    /* Product Tabs Ends */ }\n  ion-content [single-product] [product-tabs] {\n      /* Review Table Start */\n      /* Review Ends */\n      /*Form Start*/\n      /*Form Ends*/ }\n  ion-content [single-product] [product-tabs] [product-add-review] h4[title] {\n        margin-bottom: var(--ion-margin-0);\n        margin-top: var(--ion-margin-5);\n        font-size: var(--ion-font-size-18);\n        font-family: var(--ion-font-family-2);\n        text-transform: uppercase;\n        font-weight: bold;\n        border-bottom: 1px solid #e3e3e3;\n        padding-bottom: var(--ion-padding-10);\n        padding: var(--ion-padding-18) var(--ion-padding-20);\n        color: var(--ion-color-darkblack); }\n  @media only screen and (max-width: 991px) {\n          ion-content [single-product] [product-tabs] [product-add-review] h4[title] {\n            padding: var(--ion-padding-15) var(--ion-padding-0) var(--ion-padding-10) var(--ion-padding-15);\n            font-size: var(--ion-font-size-14);\n            border: none; } }\n  ion-content [single-product] [product-tabs] [review-table] {\n        padding: var(--ion-padding-20); }\n  @media only screen and (max-width: 991px) {\n          ion-content [single-product] [product-tabs] [review-table] {\n            padding: var(--ion-padding-15); } }\n  ion-content [single-product] [product-tabs] [review-table] table tr th {\n          border: 1px solid #e5e5e5; }\n  ion-content [single-product] [product-tabs] [review-table] table tr td {\n          border: 1px solid #e5e5e5; }\n  @media only screen and (max-width: 991px) {\n        ion-content [single-product] [product-tabs] form ion-col {\n          padding: var(--ion-padding-0); }\n        ion-content [single-product] [product-tabs] form [rateit-small] {\n          color: var(--ion-color-greyc);\n          cursor: pointer; }\n          ion-content [single-product] [product-tabs] form [rateit-small] ion-icon {\n            cursor: pointer; } }\n  ion-content [single-product] [product-tabs] form[form-cnt] [form-group] {\n        margin-bottom: var(--ion-margin-15); }\n  @media only screen and (max-width: 991px) {\n          ion-content [single-product] [product-tabs] form[form-cnt] [form-group] {\n            margin-bottom: var(--ion-margin-10); } }\n  ion-content [single-product] [product-tabs] form[form-cnt] [form-group] ion-label {\n          font-weight: 700;\n          color: var(--ion-color-darkblack); }\n  @media only screen and (max-width: 991px) {\n            ion-content [single-product] [product-tabs] form[form-cnt] [form-group] ion-label {\n              font-weight: normal;\n              font-size: var(--ion-font-size-12); } }\n  ion-content [single-product] [product-tabs] form[form-cnt] [form-group] ion-input {\n          border: 1px solid var(--ion-color-greyc);\n          border-radius: var(--ion-value-4);\n          height: var(--ion-wh-34);\n          margin-top: var(--ion-margin-8); }\n  @media only screen and (max-width: 991px) {\n            ion-content [single-product] [product-tabs] form[form-cnt] [form-group] ion-input {\n              border: none;\n              border-radius: 0px;\n              margin-top: var(--ion-margin-0);\n              height: auto;\n              --padding-top: var(--ion-padding-0);\n              --padding-bottom: var(--ion-padding-0);\n              border-bottom: 1px solid #e3e3e3; } }\n  ion-content [single-product] [product-tabs] form[form-cnt] [form-group] ion-textarea {\n          border: 1px solid var(--ion-color-greyc);\n          border-radius: var(--ion-value-4);\n          min-height: 110px; }\n  @media only screen and (max-width: 991px) {\n            ion-content [single-product] [product-tabs] form[form-cnt] [form-group] ion-textarea {\n              min-height: auto;\n              border: none;\n              border-radius: 0px;\n              margin-top: var(--ion-margin-0);\n              height: auto;\n              border-bottom: 1px solid #e3e3e3; } }\n  ion-content [single-product] [product-tabs] form[form-cnt] ion-button {\n        --box-shadow:none; }\n  ion-content [single-product] [product-tabs] form[form-cnt] ion-button:hover {\n          opacity: 0.8; }\n  @media only screen and (max-width: 991px) {\n          ion-content [single-product] [product-tabs] form[form-cnt] ion-button {\n            font-size: var(--ion-font-size-12);\n            --border-radius: 4px!important;\n            height: var(--ion-wh-28); } }\n  ion-content [single-product] [product-tabs] {\n      margin-top: var(--ion-margin-30);\n      background-color: var(--ion-color-white);\n      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n      padding: var(--ion-padding-0);\n      overflow: hidden;\n      margin-bottom: var(--ion-margin-30);\n      /* Tabs Start*/\n      /* Tabs Ends */ }\n  ion-content [single-product] [product-tabs] ion-segment {\n        display: inline-block;\n        float: left; }\n  @media only screen and (max-width: 991px) {\n          ion-content [single-product] [product-tabs] ion-segment {\n            display: flex;\n            border-radius: 0px !important; } }\n  ion-content [single-product] [product-tabs] ion-segment ion-segment-button {\n          float: left;\n          font-family: var(--ion-font-family-2);\n          display: inline-block;\n          background: var(--ion-color-greyf8);\n          border-color: var(--ion-color-greyf8);\n          position: relative;\n          font-weight: 600;\n          color: var(--ion-color-darkblack); }\n  @media only screen and (max-width: 991px) {\n            ion-content [single-product] [product-tabs] ion-segment ion-segment-button {\n              min-height: var(--ion-wh-30);\n              border-radius: 0px !important; } }\n  ion-content [single-product] [product-tabs] ion-segment ion-segment-button ion-label {\n            margin: var(--ion-margin-0); }\n  ion-content [single-product] [product-tabs] ion-segment ion-segment-button.segment-button-checked {\n            background: var(--ion-color-darkred);\n            color: var(--ion-color-white);\n            overflow: visible;\n            position: relative; }\n  ion-content [single-product] [product-tabs] ion-segment ion-segment-button:after {\n            border-color: var(--ion-color-darkred) transparent transparent !important;\n            border-style: solid;\n            border-width: 7.5px 5.5px 7.5px 5.5px;\n            content: \"\";\n            height: var(--ion-wh-0);\n            position: absolute;\n            bottom: -15px;\n            width: var(--ion-value-0);\n            right: var(--ion-value-0);\n            left: var(--ion-value-0);\n            margin: 0 auto;\n            top: auto;\n            z-index: 1; }\n  @media only screen and (max-width: 991px) {\n              ion-content [single-product] [product-tabs] ion-segment ion-segment-button:after {\n                display: none; } }\n  ion-content [single-product] [product-tabs] ion-list {\n        clear: both;\n        padding: var(--ion-padding-24);\n        /* Description Tab Start */\n        /*  Description Tab Ends  */\n        /* Review Start */\n        /* Review Ends */ }\n  @media only screen and (max-width: 991px) {\n          ion-content [single-product] [product-tabs] ion-list {\n            padding: var(--ion-padding-15);\n            margin: var(--ion-margin-0); } }\n  ion-content [single-product] [product-tabs] ion-list [description] {\n          font-family: var(--ion-font-family-2);\n          line-height: var(--ion-value-20);\n          font-size: var(--ion-font-size-14);\n          color: var(--ion-color-darkblack); }\n  @media only screen and (max-width: 576px) {\n            ion-content [single-product] [product-tabs] ion-list [description] {\n              font-size: var(--ion-font-size-12); } }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] {\n          /* Review Start */\n          /* Review Ends */ }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] h4[title] {\n            color: var(--ion-color-darkgrey);\n            font-size: var(--ion-font-size-14);\n            font-weight: bold;\n            line-height: var(--ion-value-20);\n            margin: var(--ion-margin-0) var(--ion-margin-0) 1var --ion-margin-10;\n            font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 576px) {\n              ion-content [single-product] [product-tabs] ion-list [product-reviews] h4[title] {\n                font-size: var(--ion-font-size-12); } }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [dropdown-med] .btn {\n            font-family: var(--ion-font-family-2);\n            border: 1px solid #e5e5e5;\n            border-radius: var(--ion-value-0);\n            padding: var(--ion-padding-4) var(--ion-padding-12);\n            background: var(--ion-color-white);\n            font-size: var(--ion-font-size-13); }\n  @media only screen and (max-width: 991px) {\n              ion-content [single-product] [product-tabs] ion-list [product-reviews] [dropdown-med] .btn {\n                border-radius: var(--ion-value-30);\n                font-size: var(--ion-font-size-10); } }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item {\n            --padding-top: var(--ion-padding-15);\n            --padding-bottom: var(--ion-padding-15);\n            margin-top: var(--ion-margin-20);\n            /* avatar start*/\n            /*avatar ends*/\n            /*label start*/\n            /*title start*/\n            /*title ends*/\n            /* Description Start*/\n            /* Description Ends*/\n            /**Review Action Start */\n            /*Review Action Ends*/\n            /* Rate Start */\n            /* Rate Ends */ }\n  @media only screen and (max-width: 991px) {\n              ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item {\n                --ion-color-base: --var(-ion-color-white);\n                border-bottom: 1px solid #e3e3e3;\n                margin-top: var(--ion-margin-10);\n                --padding-top: var(--ion-padding-5);\n                --padding-bottom: var(--ion-padding-5);\n                --padding-start: var(--ion-padding-5);\n                --padding-end: var(--ion-padding-5); } }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item[review-comment] {\n              margin-left: 80px;\n              border-left: 3px solid var(--ion-color-darkred); }\n  @media only screen and (max-width: 991px) {\n                ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item[review-comment] {\n                  border-left: none;\n                  margin-left: var(--ion-margin-0); } }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item ion-avatar {\n              width: var(--ion-wh-55);\n              height: var(--ion-wh-55); }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item label {\n              padding-left: var(--ion-padding-20); }\n  @media only screen and (max-width: 991px) {\n                ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item label {\n                  padding-left: var(--ion-padding-10);\n                  width: calc(100% - 55px); } }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item [review-title] [summary] {\n              color: var(--ion-color-darkgrey);\n              font-size: var(--ion-font-size-14);\n              font-family: var(--ion-font-family-2);\n              font-weight: normal;\n              margin-right: var(--ion-margin-10);\n              font-style: italic; }\n  @media only screen and (max-width: 991px) {\n                ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item [review-title] [summary] {\n                  font-size: var(--ion-font-size-12); } }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item [review-title] [date] {\n              font-family: var(--ion-font-family-2);\n              font-weight: normal;\n              color: var(--ion-color-darkblack);\n              font-size: var(--ion-font-size-12);\n              margin-left: var(--ion-margin-5); }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item [review-title] [date] ion-icon {\n                top: 1px;\n                position: relative; }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item [review-title] [date] span {\n                color: var(--ion-color-darkred);\n                font-weight: normal;\n                margin-left: var(--ion-margin-2); }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item [text] p {\n              line-height: var(--ion-value-18);\n              font-size: var(--ion-font-size-14);\n              color: var(--ion-color-darkblack);\n              font-weight: normal;\n              margin-bottom: var(--ion-margin-0); }\n  @media only screen and (max-width: 991px) {\n                ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item [text] p {\n                  margin-left: var(--ion-margin-0);\n                  font-size: var(--ion-font-size-12); } }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item [review-action] {\n              margin-top: var(--ion-margin-6);\n              display: inline-block;\n              font-size: var(--ion-font-size-14);\n              color: var(--ion-color-darkblack);\n              font-weight: normal; }\n  @media only screen and (max-width: 991px) {\n                ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item [review-action] {\n                  font-size: var(--ion-font-size-12); } }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item [review-action] a {\n                color: var(--ion-color-darkred);\n                text-decoration: none; }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item [rateit-small] {\n              color: #ccc; }\n  @media only screen and (max-width: 991px) {\n                ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item [rateit-small] ion-icon {\n                  font-size: var(--ion-font-size-12); } }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item [rateit-small] ion-icon[filled] {\n                color: var(--ion-color-yellow);\n                font-size: var(--ion-font-size-16); }\n  @media only screen and (max-width: 991px) {\n                  ion-content [single-product] [product-tabs] ion-list [product-reviews] [reviews] ion-item [rateit-small] ion-icon[filled] {\n                    font-size: var(--ion-font-size-12); } }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [sidebar-widget] {\n            background-color: var(--ion-color-white);\n            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n            padding: var(--ion-padding-20);\n            margin: var(--ion-margin-20) var(--ion-margin-0) var(--ion-margin-30); }\n  @media only screen and (max-width: 991px) {\n              ion-content [single-product] [product-tabs] ion-list [product-reviews] [sidebar-widget] {\n                background-color: transparent;\n                box-shadow: none;\n                padding: var(--ion-padding-0);\n                margin: var(--ion-margin-0); } }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [sidebar-widget] [section-title] {\n              font-size: var(--ion-font-size-14);\n              font-family: var(--ion-font-family-2);\n              border-bottom: 1px solid #e3e3e3;\n              padding-bottom: 12px;\n              text-transform: uppercase;\n              font-weight: bold;\n              margin-top: var(--ion-margin-0); }\n  @media only screen and (max-width: 576px) {\n                ion-content [single-product] [product-tabs] ion-list [product-reviews] [sidebar-widget] [section-title] {\n                  font-size: var(--ion-font-size-12);\n                  border-bottom: none;\n                  margin-top: var(--ion-margin-5);\n                  margin-bottom: var(--ion-margin-0); } }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [sidebar-widget] [sidebar-widget-body] [tag-list] a[item] {\n              background-color: #f5f5f5;\n              color: var(--ion-color-darkgrey);\n              display: inline-block;\n              margin-bottom: var(--ion-margin-5);\n              margin-right: var(--ion-margin-5);\n              padding: var(--ion-padding-6) var(--ion-padding-12);\n              text-decoration: none; }\n  @media only screen and (max-width: 991px) {\n                ion-content [single-product] [product-tabs] ion-list [product-reviews] [sidebar-widget] [sidebar-widget-body] [tag-list] a[item] {\n                  padding: var(--ion-padding-4);\n                  text-decoration: none;\n                  font-size: var(--ion-font-size-10); } }\n  ion-content [single-product] [product-tabs] ion-list [product-reviews] [sidebar-widget] [sidebar-widget-body] [tag-list] a[item]:hover {\n                background-color: var(--ion-color-darkred);\n                color: var(--ion-color-white); }\n  ion-content [single-product] [detail-block] {\n      background-color: var(--ion-color-white);\n      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n      padding: var(--ion-padding-20);\n      overflow: hidden; }\n  @media only screen and (max-width: 991px) {\n        ion-content [single-product] [detail-block] {\n          padding: var(--ion-padding-0); } }\n  ion-content [single-product] [detail-block] [product-view-area] {\n        /*  Large Image Ends   */\n        /* Product Info Block  Start*/\n        /* Product Info Block  Ends*/ }\n  ion-content [single-product] [detail-block] [product-view-area] [big-image] {\n          /*  Thumbnails Start  */\n          /*  Thumbnails Ends  */\n          /*  Large Image Start   */ }\n  ion-content [single-product] [detail-block] [product-view-area] [big-image] [thumbnail-main] {\n            max-width: 100px;\n            padding: var(--ion-padding-0);\n            float: left;\n            position: relative; }\n  ion-content [single-product] [detail-block] [product-view-area] [big-image] [thumbnail-main] ul[thumbnail-list] {\n              padding: var(--ion-padding-0);\n              list-style-type: none;\n              text-align: center;\n              width: 100%;\n              float: left; }\n  ion-content [single-product] [detail-block] [product-view-area] [big-image] [thumbnail-main] ul[thumbnail-list] li {\n                border: 1px var(--ion-color-grey-e5) solid;\n                padding: var(--ion-padding-0);\n                width: 100px;\n                float: left;\n                display: block; }\n  ion-content [single-product] [detail-block] [product-view-area] [big-image] [large-image] {\n            width: calc(100% - 100px);\n            float: left;\n            border: 1px var(--ion-color-grey-e5) solid;\n            position: relative; }\n  ion-content [single-product] [detail-block] [product-view-area] [big-image] [large-image] span {\n              position: absolute;\n              top: var(--ion-value-10);\n              right: var(--ion-value-10);\n              font-family: var(--ion-font-family-2); }\n  ion-content [single-product] [detail-block] [product-view-area] [big-image] [large-image] span[sale-text] {\n                background: var(--ion-color-darkred);\n                color: var(--ion-color-white);\n                font-size: var(--ion-font-size-10);\n                padding: var(--ion-padding-2) var(--ion-padding-8);\n                border-radius: var(--ion-value-2); }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] {\n          padding-left: var(--ion-padding-20);\n          /* Price Start*/\n          /* Price Ends*/\n          /* Rating Start */\n          /* Rating Ends */\n          /* Review Start */\n          /*Review Ends */\n          /*Availability Section Start*/\n          /*Availability Section Ends*/\n          /* Short Description Start*/\n          /* Short Description Ends*/\n          /* Vendor Info Start*/\n          /* Vendor Info Ends*/\n          /* Quantity Section Start*/\n          /* Quantity Section Ends*/\n          /* Bulk Price Start*/\n          /* Bulk Price Ends*/\n          /* Share Section Start */\n          /* Share Section Ends */ }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] ion-fab {\n            margin-top: var(--ion-margin-0); }\n  @media only screen and (max-width: 991px) {\n            ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] {\n              padding: var(--ion-padding-0) var(--ion-padding-10); } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] h1 {\n            margin-top: var(--ion-margin-0);\n            font-weight: bold;\n            letter-spacing: -1px;\n            text-transform: uppercase;\n            font-family: var(--ion-font-family-2); }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] h1[name] {\n              font-size: var(--ion-font-size-36);\n              color: var(--ion-color-darkblack); }\n  @media only screen and (max-width: 991px) {\n                ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] h1[name] {\n                  font-size: var(--ion-font-size-20);\n                  margin-bottom: var(--ion-margin-5); } }\n  @media only screen and (max-width: 576px) {\n                ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] h1[name] {\n                  font-size: var(--ion-font-size-14);\n                  margin-bottom: var(--ion-margin-5); } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] h1[name] [favorite-button] ion-button {\n                --box-shadow:none;\n                margin-top: -16px;\n                font-size: var(--ion-font-size-12); }\n  @media only screen and (max-width: 576px) {\n                  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] h1[name] [favorite-button] ion-button {\n                    --border-radius: 2px!important;\n                    margin-top: -5px;\n                    height: var(--ion-wh-25);\n                    width: var(--ion-wh-25); } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [product-price] {\n            display: flex; }\n  @media only screen and (max-width: 991px) {\n              ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [product-price] {\n                margin-top: var(--ion-value-20);\n                margin-bottom: var(--ion-value-5); } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [product-price] [price] {\n              font-family: var(--ion-font-family-2);\n              font-weight: 700;\n              font-size: var(--ion-font-size-30);\n              line-height: var(--ion-value-50);\n              margin-right: var(--ion-value-3);\n              color: var(--ion-color-darkred); }\n  @media only screen and (max-width: 991px) {\n                ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [product-price] [price] {\n                  font-size: var(--ion-font-size-20);\n                  line-height: normal; } }\n  @media only screen and (max-width: 576px) {\n                ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [product-price] [price] {\n                  font-size: var(--ion-font-size-18);\n                  line-height: normal; } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [product-price] [price-before-discount] {\n              text-decoration: line-through;\n              color: #aaa;\n              font-weight: 400;\n              line-height: var(--ion-value-50);\n              font-size: var(--ion-font-size-16);\n              font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 576px) {\n                ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [product-price] [price-before-discount] {\n                  font-size: var(--ion-font-size-16);\n                  line-height: normal; } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [rateit-small] {\n            color: #ccc; }\n  @media only screen and (max-width: 991px) {\n              ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [rateit-small] ion-icon {\n                font-size: var(--ion-font-size-12); } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [rateit-small] ion-icon[filled] {\n              color: var(--ion-color-yellow);\n              font-size: var(--ion-font-size-16); }\n  @media only screen and (max-width: 576px) {\n                ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [rateit-small] ion-icon[filled] {\n                  font-size: var(--ion-font-size-12); } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [reviews] [lnk] {\n            color: #aaaaaa;\n            font-family: var(--ion-font-family-2);\n            text-decoration: none; }\n  @media only screen and (max-width: 576px) {\n              ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [reviews] [lnk] {\n                font-size: var(--ion-font-size-12); } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [stock-box] span {\n            font-size: var(--ion-font-size-13);\n            font-family: var(--ion-font-family-2);\n            line-height: var(--ion-value-18);\n            color: var(--ion-color-darkgrey);\n            padding: var(--ion-padding-0);\n            font-weight: normal; }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [stock-box] span[value] {\n              font-size: var(--ion-font-size-13);\n              color: var(--ion-color-darkred); }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [description-container] {\n            margin-top: var(--ion-margin-15); }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [description-container] h2 {\n              font-size: var(--ion-font-size-14);\n              font-weight: 700;\n              margin-bottom: var(--ion-margin-5); }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [description-container] p {\n              font-family: var(--ion-font-family-2);\n              line-height: var(--ion-value-20);\n              color: var(--ion-color-darkgrey); }\n  @media only screen and (max-width: 576px) {\n                ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [description-container] p {\n                  font-size: var(--ion-font-size-12);\n                  margin-bottom: var(--ion-margin-0); } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [vendor-info] {\n            /*[video-message]\r\n\t\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t\t@media only screen and (max-width:576px)\r\n\t\t\t\t\t\t\t\t\t {\r\n\t\t\t\t\t\t\t\t\t\t  text-align:left;\r\n\t\t\t\t\t\t\t\t\t }\r\n\t\t\t\t\t\t\t\t\t p\r\n\t\t\t\t\t\t\t\t\t {\r\n\t\t\t\t\t\t\t\t\t\t &[contact-txt]\r\n\t\t\t\t\t\t\t\t\t\t {       \r\n\t\t\t\t\t\t\t\t\t\t       \tfont-family:var(--ion-font-family-2);\t\r\n\t\t\t\t\t\t\t\t\t\t\t    color:var(--ion-color-darkblack);\r\n\t\t\t\t\t\t\t\t\t\t\t    display: inline-block;\r\n                                                margin-right: var(--ion-margin-5); \r\n\t\t\t\t\t\t\t\t\t\t }\r\n\t\t\t\t\t\t\t\t\t }\r\n\t\t\t\t\t\t\t\t\t [contact-btns]\r\n\t\t\t\t\t\t\t\t\t {\r\n\t\t\t\t\t\t\t\t\t\t    display: inline-block;\r\n                                            a\r\n\t\t\t\t\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t\t\t\t\twidth: var(--ion-wh-27);\r\n\t\t\t\t\t\t\t\t\t\t\t\theight:  var(--ion-wh-27);\r\n\t\t\t\t\t\t\t\t\t\t\t\tfont-size: var(--ion-font-size-13);\r\n\t\t\t\t\t\t\t\t\t\t\t\tline-height: var(--ion-value-23);\r\n\t\t\t\t\t\t\t\t\t\t\t\tmargin-left: var( --ion-margin-5);\r\n\t\t\t\t\t\t\t\t\t\t\t\tmargin-right: var( --ion-margin-5);\r\n\t\t\t\t\t\t\t\t\t\t\t\tbackground: var(--ion-color-darkblue);\r\n\t\t\t\t\t\t\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\t\t\t\t\t\t\tborder-radius: 50%;\r\n\t\t\t\t\t\t\t\t\t\t\t\tborder: 2px solid var(--ion-color-darkblue);\r\n\t\t\t\t\t\t\t\t\t\t\t\tcolor: var(--ion-color-white);\r\n\t\t\t\t\t\t\t\t\t\t\t\tdisplay:inline-block;\r\n                                                text-align: center\r\n\t\t\t\t\t\t\t\t\t\t\t}\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t }\r\n\t\t\t\t\t\t\t\t}*/ }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [vendor-info] p[vendor-name] {\n              font-size: var(--ion-font-size-13);\n              margin-bottom: var(--ion-margin-5);\n              margin-top: var(--ion-margin-10);\n              font-family: var(--ion-font-family-2);\n              color: var(--ion-color-darkblack); }\n  @media only screen and (max-width: 576px) {\n                ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [vendor-info] p[vendor-name] {\n                  margin-bottom: var(--ion-margin-10); } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [vendor-info] p[vendor-name] a {\n                color: var(--ion-color-darkred); }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [quantity-container] {\n            border-bottom: 1px solid var(--ion-color-greyf2);\n            border-top: 1px solid var(--ion-color-greyf2);\n            padding: var(--ion-padding-12) var(--ion-padding-0) var(--ion-padding-6); }\n  @media only screen and (max-width: 991px) {\n              ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [quantity-container] [minus-icon] {\n                width: var(--ion-wh-20);\n                height: var(--ion-wh-20);\n                border-radius: 50%;\n                border: 1px solid var(--ion-color-darkred);\n                color: var(--ion-color-darkred);\n                position: absolute;\n                left: -75px;\n                top: var(--ion-value-6); }\n              ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [quantity-container] [add-icon] {\n                width: var(--ion-wh-20);\n                height: var(--ion-wh-20);\n                border-radius: 50%;\n                border: 1px solid var(--ion-color-darkred);\n                color: var(--ion-color-darkred);\n                position: absolute;\n                top: var(--ion-value-6);\n                left: -20px; }\n              ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [quantity-container] input {\n                border: none; } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [quantity-container] ion-button {\n              font-family: var(--ion-font-family-2);\n              margin: var(--ion-margin-0);\n              font-size: var(--ion-font-size-13);\n              height: var(--ion-wh-34);\n              --border-radius:var(--ion-value-2);\n              --box-shadow:none; }\n  @media only screen and (max-width: 991px) {\n                ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [quantity-container] ion-button {\n                  height: var(--ion-wh-30);\n                  float: right; } }\n  @media only screen and (max-width: 576px) {\n                ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [quantity-container] ion-button {\n                  font-size: var(--ion-font-size-11); } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [quantity-container] ion-button ion-icon {\n                margin-right: var(--ion-margin-10); }\n  @media only screen and (max-width: 991px) {\n                  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [quantity-container] ion-button ion-icon {\n                    margin-right: var(--ion-margin-0); } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [quantity-container] ion-button:hover {\n                opacity: 0.8; }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [bulk-section] {\n            border: none; }\n  @media only screen and (max-width: 576px) {\n              ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [bulk-section] [video-message] {\n                text-align: left; } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [bulk-section] [video-message] p[contact-txt] {\n              font-family: var(--ion-font-family-2);\n              color: var(--ion-color-darkblack);\n              display: inline-block;\n              margin-right: var(--ion-margin-5); }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [bulk-section] [video-message] [contact-btns] {\n              display: inline-block; }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [bulk-section] [video-message] [contact-btns] a {\n                width: var(--ion-wh-40);\n                height: var(--ion-wh-40);\n                font-size: var(--ion-font-size-20);\n                line-height: var(--ion-value-40);\n                margin-left: var(--ion-margin-5);\n                margin-right: var(--ion-margin-5);\n                background: var(--ion-color-darkblue);\n                cursor: pointer;\n                border-radius: 50%;\n                border: 2px solid var(--ion-color-darkblue);\n                color: var(--ion-color-white);\n                display: inline-block;\n                text-align: center; }\n  @media only screen and (max-width: 576px) {\n                  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [bulk-section] [video-message] [contact-btns] a {\n                    margin-left: var(--ion-margin-0);\n                    width: var(--ion-wh-27);\n                    height: var(--ion-wh-27);\n                    font-size: var(--ion-font-size-13);\n                    line-height: var(--ion-value-22); } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [bulk-section] [bulk-price] h5 {\n              font-family: var(--ion-font-family-2);\n              margin-top: var(--ion-margin-0);\n              color: var(--ion-color-black);\n              font-weight: 700;\n              font-size: var(--ion-font-size-18); }\n  @media only screen and (max-width: 991px) {\n                ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [bulk-section] [bulk-price] h5 {\n                  font-size: var(--ion-font-size-12);\n                  margin-bottom: var(--ion-margin-5);\n                  font-weight: 500; } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [bulk-section] [bulk-price] p {\n              font-size: var(--ion-font-size-14);\n              color: var(--ion-color-darkblack);\n              font-family: var(--ion-font-family-2); }\n  @media only screen and (max-width: 991px) {\n                ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [bulk-section] [bulk-price] p {\n                  font-size: var(--ion-font-size-12); } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [bulk-section] [bulk-price] p span {\n                font-size: var(--ion-font-size-16);\n                background: var(--ion-color-darkred);\n                color: var(--ion-color-white);\n                padding: var(--ion-padding-0) var(--ion-padding-5);\n                border-radius: var(--ion-value-4); }\n  @media only screen and (max-width: 991px) {\n                  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [bulk-section] [bulk-price] p span {\n                    font-size: var(--ion-font-size-12); } }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [share-box] {\n            border-bottom: 1px solid var(--ion-color-greyf2);\n            border-top: 1px solid var(--ion-color-greyf2);\n            padding: var(--ion-padding-12) var(--ion-padding-0);\n            position: relative;\n            float: left;\n            width: 100%; }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [share-box] [title] {\n              font-family: var(--ion-font-family-2);\n              font-size: var(--ion-font-size-14);\n              color: var(--ion-color-darkblack);\n              font-weight: 600;\n              line-height: var(--ion-value-30);\n              float: left;\n              margin-right: 12px; }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [share-box] [socials-box] a {\n              font-size: var(--ion-font-size-16);\n              line-height: var(--ion-value-30);\n              width: var(--ion-wh-30);\n              display: inline-block;\n              color: #bababa;\n              margin: var(--ion-margin-0);\n              text-align: center; }\n  ion-content [single-product] [detail-block] [product-view-area] [product-info-block] [product-info] [share-box] [socials-box] a:hover {\n                color: var(--ion-color-darkred); }\n  ion-content [product-slider] [vendor-name] {\n    margin-bottom: var(--ion-margin-0); }\n  ion-content [product-slider] [vendor-name] a {\n      color: var(--ion-color-darkred);\n      text-decoration: none; }\n  [product-reviews] [reply_comm_div] {\n  width: 100% !important;\n  min-width: 320px;\n  position: relative; }\n  [product-reviews] [reply_comm_div] ion-textarea {\n  padding: 0 10px !important;\n  font-family: var(--ion-font-family-2) !important; }\n  [product-reviews] [reply_comm_div] button {\n  margin-top: 10px;\n  padding: 6px 8px 4px;\n  background: #a01616;\n  color: #fff;\n  float: right; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luZGkvRG9jdW1lbnRzL1RKL3NyYy9hcHAvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVDO0VBOEtBLGtDQUFhO0VBQ1oscUNBQW9DO0VBMEJwQywyQkFBQTtFQWcrQkUsd0JBQUE7RUFZQSx1QkFBQTtFQUNGLHlCQUFBLEVBQTBCO0VBdHJDM0I7SUFHSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGVBQWU7SUFDZixjQUFjO0lBQ2QsV0FBVyxFQUFBO0VBUGY7SUFVRyxrQkFBa0IsRUFBQTtFQVZyQjtJQWFBLGtCQUFrQjtJQUNmLE9BQU87SUFDUCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLDhCQUE4QjtJQUM5QiwyQkFBMkIsRUFBQTtFQXJCOUI7SUF3QkEsa0JBQWtCLEVBQUE7RUF4QmxCO0lBMkJHLFNBQVE7SUFDUixlQUFjO0lBQ2QsWUFBVztJQUNYLFFBQVE7SUFDUixpQkFBZ0I7SUFDaEIsVUFBVSxFQUFBO0VBaENiO0lBbUNHLDBCQUEwQixFQUFBO0VBbkM3QjtJQXNDRyxxQkFBcUIsRUFBQTtFQXRDeEI7SUF5Q0csaUJBQWdCO0lBQ2hCLFdBQVcsRUFBQTtFQTFDZDtJQTZDQyxtQkFBbUI7SUFDbkIsU0FBUztJQUNULG9CQUFvQjtJQUNwQixpQkFBZ0I7SUFDaEIsa0JBQWlCLEVBQUE7RUFqRGxCO0lBb0RDLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBQTtFQXhEakI7SUEyREcsZUFBYztJQUNkLGNBQWEsRUFBQTtFQTVEaEI7TUE4REksd0JBQXdCLEVBQUE7RUE5RDVCO0lBa0VHLCtCQUE4QjtJQUM5QixlQUFjLEVBQUE7RUFuRWpCO0lBc0VDLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHdDQUF3QztJQUN4QyxlQUFjLEVBQUE7RUExRWY7SUE2RUcsZUFBZTtJQUNmLG9CQUFvQixFQUFBO0VBOUV2QjtJQWlGRyxlQUFlO0lBQ2YsV0FBVyxFQUFBO0VBbEZkO0lBcUZHLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsYUFBYSxFQUFBO0VBdkZoQjtJQTBGRyxjQUFjO0lBQ2QsV0FBVyxFQUFBO0VBM0ZkO0lBOEZHLGtCQUFrQixFQUFBO0VBOUZyQjtJQWlHRyxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0lBQ1IsUUFBUTtJQUNSLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsbUNBQW1DO0lBQ25DLHFDQUFxQyxFQUFBO0VBekd4QztJQTZHQyx5QkFBeUI7SUFDekIscUJBQXFCLEVBQUE7RUE5R3RCO0lBaUhHLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULHVCQUF1QjtJQUN2QiwrQkFBK0I7SUFDL0IsNkJBQTZCO0lBQzdCLDBDQUFrQyxFQUFBO0VBMUhyQztJQThIRyxZQUFZLEVBQUE7RUE5SGY7SUFpSUEsdUJBQXVCLEVBQUE7RUFqSXZCO0lBb0lHLDRCQUE0QixFQUFBO0VBcEkvQjtJQXdJRyxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHFCQUFxQixFQUFBO0VBMUl4QjtJQTZJQSxlQUFlLEVBQUE7RUE3SWY7SUFrSkcsb0RBQWlEO0lBQ2pELHlCQUF5QixFQUFBO0VBbko1QjtJQXdKRyxXQUFXO0lBQ1gseUJBQXlCLEVBQUE7RUF6SjVCO0lBOEpHLG9EQUFnRDtJQUNoRCxzQkFBc0IsRUFBQTtFQS9KekI7SUFtS0csZUFBYztJQUNkLFNBQVE7SUFDUixTQUFRLEVBQUE7RUFyS1g7SUF5S0ssZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix5QkFBeUIsRUFBQTtFQU83QjtJQWxMRDtNQXVMRyxtQ0FBYyxFQUFBO01BdkxqQjtRQXFMUyxhQUNELEVBQUEsRUFBQztFQUdSO0lBekxEO01BMkxHLHFDQUFnQjtNQUNsQixtQ0FBYztNQUNkLG1DQUFjO01BQ2Qsc0NBQWlCLEVBQUE7TUE5TGxCO1FBZ01TLGFBQ0QsRUFBQSxFQUFDO0VBQ047SUFsTUg7TUFzTVMsYUFDRCxFQUFBLEVBQUM7RUF2TVQ7SUE2TUEsK0JBQUE7SUE0SUEsOEJBQUE7SUFFSyx1QkFBQTtJQThVQyxzQkFBQSxFQUF1QjtFQXpxQjdCO01BeU9TLHVCQUFBO01BdUJBLGdCQUFBO01BQ0EsYUFBQTtNQXFGQSxZQUFBLEVBQWE7RUF0VnRCO1FBc05hLGtDQUFrQztRQUNsQywrQkFBK0I7UUFDL0Isa0NBQWtDO1FBQ2xDLHFDQUFvQztRQUNwQyx5QkFBeUI7UUFDekIsaUJBQWlCO1FBQ2pCLGdDQUFnQztRQUNoQyxxQ0FBb0M7UUFDcEMsb0RBQW9EO1FBQ3BELGlDQUFnQyxFQUFBO0VBQ2hDO1VBaE9iO1lBa09jLCtGQUFnRztZQUNoRyxrQ0FBa0M7WUFDbEMsWUFBVyxFQUFBLEVBRWI7RUF0T1o7UUE0T1UsOEJBQThCLEVBQUE7RUFDNUI7VUE3T1o7WUErT1ksOEJBQThCLEVBQUEsRUFnQmhDO0VBL1BWO1VBdVBtRCx5QkFDeEMsRUFBQTtFQXhQWDtVQTJQbUQseUJBQ3hDLEVBQUE7RUFRRDtRQXBRVjtVQXdRZ0QsNkJBQTZCLEVBQUE7UUF4UTdFO1VBNFE2Qyw2QkFBNEI7VUFFN0QsZUFBZSxFQUFBO1VBOVEzQjtZQWlSYyxlQUFlLEVBQUEsRUFDaEI7RUFsUmI7UUF3UmUsbUNBQW1DLEVBQUE7RUFDcEM7VUF6UmQ7WUEyUlksbUNBQW1DLEVBQUEsRUEwQ2xDO0VBclViO1VBK1JrQixnQkFBZ0I7VUFDbkIsaUNBQWdDLEVBQUE7RUFDbEM7WUFqU2I7Y0FrU2tCLG1CQUFtQjtjQUN4QixrQ0FBaUMsRUFBQSxFQUVoQztFQXJTZDtVQXdTa0Isd0NBQXdDO1VBQzNDLGlDQUFnQztVQUNoQyx3QkFBdUI7VUFDdkIsK0JBQStCLEVBQUE7RUFDL0I7WUE1U2Y7Y0E4U2lCLFlBQVc7Y0FDWCxrQkFBaUI7Y0FFakIsK0JBQStCO2NBQy9CLFlBQVc7Y0FDWCxtQ0FBYztjQUMrQixzQ0FBaUI7Y0FDL0QsZ0NBQStCLEVBQUEsRUFFakM7RUF2VGQ7VUEwVGtCLHdDQUF3QztVQUMzQyxpQ0FBaUM7VUFDakMsaUJBQWlCLEVBQUE7RUFDaEI7WUE3VGhCO2NBOFRvQixnQkFBZ0I7Y0FDbkIsWUFBVztjQUFFLGtCQUFpQjtjQUM5QiwrQkFBK0I7Y0FDL0IsWUFBVztjQUNiLGdDQUErQixFQUFBLEVBRWhDO0VBcFVkO1FBd1VjLGlCQUFhLEVBQUE7RUF4VTNCO1VBMlVlLFlBQVcsRUFBQTtFQUVaO1VBN1VkO1lBK1VpQixrQ0FBa0M7WUFDckMsOEJBQWdCO1lBQ2hCLHdCQUF3QixFQUFBLEVBRXhCO0VBblZkO01BOFZZLGdDQUFnQztNQUN0Qyx3Q0FBdUM7TUFDdkMsMkNBQXVDO01BQ3ZDLDZCQUE2QjtNQUM3QixnQkFBZ0I7TUFDaEIsbUNBQW1DO01BQ25DLGNBQUE7TUF5REEsY0FBQSxFQUFlO0VBN1pyQjtRQXVXTyxxQkFBcUI7UUFDRyxXQUFXLEVBQUE7RUFDbkM7VUF6V1A7WUEyV1EsYUFBYTtZQUNjLDZCQUE0QixFQUFBLEVBZ0R4RDtFQTVaUDtVQWdYWSxXQUFXO1VBQ2QscUNBQW9DO1VBQ04scUJBQXFCO1VBQ25ELG1DQUFtQztVQUNMLHFDQUFxQztVQUNuRSxrQkFBaUI7VUFDakIsZ0JBQWU7VUFDZixpQ0FBZ0MsRUFBQTtFQUM5QjtZQXhYWDtjQXlYYyw0QkFBNEI7Y0FDL0IsNkJBQTRCLEVBQUEsRUFpQzlCO0VBM1pUO1lBOFh3QywyQkFBMEIsRUFBQTtFQTlYbEU7WUFrWVMsb0NBQW1DO1lBQ25DLDZCQUE0QjtZQUM1QixpQkFBZ0I7WUFDaEIsa0JBQWlCLEVBQUE7RUFyWTFCO1lBeVlVLHlFQUF5RTtZQUN6RSxtQkFBbUI7WUFDbkIscUNBQXFDO1lBQ3JDLFdBQVc7WUFDWCx1QkFBd0I7WUFDeEIsa0JBQWtCO1lBQ2xCLGFBQWE7WUFDYix5QkFBeUI7WUFDekIseUJBQTBCO1lBQzFCLHdCQUF5QjtZQUN6QixjQUFjO1lBQ2QsU0FBUztZQUNULFVBQVUsRUFBQTtFQUNUO2NBdFpYO2dCQXdaWSxhQUNGLEVBQUEsRUFDQTtFQTFaVjtRQWlhVyxXQUFVO1FBQ1YsOEJBQStCO1FBTWxDLDBCQUFBO1FBWUEsMkJBQUE7UUFDQSxpQkFBQTtRQWlQQSxnQkFBQSxFQUFpQjtFQW5RakI7VUFuYVI7WUFxYVksOEJBQStCO1lBQy9CLDJCQUEwQixFQUFBLEVBaVEvQjtFQXZxQlA7VUEyYWdCLHFDQUFvQztVQUN2QyxnQ0FBZ0M7VUFDbkMsa0NBQWtDO1VBQ2xDLGlDQUFpQyxFQUFBO0VBQ2hDO1lBL2FYO2NBaWJhLGtDQUFrQyxFQUFBLEVBRW5DO0VBbmJaO1VBd2NpRCxpQkFBQTtVQTZKcEMsZ0JBQUEsRUFBaUI7RUFybUI5QjtZQTRiYyxnQ0FBZ0M7WUFDaEMsa0NBQWtDO1lBQ2xDLGlCQUFpQjtZQUNqQixnQ0FBZ0M7WUFDaEMsb0VBQXFFO1lBQ3JFLHFDQUFvQyxFQUFBO0VBQ3BDO2NBbGNkO2dCQW9jZ0Isa0NBQWtDLEVBQUEsRUFFcEM7RUF0Y2Q7WUE0Y2tCLHFDQUFvQztZQUN2Qyx5QkFBeUI7WUFDekIsaUNBQWdDO1lBQ2hDLG1EQUFvRDtZQUNwRCxrQ0FBa0M7WUFDbEMsa0NBQWtDLEVBQUE7RUFDbEM7Y0FsZGY7Z0JBb2RvQixrQ0FBa0M7Z0JBQ2Usa0NBQWtDLEVBQUEsRUFFdkY7RUF2ZGhCO1lBNmRxQixvQ0FBYztZQUNkLHVDQUFpQjtZQUN2QixnQ0FBK0I7WUFtQi9CLGdCQUFBO1lBTUMsY0FBQTtZQUNBLGNBQUE7WUFVQSxjQUFBO1lBb0NBLGFBQUE7WUFDQSxxQkFBQTtZQWlCQSxvQkFBQTtZQUNBLHdCQUFBO1lBa0JBLHFCQUFBO1lBQ0QsZUFBQTtZQXFCQSxjQUFBLEVBQWU7RUFsSWY7Y0FoZWY7Z0JBa2VzQix5Q0FBaUI7Z0JBQ3ZCLGdDQUErQjtnQkFDL0IsZ0NBQStCO2dCQUM5QixtQ0FBYztnQkFDVixzQ0FBaUI7Z0JBQ2pCLHFDQUFnQjtnQkFDaEIsbUNBQWMsRUFBQSxFQTJIckI7RUFubUJkO2NBMmVnQixpQkFBaUI7Y0FDakIsK0NBQStDLEVBQUE7RUFDL0M7Z0JBN2VoQjtrQkE4ZWlCLGlCQUFnQjtrQkFDZCxnQ0FBZ0MsRUFBQSxFQUVuQztFQWpmaEI7Y0FxZmlCLHVCQUFzQjtjQUN0Qix3QkFBdUIsRUFBQTtFQXRmeEM7Y0E0ZnNCLG1DQUFtQyxFQUFBO0VBQ3JDO2dCQTdmcEI7a0JBK2ZtQixtQ0FBbUM7a0JBQ2xDLHdCQUF3QixFQUFBLEVBRTFCO0VBbGdCbEI7Y0F3Z0JtQixnQ0FBZ0M7Y0FDaEMsa0NBQWtDO2NBQ2xDLHFDQUFvQztjQUNwQyxtQkFBbUI7Y0FDbkIsa0NBQWtDO2NBQ2xDLGtCQUFrQixFQUFBO0VBQ2xCO2dCQTlnQm5CO2tCQWdoQm9CLGtDQUFrQyxFQUFBLEVBRW5DO0VBbGhCbkI7Y0FxaEJrQixxQ0FBb0M7Y0FDcEMsbUJBQWtCO2NBQ2xCLGlDQUFpQztjQUNqQyxrQ0FBa0M7Y0FDbEMsZ0NBQWdDLEVBQUE7RUF6aEJsRDtnQkEyaEJvQixRQUFRO2dCQUNSLGtCQUFrQixFQUFBO0VBNWhCdEM7Z0JBK2hCdUIsK0JBQStCO2dCQUMvQixtQkFBa0I7Z0JBQ3JCLGdDQUFnQyxFQUFBO0VBamlCcEQ7Y0E2aUJ3QixnQ0FBZ0M7Y0FDdEMsa0NBQWtDO2NBQ2xDLGlDQUFpQztjQUNqQyxtQkFBa0I7Y0FDbEIsa0NBQWlDLEVBQUE7RUFDaEM7Z0JBbGpCbkI7a0JBb2pCc0IsZ0NBQWdDO2tCQUMwQixrQ0FBa0MsRUFBQSxFQUVoRztFQXZqQmxCO2NBNmpCdUIsK0JBQStCO2NBQ3JDLHFCQUFxQjtjQUNyQixrQ0FBa0M7Y0FDbEMsaUNBQWlDO2NBQ2pDLG1CQUFrQixFQUFBO0VBQ2xCO2dCQWxrQmpCO2tCQW9rQm9CLGtDQUFrQyxFQUFBLEVBT3JDO0VBM2tCakI7Z0JBd2tCZ0IsK0JBQStCO2dCQUMvQixxQkFBb0IsRUFBQTtFQXprQnBDO2NBZ2xCaUIsV0FBVSxFQUFBO0VBRVA7Z0JBbGxCcEI7a0JBb2xCb0Isa0NBQWtDLEVBQUEsRUFXcEM7RUEvbEJsQjtnQkF3bEJvQiw4QkFBNkI7Z0JBQzdCLGtDQUFrQyxFQUFBO0VBQ2pDO2tCQTFsQnJCO29CQTRsQm9CLGtDQUFrQyxFQUFBLEVBRXBDO0VBOWxCbEI7WUF3bUIrQyx3Q0FBd0M7WUFDNUUsMkNBQXVDO1lBQ3ZDLDhCQUE4QjtZQUM5QixxRUFBcUUsRUFBQTtFQUNyRTtjQTVtQlg7Z0JBOG1CYyw2QkFBNkI7Z0JBQ2hDLGdCQUFnQjtnQkFDaEIsNkJBQTZCO2dCQUM3QiwyQkFBMkIsRUFBQSxFQWtENUI7RUFucUJWO2NBb25CYSxrQ0FBa0M7Y0FDbEMscUNBQW9DO2NBQ3BDLGdDQUFnQztjQUNoQyxvQkFBb0I7Y0FDcEIseUJBQXlCO2NBQ3pCLGlCQUFpQjtjQUNqQiwrQkFBK0IsRUFBQTtFQUMvQjtnQkEzbkJiO2tCQTZuQmdCLGtDQUFrQztrQkFDbEMsbUJBQWtCO2tCQUNpQywrQkFBK0I7a0JBQy9CLGtDQUFrQyxFQUFBLEVBRXhGO0VBbG9CYjtjQTJvQmUseUJBQXlCO2NBQ3pCLGdDQUFnQztjQUNoQyxxQkFBcUI7Y0FDckIsa0NBQWtDO2NBQ2xDLGlDQUFpQztjQUNqQyxtREFBb0Q7Y0FDcEQscUJBQW9CLEVBQUE7RUFDcEI7Z0JBbHBCZjtrQkFxcEJpQiw2QkFBNkI7a0JBQzdCLHFCQUFxQjtrQkFDckIsa0NBQW1DLEVBQUEsRUFPcEM7RUE5cEJoQjtnQkEycEJlLDBDQUEwQztnQkFDTSw2QkFBNEIsRUFBQTtFQTVwQjNGO01BNnFCSSx3Q0FBdUM7TUFDdkMsMkNBQXVDO01BQ3ZDLDhCQUE4QjtNQUM5QixnQkFBZ0IsRUFBQTtFQUNmO1FBanJCTDtVQW1yQlcsNkJBQTRCLEVBQUEsRUFvZm5DO0VBdnFDSjtRQWt2Qkksd0JBQUE7UUFDQSw2QkFBQTtRQWtiQSw0QkFBQSxFQUE2QjtFQXJxQ2pDO1VBMnJCVyx1QkFBQTtVQTZCUCxzQkFBQTtVQUNBLHlCQUFBLEVBQTBCO0VBenRCOUI7WUE4ckJVLGdCQUFnQjtZQUNoQiw2QkFBNkI7WUFDaEMsV0FBVztZQUNYLGtCQUFrQixFQUFBO0VBanNCekI7Y0Fzc0JhLDZCQUE2QjtjQUNoQyxxQkFBcUI7Y0FDckIsa0JBQWtCO2NBQ2xCLFdBQVc7Y0FDc0IsV0FBVyxFQUFBO0VBMXNCdEQ7Z0JBNnNCeUMsMENBQTBDO2dCQUMxQyw2QkFBNkI7Z0JBQzNELFlBQVk7Z0JBQ1osV0FBVztnQkFDWCxjQUFjLEVBQUE7RUFqdEJ6QjtZQTR0QlMseUJBQXlCO1lBQzVCLFdBQVc7WUFDWCwwQ0FBMEM7WUFDMUMsa0JBQWlCLEVBQUE7RUEvdEJ2QjtjQWt1Qlcsa0JBQWtCO2NBQ3JCLHdCQUF3QjtjQUN4QiwwQkFBMEI7Y0FDMUIscUNBQW9DLEVBQUE7RUFydUI1QztnQkF3dUJRLG9DQUFtQztnQkFDbkMsNkJBQTRCO2dCQUM1QixrQ0FBa0M7Z0JBQ2xDLGtEQUFpRDtnQkFDakQsaUNBQWdDLEVBQUE7RUE1dUJ4QztVQXd2QlEsbUNBQW1DO1VBK0NuQyxlQUFBO1VBMENBLGNBQUE7VUFDQSxpQkFBQTtVQXFCQSxnQkFBQTtVQUNBLGlCQUFBO1VBZ0JBLGVBQUE7VUFDQSw2QkFBQTtVQWtCQSw0QkFBQTtVQUNBLDJCQUFBO1VBc0JBLDBCQUFBO1VBQ0EscUJBQUE7VUE0REMsb0JBQUE7VUFDQSwwQkFBQTtVQW1FQSx5QkFBQTtVQUNBLG9CQUFBO1VBd0ZBLG1CQUFBO1VBQ0gsd0JBQUE7VUFxQ0EsdUJBQUEsRUFBd0I7RUFscUM5QjtZQTJ2QlMsK0JBQStCLEVBQUE7RUFFaEM7WUE3dkJSO2NBK3ZCVSxtREFBbUQsRUFBQSxFQW9hckQ7RUFucUNSO1lBbXdCa0IsK0JBQStCO1lBQ3hDLGlCQUFpQjtZQUNqQixvQkFBb0I7WUFDcEIseUJBQXlCO1lBQ3pCLHFDQUFvQyxFQUFBO0VBdndCN0M7Y0Ewd0JVLGtDQUFpQztjQUNqQyxpQ0FBZ0MsRUFBQTtFQUMvQjtnQkE1d0JYO2tCQTh3QlUsa0NBQWlDO2tCQUFJLGtDQUFpQyxFQUFBLEVBdUJ0RTtFQXJCRjtnQkFoeEJSO2tCQWt4Qlcsa0NBQWlDO2tCQUNILGtDQUFpQyxFQUFBLEVBa0JoRTtFQXJ5QlY7Z0JBeXhCWSxpQkFBYTtnQkFDYixpQkFBaUI7Z0JBT2xCLGtDQUFrQyxFQUFBO0VBTmpDO2tCQTN4Qlo7b0JBNHhCaUIsOEJBQWdCO29CQUNwQixnQkFBZ0I7b0JBQ2pCLHdCQUF3QjtvQkFDeEIsdUJBQXVCLEVBQUEsRUFHdkI7RUFseUJaO1lBeXlCYSxhQUFhLEVBQUE7RUFDaEI7Y0ExeUJWO2dCQTR5QmUsK0JBQStCO2dCQUNLLGlDQUFpQyxFQUFBLEVBbUN6RTtFQWgxQlg7Y0FnekJhLHFDQUFvQztjQUNuQyxnQkFBZ0I7Y0FDaEIsa0NBQWtDO2NBQ2xDLGdDQUFnQztjQUNoQyxnQ0FBaUM7Y0FDakMsK0JBQThCLEVBQUE7RUFDOUI7Z0JBdHpCZDtrQkF3ekJrQixrQ0FBaUM7a0JBQ2hDLG1CQUFtQixFQUFBLEVBT3BCO0VBTEo7Z0JBM3pCZDtrQkE2ekJrQixrQ0FBaUM7a0JBQ2hDLG1CQUFtQixFQUFBLEVBRXBCO0VBaDBCbEI7Y0FrMEJZLDZCQUE2QjtjQUM3QixXQUFXO2NBQ1gsZ0JBQWdCO2NBQ2hCLGdDQUFnQztjQUNoQyxrQ0FBa0M7Y0FDbEMscUNBQW9DLEVBQUE7RUFDcEM7Z0JBeDBCWjtrQkEwMEJlLGtDQUFpQztrQkFDakMsbUJBQW1CLEVBQUEsRUFHdEI7RUE5MEJaO1lBcTFCTyxXQUFVLEVBQUE7RUFFVDtjQXYxQlI7Z0JBeTFCb0Isa0NBQWtDLEVBQUEsRUFZOUM7RUFyMkJSO2NBNjFCVSw4QkFBNkI7Y0FDN0Isa0NBQWtDLEVBQUE7RUFDbEM7Z0JBLzFCVjtrQkFpMkJXLGtDQUFpQyxFQUFBLEVBR3BDO0VBcDJCUjtZQTYyQlMsY0FBYztZQUNkLHFDQUFvQztZQUNwQyxxQkFBb0IsRUFBQTtFQUNwQjtjQWgzQlQ7Z0JBazNCVyxrQ0FBaUMsRUFBQSxFQUduQztFQXIzQlQ7WUE4M0JZLGtDQUFrQztZQUNsQyxxQ0FBb0M7WUFDdkMsZ0NBQWdDO1lBQ2hDLGdDQUFpQztZQUNqQyw2QkFBNkI7WUFDN0IsbUJBQW1CLEVBQUE7RUFuNEI1QjtjQXM0QmUsa0NBQWtDO2NBQ1IsK0JBQStCLEVBQUE7RUF2NEJ4RTtZQSs0QlksZ0NBQWdDLEVBQUE7RUEvNEI1QztjQWs1QlEsa0NBQWlDO2NBQ2pDLGdCQUFlO2NBQ2Ysa0NBQWtDLEVBQUE7RUFwNUIxQztjQXc1QmdDLHFDQUFvQztjQUM3RCxnQ0FBK0I7Y0FDUixnQ0FBaUMsRUFBQTtFQUN4RDtnQkEzNUJQO2tCQTY1Qlcsa0NBQWlDO2tCQUMvQixrQ0FBa0MsRUFBQSxFQUV2QztFQWg2QlI7WUF5N0JPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3UUUsRURpVEM7RUE3OUJWO2NBMDZCYSxrQ0FBa0M7Y0FDckMsa0NBQWtDO2NBQ2xDLGdDQUFnQztjQUNoQyxxQ0FBb0M7Y0FDcEMsaUNBQWdDLEVBQUE7RUFDaEM7Z0JBLzZCVjtrQkFpN0JZLG1DQUFtQyxFQUFBLEVBTXRDO0VBdjdCVDtnQkFxN0JXLCtCQUE4QixFQUFBO0VBcjdCekM7WUFtK0JjLGdEQUFnRDtZQUN0RCw2Q0FBNkM7WUFDN0Msd0VBQXlFLEVBQUE7RUFDekU7Y0F0K0JSO2dCQTArQmEsdUJBQXVCO2dCQUMxQix3QkFBdUI7Z0JBQ3ZCLGtCQUFrQjtnQkFDbEIsMENBQTBDO2dCQUMxQywrQkFBOEI7Z0JBQzNCLGtCQUFrQjtnQkFDckIsV0FBVztnQkFDWCx1QkFBdUIsRUFBQTtjQWovQmpDO2dCQXEvQlcsdUJBQXVCO2dCQUN4Qix3QkFBdUI7Z0JBQ3ZCLGtCQUFrQjtnQkFDbEIsMENBQTBDO2dCQUMxQywrQkFBOEI7Z0JBQzlCLGtCQUFrQjtnQkFDbEIsdUJBQXVCO2dCQUN2QixXQUFXLEVBQUE7Y0E1L0JyQjtnQkFnZ0NVLFlBQVcsRUFBQSxFQUNYO0VBamdDVjtjQW9nQ1cscUNBQW9DO2NBQ3RDLDJCQUEwQjtjQUN4QixrQ0FBa0M7Y0FDbEMsd0JBQXdCO2NBQ3hCLGtDQUFnQjtjQUNTLGlCQUFhLEVBQUE7RUFDWjtnQkExZ0NyQztrQkE0Z0NZLHdCQUF3QjtrQkFDcEIsWUFBWSxFQUFBLEVBb0JsQjtFQWpCRjtnQkFoaENSO2tCQWtoQ1Usa0NBQWtDLEVBQUEsRUFlbEM7RUFqaUNWO2dCQXNoQ1Esa0NBQWlDLEVBQUE7RUFDakM7a0JBdmhDUjtvQkF5aENTLGlDQUFnQyxFQUFBLEVBR2hDO0VBNWhDVDtnQkEraENVLFlBQVcsRUFBQTtFQS9oQ3JCO1lBdWlDVyxZQUFXLEVBQUE7RUFHZDtjQTFpQ1I7Z0JBNGlDVyxnQkFBZSxFQUFBLEVBdUNsQjtFQW5sQ1I7Y0FrakNpQixxQ0FBb0M7Y0FDdkMsaUNBQWdDO2NBQ2hDLHFCQUFxQjtjQUNZLGlDQUFpQyxFQUFBO0VBcmpDaEY7Y0EwakNhLHFCQUFxQixFQUFBO0VBMWpDbEM7Z0JBNmpDVyx1QkFBdUI7Z0JBQ3ZCLHdCQUF5QjtnQkFDekIsa0NBQWtDO2dCQUNsQyxnQ0FBZ0M7Z0JBQ2hDLGdDQUFpQztnQkFDakMsaUNBQWtDO2dCQUNsQyxxQ0FBcUM7Z0JBQ3JDLGVBQWU7Z0JBQ2Ysa0JBQWtCO2dCQUNsQiwyQ0FBMkM7Z0JBQzNDLDZCQUE2QjtnQkFDN0IscUJBQW9CO2dCQUNnQixrQkFBa0IsRUFBQTtFQUNyRDtrQkExa0NaO29CQTJrQ29CLGdDQUFpQztvQkFDcEMsdUJBQXVCO29CQUM3Qix3QkFBeUI7b0JBQ3pCLGtDQUFrQztvQkFDbEMsZ0NBQWdDLEVBQUEsRUFFaEM7RUFqbENYO2NBd2xDUyxxQ0FBb0M7Y0FDcEMsK0JBQStCO2NBQy9CLDZCQUE2QjtjQUM3QixnQkFBZ0I7Y0FDaEIsa0NBQWtDLEVBQUE7RUFDbEM7Z0JBN2xDVDtrQkErbENVLGtDQUFrQztrQkFDbEMsa0NBQWlDO2tCQUFFLGdCQUFnQixFQUFBLEVBR3BEO0VBbm1DVDtjQXNtQ2Esa0NBQWtDO2NBQ3JDLGlDQUFpQztjQUNqQyxxQ0FBb0MsRUFBQTtFQUNwQztnQkF6bUNWO2tCQTJtQ1csa0NBQWtDLEVBQUEsRUFjcEM7RUF6bkNUO2dCQSttQ2Usa0NBQWtDO2dCQUNyQyxvQ0FBbUM7Z0JBQ25DLDZCQUE0QjtnQkFDNUIsa0RBQWtEO2dCQUNsRCxpQ0FBaUMsRUFBQTtFQUNqQztrQkFwbkNaO29CQXNuQ2Msa0NBQWtDLEVBQUEsRUFFckM7RUF4bkNYO1lBZ29DVyxnREFBZ0Q7WUFDbkQsNkNBQThDO1lBQzlDLG1EQUFtRDtZQUNuRCxrQkFBa0I7WUFDbEIsV0FBVztZQUNYLFdBQVcsRUFBQTtFQXJvQ25CO2NBd29DYyxxQ0FBb0M7Y0FDdkMsa0NBQWtDO2NBQ3JDLGlDQUFpQztjQUNqQyxnQkFBZ0I7Y0FDaEIsZ0NBQWdDO2NBQ2hDLFdBQVc7Y0FDWCxrQkFBa0IsRUFBQTtFQTlvQzFCO2NBb3BDZSxrQ0FBa0M7Y0FDeEMsZ0NBQWdDO2NBQ2hDLHVCQUF3QjtjQUN4QixxQkFBcUI7Y0FDckIsY0FBYztjQUNkLDJCQUEyQjtjQUMzQixrQkFBa0IsRUFBQTtFQTFwQzNCO2dCQTZwQ08sK0JBQThCLEVBQUE7RUE3cENyQztJQTZxQ1Esa0NBQWlDLEVBQUE7RUE3cUN6QztNQWdyQ00sK0JBQStCO01BQy9CLHFCQUFvQixFQUFBO0VDaFgzQjtFRHdYSSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBO0VDclh0QjtFRHdYSSwwQkFBeUI7RUFDekIsZ0RBQWdELEVBQUE7RUNyWHBEO0VEd1hJLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuIGlvbi1jb250ZW50XHJcbnsgIFxyXG5cdFtmbnRfZGVzaWduXXtcclxuXHQgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cdCAgICByaWdodDogMTAlO1xyXG5cdCAgICBmb250LXNpemU6IDEwcHg7XHJcblx0ICAgIGNvbG9yOiAjM2UzOTM5O1xyXG5cdCAgICBib3R0b206IDJweDtcclxuXHR9XHJcblx0LnBhbmVse1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5taWtlX2ljb257XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOWYyZjIyO1xyXG4gICAgcGFkZGluZzogOXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XHJcbn1cclxuLmNoYXRfaW5wdXR7XHJcblx0cGFkZGluZy1sZWZ0OiAzN3B4O1xyXG59XHJcbi5jaGF0LXdpbmRvd3tcclxuICAgIGJvdHRvbTowO1xyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgIHotaW5kZXg6IDk7XHJcbn1cclxuLmNoYXQtd2luZG93ID4gZGl2ID4gLnBhbmVse1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XHJcbn1cclxuLnBhbmVsLWRlZmF1bHQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYTAyZjIyO1xyXG59XHJcbi5pY29uX21pbmlte1xyXG4gICAgcGFkZGluZzoycHggMTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5tc2dfY29udGFpbmVyX2Jhc2V7XHJcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMCAxMHB4IDEwcHg7XHJcbiAgbWF4LWhlaWdodDozMDBweDtcclxuICBvdmVyZmxvdy14OmhpZGRlbjtcclxufVxyXG4udG9wLWJhciB7XHJcbiAgYmFja2dyb3VuZDogI2EwMTYxNjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ubXNnX3JlY2VpdmV7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MDtcclxuICAgIG1hcmdpbi1sZWZ0OjA7XHJcbiAgICBwe1xyXG4gICAgXHRtYXJnaW46IDBweCAwcHggMC42cmVtIDA7XHJcbiAgICB9XHJcbn1cclxuLm1zZ19zZW50e1xyXG4gICAgcGFkZGluZy1ib3R0b206MjBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjA7XHJcbn1cclxuLm1lc3NhZ2VzIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIG1heC13aWR0aDoxMDAlO1xyXG59XHJcbi5tZXNzYWdlcyA+IHAge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbWFyZ2luOiAwIDAgMC4ycmVtIDA7XHJcbiAgfVxyXG4ubWVzc2FnZXMgPiB0aW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG59XHJcbi5tc2dfY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5pbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uYXZhdGFyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uYmFzZV9yZWNlaXZlID4gLmF2YXRhcjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNGRkY7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbn1cclxuXHJcbi5iYXNlX3NlbnQge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcbi5iYXNlX3NlbnQgPiAuYXZhdGFyOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoYmxhY2ssIDAuMik7IFxyXG59XHJcblxyXG4ubXNnX3NlbnQgPiB0aW1le1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5pbnB1dC1zbSwgLmZvcm0taG9yaXpvbnRhbCAuZm9ybS1ncm91cC1zbSAuZm9ybS1jb250cm9se1xyXG5cdGhlaWdodDogMzNweCAhaW1wb3J0YW50O1xyXG59XHJcbi5idG4tc20sIC5idG4tZ3JvdXAtc20+LmJ0biB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTAyZjIyO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYTAyZjIyO1xyXG59XHJcbi5idG4tcHJpbWFyeSBpb24taWNvbntcclxuXHRmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5tc2dfY29udGFpbmVyX2Jhc2U6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrXHJcbntcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcblxyXG4ubXNnX2NvbnRhaW5lcl9iYXNlOjotd2Via2l0LXNjcm9sbGJhclxyXG57XHJcbiAgICB3aWR0aDogMTJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbn1cclxuXHJcbi5tc2dfY29udGFpbmVyX2Jhc2U6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iXHJcbntcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLC4zKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XHJcbn1cclxuXHJcbi5idG4tZ3JvdXAuZHJvcHVwe1xyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICBsZWZ0OjBweDtcclxuICAgIGJvdHRvbTowO1xyXG59XHJcblx0W3JlcGx5X2NvbW1fZGl2XXtcclxuXHRcdGlvbi10ZXh0YXJlYXtcclxuXHRcdCAgICBmb250LXNpemU6IDEycHg7XHJcblx0XHQgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRcdCAgICBib3JkZXI6IDFweCBzb2xpZCAjYTAyZjIyO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWdyZXkpO1xyXG5cdFx0Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG5cdFxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjk5MXB4KVxyXG5cdFx0eyBpb24tc2xpZGVzXHJcblx0XHRcdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgaGVpZ2h0OjMwMHB4XHJcblx0XHRcdFx0XHRcdFx0XHQgfVxyXG5cdFx0ICAtLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuXHRcdH1cclxuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdHtcclxuXHQgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG5cdFx0LS1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmctMCk7XHJcblx0XHQtLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuXHRcdC0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLTApO2lvbi1zbGlkZXNcclxuXHRcdFx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCBoZWlnaHQ6MzAwcHhcclxuXHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHR9IEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweClcclxuXHRcdFx0XHRcdFx0XHQgeyAgICBcclxuXHRcdFx0XHRcdFx0XHQgICAgIGlvbi1zbGlkZXNcclxuXHRcdFx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCBoZWlnaHQ6MjAwcHhcclxuXHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdFx0IH1cclxuXHRcdC8qICBQcm9kdWN0IERldGFpbCBTdGFydCAgKi9cclxuXHRcdCAgICAgW3NpbmdsZS1wcm9kdWN0XVxyXG5cdFx0XHQge1xyXG5cdFx0XHRcdCBcclxuIC8qIFdyaXRlIFJldmlldyBTZWN0aW9uIFN0YXJ0ICovXHJcblx0XHRcdFx0XHRcdFx0XHRbcHJvZHVjdC10YWJzXSAgXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCBbcHJvZHVjdC1hZGQtcmV2aWV3XVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGg0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCZbdGl0bGVdXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE4KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTNlM2UzO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206dmFyKC0taW9uLXBhZGRpbmctMTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTgpIHZhcigtLWlvbi1wYWRkaW5nLTIwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2spO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAgdmFyKC0taW9uLXBhZGRpbmctMTUpIHZhcigtLWlvbi1wYWRkaW5nLTApIHZhcigtLWlvbi1wYWRkaW5nLTEwKSB2YXIoLS1pb24tcGFkZGluZy0xNSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlcjpub25lO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgfVx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAvKiBSZXZpZXcgVGFibGUgU3RhcnQgKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0IFtyZXZpZXctdGFibGVdXHJcblx0XHRcdFx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTIwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICB7IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTE1KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgdGFibGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IHRyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgLyogUmV2aWV3IEVuZHMgKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0IC8qRm9ybSBTdGFydCovXHJcblx0XHRcdFx0XHRcdFx0XHRcdCBmb3JtXHJcblx0XHRcdFx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW9uLWNvbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtyYXRlaXQtc21hbGxdXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItZ3JleWMpOyAgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIGlvbi1pY29uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICZbZm9ybS1jbnRdXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgW2Zvcm0tZ3JvdXBdXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHsgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMTUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0xMCk7XHRcdFx0XHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIGlvbi1sYWJlbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICBmb250LXdlaWdodDogNzAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgeyAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBpb24taW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWdyZXljKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgYm9yZGVyLXJhZGl1czp2YXIoLS1pb24tdmFsdWUtNCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIGhlaWdodDp2YXIoLS1pb24td2gtMzQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgYm9yZGVyOm5vbmU7IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICBib3JkZXItcmFkaXVzOjBweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGhlaWdodDphdXRvO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAtLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmctMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2UzZTNlMztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIGlvbi10ZXh0YXJlYVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZ3JleWMpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBib3JkZXItcmFkaXVzOiB2YXIoLS1pb24tdmFsdWUtNCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIG1pbi1oZWlnaHQ6IDExMHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB7ICAgIG1pbi1oZWlnaHQ6IGF1dG87XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGJvcmRlcjpub25lOyBib3JkZXItcmFkaXVzOjBweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0wKTsgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGhlaWdodDphdXRvO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2UzZTNlMztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIGlvbi1idXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAtLWJveC1zaGFkb3c6bm9uZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICY6aG92ZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgb3BhY2l0eTowLjg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LS1ib3JkZXItcmFkaXVzOiA0cHghaW1wb3J0YW50O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IHZhcigtLWlvbi13aC0yOCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAvKkZvcm0gRW5kcyovIFxyXG5cdFx0XHRcdFx0XHRcdFx0fVx0XHRcclxuXHRcclxuIC8qIFdyaXRlIFJldmlldyBTZWN0aW9uIEVuZHMgKi9cclxuXHRcdFx0XHQgXHJcblx0XHRcdFx0ICAvKiBQcm9kdWN0IFRhYnMgU3RhcnQgKi9cclxuXHRcdFx0XHRcdCBbcHJvZHVjdC10YWJzXVxyXG5cdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdCAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0zMCk7XHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsLjA4KTtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuXHRcdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMzApO1xyXG5cdFx0XHRcdFx0XHRcdC8qIFRhYnMgU3RhcnQqLyBcclxuXHRcdFx0XHRcdFx0XHRpb24tc2VnbWVudFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuXHRcdFx0XHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdFx0XHRcdHsgIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1x0XHRcdFx0XHRcdFx0XHRcdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHghaW1wb3J0YW50XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHQgaW9uLXNlZ21lbnQtYnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgZmxvYXQ6IGxlZnQ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmV5ZjgpO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmV5ZjgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OjYwMDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcdFx0ICBtaW4taGVpZ2h0OiB2YXIoLS1pb24td2gtMzApO1x0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBib3JkZXItcmFkaXVzOiAwcHghaW1wb3J0YW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24tbGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjp2YXIoLS1pb24tbWFyZ2luLTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICB9XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQmLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLXdoaXRlKTsgXHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvdmVyZmxvdzp2aXNpYmxlO1x0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JjphZnRlclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLXdpZHRoOiA3LjVweCA1LjVweCA3LjVweCA1LjVweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6ICB2YXIoLS1pb24td2gtMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3R0b206IC0xNXB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IHZhcigtLWlvbi12YWx1ZS0wKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJpZ2h0OiAgdmFyKC0taW9uLXZhbHVlLTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGVmdDogIHZhcigtLWlvbi12YWx1ZS0wKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dG9wOiBhdXRvOyAgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR6LWluZGV4OiAxO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgZGlzcGxheTpub25lXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0LyogVGFicyBFbmRzICovXHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0aW9uLWxpc3RcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHQgICAgY2xlYXI6Ym90aDtcclxuXHRcdFx0XHRcdFx0XHRcdCAgICBwYWRkaW5nOiB2YXIoIC0taW9uLXBhZGRpbmctMjQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBwYWRkaW5nOiB2YXIoIC0taW9uLXBhZGRpbmctMTUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIG1hcmdpbjp2YXIoLS1pb24tbWFyZ2luLTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8qIERlc2NyaXB0aW9uIFRhYiBTdGFydCAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRbZGVzY3JpcHRpb25dXHJcblx0XHRcdFx0XHRcdFx0XHRcdHsgICAgICAgXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgZm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBsaW5lLWhlaWdodDogdmFyKC0taW9uLXZhbHVlLTIwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0LyogIERlc2NyaXB0aW9uIFRhYiBFbmRzICAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBSZXZpZXcgU3RhcnQgKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0W3Byb2R1Y3QtcmV2aWV3c11cclxuXHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgaDRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCZbdGl0bGVdXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2dyZXkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IHZhcigtLWlvbi12YWx1ZS0yMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogdmFyKC0taW9uLW1hcmdpbi0wKSB2YXIoLS1pb24tbWFyZ2luLTApIDF2YXIoLS1pb24tbWFyZ2luLTEwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBSZXZpZXcgU3RhcnQgKi9cdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkcm9wZG93bi1tZWRdXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnRuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCB7ICBmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOnZhcigtLWlvbi12YWx1ZS0wKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy00KSAgdmFyKC0taW9uLXBhZGRpbmctMTIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWlvbi12YWx1ZS0zMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0W3Jldmlld3NdXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24taXRlbVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyAgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIC0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLTE1KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmctMTUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6dmFyKC0taW9uLW1hcmdpbi0yMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgICBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAtLWlvbi1jb2xvci1iYXNlOiAtLXZhcigtaW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNlM2UzZTM7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOnZhcigtLWlvbi1tYXJnaW4tMTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgLS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmctNSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgIC0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLTUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLTUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAtLXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZy01KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JltyZXZpZXctY29tbWVudF0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDgwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiAgYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Ym9yZGVyLWxlZnQ6bm9uZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1pb24tbWFyZ2luLTApO1x0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgLyogYXZhdGFyIHN0YXJ0Ki9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBpb24tYXZhdGFyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgd2lkdGg6dmFyKC0taW9uLXdoLTU1KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIGhlaWdodDp2YXIoLS1pb24td2gtNTUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAvKmF2YXRhciBlbmRzKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAvKmxhYmVsIHN0YXJ0Ki9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgbGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nLTIwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgcGFkZGluZy1sZWZ0OiB2YXIoLS1pb24tcGFkZGluZy0xMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB3aWR0aDogY2FsYygxMDAlIC0gNTVweCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIC8qdGl0bGUgc3RhcnQqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgW3Jldmlldy10aXRsZV1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgW3N1bW1hcnldXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2dyZXkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IHZhcigtLWlvbi1tYXJnaW4tMTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIFtkYXRlXVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB7ICAgICBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6bm9ybWFsO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTsgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogdmFyKC0taW9uLW1hcmdpbi01KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBpb24taWNvbiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRvcDogMXB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7ICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTsgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogdmFyKC0taW9uLW1hcmdpbi0yKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAvKnRpdGxlIGVuZHMqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIC8qIERlc2NyaXB0aW9uIFN0YXJ0Ki9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBbdGV4dF1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBwXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB7IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICBsaW5lLWhlaWdodDogdmFyKC0taW9uLXZhbHVlLTE4KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDpub3JtYWw7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTp2YXIoLS1pb24tbWFyZ2luLTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuICBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1pb24tbWFyZ2luLTApO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIC8qIERlc2NyaXB0aW9uIEVuZHMqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIC8qKlJldmlldyBBY3Rpb24gU3RhcnQgKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBbcmV2aWV3LWFjdGlvbl1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTYpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAvKlJldmlldyBBY3Rpb24gRW5kcyovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAvKiBSYXRlIFN0YXJ0ICovICAgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgW3JhdGVpdC1zbWFsbF1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgY29sb3I6I2NjYztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBpb24taWNvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IHsgXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCZbZmlsbGVkXVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBjb2xvcjp2YXIoLS1pb24tY29sb3IteWVsbG93KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IH1cdFx0XHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgLyogUmF0ZSBFbmRzICovIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LyogUmV2aWV3IEVuZHMgKi9cdFx0XHRcdFx0XHRcdFx0XHRcdCAgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0W3NpZGViYXItd2lkZ2V0XVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLDAsMCwuMDgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0yMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogdmFyKC0taW9uLW1hcmdpbi0yMCkgdmFyKC0taW9uLW1hcmdpbi0wKSB2YXIoLS1pb24tbWFyZ2luLTMwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IHZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbc2VjdGlvbi10aXRsZV0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTNlM2UzO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDEycHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1x0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXItYm90dG9tOm5vbmU7XHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTUpO1x0XHRcdFx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0wKTtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0W3NpZGViYXItd2lkZ2V0LWJvZHldXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIFt0YWctbGlzdF1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAmW2l0ZW1dXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtncmV5KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi01KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IHZhcigtLWlvbi1tYXJnaW4tNSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctNikgIHZhcigtLWlvbi1wYWRkaW5nLTEyKTsgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy00KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6ICB2YXIoLS1pb24tZm9udC1zaXplLTEwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Jjpob3ZlclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjp2YXIoLS1pb24tY29sb3Itd2hpdGUpO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8qIFJldmlldyBFbmRzICovXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0IH1cclxuXHRcdFx0ICAgIC8qIFByb2R1Y3QgVGFicyBFbmRzICovXHJcblx0XHRcdFx0IFxyXG5cdFx0XHRcdCBbZGV0YWlsLWJsb2NrXVxyXG5cdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsMCwwLC4wOCk7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0yMCk7XHJcblx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0XHRcdFx0IEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdFx0XHQgeyAgICBcclxuXHRcdFx0XHRcdFx0XHQgICAgIHBhZGRpbmc6dmFyKC0taW9uLXBhZGRpbmctMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0IFtwcm9kdWN0LXZpZXctYXJlYV1cclxuXHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdCBbYmlnLWltYWdlXVxyXG5cdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHQgICAgICAgICAvKiAgVGh1bWJuYWlscyBTdGFydCAgKi9cclxuXHRcdFx0XHRcdFx0XHQgW3RodW1ibmFpbC1tYWluXVxyXG5cdFx0XHRcdFx0XHRcdCB7IFxyXG5cdFx0XHRcdFx0XHRcdCAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG5cdFx0XHRcdFx0XHRcdCAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuXHRcdFx0XHRcdFx0XHRcdGZsb2F0OiBsZWZ0O1xyXG5cdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdFx0XHRcdFx0IHVsXHJcblx0XHRcdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgJlt0aHVtYm5haWwtbGlzdF1cclxuXHRcdFx0XHRcdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggdmFyKC0taW9uLWNvbG9yLWdyZXktZTUpIHNvbGlkO1x0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgd2lkdGg6IDEwMHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgZmxvYXQ6IGxlZnQ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBkaXNwbGF5OiBibG9jaztcdFx0XHRcdFx0XHRcdFx0XHQgIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0LyogIFRodW1ibmFpbHMgRW5kcyAgKi9cclxuXHRcdFx0XHRcdC8qICBMYXJnZSBJbWFnZSBTdGFydCAgICovXHJcblx0XHRcdFx0XHQgW2xhcmdlLWltYWdlXVxyXG5cdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0ICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XHJcblx0XHRcdFx0XHRcdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggdmFyKC0taW9uLWNvbG9yLWdyZXktZTUpIHNvbGlkO1xyXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0XHRcdFx0XHRcdHNwYW5cclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHQgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0b3A6IHZhcigtLWlvbi12YWx1ZS0xMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJpZ2h0OiB2YXIoLS1pb24tdmFsdWUtMTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdFx0XHRcdFx0XHQmW3NhbGUtdGV4dF1cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOnZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6dmFyKC0taW9uLXBhZGRpbmctMikgdmFyKC0taW9uLXBhZGRpbmctOCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6dmFyKC0taW9uLXZhbHVlLTIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0LyogIExhcmdlIEltYWdlIEVuZHMgICAqL1xyXG5cdFx0XHRcdCAvKiBQcm9kdWN0IEluZm8gQmxvY2sgIFN0YXJ0Ki9cclxuXHRcdFx0XHRcdCBbcHJvZHVjdC1pbmZvLWJsb2NrXVxyXG5cdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0IFtwcm9kdWN0LWluZm9dXHJcblx0XHRcdFx0XHRcdCB7ICAgXHJcblx0XHRcdFx0XHRcdCAgIHBhZGRpbmctbGVmdDogdmFyKC0taW9uLXBhZGRpbmctMjApO1xyXG5cdFx0XHRcdFx0XHQgICBpb24tZmFiXHJcblx0XHRcdFx0XHRcdCAgIHtcclxuXHRcdFx0XHRcdFx0ICAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdFx0XHRcdCAgIH1cclxuXHRcdFx0XHRcdFx0ICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0XHQgICB7XHJcblx0XHRcdFx0XHRcdFx0ICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApIHZhcigtLWlvbi1wYWRkaW5nLTEwKTtcclxuXHRcdFx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdFx0XHQgICBoMVxyXG5cdFx0XHRcdFx0XHQgICB7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0wKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogLTFweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdFx0XHRcdFx0XHQgICAmW25hbWVdXHJcblx0XHRcdFx0XHRcdFx0ICAgeyBcclxuXHRcdFx0XHRcdFx0XHRcdCAgIGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTM2KSA7XHJcblx0XHRcdFx0XHRcdFx0XHQgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTtcclxuXHRcdFx0XHRcdFx0XHRcdCAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTIwKSA7ICBtYXJnaW4tYm90dG9tOnZhcigtLWlvbi1tYXJnaW4tNSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTE0KSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206dmFyKC0taW9uLW1hcmdpbi01KTtcdFx0XHRcdFx0XHRcdFx0XHQgXHJcblx0XHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdFx0XHQgICBbZmF2b3JpdGUtYnV0dG9uXVxyXG5cdFx0XHRcdFx0XHRcdFx0ICAge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICBpb24tYnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICAtLWJveC1zaGFkb3c6bm9uZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBtYXJnaW4tdG9wOiAtMTZweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgeyAgICAtLWJvcmRlci1yYWRpdXM6IDJweCFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIG1hcmdpbi10b3A6IC01cHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIGhlaWdodDogdmFyKC0taW9uLXdoLTI1KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgd2lkdGg6IHZhcigtLWlvbi13aC0yNSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgXHJcblx0XHRcdFx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0XHRcdCAgIC8qIFByaWNlIFN0YXJ0Ki9cclxuXHRcdFx0XHRcdFx0ICAgXHRcdFx0ICAgICBbcHJvZHVjdC1wcmljZV1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgIGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLXZhbHVlLTIwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi12YWx1ZS01KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBbcHJpY2VdXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTMwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IHZhcigtLWlvbi12YWx1ZS01MCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogIHZhcigtLWlvbi12YWx1ZS0zKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgZm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMjApIDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHRcdFx0XHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgZm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTgpIDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHRcdFx0XHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtwcmljZS1iZWZvcmUtZGlzY291bnRdIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogI2FhYTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiB2YXIoLS1pb24tdmFsdWUtNTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xNikgO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdCAgIC8qIFByaWNlIEVuZHMqL1xyXG5cdFx0XHRcdFx0XHQgICAvKiBSYXRpbmcgU3RhcnQgKi9cclxuXHRcdFx0XHRcdFx0ICAgW3JhdGVpdC1zbWFsbF1cclxuXHRcdFx0XHRcdFx0ICAge1xyXG5cdFx0XHRcdFx0XHRcdCBjb2xvcjojY2NjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1pY29uXHJcblx0XHRcdFx0XHRcdFx0IHtAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHQmW2ZpbGxlZF1cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICBjb2xvcjp2YXIoLS1pb24tY29sb3IteWVsbG93KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTYpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIGZvbnQtc2l6ZTp2YXIoLS1pb24tZm9udC1zaXplLTEyKSA7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdCB9XHRcdFx0XHRcdFx0XHQgXHJcblx0XHRcdFx0XHRcdCAgIH1cclxuXHRcdFx0XHRcdFx0ICAgLyogUmF0aW5nIEVuZHMgKi9cclxuXHRcdFx0XHRcdFx0ICAgLyogUmV2aWV3IFN0YXJ0ICovXHJcblx0XHRcdFx0XHRcdFx0ICAgW3Jldmlld3NdXHJcblx0XHRcdFx0XHRcdFx0ICAge1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIFtsbmtdXHJcblx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogI2FhYWFhYTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xMikgO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHJcblx0ICAgXHJcblx0XHRcdFx0XHRcdFx0ICAgfVx0XHRcdFx0XHRcdFx0ICBcclxuXHRcdFx0XHRcdFx0ICAgLypSZXZpZXcgRW5kcyAqL1xyXG5cdFx0XHRcdFx0XHQgICAvKkF2YWlsYWJpbGl0eSBTZWN0aW9uIFN0YXJ0Ki8gXHJcblx0XHRcdFx0XHRcdCAgICBbc3RvY2stYm94XVxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHQgIHNwYW5cclxuXHRcdFx0XHRcdFx0XHQgIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICBmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IHZhcigtLWlvbi12YWx1ZS0xOCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhciggLS1pb24tY29sb3ItZGFya2dyZXkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJlt2YWx1ZV1cclxuXHRcdFx0XHRcdFx0XHRcdCAge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcclxuXHRcdFx0XHRcdFx0XHRcdCAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cdFx0XHRcdFx0XHRcdCAgfVx0XHRcdFx0XHRcdFx0ICBcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdCAgIC8qQXZhaWxhYmlsaXR5IFNlY3Rpb24gRW5kcyovXHJcblx0XHRcdFx0XHRcdCAgIC8qIFNob3J0IERlc2NyaXB0aW9uIFN0YXJ0Ki9cclxuXHRcdFx0XHRcdFx0ICAgW2Rlc2NyaXB0aW9uLWNvbnRhaW5lcl1cclxuXHRcdFx0XHRcdFx0ICAgeyAgICBcclxuICBcdFx0XHRcdFx0XHQgICAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMTUpO1xyXG5cdFx0XHRcdFx0XHRcdCBoMlxyXG5cdFx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHQgZm9udC1zaXplOnZhcigtLWlvbi1mb250LXNpemUtMTQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0IGZvbnQtd2VpZ2h0OjcwMDtcclxuXHRcdFx0XHRcdFx0XHRcdCBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTUpO1x0IFxyXG5cdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdCAgICAgcFxyXG5cdFx0XHRcdFx0XHRcdCB7ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1x0XHRcdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6dmFyKC0taW9uLXZhbHVlLTIwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRjb2xvcjogdmFyKCAtLWlvbi1jb2xvci1kYXJrZ3JleSk7XHJcblx0XHRcdFx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBmb250LXNpemU6dmFyKC0taW9uLWZvbnQtc2l6ZS0xMikgO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTApO1x0IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0XHRcdCB9XHRcdFx0XHRcdFx0XHQgICBcclxuXHRcdFx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdFx0XHQgICAvKiBTaG9ydCBEZXNjcmlwdGlvbiBFbmRzKi9cclxuXHRcdFx0XHRcdFx0ICAgLyogVmVuZG9yIEluZm8gU3RhcnQqL1xyXG5cdFx0XHRcdFx0XHQgICAgICBbdmVuZG9yLWluZm9dXHJcblx0XHRcdFx0XHRcdFx0ICB7XHJcblx0XHRcdFx0XHRcdFx0XHRwXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCZbdmVuZG9yLW5hbWVdXHJcblx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tNSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTEwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHQvKlt2aWRlby1tZXNzYWdlXVxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICB0ZXh0LWFsaWduOmxlZnQ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdCBwXHJcblx0XHRcdFx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICZbY29udGFjdC10eHRdXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IHsgICAgICAgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgIFx0Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1x0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLWlvbi1tYXJnaW4tNSk7IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdCBbY29udGFjdC1idG5zXVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogdmFyKC0taW9uLXdoLTI3KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAgdmFyKC0taW9uLXdoLTI3KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IHZhcigtLWlvbi12YWx1ZS0yMyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiB2YXIoIC0taW9uLW1hcmdpbi01KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiB2YXIoIC0taW9uLW1hcmdpbi01KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmtibHVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYXJrYmx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0XHRcdFx0fSovXHJcblx0XHRcdFx0XHRcdFx0ICB9XHJcblx0XHRcdFx0XHRcdCAgICAvKiBWZW5kb3IgSW5mbyBFbmRzKi9cclxuXHRcdFx0XHRcdFx0ICAgIC8qIFF1YW50aXR5IFNlY3Rpb24gU3RhcnQqL1xyXG5cdFx0XHRcdFx0XHRcdCAgW3F1YW50aXR5LWNvbnRhaW5lcl1cclxuXHRcdFx0XHRcdFx0XHQgIHsgXHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWdyZXlmMik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZ3JleWYyKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTIpICB2YXIoLS1pb24tcGFkZGluZy0wKSB2YXIoLS1pb24tcGFkZGluZy02KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0W21pbnVzLWljb25dXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgICB3aWR0aDogdmFyKC0taW9uLXdoLTIwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDp2YXIoLS1pb24td2gtMjApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1x0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGVmdDogLTc1cHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0b3A6IHZhcigtLWlvbi12YWx1ZS02KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0W2FkZC1pY29uXVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCB3aWR0aDogdmFyKC0taW9uLXdoLTIwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDp2YXIoLS1pb24td2gtMjApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1x0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0b3A6IHZhcigtLWlvbi12YWx1ZS02KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxlZnQ6IC0yMHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlcjpub25lO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0ICBpb24tYnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHQgIHsgZm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1x0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0IG1hcmdpbjp2YXIoLS1pb24tbWFyZ2luLTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTMpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICBoZWlnaHQ6dmFyKCAtLWlvbi13aC0zNCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgIC0tYm9yZGVyLXJhZGl1czp2YXIoLS1pb24tdmFsdWUtMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLWJveC1zaGFkb3c6bm9uZTtcdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIGhlaWdodDp2YXIoIC0taW9uLXdoLTMwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgIGZsb2F0OiByaWdodDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTExKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlvbi1pY29uXHJcblx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OnZhcigtLWlvbi1tYXJnaW4tMTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6dmFyKC0taW9uLW1hcmdpbi0wKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdCY6aG92ZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgIG9wYWNpdHk6MC44O1x0XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdCAgfVxyXG5cdFx0XHRcdFx0XHRcdCAgfVxyXG5cdFx0XHRcdFx0XHQgICAgLyogUXVhbnRpdHkgU2VjdGlvbiBFbmRzKi9cclxuXHRcdFx0XHRcdFx0ICAgIC8qIEJ1bGsgUHJpY2UgU3RhcnQqL1xyXG5cdFx0XHRcdFx0XHRcdCAgIFtidWxrLXNlY3Rpb25dXHJcblx0XHRcdFx0XHRcdFx0ICAgeyBcclxuXHRcdFx0XHRcdFx0XHQgICAgIGJvcmRlcjpub25lO1xyXG5cdFx0XHRcdFx0XHRcdFx0IFt2aWRlby1tZXNzYWdlXVxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICB0ZXh0LWFsaWduOmxlZnQ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdCBwXHJcblx0XHRcdFx0XHRcdFx0XHRcdCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICZbY29udGFjdC10eHRdXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IHsgICAgICAgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgIFx0Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1x0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLWlvbi1tYXJnaW4tNSk7IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdCBbY29udGFjdC1idG5zXVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogdmFyKC0taW9uLXdoLTQwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAgdmFyKC0taW9uLXdoLTQwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTIwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IHZhcigtLWlvbi12YWx1ZS00MCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiB2YXIoIC0taW9uLW1hcmdpbi01KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiB2YXIoIC0taW9uLW1hcmdpbi01KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmtibHVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYXJrYmx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0IHsgICAgICAgICAgbWFyZ2luLWxlZnQ6IHZhciggLS1pb24tbWFyZ2luLTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgd2lkdGg6IHZhcigtLWlvbi13aC0yNyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogIHZhcigtLWlvbi13aC0yNyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiB2YXIoLS1pb24tdmFsdWUtMjIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2J1bGstcHJpY2VdXHJcblx0XHRcdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRoNVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1x0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0wKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWJsYWNrKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xOCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOnZhcigtLWlvbi1tYXJnaW4tNSk7XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwXHJcblx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0wKSB2YXIoLS1pb24tcGFkZGluZy01KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiB2YXIoLS1pb24tdmFsdWUtNCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHQgfVx0XHJcblx0XHRcdFx0XHRcdFx0ICAgfVx0XHJcblx0XHRcdFx0XHRcdCAgICAvKiBCdWxrIFByaWNlIEVuZHMqL1xyXG5cdFx0XHRcdFx0XHRcdC8qIFNoYXJlIFNlY3Rpb24gU3RhcnQgKi9cclxuXHRcdFx0XHRcdFx0XHRbc2hhcmUtYm94XVxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdCAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWdyZXlmMik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlci10b3A6IDFweCBzb2xpZCAgdmFyKC0taW9uLWNvbG9yLWdyZXlmMik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTEyKSB2YXIoLS1pb24tcGFkZGluZy0wKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmbG9hdDogbGVmdDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRcdFx0W3RpdGxlXVxyXG5cdFx0XHRcdFx0XHRcdHsgICAgICAgXHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICBmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XHRcclxuXHRcdFx0XHRcdFx0XHRcdCAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiB2YXIoLS1pb24tdmFsdWUtMzApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmbG9hdDogbGVmdDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRbc29jaWFscy1ib3hdXHJcblx0XHRcdFx0XHRcdFx0eyBcclxuXHRcdFx0XHRcdFx0XHQgICBhXHJcblx0XHRcdFx0XHRcdFx0ICAge1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTYpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiB2YXIoLS1pb24tdmFsdWUtMzApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAgdmFyKC0taW9uLXdoLTMwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICNiYWJhYmE7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiB2YXIoLS1pb24tbWFyZ2luLTApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0XHRcdCY6aG92ZXJcclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcdFxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdCAgfVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdFx0XHRcdC8qIFNoYXJlIFNlY3Rpb24gRW5kcyAqL1xyXG5cdFx0XHRcdFx0XHQgIH1cclxuXHRcdFx0XHRcdCB9ICBcclxuXHRcdFx0XHRcdC8qIFByb2R1Y3QgSW5mbyBCbG9jayAgRW5kcyovXHJcblx0XHQgICAgIH1cclxuXHRcdCAgfSBcclxuXHQgICB9XHJcblx0ICAgLyogUHJvZHVjdCBTbGlkZXIgU3RhcnQqL1xyXG5cdCAgIFtwcm9kdWN0LXNsaWRlcl0gXHJcblx0ICAge1xyXG5cdFx0XHQgICBbdmVuZG9yLW5hbWVdIFxyXG5cdFx0XHQgICB7ICBtYXJnaW4tYm90dG9tOnZhcigtLWlvbi1tYXJnaW4tMCk7XHJcblx0XHRcdFx0XHQgICBhXHJcblx0XHRcdFx0XHQgICB7XHJcblx0XHRcdFx0XHRcdCBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xyXG5cdFx0XHRcdFx0XHQgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcblx0XHRcdFx0XHQgICB9XHJcblx0XHRcdCAgIH1cclxuXHRcdH1cclxuXHQgICAvKiBQcm9kdWN0IFNsaWRlciBFbmRzKi9cclxuXHRcdC8qIFByb2R1Y3QgRGV0YWlsIEVuZHMgICovXHJcbn1cdFxyXG5bcHJvZHVjdC1yZXZpZXdzXSBbcmVwbHlfY29tbV9kaXZdIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbltwcm9kdWN0LXJldmlld3NdIFtyZXBseV9jb21tX2Rpdl0gaW9uLXRleHRhcmVhIHtcclxuICAgIHBhZGRpbmc6MCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpICFpbXBvcnRhbnQ7XHJcbn1cclxuW3Byb2R1Y3QtcmV2aWV3c10gW3JlcGx5X2NvbW1fZGl2XSBidXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDZweCA4cHggNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2EwMTYxNjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWdyZXkpO1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuICAvKiAgUHJvZHVjdCBEZXRhaWwgU3RhcnQgICovXG4gIC8qIFByb2R1Y3QgU2xpZGVyIFN0YXJ0Ki9cbiAgLyogUHJvZHVjdCBTbGlkZXIgRW5kcyovXG4gIC8qIFByb2R1Y3QgRGV0YWlsIEVuZHMgICovIH1cbiAgaW9uLWNvbnRlbnQgW2ZudF9kZXNpZ25dIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwJTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICMzZTM5Mzk7XG4gICAgYm90dG9tOiAycHg7IH1cbiAgaW9uLWNvbnRlbnQgLnBhbmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7IH1cbiAgaW9uLWNvbnRlbnQgLm1pa2VfaWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogOTtcbiAgICBiYWNrZ3JvdW5kOiAjOWYyZjIyO1xuICAgIHBhZGRpbmc6IDlweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDsgfVxuICBpb24tY29udGVudCAuY2hhdF9pbnB1dCB7XG4gICAgcGFkZGluZy1sZWZ0OiAzN3B4OyB9XG4gIGlvbi1jb250ZW50IC5jaGF0LXdpbmRvdyB7XG4gICAgYm90dG9tOiAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgei1pbmRleDogOTsgfVxuICBpb24tY29udGVudCAuY2hhdC13aW5kb3cgPiBkaXYgPiAucGFuZWwge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwOyB9XG4gIGlvbi1jb250ZW50IC5wYW5lbC1kZWZhdWx0IHtcbiAgICBib3JkZXItY29sb3I6ICNhMDJmMjI7IH1cbiAgaW9uLWNvbnRlbnQgLmljb25fbWluaW0ge1xuICAgIHBhZGRpbmc6IDJweCAxMHB4O1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIGlvbi1jb250ZW50IC5tc2dfY29udGFpbmVyX2Jhc2Uge1xuICAgIGJhY2tncm91bmQ6ICNlNWU1ZTU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDAgMTBweCAxMHB4O1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgfVxuICBpb24tY29udGVudCAudG9wLWJhciB7XG4gICAgYmFja2dyb3VuZDogI2EwMTYxNjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuICBpb24tY29udGVudCAubXNnX3JlY2VpdmUge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBtYXJnaW4tbGVmdDogMDsgfVxuICAgIGlvbi1jb250ZW50IC5tc2dfcmVjZWl2ZSBwIHtcbiAgICAgIG1hcmdpbjogMHB4IDBweCAwLjZyZW0gMDsgfVxuICBpb24tY29udGVudCAubXNnX3NlbnQge1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAwOyB9XG4gIGlvbi1jb250ZW50IC5tZXNzYWdlcyB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH1cbiAgaW9uLWNvbnRlbnQgLm1lc3NhZ2VzID4gcCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbjogMCAwIDAuMnJlbSAwOyB9XG4gIGlvbi1jb250ZW50IC5tZXNzYWdlcyA+IHRpbWUge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBjb2xvcjogI2NjYzsgfVxuICBpb24tY29udGVudCAubXNnX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7IH1cbiAgaW9uLWNvbnRlbnQgaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTsgfVxuICBpb24tY29udGVudCAuYXZhdGFyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgaW9uLWNvbnRlbnQgLmJhc2VfcmVjZWl2ZSA+IC5hdmF0YXI6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyOiA1cHggc29saWQgI0ZGRjtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApOyB9XG4gIGlvbi1jb250ZW50IC5iYXNlX3NlbnQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kOyB9XG4gIGlvbi1jb250ZW50IC5iYXNlX3NlbnQgPiAuYXZhdGFyOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7IH1cbiAgaW9uLWNvbnRlbnQgLm1zZ19zZW50ID4gdGltZSB7XG4gICAgZmxvYXQ6IHJpZ2h0OyB9XG4gIGlvbi1jb250ZW50IC5pbnB1dC1zbSwgaW9uLWNvbnRlbnQgLmZvcm0taG9yaXpvbnRhbCAuZm9ybS1ncm91cC1zbSAuZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6IDMzcHggIWltcG9ydGFudDsgfVxuICBpb24tY29udGVudCAuYnRuLXNtLCBpb24tY29udGVudCAuYnRuLWdyb3VwLXNtID4gLmJ0biB7XG4gICAgcGFkZGluZzogNXB4IDEwcHggIWltcG9ydGFudDsgfVxuICBpb24tY29udGVudCAuYnRuLXByaW1hcnkge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhMDJmMjI7XG4gICAgYm9yZGVyLWNvbG9yOiAjYTAyZjIyOyB9XG4gIGlvbi1jb250ZW50IC5idG4tcHJpbWFyeSBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4OyB9XG4gIGlvbi1jb250ZW50IC5tc2dfY29udGFpbmVyX2Jhc2U6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7IH1cbiAgaW9uLWNvbnRlbnQgLm1zZ19jb250YWluZXJfYmFzZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7IH1cbiAgaW9uLWNvbnRlbnQgLm1zZ19jb250YWluZXJfYmFzZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTsgfVxuICBpb24tY29udGVudCAuYnRuLWdyb3VwLmRyb3B1cCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDBweDtcbiAgICBib3R0b206IDA7IH1cbiAgaW9uLWNvbnRlbnQgW3JlcGx5X2NvbW1fZGl2XSBpb24tdGV4dGFyZWEge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhMDJmMjI7IH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTFweCkge1xuICAgIGlvbi1jb250ZW50IHtcbiAgICAgIC0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLTApOyB9XG4gICAgICBpb24tY29udGVudCBpb24tc2xpZGVzIHtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDsgfSB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICBpb24tY29udGVudCB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xuICAgICAgLS1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmctMCk7XG4gICAgICAtLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZy0wKTtcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLTApOyB9XG4gICAgICBpb24tY29udGVudCBpb24tc2xpZGVzIHtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDsgfSB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICBpb24tY29udGVudCBpb24tc2xpZGVzIHtcbiAgICAgIGhlaWdodDogMjAwcHg7IH0gfVxuICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIHtcbiAgICAvKiBXcml0ZSBSZXZpZXcgU2VjdGlvbiBTdGFydCAqL1xuICAgIC8qIFdyaXRlIFJldmlldyBTZWN0aW9uIEVuZHMgKi9cbiAgICAvKiBQcm9kdWN0IFRhYnMgU3RhcnQgKi9cbiAgICAvKiBQcm9kdWN0IFRhYnMgRW5kcyAqLyB9XG4gICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSB7XG4gICAgICAvKiBSZXZpZXcgVGFibGUgU3RhcnQgKi9cbiAgICAgIC8qIFJldmlldyBFbmRzICovXG4gICAgICAvKkZvcm0gU3RhcnQqL1xuICAgICAgLypGb3JtIEVuZHMqLyB9XG4gICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIFtwcm9kdWN0LWFkZC1yZXZpZXddIGg0W3RpdGxlXSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMCk7XG4gICAgICAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tNSk7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xOCk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZTNlMztcbiAgICAgICAgcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLTEwKTtcbiAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMTgpIHZhcigtLWlvbi1wYWRkaW5nLTIwKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2spOyB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIFtwcm9kdWN0LWFkZC1yZXZpZXddIGg0W3RpdGxlXSB7XG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0xNSkgdmFyKC0taW9uLXBhZGRpbmctMCkgdmFyKC0taW9uLXBhZGRpbmctMTApIHZhcigtLWlvbi1wYWRkaW5nLTE1KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7IH0gfVxuICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBbcmV2aWV3LXRhYmxlXSB7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTIwKTsgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBbcmV2aWV3LXRhYmxlXSB7XG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0xNSk7IH0gfVxuICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIFtyZXZpZXctdGFibGVdIHRhYmxlIHRyIHRoIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1OyB9XG4gICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gW3Jldmlldy10YWJsZV0gdGFibGUgdHIgdGQge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7IH1cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBmb3JtIGlvbi1jb2wge1xuICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApOyB9XG4gICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gZm9ybSBbcmF0ZWl0LXNtYWxsXSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmV5Yyk7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBmb3JtIFtyYXRlaXQtc21hbGxdIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfSB9XG4gICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGZvcm1bZm9ybS1jbnRdIFtmb3JtLWdyb3VwXSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMTUpOyB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGZvcm1bZm9ybS1jbnRdIFtmb3JtLWdyb3VwXSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTEwKTsgfSB9XG4gICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gZm9ybVtmb3JtLWNudF0gW2Zvcm0tZ3JvdXBdIGlvbi1sYWJlbCB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7IH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGZvcm1bZm9ybS1jbnRdIFtmb3JtLWdyb3VwXSBpb24tbGFiZWwge1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpOyB9IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBmb3JtW2Zvcm0tY250XSBbZm9ybS1ncm91cF0gaW9uLWlucHV0IHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZ3JleWMpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWlvbi12YWx1ZS00KTtcbiAgICAgICAgICBoZWlnaHQ6IHZhcigtLWlvbi13aC0zNCk7XG4gICAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi04KTsgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gZm9ybVtmb3JtLWNudF0gW2Zvcm0tZ3JvdXBdIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTApO1xuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xuICAgICAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZy0wKTtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlM2UzZTM7IH0gfVxuICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGZvcm1bZm9ybS1jbnRdIFtmb3JtLWdyb3VwXSBpb24tdGV4dGFyZWEge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1ncmV5Yyk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0taW9uLXZhbHVlLTQpO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDExMHB4OyB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBmb3JtW2Zvcm0tY250XSBbZm9ybS1ncm91cF0gaW9uLXRleHRhcmVhIHtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMCk7XG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlM2UzZTM7IH0gfVxuICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBmb3JtW2Zvcm0tY250XSBpb24tYnV0dG9uIHtcbiAgICAgICAgLS1ib3gtc2hhZG93Om5vbmU7IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBmb3JtW2Zvcm0tY250XSBpb24tYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7IH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gZm9ybVtmb3JtLWNudF0gaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA0cHghaW1wb3J0YW50O1xuICAgICAgICAgICAgaGVpZ2h0OiB2YXIoLS1pb24td2gtMjgpOyB9IH1cbiAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIHtcbiAgICAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMzApO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0wKTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTMwKTtcbiAgICAgIC8qIFRhYnMgU3RhcnQqL1xuICAgICAgLyogVGFicyBFbmRzICovIH1cbiAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gaW9uLXNlZ21lbnQge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZsb2F0OiBsZWZ0OyB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGlvbi1zZWdtZW50IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDsgfSB9XG4gICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZ3JleWY4KTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmV5ZjgpO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTsgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogdmFyKC0taW9uLXdoLTMwKTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7IH0gfVxuICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBtYXJnaW46IHZhcigtLWlvbi1tYXJnaW4tMCk7IH1cbiAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbjphZnRlciB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogNy41cHggNS41cHggNy41cHggNS41cHg7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgaGVpZ2h0OiB2YXIoLS1pb24td2gtMCk7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IC0xNXB4O1xuICAgICAgICAgICAgd2lkdGg6IHZhcigtLWlvbi12YWx1ZS0wKTtcbiAgICAgICAgICAgIHJpZ2h0OiB2YXIoLS1pb24tdmFsdWUtMCk7XG4gICAgICAgICAgICBsZWZ0OiB2YXIoLS1pb24tdmFsdWUtMCk7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgICAgIHotaW5kZXg6IDE7IH1cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b246YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxuICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBpb24tbGlzdCB7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0yNCk7XG4gICAgICAgIC8qIERlc2NyaXB0aW9uIFRhYiBTdGFydCAqL1xuICAgICAgICAvKiAgRGVzY3JpcHRpb24gVGFiIEVuZHMgICovXG4gICAgICAgIC8qIFJldmlldyBTdGFydCAqL1xuICAgICAgICAvKiBSZXZpZXcgRW5kcyAqLyB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGlvbi1saXN0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTE1KTtcbiAgICAgICAgICAgIG1hcmdpbjogdmFyKC0taW9uLW1hcmdpbi0wKTsgfSB9XG4gICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gaW9uLWxpc3QgW2Rlc2NyaXB0aW9uXSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogdmFyKC0taW9uLXZhbHVlLTIwKTtcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTsgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gaW9uLWxpc3QgW2Rlc2NyaXB0aW9uXSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7IH0gfVxuICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGlvbi1saXN0IFtwcm9kdWN0LXJldmlld3NdIHtcbiAgICAgICAgICAvKiBSZXZpZXcgU3RhcnQgKi9cbiAgICAgICAgICAvKiBSZXZpZXcgRW5kcyAqLyB9XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBpb24tbGlzdCBbcHJvZHVjdC1yZXZpZXdzXSBoNFt0aXRsZV0ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JleSk7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogdmFyKC0taW9uLXZhbHVlLTIwKTtcbiAgICAgICAgICAgIG1hcmdpbjogdmFyKC0taW9uLW1hcmdpbi0wKSB2YXIoLS1pb24tbWFyZ2luLTApIDF2YXIgLS1pb24tbWFyZ2luLTEwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTsgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGlvbi1saXN0IFtwcm9kdWN0LXJldmlld3NdIGg0W3RpdGxlXSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTsgfSB9XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBpb24tbGlzdCBbcHJvZHVjdC1yZXZpZXdzXSBbZHJvcGRvd24tbWVkXSAuYnRuIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0taW9uLXZhbHVlLTApO1xuICAgICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctNCkgdmFyKC0taW9uLXBhZGRpbmctMTIpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMyk7IH1cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBpb24tbGlzdCBbcHJvZHVjdC1yZXZpZXdzXSBbZHJvcGRvd24tbWVkXSAuYnRuIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1pb24tdmFsdWUtMzApO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMCk7IH0gfVxuICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gaW9uLWxpc3QgW3Byb2R1Y3QtcmV2aWV3c10gW3Jldmlld3NdIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLTE1KTtcbiAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLTE1KTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMjApO1xuICAgICAgICAgICAgLyogYXZhdGFyIHN0YXJ0Ki9cbiAgICAgICAgICAgIC8qYXZhdGFyIGVuZHMqL1xuICAgICAgICAgICAgLypsYWJlbCBzdGFydCovXG4gICAgICAgICAgICAvKnRpdGxlIHN0YXJ0Ki9cbiAgICAgICAgICAgIC8qdGl0bGUgZW5kcyovXG4gICAgICAgICAgICAvKiBEZXNjcmlwdGlvbiBTdGFydCovXG4gICAgICAgICAgICAvKiBEZXNjcmlwdGlvbiBFbmRzKi9cbiAgICAgICAgICAgIC8qKlJldmlldyBBY3Rpb24gU3RhcnQgKi9cbiAgICAgICAgICAgIC8qUmV2aWV3IEFjdGlvbiBFbmRzKi9cbiAgICAgICAgICAgIC8qIFJhdGUgU3RhcnQgKi9cbiAgICAgICAgICAgIC8qIFJhdGUgRW5kcyAqLyB9XG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gaW9uLWxpc3QgW3Byb2R1Y3QtcmV2aWV3c10gW3Jldmlld3NdIGlvbi1pdGVtIHtcbiAgICAgICAgICAgICAgICAtLWlvbi1jb2xvci1iYXNlOiAtLXZhcigtaW9uLWNvbG9yLXdoaXRlKTtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZTNlMztcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTEwKTtcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZy01KTtcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZy01KTtcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLTUpO1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLTUpOyB9IH1cbiAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gaW9uLWxpc3QgW3Byb2R1Y3QtcmV2aWV3c10gW3Jldmlld3NdIGlvbi1pdGVtW3Jldmlldy1jb21tZW50XSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xuICAgICAgICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTsgfVxuICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBpb24tbGlzdCBbcHJvZHVjdC1yZXZpZXdzXSBbcmV2aWV3c10gaW9uLWl0ZW1bcmV2aWV3LWNvbW1lbnRdIHtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IHZhcigtLWlvbi1tYXJnaW4tMCk7IH0gfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBpb24tbGlzdCBbcHJvZHVjdC1yZXZpZXdzXSBbcmV2aWV3c10gaW9uLWl0ZW0gaW9uLWF2YXRhciB7XG4gICAgICAgICAgICAgIHdpZHRoOiB2YXIoLS1pb24td2gtNTUpO1xuICAgICAgICAgICAgICBoZWlnaHQ6IHZhcigtLWlvbi13aC01NSk7IH1cbiAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gaW9uLWxpc3QgW3Byb2R1Y3QtcmV2aWV3c10gW3Jldmlld3NdIGlvbi1pdGVtIGxhYmVsIHtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1pb24tcGFkZGluZy0yMCk7IH1cbiAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gaW9uLWxpc3QgW3Byb2R1Y3QtcmV2aWV3c10gW3Jldmlld3NdIGlvbi1pdGVtIGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0taW9uLXBhZGRpbmctMTApO1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDU1cHgpOyB9IH1cbiAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gaW9uLWxpc3QgW3Byb2R1Y3QtcmV2aWV3c10gW3Jldmlld3NdIGlvbi1pdGVtIFtyZXZpZXctdGl0bGVdIFtzdW1tYXJ5XSB7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2dyZXkpO1xuICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLWlvbi1tYXJnaW4tMTApO1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7IH1cbiAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gaW9uLWxpc3QgW3Byb2R1Y3QtcmV2aWV3c10gW3Jldmlld3NdIGlvbi1pdGVtIFtyZXZpZXctdGl0bGVdIFtzdW1tYXJ5XSB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpOyB9IH1cbiAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gaW9uLWxpc3QgW3Byb2R1Y3QtcmV2aWV3c10gW3Jldmlld3NdIGlvbi1pdGVtIFtyZXZpZXctdGl0bGVdIFtkYXRlXSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2JsYWNrKTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IHZhcigtLWlvbi1tYXJnaW4tNSk7IH1cbiAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBpb24tbGlzdCBbcHJvZHVjdC1yZXZpZXdzXSBbcmV2aWV3c10gaW9uLWl0ZW0gW3Jldmlldy10aXRsZV0gW2RhdGVdIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICB0b3A6IDFweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBpb24tbGlzdCBbcHJvZHVjdC1yZXZpZXdzXSBbcmV2aWV3c10gaW9uLWl0ZW0gW3Jldmlldy10aXRsZV0gW2RhdGVdIHNwYW4ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogdmFyKC0taW9uLW1hcmdpbi0yKTsgfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBpb24tbGlzdCBbcHJvZHVjdC1yZXZpZXdzXSBbcmV2aWV3c10gaW9uLWl0ZW0gW3RleHRdIHAge1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogdmFyKC0taW9uLXZhbHVlLTE4KTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2spO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTApOyB9XG4gICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGlvbi1saXN0IFtwcm9kdWN0LXJldmlld3NdIFtyZXZpZXdzXSBpb24taXRlbSBbdGV4dF0gcCB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogdmFyKC0taW9uLW1hcmdpbi0wKTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7IH0gfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBpb24tbGlzdCBbcHJvZHVjdC1yZXZpZXdzXSBbcmV2aWV3c10gaW9uLWl0ZW0gW3Jldmlldy1hY3Rpb25dIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi02KTtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cbiAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gaW9uLWxpc3QgW3Byb2R1Y3QtcmV2aWV3c10gW3Jldmlld3NdIGlvbi1pdGVtIFtyZXZpZXctYWN0aW9uXSB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpOyB9IH1cbiAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBpb24tbGlzdCBbcHJvZHVjdC1yZXZpZXdzXSBbcmV2aWV3c10gaW9uLWl0ZW0gW3Jldmlldy1hY3Rpb25dIGEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4gICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGlvbi1saXN0IFtwcm9kdWN0LXJldmlld3NdIFtyZXZpZXdzXSBpb24taXRlbSBbcmF0ZWl0LXNtYWxsXSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjY2NjOyB9XG4gICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGlvbi1saXN0IFtwcm9kdWN0LXJldmlld3NdIFtyZXZpZXdzXSBpb24taXRlbSBbcmF0ZWl0LXNtYWxsXSBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpOyB9IH1cbiAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBpb24tbGlzdCBbcHJvZHVjdC1yZXZpZXdzXSBbcmV2aWV3c10gaW9uLWl0ZW0gW3JhdGVpdC1zbWFsbF0gaW9uLWljb25bZmlsbGVkXSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci15ZWxsb3cpO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNik7IH1cbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGlvbi1saXN0IFtwcm9kdWN0LXJldmlld3NdIFtyZXZpZXdzXSBpb24taXRlbSBbcmF0ZWl0LXNtYWxsXSBpb24taWNvbltmaWxsZWRdIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTsgfSB9XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBpb24tbGlzdCBbcHJvZHVjdC1yZXZpZXdzXSBbc2lkZWJhci13aWRnZXRdIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMjApO1xuICAgICAgICAgICAgbWFyZ2luOiB2YXIoLS1pb24tbWFyZ2luLTIwKSB2YXIoLS1pb24tbWFyZ2luLTApIHZhcigtLWlvbi1tYXJnaW4tMzApOyB9XG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gaW9uLWxpc3QgW3Byb2R1Y3QtcmV2aWV3c10gW3NpZGViYXItd2lkZ2V0XSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0wKTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IHZhcigtLWlvbi1tYXJnaW4tMCk7IH0gfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbcHJvZHVjdC10YWJzXSBpb24tbGlzdCBbcHJvZHVjdC1yZXZpZXdzXSBbc2lkZWJhci13aWRnZXRdIFtzZWN0aW9uLXRpdGxlXSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTNlM2UzO1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMCk7IH1cbiAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gaW9uLWxpc3QgW3Byb2R1Y3QtcmV2aWV3c10gW3NpZGViYXItd2lkZ2V0XSBbc2VjdGlvbi10aXRsZV0ge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTUpO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0wKTsgfSB9XG4gICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtwcm9kdWN0LXRhYnNdIGlvbi1saXN0IFtwcm9kdWN0LXJldmlld3NdIFtzaWRlYmFyLXdpZGdldF0gW3NpZGViYXItd2lkZ2V0LWJvZHldIFt0YWctbGlzdF0gYVtpdGVtXSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2dyZXkpO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tNSk7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogdmFyKC0taW9uLW1hcmdpbi01KTtcbiAgICAgICAgICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctNikgdmFyKC0taW9uLXBhZGRpbmctMTIpO1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cbiAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gaW9uLWxpc3QgW3Byb2R1Y3QtcmV2aWV3c10gW3NpZGViYXItd2lkZ2V0XSBbc2lkZWJhci13aWRnZXQtYm9keV0gW3RhZy1saXN0XSBhW2l0ZW1dIHtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTQpO1xuICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEwKTsgfSB9XG4gICAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW3Byb2R1Y3QtdGFic10gaW9uLWxpc3QgW3Byb2R1Y3QtcmV2aWV3c10gW3NpZGViYXItd2lkZ2V0XSBbc2lkZWJhci13aWRnZXQtYm9keV0gW3RhZy1saXN0XSBhW2l0ZW1dOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7IH1cbiAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgICAgcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmctMjApO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIHtcbiAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0wKTsgfSB9XG4gICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0ge1xuICAgICAgICAvKiAgTGFyZ2UgSW1hZ2UgRW5kcyAgICovXG4gICAgICAgIC8qIFByb2R1Y3QgSW5mbyBCbG9jayAgU3RhcnQqL1xuICAgICAgICAvKiBQcm9kdWN0IEluZm8gQmxvY2sgIEVuZHMqLyB9XG4gICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbYmlnLWltYWdlXSB7XG4gICAgICAgICAgLyogIFRodW1ibmFpbHMgU3RhcnQgICovXG4gICAgICAgICAgLyogIFRodW1ibmFpbHMgRW5kcyAgKi9cbiAgICAgICAgICAvKiAgTGFyZ2UgSW1hZ2UgU3RhcnQgICAqLyB9XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtiaWctaW1hZ2VdIFt0aHVtYm5haWwtbWFpbl0ge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbYmlnLWltYWdlXSBbdGh1bWJuYWlsLW1haW5dIHVsW3RodW1ibmFpbC1saXN0XSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xuICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0OyB9XG4gICAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbYmlnLWltYWdlXSBbdGh1bWJuYWlsLW1haW5dIHVsW3RodW1ibmFpbC1saXN0XSBsaSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggdmFyKC0taW9uLWNvbG9yLWdyZXktZTUpIHNvbGlkO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jazsgfVxuICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbYmlnLWltYWdlXSBbbGFyZ2UtaW1hZ2VdIHtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHZhcigtLWlvbi1jb2xvci1ncmV5LWU1KSBzb2xpZDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtiaWctaW1hZ2VdIFtsYXJnZS1pbWFnZV0gc3BhbiB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgdG9wOiB2YXIoLS1pb24tdmFsdWUtMTApO1xuICAgICAgICAgICAgICByaWdodDogdmFyKC0taW9uLXZhbHVlLTEwKTtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTsgfVxuICAgICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW2JpZy1pbWFnZV0gW2xhcmdlLWltYWdlXSBzcGFuW3NhbGUtdGV4dF0ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTApO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTIpIHZhcigtLWlvbi1wYWRkaW5nLTgpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWlvbi12YWx1ZS0yKTsgfVxuICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10ge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0taW9uLXBhZGRpbmctMjApO1xuICAgICAgICAgIC8qIFByaWNlIFN0YXJ0Ki9cbiAgICAgICAgICAvKiBQcmljZSBFbmRzKi9cbiAgICAgICAgICAvKiBSYXRpbmcgU3RhcnQgKi9cbiAgICAgICAgICAvKiBSYXRpbmcgRW5kcyAqL1xuICAgICAgICAgIC8qIFJldmlldyBTdGFydCAqL1xuICAgICAgICAgIC8qUmV2aWV3IEVuZHMgKi9cbiAgICAgICAgICAvKkF2YWlsYWJpbGl0eSBTZWN0aW9uIFN0YXJ0Ki9cbiAgICAgICAgICAvKkF2YWlsYWJpbGl0eSBTZWN0aW9uIEVuZHMqL1xuICAgICAgICAgIC8qIFNob3J0IERlc2NyaXB0aW9uIFN0YXJ0Ki9cbiAgICAgICAgICAvKiBTaG9ydCBEZXNjcmlwdGlvbiBFbmRzKi9cbiAgICAgICAgICAvKiBWZW5kb3IgSW5mbyBTdGFydCovXG4gICAgICAgICAgLyogVmVuZG9yIEluZm8gRW5kcyovXG4gICAgICAgICAgLyogUXVhbnRpdHkgU2VjdGlvbiBTdGFydCovXG4gICAgICAgICAgLyogUXVhbnRpdHkgU2VjdGlvbiBFbmRzKi9cbiAgICAgICAgICAvKiBCdWxrIFByaWNlIFN0YXJ0Ki9cbiAgICAgICAgICAvKiBCdWxrIFByaWNlIEVuZHMqL1xuICAgICAgICAgIC8qIFNoYXJlIFNlY3Rpb24gU3RhcnQgKi9cbiAgICAgICAgICAvKiBTaGFyZSBTZWN0aW9uIEVuZHMgKi8gfVxuICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBpb24tZmFiIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMCk7IH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10ge1xuICAgICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0wKSB2YXIoLS1pb24tcGFkZGluZy0xMCk7IH0gfVxuICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBoMSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLTApO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpOyB9XG4gICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gaDFbbmFtZV0ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMzYpO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7IH1cbiAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBoMVtuYW1lXSB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMjApO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi01KTsgfSB9XG4gICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gaDFbbmFtZV0ge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tNSk7IH0gfVxuICAgICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gaDFbbmFtZV0gW2Zhdm9yaXRlLWJ1dHRvbl0gaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgLS1ib3gtc2hhZG93Om5vbmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTE2cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTsgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBoMVtuYW1lXSBbZmF2b3JpdGUtYnV0dG9uXSBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAycHghaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHZhcigtLWlvbi13aC0yNSk7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB2YXIoLS1pb24td2gtMjUpOyB9IH1cbiAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gW3Byb2R1Y3QtcHJpY2VdIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IH1cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIFtwcm9kdWN0LXByaWNlXSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLXZhbHVlLTIwKTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tdmFsdWUtNSk7IH0gfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIFtwcm9kdWN0LXByaWNlXSBbcHJpY2VdIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTMwKTtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLWlvbi12YWx1ZS01MCk7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogdmFyKC0taW9uLXZhbHVlLTMpO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpOyB9XG4gICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gW3Byb2R1Y3QtcHJpY2VdIFtwcmljZV0ge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTIwKTtcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7IH0gfVxuICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIFtwcm9kdWN0LXByaWNlXSBbcHJpY2VdIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xOCk7XG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsOyB9IH1cbiAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBbcHJvZHVjdC1wcmljZV0gW3ByaWNlLWJlZm9yZS1kaXNjb3VudF0ge1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgICAgICAgY29sb3I6ICNhYWE7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1pb24tdmFsdWUtNTApO1xuICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTYpO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpOyB9XG4gICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gW3Byb2R1Y3QtcHJpY2VdIFtwcmljZS1iZWZvcmUtZGlzY291bnRdIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNik7XG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsOyB9IH1cbiAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gW3JhdGVpdC1zbWFsbF0ge1xuICAgICAgICAgICAgY29sb3I6ICNjY2M7IH1cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIFtyYXRlaXQtc21hbGxdIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpOyB9IH1cbiAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBbcmF0ZWl0LXNtYWxsXSBpb24taWNvbltmaWxsZWRdIHtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci15ZWxsb3cpO1xuICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTYpOyB9XG4gICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gW3JhdGVpdC1zbWFsbF0gaW9uLWljb25bZmlsbGVkXSB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpOyB9IH1cbiAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gW3Jldmlld3NdIFtsbmtdIHtcbiAgICAgICAgICAgIGNvbG9yOiAjYWFhYWFhO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gW3Jldmlld3NdIFtsbmtdIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpOyB9IH1cbiAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gW3N0b2NrLWJveF0gc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTMpO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1pb24tdmFsdWUtMTgpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JleSk7XG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0wKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cbiAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBbc3RvY2stYm94XSBzcGFuW3ZhbHVlXSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMyk7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7IH1cbiAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gW2Rlc2NyaXB0aW9uLWNvbnRhaW5lcl0ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbi0xNSk7IH1cbiAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBbZGVzY3JpcHRpb24tY29udGFpbmVyXSBoMiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNCk7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tNSk7IH1cbiAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBbZGVzY3JpcHRpb24tY29udGFpbmVyXSBwIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLWlvbi12YWx1ZS0yMCk7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2dyZXkpOyB9XG4gICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gW2Rlc2NyaXB0aW9uLWNvbnRhaW5lcl0gcCB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbi0wKTsgfSB9XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIFt2ZW5kb3ItaW5mb10ge1xuICAgICAgICAgICAgLypbdmlkZW8tbWVzc2FnZV1cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgdGV4dC1hbGlnbjpsZWZ0O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgcFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAmW2NvbnRhY3QtdHh0XVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCB7ICAgICAgIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICBcdGZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2spO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1pb24tbWFyZ2luLTUpOyBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgW2NvbnRhY3QtYnRuc11cclxuXHRcdFx0XHRcdFx0XHRcdFx0IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IHZhcigtLWlvbi13aC0yNyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogIHZhcigtLWlvbi13aC0yNyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiB2YXIoLS1pb24tdmFsdWUtMjMpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogdmFyKCAtLWlvbi1tYXJnaW4tNSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogdmFyKCAtLWlvbi1tYXJnaW4tNSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrYmx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFya2JsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdFx0XHRcdH0qLyB9XG4gICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gW3ZlbmRvci1pbmZvXSBwW3ZlbmRvci1uYW1lXSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMyk7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tNSk7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMTApO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7IH1cbiAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBbdmVuZG9yLWluZm9dIHBbdmVuZG9yLW5hbWVdIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMTApOyB9IH1cbiAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIFt2ZW5kb3ItaW5mb10gcFt2ZW5kb3ItbmFtZV0gYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTsgfVxuICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBbcXVhbnRpdHktY29udGFpbmVyXSB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWdyZXlmMik7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWdyZXlmMik7XG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1pb24tcGFkZGluZy0xMikgdmFyKC0taW9uLXBhZGRpbmctMCkgdmFyKC0taW9uLXBhZGRpbmctNik7IH1cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIFtxdWFudGl0eS1jb250YWluZXJdIFttaW51cy1pY29uXSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHZhcigtLWlvbi13aC0yMCk7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB2YXIoLS1pb24td2gtMjApO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogLTc1cHg7XG4gICAgICAgICAgICAgICAgdG9wOiB2YXIoLS1pb24tdmFsdWUtNik7IH1cbiAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIFtxdWFudGl0eS1jb250YWluZXJdIFthZGQtaWNvbl0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiB2YXIoLS1pb24td2gtMjApO1xuICAgICAgICAgICAgICAgIGhlaWdodDogdmFyKC0taW9uLXdoLTIwKTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya3JlZCk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogdmFyKC0taW9uLXZhbHVlLTYpO1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0yMHB4OyB9XG4gICAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBbcXVhbnRpdHktY29udGFpbmVyXSBpbnB1dCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lOyB9IH1cbiAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBbcXVhbnRpdHktY29udGFpbmVyXSBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcbiAgICAgICAgICAgICAgbWFyZ2luOiB2YXIoLS1pb24tbWFyZ2luLTApO1xuICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTMpO1xuICAgICAgICAgICAgICBoZWlnaHQ6IHZhcigtLWlvbi13aC0zNCk7XG4gICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czp2YXIoLS1pb24tdmFsdWUtMik7XG4gICAgICAgICAgICAgIC0tYm94LXNoYWRvdzpub25lOyB9XG4gICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gW3F1YW50aXR5LWNvbnRhaW5lcl0gaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IHZhcigtLWlvbi13aC0zMCk7XG4gICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7IH0gfVxuICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIFtxdWFudGl0eS1jb250YWluZXJdIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTExKTsgfSB9XG4gICAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBbcXVhbnRpdHktY29udGFpbmVyXSBpb24tYnV0dG9uIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLWlvbi1tYXJnaW4tMTApOyB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIFtxdWFudGl0eS1jb250YWluZXJdIGlvbi1idXR0b24gaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLWlvbi1tYXJnaW4tMCk7IH0gfVxuICAgICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gW3F1YW50aXR5LWNvbnRhaW5lcl0gaW9uLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC44OyB9XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIFtidWxrLXNlY3Rpb25dIHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTsgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gW2J1bGstc2VjdGlvbl0gW3ZpZGVvLW1lc3NhZ2VdIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9IH1cbiAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBbYnVsay1zZWN0aW9uXSBbdmlkZW8tbWVzc2FnZV0gcFtjb250YWN0LXR4dF0ge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LTIpO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1pb24tbWFyZ2luLTUpOyB9XG4gICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gW2J1bGstc2VjdGlvbl0gW3ZpZGVvLW1lc3NhZ2VdIFtjb250YWN0LWJ0bnNdIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBbYnVsay1zZWN0aW9uXSBbdmlkZW8tbWVzc2FnZV0gW2NvbnRhY3QtYnRuc10gYSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHZhcigtLWlvbi13aC00MCk7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB2YXIoLS1pb24td2gtNDApO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0yMCk7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLWlvbi12YWx1ZS00MCk7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IHZhcigtLWlvbi1tYXJnaW4tNSk7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1pb24tbWFyZ2luLTUpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrYmx1ZSk7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFya2JsdWUpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICAgICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gW2J1bGstc2VjdGlvbl0gW3ZpZGVvLW1lc3NhZ2VdIFtjb250YWN0LWJ0bnNdIGEge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogdmFyKC0taW9uLW1hcmdpbi0wKTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHZhcigtLWlvbi13aC0yNyk7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdmFyKC0taW9uLXdoLTI3KTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEzKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLWlvbi12YWx1ZS0yMik7IH0gfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIFtidWxrLXNlY3Rpb25dIFtidWxrLXByaWNlXSBoNSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4tMCk7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYmxhY2spO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTgpOyB9XG4gICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gW2J1bGstc2VjdGlvbl0gW2J1bGstcHJpY2VdIGg1IHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xMik7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLTUpO1xuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgfSB9XG4gICAgICAgICAgICBpb24tY29udGVudCBbc2luZ2xlLXByb2R1Y3RdIFtkZXRhaWwtYmxvY2tdIFtwcm9kdWN0LXZpZXctYXJlYV0gW3Byb2R1Y3QtaW5mby1ibG9ja10gW3Byb2R1Y3QtaW5mb10gW2J1bGstc2VjdGlvbl0gW2J1bGstcHJpY2VdIHAge1xuICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTQpO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtibGFjayk7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHktMik7IH1cbiAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBbYnVsay1zZWN0aW9uXSBbYnVsay1wcmljZV0gcCB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1mb250LXNpemUtMTIpOyB9IH1cbiAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIFtidWxrLXNlY3Rpb25dIFtidWxrLXByaWNlXSBwIHNwYW4ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNik7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTApIHZhcigtLWlvbi1wYWRkaW5nLTUpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWlvbi12YWx1ZS00KTsgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBbYnVsay1zZWN0aW9uXSBbYnVsay1wcmljZV0gcCBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTEyKTsgfSB9XG4gICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIFtzaGFyZS1ib3hdIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZ3JleWYyKTtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZ3JleWYyKTtcbiAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLTEyKSB2YXIoLS1pb24tcGFkZGluZy0wKTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICAgICAgICAgIGlvbi1jb250ZW50IFtzaW5nbGUtcHJvZHVjdF0gW2RldGFpbC1ibG9ja10gW3Byb2R1Y3Qtdmlldy1hcmVhXSBbcHJvZHVjdC1pbmZvLWJsb2NrXSBbcHJvZHVjdC1pbmZvXSBbc2hhcmUtYm94XSBbdGl0bGVdIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tZm9udC1zaXplLTE0KTtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrYmxhY2spO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogdmFyKC0taW9uLXZhbHVlLTMwKTtcbiAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDsgfVxuICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIFtzaGFyZS1ib3hdIFtzb2NpYWxzLWJveF0gYSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWZvbnQtc2l6ZS0xNik7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1pb24tdmFsdWUtMzApO1xuICAgICAgICAgICAgICB3aWR0aDogdmFyKC0taW9uLXdoLTMwKTtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICBjb2xvcjogI2JhYmFiYTtcbiAgICAgICAgICAgICAgbWFyZ2luOiB2YXIoLS1pb24tbWFyZ2luLTApO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAgICAgICAgICAgaW9uLWNvbnRlbnQgW3NpbmdsZS1wcm9kdWN0XSBbZGV0YWlsLWJsb2NrXSBbcHJvZHVjdC12aWV3LWFyZWFdIFtwcm9kdWN0LWluZm8tYmxvY2tdIFtwcm9kdWN0LWluZm9dIFtzaGFyZS1ib3hdIFtzb2NpYWxzLWJveF0gYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrcmVkKTsgfVxuICBpb24tY29udGVudCBbcHJvZHVjdC1zbGlkZXJdIFt2ZW5kb3ItbmFtZV0ge1xuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4tMCk7IH1cbiAgICBpb24tY29udGVudCBbcHJvZHVjdC1zbGlkZXJdIFt2ZW5kb3ItbmFtZV0gYSB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtyZWQpO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbltwcm9kdWN0LXJldmlld3NdIFtyZXBseV9jb21tX2Rpdl0ge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDMyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuW3Byb2R1Y3QtcmV2aWV3c10gW3JlcGx5X2NvbW1fZGl2XSBpb24tdGV4dGFyZWEge1xuICBwYWRkaW5nOiAwIDEwcHggIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseS0yKSAhaW1wb3J0YW50OyB9XG5cbltwcm9kdWN0LXJldmlld3NdIFtyZXBseV9jb21tX2Rpdl0gYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZzogNnB4IDhweCA0cHg7XG4gIGJhY2tncm91bmQ6ICNhMDE2MTY7XG4gIGNvbG9yOiAjZmZmO1xuICBmbG9hdDogcmlnaHQ7IH1cbiJdfQ== */"

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
                        localStorage.setItem('sin_compare_products', "");
                        localStorage.setItem('sin_compare_products', JSON.stringify(this.comapred_products_list));
                    }
                    else {
                        if (this.compare_product_sub_cat == this.product.product_sub_cat) {
                            this.comapred_products.push(this.product_id);
                            this.comapred_products_list.push(this.product);
                            localStorage.setItem('sin_compare_products', "");
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
                localStorage.setItem('sin_compare_products', "");
                localStorage.setItem('sin_compare_products', JSON.stringify(this.comapred_products_list));
            }
        }
    };
    ProductDetailsPage.prototype.removeCompared = function (index) {
        this.comapred_products.splice(index, 1);
        this.comapred_products_list.splice(index, 1);
        localStorage.setItem('sin_compare_products', "");
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
        if (this.userId == 0) {
            this.router.navigate(['/login']);
        }
        else {
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
        }
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