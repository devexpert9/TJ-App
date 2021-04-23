(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~blog-blog-module~your-account-your-account-module"],{

/***/ "./node_modules/ckeditor4-angular/fesm2015/ckeditor4-angular.js":
/*!**********************************************************************!*\
  !*** ./node_modules/ckeditor4-angular/fesm2015/ckeditor4-angular.js ***!
  \**********************************************************************/
/*! exports provided: CKEditorComponent, CKEditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CKEditorComponent", function() { return CKEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CKEditorModule", function() { return CKEditorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var load_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! load-script */ "./node_modules/load-script/index.js");
/* harmony import */ var load_script__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(load_script__WEBPACK_IMPORTED_MODULE_3__);





/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
let promise;
function getEditorNamespace(editorURL) {
    if (editorURL.length < 1) {
        return Promise.reject(new TypeError('CKEditor URL must be a non-empty string.'));
    }
    if ('CKEDITOR' in window) {
        return Promise.resolve(CKEDITOR);
    }
    else if (!promise) {
        promise = new Promise((scriptResolve, scriptReject) => {
            load_script__WEBPACK_IMPORTED_MODULE_3___default()(editorURL, err => {
                if (err) {
                    scriptReject(err);
                }
                else {
                    scriptResolve(CKEDITOR);
                }
                promise = undefined;
            });
        });
    }
    return promise;
}

/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
class CKEditorComponent {
    constructor(elementRef, ngZone) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        /**
         * Tag name of the editor component.
         *
         * The default tag is `textarea`.
         */
        this.tagName = 'textarea';
        /**
         * The type of the editor interface.
         *
         * By default editor interface will be initialized as `classic` editor.
         * You can also choose to create an editor with `inline` interface type instead.
         *
         * See https://ckeditor.com/docs/ckeditor4/latest/guide/dev_uitypes.html
         * and https://ckeditor.com/docs/ckeditor4/latest/examples/fixedui.html
         * to learn more.
         */
        this.type = "classic" /* CLASSIC */;
        /**
         * Fires when the editor is ready. It corresponds with the `editor#instanceReady`
         * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-instanceReady
         * event.
         */
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires when the editor data is loaded, e.g. after calling setData()
         * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#method-setData
         * editor's method. It corresponds with the `editor#dataReady`
         * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-dataReady event.
         */
        this.dataReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires when the content of the editor has changed. It corresponds with the `editor#change`
         * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-change
         * event. For performance reasons this event may be called even when data didn't really changed.
         * Please note that this event will only be fired when `undo` plugin is loaded. If you need to
         * listen for editor changes (e.g. for two-way data binding), use `dataChange` event instead.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires when the content of the editor has changed. In contrast to `change` - only emits when
         * data really changed thus can be successfully used with `[data]` and two way `[(data)]` binding.
         *
         * See more: https://angular.io/guide/template-syntax#two-way-binding---
         */
        this.dataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires when the native dragStart event occurs. It corresponds with the `editor#dragstart`
         * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-dragstart
         * event.
         */
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires when the native dragEnd event occurs. It corresponds with the `editor#dragend`
         * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-dragend
         * event.
         */
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires when the native drop event occurs. It corresponds with the `editor#drop`
         * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-drop
         * event.
         */
        this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires when the file loader response is received. It corresponds with the `editor#fileUploadResponse`
         * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-fileUploadResponse
         * event.
         */
        this.fileUploadResponse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires when the file loader should send XHR. It corresponds with the `editor#fileUploadRequest`
         * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-fileUploadRequest
         * event.
         */
        this.fileUploadRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires when the editing area of the editor is focused. It corresponds with the `editor#focus`
         * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-focus
         * event.
         */
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires after the user initiated a paste action, but before the data is inserted.
         * It corresponds with the `editor#paste`
         * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-paste
         * event.
         */
        this.paste = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires after the `paste` event if content was modified. It corresponds with the `editor#afterPaste`
         * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-afterPaste
         * event.
         */
        this.afterPaste = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires when the editing view of the editor is blurred. It corresponds with the `editor#blur`
         * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-blur
         * event.
         */
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * If the component is read–only before the editor instance is created, it remembers that state,
         * so the editor can become read–only once it is ready.
         */
        this._readOnly = null;
        this._data = null;
        this._destroyed = false;
        /**
         * CKEditor 4 script url address. Script will be loaded only if CKEDITOR namespace is missing.
         *
         * Defaults to 'https://cdn.ckeditor.com/4.16.0/standard-all/ckeditor.js'
         */
        this.editorUrl = 'https://cdn.ckeditor.com/4.16.0/standard-all/ckeditor.js';
    }
    /**
     * Keeps track of the editor's data.
     *
     * It's also decorated as an input which is useful when not using the ngModel.
     *
     * See https://angular.io/api/forms/NgModel to learn more.
     */
    set data(data) {
        if (data === this._data) {
            return;
        }
        if (this.instance) {
            this.instance.setData(data);
            // Data may be changed by ACF.
            this._data = this.instance.getData();
            return;
        }
        this._data = data;
    }
    get data() {
        return this._data;
    }
    /**
     * When set to `true`, the editor becomes read-only.
     *
     * See https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#property-readOnly
     * to learn more.
     */
    set readOnly(isReadOnly) {
        if (this.instance) {
            this.instance.setReadOnly(isReadOnly);
            return;
        }
        // Delay setting read-only state until editor initialization.
        this._readOnly = isReadOnly;
    }
    get readOnly() {
        if (this.instance) {
            return this.instance.readOnly;
        }
        return this._readOnly;
    }
    ngAfterViewInit() {
        getEditorNamespace(this.editorUrl).then(() => {
            // Check if component instance was destroyed before `ngAfterViewInit` call (#110).
            // Here, `this.instance` is still not initialized and so additional flag is needed.
            if (this._destroyed) {
                return;
            }
            this.ngZone.runOutsideAngular(this.createEditor.bind(this));
        }).catch(window.console.error);
    }
    ngOnDestroy() {
        this._destroyed = true;
        this.ngZone.runOutsideAngular(() => {
            if (this.instance) {
                this.instance.destroy();
                this.instance = null;
            }
        });
    }
    writeValue(value) {
        this.data = value;
    }
    registerOnChange(callback) {
        this.onChange = callback;
    }
    registerOnTouched(callback) {
        this.onTouched = callback;
    }
    createEditor() {
        const element = document.createElement(this.tagName);
        this.elementRef.nativeElement.appendChild(element);
        const instance = this.type === "inline" /* INLINE */
            ? CKEDITOR.inline(element, this.config)
            : CKEDITOR.replace(element, this.config);
        instance.once('instanceReady', evt => {
            this.instance = instance;
            // Read only state may change during instance initialization.
            this.readOnly = this._readOnly !== null ? this._readOnly : this.instance.readOnly;
            this.subscribe(this.instance);
            const undo = instance.undoManager;
            if (this.data !== null) {
                undo && undo.lock();
                instance.setData(this.data, { callback: () => {
                        // Locking undoManager prevents 'change' event.
                        // Trigger it manually to updated bound data.
                        if (this.data !== instance.getData()) {
                            undo ? instance.fire('change') : instance.fire('dataReady');
                        }
                        undo && undo.unlock();
                        this.ngZone.run(() => {
                            this.ready.emit(evt);
                        });
                    } });
            }
            else {
                this.ngZone.run(() => {
                    this.ready.emit(evt);
                });
            }
        });
    }
    subscribe(editor) {
        editor.on('focus', evt => {
            this.ngZone.run(() => {
                this.focus.emit(evt);
            });
        });
        editor.on('paste', evt => {
            this.ngZone.run(() => {
                this.paste.emit(evt);
            });
        });
        editor.on('afterPaste', evt => {
            this.ngZone.run(() => {
                this.afterPaste.emit(evt);
            });
        });
        editor.on('dragend', evt => {
            this.ngZone.run(() => {
                this.dragEnd.emit(evt);
            });
        });
        editor.on('dragstart', evt => {
            this.ngZone.run(() => {
                this.dragStart.emit(evt);
            });
        });
        editor.on('drop', evt => {
            this.ngZone.run(() => {
                this.drop.emit(evt);
            });
        });
        editor.on('fileUploadRequest', evt => {
            this.ngZone.run(() => {
                this.fileUploadRequest.emit(evt);
            });
        });
        editor.on('fileUploadResponse', evt => {
            this.ngZone.run(() => {
                this.fileUploadResponse.emit(evt);
            });
        });
        editor.on('blur', evt => {
            this.ngZone.run(() => {
                if (this.onTouched) {
                    this.onTouched();
                }
                this.blur.emit(evt);
            });
        });
        editor.on('dataReady', this.propagateChange, this);
        if (this.instance.undoManager) {
            editor.on('change', this.propagateChange, this);
        }
        // If 'undo' plugin is not loaded, listen to 'selectionCheck' event instead. (#54).
        else {
            editor.on('selectionCheck', this.propagateChange, this);
        }
    }
    propagateChange(event) {
        this.ngZone.run(() => {
            const newData = this.instance.getData();
            if (event.name === 'change') {
                this.change.emit(event);
            }
            else if (event.name === 'dataReady') {
                this.dataReady.emit(event);
            }
            if (newData === this.data) {
                return;
            }
            this._data = newData;
            this.dataChange.emit(newData);
            if (this.onChange) {
                this.onChange(newData);
            }
        });
    }
}
CKEditorComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ckeditor',
                template: '<ng-template></ng-template>',
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => CKEditorComponent),
                        multi: true,
                    }
                ]
            },] }
];
CKEditorComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
CKEditorComponent.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    tagName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    readOnly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    dataReady: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    dataChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    dragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    dragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    drop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    fileUploadResponse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    fileUploadRequest: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    paste: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    afterPaste: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    editorUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
class CKEditorModule {
}
CKEditorModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [CKEditorComponent],
                exports: [CKEditorComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ckeditor4-angular.js.map


/***/ }),

/***/ "./node_modules/load-script/index.js":
/*!*******************************************!*\
  !*** ./node_modules/load-script/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = function load (src, opts, cb) {
  var head = document.head || document.getElementsByTagName('head')[0]
  var script = document.createElement('script')

  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  opts = opts || {}
  cb = cb || function() {}

  script.type = opts.type || 'text/javascript'
  script.charset = opts.charset || 'utf8';
  script.async = 'async' in opts ? !!opts.async : true
  script.src = src

  if (opts.attrs) {
    setAttributes(script, opts.attrs)
  }

  if (opts.text) {
    script.text = '' + opts.text
  }

  var onend = 'onload' in script ? stdOnEnd : ieOnEnd
  onend(script, cb)

  // some good legacy browsers (firefox) fail the 'in' detection above
  // so as a fallback we always set onload
  // old IE will ignore this and new IE will set onload
  if (!script.onload) {
    stdOnEnd(script, cb);
  }

  head.appendChild(script)
}

function setAttributes(script, attrs) {
  for (var attr in attrs) {
    script.setAttribute(attr, attrs[attr]);
  }
}

function stdOnEnd (script, cb) {
  script.onload = function () {
    this.onerror = this.onload = null
    cb(null, script)
  }
  script.onerror = function () {
    // this.onload = null here is necessary
    // because even IE9 works not like others
    this.onerror = this.onload = null
    cb(new Error('Failed to load ' + this.src), script)
  }
}

function ieOnEnd (script, cb) {
  script.onreadystatechange = function () {
    if (this.readyState != 'complete' && this.readyState != 'loaded') return
    this.onreadystatechange = null
    cb(null, script) // there is no way to catch loading errors in IE8
  }
}


/***/ })

}]);
//# sourceMappingURL=default~blog-blog-module~your-account-your-account-module.js.map